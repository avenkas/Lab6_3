// Додаємо обробник події "submit" для форми з id="registrationForm"
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Запобігаємо стандартному надсиланню форми

    // Отримуємо значення, введене користувачем у поле "Ім'я"
    let firstName = document.getElementById("firstName").value;

    // Отримуємо елемент для відображення повідомлення про помилку
    let firstNameError = document.getElementById("firstNameError");

    // Регулярний вираз для перевірки імені:
    // - Не має починатися з цифри (^ означає початок рядка, [^\d] означає "не цифра")
    // - Має містити мінімум 3 літери ([a-zA-Zа-яА-Я]{2,})
    let namePattern = /^[^\d][a-zA-Zа-яА-Я]{2,}$/;

    // Перевіряємо введене ім’я за регулярним виразом
    if (!namePattern.test(firstName)) {
        // Якщо ім’я не відповідає вимогам, виводимо повідомлення про помилку
        firstNameError.textContent = "Ім'я повинно мати мінімум 3 букви та не починатися з цифри!";
    } else {
        // Якщо перевірка пройшла успішно, очищуємо повідомлення про помилку
        firstNameError.textContent = "";
        alert("Форма успішно надіслана!"); // Виводимо повідомлення про успішне надсилання
    }
});
