
        const cars = [
            {   
                id: 1, 
                brand: 'Mazda',
                model: 323,
                color: 'green',
                year: 2022,
                price: 40000000,
                
            },
            
        ]

        
        function showCars(dataCars) {
        const container = document.getElementById('cars-container');
        container.innerHTML=""; 

            dataCars.forEach((car)=>{
                const htmlCar =`<tr>
                                
                                <td>${car.brand}</td>
                                <td>${car.model}</td>
                                <td>${car.color}</td>
                                <td>${car.year}</td>
                                <td>${car.price}</td>
                                
                                    <td><button onclick="deleteCar(${car.id})"class="btn btn-danger">Delete</button></td>
                                    <td><button onclick="editCar(${car.id})"class="btn btn-success">Edit</button></td>
                                    
                                </tr>`;
                container.innerHTML  += htmlCar;

            
            });
        }


        const EDIT='edit';
        const CREATE='create';
       


        function generadorId(){
        let biggerId = 0;
        cars.forEach((car)=>{
            if(car.id >biggerId){
                biggerId=car.id;
            }

        })
        return biggerId+1;
        }


        function addCar(){
            const brandCar = document.getElementById('brand').value;
            const modelCar= document.getElementById('model').value;
            const colorCar = document.getElementById('color').value;
            const yearCar= document.getElementById('year').value;
            const priceCar = document.getElementById('price').value;


            const newCar= {
                id: generadorId(),
                brand:brandCar,
                model:modelCar,
                color:colorCar,
                year:yearCar,
                price:priceCar
            }

            cars.push(newCar);
            resetForm();
            hideForm()
            showCars(cars);
        
        }

        function  deleteCar(id){
        
            const index =   cars.findIndex((car)=> car.id=== id)
            cars.splice(index,1)
            showCars(cars);
        }
        
        function editCar(id){
            const index =   cars.findIndex((car)=> car.id=== id)
            const car = cars[index];
            document.getElementById('brand').value= car.brand
            document.getElementById('model').value= car.model
            document.getElementById('color').value= car.color
            document.getElementById('year').value= car.year
            document.getElementById('price').value= car.price
            
            changeEditButton()
            carIndex = index;
            viewForm();
            showCars(cars);
        }

    

        function modifyCar(id){
             
             const buttonValue=getFormUserButton().value;

             if(buttonValue===EDIT){

                const brandCar = document.getElementById('brand').value;
                const modelCar= document.getElementById('model').value;
                const colorCar = document.getElementById('color').value;
                const yearCar= document.getElementById('year').value;
                const priceCar = document.getElementById('price').value;
                

    
                const modifyCar= {
                
                    brand:brandCar,
                    model:modelCar,
                    color:colorCar,
                    year:yearCar,
                    price:priceCar
                    

                }
    
               cars.splice( carIndex, 1, modifyCar);
            
                resetForm();
                hideForm()
                showCars(cars);
             }else{
                 addCar();
             }
           } 



        showCars(cars);  
          
        
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
            
           showCars(cars);
