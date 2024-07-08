const MIN_RATING = 1;
const MAX_RATING = 10;

let reviewList = [];

const createAverateRatingElement = (reviewList) => {
  let sum = 0;
  reviewList.forEach((reviewItem) => sum += reviewItem.rating);

  const avgRatingString = reviewList.length ? (sum/reviewList.length).toString() + '/' + MAX_RATING.toString() : 'N/A';

  const showAvgRatingElement = document.getElementById('show-avg-rating');
  if(showAvgRatingElement) {
    showAvgRatingElement.parentNode.removeChild(showAvgRatingElement);
  }
  const newShowAvgRatingElementDiv = document.createElement('div');
  newShowAvgRatingElementDiv.id = 'show-avg-rating';
  const newShowAvgRatingElementSpan = document.createElement('span');
  newShowAvgRatingElementSpan.textContent = avgRatingString;
  newShowAvgRatingElementDiv.appendChild(newShowAvgRatingElementSpan);

  return newShowAvgRatingElementDiv;
}

const render = () => {
  const todoListElement = document.createElement('ul');

  reviewList.forEach((review) => {
    const reviewItem = createReview(review);
    todoListElement.appendChild(reviewItem);
  });

  const reviews = document.getElementById('reviews');
  reviews.innerHTML = '';
  reviews.appendChild(todoListElement);

  const averateRatingElement = createAverateRatingElement(reviewList);

  document.getElementById('show-content').appendChild(averateRatingElement);
}

const createReview = (review) => {
  const reviewListItem = document.createElement('li');
  const reviewTextDiv = document.createElement('div');
  const reviewTextSpan = document.createElement('span');
  const reviewRatingDiv = document.createElement('div');
  const reviewRatingSpan = document.createElement('span');
  const reviewDeleteDiv = document.createElement('div');
  const reviewDeleteButton = document.createElement('button');

  reviewTextSpan.textContent = review.text;
  reviewTextDiv.appendChild(reviewTextSpan);

  reviewRatingSpan.textContent = stringifyRating(review.rating);
  reviewRatingDiv.appendChild(reviewRatingSpan);

  reviewDeleteButton.textContent = 'Remove';
  reviewDeleteButton.onclick = () => removeReview(review);
  reviewDeleteDiv.appendChild(reviewDeleteButton);

  reviewListItem.appendChild(reviewTextDiv);
  reviewListItem.appendChild(reviewRatingDiv);
  reviewListItem.appendChild(reviewDeleteDiv);

  return reviewListItem;
}

const removeReview = (review) => {
  reviewList = reviewList.filter((item) => review !== item);
  saveToLocalStorage();
  render();
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
