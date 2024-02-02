$('.banner_part_silider').slick({
    arrows: false,
    dots: true,

});
$('.clent_reviews_part').slick({
    arrows: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: `<i class="fa-solid fa-angle-left left_arrow"></i>`,
    nextArrow: `<i class="fa-solid fa-angle-right right_arrow"></i>`
});
$('.counter').counterUp({
    delay: 10,
    time: 1000
});