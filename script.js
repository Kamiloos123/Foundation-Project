// JavaScript for validating the questionnaire and sending them to a database
// JavaScript for validating the questionnaire and sending them to an email address
const form = document.getElementById('questionnaire');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const answer1 = document.querySelector('input[name="questionGender"]:checked').value;
  const answer2 = document.querySelector('input[name="questionAge"]:checked').value;
  const answer3 = document.querySelector('input[name="questionEducation"]:checked').value;
  const answer4 = document.querySelector('input[name="questionIT"]:checked').value;

  // EmailJS API
  (function() {
    emailjs.init("v4LdSJqfieVrBLaXu");
  })();
  
  const templateParams = {
    answer1: answer1,
    answer2: answer2,
    answer3: answer3,
    answer4: answer4
  };
  
  emailjs.send('service_tnkzhnv', 'template_pmnig42', templateParams)
    .then(function(response) {
       alert("Thank you for your answers.");
       location.href = 'questionnaire.html';
    }, function(error) {
       console.error(error);
       alert('An error occurred while submitting your answers. Please try again later.');
    });
});


var chosen = null;

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
  // Sends yes answer to the database
  chosen = "yes";
  modal.style.display = "none";
}

// When the user clicks on the "No" button
noBtn.onclick = function() {
  chosen = "no";
  modal.style.display = "none";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  chosen = "cross";
  modal.style.display = "none";
}

learnmore.onclick = function() {
  chosen = "learnmore";
  modal.style.display = "none";
}


const ratingSelect = document.getElementById('rating-select');
const selectedValue = document.querySelector('.selected-value');

ratingSelect.addEventListener('change', () => {
  const selectedOption = ratingSelect.options[ratingSelect.selectedIndex];
  selectedValue.textContent = `You rated our website a ${selectedOption.value}/10.`;
});

