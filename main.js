const form = document.getElementById('my-form');
const container = document.querySelector('h1') //** 
console.log(container);

const myForm = document.querySelector('#my-form');
const textInput = document.querySelector('#text');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('#msg');
const userList = document.querySelector('#users');
const userList2 = document.querySelector('#users2');
const mydelete = document.querySelector('#my-form');



myForm.addEventListener('submit', onsubmit);
function onsubmit(e) { //eไม่อยากให้ refresh
    e.preventDefault(); //ป้องกัน refresh
    if (textInput.value === '' || emailInput.value === '') {
        //alert('Please enter all fields');
        msg.classList.add('error');
        msg.innerHTML = "Please input data"
    } else {

        // console.log(nameInput.value + ' ' + emailInput.value);
        const li = document.createElement('div');
        const li2 = document.createElement('div');
        const li3 = document.createElement('br');
        const btnDisplay = document.createElement('input');
        const btnDelete = document.createElement('input');

        li.className = "myDIV "
        li2.className = "myDIV"
        li3.className = "card-body"
        btnDisplay.className = "btn btn-info";
        btnDisplay.type = "submit"
        btnDisplay.value = "Hide"
        btnDelete.className = "btn btn-danger";
        btnDelete.type = "submit"
        btnDelete.value = "Delete"
        btnDelete.setAttribute("id", "delete");
        btnDisplay.setAttribute("onclick", "myFunction()");

        btnDelete.onclick = function () {
            li.remove(this);
            btnDelete.remove(this);
            btnDisplay.remove(this);
        };
        
        btnDisplay.onclick = function(){
            if (li.style.display === "none") {
                li.style.display = "block";
                li3.style.display = "block";
                btnDelete.style.display = "block";
              } else {
                li.style.display = "none";
                li3.style.display = "none";
                btnDelete.style.display = "none";
              }
            }
            // li.style.display = "none";
        
        const text = document.createTextNode(`${emailInput.value} : ${textInput.value}`);
         
        li.appendChild(text); 
        li.appendChild(btnDisplay);
        li.appendChild(btnDelete)

        //console.log(li);
        userList.appendChild(li3);
        userList.appendChild(li);
        userList.appendChild(btnDisplay);
        userList.appendChild(btnDelete);
        
        textInput.value = '';
        emailInput.value = '';
    }
}


// window.onscroll = function () { scrollFunction() };

// function scrollFunction() {
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//         document.getElementById("myBtn").style.display = "block";
//     } else {
//         document.getElementById("myBtn").style.display = "none";
//     }
// }

// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
// }