function displaypage(pageid) {
    //jquery internally checks for class duplicates so no need to check ourselves
    $('.navcontent').addClass('hide');
    $(`#${pageid}`).removeClass('hide');
}

$(function () {

    //Setup click events for other navbar items
    $('#generalnav').click(function (e) { 
        e.preventDefault();
        displaypage('generalcontent');
    });

    //hide all navcontent that is not the currently selected one
    //hide everything besides general in the start
    displaypage('generalcontent');

});

