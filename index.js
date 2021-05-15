
var arr = JSON.parse(localStorage.getItem("Users") || "[]");
function Adduser() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var amount = document.getElementById("amount").value;
  var obj = {};
  obj.name = name;
  obj.email = email;
  obj.amount = amount;
  arr.push(obj);
  window.localStorage.setItem("Users", JSON.stringify(arr));
  window.location.href = "Dashboard.html";
}
