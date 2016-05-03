function validate(str) {
  var special = '`-=,!;@#$%^&*()_+{}|:"<>?';
  var numbers = '1234567890';
  var lowerCase = 'qwertyuiopasdfghjklzxcvbnm';
  var upperCase = 'QWERTYUIOPASDFGHJKLZXCVBNM'
  var hasSpecial = false;
  var hasNumbers = false;
  var hasLower = false;
  var hasUpper = false;
  for(var i = 0; i < str.length; i++) {
    if(special.indexOf(str[i]) > -1) hasSpecial = true;
    if(numbers.indexOf(str[i]) > -1) hasNumbers = true;
    if(lowerCase.indexOf(str[i]) > -1) hasLower = true;
    if(upperCase.indexOf(str[i]) > -1) hasUpper = true;
  }
}
