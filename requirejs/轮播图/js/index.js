/**
 * Created by Administrator on 2016/12/9.
 */
requirejs.config({
    paths: {
        jquery: 'jquery-1.12.4'
    }
});
require(["jquery","carousel"],function($,Carousel){
    var imgs =["img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg"];
    var settings = {
        imgUrl: imgs,
        buttonStyle: 'circle',//square
        arrowsStyle: 'center',//bottom
        speed: 1000,
        location:'#container1'
    };
    var carousel = new Carousel(settings);
    carousel.init();
});