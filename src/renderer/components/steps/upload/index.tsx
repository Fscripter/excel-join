import './index.scss';
import { useState } from 'react';
import { connect } from 'react-redux';
import { fileUploaded } from 'store/upload/action';
import { goNext } from 'store/steps/action';

//  Load images
import upload from '../../../../../assets/Buttons/upload.png';
import excel from '../../../../../assets/Buttons/excel.png';
import close from '../../../../../assets/Buttons/close.png';
import { NextBtn } from '../nextBtn/index';
//  Interfaces
interface IFile {
  id: string;
  sender: (label: string, data: ArrayBuffer | null, detected: boolean) => void;
}
interface IUpload {
  fileUploaded: () => void;
  goNext: () => void;
  fileA: ArrayBuffer | null | undefined;
  fileB: ArrayBuffer | null | undefined;
}

function DragAndDrop(props) {
  const { id, clickable, handleFile } = props;

  const changeValue = (event) => {
    const reader = new FileReader();
    reader.readAsArrayBuffer(event.target.files[0]);
    reader.addEventListener('load', (result) => {
      const data = result.target?.result;
      handleFile(event.target.files[0].name);
      clickable(id, data);
    });
  };
  return (
    <div className="dragFile">
      <img src={upload} alt="" />
      <p>Arrastra y suelta el archivo aqui</p>
      <span>o</span>
      <input
        type="file"
        id={`FILE_${id}`}
        onChange={changeValue}
        accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
      />
      <span>examina el equipo</span>
    </div>
  );
}
function Preview(props: {
  title: string | null | undefined;
  handleFile: (data: boolean | string) => void;
}) {
  const { title, handleFile } = props;
  return (
    <div className="dragFile-active">
      <div className="dragFile-active-box">
        <img src={excel} alt="Excel" />
        <div className="dragFile-active-box-text">
          <p>{title}</p>
        </div>
        <img
          src={close}
          className="closeBox"
          onClick={() => {
            handleFile(false);
          }}
          alt=""
        />
      </div>
    </div>
  );
}
function File(props: IFile) {
  const { id, sender } = props;
  const [name, setState] = useState<string | null>(null);

  function handleFile(newName: string) {
    if (newName) {
      setState(newName);
      return;
    }
    sender(id, null, true);
    setState(null);
  }

  if (name !== null) {
    return <Preview title={name} handleFile={handleFile} />;
  }
  return <DragAndDrop id={id} clickable={sender} handleFile={handleFile} />;
}

function Upload(props: IUpload) {
  const { fileUploaded, goNext, fileA, fileB } = props;
  let done = false;
  if (fileA !== null && fileB !== null) {
    done = true;
  }
  return (
    <div className="upload">
      <div className="title">
        <h4>Cargar archivos</h4>
        <span>Aqui cargaremos los excels</span>
      </div>
      <div className="content">
        <File id="A" sender={fileUploaded} />
        <File id="B" sender={fileUploaded} />
      </div>
      <div className="next">
        <NextBtn allowed={done} clickable={goNext} />
      </div>
    </div>
  );
}
export default connect(
  (state) => {
    return state.uploadReducer;
  },
  { fileUploaded, goNext }
)(Upload);
