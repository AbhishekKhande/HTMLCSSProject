const elementGrabber = document.getElementById("element-grabber");
const getStoredData = JSON.parse(localStorage.getItem("Details"));
document.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault();
  console.log(getStoredData);
  for (const key of getStoredData) {
    elementGrabber.innerHTML += `<div class="content-rows">
   <div class="table-header-item-name content">${key.FirstName} ${key.MiddleName} ${key.LastName}</div>
   <div class="table-header-item-title content"> ${key.Title}</div>
   <div class="table-header-item-email content"> ${key.EmailId}</div>
   <div class="table-header-item-mobile content">${key.MobileNumber}</div>
   <div class="table-header-item-place "> ${key.PlaceOfResidence}</div>
   </div>`;
  }
});
