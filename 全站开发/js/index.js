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
    /*�ֲ�ͼstart*/
    var $aImg = $("#content img");
    var $content = $("#content");
    var cloneImage = '<a href="#"><img src="images/banner01.png" alt=""/></a>'/*��¡һ��node*/
    $content.append(cloneImage);
    var $aImg = $("#content img");
    $content.css("width", $aImg.width() * $aImg.size());//����content��
    var $iNow = 0;//����
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
        var newIndex = index;/*Ϊ�˹����������ѵ�ǰindexΪ4 ��ʱ�������������animate������Ҫ*/
        if (index == 4) {
            $iNow = 0;/*������Ϊ4��ʱ���ǵ�һ��ͼƬ�����ݣ��´�Ӧ����ʾ�ڶ���ͼƬ����ǰͼƬ��������Ϊ0,oNextʱ��++*/
        }

            $content.stop().animate({left:-newIndex * $aImg[0].offsetWidth},"1000",function(){
                if (newIndex == 4) {
                    $content.css("left",0);/*����Ϊ4 �Ķ���ִ���꣬����һ��ͼƬ��oContent�������أ�����ִ�еڶ���ͼƬ*/
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
    /*�ֲ�ͼend*/
    /*������ֲ�ͼ*/
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