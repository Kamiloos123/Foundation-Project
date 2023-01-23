// JavaScript for validating the questionnaire and displaying the results
const form = document.getElementById('questionnaire');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  // Get the values of the form and start new
  location.href='questionnaire.html';
  
  let score = 0;

  // Validate the form and calculate the score
//   const question1 = form.questionGender.value;
//   if (question1 === 'red') {
//     score++;
//   }
//   const question2 = form.questionAge.value;
//   if (question2 === 'cat') {
//     score++;
//   }

//   // Display the results
//   alert(`You scored ${score} out of 2`);
});

