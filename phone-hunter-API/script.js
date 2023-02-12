const loadPhones = (searchField) => {
  fetch(`https://openapi.programming-hero.com/api/phones?search=${searchField}`)
    .then((res) => res.json())
    .then((data) => displayPhones(data.data));
};


const displayPhones = (phones) => {
  const phoneContainer = document.getElementById("phone-container");
  if(phones.length === 0){
    document.getElementById('phone-not-found').classList.remove('d-none');
  }
  else{
    document.getElementById('phone-not-found').classList.add('d-none');
  }
  phoneContainer.textContent = '';


  phones.forEach((phone) => {
    const phoneDiv = document.createElement("div");
    phoneDiv.classList.add("col");
    phoneDiv.innerHTML = `
      <div class="card" style="width: 18rem;">
   <img src="${phone.image}"class="card-img-top p-4" alt="...">
  <div class="card-body">
  <hr>
    <h5 class="card-title fs-3 fw-bold">${phone.phone_name}</h5>
    <h5 class="d-inline-block me-5">By: ${phone.brand}</h5>
    <button onclick="loadPhoneDetail('${phone.slug}')" type="button" class="btn btn-info mt-2" data-bs-toggle="modal" data-bs-target="#phoneDetailModal">Details</button>
  </div>
</div>
   `;
    phoneContainer.appendChild(phoneDiv);
  });
  loadSpinner(false);
};


document.getElementById('btn-search').addEventListener('click', function(){
  const searchField = document.getElementById('input-field').value;
  loadPhones(searchField)
  loadSpinner(true);
})


document.getElementById('input-field').addEventListener('keypress', function(e){
  if(e.key === 'Enter'){
    const searchField = document.getElementById('input-field').value;
  loadPhones(searchField)
  loadSpinner(true)
  }
});


const loadSpinner = isLoading => {
  const spinner = document.getElementById('spinner');
  if(isLoading){
    spinner.classList.remove('d-none');
  }
  else{
    spinner.classList.add('d-none');
  }
}
const loadPhoneDetail = id =>{
  fetch(`https://openapi.programming-hero.com/api/phone/${id}`).then(res=>res.json()).then(data=>displayPhoneDetails(data.data))
}
const displayPhoneDetails = (phone) =>{
  console.log(phone);
  document.getElementById('phoneDetailModalLabel').innerHTML = `<img src="${phone.image}">
  `;
  document.getElementById('modalBody').innerHTML = `
    <h4 class="mb-1">Name: ${phone.name}</h4>
    <h5>Brand: ${phone.brand}</h5>
    <p class="mb-3">${phone.releaseDate ? phone.releaseDate : 'No Release Date Found.'}</p>
    <h5>Main Features--</h5>
    <p>ChipSet: ${phone.mainFeatures.chipSet ? phone.mainFeatures.chipSet: 'No Chipset Found.'}</p>
    <p>Display: ${phone.mainFeatures.displaySize}</p>
    <p>Memory: ${phone.mainFeatures.memory}</p>
    <p>Sensors: ${phone.mainFeatures.sensors}</p>
    <p class="mb-3">Storage: ${phone.mainFeatures.storage}</p>
    <h5>Others--</h5>
    <p>Bluetooth: ${phone.others.Bluetooth}</p>
    <p>GPS: ${phone.others.GPS}</p>
    <p>NFC: ${phone.others.NFC}</p>
    <p>Radio: ${phone.others.Radio}</p>
    <p>USB: ${phone.others.USB}</p>
    <p>WLAN: ${phone.others.WLAN}</p>
  `;
}

loadPhones("a");