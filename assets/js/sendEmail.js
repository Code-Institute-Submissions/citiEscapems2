
function sendMail(contactForm) {
    emailjs.send("gmail", "milestone_projects", {
        "from_first": contactForm.first.value,
        "from_last": contactForm.last.value,
        "from_email": contactForm.email.value,
        "from_phone": contactForm.phone.value,
        "from_contact_reason": contactForm.contact.value,
        "description": contactForm.description.value

    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
    
}
