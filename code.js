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
let techEl = document.getElementById("tech-btn")
    


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

function filterProducts(category) {

    let filteredProducts = products.filter(product => {
        return product.category === category
    })

    renderProducts(filteredProducts)
}


btnEl.addEventListener("click", function () {
    filterProducts("clothes")
})

foodEl.addEventListener("click", function () {
    filterProducts("food")
})

techEl.addEventListener("click", function () {
    filterProducts("tech")
})
