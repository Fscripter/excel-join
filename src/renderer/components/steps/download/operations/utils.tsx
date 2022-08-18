import { utils } from 'xlsx';

function getDic(file, column) {
  const workbook = file;
  const wsnames = workbook.SheetNames;
  const worksheet = workbook.Sheets[wsnames[0]];
  const worksheetSize = utils.decode_range(worksheet['!ref']);
  const MaxRow = worksheetSize.e.r;

  let tablaHash = {};

  for (let row = 1; row <= MaxRow; row += 1) {
    let cellUncoded = { c: column, r: row };
    let cellCoded = utils.encode_cell(cellUncoded);
    if (worksheet[cellCoded] !== undefined) {
      if (typeof worksheet[cellCoded].v === 'string') {
        tablaHash[worksheet[cellCoded].v.replace(/ /g, '')] = cellCoded;
      } else {
        tablaHash[worksheet[cellCoded].v] = cellCoded;
      }
    }
  }
  return tablaHash;
}
function getArrayData(file, column) {
  const workbook = file;
  const wsnames = workbook.SheetNames;
  const worksheet = workbook.Sheets[wsnames[0]];
  const worksheetSize = utils.decode_range(worksheet['!ref']);
  const MaxRow = worksheetSize.e.r;

  let tablaHash = [];

  for (let row = 1; row <= MaxRow; row += 1) {
    let cellUncoded = { c: column, r: row };
    let cellCoded = utils.encode_cell(cellUncoded);
    if (worksheet[cellCoded] !== undefined) {
      if (typeof worksheet[cellCoded].v === 'string') {
        tablaHash.push(worksheet[cellCoded]?.v.replace(/ /g, ''));
      } else {
        tablaHash.push(worksheet[cellCoded]?.v);
      }
    }
  }
  return tablaHash;
}
function getRow(file, row) {
  const workbook = file;
  const wsnames = workbook.SheetNames;
  const worksheet = workbook.Sheets[wsnames[0]];
  const worksheetSize = utils.decode_range(worksheet['!ref']);
  const MaxCol = worksheetSize.e.c;

  let tablaHash = [];

  for (let col = 0; col <= MaxCol; col += 1) {
    let cellUncoded = { c: col, r: row };
    let cellCoded = utils.encode_cell(cellUncoded);
    if (worksheet[cellCoded] !== undefined) {
      tablaHash.push(worksheet[cellCoded].v);
    }
  }
  return tablaHash;
}
function GetHead(file, Header) {
  const workbook = file;
  const wsnames = workbook.SheetNames;
  const worksheet = workbook.Sheets[wsnames[0]];
  const worksheetSize = utils.decode_range(worksheet['!ref']);
  const MaxCol = worksheetSize.e.c;
  for (let i = 0; i <= MaxCol; i += 1) {
    const cellUncoded = { c: i, r: 0 };
    const cellCoded = utils.encode_cell(cellUncoded);
    if (worksheet[cellCoded] !== undefined) {
      Header.push(worksheet[cellCoded].v);
    }
  }
  return Header;
}
function addHeader(files, result) {
  let Header = [];
  if (files.a !== undefined) {
    Header = GetHead(files.a.file, Header);
  }
  if (files.b !== undefined) {
    Header = GetHead(files.b.file, Header);
  }
  result.unshift(Header);
  return result;
}
export { getDic, getArrayData, getRow, addHeader };
