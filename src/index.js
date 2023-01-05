module.exports = function toReadable (number) {
    let readable = "";
  	let readable1 = "";
  	let readable2 = "";
  	let readable3 = "";
    const hundred = Math.floor(number / 100);
    switch (hundred) {
    case 0: readable3 = ""; break;
    case 1: readable3 = "one hundred"; break;
    case 2: readable3 = "two hundred"; break;
    case 3: readable3 = "three hundred"; break;
    case 4: readable3 = "four hundred"; break;
    case 5: readable3 = "five hundred"; break;
    case 6: readable3 = "six hundred"; break;
    case 7: readable3 = "seven hundred"; break;
    case 8: readable3 = "eight hundred"; break;
    case 9: readable3 = "nine hundred"; break;}
    const dozens = Math.floor((number - (hundred * 100)) / 10)
    let dozens1 = 0
        switch (dozens) {
        case 0: readable2 = ""; break;
        case 1: readable2 = ""; break;
        case 2: readable2 = "twenty"; dozens1 = dozens; break;
        case 3: readable2 = "thirty"; dozens1 = dozens; break;
        case 4: readable2 = "forty"; dozens1 = dozens; break;
        case 5: readable2 = "fifty"; dozens1 = dozens; break;
        case 6: readable2 = "sixty"; dozens1 = dozens; break;
        case 7: readable2 = "seventy"; dozens1 = dozens; break;
        case 8: readable2 = "eighty"; dozens1 = dozens; break;
        case 9: readable2 = "ninety"; dozens1 = dozens; break;}
        const units = number - (hundred * 100) - (dozens1 * 10)
            switch (units) {
            case 0: readable1 = ""; break;
            case 1: readable1 = "one"; break;
            case 2: readable1 = "two"; break;
            case 3: readable1 = "three"; break;
            case 4: readable1 = "four"; break;
            case 5: readable1 = "five"; break;
            case 6: readable1 = "six"; break;
            case 7: readable1 = "seven"; break;
            case 8: readable1 = "eight"; break;
            case 9: readable1 = "nine"; break;
            case 10: readable1 = "ten"; break;
            case 11: readable1 = "eleven"; break;
            case 12: readable1 = "twelve"; break;
            case 13: readable1 = "thirteen"; break;
            case 14: readable1 = "fourteen"; break;
            case 15: readable1 = "fifteen"; break;
            case 16: readable1 = "sixteen"; break;
            case 17: readable1 = "seventeen"; break;
            case 18: readable1 = "eighteen"; break;
            case 19: readable1 = "nineteen"; break;}
            const readable4 = readable3 + " " + readable2 + " " + readable1;
            readable = readable4.trim().replace( / +/g, ' ' );
            if (number === 0) {readable = "zero";} 
return readable
}
