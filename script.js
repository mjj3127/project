$(document).ready(function () {

    $("#global-header").load("header.html", function (response, status, xhr) {
        if (status == "error") {
            console.log("Error loading header: " + xhr.status + " " + xhr.statusText);
        }
    });
    $("#global-footer").load("footer.html", function (response, status, xhr) {
        if (status == "error") {
            console.log("Error loading footer: " + xhr.status + " " + xhr.statusText);
        }
    });

  
    $(".product-variation").on("click", function () {
     
        console.log("Product variation selected: " + $(this).data("variation"));
    });

   
   document.addEventListener('DOMContentLoaded', () => {
        const cartItems = document.getElementById('cart-items');
        const cartTotal = document.getElementById('cart-total');
        const notification = document.getElementById('notification');
        let total = 0;
    
        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', () => {
                const productId = button.getAttribute('data-product-id');
                const productName = button.getAttribute('data-product-name');
                const productPrice = parseFloat(button.getAttribute('data-product-price'));
    
                
                const listItem = document.createElement('li');
                listItem.textContent = `${productName} - $${productPrice.toFixed(2)}`;
                cartItems.appendChild(listItem);
    
                total += productPrice;
                cartTotal.textContent = total.toFixed(2);
    
                showNotification();
    
          
                button.textContent = 'Added';
                button.disabled = true;
            });
            function onMotorolaAdded() {

                let specificProductPrice = document.getElementsByClassName('product-price-Motorola')[0].innerHTML;
                let cleanedPrice = specificProductPrice.replace(/[^0-9.]/g, '');
                let productPrice = parseFloat(cleanedPrice);
                total += productPrice;
                console.log(productPrice, total.toFixed(2));
            }
            // Add button click handler
            $("#Motorola").on("click", function () {
                onMotorolaAdded()
            });
        
        
            $("#Mobira").on("click", function () {
                onMobiraAdded()
            });
        
            function onMobiraAdded() {
                let specificProductPrice = document.getElementsByClassName('product-price-mobira')[0].innerHTML;
                let cleanedPrice = specificProductPrice.replace(/[^0-9.]/g, '');
                let productPrice = parseFloat(cleanedPrice);
                total += productPrice;
                console.log(productPrice, total.toFixed(2));
            }
        });
    
        function showNotification() {
            notification.classList.remove('hidden');
            setTimeout(() => {
                notification.classList.add('hidden');
            }, 2000); 
        }
    });

   
    $("#menu-toggle").on("click", function () {
        $("nav").toggleClass("active");
        console.log("Menu toggled");
    });


     
     $("#contact-form").on("submit", function (e) {
        e.preventDefault();
        if (validateForm()) {
            console.log("Form submitted");
            
            $(this).find("input[type=text], input[type=email], textarea").val("");
            $("#form-success").show().delay(3000).fadeOut();
        }
    });

    function validateForm() {
        let isValid = true;
        $("#contact-form input[required], #contact-form textarea[required]").each(function() {
            if ($(this).val().trim() === "") {
                isValid = false;
                $(this).addClass("error");
            } else {
                $(this).removeClass("error");
            }
        });
        if (!isValid) {
            $("#form-error").show().delay(3000).fadeOut();
        }
        return isValid;
    }
});

