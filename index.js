const form = document.getElementById("form");
const completeState = document.getElementById("complete-state");
const name = document.getElementById("name");
const cardNumber = document.getElementById("card-number");
const month = document.getElementById("month");
const year = document.getElementById("year");
const cvc = document.getElementById("cvc");
const confirm = document.getElementById("confirm");

const nameErr = document.getElementById("name-error");
const numErr = document.getElementById("num-error");
const dateErr = document.getElementById("date-error");
const cvcErr = document.getElementById("cvc-error");

const cardNumDsp = document.getElementById("card-number-display");
const cardHolder = document.getElementById("card-holder");
const cardExp = document.getElementById("card-exp");
const cardCvc = document.getElementById("card-cvc");

form.addEventListener("submit", (e) => {
    e.preventDefault();
});

confirm.addEventListener("click", () => {
    displayInfo();
});

function displayInfo() {
    if (name.value === "") {
        const errMsg = document.createElement("span");
        errMsg.classList.add("message");
        name.classList.add("input-error");
        errMsg.innerText = `Can't be blank`;

        nameErr.appendChild(errMsg);
        setTimeout(() => {
            removeErr(errMsg);
        }, 5000);
    } else {
        cardHolder.innerText = name.value;
        name.classList.add("input-success");
        name.value = "";
    }

    if (cardNumber.value === "") {
        const errMsg = document.createElement("span");
        errMsg.classList.add("message");
        cardNumber.classList.add("input-error");
        errMsg.innerText = `Can't be blank`;
        cardNumDsp.innerText = "No number was entered";

        numErr.appendChild(errMsg);
        setTimeout(() => {
            removeErr(errMsg);
        }, 5000);
    } else {
        cardNumDsp.innerText = cardNumber.value;
        name.classList.add("input-success");
        name.value = "";
    }

    const numCheck = parseInt(cardNumber.value.replaceAll(" ", ""));

    if (isNaN(numCheck) && cardNumber.value !== "") {
        const errMsg = document.createElement("span");
        errMsg.classList.add("message");
        cardNumber.classList.add("input-error");
        errMsg.innerText = `Wrong format, numbers only`;
        cardNumDsp.innerText = "What?";

        numErr.appendChild(errMsg);
        setTimeout(() => {
            removeErr(errMsg);
        }, 5000);
    } else {
        numErr.classList.add("input-success");
        numErr.value = "";
    }
    if (month.value === "") {
        const errMsg = document.createElement("span");
        errMsg.classList.add("message");
        month.classList.add("input-error");
        errMsg.innerText = `Can't be blank`;

        dateErr.appendChild(errMsg);
        setTimeout(() => {
            removeErr(errMsg);
        }, 5000);
    } else {
        month.classList.add("input-success");
        month.value = "";
    }

    if (year.value === "") {
        const errMsg = document.createElement("span");
        errMsg.classList.add("message");
        year.classList.add("input-error");
        errMsg.innerText = `Can't be blank`;

        dateErr.appendChild(errMsg);
        setTimeout(() => {
            removeErr(errMsg);
        }, 5000);
    } else {
        year.classList.add("input-success");
        year.value = "";
    }

    if (cvc.value === "") {
        const errMsg = document.createElement("span");
        errMsg.classList.add("message");
        cvc.classList.add("input-error");
        errMsg.innerText = `Can't be blank`;

        cvcErr.appendChild(errMsg);
        setTimeout(() => {
            removeErr(errMsg);
        }, 5000);
    } else {
        cardCvc.innerText = cvc.value;
        form.classList.remove("active");
        completeState.classList.add("active");
        cvc.classList.add("input-success");
        cvc.value = "";
    }
}

function removeErr(item) {
    item.remove();
}
