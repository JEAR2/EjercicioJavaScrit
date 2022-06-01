/**
*Function inicio()
*Función que permite la ejecucion de toca la pagina
**/
const inicio = () => {
	
const copia = data.slice();
const container = document.querySelector("#container");


const table = document.createElement("table");
const tr = document.createElement("tr");
const thNombre = document.createElement("th");
const thApellido = document.createElement("th");
const thEdad = document.createElement("th");
const thEmail = document.createElement("th");
const thTelefono = document.createElement("th");

thNombre.textContent = "Nombre";
thApellido.textContent = "Apellido";
thEdad.textContent = "Edad";
thEmail.textContent = "Email";
thTelefono.textContent = "Telefono";


table.append(tr);

tr.appendChild(thNombre);
tr.appendChild(thApellido);
tr.appendChild(thEdad);
tr.appendChild(thEmail);
tr.appendChild(thTelefono);

container.appendChild(table)
llenar(data);

/**
*Function llenar(data);
*Función que me permite agregar los datos que recibe como parametro a la tabla
*
**/
function llenar(data) {
	data.forEach(function (Element,index,array) {
    const tr = document.createElement("tr");
    const tdNombre = document.createElement("td");
    const tdApellido = document.createElement("td");
    const tdEdad = document.createElement("td");
    const tdEmail = document.createElement("td");
    const tdTelefono = document.createElement("td");

    tdNombre.textContent = Element.nombre;
    tdApellido.textContent = Element.apellidos;
    tdEdad.textContent = Element.edad;
    tdEmail.textContent = Element.email;
    tdTelefono.textContent = Element.telefono;

    tr.appendChild(tdNombre);
    tr.appendChild(tdApellido);
    tr.appendChild(tdEdad);
    tr.appendChild(tdEmail);
    tr.appendChild(tdTelefono);

    table.appendChild(tr);


});
}

container.append(table);

let flag="";


async function ordenarDesc(){
	flag= "Asc";
	table.innerHTML="";
	let datos = await data.sort(ordenerAsc);
	table.append(tr);
	llenar(datos);
}

async function ordenarAsc(){
	flag= "Desc";
	table.innerHTML="";
	let datos = await data.sort(ordenerDesc);
	table.append(tr);
	llenar(datos);
}

function ordenar(){
	flag= "";
	table.innerHTML="";
	table.append(tr);
	llenar(copia);
}

function ordenerAsc(x, y){
    if (x.nombre < y.nombre) {return -1;}
    if (x.nombre > y.nombre) {return 1;}
    return 0;
}



function ordenerDesc(x, y){
    if (x.nombre > y.nombre) {return -1;}
    if (x.nombre < y.nombre) {return 1;}
    return 0;
}



thNombre.addEventListener("click",async ()=>{
	console.log("flag ",flag);
	if(flag=="Asc"){
		 ordenar();
	}else if(flag=="Desc"){
		 ordenarDesc();
	}else{
		 ordenarAsc();
	}
	
});

thApellido.addEventListener("click",async ()=>{
	console.log("flag ",flag);
	if(flag=="Asc"){
		 ordenar();
	}else if(flag=="Desc"){
		 ordenarDesc();
	}else{
		 ordenarAsc();
	}
	
});

thEdad.addEventListener("click",async ()=>{
	console.log("flag ",flag);
	if(flag=="Asc"){
		 ordenar();
	}else if(flag=="Desc"){
		 ordenarDesc();
	}else{
		 ordenarAsc();
	}
	
});

thEmail.addEventListener("click",async ()=>{
	console.log("flag ",flag);
	if(flag=="Asc"){
		 ordenar();
	}else if(flag=="Desc"){
		 ordenarDesc();
	}else{
		 ordenarAsc();
	}
	
});

thTelefono.addEventListener("click",async ()=>{
	console.log("flag ",flag);
	if(flag=="Asc"){
		 ordenar();
	}else if(flag=="Desc"){
		 ordenarDesc();
	}else{
		 ordenarAsc();
	}
	
});

}


