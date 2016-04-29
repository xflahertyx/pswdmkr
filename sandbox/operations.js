'use strict';

var primes = [
  373585643, 373585651, 373585673,
  373585679, 373585687, 373585787,
  373585789, 373585799, 373585813,
  373585819, 373585843, 373585853,
  373585873, 373585889, 373585913,
  373585967, 373585981, 373585997,
  373586009, 373586039, 373586051,
  373586069, 373586089, 373586093,
  373586111, 373586153, 373586159,
  373586197, 373586209, 373586233,
  373586267, 373586287, 373586293,
  373586321, 373586357, 373586371,
  373586399, 373586413, 373586419,
  373586429, 373586443, 373586449,
  373586467, 373586501, 373586527,
  373586557, 373586561, 373586567,
  373586579, 373586581, 373586599,
  373586617, 373586621, 373586627,
  373586639, 373586827, 373586869,
  373586887, 373586897, 373586909,
  373586923, 373586929, 373586933,
  373586977, 373587031, 373587037,
  373587041, 373587043, 373587059,
  373587073, 373587127, 373587133,
  373587143, 373587157, 373587191,
  373587199, 373587211, 373587259,
  373587289, 373587299, 373587317,
  373587323, 373587341, 373587343,
  373587433, 373587437, 373587463,
  373587509, 373587521, 373587589,
  373587593, 373587653, 373587667,
  373587673, 373587679, 373587691,
  373587701, 373587707, 373587743,
  373587803, 373587821, 373587833
];

var characters = '`1234567890-=qwertyuiopasdfghjkl;zxcvbnm,!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:"ZXCVBNM<>?';

function mixup(str) {
  var newString = '';
  var i = str.length;
  while (i > 0) {
    if (i == 1) newString += str;
    var mod = (primes[i]) % i;
    newString += str.slice(mod - 1, mod);
    str = str.slice(0, mod - 1) + str.slice(mod, i);
    i--;
  };
  return newString;
};

function changer(str) {2
  var newCharList = mixup(characters);
  var newstring = ""
  for (var i = 0; i < str.length; i++) {
    newstring += newCharList[(primes[i] * primes[i+1] * newCharList.indexOf(str[i])) % newCharList.length] ;
  }
  return newstring;
}

console.log('changer: ' + changer('password'));

console.log('mixup: ' + mixup('password'));

console.log('both: ' + changer(mixup('password')));
console.log('chained: ' + changer(mixup(changer(mixup('password')))));
