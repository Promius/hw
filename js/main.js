const products = [
    {id: 1, title: 'Shirt', price: 200},
    {id: 2, title: 'Socks', price: 20},
    {id: 3, title: 'Jacket', price: 250},
    {id: 4, title: 'Shoes', price: 300},
];

const renderProduct = (product, img='img/200x150.png') => {
    return `<div class="product-item">
                <img src="${img}">
                <h3>${product.title}</h3>
                <p>${product.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`;
};
const renderPage = list => {
    document.querySelector('.products').innerHTML = list.map(item => renderProduct(item)).join('');
};

renderPage(products);