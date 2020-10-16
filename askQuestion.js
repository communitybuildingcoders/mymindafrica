const width = document.body.clientWidth;
const formContainer = document.getElementById("form-container");

const onResize = () => {
  const newWidth = (width.textContent = window.innerWidth);

if(newWidth > 1030){
    formContainer.style.background = 'transparent'
}else if(newWidth > 1024){
     formContainer.style.background =
     "radial-gradient(rgba(60, 60, 60, .2), rgba(40, 40, 40, .7))";
}else if (newWidth < 1024) {
    formContainer.style.background =
      "radial-gradient(rgba(20, 20, 20, .5), rgb(0, 0, 0))";
  }
}

const screenWidth = window.addEventListener("resize", onResize);
