// HTML
const generatorBody = document.querySelector("._generated textarea");

const paragraphLength = document.querySelector(".-paragraph-length");
const paragraphNumber = document.querySelector(".-paragraph-number input[type=number]");
const generateButton = document.querySelector(".-generate");

function generateText() {
    let length = paragraphLength.value;
    let amount = paragraphNumber.value;

    if (amount == "" || amount < 1) amount = 1;;

    // Fetch Data.
    let url = "https://loripsum.net/api/";
    fetch(`${url}${amount}/${length}/plaintext`)
        .then((response) => response.text())
        .then((data) => {
            generatorBody.textContent = data.trimEnd();
        });
};

generateButton.addEventListener("click", generateText);

document.addEventListener("DOMContentLoaded", () => {
    generateText();
});