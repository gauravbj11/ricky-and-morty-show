export function sortArray(arr, key) {
  const newArr = [...arr];
  if (key === "asc") {
    newArr.sort(function(a, b) {
      return a.id - b.id;
    });
  } else {
    newArr.sort(function(a, b) {
      return b.id - a.id;
    });
  }
  return newArr;
}

function getSelectedFilters(filterObj) {
  return Object.keys(filterObj).filter(propValue => filterObj[propValue]);
}

export function filterResults(arr, filters) {
  const selectedFilters = getSelectedFilters(filters);
  return arr.filter(obj => {
    const cardValues = Object.values(obj).map(
      value =>
        (value.name && value.name.toUpperCase()) ||
        (value === "unknown" && "value") ||
        (typeof value === "string" && value.toUpperCase())
    );
    const found = selectedFilters.filter(
      selectedValue => -1 !== cardValues.indexOf(selectedValue.toUpperCase())
    );
    return found.length > 0;
  });
}

export function isFilterEmpty(filterObj) {
  return Boolean(
    !Object.values(filterObj).find(propValue => propValue === true)
  );
}

export function getCreatedInfo(timmestamp) {
  const currentYear = new Date().getFullYear();
  const prevDate = new Date(timmestamp);
  return currentYear - prevDate.getFullYear();
}

export function getPillsData(filterObj) {
  return getSelectedFilters(filterObj).map(value => ({
    key: value,
    label: value
  }));
}
