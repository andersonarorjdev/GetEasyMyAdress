const Show = data => {  
    let information = document.getElementById(`${data}`).value;
    navigator.clipboard.writeText(information);
    alert(`campo ${data} copiado`);
}