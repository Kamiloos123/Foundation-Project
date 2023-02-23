const form = document.getElementById('Answers');

form.addEventListener('send', (event) => {
  event.preventDefault();

  const answer1 = document.querySelector('input[name="questionPrivacy"]:selected-value').value;
  const answer2 = document.querySelector('input[name="questionAvoid"]:checked').value;
  const answer3 = document.querySelector('input[name="questionCybersecurity"]:selected-value').value;
  const answer4 = document.querySelector('input[name="questionResponsiblePrivacy"]:checked').value;
  const answer5 = document.querySelector('input[name="questionInfo"]:checked').value;
  const answer6 = document.querySelector('input[name="questionFreq"]:checked').value;
  const answer7 = document.querySelector('input[name="questionAccept"]:checked').value;
  const answer8 = document.querySelector('input[name="questionDescribe"]:checked').value;
  const answer9 = document.querySelector('input[name="QuestionOpen]"').value;
  

  // EmailJS API
  (function() {
    emailjs.init("v4LdSJqfieVrBLaXu");
  })();
  
  const templateParams = {
    answer1: answer1,
    answer2: answer2,
    answer3: answer3,
    answer4: answer4,
    answer5: answer5,
    answer6: answer6,
    answer7: answer7,
    answer8: answer8,
    answer9: answer9
  };
  
  emailjs.send('service_tnkzhnv', 'template_sg6471a', templateParams)
    .then(function(response) {
       alert("Thank you for your answers. You can close this page now.");
    }, function(error) {
       console.error(error);
       alert('An error occurred while submitting your answers. Please try again later.');
    });
});
