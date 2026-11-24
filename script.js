const bookingForm = document.querySelector(".booking-form");
const successMessage = document.getElementById("booking-success");

bookingForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const customerName = document.getElementById("name").value;
    const selectedService = document.getElementById("service").value;

    successMessage.textContent =
        "Thank you, " + customerName +
        "! Your " + selectedService +
        " appointment request has been received. " +
        "Glow Beauty Studio looks forward to welcoming you!";

    successMessage.hidden = false;

    bookingForm.reset();
});
