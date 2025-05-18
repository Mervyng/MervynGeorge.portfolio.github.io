document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contact-form');

  form.addEventListener('submit', function (e) {
    // Prevent default mailto behavior for validation
    e.preventDefault();

    // Get form fields
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Simple validation
    if (!name || !email || !message) {
      alert('Please fill in all fields before submitting.');
      return;
    }

    // Optional: More advanced email pattern check
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Open user's mail client with the message using mailto
    const mailtoLink = `mailto:mervyngeorge2005@gmail.com?subject=Message from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0D%0A%0D%0AEmail: ${encodeURIComponent(email)}`;
    window.location.href = mailtoLink;

    // Optional: User feedback after clicking
    alert('Your message will be sent through your default email app.');
    form.reset();
  });
});
// This code listens for the form submission, validates the input fields, and opens the user's default email client with a pre-filled message.
// It also provides feedback to the user after clicking the submit button.