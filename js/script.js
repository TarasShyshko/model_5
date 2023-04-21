$(document).ready(function () {

    $('.first-button').on('click', function () {

        $('.animated-icon1').toggleClass('open');
    });
    document.getElementById("change-color-btn").addEventListener("click", function() {
        document.getElementById("my-div").classList.toggle("my-class");
    });
});