// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function Cards(cardData) {
  const card = document.createElement('div');
  const headline = document.createElement('div');
  const author = document.createElement('div');
  const imgContainer = document.createElement('div');
  const img = document.createElement('img');
  const authorsName = document.createElement('span');

  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imgContainer);
  imgContainer.appendChild(img);
  author.appendChild(authorsName);

  card.classList.add('card');
  headline.classList.add('headline');
  author.classList.add('author');
  imgContainer.classList.add('img-container');

  headline.textContent = cardData.headline;
  img.src = cardData.authorPhoto;
  authorsName.textContent = cardData.authorName;

  return card;
}

const cardsContainer = document.querySelector('.cards-container');

const makeCards = async url => {
  try {
    let res = await axios.get(url);
    let articles = res.data.articles;
    for (let key in articles) {
      if (articles.hasOwnProperty(key)) {
        articles[key].forEach(article => {
          cardsContainer.appendChild(Cards(article));
        });
      }
    }
  } catch (err) {
    console.log(err);
  }
};

makeCards('https://lambda-times-backend.herokuapp.com/articles');
