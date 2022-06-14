function isPalindrome(word) {
  const array = word.split('')
  const reverseArray = array.reverse()
  const reversedWord = reverseArray.join('')
  return word === reversedWord;
 
}
  

/* 
  if the input is the same as teh reversed input 
  return true 
  else 
  return false
*/

/*
  Add written explanation of your solution here
*/
// You can run `node index.js` to view these console logs
if (require.main === module) {
  
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome(""));
}

module.exports = isPalindrome;