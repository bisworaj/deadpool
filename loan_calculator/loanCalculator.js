document.getElementById('loan-form').addEventListener('submit',calculateResult);
const h5=document.querySelector('#results h5');

function calculateResult(e){

    const  amount = document.getElementById('amount');
    const  interest = document.getElementById('interest');
    const  years = document.getElementById('years');
    const  monthlyPayment = document.getElementById('monthly-payment');
    const  totalPayment = document.getElementById('total-payment');
    const  totalInterst = document.getElementById('total-interest');
  
    const principal=parseFloat(amount.value);
    const calculatedInterest=parseFloat(interest.value)/100/12
    const calculatedPayments=parseFloat(years.value)*12;

    //logical things (formula)
    const x=Math.pow(1+calculatedInterest,calculatedPayments);
    const monthly=(principal*x*calculatedInterest)/(x-1);

    if(isFinite(monthly)){
        monthlyPayment.value=monthly.toFixed(2);
        totalPayment.value=(monthly*calculatedPayments).toFixed(2);
        totalInterst.value=((monthly*calculatedPayments)-principal).toFixed(2);
    }else{
        document.getElementById("results").classList.add("error")
        h5.textContent="error: please add numbers";
    }

    e.preventDefault()
}
//