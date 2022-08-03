let button = document.getElementById("button");


let meme = document.getElementById("meme");

async function next(){

    
    const res =  await fetch(' https://meme-api.herokuapp.com/gimme')
    
    const data = await res.json();
    const url = data.preview[2];
    
    meme.src = `${url}`;
    button.innerText = "Next meme";

   
    
}