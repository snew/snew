import "babel-polyfill";

Math.log10 = Math.log10 || ((x) => (Math.log(x) / Math.LN10));

