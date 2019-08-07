import XlsxPopulate from 'xlsx-populate/browser/xlsx-populate';
import zip from 'lodash/zip';

function promiseMapSeries(array, iterator, thisArg) {
  var length = array.length
  var current = Promise.resolve()
  var results = new Array(length)
  var cb = arguments.length > 2 ? iterator.bind(thisArg) : iterator

  for (var i = 0; i < length; ++i) {
    current = results[i] = current.then(function(i) {
      return cb(array[i], i, array)
    }.bind(undefined, i))
  }

  return Promise.all(results)
}

const markupToMatrix = ({ markup, items, props }) => {
  return zip(...markup.map(([title, fn]) => {
    return [title, ...items.map(el => fn({ item: el, ...props }))];
  }));
};

export const generateFromJSON = async (json) => {
  const workbook = await XlsxPopulate.fromBlankAsync();
  const sheet = workbook.sheet('Sheet1');
  sheet.cell('A1').value(json);
  sheet.row(1).style({ bold: true });
  return workbook;
};

export const downloadFile = async (workbook, name = 'filename') => {
  const blob = await workbook.outputAsync();
  if (window.navigator && window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveOrOpenBlob(blob, `${name}.xlsx`);
  } else {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    document.body.appendChild(a);
    a.href = url;
    a.download = `${name}.xlsx`;
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  }
};

export const generateFile = async ({ type = 'xlsx', name = 'filename', data }) => {
  if (type === 'xlsx') {
    const workbook = await generateFromJSON(data);
    downloadFile(workbook, name);
  }
};

const downloadFromList = (listStore) => {
  return listStore.items;
};

const downloadAllFromList = async ({ listStore, limit, maxCount }) => {
  const listStoreAll = new listStore.constructor(listStore);
  listStoreAll.skip = 0;
  listStoreAll.items = [];
  const maxItemsCount = listStoreAll.count > maxCount ? maxCount : listStoreAll.count;
  await promiseMapSeries(Array(Math.ceil(maxItemsCount / limit)).fill(), async () => {
    await listStoreAll.fetchMore(1, limit);
  });
  return listStoreAll.items;
};

const download = async ({
  listStore, limit = 50, maxCount = 10000, markup = [], markupProps = {}, name, all = false,
}) => {
  const items = await (all ? downloadAllFromList({ listStore, limit, maxCount }) : downloadFromList(listStore));
  const data = markupToMatrix({
    markup,
    props: markupProps,
    items,
  });
  generateFile({ name, data });
};

export default download;
