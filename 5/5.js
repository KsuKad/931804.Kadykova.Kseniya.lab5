let first = document.querySelector("#uniq1");
let second = document.querySelector("#uniq2");
let third = document.querySelector("#uniq3");

openForm = (id) => {
  document.getElementById(id).style.visibility = "visible";
}

document.querySelectorAll('.modal').forEach((modal) => {
  modal.addEventListener('click', () => {
    modal.style.visibility = "hidden";
  })
});