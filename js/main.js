let moment = require("moment");
let myDate = new Date();
let myCoolDate = moment(myDate).format("LLLL");

document.write(myCoolDate);
console.log(myCoolDate);
console.log('df');