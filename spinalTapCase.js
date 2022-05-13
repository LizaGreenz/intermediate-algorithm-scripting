// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
  str = str
    .split(/[-_]|\W+|(?=[A-Z])/)
    .join("-")
    .toLowerCase();
  return str;
}

spinalCase("This Is Spinal Tap");
spinalCase("thisIsSpinalTap");
spinalCase("The_Andy_Griffith_Show");
