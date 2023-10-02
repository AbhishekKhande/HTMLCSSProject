const elementGrabber = document.getElementById("element-grabber");
const getBtn = document.getElementById("getBtn");
const deleteBtn = document.getElementById("deleteBtn");

let candidateData;
async function getUsers() {
  try {
    let res = await fetch("http://localhost:3000/data");
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}
async function renderUsers() {
  const users = await getUsers();
  // console.log(users);
  for (const key of users) {
    console.log(key);
    elementGrabber.innerHTML += `<div class="content-rows">
     <div class="table-header-item-name content">${key.FirstName} ${key.MiddleName} ${key.LastName}</div>
     <div class="table-header-item-title content"> ${key.Title}</div>
     <div class="table-header-item-email content"> ${key.EmailId}</div>
     <div class="table-header-item-mobile content">${key.MobileNumber}</div>
     <div class="table-header-item-place "> ${key.City}</div>
     </div>`;
  }
}
document.addEventListener("DOMContentLoaded", (e) => {
  getBtn.addEventListener("click", (e) => {
    e.preventDefault();
    renderUsers();
  });
  deleteBtn.addEventListener("click", (e) => {
    e.preventDefault();
    deleteUsers();
    async function deleteUsers() {
      const users = await getUsers();
      const toDeleteName = prompt(`Enter user's email address`);
      for (const [key, value] of users.entries()) {
        if (value.EmailId === toDeleteName) {
          fetch(`http://localhost:3000/data/${value.id}`, {
            method: "DELETE",
          })
            .then((response) => response.json())
            .then((data) => {
              console.log("JSON data deleted successfully!");
            })
            .catch((error) => {
              console.error(error);
            });
        }
      }
      renderUsers();
    }
  });
});
