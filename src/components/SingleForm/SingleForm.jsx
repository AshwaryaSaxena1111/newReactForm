import {useState} from "react";

function MyForm() {
    const [name , setName] = useState("");
    const [age , setAge] = useState("");
    return (
        <>
        <form>
            <label>Enter your name:
                <input type="text" 
                 value={name}
                 onChange={(e) => setName(e.target.value)}
                />
            </label>
            <label>Enter your age:
                <input type="text" 
                 value={age}
                 onChange={(e) => setAge(e.target.value)}
                />
            </label>
        </form>
        </>
    )
}

export default MyForm;