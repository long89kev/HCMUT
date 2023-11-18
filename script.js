// JavaScript code for the homepage

// Get the FAQ elements on the FAQ page
const faqElements = document.querySelectorAll('.faq ul li');

// Add a click event listener to each FAQ element on the FAQ page
for (let i = 0; i < faqElements.length; i++) {
    faqElements[i].addEventListener('click', function() {
        // Toggle the visibility of the answer
        const answerElement = this.querySelector('answer');
        answerElement.classList.toggle('show');
    });
}
