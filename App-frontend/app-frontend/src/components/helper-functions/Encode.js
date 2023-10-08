export const Encode = (inputString) => {
    let encodedString = '';

    for (let i = 0; i < inputString.length; i++) {
        let shift = 3;
        const char = inputString.charAt(i);
        let encodedChar = char;
  
      if (char.match(/[a-z]/i)) {
        const isUpperCase = char === char.toUpperCase();
        const baseCharCode = isUpperCase ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
        const charCode = char.charCodeAt(0);
        const shiftedCharCode = ((charCode - baseCharCode + shift) % 26) + baseCharCode;
        encodedChar = String.fromCharCode(shiftedCharCode);
      }
  
      encodedString += encodedChar;
    }
  
    return encodedString;
}