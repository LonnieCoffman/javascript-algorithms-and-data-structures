function rot13(str) {
  const letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M',
                   'N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  let letterArr = str.split('');
  let idx, decoded;
  for (let i = 0; i < letterArr.length; i++){
    idx = letters.indexOf(letterArr[i]);
    if (idx >= 0){
      idx += 13;
      if (idx >= 26) idx -= 26;
      letterArr[i] = letters[idx]
    }
  }
  return letterArr.join('');
}
