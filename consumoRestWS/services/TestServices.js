
export const getAllPostsService = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => { return response.json() })
        .then((json) => { console.log(json) });
}

export const createPostService = (post,fnExito) => {
    const config = {
        method: 'POST',
        body: JSON.stringify({
            title: post.title,
            body: post.body,
            userld: 1
        }),
        headers: {
            'Content-type': 'application/json',
        }
    }

    fetch('https://jsonplaceholder.typicode.com/posts', config)
        .then((response) => { return response.json() })
        .then((json) => { console.log(json);fnExito(); });
}

export const updatePostService = (data) => {
    const config = {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json',
        }
    }

    fetch('https://jsonplaceholder.typicode.com/posts/1', config)
        .then((response) => { return response.json() })
        .then((json) => { console.log(json) });
}

export const getByUserIdService=()=> {
    fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
        .then((response) => { return response.json() })
        .then((json) => { console.log(json) });
}

export const pokeApi=()=>{
    fetch('https://pokeapi.co/api/v2/pokemon/bulbasaur')
        .then((response) => { return response.json() })
        .then((json) => { console.log(json) });
}

export const createProductService = () => {
    const config = {
        method: 'POST',
        body: JSON.stringify(
            {
                "id": 21,
                "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
                "price": 109.95,
                "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
                "category": "men's clothing",
                "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                "rating": {
                    "rate": 3.9,
                    "count": 120
                }
            }
        ),
        headers: {
            'Content-type': 'application/json',
        }
    }

    fetch('https://fakestoreapi.com/products', config)
        .then((response) => { return response.json() })
        .then((json) => { console.log(json) });
}

export const updateCuckService = (data) => {
    const config = {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json',
        }
    }

    fetch('https://fakestoreapi.com/products/1', config)
        .then((response) => { return response.json() })
        .then((json) => { console.log(json) });
}


export const getDocumentTypes =()=>{
    fetch('http://192.168.1.55:8080/inventarios-1.0.0/rest/tipoDocumento/recuperar')
    .then((response) => { return response.json() })
    .then((json) => { console.log(json) });
}

export const createDocumentService = (post,fnExito) => {
    const config = {
        method: 'POST',
        body: JSON.stringify({
            codigo: post.codigo,
            description: post.description
        }),
        headers: {
            'Content-type': 'application/json',
        }
    }

    fetch('http://192.168.1.55:8080/inventarios-1.0.0/rest/tipoDocumento/crear', config)
        .then((response) => { return response.json() })
        .then((json) => { console.log(json);fnExito(); });
}