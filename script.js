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
    const answers = document.querySelectorAll('input[type="radio"]:checked');
    const answersArray = Array.from(answers);

    if (answersArray.length < 5) {
      alert('Please answer all questions');
    } else {
      // Insert answers into the database
      for (let i = 0; i < answersArray.length; i++) {
        const answer = answersArray[i].value;
        await connection.query('INSERT INTO demographics VALUES (?)', [answer]);
      }
      
      alert('Thank you for your answers');
      // Get the values of the form and start new
      location.href = 'questionnaire.html';
    }
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
