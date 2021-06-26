class Node {
    constructor(id, nombre, cantidad, precio, next) {
        this.id = id;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precio = precio;
        this.next = next;
    };
};

class Inventario {
    constructor() {
        this.head = null;
        this.size = 0;
    };

    agregar(id, nombre, cantidad, precio) {
        const newNode = new Node(id, nombre, cantidad, precio, null);
        if(!this.head) {
            this.head = newNode
            console.log('"registrado con exito"')
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            };
            current.next = newNode;
            console.log('"registrado con exito"');
        };
        this.size ++
    };

    eliminar(index) {
        if (index < 0 || index > this.size) {
            return null;
        };

        let current = this.head;
        let previous = null;

        if (index === 0) {
            this.head = current.next;
        } else {
            for (let i = 0; i < index; i++) {
                previous = current;
                current = current.next;
            };
            previous.next = current.next;
        };
        this.size --;
        console.log(' "eliminado con exito" ');
        return current.id + ' ' + current.nombre + ' ' + current.cantidad + ' ' + current.precio;
    };

    buscar(index) {
        if (index < 0 || index > this.size || index == null) {
            return null;
        };

        let current = this.head;
        let previous = null;

        if (index === 0) {
            this.head = current;
        } else {
            for (let i = 0; i < index; i++) {
                previous = current;
                current = current.next;
            };
            previous = current;
        };
        return current.id + ' ' + current.nombre + ' ' + current.cantidad + ' ' + current.precio;
    };

    imprimir() {
        if (!this.size){
        return null;
        };
        let current = this.head;
        let result = '';
        while(current) {
            result += current.id + ' ' + current.nombre + ' ' + current.cantidad + ' ' + current.precio + ' --> ';
            current = current.next;
        };
        result += 'X';
        return result;
    }

};

function captura() {
    var ides = document.getElementById('id').value;
    var name = document.getElementById('nombre').value;
    var cant = document.getElementById('cantidad').value;
    var pre = document.getElementById('precio').value;

    inventario.agregar(ides, name, cant, pre);
    console.log(ides, name, cant, pre);
    document.getElementById('id').value="";
    document.getElementById('nombre').value="";
    document.getElementById('cantidad').value="";
    document.getElementById('precio').value="";
    document.getElementById('id').focus();
};

const inventario = new Inventario();
inventario.agregar("12", "carlos", "15", "16");
inventario.agregar("17", "cocas", "152", "14");
inventario.agregar("24","Dani","23","213");
inventario.agregar("34","Sandy","23","213");
console.log('"Eliminar datos del ID 0" inventario.eliminar(0)');
console.log(inventario.eliminar(0));
console.log('"Buscar el ID 2" inventario.buscar(2)');
console.log(inventario.buscar(2));
console.log('"Enlistar datos" inventario.imprimir()');
console.log(inventario.imprimir());
console.log(inventario);
