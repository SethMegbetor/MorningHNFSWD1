var age = "";
while (age < 700) {
  age = prompt("Please enter your age");
  if (age === false) {
    continue;
  }
  if (age == 21) {
    alert("Happy 21st Birthday!");
    continue;
  }
  if (age > 21) {
    alert("You are old");
    continue;
  }
  if (age < 21) {
    alert("You are too young to be in this bar!");
  }
}
