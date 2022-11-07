import throttle from "lodash.throttle";
// console.log(throttle)

const form = document.querySelector('.feedback-form')



const email = form[0];
const massage = form[1];


const formValue = {}

addForm()

form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onSubmit);

function onInput () {
    formValue.email = email.value;
    formValue.massage = massage.value;

    // console.log(formValue)
    
    localStorage.setItem('feedback-form-state', JSON.stringify(formValue))
}

function onSubmit (evt) {
    localStorage.clear()
    evt.currentTarget.reset();

}

function addForm() {
    const saveValue = JSON.parse(localStorage.getItem('feedback-form-state'));
    if (saveValue) {
    email.value = saveValue.email || "";
    massage.value = saveValue.massage || "";
}

// console.log(saveValue)
}

