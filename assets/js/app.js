$(function () {
    $(".typed-header").typed({
        strings: ["<span style='color:#006e20'>~/^200</span>louis^200-^100rassaby^100<span style='color:#006e20'>/</span>"],
        typeSpeed: 80,
        startDelay: 1000
    });
});

$(document).ready(function () {
    $(".navbar-nav li a").click(function (event) {
        $(".navbar-collapse").collapse('hide');
    });
});