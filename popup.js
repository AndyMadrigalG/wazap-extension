document.addEventListener('DOMContentLoaded', function() {
  const phoneNumberInput = document.getElementById('phoneNumber');

  phoneNumberInput.addEventListener('input', function() {
    // Remove any non-numeric characters
    this.value = this.value.replace(/\D/g, '');
  });
});

document.getElementById('submitBtn').addEventListener('click', function() {
  const countryCode = document.getElementById('countryCode').value.trim();
  const phoneNumber = document.getElementById('phoneNumber').value.trim();
  if (countryCode && phoneNumber) {
    const fullNumber = `${countryCode}${phoneNumber}`;
    const newUrl = `https://web.whatsapp.com/send/?phone=${encodeURIComponent(fullNumber)}`;
    chrome.tabs.create({ url: newUrl });
  } else {
    alert('Please enter both country code and phone number.');
  }
});