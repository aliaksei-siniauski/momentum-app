export { getQuotes, clickToChangeQuotes };

const quote = document.querySelector(".quote");
const author = document.querySelector(".author");

const getRandomNum = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNum;
};

async function getQuotes() {
  const quotes = "/src/js/data.json";
  const res = await fetch(quotes);
  const data = await res.json();

  let randomQuote = getRandomNum(0, data.length - 1);
  quote.textContent = data[randomQuote].text;
  author.textContent = data[randomQuote].author;
}
getQuotes();

const clickToChangeQuotes = () => {
  document.querySelector(".change-quote").addEventListener("click", getQuotes);
};
clickToChangeQuotes();
