
/**
 * if first parameter is undefined, it will return second parameter.
 * @param {*} value 
 * @param {*} def 
 * @return {*}
 */
function setDef(value, def) {
      return value !== undefined ? value : def;
}


/**
 * select DOM elements. 
 * If param starts with "#" it will select by ID and return DOM, if not found, it will return null
 * If param starts with "." it will select by Class name and return Array
 * @param {String} param 
 * @return {Array | DOM}
 */
function selector (param) {
      
      if(param !== undefined) {

            var d = document;
            if(param[0] === "#") {
                  return d.getElementById(param.substr(1, param.length - 1));
            } else if (param[0] === "."){
                  return d.getElementsByClassName(param.substr(1, param.length - 1));
            }

      } 
}



function propSetDef (props, propName, defValue) {

      if(props.hasOwnProperty(props)){
            props[propName] !== undefined ? props[propName] : defValue;  
      }
      
      return defValue;
}

export {setDef, selector, propSetDef}