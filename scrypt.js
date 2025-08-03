// Check if a string is a palindrome
function isPalindrome(str) {
  // Remove non-letters/numbers and make lowercase
  const cleaned = str.replace(/[^a-z0-9]/gi, "").toLowerCase();
  // Compare cleaned string with its reverse
  return cleaned === cleaned.split("").reverse().join("");
}
