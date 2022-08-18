import { connect } from 'react-redux';
import { utils, writeFileXLSX } from 'xlsx';
import innerJoin from './operations/innerJoin';
import leftJoin from './operations/leftJoin';
import outerJoin from './operations/outerJoin';
import rightJoin from './operations/rightJoin';
import { addHeader } from './operations/utils';
import './index.scss';
import HTMLReactParser from 'html-react-parser';
import DownloadImg from '../../../../../assets/Buttons/download.png';
import RestartImg from '../../../../../assets/Buttons/reload.png';

function showTable(worksheet) {
  let head = '<table>';
  const worksheetSize = utils.decode_range(worksheet['!ref']);
  const MaxCol = worksheetSize.e.c;
  const MaxRow = 10;

  for (let row = 0; row < MaxRow; row += 1) {
    let rowText = '<tr>';
    for (let col = 0; col <= MaxCol; col += 1) {
      let cellUncoded = { c: col, r: row };
      let cellCoded = utils.encode_cell(cellUncoded);
      if (worksheet[cellCoded] !== undefined) {
        rowText += `<td>${worksheet[cellCoded].v}</td>`;
      }
    }
    rowText += '</tr>';
    head += rowText;
  }

  head += '</table>';
  return head;
}

function DownloadButton(props) {
  const { file } = props;

  function handle() {
    writeFileXLSX(file, 'resultado.xlsx');
  }

  return (
    <div className="Descargando-options-btn download" onClick={handle}>
      <p>Descargar</p>
      <img src={DownloadImg} alt="Descargar" />
    </div>
  );
}
function RestartButton(props) {
  function reload() {
    window.location.reload();
  }
  return (
    <div className="Descargando-options-btn restart" onClick={reload}>
      <p>Reiniciar</p>
      <img src={RestartImg} alt="Reiniciar" />
    </div>
  );
}

function Download(props) {
  let fileASettings = {
    file: props.uploadReducer.fileA,
    col: props.selectionReducer.idColA,
  };
  let fileBSettings = {
    file: props.uploadReducer.fileB,
    col: props.selectionReducer.idColB,
  };
  let row = [];
  switch (props.searchReducer.operation) {
    case 'Inner Join':
      row = innerJoin(fileASettings, fileBSettings);
      row = addHeader({ a: fileASettings, b: fileBSettings }, row);
      break;

    case 'Outer Join':
      row = outerJoin(fileASettings, fileBSettings);
      row = addHeader({ a: fileASettings, b: fileBSettings }, row);
      break;

    case 'Left Join':
      row = leftJoin(fileASettings, fileBSettings);
      row = addHeader({ a: fileASettings, b: undefined }, row);
      break;
    case 'Right Join':
      row = rightJoin(fileASettings, fileBSettings);
      row = addHeader({ a: undefined, b: fileBSettings }, row);
      break;
    default:
      break;
  }
  const workbook = utils.book_new();
  const worksheet = utils.aoa_to_sheet(row);
  utils.book_append_sheet(workbook, worksheet, 'resultado');

  const table = showTable(worksheet);
  console.log(table);
  function handle() {
    writeFileXLSX(workbook, 'resultado.xlsx');
    console.log('hi');
  }
  return (
    <div className="Descargando">
      <div className="Descargando-title">
        <h1>Resultado</h1>
      </div>
      <div className="Descargando-subtitle">
        <p>
          {row.length > 14
            ? 'Vista previa (Solo se muestran las primeras 10 filas) '
            : 'Vista previa del resultado'}
        </p>
      </div>
      <div className="Descargando-preview">{HTMLReactParser(table)}</div>
      <div className="Descargando-options">
        <RestartButton />
        <DownloadButton file={workbook} />
      </div>
    </div>
  );
}

export default connect((state) => {
  return state;
}, null)(Download);
