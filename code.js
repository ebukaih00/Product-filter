let products = [
    { name: "T-shirt", category: "clothes", price: 20 },
    { name: "Laptop", category: "tech", price: 999 },
    { name: "Apple", category: "food", price: 1.50 },
    { name: "Shoes", category: "clothes", price: 85 },
    { name: "Phone", category: "tech", price: 699 },
    { name: "Banana", category: "food", price: 0.50 },
    { name: "Jacket", category: "clothes", price: 120 },
    { name: "Bread", category: "food", price: 2.50 }
]

let prodEl = document.querySelector(".prod-container")
let btnEl = document.getElementById("clothes-btn")
let allEl = document.getElementById("all-btn")
let foodEl = document.getElementById("food-btn")
    let filteredProducts = ""


function renderProducts(items) {
    prodEl.innerHTML = ""

    for (let i = 0; i < items.length; i++) {

        prodEl.innerHTML += `
    

<div class = "products-item">
<p> ${items[i].name}</p> 
<p id= "prod-${i}"> ${items[i].price}</p>

</div>
`
    }
}

renderProducts(products)

btnEl.addEventListener("click", function () {

    filteredProducts = products.filter(function (product) {
        return product.category === "clothes"
    })

    renderProducts(filteredProducts)
})

allEl.addEventListener("click", function () {
    renderProducts(products)
})

foodEl.addEventListener("click", function(){
    filteredProducts = products.filter(function (product) {
        return product.category === "food"
    })
    renderProducts(filteredProducts)
})