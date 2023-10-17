"use client"
import { useState } from 'react'
function page() {
       const [name, setName] = useState("");
       const [age, setAge] = useState("");
       const [email, setEmail] = useState("");
       const addUser = async () => {
              let respone = await fetch("http://localhost:3000/api/users",
                     {
                            method: "POST",
                            body: JSON.stringify({ name, age, email })
                     }
              );
              respone = await respone.json();
              if(respone.success){
                     alert("new user added");
              }
              else{
                alert("error");
              }
       }
       return (
              <div>
                     <h1>add users </h1>
                     <input type='text' value={name} placeholder='entre name' onChange={(e) => setName(e.target.value)} />
                     <input type='text' value={age} placeholder='entre age' onChange={(e) => setAge(e.target.value)} />
                     <input type='text' value={email} placeholder='entre email' onChange={(e) => setEmail(e.target.value)} />
                     <button onClick={addUser} >add user</button>
              </div>
       )
}

export default page
