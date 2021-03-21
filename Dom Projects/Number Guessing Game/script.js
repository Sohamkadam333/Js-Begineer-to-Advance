let count = 3;


// generating a random number
const random = Math.round(Math.random() * 10);
console.log(random, 'random');


document.querySelector('.guess').addEventListener('submit', function (e) {
        console.log('checking...');


        // var get
        const userInput = document.querySelector('#userInput');
        const error = document.querySelector('.error');



        // log user input value
        console.log(userInput.value, 'input value');



        // count (only 3 chances)

        // checking if number is less than equal to 10
        if (userInput.value != '' && userInput.value > 0 && userInput.value != 'undefined') {
                if (count > 0) {
                        if (userInput.value <= 10) {
                                count--;
                                console.log(count, 'count');

                                if (userInput.value == random) {
                                        error.textContent = 'Correct Guess';
                                        setTimeout(clearGame, 3000);
                                } else {
                                        error.textContent = `Guess Left ${count}`;
                                        error.style.color = 'green';

                                        if (count == 0) {
                                                error.textContent = `You Lost`;
                                                error.style.color = 'red';
                                                setTimeout(clearGame, 3000);
                                        }
                                }

                        }
                }


        }
        else {
                setTimeout(clearGame, 3000);
        }



        e.preventDefault();
});

function clearGame() {
        const error = document.querySelector('.error');
        error.textContent = "No Guess";
        error.style.color = 'black'
        const userInput = document.querySelector('#userInput');
        userInput.value = '';
        // count = 3;
}