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

function getProductHouses() {
    console.log(productHouses);
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
                    <a href="${productHouse['link']}">
                        <img class="rounded-circle" src="img/${productHouse['img']}" height="300px", width="300px">
                    </a>
                </figure>
                <p style="font-size: 200%; color: #957dad">${productHouse['name']}</p>
            </div>
        `
    });


    productHousesDiv += `</div>`;

    return productHousesDiv
}

window.addEventListener('load', (event) => {
    document.getElementById("nav-bar").innerHTML = getNavbar();

    document.getElementById("container").innerHTML = getProductHouses();
});