function convertToRoman(num) {
  let numeral = '';
  const number = [ 1,4,5,9,10,40,50,90,100,400,500,900,1000,4000];
  const roman  = ['I','IV','V','IX','X','XL','L','XC','C','CD','D','CM','M','MMMM']
  while (num > 0){
    let idx = number.findIndex((el) => el > num) - 1;
    num -= number[idx];
    numeral += roman[idx];
  }
  return numeral;
}
