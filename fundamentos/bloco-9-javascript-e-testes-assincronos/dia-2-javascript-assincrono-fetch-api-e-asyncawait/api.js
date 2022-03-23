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

  myCryptos.forEach((elemento, index) => {
    if (index < 20) {
      const newLi = document.createElement('li');
      const fixedPrice = parseFloat(elemento.priceUsd).toFixed(2)
      newLi.innerText = `${elemento.name} (${elemento.symbol}): ${fixedPrice}`;
      cryptoList.appendChild(newLi);
    }
  })
}

window.onload = () => setCoins();