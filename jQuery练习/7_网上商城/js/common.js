/**
 * Created by Administrator on 2016/11/9.
 */
$(function(){
    /*input搜索框start*/
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
    /*input搜索框end*/
    /*变换主题颜色start*/
    var $skinLi = $("#skin li");
    $skinLi.on("click",function(){
        $("#"+this.id).addClass("selected").siblings().removeClass("selected");
        $("#cssfile").attr("href","css/skin/"+ this.id +".css"); //设置不同皮肤
    });
    /*变换主题颜色end*/
});