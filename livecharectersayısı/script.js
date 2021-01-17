const textare = document.querySelector("textarea");
const count = document.querySelector(".count");
textare.addEventListener("keyup", charakterlleters);
textare.maxLength = "100";

function charakterlleters() {
    const text = textare.value;
    const textLength = textare.value.length;
    if (textLength == 100) {
        alert("Maxsimum karakter saysı")
    }

    count.innerText = `${textLength}`;
}