var form = document.querySelector(".my-form");
    
async function handleSubmit(e) {
  e.preventDefault();
  var status = document.querySelector(".status");
  var data = new FormData(e.target);
  fetch(e.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    status.innerHTML = "Thanks for your submission!";
    form.reset()
  }).catch(error => {
    status.innerHTML = "Oops! There was a problem submitting your form"
  });
}
form.addEventListener("submit", handleSubmit)

// mobile nav
const hamburger =document.querySelector('.ham-icon')
const closeIcon = document.querySelector('.close')
const link = document.querySelector('.links')

// hamburger icon 
hamburger.addEventListener('click',()=>{
    if(link.classList.contains('showMenu')){
        link.classList.remove('showMenu')
        closeIcon.style.display='none'
        hamburger.style.display='block'
    }else{   
        link.classList.add('showMenu')    
        closeIcon.style.display='block'
        hamburger.style.display='none'
    }  
})

//close icon
closeIcon.addEventListener('click',()=>{
    if(link.classList.contains('showMenu')){
        link.classList.remove('showMenu')
        closeIcon.style.display='none'
        hamburger.style.display='block'
    }else{
            link.classList.add('showMenu')
            closeIcon.style.display='block'
            hamburger.style.display='none'
    } 
})


// form

const formValidator =document.querySelector('form')

formValidator.addEventListener('submit',(e)=>{
    e.preventDefault()
    const name=form['name'].value
    const email= form['email'].value
    const textarea= form['textarea'].value

    if(name===''){
        failureError('name','Name cannot be empty')
    }
    else{
        success('name')
    }
    if(email===''){
        failureError('email','Email cannot be empty')
    }
    else if(!isEmailValid(email)){
        failureError('email','Enter a valid email')
    }
    else{
        success('email')
    }
    if(textarea===''){
        failureError('textarea','Message cannot be empty')
    }
    else{
         success('textarea')
    }

})
function failureError(input,message){
        const formInput =formValidator[input].parentNode
        formInput.classList.add('error')

        const span=formInput.querySelector('span')
        span.innerText=message
        span.style.opacity='1'
}
function success(input){
        const formInput =formValidator[input].parentNode
        formInput.classList.remove('error')
        const span=formInput.querySelector('span')
        span.style.opacity='0'
}
function isEmailValid(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}