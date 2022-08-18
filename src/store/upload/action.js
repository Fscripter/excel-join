import { read, utils } from 'xlsx';

function fileUploaded(label, file, deleted = false) {
  if (deleted) {
    return {
      type: `FILE_DELETED`,
      title: `FILE_${label}_DELETED`,
      id: label,
      data: null,
      time: new Date(),
    };
  }
  return {
    type: `FILE_UPLOADED`,
    title: `FILE_${label}_UPLOADED`,
    id: label,
    data: read(file),
    time: new Date(),
  };
}
export { fileUploaded };
