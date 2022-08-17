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
  let letters = '';
  let numbers = [];
  let morse = [];
  let word = [];
  for (let i = 0; i < expr.length; i += 10) {
    letters += expr.slice(i, i + 10) + ' ';
  }

  letters.split(' ').map((e) => {
    const number = e.replace(/^0+/, '');
    numbers.push(number.replace(/10/gi, '.'));
  });

  numbers.forEach((e) => {
    morse.push(e.replace(/11/gi, '-'));
  });

  morse.forEach((e) => {
    if (e === '**********') {
      word.push(' ');
    }
    word.push(MORSE_TABLE[e]);
  });

  return word.join('');
}

module.exports = {
  decode,
};
