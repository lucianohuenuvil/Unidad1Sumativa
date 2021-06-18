let productos = [
    {
      "nombre": "Notebook Asus",
      "id": "notebookasus",
      "precio": 559900,
    },
    {
    "nombre": "Monitor Gear",
    "id": "monitorgear",
    "precio": 125000,
    },
    {
    "nombre": "Xbox Series S",
    "id": "xboxseriess",
    "precio": 359990,
    }
]

var productosselect = new Array();


function agregar(comp){


    //document.write(comp.id);
    var entrada = new Array();
    let producto = productos.find(producto => producto.id === comp.id)

    if(producto){

        document.write(producto.precio);
    }







}







