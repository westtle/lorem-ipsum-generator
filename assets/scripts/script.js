const shortRadio = document.querySelector("#radio-short");
const mediumRadio = document.querySelector("#radio-medium");
const longRadio = document.querySelector("#radio-long");

const generatedDiv = document.querySelector(".lorem-ipsum_generated");

const buttonGenerate = document.querySelector("#button-generate");
const buttonSelectAll = document.querySelector("#button-select-all");
const buttonCopyAll = document.querySelector("#button-copy-all");

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