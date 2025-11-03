function FormData(data){
    // Перевірка ПІБ
    if (data.name != null && data.name.value.length < 3) {
        alert('Заповніть поле "ПІБ"');
        return false;
    }

    const name_pattern = /^[А-ЯІЇЄҐ][а-яіїєґ]+(\s[А-ЯІЇЄҐ][а-яіїєґ]*)*\s([А-ЯІЇЄҐ]\.){1,2}$/;    
    if (!name_pattern.test(data.name.value)) {
        alert('Заповніть поле "ПІБ" у правильному форматі');
        return false;
    }

    // Перевірка ID-картки
    if (data.id_card != null && data.id_card.value.length == 0) {
        alert('Заповніть поле "ID-картка"');
        return false;
    }

    const id_card_pattern = /^[А-ЯІЇЄҐ]{2}\d{6}$/;
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

    const address_pattern = /^м.+\s[А-ЯІЇЄҐ][а-яіїєґ]*$/;
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

    const nameValue = data.name.value;
    const idCardValue = data.id_card.value;
    const bdateValue = data.bdate.value;
    const addressValue = data.address.value;
    const emailValue = data.email.value;

    const outputHTML = `
        <p><strong>1. ПІБ:</strong> ${nameValue}</p>
        <p><strong>2. ID-картка:</strong> ${idCardValue}</p>
        <p><strong>3. Дата народження:</strong> ${bdateValue}</p>
        <p><strong>4. Адреса:</strong> ${addressValue}</p>
        <p><strong>5. E-mail:</strong> ${emailValue}</p>
    `;

    const outputDataElement = document.getElementById('outputData');
    const outputContainer = document.getElementById('outputContainer');
    
    if (outputDataElement && outputContainer) {
        outputDataElement.innerHTML = outputHTML;
        outputContainer.style.display = 'block';
    }
    
    return false;
}