let crypto = {
    Name: prompt("Введите ваше имя"),
    currency: prompt("Введите валюту (на английском)"),
    bitcoin: {
        name: "bitcoin",
        logo: "<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png' height = 20px width = 20px>",
        cash: "0,0054324 BTC",
        exRate: "826168 UAH",
    },
    ethereum: {
        name: "ethereum",
        logo: "<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ethereum_logo_2014.svg/1257px-Ethereum_logo_2014.svg.png' height = 20px width = 20px>",
        cash: "9,6807 ETH",
        exRate: "58014 UAH",
    },
    stellar: {
        name: "stellar",
        logo: "<img src='https://upload.wikimedia.org/wikipedia/commons/5/56/Stellar_Symbol.png' height = 20px width = 20px>",
        cash: "64 XLM",
        exRate: "3,13 UAH",
    },
}

function hello() {
    crypto.currency = crypto.currency.toLowerCase();
    if ( crypto.currency == crypto.bitcoin.name) {
        return document.write(" Добрый день, " + crypto.Name + "! На вашем балансе " + crypto.bitcoin.name + crypto.bitcoin.logo + " осталось " + crypto.bitcoin.cash + " монет, если вы сегодня продадите их, то получите " + crypto.bitcoin.exRate)
    } else if ( crypto.currency == crypto.ethereum.name ) {
        return document.write(" Добрый день, " + crypto.Name + "! На вашем балансе " + crypto.ethereum.name + crypto.ethereum.logo + " осталось " + crypto.ethereum.cash + " монет, если вы сегодня продадите их, то получите " + crypto.ethereum.exRate)
    } else if (crypto.currency == crypto.stellar.name ){
        return document.write(" Добрый день, " + crypto.Name + "! На вашем балансе " + crypto.stellar.name + crypto.stellar.logo + " осталось " + crypto.stellar.cash + " монет, если вы сегодня продадите их, то получите " + crypto.stellar.exRate)
    } else {
        alert("У вас такой валюты нет")
    }
}
hello();