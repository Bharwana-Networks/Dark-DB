function getData() {
  const phoneNumberInput = document.getElementById('phoneNumberInput');
  const phoneNumber = phoneNumberInput.value.trim();
  
  if (phoneNumber === '') {
    alert('Please enter a phone number.');
    return;
  }

  const apiUrl = `https://livefinder.net/api.php/?search=${phoneNumber}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const dataDiv = document.getElementById('data');
      dataDiv.textContent = JSON.stringify(data, null, 2);
    })
    .catch(error => console.error(error));
}

