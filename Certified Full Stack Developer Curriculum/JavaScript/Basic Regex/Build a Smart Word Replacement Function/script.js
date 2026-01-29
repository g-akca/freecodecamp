function myReplace(inputString, wordToReplace, newWord) {
  if (wordToReplace[0].toUpperCase() == wordToReplace[0]) newWord = newWord[0].toUpperCase() + newWord.slice(1);
  else newWord = newWord[0].toLowerCase() + newWord.slice(1);
  return inputString.replace(wordToReplace, newWord);
}