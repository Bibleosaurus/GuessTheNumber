const inputField = document.getElementById("input");
const guessButton = document.getElementById("guessB");
const resultField = document.getElementById("result");
const guessbtn = document.querySelector('.guess')
const attemptsField = document.getElementById("numberofA");
const randomGuess = Math.floor(Math.random() * 100) + 1;
console.log(randomGuess);
let guess = 0;

guessButton.addEventListener("click", () => {
	let inputValue = parseInt(inputField.value);
	let newguess = guess;
	console.log(typeof inputValue);

    if (isNaN(inputValue) || inputValue > 100 || inputValue < 1) {
		
		resultField.innerText = ` Your guess was invalid value. Please enter a number between 1-100!`
		attemptsField.innerText = `${guess}`
		guess = guess + 1;
		document.getElementById('input').value = ''
    
    }else if(inputValue === randomGuess) {
		guess = guess + 1;
		resultField.innerText = `Congrats ${inputValue} is the correct number, Wanna play again ?`
		attemptsField.innerText = ` ${guess} Not bad`
		document.getElementById('input').value = ''
		checkButton.style.display = 'none';
		const refreshButton = document.createElement('button');
		refreshButton.innerHTML = 'Play Again';
		refreshButton.classList.add('play_again');
		refreshButton.addEventListener('click', () => {
			location.reload();
		});
		guessbtn.appendChild(refreshButton);

    }else if (inputValue > randomGuess) {
		guess = guess + 1;
        
        if(inputValue - 10 > randomGuess){
		resultField.innerText = `${inputValue} is too high, try a lower number.`
		attemptsField.innerText = `${guess}`
		document.getElementById('input').value = ''
		return newguess;
        }else{
        resultField.innerText = `${inputValue} is close, just try a little lower number.`
        document.getElementById('input').value = ''
		return newguess;
        }

    }else if (inputValue < randomGuess) {
		guess = guess + 1;
        if(inputValue + 10 < randomGuess){
		resultField.innerText = `  ${inputValue} is too low, try a higher number.`
		attemptsField.innerText = `${guess}`
		document.getElementById('input').value = ''
		return newguess;
        }else{
        resultField.innerText = `${inputValue} is close, just try a little higher number.`
        document.getElementById('input').value = ''
		return newguess;
        }
    }});

    function guessRandom(randomGuess) {
        return (randomGuess > 0 && randomGuess < 101);
    }    