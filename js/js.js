let sec=document.getElementById("service");
let secc=document.getElementById("serv2");
let secc2=document.getElementById("serv22");
let seccc=document.getElementById("serv3");
let secccc=document.getElementById("serv4");
let secccc4=document.getElementById("serv44");




var close=document.getElementById("close");

$('.kk').click(function(){
$('.spanTop').animate({top:"10%"},400)
$('.spanBot').animate({bottom:"10%"},200,function(){
$('.kk').hide(700,function(){
$('nav').animate({width:"100%"},1000,function(){
$('nav').animate({width:"51%"},1000,function(){
$('.box-ex').show(1000,function(){
$('.ex').css("transform","rotate(320deg)")
$('.ex').css("transition","1s")
$('.ex2').show(500)
$('.logo2 img').show(1000)
$('.contet-nav ul').fadeIn(2000)

$('.box-ex').click(function(){
$('.ex').css("transform","rotate(9000deg)")
$('.ex').css("transform","rotate(0deg)")
$('.ex2').css("transform","rotate(265deg)")
$('.ex2').hide(500,function(){
 $('.box-ex').fadeOut(1000)
 $('.logo2 img').hide(1000)
 $('.contet-nav ul').hide(1000)
$('nav').animate({width:"0%"},2000,function(){
$('.kk').show(1000,function(){
$('.spanTop').animate({marginTop:"-10px"},500)
$('.spanBot').animate({top:"10px"},500)

}) 
  
})

})
 })
  })  
 })  
})
 })
  
 })  
})

AOS.init();

 window.onscroll = function(){
if(window.scrollY >= sec.offsetTop-50 ){
$('.behine-serv').slideUp(2000)
}
if(window.scrollY >= sec.offsetTop ){
  $('.text-serv h3 span').animate({ width:"0%"},1000)
  window.onscroll = function(){
if(window.scrollY >= secc.offsetTop-400 ){
$('.behine-serv2').slideUp(2000)
}
if(window.scrollY >= secc.offsetTop-250 ){
  $('.text-serv3 h3 span').animate({ width:"0%"},1000)
  window.onscroll = function(){
if(window.scrollY >= secc2.offsetTop-300 ){
$('.behine-serv22').slideUp(2000)
}
if(window.scrollY >= secc2.offsetTop-250 ){
  $('.text-serv22 h3 span').animate({ width:"0%"},1000)
  window.onscroll = function(){
if(window.scrollY >= seccc.offsetTop-250 ){
$('.behine-serv3').slideUp(2000)
}
if(window.scrollY >= seccc.offsetTop-200 ){
  $('.text-serv4 h3 span').animate({ width:"0%"},1000)

  window.onscroll = function(){
if(window.scrollY >= secccc.offsetTop-250 ){
$('.behine-serv4').slideUp(2000)
}
if(window.scrollY >= secccc.offsetTop-250 ){
  $('.text-serv5 h3 span').animate({ width:"0%"},1000)
  window.onscroll = function(){
if(window.scrollY >= secccc4.offsetTop-250 ){
$('.behine-serv5').slideUp(2000)
}
if(window.scrollY >= secccc4.offsetTop-250 ){
  $('.text-serv55 h3 span').animate({ width:"0%"},1000)
}
  }
}
  
  }
}
}
  }
}
}
  }
}

  }

let aboutOfset= $('#about').offset().top;
$(window).scroll(function(){
 let windowScrol= $(window).scrollTop();
 if(windowScrol>aboutOfset){
  $('#mainNav').css('background','rgba(0,0,0,0.4)')
  $('.scrolTop').fadeIn(700)
 }else{
  $('#mainNav').css('background','transparent')
  $('.scrolTop').fadeOut(700)
 }
})
$('.scrolTop').click(function(){
  $("html,body").animate({scrollTop:"0"},100)
})

$('#loding').animate({ width:"100%"},1000,function(){
  $('#loding').animate({ width:"0%"},1000,function(){
$('body').css("overflow","auto")
 })
 })

   


$('.autoplay').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true, 
    arrows:false,
  })
  // shwos.addEventListener("click",function(){
  //   hides.classList.replace("d-none",'d-flex')
  // })
  // close.addEventListener("click",function(){
  //   hides.classList.replace("d-flex",'d-none')
  // })
  


