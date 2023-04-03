function isPalindrome(word) {
  if (word.length < 2) {
    return true;
  }

  for (let i = 0; i < word.length / 2; i++) {
    if (word[i] !== word[word.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

/*
  FUNCTION isPalindrome(string)
  SET length = length of string
  SET middle = floor of length divided by 2
  FOR i = 0 to middle
    IF string[i] is not equal to string[length - 1 - i]
      RETURN false
  RETURN true
END FUNCTION
*/

module.exports = isPalindrome;

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("");
}

