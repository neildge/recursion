

var stringifyJSON = function(obj) {
  if (typeof obj === 'string') {
    return '"' + obj + '"';

  } else if (typeof obj === 'number' || typeof obj === 'boolean') {
    return obj.toString();

  } else if (typeof obj === 'undefined' || typeof obj === 'function' || (obj === null && typeof obj === 'object')) {
    return 'null';

  } else if (Array.isArray(obj)) {
    var arrStr = '';
    if (obj.length < 1) {
      return '[]';
    }
    for (var i=0; i<obj.length; i++) {
      arrStr += stringifyJSON(obj[i]) + ','
    }
    return '[' + arrStr.slice(0,arrStr.length-1) + ']';

  } else if (typeof obj === 'object') {
    if (obj === {}) {
      return '{}';
    }
    var open = '{';
    var close = '}';
    var objStr = '';
    for (var key in obj) {
      if (typeof obj[key] === 'function' || typeof obj[key] === 'undefined') {
        stringifyJSON(obj[key]);
      } else {
      objStr += '"' + key + '":' + stringifyJSON(obj[key]) + ',';
      }
    }
    return '{' + objStr.slice(0,objStr.length-1) + '}';
    }
};
