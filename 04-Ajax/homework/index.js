
document.querySelector('#boton').addEventListener('click', () =>{
    $.ajax({
        url: `http://localhost:5000/amigos`,
        type: 'get',
        success: (data) => {
            document.querySelector('#lista').innerHTML = '';
            i = 0;
            while(i < data.length){
                let li = document.createElement('li');
                document.querySelector('#lista').appendChild(li);
                li.innerHTML = data[i].name;
                i++;
            }
        }
    })
});

document.querySelector('#search').addEventListener('click', () => {
    let valor = document.querySelector('#input').value;
    $.ajax({
        url: `http://localhost:5000/amigos/${valor}`,
        type: 'get',
        success: (data) => {
            let span = document.querySelector('#amigo');
            span.innerHTML = data.name;
        }
    })
});

document.querySelector('#delete').addEventListener('click', () =>{
    let amigo = document.querySelector('#inputDelete').value;
    $.ajax({
        url: `http://localhost:5000/amigos/${amigo}`,
        type: 'delete',
        success: () => {
            recargarLista();
            console.log('borrado');
        }
    })
});

function recargarLista(){
    $.ajax({
        url: `http://localhost:5000/amigos`,
        type: 'get',
        success: (data) => {
            document.querySelector('#lista').innerHTML = '';
            i = 0;
            while(i < data.length){
                let li = document.createElement('li');
                document.querySelector('#lista').appendChild(li);
                li.innerHTML = data[i].name;
                i++;
            }
        }
    })
}