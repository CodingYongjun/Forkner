$(function(){
    function header(){
        if($(window).width()>=1025){
            $('#main_header').hide();
        }else{
            $("#main_header").show();
        }
        if($(window).width()<641){
            $('.slide').find('img').eq(0).attr('src','img/main_bg_m.webp');
            $('.slide').find('img').eq(1).attr('src','img/main_bg2_m.webp');
            $('.slide').find('img').eq(2).attr('src','img/main_bg3_m.webp');
            $('.slide').find('img').eq(3).attr('src','img/main_bg4_m.webp');
            $('.slide').find('img').eq(4).attr('src','img/main_bg5_m.webp');
        }else{
            $('.slide').find('img').eq(0).attr('src','img/main_bg.webp');
            $('.slide').find('img').eq(1).attr('src','img/main_bg2.webp');
            $('.slide').find('img').eq(2).attr('src','img/main_bg3.webp');
            $('.slide').find('img').eq(3).attr('src','img/main_bg4.webp');
            $('.slide').find('img').eq(4).attr('src','img/main_bg5.webp');
        }
    }
    header();
    $(window).resize(function(){
        header();
    });
    
    let winH=$(window).height();
    $('#main').height(winH);
    
    $(window).on('scroll',function(){
        if($(window).width()>1024){
            if($(document).scrollTop()>=$('#content').offset().top){
                $('#main_header').slideDown(500,'easeOutCubic');
            }else{
                $('#main_header').slideUp(500,'easeOutCubic');
            }
        };
    });
    
    $('.main_gnb>ul>li>a').on('click',function(e){
        e.preventDefault();
        if($(this).next().css('display')=='none'){
            $('.main_gnb>ul>li>a').removeClass('active');
            $(this).addClass('active');
            $(".main_sub:visible").slideUp();
            $(this).next().slideDown();
        }else{
            $(this).removeClass('active');
            $(this).next().slideUp();
        }
    });

    function slidePoster(){
        let imgs=$('.slide').find('img');
        imgs.eq(0).fadeOut(1500,function(){
            imgs.eq(0).appendTo($('.slide'));
        });
        imgs.eq(1).fadeIn(1500);
    }
    setInterval(slidePoster,4000);

    $('.fk').css({opacity:0,marginTop:'100px'}).hide();

    $(window).on('scroll',function(){
        if($(document).scrollTop()>=$('.forkner').offset().top-100){
            $('.fk').show().animate({marginTop:'0px',opacity:1},1500);
        }
    })
});
