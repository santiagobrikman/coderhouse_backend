class productManager {
    #tax = 0.25 // Coeficiente de IVA del producto

    constructor() {
        this.products = []
    }

    getProducts() {
        return this.products;
      }

    getProductById(id_search) {

        if (this.products.find(e => e.id === id_search)) {
            return this.products.find(product => product.id === id_search);
          }
        return "Not found"
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        let product = {
          title,
          description,
          price: (1 + this.#tax) * price,
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
console.log(product_class.getProductById(2)) // Buscar id = 2
console.log(product_class.getProductById(4)) // Buscar id = 4 (Not found)

    