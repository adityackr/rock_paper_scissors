// Plan
// **** get the computer guess
// **** get the user guess via prompt. All character must be in lower case
// **** rock beats scissors
// **** paper beats rock
// **** scissors beats paper

let computerScore = 0;
let playerScore = 0;

const computerPlay = () => {
	arr = ['rock', 'paper', 'scissors'];
	return arr[Math.floor(Math.random() * arr.length)];
};

const playRound = (playerSelection, computerSelection) => {
	if (playerSelection === 'rock' && computerSelection === 'paper') {
		computerScore++;
		return 'You loose! ✋ beats ✊';
	} else if (playerSelection === 'scissors' && computerSelection === 'rock') {
		computerScore++;
		return 'You loose! ✊ beats ✌';
	} else if (playerSelection === 'paper' && computerSelection === 'scissors') {
		computerScore++;
		return 'You loose! ✌ beats ✋';
	} else if (playerSelection === computerSelection) {
		return 'Match drawn!';
	} else {
		playerScore++;
		return 'YOU WIN!🥳';
	}
};

for (let i = 0; i < 5; i++) {
	const playerSelection = prompt(
		'Please enter rock, paper or scissors: '
	).toLowerCase();
	const computerSelection = computerPlay();
	console.log(`Round: ${i + 1}`);
	console.log(`You: ${playerSelection}, Computer: ${computerSelection}`);
	console.log(playRound(playerSelection, computerSelection));
}

console.log(`Computer: ${computerScore}, You: ${playerScore}`);

if (computerScore > playerScore) {
	console.log('Sorry! Computer beats You!😟😟');
} else if (computerScore < playerScore) {
	console.log('Congratulations! You beat Computer! 🎉🎉');
} else {
	console.log('Match Tied!');
}
