/**
 * Created by cclove on 2016/12/1.
 */

$(function(){
    var $cd = $('#cd');
    var $left = $('#left');
    var $right = $('#right');
    var $img = $('img');

    // $cd.css({'background-image':'url("./img/b1.jpg")'});

    function Initsetimg(){
        var k ;
        for(k = 1;k<=5;k++){
            $cd.css({'background-image':'url("./img/b' + k + '.jpg")'});
            setTimeout(function(){
                
            },3000);
        }

    }
    Initsetimg();

    // $left.css({'display':'none'});
    // $right.css({'display':'none'});
    // $cd.on('mouseenter',function(){
    //     $left.css({'display':'block'});
    //     $right.css({'display':'block'});
    // })
    // $cd.on('mouseout',function(){
    //     $left.css({'display':'none'});
    //     $right.css({'display':'none'});
    // })


})

