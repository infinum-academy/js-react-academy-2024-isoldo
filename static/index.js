const MIN_RATING = 1;
const MAX_RATING = 10;

let reviewList = [
  {
    text: 'Saul Goodman!',
    rating: 10
  },
  {
    text: 'Justice for Chuck!',
    rating: 1
  }
];

const render = () => {
  const ul = document.createElement('ul');

  reviewList.forEach((r) => {
    const reviewItem = createReview(r);
    ul.appendChild(reviewItem);
  });

  const el = document.getElementById('reviews');
  el.innerHTML = '';
  el.appendChild(ul);
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
  render();
}

render();
