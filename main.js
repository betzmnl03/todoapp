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
    let closesttext=".taskcl.border"
    final.addClass("border");
    
   
      })


      $('.item').on('click', 'i.fa.fa-trash', (event)=>{
        $(event.currentTarget).parent().remove();
      })
      $('.item').on('click', 'i.fa.fa-check', (event)=>{
        $(event.currentTarget).parent().toggleClass("strike");
      })

 
})
