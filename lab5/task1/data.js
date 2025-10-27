function FormData(data){
    // Перевірка ПІБ
    if (data.name != null && data.name.value.length < 3) {
        alert('Заповніть поле "ПІБ"');
        return false;
    }

    const name_pattern = /^[A-Z][a-z]+(\s[A-Z][a-z]*)*\s([A-Z]\.){1,2}$/;    
    if (!name_pattern.test(data.name.value)) {
        alert('Заповніть поле "ПІБ" у правильному форматі');
        return false;
    }

    // Перевірка ID-картки
    if (data.id_card != null && data.id_card.value.length == 0) {
        alert('Заповніть поле "ID-картка"');
        return false;
    }

    const id_card_pattern = /^[A-Z]{2}\d{6}$/;
    if (!id_card_pattern.test(data.id_card.value)) {
        alert('Заповніть поле "ID-картка" у правильному форматі');
        return false;
    }

    // Перевірка дати народження
    if (data.bdate != null && data.bdate.value.length == 0) {
        alert('Заповніть поле "Дата народження"');
        return false;
    }

    // Перевірка адреси
    if (data.address != null && data.address.value.length == 0) {
        alert('Заповніть поле "Адреса"');
        return false;
    }

    const address_pattern = /^м.+\s[A-Z][a-z]*$/;
    if (!address_pattern.test(data.address.value)) {
        alert('Заповніть поле "Адреса" у правильному форматі');
        return false;
    }

    // Перевірка email
    if (data.email != null && data.email.value.length == 0) {
        alert('Заповніть поле "Email"');
        return false;
    }
    if(data.email != null && data.email.value.length < 6)
    {
        alert('Дуже малий "E-Mail"');
        return false;
    }

    const email_pattern = /^[\w.-]+@[a-zA-Z\d.-]+\.com$/;
    if(!email_pattern.test(data.email.value))
    {
        alert("Введіть правильний E-Mail");
        return false;
    }
}