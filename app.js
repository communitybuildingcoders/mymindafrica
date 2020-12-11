///////////Questions Javscript//////////

const formContainer = document.getElementById("form-container");

const formData = {
  subject: "",
  body: "",
};

const subjectInput = (event) => {
  const log = event.target.value;
  return log;
};

const subject = document.getElementById("title");
const textBox = document.getElementById("text-box");

document.getElementById("form-btn").addEventListener("click", () => {
  let message = {
    subject: "",
    content: "",
  };

  message.subject = subject.value;
  message.content = textBox.value;
  document
    .getElementById("form")
    .setAttribute(
      "action",
      "mailto:insertEmailHere@email" +
        message.subject +
        "&body=" +
        message.content
    );
  document.getElementById("form").submit();
});

// Floating Nav
const toggler = document.querySelector(".main-nav__toggler");
const navItems = document.querySelector(".main-nav__items");

let isNavOpen = false;

const toggleNav = () => {
  if (isNavOpen) {
    console.log("close");
    navItems.style.display = "none";
    toggler.innerHTML = '<i class="fas fa-bars"></i>';
  } else {
    console.log("open");
    navItems.style.display = "flex";
    toggler.innerHTML = '<i class="fas fa-times"></i>';
  }

  isNavOpen = !isNavOpen;
};

toggler.addEventListener("click", toggleNav);
