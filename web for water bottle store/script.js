

let cartCount = 0;

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function () {
        cartCount++;
        document.getElementById('cartButton').textContent = `View Cart (${cartCount} items)`;
        alert(`${this.dataset.product} added to cart.`);
    });
});

document.getElementById('cartButton').addEventListener('click', () => {
    alert(`You have ${cartCount} items in your cart.`);
});

// show more........................... 
// Get button and hidden products
// const toggleButton = document.getElementById('toggleButton');
// const hiddenProducts = document.querySelectorAll('.product-card.hidden');

// // Add event listener to toggle button
// toggleButton.addEventListener('click', function () {
//     // Check if hidden products are currently displayed
//     const isVisible = hiddenProducts[0].style.display === 'block';

//     if (isVisible) {
//         // Hide products
//         hiddenProducts.forEach(product => {
//             product.style.display = 'none';
//         });
//         toggleButton.textContent = 'Show More'; // Change button text
//     } else {
//         // Show products
//         hiddenProducts.forEach(product => {
//             product.style.display = 'block';
//         });
//         toggleButton.textContent = 'Show Less'; // Change button text
//     }
// });


document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Message:", message);

    alert("Your message has been sent!");

    // Clear form after submission
    document.getElementById("contactForm").reset();
});




