//crear un programa que pida registrar el nombre de un producto el usuario podra luego eliminar el producto o actualizar el nombre del producto

//  // Arreglo para almacenar los productos
//  let products = [];

//  // Función para agregar un producto
//  function addProduct() {
//      const productName = document.getElementById('productName').value.trim();

//      // Validación simple: no permitir productos vacíos
//      if (productName === '') {
//          alert('Por favor, ingresa un nombre para el producto.');
//          return;
//      }

//      // Agregar el producto al arreglo
//      products.push(productName);

//      // Limpiar el campo de entrada
//      document.getElementById('productName').value = '';

//      // Actualizar la lista de productos en pantalla
//      renderProductList();
//  }

//  // Función para eliminar un producto
//  function deleteProduct(index) {
//      // Eliminar el producto usando su índice
//      products.splice(index, 1);

//      // Actualizar la lista de productos en pantalla
//      renderProductList();
//  }

//  // Función para actualizar un producto
//  function updateProduct(index) {
//      const newProductName = prompt('Ingresa el nuevo nombre para el producto:', products[index]);

//      // Si el usuario proporciona un nuevo nombre, actualizar el producto
//      if (newProductName) {
//          products[index] = newProductName;
//          renderProductList();
//      }
//  }


function product(){
    let producto=prompt("escribe un producto")
    this.actualizar=function(){
        producto=prompt("nombre del producto a actualizar")
    }
    this.eliminar=function(){
        producto=''
    }
}

let product1=new product()

product1.eliminar()
console.log(product1.)

// product1.actualizar()
// console.log(producto)