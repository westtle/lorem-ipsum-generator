// HTML
const generatorBody = document.querySelector("._generated textarea");

const paragraphLength = document.querySelector(".-paragraph-length");
const paragraphNumber = document.querySelector(".-paragraph-number input[type=number]");
const generateButton = document.querySelector(".-generate");

buttonGenerate.addEventListener("click", generateText)
buttonSelectAll.addEventListener("click", () => {
    generatedDiv.select();
});
buttonCopyAll.addEventListener("click", () => {
    navigator.clipboard.writeText(generatedDiv.value);

    buttonCopyAll.innerText = "Copied!";

    setTimeout(() => buttonCopyAll.innerText = "Copy All", 800);
});

function generateText() {
    let numberOfParagraph = document.querySelector("#number-of-paragraph").value;
    let paragraphLength;

    if (shortRadio.checked) {
        paragraphLength = "short";
    } else if (mediumRadio.checked) {
        paragraphLength = "medium";
    } else if (longRadio.checked) {
        paragraphLength = "long";
    };

    if (numberOfParagraph === "" || numberOfParagraph < 1) {
        numberOfParagraph = 1;
    };

    // Fetch Data.

    let url = "https://loripsum.net/api/";
    const corsProxy = "https://api.codetabs.com/v1/proxy?quest=";
    let userValue = `${corsProxy}${url}${numberOfParagraph}/${paragraphLength}/plaintext`;

    fetch(userValue)
    .then((response) => response.text())
    .then((data) => {
        loremIpsum = data;
        loremIpsumTrimmed = loremIpsum.trimEnd();
        generatedDiv.textContent = loremIpsumTrimmed;
    });
};

document.body.addEventListener("DOMContentLoaded", generateText());