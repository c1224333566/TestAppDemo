/**
 * Created by cclove on 2016/12/1.
 */

$(function(){
    var $cd = $('#cd');
    var $left = $('#left');
    var $right = $('#right');

    $left.css({'display':'none'});
    $right.css({'display':'none'});
    $cd.on('mouseenter',function(){
        $left.css({'display':'block'});
        $right.css({'display':'block'});
    })
    $cd.on('mouseout',function(){
        $left.css({'display':'none'});
        $right.css({'display':'none'});
    })


})

