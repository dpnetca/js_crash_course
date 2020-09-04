// Single element Selectors
console.log(document.getElementById("my-form"));
console.log(document.querySelector(".item")); // will only get first instance

// Multiple element Selectors
console.log(document.querySelectorAll(".item"));

// similar output, but this is older use query selector instead
console.log(document.getElementsByClassName("item"));
console.log(document.getElementsByTagName("li"));

const items = document.querySelectorAll(".item");
items.forEach((item) => console.log(item));

const ul = document.querySelector(".items");
// ul.remove(); // will remove entire list
// ul.lastElementChild.remove(); // remove last item
ul.firstElementChild.textContent = "Hello";
ul.children[1].innerText = "brad";
ul.lastElementChild.innerHTML = "<h1>Hello</h1>";

const btn = document.querySelector(".btn");
// btn.style.background = "red";
btn.addEventListener("click", (e) => {
  e.preventDefault(); // stop the default behavior of a submit button reloading paging and submitting to iteslf
  console.log(e);
  console.log(e.target);
  console.log(e.target.className);
  document.querySelector("#my-form").style.background = "#ccc";
  document.querySelector("body").classList.add("bg-dark");
  ul.lastElementChild.innerHTML = "<H1>Good Bye</h1>";
});
// lots of event types, ie.mouseOver, mouse out etc..
