export {
 Object: {
  values: window.Object.values || function (obj) {
   var vals = [];
   for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
     vals.push(obj[key]);
    }
   }
   return vals;
  },
  entries: window.Object.entries || function (obj) {
   var entrys = [];
   for (var key in obj) {
    if (obj.hasOwnProperty(key)) entrys.push([key, obj[key]]);
   }
   return entrys;
  }
 }
}

