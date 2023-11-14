function toggleDiv() {
  let myDiv = document.getElementById("sidbar");
  console.log(typeof myDiv);
  if (myDiv.style.display  === "none"){
    myDiv.style.display = "block";
  }
  else{
    myDiv.style.display = "none"
  }
}