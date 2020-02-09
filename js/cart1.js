var item = [];
var cart = [];
var ids = [];
$(document).ready(function () {
    renderCart();
});

//collecting the data from the button on the shop item
function collectData(id,name,price) {
    //collecting the data from the local storage
    cart = JSON.parse(localStorage.getItem('cart'));
    ids = JSON.parse(localStorage.getItem('ids'));
    //if the local storage is empty it will run this
    if (cart === null){
        cart = [];
        ids = [];
        item.push(id);
        ids.push(id);
        item.push(name);
        item.push(price);
        cart.push(item);
        item = [];
        //adding the new item to the localstorage
        localStorage.setItem('cart', JSON.stringify(cart));
        localStorage.setItem('ids', JSON.stringify(ids));
    } else {
        //if the local storage is not empty it checks that the item isn't already in the cart
        if (ids.includes(id)){
            alert("Item is already in your cart!");
        } else {
            //if the item isn't in the cart already it will run this
            item.push(id);
            ids.push(id);
            item.push(name);
            item.push(price);
            cart.push(item);
            item = [];
            //adding the item to the local storage
            localStorage.setItem('cart', JSON.stringify(cart));
            localStorage.setItem('ids', JSON.stringify(ids));
        }
    }
}

//rendering the cart on the page
function renderCart() {
    //taking the cart string from local storage and returning it to an array
    var cart = JSON.parse(localStorage.getItem('cart'));
    //for when the cart is empty as the code runs on ready
    if (cart === null){
        console.log("cart is empty");
    } else {
        //looping through the array and making the html syntax for each item in the cart
        cart.forEach(function (item) {
            var row = "<tr>" + "<td>" + item[0] + "</td>" + "<td>" + item[1] + "</td>" + "<td>" + item[2] + "</td>" + "<td>" + "<button class='btn btn-primary' onclick='deleteItem("+ item[0] +")'>Delete</button>" + "</td>" + "</tr>" ;
            //appending the syntax to the html table
            $("#cart > tbody").append(row);
        });
    }
}

//clears the local storage
function clearCart() {
    localStorage.clear();
}

//deletes an item from the list
function deleteItem(id){
    //collecting the cart
    var oldCart = JSON.parse(localStorage.getItem('cart'));
    var oldIds = JSON.parse(localStorage.getItem('ids'));
    console.log(oldIds);
    oldCart.forEach(function (item) {
        //finding the element to be deleted
        if (item[0] === id){
            //starting at the index of the item to be deleted, delete 1 item
            oldCart.splice(oldCart.indexOf(item),1);
            //re-setting the cart in local storage
            localStorage.setItem('cart',JSON.stringify(oldCart));
        }
    });
    //allowing the user to put the item back into the cart using the same method as above
    oldIds.forEach(function (item) {
        if (item === id){
            oldIds.splice(oldIds.indexOf(item),1);
            localStorage.setItem('ids', JSON.stringify(oldIds));
        }
    });
    //re-loading the page to see the effect take place
    location.reload();
}