const MIN_RATING = 1;
const MAX_RATING = 10;

let reviewList = [];

const render = () => {
  const ul = document.createElement('ul');
  let sum = 0;

  reviewList.forEach((r) => {
    const reviewItem = createReview(r);
    ul.appendChild(reviewItem);
    sum += r.rating;
  });

  const reviews = document.getElementById('reviews');
  reviews.innerHTML = '';
  reviews.appendChild(ul);

  const avgRatingString = reviewList.length ? (sum/reviewList.length).toString() + '/' + MAX_RATING.toString() : 'N/A';

  const showAvgRatingElement = document.getElementById('show-avg-rating');
  if(showAvgRatingElement) {
    console.warn('Removing existing avg div');
    showAvgRatingElement.parentNode.removeChild(showAvgRatingElement);
  }

  const newShowAvgRatingElementDiv = document.createElement('div');
  newShowAvgRatingElementDiv.id = 'show-avg-rating';
  const newShowAvgRatingElementSpan = document.createElement('span');
  newShowAvgRatingElementSpan.textContent = avgRatingString;
  newShowAvgRatingElementDiv.appendChild(newShowAvgRatingElementSpan);

  document.getElementById('show-content').appendChild(newShowAvgRatingElementDiv);
}

const createReview = (r) => {
  const reviewListItem = document.createElement('li');
  const reviewTextDiv = document.createElement('div');
  const reviewTextSpan = document.createElement('span');
  const reviewRatingDiv = document.createElement('div');
  const reviewRatingSpan = document.createElement('span');

  reviewTextSpan.textContent = r.text;
  reviewTextDiv.appendChild(reviewTextSpan);

  reviewRatingSpan.textContent = stringifyRating(r.rating);
  reviewRatingDiv.appendChild(reviewRatingSpan);

  reviewListItem.appendChild(reviewTextDiv);
  reviewListItem.appendChild(reviewRatingDiv);

  return reviewListItem;
}

const stringifyRating = (rating) => {
  return rating.toString() + '/' + MAX_RATING.toString();
}

const onSubmit = () => {
  const reviewTextElement = document.getElementById('review-box');
  const reviewRatingElement = document.getElementById('rating');

  const newReview = {
    text: reviewTextElement.value,
    rating: Number(reviewRatingElement.value)
  }

  if(!newReview.text || newReview.rating < MIN_RATING || newReview.rating > MAX_RATING) {
    console.error('Invalid input', {newReview});
    return;
  }

  reviewList.push(newReview);
  saveToLocalStorage();
  render();
}

const LOCAL_STORAGE_ITEM_KEY = 'reviews';

const loadFromLocalStorage = () => {
  const reviewsString = localStorage.getItem(LOCAL_STORAGE_ITEM_KEY);
  const reviewsObj = JSON.parse(reviewsString);

  return reviewsObj ?? [];
}

const saveToLocalStorage = () => {
  localStorage.setItem(LOCAL_STORAGE_ITEM_KEY, JSON.stringify(reviewList));
}

reviewList = loadFromLocalStorage();
render();
