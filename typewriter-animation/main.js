function typingAnimation() {
    let textElement = document.querySelector(".text");
    let textArray = textElement.innerHTML.split("");
    let allWords = textElement.innerHTML.split(" ");
    let textLen = textArray.length;

    const wordLen = allWords.map((word) => {
        return word.length;
    });
}
