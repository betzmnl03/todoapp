$(document).ready(() => {


    
    let count=0;

 $('.btn').on('click',()=>{
    
    
   
    count+=1;
    let tasknum="task"+count;
    let taskcl="."+tasknum;
    let del=$("<i class='fa fa-trash'></i>");
    let check=$("<i class='fa fa-check'></i>");
    let task=$(".item").append($(`<div class=${tasknum}></div>`).text($('.form-control').val()));
    let final=$(taskcl).append(del,check);
    
    final.addClass("border");
    $('.form-control').val("")

     
    $('i.fa.fa-trash').on('click', (event)=>{
        $(event.currentTarget).parent().remove();
       })


    $('i.fa.fa-check').on('click', (event)=>{
        $(event.currentTarget).parent().toggleClass("strike");
       })
    
      })

 
})
