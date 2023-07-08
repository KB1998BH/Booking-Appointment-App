//create a my form
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();
    //console.log(nameInput.value);
    if(nameInput.value =='' || emailInput.value == '' ){
        alert('please enter fields');
        msg.classList.add('error');
        msg.innerHTML= 'please enter all fields';
        setTimeout(() => msg.remove(), 3000);
    }else{
        console.log('success');
        const Li = document.createElement('Li');
        Li.appendChild(document.createTextNode (`${nameInput.value}
          : ${emailInput.value}`));

          userList.appendChild(Li);

          //clear fields 
          nameInput.value = '';
          emailInput.value = '';
    }
}