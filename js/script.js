let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let exchangeElement = document.querySelector(".js-exchange");
let resultElement = document.querySelector(".js-result");


let eurRate = 4.894;
let usdRate = 4.483;

formElement.addEventListener("input",() => {
    let currency =currencyElement.value;
    switch(currency){
    case "EUR":
        exchangeElement.value = eurRate;
        break;
    case "USD":
        exchangeElement.value = usdRate;
        break;
    case "":
        exchangeElement.value = "";
        break;
    
    }
});


formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let currency = currencyElement.value;
    let amount = amountElement.value;
    let exchange = exchangeElement.value;
    let result= amount/exchange;

resultElement.innerText = result.toFixed(2);

});

formElement.addEventListener("reset", (event) => {
    resultElement.innerText =`N/A`;
});
