
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
                                    <td><button onclick="deleteUser(${user.id})"class="btn btn-danger">Eliminar</button></td>
                                    <td><button onclick="editUser(${user.id})"class="btn btn-success">Editar</button></td>
                                    
                                </tr>`;
                container.innerHTML  += htmlUser;

            
            });
        }


        const EDIT='edit';
        const CREATE='create';
       


        function generadorId(){
        let biggerId = 0;
        users.forEach((user)=>{
            if(user.id >biggerId){
                biggerId=user.id;
            }

        })
        return biggerId+1;
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
            resetForm();
            hideForm()
            mostrarUsers(users);
        
        }

        function  deleteUser(id){
        
            const index =   users.findIndex((user)=> user.id=== id)
            users.splice(index,1)
            mostrarUsers(users);
        }
        
        function editUser(id){
            const index =   users.findIndex((user)=> user.id=== id)
            const user = users[index];
            document.getElementById('name').value= user.name 
            document.getElementById('correo').value= user.email 
            changeEditButton()
            userIndex = index;
            viewForm();
            mostrarUsers(users);
        }

    

        function modifyUser(id){
             
             const buttonValue=getFormUserButton().value;

             if(buttonValue===EDIT){

                const nameUser = document.getElementById('name').value;
                const correoUser= document.getElementById('correo').value;

    
                const modifyUser= {
                
                    name:nameUser,
                    email:correoUser
                }
    
                users.splice( userIndex, 1, modifyUser);
            
                resetForm();
                hideForm()
                mostrarUsers(users);
             }else{
                 addUser();
             }
           } 



        mostrarUsers(users);  {
           }
        
        function resetForm(){
            document.getElementById('formCreateUser').reset();
        }


        function viewForm(){
            const formContainer =  document.getElementById('ver-form')
                formContainer.classList.remove('d-none')
            
            }

        function hideForm(){
             document.getElementById('ver-form').classList.add('d-none');
         }

         function changeEditButton(){
            const button = getFormUserButton();
            button.innerHTML='Editar'
            button.classList.remove('btn-primary');
            button.classList.add('btn-danger');
            button.value= EDIT;
            }

          function changeCreateButton(){
              
            const button = getFormUserButton();
            button.innerHTML='Guardar'
            button.classList.remove('btn-danger');
            button.classList.add('btn-primary');
            button.value= CREATE;
                }

          
           function getFormUserButton(){
               return document.getElementById('btn-form')
           }
            
        mostrarUsers(users);
