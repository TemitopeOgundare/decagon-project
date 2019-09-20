function getUpdate(){

    $.ajax({
        type: 'get',
       url : 'http://localhost:3000/post',
       success:function(data){

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
    
</div>`


})
$(".update").html(mUpdate);
       }
    })
}
getUpdate();