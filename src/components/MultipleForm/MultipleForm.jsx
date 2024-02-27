import { useState } from "react";

function MultipleForm() {
    const[inputs, setInputs] = useState({})
}

const handleChange = (e) =>{
    const name = e.target.name;
    const age = e.target.age;
    const profession = e.target.profession;
    const address = e.target.address;
    const contact = e.target.contact;
    setInputs(values => ({...values, [name]: age, profession,address,contact}))

    return(
        <>
        <form>
            <label>Enter your name:
                <input type="text" 
                 value={inputs.name}
                 onChange={handleChange}
                />
            </label>
            <label>Enter your age:
                <input type="text" 
                 value={inputs.age}
                 onChange={handleChange}
                />
            </label>
            <form>
            <label>Enter your profession:
                <input type="text" 
                 value={inputs.profession}
                 onChange={handleChange}
                />
            </label>
            <label>Enter your address:
                <input type="text" 
                 value={inputs.address}
                 onChange={handleChange}
                />
            </label>
            <label>Enter your contact:
                <input type="text" 
                 value={inputs.contact}
                 onChange={handleChange}
                />
            </label>
            </form>
        </>
    )
}
    

export default MultipleForm;
