// add solution here
function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var n=0; n<4; n++) {
    array[n] = `${musicians[n]} plays ${instruments[n]}`
    }
    return array
  }

  function johnLennonFacts(array) {
    var n = ${array}.length
    while (n>=0) {
      --n
      array.splice(n,1,`${array[n]} !!!`)
}
return array
}
