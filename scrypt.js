// Check if a string is a palindrome
function isPalindrome(str) {
  // Remove non-letters/numbers and make lowercase
  const cleaned = str.replace(/[^a-z0-9]/gi, "").toLowerCase();
  // Compare cleaned string with its reverse
  return cleaned === cleaned.split("").reverse().join("");
}
// When the button is clicked
document.getElementById("check-btn").addEventListener("click", () => {
  const input = document.getElementById("text-input").value;
  const result = document.getElementById("result");

  // Show alert if input is empty
  if (!input) {
    alert("Please input a value.");
    return;
  }

 