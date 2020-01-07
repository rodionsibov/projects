const getTypeOfSentence = (sentence) => {
const lastChar = sentence[sentence.length - 1];
    return `Last character is "${lastChar}"`;

}

console.log(getTypeOfSentence("wer"));
