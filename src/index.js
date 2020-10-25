module.exports = function reverse (n) {
    let str = n.toString().split('').reverse().join('');
   if (str.charAt(str.length -1) == '-'){
    str = str.slice(0, -1);
   }
   return Number(str);
}
