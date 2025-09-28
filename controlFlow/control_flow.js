let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access Level:", accessLevel);

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}

console.log("User Message:", userMessage);

let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Category:", userCategory);

let isAuthenticated = true;

let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

console.log("Authentication Status:", authenticationStatus);

let personType = "Employee";
let authorization;

switch(personType) {
    case "Employee":
        authorization = "You have access to Dietary Services.";
        break;
    case "Enrolled Member":
        authorization = "You have access to Dietary Services and one-one-one interaction with a dietician.";
        break;
    case "Subscriber":
        authorization = "You have partial access to facilitate Dietary Services only."
        break;
    case "Non-Subscriber":
        authorization = "You need to enroll or subscribe first to avail this facility."
        break;
    }

console.log("Authorization: ", authorization);
