const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();
  // verify both fields are entered
  if (nameInput.value === "" || emailInput.value === "") {
    msg.classList.add("error");
    msg.innerHTML = "Please enter all fields";
    setTimeout(() => msg.remove(), 3000); //  after 3000ms remove the message
  } else {
    // create list element
    const li = document.createElement("li");
    // add input values to the list element
    li.appendChild(
      document.createTextNode(`${nameInput.value} : ${emailInput.value}`)
    );
    // append list element to user list
    userList.appendChild(li);

    // clear inputs
    nameInput.value = "";
    emailInput.value = "";

    // this is all saved to the page, reloading page clears it
  }
}
