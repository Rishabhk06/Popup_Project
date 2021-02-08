import "./styles.css";

const showbtn = document.getElementById("showbtn");
showbtn.addEventListener("click", showfnc);

function showfnc() {
  // console.log("rishabh");

  document.getElementById("popup1").classList.toggle("active");
}

const closebtn = document.getElementById("closebtn1");
closebtn.addEventListener("click", showfnc);
