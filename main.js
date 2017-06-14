// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element
(function () {

  'use strict';

  // Your Code Goes Here
  let customerBox = document.querySelector('.customers');

  fetch('https://randomuser.me/api/?results=12&nat=us')
  // Testing with just 4, switch back to 12 above for final
  // fetch('https://randomuser.me/api/?results=4&nat=us')
    .then(function(resp) {
      if (resp.status !== 200) {
        console.log("Error fetching from randomuser.me: ", resp.status);
        return;
      }
      resp.json().then(function(data) {
        // load info onto the page, one div for each customer in data
        // console.log(data);
        for (let cust of data['results']) {
          let newCust = document.createElement('div');
          newCust.className = 'customer';
          // Add picture to div, set styling
          let custImg = document.createElement('img');
            custImg.src = '' + cust.picture.large;
            custImg.alt = "a smiling face";
          newCust.appendChild(custImg);

          // Add bio info to div
          let custName = document.createElement('h4');
            custName.textContent = cust.name.first + ' ' + cust.name.last;
          newCust.appendChild(custName);

          let custEmail = document.createElement('h5');
            custEmail.textContent = cust.email;
          newCust.appendChild(custEmail);

          let custContact = document.createElement('pre');
            let contactStr =
                cust.location.street + '\n ';
            contactStr +=
                cust.location.city + ', ' + cust.location.state + " " + cust.location.postcode + '\n ';
            contactStr +=
                cust.phone;
            custContact.textContent = contactStr;
          newCust.appendChild(custContact);

          customerBox.appendChild(newCust);
        }
      });
    });
})();
