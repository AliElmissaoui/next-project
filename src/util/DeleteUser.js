"use client"
export default function DeleteUser(props){
       const userId = props.id;
        const deleteUser = async () => {
              let respone = await fetch(`http://localhost:3000/api/users/${userId}`,
              {
                     method: "DELETE"

              }
       );
       respone = await respone.json();
       if(respone.success){
              alert("USER DELETED ");
       }
       else{
         alert("error");
       }
        }
       return <button onClick={deleteUser}>delete</button>

}