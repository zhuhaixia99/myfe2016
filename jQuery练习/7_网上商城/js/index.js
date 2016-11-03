/**
 * Created by Administrator on 2016/11/3.
 */
$(function(){
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
});