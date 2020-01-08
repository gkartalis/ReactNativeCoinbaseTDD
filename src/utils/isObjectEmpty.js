/**
 * Takes as input an object and returns boolean
 * value depending on if the input is an empty 
 * object.
 * 
 * @param {Object} obj 
 * @returns {Boolean}
 */

export const isObjectEmpty = obj => {
  for(let key in obj) {
    if(obj.hasOwnProperty(key))
        return false;
    }
  return true;
}