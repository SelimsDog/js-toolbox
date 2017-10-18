
/**
 * if first parameter is undefined, it will return second parameter.
 * @param {*} value 
 * @param {*} def 
 */
function setDef(value, def) {
      return value !== undefined ? value : def;
}


export {setDef}