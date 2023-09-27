const form = document.getElementById("candidate-fields");
const details = JSON.parse(localStorage.getItem("Details")) || [];
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;
  const mname = document.getElementById("mname").value;
  const email = document.getElementById("email").value;
  const mnumber = document.getElementById("mnumber").value;
  const qualification = document.getElementById("qualification").value;
  const uniname = document.getElementById("uniname").value;
  const gpa = document.getElementById("gpa").value;
  const place = document.getElementById("place").value;
  const title = document.getElementById("title").value;

  const CandidateDetails = {
    FirstName: fname,
    LastName: lname,
    MiddleName: mname,
    EmailId: email,
    Title: title,
    MobileNumber: mnumber,
    highestQualification: qualification,
    UniversityName: uniname,
    GPA_CGPA: gpa,
    PlaceOfResidence: place,
  };

  details.push(CandidateDetails);
  console.log(details);
  localStorage.setItem("Details", JSON.stringify(details));
  form.reset();
});
