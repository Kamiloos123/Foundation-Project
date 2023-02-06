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
// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get the "Yes" button
var yesBtn = document.getElementById("yesBtn");

// Get the "No" button
var noBtn = document.getElementById("noBtn");

// When the page loads, open the modal
window.onload = function() {
  modal.style.display = "block";
}

// When the user clicks on the "Yes" button
yesBtn.onclick = function() {
  // Do something here, such as redirecting the user to another page
  window.location.href = "https://www.example.com";
}

// When the user clicks on the "No" button
noBtn.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
