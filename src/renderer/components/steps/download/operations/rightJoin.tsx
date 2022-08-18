import { utils } from 'xlsx';
import { getArrayData, getDic, getRow } from './utils';

interface FileSettings {
  file: any;
  col: number;
}

export default function rightJoin(
  fileASettings: FileSettings,
  fileBSettings: FileSettings
) {
  const dicA = getDic(fileASettings.file, fileASettings.col);
  const dicB = getDic(fileBSettings.file, fileBSettings.col);

  const arrB = getArrayData(fileBSettings.file, fileBSettings.col);

  let rows = [];

  arrB.map((element) => {
    let isIn: boolean = dicA.hasOwnProperty(element);

    if (!isIn) {
      let decodeCell = utils.decode_cell(dicB[element]);
      let rowCopy = decodeCell.r;
      let rowData = getRow(fileBSettings.file, rowCopy);
      rows.push(rowData);
    }
  });

  return rows;
}
