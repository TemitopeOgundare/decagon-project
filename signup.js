$(document).ready(function() {
    $('.regMessage').hide();

   $('#regSubmit').click(function(event){
       event.preventDefault();
    const email = $('#email').val();
    const password = $('#password').val();
    if (email =="" || password =="" ) {
        $('.regMessage').show();
        $('#loading').hide();
    }

    $.ajax({
        method: 'GET',
        url: `http://localhost:3000/admin?email=${email}&password=${password}`,
      data: {
        email,
        password,
      },
      beforeSend: function() {
        $('#loading').html('<img src="./assets/img/loading.gif">');
      },
     success:function(response){
            if(response.length) {
                $('.checkLogin').text('You are logged in');
                // window.location.assign('tessss');
            }
            
        }



    });
    
   });
});


