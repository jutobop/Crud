
const users = [
    {
        name: 'Erik',
        age: 29,
        email: 'erik@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/erik' },
            { name: 'twitter', url: 'twitter/erik' }
        ],
        gender: 'Male'
    },
    {
        name: 'julian',
        age: 29,
        email: 'julian@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/erik' },
            { name: 'twitter', url: 'twitter/erik' }
        ],
        gender: 'Male'
    },
    {
        name: 'Veronica',
        age: 29,
        email: 'veronica@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/erik' },
            { name: 'twitter', url: 'twitter/erik' }
        ],
        gender: 'Male'
    },
  
]



function mostrarUsers(dataUsers) {
 const container = document.getElementById('users-container');
 container.innerHTML=""; 

     dataUsers.forEach((user)=>{
          const htmlUser =`<tr>
                           <td>${user.name}</td>
                           <td>${user.email}</td>
                            <td><button onclick="deleteUser()"class="btn btn-success">Eliminar</button></td>
                           </tr>`;
          container.innerHTML  += htmlUser;


     });
}


 function viewForm(){
  const formContainer =  document.getElementById('ver-form')
     formContainer.classList.remove('d-none')
 }


 function addUser(){
    const nameUser = document.getElementById('name').value;
    const correoUser= document.getElementById('correo').value;


    const newUser= {
        name:nameUser,
        email:correoUser
    }

     users.push(newUser);
     mostrarUsers(users);
   
 
    
 }



 mostrarUsers(users);

 function  deleteUser(email){
   
    const index =   users.findIndex((user)=> user.email=== email)
      users.splice(index,1)
       mostrarUsers(users);
   }
  
  
    