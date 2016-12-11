/**
 * Created by Administrator on 2016/12/9.
 */
define(["jquery"],function($){
    function Carousel(settings){
        this.defaultSettings = {
            imgUrl: [],
            buttonStyle: 'square',
            arrowsStyle: 'bottom',
            speed: 500,
            location:'body'
        };
        $.extend(this.defaultSettings,settings);
        this.$container = $('<div class="carousel-container"></div>');
        this.$imgs = $('<div class="carousel-imgs"></div>');
        this.$tabs = $('<ul class="carousel-tabs"></ul>');
        this.$arrows = $('<div class="carousel-arrows"></div>');
        this.$prev = $('<span class="carousel-arrows-prev">&lt;</span>');
        this.$next = $('<span class="carousel-arrows-next">&gt;</span>');
    }
    Carousel.prototype.init = function(){
        var nowIdx = 0;
        var _this = this;
        for(var i=0;i<this.defaultSettings.imgUrl.length;i++){
            this.$imgs.append($('<img src="'+this.defaultSettings.imgUrl[i]+'"/>'));
            this.$tabs.append($('<li>'+(i+1)+'</li>'));
        }
        this.$container.append(this.$imgs).append(this.$tabs).append(this.$arrows);
        this.$arrows.append(this.$prev).append(this.$next);
        $('img:first-child',this.$imgs).addClass('selected');
        $('li:first-child',this.$tabs).addClass('selected');
        $(this.defaultSettings.location).append(this.$container);
        $('li',this.$tabs).on('mouseover',function(){
            nowIdx = $(this).index();
            changeImg();
        });
        this.$prev.on("click", function(){
            nowIdx--;
            if(nowIdx == -1){
                nowIdx = _this.defaultSettings.imgUrl.length - 1;
            }
            changeImg();
        });
        this.$next.on("click", function(){
            nowIdx++;
            if(nowIdx == _this.defaultSettings.imgUrl.length){
                nowIdx = 0;
            }
            changeImg();
        });
        play();
        this.$container.hover(function(){
            clearInterval(_this.timer);
        }, function(){
            play();
        });

        function play(){
            _this.timer = setInterval(function(){
                _this.$next.trigger("click");
            }, _this.defaultSettings.speed);
        }
        function changeImg(){
            $('img',_this.$imgs).eq(nowIdx).addClass('selected').siblings().removeClass('selected');
            $("li", _this.$tabs).eq(nowIdx).addClass("selected").siblings().removeClass("selected");
        }

    };
    return Carousel;
});