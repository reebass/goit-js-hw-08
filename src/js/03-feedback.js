import throttle from "lodash.throttle";


const form = document.querySelector('.feedback-form')
const email = form[0];
const massage = form[1];

const formValue = {};

addForm()


form.addEventListener('input', throttle(onInput, 500));

function onInput () {
        formValue.email = email.value,
        formValue.massage = massage.value,

    
    localStorage.setItem('feedback-form-state', JSON.stringify(formValue))
}


form.addEventListener('submit', onSubmit);

function onSubmit (evt) {
    evt.preventDefault();
    if (email.value.length && massage.value.length) {
                const userData = {
                    email: email.value,
                    massage: massage.value,
                } 
            console.log(userData)
            }else {
                return alert('Все поля должны быть заполнены')
            }

    localStorage.clear();
    evt.target.reset();
}

function addForm() {
    const saveValue = JSON.parse(localStorage.getItem('feedback-form-state'));
    if (saveValue) {
    email.value = saveValue.email || "";
    massage.value = saveValue.massage || "";
}


}



