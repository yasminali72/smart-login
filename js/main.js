// login
let loginEmail = document.querySelector("#email");
let loginPassword = document.querySelector("#password");
let loginBtn = document.querySelector("#login");

// signup
let signName = document.querySelector("#userName");
let signEmail = document.querySelector("#userEmail");
let signPassword = document.querySelector("#userPassword");
let signupBtn = document.querySelector("#signup");

let users;

if (localStorage.getItem("userList") == null) {
  users = [];
} else {
  users = JSON.parse(localStorage.getItem("userList"));
  //   console.log(users);
}

function addUser() {
  if (
    (signName.value == "" &&
      signEmail.value == "" &&
      signPassword.value == "") ||
    signName.value == "" ||
    signEmail.value == "" ||
    signPassword.value == ""
  ) {
    displayRequried();
  } else if (userExist()) {
    displayExist();
    // clearData();
  } else {
    user = {
      name: signName.value,
      email: signEmail.value,
      password: signPassword.value,
    };
    users.push(user);
    localStorage.setItem("userList", JSON.stringify(users));
    displaySucess();
    setTimeout(sigin,1000)
   
    // clearData();
  }
}
function sigin() {
  location.replace('index.html')
  
}

function clearData() {
  signName.value = null;
  signEmail.value = null;
  signPassword.value = null;
}

function userExist() {
  for (let i = 0; i < users.length; i++) {
    if (users[i].email == signEmail.value) {
      return true;
    }
  }
}

function displayExist() {
  document.getElementById(
    "message"
  ).innerHTML = `<p class='text-danger'>Email already exists</p>`;
}
function displayRequried() {
  document.getElementById(
    "message"
  ).innerHTML = `<p class='text-danger'>All inputs is required</p>`;
}
function displaySucess() {
  document.getElementById(
    "message"
  ).innerHTML = `<p class='text-success'>Success</p>`;
}
function displayIncorrect() {
  document.getElementById(
    "message"
  ).innerHTML = `<p class='text-danger'>Incorrect email or password</p>`;
}

let userName;
function user() {
  for (let i = 0; i < users.length; i++) {
    if (
      users[i].email == loginEmail.value &&
      users[i].password == loginPassword.value
    ) {
      userName = users[i].name;
      return true;
    }
  }
}
function login() {
  if (loginEmail.value == "" || loginPassword.value == "") {
    displayRequried();
  } else if (user()) {
    localStorage.setItem("userName", userName);
    location.replace("home.html");
  } else {
    displayIncorrect();
  }
}
function Welcome() {
  userName = localStorage.getItem("userName");
  document.getElementById("group").innerHTML = `<h1 >Welcome ${userName}</h1>`;
}

function logOut() {
  location.replace("index.html");
}
