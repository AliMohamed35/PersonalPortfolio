document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); //This is to Prevent form from submitting

    // 1. Capture form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // 2. Display response message
    const responseMessage = document.getElementById("responseMessage");
    responseMessage.innerText = `Thank you, ${name}! Your message has been sent.`;
    responseMessage.style.display = "block";

    // 3. Clear the form fields
    document.getElementById("contactForm").reset();
});
