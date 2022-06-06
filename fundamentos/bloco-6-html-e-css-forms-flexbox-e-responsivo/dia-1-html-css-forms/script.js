window.onload = function() {
  const clearButton = document.querySelector('#clearBtn');
  clearButton.addEventListener('click', clearForm);
  const sendButton = document.querySelector('#sendBtn');
  sendButton.addEventListener('click', submitEvent);
  const agreement = document.querySelector('#agreement');
  agreement.addEventListener('change', enableSubmit)
};

function submitEvent(event) {
  event.preventDefault();
  const validation = textInputValidation();
  if (validation === false) {
    alert('Dados inválidos');
  } else {
    alert('Dados enviados com sucesso!');
  }
}

function clearForm() {
  const formElements = document.querySelectorAll('input');
  const textArea = document.querySelector('textarea');
  for (let index = 0; index < formElements.length; index += 1) {
    const userInput = formElements[index];
    userInput.value = '';
    userInput.checked = false;
  }
  textArea.value = '';
}

function enableSubmit() {
  const sendButton = document.querySelector('#sendBtn');
  const agreement = document.querySelector('#agreement');
  sendButton.disabled = !agreement.checked;
}

function textInputValidation() {
  const email = document.querySelector('#email').value.length;
  const invalidEmail = email < 10 || email > 50;

  const name = document.querySelector('#fullName').value.length;
  const invalidName = name < 10 || name > 40;

  const reason = document.querySelector('#description').value.length;
  const invalidReason = reason > 500;

  if (invalidEmail || invalidName || invalidReason) {
    return false;
  }
  else {
    return true;
  }
}


