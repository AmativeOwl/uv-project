// let emails = [], emailSent = false, templateParams;
// let uvValue = $('.uv-info > h2').text();
// let time = new Date(); 

// emailjs.init("nVOT0ZSWezGk_KC5U");

// $('#reminders > button').click(function(e) {
//   e.preventDefault();
//   var emailValue = $('#reminders > .email').val();
//   emails.push(emailValue); 

//   if (uvValue.includes('UV: ')) {
//     let uvIndex = parseFloat(uvValue.slice(4, ).trim());
//     if (uvIndex >= 6 && !emailSent) {
//       let emailList = emails.join(",");

//       templateParams = {
//         to_email: emailList
//       };
      
//       emailjs.send('service_7t88qu8', 'template_3lmgjxc', templateParams)
//       .then(function(response) {
//         alert("Success! You will receive an email everytime the UV index is classified as High. Stay safe and protect yourself!");
//         console.log('SUCCESS!', response.status, response.text);
//         emailSent = true; 
//       }, function(error) {
//         console.log('FAILED...', error);
//       });
//     }
//   }
// })

// if (time.getHours() === 0) {
//   emailSent = false; 
// }