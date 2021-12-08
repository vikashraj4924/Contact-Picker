var contacts = [
  { name: "Meenal" },
  { name: "Kartik" },
  { name: "Parth" },
  { name: "Kshitij" },
  { name: "Divya" },
  { name: "Nishitha" },
  { name: "Nishi" },
  { name: "Prateek" },
  { name: "Sonal" },
  { name: "Clayton" },
  { name: "Shreyans" },
  { name: "Antino" },
  { name: "Fulton" },
  { name: "Risha" },
  { name: "Harry" },
  { name: "Potter" },
  { name: "John" },
  { name: "Smith" },
  { name: "Rahul" },
  { name: "Ananya" },
  { name: "Sai" },
  { name: "Shubham" },
  { name: "Yash" },
  { name: "Prachi" },
  { name: "Abheek" },
  { name: "Sohan" },
  { name: "Bibek" },
]

function GetSortOrder(prop) {
  return function (a, b) {
    if (a[prop] > b[prop]) {
      return 1;
    } else if (a[prop] < b[prop]) {
      return -1;
    }
    return 0;
  }
}

contacts.sort(GetSortOrder("name"))
buildTable(contacts)

function buildTable(data) {
  var table = document.getElementById('contact_container')

  for (var i = 0; i < data.length; i++) {
    var row = `<div class="option">
      <input type="radio" class="radio" name="category" />
      <label for="news">${data[i].name}</label>
    </div>`
    table.innerHTML += row
  }
}

const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");
const searchBox = document.querySelector(".search-box input");

const optionsList = document.querySelectorAll(".option");

console.log(optionsList.length)
console.log(selected.length)
console.log(searchBox.length)

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");

  searchBox.value = "";
  filterList("");

  if (optionsContainer.classList.contains("active")) {
    searchBox.focus();
  }
});

optionsList.forEach(o => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
  });
});

searchBox.addEventListener("keyup", function(e) {
  filterList(e.target.value);
});

const filterList = searchTerm => {
  searchTerm = searchTerm.toLowerCase();
  optionsList.forEach(option => {
    let label = option.firstElementChild.nextElementSibling.innerText.toLowerCase();
    if (label.indexOf(searchTerm) != -1) {
      option.style.display = "block";
    } else {
      option.style.display = "none";
    }
  });
};

