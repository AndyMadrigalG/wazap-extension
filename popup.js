document.addEventListener('DOMContentLoaded', function() {
  const phoneNumberInput = document.getElementById('phoneNumber');

  phoneNumberInput.addEventListener('input', function() {
    // Check if the value is not a number
    if ( this.value.includes('.') || isNaN(this.value) ) {
      // Remove any non-numeric characters
      this.value = this.value.replace(/\D/g, '');
    }
  });
});

document.getElementById('submitBtn').addEventListener('click', function() {
    const countryCode = document.getElementById('countryCode').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const fullNumber = countryCode + phoneNumber;
    const newUrl = `https://web.whatsapp.com/send/?phone=${encodeURIComponent(fullNumber)}`;
    chrome.tabs.create({ url: newUrl });
  });