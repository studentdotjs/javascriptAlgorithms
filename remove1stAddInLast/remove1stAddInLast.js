 let remove1stAddInLast = function (intArr, number) {

     if (intArr.length === 0) {
         console.log("No array has been selected");
     } else {
         intArr.shift();
         intArr.push(number);

         console.log(intArr);

     }

 };

 remove1stAddInLast([26, 23, 19, 96, 11, 40], 20);
