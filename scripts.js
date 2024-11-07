var form = document.querySelector("#resume-form");
var resumeDisplay = document.getElementById("resume-display");
//Function to generate resume 
function generateResume(event) {
    event.preventDefault();
}
// Collect input values
var Name = document.getElementById('Name').value;
var email = document.getElementById("email").value;
var phone = document.getElementById('phone').value;
var website = document.getElementById("website").value;
// Collect Education Elements
var educationElements = [
    "education1",
    "education2",
    "education3",
    "education4"
].map(function (id) { var _a; return ((_a = document.getElementById(id)) === null || _a === void 0 ? void 0 : _a.value) || ""; });
// Collect Experience Elements
var experienceElements = [
    "Experience1",
    "Experience2",
    "Experience3",
    "Experience4",
].map(function (id) { var _a; return ((_a = document.getElementById(id)) === null || _a === void 0 ? void 0 : _a.value) || ""; });
// Collect skills
var skillsElements = [
    "skill1",
    "skill2",
    "skill3",
    "skill4",
].map(function (id) { var _a; return ((_a = document.getElementById(id)) === null || _a === void 0 ? void 0 : _a.value) || ""; });
//Generate the resume HTML dynamically
var resumeContent = "<h2>".concat(Name, "</h2>\n<p>Email:").concat(email, "</p>\n<p>Phone:").concat(phone, "   </p>\n<p>Website :").concat(website, " </p>\n <h3>Education</h3> \n <ul>").concat(educationElements.map(function (ed) { return ed && "<li>".concat(ed, "</li> "); }).join(""), " </ul>\n<h3>Experience</h3>\n<ul>").concat(experienceElements.map(function (exp) { return exp && "<li>".concat(exp, "</li>"); }).join(""), "</ul>\n <h3>Skills</h3>\n <ul>").concat(skillsElements.map(function (skill) { return skill && "<li>".concat(skill, "</li>"); }).join(""), "</ul> ");
// Display the generated resume
if (resumeDisplay) {
    resumeDisplay.innerHTML = resumeContent;
}
else {
    console.error('The resume element is required!');
}
// Handel Form Submission
if (form) {
    form.addEventListener("submit", generateResume);
}
else {
    console.error("The resume element is missing!");
}
