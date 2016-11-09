/**
 * Created by Administrator on 2016/11/3.
 */
$(function(){

    /*轮播图start*/
    var timer;
    var $imgTurns = $("#img-turns");
    var $aImg = $("a",$imgTurns);
    /*$aImg.each(function(index){
        $(this).css({"z-index":$aImg.size()-index}) ;
    });*/
    $aImg.mouseenter(function(){
        clearInterval(timer);
    });
    var $imgLi = $(".img-link li",$imgTurns);
    var iNow = 0;
    $imgLi.hover(function(){
        changeImg($(this).index());
        iNow = $(this).index();
        clearInterval(timer);
    },function(){
        run();
    });
    function changeImg(index){
        $imgLi.eq(index).addClass("selected").siblings().removeClass('selected');
        $aImg.eq(index).stop(true).fadeIn().siblings().hide();
    }
    function run(){
        timer = setInterval(function(){
            iNow++;
            if(iNow == $imgLi.size()){
                iNow = 0;
            }
            changeImg(iNow);
        },2000);
    }
    run();
    /*轮播图end*/
    /*下面的轮播图start*/
    var $tabContent = $("#tab-content");
    var contentWidth = $tabContent.width();
    $tabContent.width(4 * contentWidth);
    $tabContent.html($tabContent.html() + $tabContent.html() + $tabContent.html() + $tabContent.html());
    var $tab = $("#tab");
    var $tabA = $("a",$tab);
    $("li",$tab).mouseover(function(){
        $(this).addClass("selected").siblings().removeClass("selected");
        $tabA.removeClass("select");
        $tabA.eq($(this).index()).addClass("select");
        $tabContent.animate({
            left:-$(this).index() * contentWidth
        },1000);
    });
    /*下面的轮播图end*/

});