function formatUserDataHTML(user) {
    const userPicture = user.picture.large;
    const userCell = user.cell;
    const userCity = user.location.city;
    const userPostcode = user.location.postcode;
    const userEmail = user.email;

    return `
        <div class="user-card">
            <div style="text-align: center; margin-bottom: 15px;">
            <img src="${userPicture}" alt="Фото користувача" style="border-radius: 50%; width: 120px; height: 120px; object-fit: cover;">
            </div>
            <p><strong>Cell:</strong> ${userCell}</p>
            <p><strong>City:</strong> ${userCity}</p>
            <p><strong>Postcode:</strong> ${userPostcode}</p>
            <p><strong>Email:</strong> ${userEmail}</p>
        </div>
    `;
}

function getRandomUsers() {
    const outputElement = document.getElementById('output');
    const successDiv = document.getElementById('successDiv');

    outputElement.innerHTML = '<p>Завантаження...</p>';

    fetch('https://randomuser.me/api/?results=5')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP Error: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
                const formattedOutput = data.results
                .map(user => formatUserDataHTML(user))
                .join('<hr style="margin: 20px 0;">');
            const successMessage = `<p class="success-message">Success!</p>`;
            successDiv.innerHTML = successMessage;
            outputElement.innerHTML = formattedOutput;
        })
        .catch(error => {
            outputElement.innerHTML = `<p style="color: red;">Помилка: ${error.message}</p>`; 
            console.error('Fetch Error:', error);
        });
}
