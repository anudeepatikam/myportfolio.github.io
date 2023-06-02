$(document).ready(function(){
   
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
       $('header').toggleClass('toggle'); 
    });
  
    $(window).on('scroll load',function(){
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle'); 

        if($(window).scrollTop() >0){
            $('.top').show();
        }
        else{
            $('.top').hide(); 
        }
    }); 
    // smooth scroling 
    $('a[href*="#"]').on('click',function(e){
             e.preventDefault();
             $('html, body').animate({
                scrollTop:$($(this).attr('href')).offset().top,

             },
             500,
             'linear'
             );
    });
});
const downloadBtn=document.querySelector(".download-btn");
const fileLink="https://drive.google.com/file/d/108-eMlxLhjcBcxFM97yYJdxvpXfmm3C_/view";
const initTimer=()=>{
        let timer=downloadBtn.CDATA_SECTION_NODE.timer;
        downloadBtn.classList.add("timer");
       
        const initCounter=setInterval(()=>{
            
            clearInterval(initCounter);
            location.href=fileLink;
           
           
        }
        ,1000);
};
downloadBtn.addEventListener("click",initTimer);