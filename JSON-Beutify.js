$(function () {
    var beforeContents;
    $('#trans').click(function () {
        beforeContents = $('#before').val();




        $('#after').val(jsonBeutify(beforeContents));


    });
    var jsonBeutify = (function () {
        return function (before) {
            var re = /(\s{3,}.(codeMap|debugMap|resultCode|resultMessage|successYn).{1,})|"/g;
            return before.replace(re,"");
        }
    })();

})