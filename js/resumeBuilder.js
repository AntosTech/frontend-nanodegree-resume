/*
This is empty on purpose! Your code to build the resume will go here.
 */
 
 var name = "Akisha D Anthony";
 var role = "SharePoint Administrator";
 var formattedName = HTMLheaderName.replace("%data%", name);
 var formattedRole = HTMLheaderRole.replace("%data%", role);
 var skills = {"CSS", "HTML", "C#", "ASP.Net"}
 var bio = {
	 "name" : "Akisha",
	 "role": "SharePoint Administrator",
	 "contact info" : "910-401-2623",
	"welcome message" : "Welcome to my biography",
	"skills" : skills
 }
  

  
  
  $("#header").append(formattedRole);
  $("#header").prepend(formattedName);
  $("#header").append(bio);