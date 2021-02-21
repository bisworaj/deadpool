const chooseCurrency = document.getElementById('choose-currency');
const chooseExchangeCurrency = document.getElementById('choose-exchange-currency');
const chooseAmmount=document.getElementById('choose-ammount');
const chooseExchangeAmmount=document.getElementById('choose-exchange-ammount');

const rate=document.getElementById('rate')
const swap=document.getElementById('swap')

//Fetch exchange rates and update the dom

const caluculate=()=>{
    var currency1=chooseCurrency.value;
    var currency2=chooseExchangeCurrency.value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${currency1}`)
        .then(res=>res.json())
        .then((data)=>{
            console.log(data);
        });
}

chooseCurrency.addEventListener('change',caluculate);
chooseAmmount.addEventListener('input',caluculate);
chooseExchangeCurrency.addEventListener('change',caluculate);
chooseExchangeAmmount.addEventListener('input',caluculate);