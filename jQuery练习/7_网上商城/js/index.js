/**
 * Created by Administrator on 2016/11/3.
 */
$(function(){
    /*input������start*/
    var $input = $("#header .search input");
    $input.on("focus",function() {
        if (this.value == this.defaultValue) {
            this.value = "";
        }

    }).on('blur',function() {
        if (this.value == '') {
            this.value = this.defaultValue;
        }
    })
    $input.on("keypress",function(event){
        if ( event.which == 13 && this.value!="") {
            alert(this.value);
        }
    });
    /*input������end*/
    /*�任������ɫstart*/
    var $skinLi = $("#skin li");
    $skinLi.on("click",function(){
        $("#"+this.id).addClass("selected").siblings().removeClass("selected");
        $("#cssfile").attr("href","css/skin/"+ this.id +".css"); //���ò�ͬƤ��
    });
    /*�任������ɫend*/
    /*�ֲ�ͼstart*/
    var timer;
    var $aImg = $("#img-turns a");
    /*$aImg.each(function(index){
        $(this).css({"z-index":$aImg.size()-index}) ;
    });*/
    $aImg.mouseenter(function(){
        clearInterval(timer);
    });
    var $imgLi = $("#img-turns .img-link li");
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
    /*�ֲ�ͼend*/
    /*������ֲ�ͼstart*/

    /*������ֲ�ͼend*/
});