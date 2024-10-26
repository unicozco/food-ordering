// Sample JSON data URL
const jsonDataUrl = 'menu.json';

// Fetch and display menu items
async function getMenu() {
    try {
        const response = await fetch(jsonDataUrl);
        const menuItems = await response.json();

        const menuGrid = document.getElementById('menu-grid');
        menuGrid.innerHTML = '';

        menuItems.forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.classList.add('menu-item');
            menuItem.innerHTML = `
                <img src="${item.imgSrc}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>$${item.price.toFixed(2)}</p>
            `;
            menuGrid.appendChild(menuItem);
        });
    } catch (error) {
        console.error('Error fetching menu:', error);
    }
}

// Handle the complete ordering process
function handleOrder() {
    TakeOrder()
        .then(orderPrep)
        .then(payOrder)
        .then(thankyouFnc)
        .catch(error => console.error(error));
}

// Run getMenu on page load
window.onload = () => {
    getMenu();
    document.querySelector('.btn').addEventListener('click', handleOrder);
};

// Dummy functions as per your requirement
function TakeOrder() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ items: ['Burger', 'Pizza', 'Tacos'] });
        }, 2500);
    });
}

function orderPrep() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ order_status: true, paid: false });
        }, 1500);
    });
}

function payOrder() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ order_status: true, paid: true });
        }, 1000);
    });
}

function thankyouFnc() {
    alert('Thank you for eating with us today!');
}
