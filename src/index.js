const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  const exp = expr.split('');

  let tenNum = [];
  for (let i = 0; i < exp.length; i += 10) {
    tenNum.push(exp.slice(i, i + 10));
  }

  let twoNum = tenNum.map(a => {
    let res = [];
    for (let i = 0; i < a.length; i += 2) {
      res.push(a.slice(i, i + 2).join(''));
    }
    return res;
  });

  let morseCode = twoNum
    .map(arr =>
      arr.map(num => {
        if (num === '00') return '';
        else if (num === '10') return '.';
        else if (num === '11') return '-';
        else if (num === '**') return '0';
      }),
    )
    .map(code => code.reduce((acc, prev) => acc + prev, []))
    .map(letter => {
      if (letter === '00000') return ' ';
      else return MORSE_TABLE[letter];
    });

  return morseCode.join('');
}
module.exports = {
  decode,
};
