import { connect } from 'react-redux';
import { selectCol } from 'store/selection/action';
import { utils } from 'xlsx';
import './table.scss';

function OptionTable(props) {
  const { column, element, handler, indexFile, unique } = props;

  function handleClick() {
    if (unique) {
      handler(indexFile);
      return;
    }
    handler(indexFile, column);
  }
  return (
    <div
      className={unique ? 'component component-selected' : 'component'}
      onClick={handleClick}
    >
      <p>{element}</p>
    </div>
  );
}

interface ITable {
  file: any;
  indexFile: string;
  state: any;
  selectCol: () => void;
  idColA: number | null | undefined;
  idColB: number | null | undefined;
}

function TablePreview(props: ITable) {
  console.log(props);
  const { file, indexFile, idColA, idColB, selectCol } = props;
  const workbook = file;
  const wsnames = workbook.SheetNames;
  const worksheet = workbook.Sheets[wsnames[0]];
  const worksheetSize = utils.decode_range(worksheet['!ref']);
  const maxCol = worksheetSize.e.c;

  let text: Array<string> = [];
  for (let index = 0; index <= maxCol; index += 1) {
    let cellUncoded = { c: index, r: 0 };
    let cellCoded = utils.encode_cell(cellUncoded);
    text.push(worksheet[cellCoded]?.v);
  }

  if (indexFile === 'A') {
    if (idColA === null) {
      return (
        <div className="tablePreview">
          {text.map(function (element, index) {
            if (element === undefined) {
              return null;
            }
            return (
              <OptionTable
                element={element}
                column={index}
                indexFile={indexFile}
                handler={selectCol}
              />
            );
          })}
        </div>
      );
    }
    return (
      <div className="tablePreview">
        {text.map(function (element, index) {
          if (index === idColA) {
            return (
              <OptionTable
                element={element}
                column={index}
                indexFile={indexFile}
                handler={selectCol}
                unique={true}
              />
            );
          }
        })}
      </div>
    );
  }
  if (idColB === null) {
    return (
      <div className="tablePreview">
        {text.map(function (element, index) {
          if (element === undefined) {
            return null;
          }
          return (
            <OptionTable
              element={element}
              column={index}
              indexFile={indexFile}
              handler={selectCol}
            />
          );
        })}
      </div>
    );
  }
  return (
    <div className="tablePreview">
      {text.map(function (element, index) {
        if (index === idColB) {
          return (
            <OptionTable
              element={element}
              column={index}
              indexFile={indexFile}
              handler={selectCol}
              unique={true}
            />
          );
        }
      })}
    </div>
  );
}
export default connect(
  (state) => {
    return state.selectionReducer;
  },
  { selectCol }
)(TablePreview);
