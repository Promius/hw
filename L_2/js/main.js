class ProductsList {
    constructor(container = '.products'){
        this.container = container;
        this.goods = [];
        this.allProducts = [];
        this._fetchProducts();
    }
    
    _fetchProducts() {
        this.goods = [
            {id: 1, title: 'Shirt', price: 200},
            {id: 2, title: 'Socks', price: 20},
            {id: 3, title: 'Jacket', price: 250},
            {id: 4, title: 'Shoes', price: 300},
        ];
    }
    render() {
        const block = document.querySelector(this.container);
        for(let product of this.goods){
            const productObj = new ProductItem(product);
            this.allProducts.push(productObj);
            block.insertAdjacentHTML('beforeend',productObj.render());
        }
    }
    getSum() {
        let res = this.allProducts.reduce((sum, item) => sum += item.price, 0);
        alert(res);
    }    
}

class ProductItem {
	constructor(product, img = 'img/200x150.png'){
		this.title = product.title;
		this.price = product.price;
		this.id = product.id;
		this.img = img;
		
	}
	
	render() {
		 return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`;
	}
}

let list = new ProductsList();
list.render();
list.getSum();

class Basket {
    addGoods() {

    }
    removeGoods() {

    }
    changeGoods() {

    }
}

class ElemBasket {

}