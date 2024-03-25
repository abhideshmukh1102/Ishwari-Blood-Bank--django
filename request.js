document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('bloodRequestForm');
    const message = document.getElementById('message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const bloodType = form.elements['bloodType'].value;
        const units = form.elements['units'].value;
        const contact = form.elements['contact'].value;
        const contactName = form.elements['contactName'].value;
        const aadhaarcard = form.elements['aadhaarcard'].value
        const contactEmail = form.elements['contactEmail'].value;
        const hospital = form.elements['hospital'].value;
        const urgency = form.elements['urgency'].value;
        const additionalInfo = form.elements['additionalInfo'].value;


        // Here you would make an AJAX request to your backend to submit the blood request
        // For the sake of simplicity, let's just display the submitted data for now
        message.textContent = `Blood Type: ${bloodType}, Units Required: ${units}, Contact Name: ${contactName},
        Contact Information: ${contact}, Aadhaar Card: ${aadhaarcard}, Contact Email: ${contactEmail},Hospital/Clinic: ${hospital}, Urgency: ${urgency}
        Additional Information: ${additionalInfo}`;
        form.reset();
    });
});
