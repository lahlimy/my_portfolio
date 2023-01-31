import $ from 'jquery';

function scroll(element) {
    console.log(element);
    $([document.documentElement, document.body]).animate({
       
        scrollTop: $(element).offset().top
    }, 2500);
}

export default scroll;