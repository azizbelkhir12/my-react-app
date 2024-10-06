import { useState } from "react";


function Mycomponent(){

    const [cars , setCar] = useState([])
    const [carYears, setCarYear] = useState(new Date().getFullYear())
    const [carModel, setCarModel] = useState("")
    const [CarMake, setCarMake] = useState("")

    function handleAddCar(){
        const newCar = {year : carYears, model : carModel , make : CarMake}
        setCar(c =>[...c, newCar])

        setCarMake("")
        setCarModel("")
        setCarYear(new Date().getFullYear())
    }

    function handleRemoveCar(index){
        setCar(c => c.filter((_,i) => i!==index))
    }

    function handleCarYearChange(event){
        setCarYear(event.target.value)
    }

    function handleCarMakeChange(event){
        setCarMake(event.target.value)
    }

    function handleCarModelChange(event){
        setCarModel(event.target.value)
    }

    

    return(<div>
        <h2>List of Car Objects </h2>
        <ul>
            {cars.map((car, index) =>
            <li key={index} onClick={() => handleRemoveCar(index)}>{car.year} {car.make} {car.model}</li>)}
        </ul>
        <input type="number" value={carYears}  onChange={handleCarYearChange}/><br />
        <input type="text" value={CarMake} onChange={handleCarMakeChange} placeholder="Enter car make"/><br />
        <input type="text" value={carModel} onChange={handleCarModelChange} placeholder="Enter car model"/><br />
        <button onClick={handleAddCar}>Add car</button>
        
    </div>)
 }

export default Mycomponent