const width = document.body.clientWidth;
const formContainer = document.getElementById("form-container");

const formData = {
    subject:"",
    body:""
}

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
window.addEventListener("resize", onResize);

const subjectInput = (event) => {
  const log = event.target.value;
  return log;
};


const subject = document.getElementById("title");
const textBox = document.getElementById('text-box');


document.getElementById('form').addEventListener("submit", event =>{
    event.preventDefault()
    let message = {
        subject:"",
        content:''
    }
    
    message.subject = subject.value;
    message.content = textBox.value;

    console.log(message)
})



