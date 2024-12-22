document.getElementById('loginBtn').addEventListener('click', function (event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get input values
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();

    // Validate name
    if (name === "") {
        alert("Please enter your name.");
        return;
    }

    // Validate phone number
    if (phone === "" || !/^[0-9]{10}$/.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }

    // If all validations pass
    alert("Form submitted successfully!");
});