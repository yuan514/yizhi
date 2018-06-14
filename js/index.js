$(function () {
    window.onscroll=function(){
        var scrollTop=document.body.scrollTop!=0?document.body.scrollTop:document.documentElement.scrollTop;
        var height=20;
        if (scrollTop>=height) {
            $('.nav').css({background:'white'});
            $('.nav  .white').css({display:'none'});
            $('.nav .blue').css({display:'block'});
            $('.nav ul li a').css({color:'#999999'});
            $(".nav ul li a:has(span)").css({color:'#00a5ea'});
            $('.nav').addClass('border_bottom');
        }else{
            $('.nav  .blue').css({display:'none'});
            $('.nav').css({background:'rgba(255, 255, 255,0)'});
            $('.nav').removeClass('border_bottom');
            $('.nav  .white').css({display:'block'});
            $('.nav ul li a').css({color:'#ffffff'});
            $('.nav ul li a:has(span)').css({color:'white'});
            $('.nav ul li .a_regis').css({color:'#00a5ea'});
        }
    }
})