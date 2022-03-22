// api.js
const fetchCoins = async () => {
  const url = 'https://api.coincap.io/v2/assets';

  try {
    const coins = await fetch(url);
    const response = await coins.json();
    const data = await response.data;
    return data;
  } catch (error) {
    return error;
  }
}

const setCoins = async () => {
  const myCryptos = await fetchCoins();
  const cryptoList = document.querySelector('#crypto-list');

  myCryptos.filter((elemento, index) => index < 10).forEach((coin) => {
    const newLi = document.createElement('li');
    newLi.innerText = `${coin.name} (${coin.symbol}: ${coin.priceUsd})`;
    cryptoList.appendChild(newLi);
  })
}

window.onload = () => setCoins();