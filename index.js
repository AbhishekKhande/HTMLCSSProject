const form = document.getElementById("candidate-fields");

// console.log(form);
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

  const CandidateDetails = {
    "First-Name": fname,
    "Last-Name": lname,
    "Middle-Name": mname,
    "Email-Id": email,
    "Mobile-Number": mnumber,
    "highest-qualification": qualification,
    "University-Name": uniname,
    "GPA/CGPA": gpa,
    "Place-of-Residence": place,
  };

  details.push(CandidateDetails);
  console.log(details);
  localStorage.setItem("Details", JSON.stringify(details));
  //   localStorage.setItem({
  //     "First Name": fname,
  //     "Last Name": lname,
  //     "Middle Name": mname,
  //     "Email-Id": email,
  //     "Mobile Number": mnumber,
  //     "highest qualification": qualification,
  //     "University Name": uniname,
  //     "GPA/CGPA": gpa,
  //     "Place of Residence": place,
  //   });

  //   form.reset();
});
