import XlsxPopulate from 'xlsx-populate/browser/xlsx-populate';
import zip from 'lodash/zip';
import sortBy from 'lodash/sortBy';
import uniq from 'lodash/uniq';

function promiseMapSeries(array, iterator, thisArg) {
  const { length } = array;
  let current = Promise.resolve();
  const results = new Array(length);
  const cb = arguments.length > 2 ? iterator.bind(thisArg) : iterator;

  for (let i = 0; i < length; ++i) {
    current = results[i] = current.then(
      function (i) {
        return cb(array[i], i, array);
      }.bind(undefined, i),
    );
  }

  return Promise.all(results);
}

const markupToMatrix = ({ markup, items, props, dynamicFields, dynamicFieldsSort }) => {
  const dynamicCounted = items.map((el) => dynamicFields(el, props));
  const dynamicObject = {};
  if (Array.isArray(dynamicFieldsSort) && dynamicFieldsSort.length) {
    const namesAndKeys = {};
    dynamicCounted.forEach((arr) => {
      arr.forEach(([name, , key]) => {
        if (key) {
          if (!namesAndKeys[key]) {
            namesAndKeys[key] = [];
          }
          namesAndKeys[key].push(name);
        }
      });
    });
    // очень некрасивый метод, как и всё здесь, надо переделать
    const bruh = sortBy(Object.keys(namesAndKeys), (o) => {
      const ind = dynamicFieldsSort.indexOf(o);
      return ind < 0 ? 10000 : ind;
    });
    bruh.forEach((key) => {
      uniq(namesAndKeys[key]).forEach((k) => {
        dynamicObject[k] = [];
      });
    });
  }
  dynamicCounted.forEach((arr, index) => {
    arr.forEach(([key, value]) => {
      if (!dynamicObject[key]) {
        dynamicObject[key] = [];
      }
      dynamicObject[key][index] = value;
    });
  });
  const dynamicArray = [];
  Object.keys(dynamicObject).forEach((key) => {
    dynamicArray.push([key, ...dynamicObject[key]]);
  });
  return zip(
    ...markup.map(([title, fn]) => {
      return [title, ...items.map((el) => fn({ item: el, ...props }))];
    }),
    ...dynamicArray,
  );
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
    await downloadFile(workbook, name);
  }
};

const downloadFromList = (listStore) => {
  return listStore.items;
};

const downloadAllFromList = async ({ listStore, limit, maxCount }) => {
  const listStoreAll = new listStore.constructor(listStore);
  listStoreAll.skip = 0;
  listStoreAll.items = [];
  let next = false;
  let count = 0;
  do {
    const res = await listStoreAll.fetchMore(1, limit);
    count += 1;
    const maxItemsCount = listStoreAll.count > maxCount ? maxCount : listStoreAll.count;
    const totalCount = Math.ceil(maxItemsCount / limit);
    if (count >= totalCount) {
      next = false;
      listStoreAll.items = listStoreAll.items.slice(0, maxItemsCount)
    } else {
      next = true;
    }
  } while (next);
  return listStoreAll.items;
};

const download = async ({
  listStore,
  limit = 50,
  maxCount = 10000,
  markup = [],
  markupProps = {},
  dynamicFields = () => [],
  dynamicFieldsSort = [],
  name,
  all = false,
}) => {
  const items = await (all ? downloadAllFromList({ listStore, limit, maxCount }) : downloadFromList(listStore));
  const data = markupToMatrix({
    markup,
    dynamicFields,
    dynamicFieldsSort,
    props: markupProps,
    items,
  });
  await generateFile({ name, data });
  return {
    count: items.length,
  };
};

export default download;
