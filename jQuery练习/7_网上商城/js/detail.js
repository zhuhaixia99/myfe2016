/**
 * Created by Administrator on 2016/11/7.
 */
$(function(){
    /*放大镜start*/
    var $goodsImg = $("#goods-img");
    var $drag = $(".drag",$goodsImg);
    var $smallPic = $(".small-pic",$goodsImg);
    var $bigPic = $(".big-pic",$goodsImg);
    var $bigImg = $(".big-pic img",$goodsImg);
    $smallPic.mouseenter(function(){
        $drag.show();
        $bigPic.css("display","block");
    });
    $smallPic.mousemove(function(event){
        /*drag定位*/
        var $iLeft = event.pageX - $smallPic.offset().left - $drag.width() / 2;
        var $iTop = event.pageY -$smallPic.offset().top - $drag.height() / 2;
        if ($iLeft < 0) {
            $iLeft = 0;
        }
        if ($iTop < 0) {
            $iTop = 0;
        }
        if ($iLeft > $smallPic.width() - $drag.width()) {
            $iLeft = $smallPic.width() - $drag.width();
        }
        if ($iTop > $smallPic.height() - $drag.height()) {
            $iTop = $smallPic.height() - $drag.height();
        }
        $drag.css({
            left:$iLeft,
            top:$iTop
        })
        /*bigPic定位*/
        var fScaleX = $iLeft / ($smallPic.width() - $drag.width());
        var fScaleY = $iTop / ($smallPic.height() - $drag.height());
        $bigImg.css({
            left:- ($bigImg.width()-$bigPic.width()) * fScaleX,
            top:- ($bigImg.height()-$bigPic.height()) * fScaleY
        });
    });
    $smallPic.mouseleave(function(){
        $drag.css("display","none");
        $bigPic.css("display","none");
    });
    /*放大镜end*/
    /*商品介绍选项卡start*/
    var $productIntro = $("#product-intro");
    var $li = $(".product-tab li",$productIntro);
    var $div = $(".product-text div",$productIntro);
    $li.on("click",function(){
        $(this).addClass("selected").siblings().removeClass("selected");
        $div.eq($(this).index()).addClass("selected").siblings().removeClass("selected");
    });
    /*商品介绍选项卡end*/
    /*选择尺寸start*/
    var $goodDetail =$("#goods-detail");
    var $span = $("span.pro-size-num",$goodDetail);
    var $li = $(".pro-size li",$goodDetail);
    $li.on("click",function(){
        $(this).addClass("select").siblings().removeClass("select");
        $span.html($(this).html());
    });
    /*选择尺寸end*/
    /*选择数量start*/
    var $sumPrice = $("span.sum-price",$goodDetail);
    var $selectNum = $(".pro-num select",$goodDetail);
    $selectNum.change(function(){
        $sumPrice.html($selectNum.val() * 200);

        //$optionNum.each(function(index,elem){
        //    if($(elem).prop("selected",true)){
        //        $sumPrice.html($(elem).val() * 200);
        //    }
        //});

    });
    /*选择数量end*/
    /*评分start*/
    var $scroeLi = $(".rating li",$goodDetail);
    var $scroeUl = $("ul.rating",$goodDetail);
    var scroeNum = 0;
    $scroeLi.hover(function(){
        scroeNum = $(this).index()+1;
        $scroeUl.css("background-position-y",-(scroeNum+5)*16);

    },function(){
        $scroeUl.css("background-position-y",0);
    });
    $scroeLi.on("click",function(){
        $scroeLi.off("mouseleave");
        $scroeUl.css("background-position-y",-scroeNum*16);
        alert("分数："+scroeNum);
        var nowStart = -scroeNum*16;
        $scroeLi.on("mouseleave",function(){
            $scroeUl.css("background-position-y",nowStart);
        });
    });
    /*评分end*/
    /*左侧切换图片start*/
    var $imgListLi = $(".imgList li",$goodsImg);
    $imgListLi.hover(function(){
        $(this).addClass("selected");
    },function(){
        $(this).removeClass("selected");
    });

    $imgListLi.on("click",function(){
        var imgSrc = $(this).find("img").attr("src");/*找到小图片的路径*/
        var i = imgSrc.lastIndexOf(".");/*找到后缀名的起始位置*/
        var suffix = imgSrc.substring(i);/*找到后缀名*/
        imgSrc = imgSrc.substring(0,i);
        var imgSrc_small = imgSrc + "_small" + suffix;
        var imgSrc_big = imgSrc + "_big" + suffix;
        $(".small-pic img",$goodsImg).attr("src",imgSrc_small);
        $(".big-pic img",$goodsImg).attr("src",imgSrc_big);
        $(".clear-img a",$goodsImg).attr("href",imgSrc_small);
    });
    /*左侧切换图片end*/
    /*右侧切换颜色和图片start*/
    var $colorLi = $(".color-change li",$goodDetail);
    var $colorText = $("span.color-text",$goodDetail);
    var $colorImg = $(".color-change li img",$goodDetail);
    $colorLi.on("click",function(){
        $(this).addClass("hover").siblings().removeClass("hover");
        $colorText.html($colorImg.eq($(this).index()).prop("alt"));
        var imgSrc = $(this).find("img").attr("src");/*找到小图片的路径*/
        var i = imgSrc.lastIndexOf(".");/*找到后缀名的起始位置*/
        var suffix = imgSrc.substring(i);/*找到后缀名*/
        imgSrc = imgSrc.substring(0,i);
        var imgSrc_small = imgSrc + "_one_small" + suffix;
        var imgSrc_big = imgSrc + "_one_big" + suffix;
        $(".small-pic img",$goodsImg).attr("src",imgSrc_small);
        $(".big-pic img",$goodsImg).attr("src",imgSrc_big);
        $(".clear-img a",$goodsImg).attr("href",imgSrc_small);

        var newImgSrc = imgSrc.replace("images/pro_img/","");
        $(".imgList li",$goodsImg).hide();
        $(".imgList",$goodsImg).find(".imgList_"+newImgSrc).show();
    });
    /*右侧切换颜色和图片end*/
    /*var a=3;
    var $index=0;
    var b=0;
    var f=0;
    $("#s-color span").on("click",function(){
        a++;
        $index=$(this).index();
        $(this).addClass("s").siblings().removeClass("s");
        $("#com-small-pic div").eq($index).css("z-index",a);
        $("#tab-pic div").eq($index).show().siblings().hide();
        $("#color").text($(this).text());
        b=0;

    });
    $("#tab-pic div span").on("click", function () {
        b=$(this).index();
        $("#com-small-pic div").eq($index).children().eq(b).show().siblings().hide();

    });
    $("#com-small-pic").on("mousemove",function(e){
        e = e||window.event;
        var y= e.clientY-162;
        var x= e.clientX-parseInt($("#works").css("margin-left"))-250;
        if(y<0){
            y=0;
        }
        else if(y>= $("#com-small-pic").height()-$("#drag").height()){
            y=$("#com-small-pic").height()-$("#drag").height();
        }
        if(x<0)x=0;
        else if(x>=$("#com-small-pic").height()-$("#drag").height()){
            x=$("#com-small-pic").height()-$("#drag").height();
        }
        $("#drag").show().css("top", y).css("left", x);
        var bigx=-x/($("#com-small-pic").height()-$("#drag").height())*($("#big-pic div").eq($index).children().eq(b).width()-$("#big-pic").width());
        var bigy=-y/($("#com-small-pic").height()-$("#drag").height())*($("#big-pic div").eq($index).children().eq(b).width()-$("#big-pic").width());
        $("#big-pic").show();
        $("#big-pic div").eq($index).show().siblings().hide().end().children().eq(b).show().css({
            "left":bigx,
            "top":bigy
        }).siblings().hide();

        return false;
    });
    $("#com-small-pic").on("mouseleave", function () {
        $("#drag").hide();
        $("#big-pic").hide();
    });*/

});