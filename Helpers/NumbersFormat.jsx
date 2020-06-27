export const  prefix = (number) => {
    let num = number;
    let prefixValue = "";
    if (num > 0 && number < 1000) {
      prefixValue = "+";
    } else if (num >= 1000 && num < 10000) {
      prefixValue = "";
    } else {
      prefixValue = "K";
    }
    return prefixValue;
  };
  
 export  const numberFormat = (number) => {
    if (number >= 10000) {
      return number / 1000;
    } else {
      return number;
    }
  };