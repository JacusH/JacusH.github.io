const doc = this.document ;

var loggedIn = false;

function getNavbar() {
    const home = `<a class="navbar-brand text-white" id="nav-button" href="index.html">Lolla B-Day Wishlist</a>`
    var navText;
    if (loggedIn) {
        navText =  "Logout"
    } else {
        navText = "Login"
    }
    var logIn = `<a class="navbar-brand text-white text-right" id="nav-button" href="html/login.html">${navText}</a>`

    return home + logIn
}

const productHouses = [
    {
        "name": "Takealot",
        "img": "takealot.png"
    },
    {
        "name": "Typo",
        "img": "typo.jpeg"
    },
    {
        "name": "Makro",
        "img": "makro.png"
    }
];

const products = [
    {
        "name": "Headphones",
        "img": "headphones.jpeg",
        "claimable": true,
        "productHouse": "Takealot",
        "link": "https://www.takealot.com/jbl-tune-760nc-wireless-bluetooth-noise-cancelling-over-ear-head/PLID72992843"
    },
    {
        "name": "Adjustable Ring 1",
        "img": "ring3.jpeg",
        "claimable": true,
        "productHouse": "Takealot",
        "link": "https://www.takealot.com/idesire-silver-cz-crossover-ring-vr8348/PLID65571262"
    },
    {
        "name": "Adjustable Ring 2",
        "img": "ring2.jpeg",
        "claimable": true,
        "productHouse": "Takealot",
        "link": "https://www.takealot.com/idesire-cross-over-cubic-zirconia-ring-adjustable-size/PLID72054327?colour_variant=Gold"
    }
];

function getProductHouses() {
    var productHousesDiv = `<div class="row justify-content-md-center">`;
    productHouses.forEach(productHouse => {
        // TODO 
    //     {% if product['claimable'] is true %}
    //     {% if product['claim'] is true %}
    //         <a href="claim/{{ product['name'] }}">
    //             <button class="btn-sm text-white rounded-pill" style="background-color: grey; border: none; font-size: 150%">Claimed</button>
    //         </a>
    //     {% else %}
    //         <a href="claim/{{ product['name'] }}">
    //             <button class="btn-sm text-white rounded-pill" style="background-color: #ffe1e4; border: none; font-size: 150%">Claim</button>
    //         </a>
    //     {% endif %}
    // {% endif %}
        productHousesDiv += `
            <div class="col-sm text-center text-white" style="margin: 1%;">
                <figure class="figure">
                    <a onclick="showProducts('${productHouse['name']}')">
                        <img class="rounded-circle" src="img/${productHouse['img']}" height="300px", width="300px">
                    </a>
                </figure>
                <p style="font-size: 200%; color: #957dad">${productHouse['name']}</p>
            </div>
        `;
    });


    productHousesDiv += `</div>`;

    return productHousesDiv
}

function getProducts(productHouseName) {
    var productsDiv = `
        <h1 class="header text-white text-center">${productHouseName}</h1>
            <div class="row justify-content-md-center">
    `;
    products.filter(p => p['productHouse'] === productHouseName).forEach(product => {
        productsDiv += `
            <div class="col-sm text-center text-white" style="margin: 1%;">
        `;
        if (product['claimable']) {
            productsDiv += `
                <figure class="figure">
                    <a href="${product['link']}">
                        <img class="rounded-circle" src="img/${product['img']}" height="300px", width="300px">
                    </a>
                </figure>
                <p style="font-size: 200%; color: #957dad">${product['name']}</p>
                <a onclick="">
                    <button class="btn-sm text-white rounded-pill" style="background-color: #ffe1e4; border: none; font-size: 150%">Claim</button>
                </a>
            `;
        } else {
            productsDiv += `
            <figure class="figure">
                <img class="rounded-circle" src="img/${product['img']}" height="300px", width="300px">
            </figure>
            <p style="font-size: 200%; color: #957dad">${product['name']}</p>
            <a onclick="">
                <button class="btn-sm text-white rounded-pill" style="background-color: grey; border: none; font-size: 150%">Claimed</button>
            </a>
        `;
        }
        productsDiv += `
            </div>
        `;
    });
    productsDiv += `
        </div>
    `;
    return productsDiv;
    
}

function showProducts(productHouseName) {
    document.getElementById("container").innerHTML = getProducts(productHouseName);
}

window.addEventListener('load', (event) => {
    document.getElementById("nav-bar").innerHTML = getNavbar();

    document.getElementById("container").innerHTML = getProductHouses();
});