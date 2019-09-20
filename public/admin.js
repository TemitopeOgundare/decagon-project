
 let updateid=''
 getUpdate()
function getUpdate(){

    $.ajax({
        type: 'get',
       url : 'http://localhost:3000/post',
       success:function(data){
           localStorage.setItem('update',JSON.stringify(data))

         let mUpdate='';
$.each(data,function(i,v){
mUpdate +=`<div class="container-fluid page">
<div><img src="${v.imageUrl}" class="image image--medium image--curvy"></div>
<div>
        <h3><a href="">"${v.titleUrl}"</a></h3>
        <h6>"${v.role}"</h6>
        <h6>"${v.location}"</h6>
        <p class="u-ellipsis-line">"${v.description}"</p>
    </div>
    <button value="${v.id}"class="updateButton">Update</button>
    <button value="${v.id}" class="deleteButton">Delete</button>
</div>`


})
$(".update").html(mUpdate);
       }
    })
}
getUpdate();
$('body').on('click','.deleteButton',function(e){
    e.preventDefault();
  let id= $(this).val();
    $.ajax({
        method : "delete",
        url : `http://localhost:3000/post/${id}`,
        success:function(a){
            getUpdate();
        }
    });
});
$('body').on('click','.updateButton',function(e){
    e.preventDefault();
    $('#optionForm').hide(-1000)
    updateid= $(this).val();
    let getFromLocalStorage = localStorage.getItem('update');
    let allData=JSON.parse(getFromLocalStorage)
    let getDataById=''
    $.each(allData,function(i,v){
        let imageUrl = v.imageUrl;
        let title = v.titleUrl;
        let role = v.role;
        let location = v.location;
        let description = v.description;
         
         getDataById +=`
         <form class='form'>
         <div class="form-group">
             <input type="url" class="form-control "   value='${imageUrl}'  id="imageUrl" required="required" placeholder="Logo" />
         </div>
         <div class="form-group">
              <input type="text" class="form-control " value='${title}' id="title" required="required" placeholder="Job title" />
          </div>
         <div class="form-group">
             <input type="text" class="form-control " value='${role}' id="role" required="required"  placeholder="Job Role" />
         </div>
         <div class="form-group">
              <input type="text" class="form-control " value='${location}' id="location" required="required"  placeholder="Location" />
          </div>
         <div class="form-group">
         <textarea name="message" required="required" value=''id="description" class="form-control" style="min-height: 150px;" placeholder="Job description">${description}</textarea>
         </div>
         <div class="form-group">
             <button type="submit" id="edit_job" class="btn btn-info btn-block btn-lg">EDIT JOB</button>
         </div>
         </form>
`


    })
    $('.editForm').html( getDataById)

});
$('body').on('click','#edit_job',function(){
    getUpdated();

})
function getUpdated(){
    
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
  
    $.ajax({
        method : "put",
        contentType:'Application/json',
        url : `http://localhost:3000/post/${updateid}`,
        data:JSON.stringify(data),
        success:function(a){
            alert('success')
             getUpdate();
            
        }
    });
}
