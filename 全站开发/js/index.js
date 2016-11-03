/**
 * Created by Administrator on 2016/11/2.
 */
$(window).load(function() {


$(function(){
    var $input = $("#search-box input");
    $("#search-box span").on("click",function(){
        alert($input.val());
    });
    $input.on("focus",function(){
        if(this.value == this.defaultValue){
            this.value = "";
        }
    }).on("blur",function(){
            if(this.value ==""){
                this.value = this.defaultValue;
            }
        });
    /*轮播图start*/
    var $aImg = $("#content img");
    var $content = $("#content");
    var cloneImage = '<a href="#"><img src="images/banner01.png" alt=""/></a>'/*克隆一个node*/
    $content.append(cloneImage);
    var $aImg = $("#content img");
    $content.css("width", $aImg.width() * $aImg.size());//设置content高
    var $iNow = 0;//索引
    var timer;
    var $next = $("#arrow .right");
    var $prev = $("#arrow .left");
    $prev.on("click",function(){
        if($iNow == 0){
            $iNow = $aImg.size();
        }
        $iNow--;
       changeImg($iNow);
    });
    $next.on("click",function(){
        console.log($iNow);
        $iNow++;
        if($iNow == $aImg.size()){
            $iNow = 0;
        }
        changeImg($iNow);
    });
    function changeImg(index){
        $aImg.eq(index).fadeIn(1000).siblings().hide();
        var newIndex = index;/*为了滚动动画，把当前index为4 的时候存下来，下面animate函数需要*/
        if (index == 4) {
            $iNow = 0;/*当索引为4的时候是第一张图片的内容，下次应该显示第二张图片，当前图片的索引改为0,oNext时会++*/
        }

            $content.stop().animate({left:-newIndex * $aImg[0].offsetWidth},"1000",function(){
                if (newIndex == 4) {
                    $content.css("left",0);/*索引为4 的动画执行完，即第一张图片，oContent立刻拉回，方便执行第二张图片*/
                }
            })

    }
    function run (){
        timer = setInterval(function(){
            $next.trigger("click");
        },2000);
    };
    run();
    $("#container").hover(function(){
        clearInterval(timer);
    },function(){
        run();
    });
    /*轮播图end*/
    /*下面的轮播图*/
    var speed = 1;
    var timer2;
    var $content2 = $("#clients .content");

    $content2[0].innerHTML = $content2[0].innerHTML + $content2[0].innerHTML;
    var $img = $("#clients img");
    $content2.width($img.width() * $img.size());

    ran(speed);
    $("#arrow2 .left").mouseenter(function(){
        ran(-speed);
    });
    $("#arrow2 .right").mouseenter(function(){
        ran(speed);
    });
    function ran(speed) {

        clearInterval(timer2);
        timer2 = setInterval(function () {
            $content2.css({"left":"+="+speed});
            //console.log($content.css("left"));
            if(parseInt($content2.css("left"))>0){

                $content2.css({"left":-$content2.width()/2});

            }
            console.log(-$content2.width()/2);
            console.log($content2.css("left"));
            if(parseInt($content2.css("left")) < -$content2.width()/2){
                $content2.css({"left":0});
            }
        }, 10);
    }


});
});