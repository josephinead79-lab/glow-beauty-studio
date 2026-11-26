
const bookingForm = document.querySelector(".booking-form");
const successMessage = document.getElementById("booking-success");

bookingForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const customerName = document.getElementById("name").value;
    const selectedService = document.getElementById("service").value;

    successMessage.textContent =
    `Thank you, ${customerName}! You selected ${selectedService}. This is a demonstration form, so your appointment has not been sent or booked.`;

    successMessage.hidden = false;

    bookingForm.reset();
});
