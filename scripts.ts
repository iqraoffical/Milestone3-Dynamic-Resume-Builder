const form =document.querySelector("#resume-form") as HTMLFormElement;
const resumeDisplay=document.getElementById("resume-display")as HTMLInputElement;


//Function to generate resume 
function generateResume(event: Event): void {
  event.preventDefault();}  


  // Collect input values
  const Name=(document.getElementById ('Name')as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const phone=(document.getElementById ('phone')as HTMLInputElement).value;
  const website = (document.getElementById("website") as HTMLInputElement).value;
// Collect Education Elements

const educationElements=[
  "education1",  
  "education2"
  ,"education3",
  "education4"
].map(id =>(document.getElementById(id)as HTMLInputElement)?.value || "");
  // Collect Experience Elements
const experienceElements=[ 
  "Experience1",
  "Experience2",
  "Experience3",
  "Experience4",
].map(id => (document.getElementById(id) as HTMLInputElement)?.value || "");
// Collect skills
const skillsElements = [
  "skill1",
  "skill2",
  "skill3",
  "skill4",
].map(id => (document.getElementById(id) as HTMLInputElement)?.value || "");
//Generate the resume HTML dynamically
const resumeContent=  `<h2>${Name}</h2>
<p>Email:${email}</p>
<p>Phone:${phone}   </p>
<p>Website :${website} </p>
 <h3>Education</h3> 
 <ul>${educationElements.map(ed=> ed &&  `<li>${ed}</li> `).join("")} </ul>
<h3>Experience</h3>
<ul>${experienceElements.map(exp => exp && `<li>${exp}</li>`).join("")}</ul>
 <h3>Skills</h3>
 <ul>${skillsElements.map(skill =>skill &&  `<li>${skill}</li>`).join("")}</ul> `
// Display the generated resume
if(resumeDisplay){
  resumeDisplay.innerHTML=resumeContent;
}else{
  console.error('The resume element is required!')
}
// Handel Form Submission
if (form){form.addEventListener("submit",generateResume);
}else{
    console.error("The resume element is missing!")
  }

