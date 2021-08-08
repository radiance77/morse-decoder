const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let exprArr = [];
    let exprDotDash = [];
    let result = [];
  
    let tmpNumChar = 0;
    for(let i = 0; i < expr.length; i+=10){
      tmpNumChar = expr.substr(i, 10).indexOf('1');
      exprArr.push(expr.substr(i, 10).substr(tmpNumChar));
    }
  
    let tmpWord = [];
    for(word of exprArr){
      // exprDotDash.push(word.replaceAll('10', '.').replaceAll('11', '-').replaceAll('*', ' '));
      tmpWord = [];
      for(let i = 0; i < word.length; i+=2){
        if(word[i] === '1' && word[i+1] === '0'){
          tmpWord.push('.'); 
        } else if(word[i] === '1' && word[i+1] === '1'){
          tmpWord.push('-'); 
        } else if(word[i] === '*'){
          tmpWord.push(' '); 
        }
      }
      exprDotDash.push((tmpWord.join('')))
    }
  
    for(word of exprDotDash){
      if(word !== ' '){
        result.push(MORSE_TABLE[word]);
      }else{
        result.push(word);
      }
    }
  
    result = result.join('');
    
    return result;
  }

module.exports = {
    decode
}