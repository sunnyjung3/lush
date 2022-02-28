new fullpage('#fullpage', {
    scrollBar: true,
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: [
        '홈',
        '베스트셀러',
        '러쉬 스파',
        '신상품',
        '이벤트',
        '러쉬의 신념',
    ],

    responsiveWidth: 900
});

// 로고 색 바꾸기
// $(window).on('load',function(){}); -> .load() 사용하지말고 .on('load', funtion)으로 사용하기
// .on 붙이기!


$(window).on('load',function() {
    queryTset();
});
$(window).on('resize',function() {
    queryTset();
});
function queryTset() {
    if ($(this).width() > 1550) {
        $('.gnb_wrap').on('mouseover', function () {
            $('.logo>a>img').attr("src", $('.logo>a>img').attr("src").replace("black", "white"));
        })
        $('.gnb_wrap').on('mouseout', function () {
            $('.logo>a>img').attr("src", $('.logo>a>img').attr("src").replace("white", "black"));
        })
    } else {
        $('.gnb_wrap').on('mouseover', function () {
            $('.logo>a>img').attr("src", $('.logo>a>img').attr("src").replace("white", "black"));
        })
    }

}






// function queryTset() {
//     var win = $(window).width();
//     var p = 1550;
//     if (win > p) {
//         $('.gnb_wrap').on('mouseover', function () {
//             $('.logo>a>img').attr("src", $('.logo>a>img').attr("src").replace("black", "white"));
//         })
//         $('.gnb_wrap').on('mouseout', function () {
//             $('.logo>a>img').attr("src", $('.logo>a>img').attr("src").replace("white", "black"));
//         })
//     }

// }



$(function () {

    // $('.gnb_wrap').on('mouseover', function () {
    //     $('.logo>a>img').attr("src", $('.logo>a>img').attr("src").replace("black", "white"));
    // })
    // $('.gnb_wrap').on('mouseout', function () {
    //     $('.logo>a>img').attr("src", $('.logo>a>img').attr("src").replace("white", "black"));
    // })


    $('.gnb>li').eq(0).mouseenter(function () {
        // $('.hd .gnb_wrap::before').css({'height':'500%'})
        $('.hd .gnb_wrap::before').css({
            'backgroundColor': 'blue'
        })
    })
})



// 마우스 효과
$('body').append(`
    <div class="cursor" id="cursor"></div>
	<div class="cursor2" id="cursor2"></div>
    `)

$(document).mousemove(function (e) {
    $('#cursor, #cursor2').css({
        left: e.pageX,
        top: e.pageY
    });

});

// new list
$(function () {
    // ham menu
    $('.ham').click(function () {
        $(this).toggleClass("on");
        $('.gnb_wrap').toggleClass('on');
    });


    // gnb 
    // $('.gnb>li').click(function(){
    //     a = $(this).index();
    //     $('.gnb dep2').eq(a).addClass('on')
    //     $('.gnb dep2').not($('.gnb dep2').eq(a)).removeClass("on");
    // })



    // new_con
    $('.new_list>li').click(function () {
        $(this).addClass("on");
        $('.new_list_con > li').not($(this)).removeClass("on");

        i = $(this).index();
        $('.new_list_con > li').eq(i).addClass("on");
        $('.new_list_con > li').not($('.new_list_con > li').eq(i)).removeClass("on");
    });

    // best_slide 
    // $('.best_list').prepend(
    //     `<ul class="best_list b2">
    //     <li>
    //         <p class="b_img b_img01">이미지</p>
    //         <p class="b_txt">
    //             <span>트와일라잇 버블 바</span>
    //             <span>#버블바 #라벤더 #꿈나라</span>
    //             <span>&#8361; 18,000</span>
    //         </p>
    //         <a href="#"></a>
    //     </li>
    //     <li>
    //         <p class="b_img b_img02">이미지</p>
    //         <p class="b_txt">
    //             <span>티 트리 워터 100g/250g</span>
    //             <span>#자몽의상큼함 #순한토너</span>
    //             <span>&#8361; 16,000</span>
    //         </p>
    //         <a href="#"></a>
    //     </li>
    //     <li>
    //         <p class="b_img b_img03">이미지</p>
    //         <p class="b_txt">
    //             <span>레인보우</span>
    //             <span>#버블바 #상큼한레몬향기</span>
    //             <span>&#8361; 19,000</span>
    //         </p>
    //         <a href="#"></a>
    //     </li>
    //     <li>
    //         <p class="b_img b_img04">이미지</p>
    //         <p class="b_txt">
    //             <span>마스크 오브 매그너민티</span>
    //             <span>#천연원재료 #더부드럽게</span>
    //             <span>&#8361; 22,000</span>
    //         </p>
    //         <a href="#"></a>
    //     </li>
    //     <li>
    //         <p class="b_img b_img05">이미지</p>
    //         <p class="b_txt">
    //             <span>더티 보디 스프레이</span>
    //             <span>#스테디셀러 #뒤돌아보는향 #재구매각</span>
    //             <span>&#8361; 60,000</span>
    //         </p>
    //         <a href="#"></a>
    //     </li>
    //     <li>
    //         <p class="b_img b_img06">이미지</p>
    //         <p class="b_txt">
    //             <span>섹스밤</span>
    //             <span>#로맨틱 #섹시한밤 #일랑일랑꽃</span>
    //             <span>&#8361; 14,000</span>
    //         </p>
    //         <a href="#"></a>
    //     </li>
    //     <li>
    //         <p class="b_img b_img07">이미지</p>
    //         <p class="b_txt">
    //             <span>템테이션 100g/250g/500g</span>
    //             <span>#발렌타인 #향긋한사과</span>
    //             <span>&#8361; 17,000</span>
    //         </p>
    //         <a href="#"></a>
    //     </li>
    // </ul>`
    // )

    // 로고
    // $('.gnb_wrap').on('mouseover', function () {
    //     $('.logo>a>img').attr("src", $('.logo>a>img').attr("src").replace("black", "white"));


    //     $('.personal_set>.search').attr("src", $('.personal_set>.search').attr("src").append("white"));
    //     $('.personal_set>.cart').attr("src", $('.personal_set>.cart').attr("src").append("white"));
    //     $('.personal_set>.login').attr("src", $('.personal_set>.login').attr("src").append("white"));

    // })
    // $('.gnb_wrap').on('mouseout', function () {
    //     $('.logo>a>img').attr("src", $('.logo>a>img').attr("src").replace("white", "black"));
    // })




})