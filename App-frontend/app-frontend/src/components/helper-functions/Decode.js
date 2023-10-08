export const decode = (encodedString) => {
    let decodedString = '';
    let shift = 3;
  
    for (let i = 0; i < encodedString.length; i++) {
      const char = encodedString.charAt(i);
      let decodedChar = char;
  
      if (char.match(/[a-z]/i)) {
        const isUpperCase = char === char.toUpperCase();
        const baseCharCode = isUpperCase ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
        const charCode = char.charCodeAt(0);
        const shiftedCharCode = ((charCode - baseCharCode - shift + 26) % 26) + baseCharCode;
        decodedChar = String.fromCharCode(shiftedCharCode);
      }
  
      decodedString += decodedChar;
    }
  
    return decodedString;
  };
  