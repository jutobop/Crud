
const users = [
    {   
        id: 1,
        name: 'Erik',
        age: 29,
        email: 'erik@live.com',
        social: [
            { name: 'facebook', url: 'facebook/erik' },
            { name: 'twitter', url: 'twitter/erik' }
        ],
        gender: 'Male'
    },
    {   
        id: 2,
        name: 'julian',
        age: 29,
        email: 'julian@live.com',
        social: [
            { name: 'facebook', url: 'facebook/julian' },
            { name: 'twitter', url: 'twitter/julian' }
        ],
        gender: 'Male'
    },
    {   
        id: 3,
        name: 'Veronica',
        age: 29,
        email: 'veronica@live.com',
        social: [
            { name: 'facebook', url: 'facebook/Veronica' },
            { name: 'twitter', url: 'twitter/Veronica' }
        ],
        gender: 'Female'
    },
  
]



function mostrarUsers(dataUsers) {
 const container = document.getElementById('users-container');
 container.innerHTML=""; 

     dataUsers.forEach((user)=>{
          const htmlUser =`<tr>
                           
                           <td>${user.name}</td>
                           <td>${user.email}</td>
                            <td><button onclick="deleteUser(${user.id})"class="btn btn-success">Eliminar</button></td>
                           </tr>`;
          container.innerHTML  += htmlUser;


     });
}



function generadorId(){
  let biggerId = 0;
   users.forEach((user)=>{
       if(user.id >biggerId){
           biggerId=user.id;
       }

   })
   return biggerId+1;
}


 function viewForm(){
  const formContainer =  document.getElementById('ver-form')
     formContainer.classList.remove('d-none')
 }


 function addUser(){
    const nameUser = document.getElementById('name').value;
    const correoUser= document.getElementById('correo').value;


    const newUser= {
        id: generadorId(),
        name:nameUser,
        email:correoUser
    }

     users.push(newUser);
     mostrarUsers(users);
   
 
    
 }



 mostrarUsers(users);

 function  deleteUser(id){
   
    const index =   users.findIndex((user)=> user.id=== id)
      users.splice(index,1)
       mostrarUsers(users);
   }
  
  
    