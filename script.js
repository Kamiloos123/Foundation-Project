// JavaScript for validating the questionnaire and sending them to a database
const form = document.getElementById('questionnaire');

const mysql = require('mysql2/promise');


form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const connection = await mysql.createConnection({
    host: 'kamil-foundation-server.mysql.database.azure.com',
    user: 'admin1',
    password: 'Waser567765.',
    database: 'project',
    port: 3306,
    ssl: {
      ca: fs.readFileSync('DigiCertTLSRSA4096RootG5.crt'),
    },
  });

  try {
    const answer1 = document.querySelector('input[name="questionGender"]:checked').value;
    const answer2 = document.querySelector('input[name="questionAge"]:checked').value;
    const answer3 = document.querySelector('input[name="questionEducation"]:checked').value;
    const answer4 = document.querySelector('input[name="questionIT"]:checked').value;

    await connection.query('INSERT INTO demographics (Gender, Age, Education, IT) VALUES (?, ?, ?, ?)', [answer1, answer2, answer3, answer4]);
      
    alert('Thank you for your answers');
    // Get the values of the form and start new
    location.href = 'questionnaire.html';
  } catch (err) {
    console.error(err);
    alert('An error occurred while submitting your answers. Please try again later.');
  } finally {
    connection.end();
  }
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
  window.location.href = "";
}

// When the user clicks on the "No" button
noBtn.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}


const ratingSelect = document.getElementById('rating-select');
const selectedValue = document.querySelector('.selected-value');

ratingSelect.addEventListener('change', () => {
  const selectedOption = ratingSelect.options[ratingSelect.selectedIndex];
  selectedValue.textContent = `You rated our website a ${selectedOption.value}/10.`;
});
