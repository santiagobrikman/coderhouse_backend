class productManager {
    #precioBaseDeGanancia = 1.15;

    constructor() {
        this.products = []
    }

    getProducts() {
        return this.products;
      }

    getProductById(id2) {
        return this.products.find(product => product.id === id2);
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        let product = {
          title,
          description,
          price: this.#precioBaseDeGanancia * 2,
          thumbnail,
          code, 
          stock,
        };

        if (this.products.length === 0) {
            product["id"] = 1;
            } else {
            product["id"] = this.products[this.products.length - 1]["id"] + 1;
        }
      
        this.products.push(product);
    
    }
}


const product_class = new productManager(); // Creación de instancia

// Agregado de productos (Cámaras fotográficas)
product_class.addProduct("Sony A1", "Best camera in town", 8000, "/filepathsonya1", 1, 20);
product_class.addProduct("Sony A9", "Sports camera", 5000, "/filepathsonya9", 1, 10);
product_class.addProduct("Canon R5", "Mirrorless versatile camera", 2500, "/filepathcanonr5", 1, 5);

// Testeo de métodos
console.log(product_class.getProducts())
console.log(product_class.getProductById(4))

    