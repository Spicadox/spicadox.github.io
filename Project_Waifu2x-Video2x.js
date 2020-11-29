$(function(){
    $('.GUI_gallery').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery:{enabled:true},
        image: {titleSrc: 'title'}
        // other options
      });

      $("body").toTopButton({
        imagePath: '/assets/images/icons',
    
        // arrow, arrow-circle, caret, caret-circle, circle, circle-o, arrow-l, drop, rise, top
        // or your own SVG icon
        arrowType: 'arrow',
      
        // 'w' = white
        // 'b' = black
        iconColor: 'w',
      
        // icon shadow
        // from 1 to 16
        iconShadow: 4
    });

      var previousScroll = window.pageYOffset;
console.log("previousScroll: ", previousScroll);
window.onscroll = function () {
    var currentScroll = window.pageYOffset;
    console.log("currentScroll: ", currentScroll);
    if(previousScroll > currentScroll) {
        $(".menu").css({top: "0px"});
    }
    else {
        $(".menu").css({top: "-1000px"});
    }
    previousScroll = currentScroll;
};
});