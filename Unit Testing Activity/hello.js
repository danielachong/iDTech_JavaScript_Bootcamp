/*function hello() {
  return "This is going to be a pass test";
}
*/


function greet(name) {
  var greetings  //= "Hello, " + (name) + "!";
  if (name == null){
      greetings = "Hello, there!"
  }
  else if (typeof name == "string") {
      greetings = "HELLO, " + (name.toUpperCase()) + "!";
  }
  else if (typeof name == "object" && name.length == 2) {
      greetings = "HELLO, " + name[0] + ", " + name[1];
  }
  else {
    greetings = "HELLO, "
    for (i=0; i< name.length; i++) {
      if (i == name.length - 1) {
        greetings = greetings + name[i]
      }
      else {
        greetings += name[i] + ", ";
      }
    }
  }
  return greetings
}