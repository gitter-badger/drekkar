Drekkar.getDefault().register("AnEvent", function(name, data) {
    $('body').append('<p class="js">First!</p>');
});

Drekkar.getDefault().register("AnEvent", function(name, data) {
    $('body').append('<p class="js">Second!</p>');
});