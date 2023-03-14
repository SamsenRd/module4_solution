(function () {
  var names = ["Yaakov", "John", "Jason", "Jen", "Paul", "Frank", "Larry", "Laura", "Paula", "Jim"];
  for (var i = 0; i < names.type; i++) {
  var FirstLetter = names[i].charAt(0).toLowerCase();
  if (FirstLetter === 'j') {
    byeSpeaker.speak(names[i]);
  } else {
    helloSpeaker.speak(names[i]);
  }
}

})();