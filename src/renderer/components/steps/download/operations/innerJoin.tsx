import { utils } from 'xlsx';
import { getArrayData, getDic, getRow } from './utils';

interface FileSettings {
  file: any;
  col: number;
}

export default function innerJoin(
  fileASettings: FileSettings,
  fileBSettings: FileSettings
) {
  console.log(fileASettings, fileBSettings);
  const dicA = getDic(fileASettings.file, fileASettings.col);
  const dicB = getDic(fileBSettings.file, fileBSettings.col);

  const arrB = getArrayData(fileBSettings.file, fileBSettings.col);

  let rows = [];

  arrB.map((valor) => {
    if (dicA.hasOwnProperty(valor)) {
      const decodeCell = utils.decode_cell(dicA[valor]);
      const rowCopy = decodeCell.r;
      const rowData = getRow(fileASettings.file, rowCopy);

      const decodeCellB = utils.decode_cell(dicB[valor]);
      const rowCopyB = decodeCellB.r;
      const totalData = rowData.concat(getRow(fileBSettings.file, rowCopyB));
      rows.push(totalData);
    }
  });
  return rows;
}
