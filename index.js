// // fetch API

// // const getPosts = async () => {
// //     const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// //     const data = await res.json()
// //     console.log(data);

// //     let text = data.map((post) => {
// //         return `
// //         <h3>${post.title}</h3>
// //         <p>${post.body}</p>
        
// //         `
// //     })

// //     document.querySelector('.div').innerHTML = text;
// // }

// // getPosts();

// let user = {
//     name: 'Chuks',
//     gender: 'male',
//     age: 23
// }
// console.log(user);
// let position = 'beforeend';
// let html = `
// <h3>${user.name}</h3>
// <p>${user.gender}</p>
// </p>${user.age}</p>
// `

// document.querySelector('.div').insertAdjacentHTML(position,html)









// Get method

// const getUsers = async () => {

//     try{
//         const res = await axios.get('https://jsonplaceholder.typicode.com/users');
//         if(!data.ok){
//             throw Error ('Oops, sth went wrong');
//         }
//         console.log(res);
//     }
//     catch(err){
//         console.log(err.message);
//     }
   
//     // const data = res.data
   
// }

// getUsers();

let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let email = document.getElementById('email');
let password = document.getElementById('password');
let button = document.getElementById('button');

console.log(firstName.value);

let array = [];


const getUsers = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    array = res.data
    console.log(array);
    firstName.value = array[1].name;
    lastName.value = array[1].username;
    email.value = array[1].email;
    password.value = array[1].username;
}

getUsers();

button.addEventListener('click', function(event){
    event.preventDefault()
    console.log(`user's firstname is ${firstName.value}`);
    console.log(`user's lastname is ${lastName.value}`);
    console.log(`user's email is ${email.value}`);
    console.log(`user's password is ${password.value}`);
})

