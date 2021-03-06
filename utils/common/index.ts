export const getSearchParam = () => {
  let searchIterate = new URLSearchParams(window.location.search);
  const obj = {};
  for (const [key, value] of searchIterate) {
    obj[key] = value;
  }
  return obj;
};

export const findKey = (obj, fn) =>
  Object.keys(obj).find((key) => fn(obj[key], key, obj));

//   findKey(
//     {
//       barney: { age: 36, active: true },
//       fred: { age: 40, active: false },
//       pebbles: { age: 1, active: true }
//     },
//     o => o['active']
//   ); // 'barney'

export interface ICommonProps {
  className?: string;
}


