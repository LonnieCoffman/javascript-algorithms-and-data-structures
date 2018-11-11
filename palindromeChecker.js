function palindrome(str){
  str = str.replace(/[^0-9a-zA-Z]/g, '').toLowerCase();
  const revStr = str.split('').reverse().join('');
  return(str === revStr);
}
