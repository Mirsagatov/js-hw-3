var elForm = document.querySelector('.form');
var elNumberInput = elForm.querySelector('.form-input');
var elSelectInput = elForm.querySelector('.form-select')
var elResultBox = elForm.querySelector('.result-box');



//console.log(fizzBuzz(30));

function submitElForm(evt) {
	evt.preventDefault();
	var numberInput = Number(elNumberInput.value.trim());
	elResultBox.textContent = `${numberInput}UZS = ${(numberInput/elSelectInput.value).toFixed(3)}`;
}

elForm.addEventListener('submit', submitElForm);