// FUNÇÃO JQUERY PARA VOLTAR AO TOPO COMO REQUISITO

$(function () {


    $(window).scroll(function () {
        if ($(this).scrollTop() > 220) {
            $('.voltar').show();
        } else {
            $('.voltar').hide();

        }
    });

    $('.voltar1').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
    })

});
