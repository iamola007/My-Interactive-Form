const correctAnswers = ['C', 'B', 'D', 'B', 'A'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];

    // check answers
    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 20;
        }
    });

    // Showing the result on the page.
    scrollTo(0, 0);
    if (score === 100) {
        result.querySelector('p').innerHTML = `You scored:<span class="text-primary display-4 p-3">${score}%</span>Impeccable performance, you are a star!`;
    } else if (score === 80) {
        result.querySelector('p').innerHTML = `You scored:<span class="text-primary display-4 p-3">${score}%</span>Excellent result, Keep it up.`;
    } else if (score === 60) {
        result.querySelector('p').innerHTML = `You scored:<span class="text-primary display-4 p-3">${score}%</span>Great job, you can do better though.`;
    } else if (score === 40) {
        result.querySelector('p').innerHTML = `You scored:<span class="text-primary display-4 p-3">${score}%</span>Fair result, but why don't you try again.`;
    } else if (score === 20) {
        result.querySelector('p').innerHTML = `You scored:<span class="text-primary display-4 p-3">${score}%</span>This result needs improvement, give it one more try and do better this time.`;
    } else {
        result.querySelector('p').innerHTML = `You scored:<span class="text-primary display-4 p-3">${score}%</span>You can do better. Try again.`;
    }
    result.classList.remove('d-none');

    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;
        if (output === score) {
            clearInterval(timer);
        } else {
            output++;
        }
}, 10);
});