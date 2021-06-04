const body = document.querySelector('body');
function submitData(name, email){
    let userData = {
        name: `${name}`,
        email: `${email}`
    };
    const configObj = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(userData)
    };
    return fetch("http://localhost:3000/users", configObj)
        .then(resp => {return resp.json()})
        .then(function(obj){
            const para = document.createElement('p');
            para.innerHTML = obj.id;
            body.append(para);
        })
        .catch(function(error){
            alert("Silly, we've got an ERROR!");
            const para2 = document.createElement('p');
            para2.innerHTML = error.message;
            body.append(para2);
        });
}