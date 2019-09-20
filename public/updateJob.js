$(function(){
    
    function postUpdate() {
       let imageUrl = $('#imageUrl').val();
        let title = $('#title').val();
        let role = $('#role').val();
        let location = $('#location').val();
        let description = $('#description').val();

        let data = {
     "imageUrl": imageUrl,
      "titleUrl": title,
      "role": role,
      "location":location,
      "description": description
        }
        alert(JSON.stringify(data))
     $.ajax({
        method : 'POST',
        url : 'http://localhost:3000/post',
        contentType: 'Application/json',
        data: JSON.stringify(data),
       success:function(a){
           alert('Posted');

       },error:function(e){
           alert(JSON.stringify(e))
       }

     });


       
      // console.log(imageUrl);
    }
    $('#update').click(function(){
        postUpdate();
    });
})