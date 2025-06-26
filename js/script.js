$(document).ready(function () {
    document.getElementById('burger').onclick = function () {
        document.getElementById('menu').classList.add('open');


    };
    document.querySelectorAll('#menu *').forEach((item) => {
        item.onclick = () => {
            document.getElementById('menu').classList.remove('open')
        }
    })
    let loader = $('.loader');
    let modal = $('#successModal');
    let inputVal = $('input');
    $('#submit').click(function () {
        let nameProduct = $('#name-product');
        let name = $('#name');
        let telephone = $('#telephone');
        let hasError = false;

        // loader.css('display', 'flex');
        $('.form-input-error').hide();


        if (!nameProduct.val()) {
            nameProduct.addClass('red')
            nameProduct.next().show();
            hasError = true;
        } else {
            nameProduct.removeClass('red')
        }
        if (!name.val()) {
            name.addClass('red')
            name.next().show();
            hasError = true;
        } else {
            name.removeClass('red')
        }
        if (!telephone.val()) {
            telephone.addClass('red')
            telephone.next().show();
            hasError = true;
        } else {
            telephone.removeClass('red')
        }

        if (!hasError) {
            $.ajax({
                method: "POST",
                url: "https://testologia.ru/checkout",
                data: {name_product: nameProduct.val(), name: name.val(), telephone: telephone.val()}
            })
                .done(function (msg) {
                    // loader.hide();
                    if (msg.success) {
                        modal.css('display', 'flex');
                        $('.modal-close').click(function () {
                            modal.hide();
                            console.log(inputVal)
                            inputVal.val('');
                        })
                    } else {
                        alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ');
                        inputVal.val('');
                    }
                    console.log(msg)
                });
        }

    })

let inputProduct = $('#name-product');
    $('.product__btn').on('click', function (e) {
     inputProduct.val($(e.target).parents('.product__card').find('.product__card-title').text());
        $.scrollTo($('#order'),300)
    })


});



