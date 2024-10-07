document.getElementById('submitBtn').addEventListener('click', function() {
    const countryCode = document.getElementById('countryCode').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const fullNumber = countryCode + phoneNumber;
    const newUrl = `https://wa.me/${encodeURIComponent(fullNumber)}`;
    chrome.tabs.create({ url: newUrl });
  });