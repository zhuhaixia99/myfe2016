/**
 * Created by Administrator on 2016/11/9.
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
    }).on("keypress",function(e){
        if ( e.which == 13 && this.value!="") {
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
});