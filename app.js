// Donations JS //
mybutton = document.getElementById("toTop");

function topFunction() {
  document.body.scrollTop = 0; //for Safari//
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera //
}

///////////Questions Javscript//////////

console.log("hello");
const width = document.body.clientWidth;
const formContainer = document.getElementById("form-container");

const formData = {
  subject: "",
  body: "",
};

const onResize = () => {
  const newWidth = (width.textContent = window.innerWidth);

  // if (newWidth > 1030) {
  //   formContainer.style.background = "transparent";
  // } else if (newWidth > 1024) {
  //   formContainer.style.background =
  //     "radial-gradient(rgba(60, 60, 60, .2), rgba(40, 40, 40, .7))";
  // } else if (newWidth < 1024) {
  //   formContainer.style.background =
  //     "radial-gradient(rgba(20, 20, 20, .5), rgb(0, 0, 0))";
  // }
};
window.addEventListener("resize", onResize);

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
      "mailto:adlerluders@outlook.com?subject=" +
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
