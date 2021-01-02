const makeStrPairs = (str) => {
  
  let strPairsArr = [];
  
  for(let i = 0; i < str.length; i+=2){
    
    strPairsArr.push(str.substr(i, 2));
    
  }
  
  if(str.length % 2 !== 0){
    
    let lastPair = strPairsArr[strPairsArr.length - 1];
    
    lastPair = lastPair.concat("*");
    
    strPairsArr.pop();
  
    strPairsArr.push(lastPair);
    
  }
  
  console.log(strPairsArr);
  
};

makeStrPairs("programming");