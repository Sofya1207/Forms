// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {

    // Retrieve form and input elements
    const form = document.getElementById("myForm");
    const inputField = document.getElementById("inputField");

    // Create feedback element
    const feedback = document.createElement("p");
    feedback.setAttribute("aria-live", "polite"); // accessibility improvement
    form.appendChild(feedback);

    // Regular expression for alphanumeric validation
    const alphanumericPattern = /^[a-zA-Z0-9]+$/;

    // Form submit handler
    form.addEventListener("submit", function (event) {

        const value = inputField.value.trim();

        // Validate input
        if (!validateInput(value)) {
            event.preventDefault(); // Stop submission
            showError("Please enter letters and numbers only.");
        } else {
            event.preventDefault(); // Simulated submission
            showSuccess("Form submitted successfully!");
        }
    });

    // Validation function
    function validateInput(value) {
        return alphanumericPattern.test(value);
    }

    // Display error message
    function showError(message) {
        feedback.textContent = message;
        feedback.style.color = "red";
        inputField.setAttribute("aria-invalid", "true");
    }

    // Display success message
    function showSuccess(message) {
        feedback.textContent = message;
        feedback.style.color = "green";
        inputField.removeAttribute("aria-invalid");
    }

});