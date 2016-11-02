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
    var $aImg = $("#content img");
    var $content = $("#content");
    var cloneImage = $aImg[0].cloneNode();/*��¡һ��node*/
    $content[0].appendChild(cloneImage);
    var $aImg = $("#content img");
    $content.css("width", $aImg.prop("width") * $aImg.size());//����content��
    console.log($aImg.size());
    console.log($content.css("width"));
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
        $iNow++;
        if($iNow == $aImg.size()){
            $iNow = 0;
        }
        changeImg($iNow);
    });
    function changeImg(index){
        //$aImg.eq(index).fadeIn(1000).siblings().hide();
        var newIndex = index;/*Ϊ�˹����������ѵ�ǰindexΪ4 ��ʱ�������������animate������Ҫ*/
        if (index == 4) {
            index = 0;
            iNow = 0;/*������Ϊ4��ʱ���ǵ�һ��ͼƬ�����ݣ��´�Ӧ����ʾ�ڶ���ͼƬ����ǰͼƬ��������Ϊ0,oNextʱ��++*/
        }
        $content.animate({left:-newIndex * $aImg[0].offsetWidth},"slow",function(){
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






});
});