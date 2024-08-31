import './styles/index.css';
import cardInit from './scripts/initCard.js';
import putCard from './scripts/card.js';
import {addLoader, removeLoader} from './scripts/loader.js';

const cardImage = document.querySelector('.card__image');
const cardTitle = document.querySelector('.card__title');
const nextButton = document.querySelector('.card__next-button');

const memes = require("random-memes");

const imageRegEx = /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf|webp|jpeg)$/;

const fetchMeme = async () => {
  addLoader(nextButton);
  const meme = await memes.reddit({ locale: "en" });
  console.log(meme);
  if(imageRegEx.test(meme.image)) {
    putCard(cardImage, cardTitle, meme.caption, meme.image)
  }else {
    fetchMeme()
  }
  removeLoader(nextButton);
};

nextButton.addEventListener('click', () => {
  fetchMeme();
})

putCard(cardImage, cardTitle, cardInit.name, cardInit.link);