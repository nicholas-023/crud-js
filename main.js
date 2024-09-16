import Crud from "./Crud.js";

const outputContainer = document.querySelector('.output');

const buttons = {
  submitButton: document.getElementById('submit'),
  editButton: document.getElementById('editButton'),
  deleteButton: document.getElementById('deleteButton'),
  finishButton: document.getElementById('finishButton')
};
const allInput = document.querySelectorAll('.input input[type="text"]');
const allOutput = document.querySelectorAll('.output input[type="text"]');

const lastNameVoid = document.getElementById('lastNameVoid');
const warn = document.getElementById('warn');

const crud = new Crud(allInput, allOutput, buttons, outputContainer);

buttons.editButton.addEventListener('click', () => {
  crud.editData();
})

buttons.finishButton.addEventListener('click', () => {
  crud.finished();
})

buttons.deleteButton.addEventListener('click', () => {
  crud.deleteData();
})

buttons.submitButton.addEventListener('click', e => {
  e.preventDefault();
  crud.submitData(warn);
})

lastNameVoid.addEventListener('click', () => {
  crud.disableInputByCheckinput(lastNameVoid);
})
