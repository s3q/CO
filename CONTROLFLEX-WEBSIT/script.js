window.addEventListener('load', function () {

    let menuWindow = document.getElementById('menu-window'),
        closeMenuWindow = document.getElementById('close-menu-window'),
        openMenuWindow = document.getElementById('open-menu-window');


    menuWindow.addEventListener('click', (eve) => {

        eve.stopImmediatePropagation();

    });


    openMenuWindow.addEventListener('click', (eve) => {

        eve.stopImmediatePropagation();

        menuWindow.classList.toggle('open-menu_');

    });

    closeMenuWindow.addEventListener('click', (eve) => {

        eve.stopImmediatePropagation();

        menuWindow.classList.remove('open-menu_');

    });


    document.addEventListener('click', _ => {

        if (menuWindow.classList.contains('open-menu_')) {

            menuWindow.classList.remove('open-menu_');

        }

    });

    if (document.querySelector('.bn-prev_') !== null) {

        let bn_prev = document.querySelector('.bn-prev_');

        bn_prev.onclick = _ => {

            history.back();

        }
    }


    let changeLangBn = document.querySelectorAll('.change-lang_js');

    changeLangBn.forEach(element => {

        element.addEventListener('click', e => {

            e.stopImmediatePropagation();

            setTimeout(_ => {

                if (element.getAttribute('data-lang') === 'en') {

                    location.href = "../index.html";

                } else if (element.getAttribute('data-lang') === 'ar') {

                    location.href = "ar/index.html";

                }

            }, 500);

        });

    });

});


$(window).on("load", function() {

    setTimeout(function() {

        $(".loading-overlay .spinner").fadeOut(300, function() {

            $(this).parent().fadeOut(100, function() { 

                $(this).remove();

            });

        });

    }, 1500);

});
