/*
This is empty on purpose! Your code to build the resume will go here.
 */
 
 var name = "Akisha D Anthony";
 var role = "SharePoint Administrator";
 var formattedName = HTMLheaderName.replace("%data%", name);
 var formattedRole = HTMLheaderRole.replace("%data%", role);
 var skills = ["CSS ", "HTML ", "C# ", "ASP.Net"];
 var bio = {
	 "name" : "Akisha D Anthony",
	 "role": "SharePoint Administrator",
	 "contact info" : "910-401-2623",
	 "welcome message" : "Welcome to my biography",
	 "skills" : skills
 };
 
var work = {
	"current position" : "Application Developer",
	"employer" : "DRS Technologies",
	"city" : "Stuttgart",
	"country" : "Germany",
	"years" : "2 Years"
}; 

var education = {
	"school" : "University of Maryland",
	"years" : "2011-2013",
	"city" : "Adelphi"	
};
  
  
  $("#header").append(formattedRole);
  $("#header").prepend(formattedName);
  $("#myBio").append(bio);
  $("#workExperience").append(work.employer);
  $("#education").append(education.school);
 