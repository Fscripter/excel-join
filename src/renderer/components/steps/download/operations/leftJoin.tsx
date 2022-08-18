import { utils } from 'xlsx';
import { getArrayData, getDic, getRow } from './utils';

interface FileSettings {
  file: any;
  col: number;
}

export default function leftJoin(
  fileASettings: FileSettings,
  fileBSettings: FileSettings
) {
  const dicA = getDic(fileASettings.file, fileASettings.col);
  const dicB = getDic(fileBSettings.file, fileBSettings.col);

  const arrA = getArrayData(fileASettings.file, fileASettings.col);

  let rows = [];

  arrA.map((element) => {
    let isIn: boolean = dicB.hasOwnProperty(element);

    if (!isIn) {
      let decodeCell = utils.decode_cell(dicA[element]);
      let rowCopy = decodeCell.r;
      let rowData = getRow(fileASettings.file, rowCopy);
      rows.push(rowData);
    }
  });

  return rows;
}
