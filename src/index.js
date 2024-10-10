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

function decodeBinaryString(binaryString) {
    return binaryString
        .replace(/00/g, '')     
        .replace(/10/g, '.')     
        .replace(/11/g, '-');   
}

function decode(expr) {
    let result = [];
    const words = expr.split('**********');
    for (let i = 0; i < words.length; i++) {
        const element = words[i];
        const charArr = element.match(/.{1,10}/g);
        charArr.forEach(char => {
            const decodeChar = decodeBinaryString(char);
            const value = MORSE_TABLE[decodeChar];
            result.push(value)
        });
        result.push(' ')
    } 
    
    console.log(result.join(''))

    return result.join('').trim();
}

// const expr = "00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010";
   
// decode(expr);

module.exports = {
    decode
}