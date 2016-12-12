/**
 * Created by Administrator on 2016/12/8.
 */
require(["jquery","dialog"],function($,Dialog){
    $('#open').on("click",function(){
        var settings = {
            width:500,
            height:400,
            title:"我的弹出层",
            content:"login.html"

        };
        var dialog = new Dialog(settings);
        dialog.open();
    });
});