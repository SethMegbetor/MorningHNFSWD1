var age = prompt("please enter your age: ");
if (age < 18) {
  document.write("<br>you cannot vote");
} else if (age > 18 && age < 101) {
  document.write(
    "you are eligible to vote" + "<br> you should vote for Paa Kwesi"
  );
} else if (age > 100) {
  document.write("<br>You should be sleeping");
} else {
  document.write("<br>enter your correct age!");
}
