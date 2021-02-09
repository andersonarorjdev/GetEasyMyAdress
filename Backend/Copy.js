const Show = data => {  
    let information = document.getElementById(`${data}`).value;
    navigator.clipboard.writeText(information);
    alert(`seu ${data} foi copiado para a area de transferência`);
}