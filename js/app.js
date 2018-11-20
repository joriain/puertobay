$.i18n().load({
    'en': '../i18n/en.json',
    'es': '../i18n/es.json'
}).done(function() {
    $('.switch-locale').on('click', 'a', function (e) {
        e.preventDefault();
        $.i18n().locale = $(this).data('locale');
        $('body').i18n();
    });
});

function setEnglish() {
    set_locale_to('en')
}

function setSpanish() {
    set_locale_to('es')
}

function set_locale_to(locale) {
    if (locale) {
      $.i18n().locale = locale;
    }
    $('body').i18n();
  };

