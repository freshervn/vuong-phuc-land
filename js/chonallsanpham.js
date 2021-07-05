// xoa san pham
$('.buying-all').click(function () {
    if ($(this).is(':checked')) {
        // console.log('run');
        $('input[type="checkbox"].check-buying').prop('checked', true);
        $(this).prop('.buying-all', true);
    }
    else {
        // console.log('no run');
        $('input[type="checkbox"].check-buying').prop('checked', false);
        $(this).prop('.buying-all', false);
    }
})
// tick bo khong chon o nho thi o tat ca cung bo tick
$('input[type="checkbox"].check-buying').click(function(){
    if(!$(this).is(':checked')){
        $('.buying-all').prop('checked', false);
    }
})