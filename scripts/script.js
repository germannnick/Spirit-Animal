// $('body').css("background-color", "yellow");
// when button is clicked
// IIFE Imiddiate Invoke Function Expression
$("#btnGetAnimal").on("click", function(){
// get the user name
// dont do this ... alert($("#bakerName").val());
  let bakerName = $("#bakerName").val();
//   var variableName = ... let(const)
  
  $("#greetingArea").append("Hi there " + bakerName + "!");
// give them a greeting
  
  $("#btnGetAnimal").on("click", function(){});
  
  let spiritAnimals = ["🦅🦅","🐬🐬","🐆🐆", "File not found"];
  let randomAnimal = spiritAnimals[(Math.floor(Math.random() * spiritAnimals.length))]
  $("#greetingArea").after("Your spirit animal is: "+ randomAnimal);
 
})
// then tell them their spirit animal.