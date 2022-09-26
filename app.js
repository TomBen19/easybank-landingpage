const dropdownBtn = document.querySelector(".dropbtn");
const dropdownContent = document.querySelector(".dropdown-content");
dropdownBtn.addEventListener("click", showMenu);

function showMenu() {
  if (dropdownContent.style.display == "") {
    dropdownContent.style.display = "block";
    dropdownBtn.innerHTML = "X";
  } else {
    dropdownContent.style.display = "";
    dropdownBtn.innerHTML = "---";
  }
}
