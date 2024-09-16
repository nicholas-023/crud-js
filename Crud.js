class Crud {
  constructor(allInput, allOutput, buttons, outputContainer) {
    this.allInput = allInput;
    this.allOutput = allOutput;
    this.buttons = buttons;
    this.outputContainer = outputContainer;
    this.submitted;
  }

  editData() {
    if(!this.submitted) return
      this.outputContainer.style.boxShadow = '0px 0px 20px #fff';
    this.buttons.finishButton.style.opacity = 1;
    
    this.allOutput.forEach(output => {
      output.removeAttribute('disabled');
      output.style.backgroundColor = '#fff';
      output.style.color = '#000';
    })
  }
  
  finished() {
    if(!this.submitted) return;
    this.outputContainer.style.boxShadow = '';
    this.allOutput.forEach(output => {
      output.style.color = '#fff';
      output.setAttribute('disabled', '');
      output.style.backgroundColor = '#0f1c29';
    })
    this.buttons.finishButton.style.opacity = 0;
  }
  
  submitData(warn) {
    const [firstName, lastName, hobby] = this.allInput;
    const [firstNameOutput, lastNameOutput, hobbyOutput] = this.allOutput;
    
    if(firstName.value.trim() !== '' && lastName.value.trim() !== '' && hobby.value.trim() !== '') {
      firstNameOutput.value = firstName.value;
      lastNameOutput.value = lastName.value;
      hobbyOutput.value = hobby.value;
      this.submitted = true;
      this.outputContainer.style.opacity = '1';
      warn.innerHTML = '';

      this.allInput.forEach(input => input.value = '');
    } else {
      warn.innerHTML = 'Data tidak valid.';
      setTimeout(() => {
        warn.innerHTML = '';
      }, 3000);
    }
  }
  
  deleteData() {
    if(!this.submitted) return
    this.allOutput.forEach(output => {
      output.value = '';
    })
  }

  disableInputByCheckinput(lastNameVoid) {
    const lastName = this.allInput[1];

    if(lastNameVoid.checked) {
      lastName.setAttribute('disabled', '');
      lastName.removeAttribute('placeholder');
      lastName.value = 'None';
    } else {
      lastName.removeAttribute('disabled');
    }
  }
}

export default Crud;