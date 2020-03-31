// add solution here
function theBeatlesPlay(musicians,instruments){
  var talent = [];
  for(let i = 0; i <= musicians.length; i++){
    talent.push('${musicians[i]} plays ${instruments[i]}');
  }
  return talent;
}
