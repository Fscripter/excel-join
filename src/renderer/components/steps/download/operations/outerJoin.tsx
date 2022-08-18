import { utils } from 'xlsx';
import { getArrayData, getDic, getRow } from './utils';

interface FileSettings {
  file: any;
  col: number;
}

export default function outerJoin(
  fileASettings: FileSettings,
  fileBSettings: FileSettings
) {
  const dicA = getDic(fileASettings.file, fileASettings.col);
  const dicB = getDic(fileBSettings.file, fileBSettings.col);

  const arrA = getArrayData(fileASettings.file, fileASettings.col);
  const arrB = getArrayData(fileBSettings.file, fileBSettings.col);

  let rows = [];
  const whiteSpacesA = new Array(arrB.length - 1).fill('-');

  arrA.map((element) => {
    let isIn = dicB.hasOwnProperty(element);
    if (!isIn) {
      let decodeCell = utils.decode_cell(dicA[element]);
      let rowCopy = decodeCell.r;
      let rowData = getRow(fileASettings.file, rowCopy);
      const totalArr = rowData.concat(whiteSpacesA);

      rows.push(totalArr);
    }
  });

  const whiteSpaces = new Array(arrA.length - 1).fill('-');

  arrB.map((element) => {
    const isIn = dicA.hasOwnProperty(element);
    if (!isIn) {
      const decodeCell = utils.decode_cell(dicB[element]);
      const rowCopy = decodeCell.r;
      const rowData = getRow(fileBSettings.file, rowCopy);
      const totalArr = whiteSpaces.concat(rowData);
      rows.push(totalArr);
    }
  });

  return rows;
}
