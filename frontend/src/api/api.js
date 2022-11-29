
const url = "https://us-central1-e-commerce-app-5f6bb.cloudfunctions.net/default"

export function api_getCategory(){
    return fetch(url + "/category")
}

export function api_getAllProduct(){
    return fetch(url + "/product")
}

export function api_getProductByCategory(category){
    return fetch(url + "/product?category=" + category)
}

export function api_getProductById(id){
    return fetch(url + "/product/" + id)
}

export function api_getCartItems(cartList){
    const options = {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(cartList)
    }

    return fetch(url + "/cart", options)
}

export function api_pay(cartList){
    const options = {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(cartList)
    }

    return fetch(url + "/payment", options)
}












