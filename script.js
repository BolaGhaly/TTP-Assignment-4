/* 1.	Create an HTML page with two buttons that argue with each other. When one button is clicked, the text "I'm right" should be placed next to it. When the other button is clicked, the text is replaced with, "No, I'm right!" */
const divOfButtons = document.createElement("div");
const firstButton = document.createElement("button");
const secondButton = document.createElement("button");

divOfButtons.classList = "buttons-div";
firstButton.classList = "first-button";
secondButton.classList = "second-button";

firstButton.innerHTML = "Click Me!";
secondButton.innerHTML = "No, click Me!";

firstButton.onclick = function () {
  let firstButtonText = document.createElement("p");
  firstButtonText.innerHTML = "I'm right";
  firstButtonText.classList = "firstButtonText";
  firstButton.insertAdjacentElement("afterend", firstButtonText);
};

secondButton.onclick = function () {
  secondButton.innerHTML = "No, I'm right!";
};

divOfButtons.append(firstButton, secondButton); //add both buttons to the div of buttons

/* 2.	Create an HTML page with a large element on the page that says "Don't hover over me" inside of it. When you hover over the element, send an alert to the user that says, "Hey, I told you not to hover over me! */
const dontHoverHeading = document.createElement("h1");
dontHoverHeading.innerHTML = "Don't hover over me";
dontHoverHeading.classList = "dont-hover-h1";
dontHoverHeading.onmouseover = function () {
  alert("Hey, I told you not to hover over me!");
};

/* 3.	Create an HTML page with a form. It should include inputs for a username, email, and password. Also a submit button. */

/* 6.	BONUS: Create an HTML page with a form that asks the user to input the value of a sphere's radius. Write Javascript that gives them back the volume of the sphere. (There are many different ways to execute this. You can give the user information back in another input box on the page, as an alert, or any other way you can think of. You can look up how to use the Javascript Math object to simplify your calculations.) */

const usernameLabel = document.createElement("label");
const emailLabel = document.createElement("label");
const passwordLabel = document.createElement("label");
const radiusOfSphereLabel = document.createElement("label");
const submitButton = document.createElement("input");

usernameLabel.setAttribute("for", "username");
emailLabel.setAttribute("for", "email");
passwordLabel.setAttribute("for", "password");
radiusOfSphereLabel.setAttribute("for", "radiusOfSphere");

usernameLabel.innerHTML = "Username:";
emailLabel.innerHTML = "Email:";
passwordLabel.innerHTML = "Password:";
radiusOfSphereLabel.innerHTML = "Radius of a Sphere:";

const usernameInput = document.createElement("input");
const emailInput = document.createElement("input");
const passwordInput = document.createElement("input");
const radiusOfSphereInput = document.createElement("input");

usernameInput.setAttribute("type", "text");
usernameInput.setAttribute("id", "username");
usernameInput.setAttribute("placeholder", "Username");
emailInput.setAttribute("type", "email");
emailInput.setAttribute("id", "email");
emailInput.setAttribute("placeholder", "Email");
passwordInput.setAttribute("type", "password");
passwordInput.setAttribute("id", "password");
passwordInput.setAttribute("placeholder", "Password is 12345678");
radiusOfSphereInput.setAttribute("type", "number");
radiusOfSphereInput.setAttribute("id", "radiusOfSphere");
radiusOfSphereInput.setAttribute("placeholder", "Minimum = 1");
radiusOfSphereInput.setAttribute("min", "1");
submitButton.setAttribute("type", "submit");
submitButton.setAttribute("value", "Submit");
submitButton.classList = "form-submit-button";

usernameInput.required = true;
emailInput.required = true;
passwordInput.required = true;

const form = document.createElement("form");
form.classList = "form";

const formContainer = document.createElement("div");
formContainer.classList = "form-container";

form.append(
  usernameLabel,
  usernameInput,
  emailLabel,
  emailInput,
  passwordLabel,
  passwordInput,
  radiusOfSphereLabel,
  radiusOfSphereInput,
  submitButton
);
formContainer.append(form);

/* 4.	In a Javascript file, write a program which checks the following things:
a.	checks that the password is 12345678
b.	if the password is incorrect, send an alert message
c.	Your page should also include an <h1> tag. If the information in the form is correct, have Javascript change the text in the <h1>.HTML page.
 */
const correctFormInfo = document.createElement("h1");
correctFormInfo.classList = "form-h1";
correctFormInfo.innerHTML = "The information in the form is: ?";

const volumeOfSphere = document.createElement("h2");
volumeOfSphere.classList = "form-h2";

function checkPassword() {
  if (passwordInput.value.trim() != 12345678) {
    return false;
  } else if (passwordInput.value.trim() == 12345678) {
    return true;
  }
}

function calculateVolume() {
  let tempVolume =
    (4 / 3) *
    Math.PI *
    Math.pow(radiusOfSphereInput.value.trim(), 3).toFixed(4);
  return (
    "Volume of the sphere (radius = " +
    radiusOfSphereInput.value.trim() +
    ") = " +
    tempVolume.toFixed(4)
  );
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  setTimeout(
    2000,
    checkPassword() === true
      ? (correctFormInfo.innerHTML = "The information in the form is: correct")
      : (correctFormInfo.innerHTML = "The information in the form is: ?") +
    alert("No, I already told you the password is 12345678")
  );

  setTimeout(
    2000,
    radiusOfSphereInput.value.trim() == ""
      ? (volumeOfSphere.innerHTML = "")
      : (volumeOfSphere.innerHTML = calculateVolume())
  );
});

document.body.append(
  divOfButtons,
  dontHoverHeading,
  formContainer,
  correctFormInfo,
  volumeOfSphere
); //add all of the elements created in this script.js file to the body tag of the index.html file
