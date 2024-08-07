let btn = document.querySelector(".add");
let submit = document.querySelector(".sub");
// console.log(btn);
// let table = document.querySelectorAll(".inpp");
let form = document.querySelector(".row_data");
btn.onclick = function () {
  form.className = ".row_data d-block";
  submit.className = "d-block btn btn-primary";
  // for (let t of table) {
  //   t.className = "d-block inpp";
  //   console.log(t);
  // }
};
let inputs = document.querySelectorAll(".form-control");
for (let input of inputs) {
  input.onkeyup = function () {
    console.log(event.target);
    if (event.target.value.length < 4) {
      event.target.nextElementSibling.className = "alert alert-danger";
      event.target.nextElementSibling.textContent = "input must be more than 4";
    } else {
      event.target.nextElementSibling.className = "";
      event.target.nextElementSibling.textContent = "";
    }
  };
}
submit.onclick = function () {
  // document.querySelector(".last").className = "";
  // let x = document.createElement("tr");
  // x.className = "last";
  // document.querySelector("tbody").append(x);
  // for (let input of inputs) {
  //   let roww = document.createElement("td");
  //   roww.textContent = input.value;
  //   roww.classList.add("bg-secondary");
  //   document.querySelector(".last").append(roww);
  // }
  let name_a = document.getElementById("name_a").value;
  let name_b = document.getElementById("name_b").value;
  let des_a = document.getElementById("des_a").value;
  let des_b = document.getElementById("des_b").value;
  document.querySelector("tbody").innerHTML += `
  <tr>
  <td>
                  <span class="bg-warning"><i class="bi bi-x"></i></span>
                  <span class="bg-warning">
                  <i class="bi bi-pencil-fill"></i></span>
                  <span class="bg-warning"><i class="bi bi-eye"></i></span>
                </td>
  <td>${des_b}</td>
  <td>${des_a}</td>
  <td>${name_b}</td>
  <td>${name_a}</td>
  </tr>
  `;
  name_a.value = "";
  name_b.value = "";
  des_a.value = "";
  des_b.value = "";
  form.className = ".row_data d-none";
  submit.className = "d-none btn btn-primary";
};
// let error = document.querySelector(".error");
// let t = document.querySelectorAll("input");
