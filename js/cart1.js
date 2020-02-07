var item = [];
var cart = [];
var ids = [];
$(document).ready(function () {
    renderCart();
});

function collectData(id,name,price) {
    cart = JSON.parse(localStorage.getItem('cart'));
    ids = JSON.parse(localStorage.getItem('ids'));
    if (cart === null){
        cart = [];
        ids = [];
        item.push(id);
        ids.push(id);
        item.push(name);
        item.push(price);
        cart.push(item);
        item = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        localStorage.setItem('ids', JSON.stringify(ids));
    } else {
        if (ids.includes(id)){
            alert("Item is already in your cart!");
        } else {
            item.push(id);
            ids.push(id);
            item.push(name);
            item.push(price);
            cart.push(item);
            item = [];
            localStorage.setItem('cart', JSON.stringify(cart));
            localStorage.setItem('ids', JSON.stringify(ids));
        }
    }
}

function renderCart() {
    var cart = JSON.parse(localStorage.getItem('cart'));
    if (cart === null){
        console.log("cart is empty");
    } else {
        cart.forEach(function (item) {
            var row = "<tr>" + "<td>" + item[0] + "</td>" + "<td>" + item[1] + "</td>" + "<td>" + item[2] + "</td>" + "<td>" + "<button class='btn btn-primary'>Delete</button>" + "</td>" + "</tr>" ;
            $("#cart > tbody").append(row);
        });
    }
}

function clearCart() {
    localStorage.clear();
}