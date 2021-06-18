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
    },
    {
        "nombre": "Notebook HP",
        "id": "notebookhp",
        "precio": 299990,
    },
    {
        "nombre": "Playstation 4",
        "id": "consolaps4",
        "precio": 209990,
    },
    {
        "nombre": "Tv lg",
        "id": "tvledlg",
        "precio": 209990,
    },
    {
        "nombre": "chromecast",
        "id": "chromecast",
        "precio": 29990,
    },
    {
        "nombre": "Notebook asus Pro",
        "id": "notebookasuspro",
        "precio": 779990,
    },
    {
        "nombre": "Xiaomi mi watch",
        "id": "xiaomimiwatch",
        "precio": 99990,
    },
    {
        "nombre": "Alexa",
        "id": "alexa",
        "precio": 45990,
    },
    {
        "nombre": "Tp Link",
        "id": "tplink",
        "precio": 9990,
    },
    {
        "nombre": "Tv Phillip",
        "id": "tvphillip",
        "precio": 239990,
    },
 
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







