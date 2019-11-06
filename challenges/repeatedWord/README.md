# Repeat Word
We will be creating a function that returns the first repeat word
## Challenge
The challenge entails creating a function that takes a string and returns tje first repeat word in that string
## Approach & Efficiency
Removed punctuation then split each word, looped through array of words and set that works as the key in an object and set its count to 1, once the loop gets a word that has already been set as a key, it will return that word.