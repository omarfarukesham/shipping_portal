export function replaceEmptyObjectToNull(obj) {
  if (Object.keys(obj).length === 0) {
    return null;
  } else return obj;
}
