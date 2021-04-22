const $form = $('#form')
$('.send').on('click', evt => {
    $form.submit()
    $form[0].reset()

    location.reload()
    return false
})
