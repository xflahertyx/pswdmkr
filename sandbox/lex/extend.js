function strExtend(str, newLen) {
  var newString = '';
  console.log('str: ' + str);
  console.log('str.length: ' + str.length);
  for(i = 0; i < newLen; i++) {
    newString += str[i % str.length];
    console.log(i, i % str.length, str[i % str.length]);
  }
  return newString;
}

var testString = 'abcdefg';
console.log('testString: ' + testString);
console.log('strExtend(testString): ' + strExtend(testString, 16));
