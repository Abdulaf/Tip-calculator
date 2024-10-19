"use strict";
const billInput = document.querySelector(".bill-input");
const tipButtons = document.querySelectorAll(".btns");
const numPeople = document.querySelector(".number-of-people-input");
const tipAmount = document.querySelector(".tip-amount");
const totalAmount = document.querySelector(".total-amount");
const resetBtn = document.querySelector(".reset-button");
const customInput = document.querySelector(".custom-input");
const total = document.querySelector(".total-bill");
const errorMessage = document.querySelector(".error-message");

tipButtons.forEach((tipBtn) => {
  tipBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const tipSelected = Number(tipBtn.textContent.match(/\d+/)[0]);
    const bill = parseFloat(billInput.value);
    const people = parseFloat(numPeople.value);
    const half = bill * (tipSelected / 100).toFixed(2);
    const tip = (half / people).toFixed(2);
    const amount = (half + bill).toFixed(2);
    const totalPerson = (amount / people).toFixed(2);
    total.textContent = (totalPerson * people).toFixed(2);
    totalAmount.textContent = totalPerson;
    tipAmount.textContent = tip;
    numPeople.classList.remove("active--error");
    errorMessage.classList.add("hidden");
    if (numPeople.value === "") {
      errorMessage.classList.remove("hidden");
      numPeople.classList.add("active--error");
    }
  });
});

customInput.addEventListener("input", (e) => {
  e.preventDefault();
  const customValue = customInput.value;
  const bill = parseFloat(billInput.value);
  const people = parseFloat(numPeople.value);
  const half = bill * (customValue / 100).toFixed(2);
  const tip = (half / people).toFixed(2);
  const amount = (half + bill).toFixed(2);
  const totalPerson = (amount / people).toFixed(2);
  total.textContent = (totalPerson * people).toFixed(2);
  totalAmount.textContent = totalPerson;
  tipAmount.textContent = tip;
  numPeople.classList.remove("active--error");
  errorMessage.classList.add("hidden");
  if (numPeople.value === "") {
    errorMessage.classList.remove("hidden");
    numPeople.classList.add("active--error");
  }
});

resetBtn.addEventListener("click", (e) => {
  window.location.reload();
});
