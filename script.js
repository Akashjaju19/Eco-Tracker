function saveData() {
  let checkboxes = document.querySelectorAll("input[type=checkbox]");
  let completed = [];

  checkboxes.forEach((cb) => {
    if (cb.checked) {
      completed.push(cb.value);
    }
  });

  localStorage.setItem("ecoData", JSON.stringify(completed));

  document.getElementById("result").innerText =
    "You completed " + completed.length + " eco actions today ";
}

window.onload = function () {
  let saved = JSON.parse(localStorage.getItem("ecoData")) || [];

  document.querySelectorAll("input[type=checkbox]").forEach((cb) => {
    if (saved.includes(cb.value)) {
      cb.checked = true;
    }
  });
};
