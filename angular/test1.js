/**
 * Created by Administrator on 2017/1/6.
 */
var cartController = function ($scope) {
    $scope.zhx = "123456";
    $scope.cart=[
        {
            id:1000,
            name:'iphone5s',
            quantity:3,
            price:4300,
        },
        {
            id:3300,
            name:'iphone5',
            quantity:30,
            price:3300,
        },
        {
            id:232,
            name:'mac',
            quantity:4,
            price:23000,
        },
        {
            id:2000,
            name:'ipad',
            quantity:5,
            price:6900,
        }

    ];
    //计算总价
    $scope.total = function () {
        var total = 0;
        angular.forEach($scope.cart,function (value, key) {
            var sum = value.price * value.quantity;
            total += sum;
        });
        return total
    };
    //计算总数量
    $scope.sum = function () {
        var sum = 0;
        angular.forEach($scope.cart,function (value, key) {
            sum+=value.quantity;
        });
        return sum;
    };
    //删除
    $scope.del=function(id){
        //从cart数组里找id
        var index = -1;
        angular.forEach($scope.cart,function (value, key) {
            if(value.id == id){
                index = key;
            }
        });
        //根据找到的id删除这一条
        if (index!=-1){
            $scope.cart.splice(index,1);
        }
    };
    //减少数量
    $scope.reduce = function (id) {
        angular.forEach($scope.cart,function (value) {
            if(value.id == id){
                value.quantity--;
                if(value.quantity==0){
                    var returnKey=confirm('从购物车内删除该产品！');
                    if(returnKey){
                        $scope.del(id);
                    }else {
                        value.quantity=1;
                    }
                }
            }
        })
    };
    //增加数量
    $scope.add = function (id) {
        angular.forEach($scope.cart,function (value) {
            if(value.id == id){
                value.quantity++;
            }
        })
    };

    $scope.$watch('cart',function(newValue,oldValue){
        //console.log(newValue);
        angular.forEach(newValue,function(item,key){
            if(item.quantity<1){
                var returnKey=confirm('从购物车内删除该产品！');
                if(returnKey){
                    $scope.del(item.id);
                }else{
                    item.quantity=oldValue[key].quantity;
                }

                //return ;
            }
        })
    },true);
};