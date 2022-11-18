let allRatings = document.querySelectorAll('.list-item');
const btn = document.querySelector('.submit-btn');
const span = document.querySelector('#rating');
const thankyou = document.querySelector('.th-container');
const main = document.querySelector('.rating-container');

allRatings.forEach((ratings) => ratings.addEventListener('click', () => {
    let rating = ratings.innerHTML;
    allRatings.forEach((rate) => {
        if (rate.classList.contains('selected')) {
            rate.classList.remove('selected');
        }
    })

    ratings.classList.add('selected');

    btn.addEventListener('click', () => {
        span.innerHTML = rating;
        thankyou.style.display = 'flex';
        main.style.display = 'none';
    })
}));