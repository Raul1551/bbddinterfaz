// Definición de variables
const url = 'https://bbddserver-production.up.railway.app//api/usuarios/';
const contenedor = document.querySelector('tbody');
let resultados = '';

const modalUsuario = new bootstrap.Modal(document.getElementById('modalUsuario'));
const formArticulo = document.querySelector('form');
const nombre = document.getElementById('nombre');
const apellidos = document.getElementById('apellidos');
const email = document.getElementById('email');
const telefono = document.getElementById('telefono');
const perfil = document.getElementById('perfil');
const respuestas = document.getElementById('respuestas');
let opcion = '';


btnCrear.addEventListener('click', () => {
    nombre.value = '';
    apellidos.value = '';
    email.value = '';
    telefono.value = '';
    modalUsuario.show();
    opcion = 'crear';
});

// funcion para mostrar los resultados
const mostrar = (usuarios) => {
    usuarios.forEach(usuario => {
        resultados += `
        <tr>
            <td>${usuario.id}</td>
            <td>${usuario.nombre}</td>
            <td>${usuario.apellido}</td>
            <td>${usuario.email}</td>
            <td>${usuario.telefono}</td>
            <td>${usuario.perfil}</td>
            <td>${usuario.respuestas}</td>
            
        </tr>
`
{/* <td class="text-center"><a class="btnEditar btn btn-primary">Ver más detalles</a></td> */}
//<td class="text-center"><a class="btnEditar btn btn-primary">Ver mas detalles</a><a class="btnBorrar btn btn-danger">Borrar</a></td>
    });
    contenedor.innerHTML = resultados;

};

// Procedimiento Mostrar
fetch(url)
    .then(response => response.json())
    .then(data => mostrar(data))
    .catch(error => console.log(error));


const on = (element, event, selector, handler) => {
    // console.log(element);
    // console.log(event);
    // console.log(selector);
    // console.log(handler);
    element.addEventListener(event, e => {
        if (e.target.closest(selector)) {
            handler(e);
        };
    });
};

// Procedimiento borrar
/* on(document, 'click', '.btnBorrar', e => {
    const fila = e.target.parentNode.parentNode;
    const id = fila.firstElementChild.innerHTML;
    alertify.confirm("This is a confirm dialog.",
        function () {
            fetch(url+id, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(() => location.reload());
            // alertify.success('Ok');
        },
        function () {
            alertify.error('Cancel');
        });
}); */

// Procedimiento editar
/* let idForm = 0;

on(document, 'click', '.btnEditar', e => {
    const fila = e.target.parentNode.parentNode;
    idForm = fila.children[0].innerHTML;
    const descripcionForm = fila.children[1].innerHTML;
    const precioForm = fila.children[2].innerHTML;
    const stockForm = fila.children[3].innerHTML;

    // console.log(`ID: ${idForm} - DESCRIPCIÓN: ${descripcionForm} - PRECIO: ${precioForm} - STOCK: ${stockForm}`);
    descripcion.value = descripcionForm;
    precio.value = precioForm;
    stock.value = stockForm;
    opcion = 'editar';
    modalArticulo.show();
}); */

// Procedimiento para crear o editar
/* formArticulo.addEventListener('submit', (e) => {
    e.preventDefault();
    if(opcion == 'crear'){
        // console.log('OPCION CREAR');
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-type':'application/json'
            },
            body: JSON.stringify({
                descripcion: descripcion.value,
                precio: precio.value,
                stock: stock.value
            })
        })
        .then(response => response.json())
        .then(data => {
            const nuevoArticulo = [];
            nuevoArticulo.push(data)
            mostrar(nuevoArticulo);
        })
    }
    if(opcion == 'editar'){
        // console.log('OPCION EDITAR');
        fetch(url+idForm, {
            method: 'PUT',
            headers: {
                'Content-type':'application/json'
            },
            body: JSON.stringify({
                descripcion: descripcion.value,
                precio: precio.value,
                stock: stock.value
            })
        })
        .then(response => response.json())
        .then(response => location.reload())
    }
    modalArticulo.hide();
}); */