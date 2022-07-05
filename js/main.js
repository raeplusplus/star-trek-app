document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const alienName = document.querySelector('input').value;
    try{
        const res = await  fetch(`https://star-trek-aliens-feild-guide.herokuapp.com/api/${alienName}`);
        const data = await res.json()
        console.log(data)
    }
    catch(error){
        console.log(error)
    }
};