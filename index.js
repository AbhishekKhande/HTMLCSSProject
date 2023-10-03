const form = document.getElementById("candidate-fields");
const countryDropdown = document.getElementById("country");
const stateDropdown = document.getElementById("state");
const cityDropdown = document.getElementById("city");
let country = document.getElementById("country");
let city = document.getElementById("city");
let state = document.getElementById("state");

document.addEventListener("DOMContentLoaded", async () => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const fname = document.getElementById("fname");
    const lname = document.getElementById("lname");
    const mname = document.getElementById("mname");
    const email = document.getElementById("email");
    const mnumber = document.getElementById("mnumber");
    const qualification = document.getElementById("qualification");
    const uniname = document.getElementById("uniname");
    const gpa = document.getElementById("gpa");
    const title = document.getElementById("title");

    function validated() {
      const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
      const phonePattern = /^\d{10}$/;

      // Check if any of the mandatory fields are empty or invalid
      if (fname.value === "") {
        fname.style.border = "2px solid red";
      }

      if (lname.value === "") {
        lname.style.border = "2px solid red";
      }
      if (!emailPattern.test(email.value)) {
        email.style.border = "2px solid red";
      }

      if (!phonePattern.test(mnumber.value)) {
        mnumber.style.border = "2px solid red";
      }

      if (qualification.value === "") {
        qualification.style.border = "2px solid red";
      }
      if (uniname.value === "") {
        uniname.style.border = "2px solid red";
      }

      if (gpa.value === "") {
        gpa.style.border = "2px solid red";
      }

      if (title.value === "") {
        title.style.border = "2px solid red";
      }
      // If any of the fields are invalid, prevent form submission
      if (
        fname.value === "" ||
        lname.value === "" ||
        !emailPattern.test(email.value) ||
        !phonePattern.test(mnumber.value) ||
        qualification.value === "" ||
        uniname.value === "" ||
        gpa.value === "" ||
        title.value === ""
      ) {
        return false;
      } else {
        return true;
      }
    }

    const id = Math.floor(Math.random() * 500) + 1;
    const CandidateDetails = {
      id: id,
      FirstName: fname.value,
      LastName: lname.value,
      MiddleName: mname.value,
      EmailId: email.value,
      Title: title.value,
      MobileNumber: mnumber.value,
      highestQualification: qualification.value,
      UniversityName: uniname.value,
      GPA_CGPA: gpa.value,
      Country: country.value,
      City: city.value,
      State: state.value,
    };
    // console.log(validated);

    if (validated()) {
      postCandidate();
      document.location = "showData.html";
    }

    async function postCandidate() {
      const response = await fetch("http://localhost:3000/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(CandidateDetails),
      });
      const data = await response.json();
      console.log(data);
    }
  });

  const stateOptions = {
    usa: ["New York", "California", "Texas"],
    canada: ["Ontario", "Quebec", "British Columbia"],
    india: ["Andhra Pradesh", "Karnataka", "Tamil Nadu"],
    england: ["London", "Manchester", "Birmingham"],
  };
  const cityOptions = {
    "New York": ["New York City", "Buffalo", "Albany"],
    California: ["Los Angeles", "San Francisco", "San Diego"],
    Texas: ["Houston", "Dallas", "Austin"],
    Ontario: ["Toronto", "Ottawa", "Mississauga"],
    Quebec: ["Montreal", "Quebec City", "Laval"],
    "British Columbia": ["Vancouver", "Victoria", "Surrey"],
    "Andhra Pradesh": ["Hyderabad", "Visakhapatnam", "Vijayawada"],
    Karnataka: ["Bengaluru", "Mysuru", "Hubli-Dharwad"],
    "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai"],
    London: ["Westminster", "City of London", "Southwark"],
    Manchester: ["City of Manchester", "Salford", "Bury"],
    Birmingham: ["City of Birmingham", "Sandwell", "Wolverhampton"],
  };

  countryDropdown.addEventListener("change", () => {
    const selectedCountry = countryDropdown.value;
    country = selectedCountry;
    console.log(country);
    const states = stateOptions[selectedCountry] || [];
    populateDropdown(stateDropdown, states);
    populateDropdown(cityDropdown, []);
  });

  stateDropdown.addEventListener("change", () => {
    const selectedState = stateDropdown.value;
    state = selectedState;
    console.log(state);
    const cities = cityOptions[selectedState] || [];
    populateDropdown(cityDropdown, cities);
  });
  cityDropdown.addEventListener("change", () => {
    const selectedCity = cityDropdown.value;
    city = selectedCity;
    console.log(city);
  });

  function populateDropdown(dropdown, options) {
    dropdown.innerHTML = "";

    options.forEach((option) => {
      const optionElement = document.createElement("option");
      optionElement.value = option;
      optionElement.textContent = option;
      dropdown.appendChild(optionElement);
    });
  }
});
