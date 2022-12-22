// HTML
const generatorBody = document.querySelector("._generated textarea");

const paragraphLength = document.querySelector(".-paragraph-length");
const paragraphNumber = document.querySelector(".-paragraph-number input[type=number]");
const generateButton = document.querySelector(".-generate");

const copyButton = document.querySelector(".-copy");

function generateText() {
    let length = paragraphLength.value;
    let amount = paragraphNumber.value;

    if (amount == "" || amount < 1) amount = 1;;

    // Fetch Data.
    const url = "https://loripsum.net/api/";
    const corsProxy = "https://api.codetabs.com/v1/proxy?quest=";
    fetch(`${corsProxy}${url}${amount}/${length}/plaintext`)
        .then((response) => response.text())
        .then((data) => {
            generatorBody.textContent = data.trimEnd();
        })
        .catch(err => generatorBody.textContent = err);
};

function copyText() {
    generatorBody.select();
    generatorBody.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(generatorBody.value);
};

generateButton.addEventListener("click", generateText);
copyButton.addEventListener("click", copyText);

document.addEventListener("DOMContentLoaded", () => {
    generateText();
});