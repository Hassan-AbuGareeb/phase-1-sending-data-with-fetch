const submitData =(userName, userEmail) =>{
    let div =document.getElementById('el');
    let errorMessage= document.getElementById('error')
    const userData={
            name: userName,
            email: userEmail
            };
    const configObject={
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            Accept:"application/json"
        },
        body: JSON.stringify(userData)
    };
    return fetch('http://localhost:3000/users',configObject)
    .then(resp => resp.json())
    .then ( data => div.innerHTML=data.id)
    .catch((error) => errorMessage.innerHTML=error.message);
}

console.log(submitData("Steve", "steve@steve.com"));