$(function(){
    $('.jump_index').click(function(){
         $('.agree').css({display:'block'});
         $(this).html('注册');
        $('.jump_index').click(function(){
            console.log($(this).html())
            $(this).attr("href","index.html");  //将连接的href属性修改成要修改的地址
        })
    })

})