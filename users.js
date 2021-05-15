localStorage.getItem("Users");
var m = JSON.parse(localStorage.getItem("Users"));
renderData();
function renderData() {
  var table = document.getElementById("table");
  table.innerHTML = "";
  table.className = "tabl";
  for (var i = 0; i < m.length; i++) {
    var tr = document.createElement("tr");
    tr.className = "xyz";
    var td = document.createElement("td");
    td.className = "xx";
    td.innerText = m[i].name;
    var td_2 = document.createElement("td");
    td_2.className = "xx";
    td_2.innerText = m[i].email;
    var td_3 = document.createElement("td");
    td_3.className = "xx";
    td_3.innerText = m[i].amount;
    var button = document.createElement("button");
    button.className = "less";
    button.innerText = "Remove";
    button.setAttribute("onclick", "dell_row(this," + i + ")");
    table.appendChild(tr).appendChild(td);
    table.appendChild(tr).appendChild(td_2);
    table.appendChild(tr).appendChild(td_3);
    table.appendChild(tr).appendChild(button);
  }
}
var m = JSON.parse(localStorage.getItem("Users"));
function dell_row(z, i) {
  m.splice(i, 1);
  window.localStorage.setItem("Users", JSON.stringify(m));
  renderData();
}
