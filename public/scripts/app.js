console.log("up and running index.html");

var apprList = [];
var apprTarget;

//JQUERY
$(document).ready(function(){
  console.log("jquery is working index.html");
  apprTarget = $('#apprList'); 
  const handleError = function(err) {
      console.log('error: ' + err);
  };



//MOVED THIS TO APP.JS

const handleSuccess = function(json) {
    apprTarget.empty();
    apprList = json;
    console.log(json);
    for(i=0; i<apprList.length; i++) {
        apprTarget.append(

          // `<div class="apprenticeship">
          //                       <div class="first-row">
          //                           <div class="apprenticeship-name"> ${apprList[i].company} <br> 
                                    
          //                       </div>
          //                       </div>
          //                       <div class="second-row">
          //                           <div class="app_email"> ${apprList[i].url}</div>
          //                           <div class="city-contact">
          //                           <p class="city"> ${apprList[i].city} </p>
          //                       </div>
          //                       </div>
          //                       <div class="third-row">
          //                           <p> 
          //                           ${apprList[i].description}
          //                           </p>
          //                       </div>
          //                   </div>`  
                            
                            
                        
          
        `
        <div class= "displayed-input"> 
        <li class = "company listItem">  Company: ${apprList[i].company},  </li>
        <li class = "city listItem">  City: ${apprList[i].city},  </li>
        <li class = "url listItem">  URL: ${apprList[i].url},  </li>
        <li class = "description listItem">  Description: ${apprList[i].description}  </li>
        </div>
        <br>
        `
        
        )}
    console.log(apprTarget);
}


    $.ajax({
        method: 'GET',
        url: '/api/add',
        success: handleSuccess,
        error: handleError
      });








function onSignIn(googleUser) {
  //debugger;
  console.log('googleUser?: ' + googleUser);
  let profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail());
   // This is null if the 'email' scope is not present.
   // access specific variables through local storage.
   
   console.log(profile.U3)
  //put ajax request here

  $.ajax({
        method: 'GET',
        url: `/user/${profie.U3}`,
        success: function( user ) {
          console.log('db user',user);
        },
        error: function() {
          alert('There was an error');
        }
    })
}



// $(document).ready(function() {
// $("#gmailUserSubmit").click(function(e) {
// // debugger;
// console.log("hello");
// let email = profile.getEmail();
// console.log(email);
// let name = profile.getName();
//   $.ajax({
//     method: 'POST',
//     url: '/user',
//     data: {
//       name: name,
//       email: email,
//     },
//     success: function( response ) {
//       console.log(response);
//     },
//     error: function() {
//       alert('There was an error');
//     },
//     beforeSend: function () {
//     },
//     complete: function () {
//     }
//   });
// });
// });

// $("#signOut").click(function() {
// function signOut() {
//   var auth2 = gapi.auth2.getAuthInstance();
//   auth2.signOut().then(function () {
//     localStorage.removeItem('user')
//     console.log('User signed out.');
//   });
// }
// })




}); // end of jquery
