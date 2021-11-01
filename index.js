const validateEmail = (e) => {
  const parentNode = document.getElementsByClassName("notify-form")[0];
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const email = document.getElementById("email");
  if (e.target.nodeName === "INPUT") {
    if (e.key !== "Enter") return;
  }
  if (emailRegex.test(email.value)) {
    if (parentNode.classList.contains("error")) {
      parentNode.classList.remove("error");
    }
    email.value = "";
    parentNode.classList.add("success");
    setInterval(removeSuccess, 5000);
  } else {
    if (parentNode.classList.contains("success")) {
      parentNode.classList.remove("success");
    }
    parentNode.classList.add("error");
  }
};
const removeSuccess = () => {
  document.getElementsByClassName("notify-form")[0].classList.remove("success");
};
