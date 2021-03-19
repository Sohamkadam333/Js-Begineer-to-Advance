document.querySelector('#loan-form').addEventListener('submit', function (e) {
        // Hide Reuslts
        document.querySelector('#results').style.display = 'none';



        // show loader
        document.querySelector('#loading').style.display = 'block';

        setTimeout(calculate, 3000);

        e.preventDefault();
});



// claculate function
function calculate() {
        console.log('calculating...');

        // varibales get
        const amount = document.querySelector('#amount');
        const interest = document.querySelector('#interest');
        const years = document.querySelector('#years');
        const monthlyPayment = document.querySelector('#monthlyPayment');
        const totalPayment = document.querySelector('#totalPayment');
        const totalInterest = document.querySelector('#totalInterest');



        const loanAmount = parseFloat(amount.value);
        const loanInterest = parseFloat(interest.value) / 100 / 12;
        const loanPayments = parseFloat(years.value) * 12;




        // computed Monthly Payement
        const x = Math.pow(1 + loanInterest, loanPayments);
        const monthly = (loanAmount * x * loanInterest) / (x - 1);

        if (isFinite(monthly)) {
                monthlyPayment.value = monthly.toFixed(2);
                totalPayment.value = (monthly * loanPayments).toFixed(2);
                totalInterest.value = ((monthly * loanPayments) - loanAmount).toFixed(2);
                // show Reuslts
                document.querySelector('#results').style.display = 'block';



                // hide loader
                document.querySelector('#loading').style.display = 'none';
        } else {

                console.log('please check your number');
                showError('plase check Your Number');
        }


}

function showError(error) {
        // show Reuslts
        document.querySelector('#results').style.display = 'none';


        // hide loader
        document.querySelector('#loading').style.display = 'none';

        // create div element
        const errorDiv = document.createElement('div');

        // add class to div
        errorDiv.className = 'alert alert-danger';

        // Get elements
        const card = document.querySelector('.card');
        const heading = document.querySelector('.heading');



        // create text bode and append to div
        errorDiv.appendChild(document.createTextNode(error));


        // Insert error above Heading
        card.insertBefore(errorDiv, heading);


        // clear error after 3 seconds
        setTimeout(clearError, 3000);

}


function clearError() {
        document.querySelector('.alert').remove();
}