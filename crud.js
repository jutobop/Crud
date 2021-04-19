
        const coches = [
            {   
                id: 1,
                marca: 'Mazda',
                modelo: 323,
                color: 'erik@live.com',
                año: 2022,
                precio: 40000000,
                
            },
            
        ]

        
        function mostrarUsers(dataCoches) {
        const container = document.getElementById('users-container');
        container.innerHTML=""; 

            dataCoches.forEach((coche)=>{
                const htmlCoche =`<tr>
                                
                                <td>${coche.marca}</td>
                                <td>${coche.modelo}</td>
                                    <td><button onclick="deleteUser(${coche.id})"class="btn btn-danger">Eliminar</button></td>
                                    <td><button onclick="editUser(${coche.id})"class="btn btn-success">Editar</button></td>
                                    
                                </tr>`;
                container.innerHTML  += htmlCoche;

            
            });
        }


        const EDIT='edit';
        const CREATE='create';
       


        function generadorId(){
        let biggerId = 0;
        coches.forEach((coche)=>{
            if(coche.id >biggerId){
                biggerId=coche.id;
            }

        })
        return biggerId+1;
        }


        function addUser(){
            const nameUser = document.getElementById('name').value;
            const correoUser= document.getElementById('correo').value;


            const newUser= {
                id: generadorId(),
                marca:nameUser,
                modelo:correoUser
            }

            coches.push(newUser);
            resetForm();
            hideForm()
            mostrarUsers(coches);
        
        }

        function  deleteUser(id){
        
            const index =   coches.findIndex((coche)=> coche.id=== id)
            coches.splice(index,1)
            mostrarUsers(coches);
        }
        
        function editUser(id){
            const index =   coches.findIndex((coche)=> coche.id=== id)
            const coche = coches[index];
            document.getElementById('name').value= coche.marca 
            document.getElementById('correo').value= coche.modelo
            changeEditButton()
            cocheIndex = index;
            viewForm();
            mostrarUsers(coches);
        }

    

        function modifyUser(id){
             
             const buttonValue=getFormUserButton().value;

             if(buttonValue===EDIT){

                const nameUser = document.getElementById('name').value;
                const correoUser= document.getElementById('correo').value;

    
                const modifyUser= {
                
                    marca:nameUser,
                    modelo:correoUser
                }
    
                coches.splice( cocheIndex, 1, modifyUser);
            
                resetForm();
                hideForm()
                mostrarUsers(coches);
             }else{
                 addUser();
             }
           } 



        mostrarUsers(coches);  {
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
            
        mostrarUsers(coches);
