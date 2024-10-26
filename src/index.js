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
  let resultArray = [];
  
  for (let i = 0; i < expr.length; i+=10) {
    let part = expr.slice(i, i+10);
    resultArray.push(part);
  }

  let newResult = resultArray.map((item) => {
    let sum = "";
    if (item === "**********") {
      return " ";
    } else {
        for (let j = 0; j < item.length-1; j+=2 ) {   
      let code = item.slice(j, j+2);
      switch(code) {
        case ("10") : code =  ".";
        break;
        case ("11") : code = "-";
        break;
        case ("00") : code = "";
        break; 
      }
      sum+=code;
      }
    }
    return MORSE_TABLE[sum];
    });
  
  return newResult.join("");
}

module.exports = {
    decode
}