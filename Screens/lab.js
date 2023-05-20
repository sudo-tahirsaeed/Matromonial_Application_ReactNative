function getConsonants(str) {
    
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
   
    const consonants = str.split('').filter(char => !vowels.includes(char));
    
    consonants.sort();
   
    return consonants.join('');
  }
  const inputStr = "tahir saeeD";
const result = getConsonants(inputStr);
console.log(result); 