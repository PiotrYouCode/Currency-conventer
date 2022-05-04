{
     const chooseCurrency = () => {

        const currencyElement = document.querySelector(".js-currency");
        const exchangeElement = document.querySelector(".js-exchange");
        const eurRate = 4.894;
        const usdRate = 4.483;
        switch (currencyElement.value) {
            case "EUR":
                return exchangeElement.value = eurRate;
                ;
            case "USD":
                return exchangeElement.value = usdRate;
                ;
        }
    };

    const calculateAmount = (event) => {
        event.preventDefault();
        const amountElement = document.querySelector(".js-amount");
        const resultElement = document.querySelector(".js-result");
        const currencyElement = document.querySelector(".js-currency");
        const exchangeElement = document.querySelector(".js-exchange");


        const currency = currencyElement.value;
        const amount = amountElement.value;
        const exchange = exchangeElement.value;
        const result = amount / exchange;

        resultElement.innerText = `${result.toFixed(2)} ${currency}`
    };

    const init = () => {

        const currencyElement = document.querySelector(".js-currency");
        const formElement = document.querySelector(".js-form");

        currencyElement.addEventListener("input", chooseCurrency);
        formElement.addEventListener("submit", calculateAmount);

    };
  

    init();
};

const resetResult = () => {
    formElement.addEventListener("reset", () => {
        resultElement.innerText = "N/A";
    });
}