// JavaScript Document

var scrollspeed = 700;

//0ホーム 1マテリアル 2ワイン 3メニュー 4ドリンク 5パーティ 6ギャラリー 7アクセス 

//インデックス
$(function(){
    $('a[href^="#home"]').click(function(){
        var speed = scrollspeed;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    });
});
	
$(function(){
    $('a[href^="#material"]').click(function(){
        var speed = scrollspeed;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    });
});
	
$(function(){
    $('a[href^="#wine"]').click(function(){
        var speed = scrollspeed;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    });
});
	
$(function(){
    $('a[href^="#food"]').click(function(){
        var speed = scrollspeed;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    });
});
	
$(function(){
    $('a[href^="#drink"]').click(function(){
        var speed = scrollspeed;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    });
});
	
$(function(){
    $('a[href^="#party"]').click(function(){
        var speed = scrollspeed;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    });
});

$(function(){
    $('a[href^="#gallery"]').click(function(){
        var speed = scrollspeed;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    });
});