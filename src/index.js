module.exports = function check(str, bracketsConfig) {
  // your solution
  let brackets;
  let result;

  for(let i = 0; i < bracketsConfig.length; i++){
    brackets = bracketsConfig[i].join("");
    
    if(str.includes(brackets)){
      str = str.replace(brackets, "");
      i =- 1;
    }
  }
  
  if(str.length) result = false;
  else result = true;
  
  return result;
}
