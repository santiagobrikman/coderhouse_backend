const { arrayBuffer } = require("stream/consumers");

const fs = require(('fs'))

class productManager {
    #tax = 0.25 // Coeficiente de IVA del producto

    constructor(filename) {
        if(fs.existsSync('products.json')){
            this.products = JSON.parse(fs.readFileSync(filename))    
        } else {
            this.products = [];
        }
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

    async addProduct(title, description, price, thumbnail, code, stock) {
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
      
        this.products.push(product)
        
        await fs.promises.writeFile('products.json', JSON.stringify(this.products, null, '\t'))

    }

    async eraseProductById(id) {
        console.log('ERASED: ')
        let product = this.products.findIndex(product => product.id === id)
        product = this.products.splice(product, 1)
        await fs.promises.writeFile('products.json', JSON.stringify(this.products, null, '\t'))
        return product
    }

    async updateProductById(id, newtitle, newdescription, newprice, newthumbnail, newcode, newstock) {
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].id === id) {
                console.log(this.products[i])
                this.products[i].title = newtitle;
                this.products[i].description = newdescription;
                this.products[i].price = newprice;
                this.products[i].thumbnail = newthumbnail;
                this.products[i].code = newcode;
                this.products[i].stock = newstock;
                console.log(this.products[i])
                await fs.promises.writeFile('products.json', JSON.stringify(this.products, null, '\t'))
                return;
            }
        }
        
    }

}

const product_class = new productManager('products.json'); // Creación de instancia

//Agregado de productos
product_class.addProduct("Sony A1", "Best camera in town", 8000, "/filepathsonya1", 'PRD001', 200);
product_class.addProduct("Sony A9", "Sports camera", 5000, "/filepathsonya9", 'PRD002', 300);
product_class.addProduct("Canon R5", "Mirrorless versatile camera", 2500, "/filepathcanonr5", 'PRD003', 400);
product_class.addProduct("Fuji X-T4", "Weather sealed camera", 2300, "/filepathfujixt4", 'PRD004', 500);

// //Consultar todos los productos
console.log(product_class.getProducts())

// //Consultar productos específicos
console.log(product_class.getProductById(1))
console.log(product_class.getProductById(4))

//Eliminar un producto por su id
product_class.eraseProductById(2)
    .then(resultado => console.log(resultado))

// //Actualizar un producto por su id, introduciendo nuevos valores en sus atributos
product_class.updateProductById(1, "Sony A4", "Other camera", 8400, "/filepathsonya4", 'PRD001', 99)
