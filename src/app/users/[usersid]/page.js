import React from 'react'

async function usersList(id) {
       let data = await fetch(`http://localhost:3000/api/users/${id}`);
       data = await data.json();
       return data.result;
}
async function page({ params }) {
       console.log(params);
       let user = await usersList(params.usersid);
       return (
              <div>
                     <h1>Details users : {user.name}</h1>

              </div>
       )
}

export default page
