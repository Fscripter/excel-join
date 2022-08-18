import { connect } from 'react-redux';
import { NextBtn } from '../nextBtn';
import { goNext } from 'store/steps/action';
import './index.scss';
import TablePreview from './tablePreview/tablePreview';

function SelectBox(props) {
  const { data, name } = props;
  return (
    <div className="content-select">
      <h5>Selecciona la columna a comparar</h5>
      <span>valores de: Archivo {name}</span>
      <div className="content-select-frame">
        <TablePreview file={data} indexFile={name} />
      </div>
    </div>
  );
}

function Select(props) {
  let done = false;
  if (
    props.selectionReducer.idColA !== null &&
    props.selectionReducer.idColB !== null
  ) {
    done = true;
  }
  const { fileA, fileB } = props.uploadReducer;
  return (
    <div className="Selection">
      <div className="title">
        <h4>Seleccionar archivos</h4>
        <span>Lorem ipsum dolor </span>
      </div>
      <div className="content">
        <SelectBox data={fileA} name="A" />
        <SelectBox data={fileB} name="B" />
      </div>
      <div className="next">
        <NextBtn allowed={done} clickable={props.goNext} />
      </div>
    </div>
  );
}
export default connect(
  (state) => {
    return state;
  },
  { goNext }
)(Select);
