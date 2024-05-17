
    function addToCart(productName, productPrice) {
        // Logica para adicionar o item ao carrinho
        // Você pode salvar os itens no localStorage ou enviar para um backend
        
        // Exemplo simples de salvar no localStorage
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push({ name: productName, price: productPrice });
        localStorage.setItem('cart', JSON.stringify(cart));

        alert(productName + " foi adicionado ao carrinho!");
    }

    // Função para carregar os itens do carrinho na página
function loadCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartItems = document.getElementById('cart-items');
    let totalPrice = 0;
    
    // Limpar os itens existentes no carrinho
    cartItems.innerHTML = '';
}
    // Função para adicionar um item ao carrinho
    function addToCart(name, price, imageUrl) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push({ name: name, price: price, imageUrl: imageUrl });
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
    }
    
    // Função para carregar os itens do carrinho na página
    function loadCart() {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        let cartItems = document.getElementById('cart-items');
        let totalPrice = 0;
        
        // Limpar os itens existentes no carrinho
        cartItems.innerHTML = '';
    
        // Adicionar cada item ao carrinho
        cart.forEach((item, index) => {
            let row = document.createElement('tr');
    
            let imageCell = document.createElement('td');
            let image = document.createElement('img');
            image.src = item.imageUrl;
            image.alt = item.name;
            image.className = 'cart-item-image';
            imageCell.appendChild(image);
    
            let productCell = document.createElement('td');
            productCell.textContent = item.name;
            
            let priceCell = document.createElement('td');
            priceCell.textContent = `R$ ${item.price.toFixed(2)}`;
    
            let removeCell = document.createElement('td');
            let removeButton = document.createElement('button');
            removeButton.textContent = 'Remover';
            removeButton.className = 'remove-button';
            removeButton.onclick = () => removeFromCart(index);
            removeCell.appendChild(removeButton);
            
            row.appendChild(imageCell);
            row.appendChild(productCell);
            row.appendChild(priceCell);
            row.appendChild(removeCell);
            
            cartItems.appendChild(row);
            
            totalPrice += item.price;
        });
        
        // Atualizar o preço total
        document.getElementById('total-price').textContent = totalPrice.toFixed(2);
    }
    
    // Função para remover itens do carrinho
    function removeFromCart(index) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        loadCart();
        updateCartCount();
    }
    
    // Chamar a função para carregar os itens do carrinho quando a página carregar
    window.onload = function() {
        loadCart();
        updateCartCount();
    };
    
    // Função para atualizar o contador de itens no carrinho
    function updateCartCount() {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        document.getElementById('cart-count').textContent = cart.length;
    }

    // Função para carregar os itens do carrinho na página
function loadCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartItems = document.getElementById('cart-items');
    let totalPrice = 0;
    
    // Limpar os itens existentes no carrinho
    cartItems.innerHTML = '';

    // Adicionar cada item ao carrinho
    cart.forEach((item, index) => {
        let row = document.createElement('tr');

        let imageCell = document.createElement('td');
        let image = document.createElement('img');
        image.src = item.imageUrl;
        image.alt = item.name;
        image.className = 'cart-item-image';
        imageCell.appendChild(image);

        let productCell = document.createElement('td');
        productCell.textContent = item.name;
        
        let priceCell = document.createElement('td');
        priceCell.textContent = `R$ ${item.price.toFixed(2)}`;

        let removeCell = document.createElement('td');
        let removeButton = document.createElement('button');
        removeButton.textContent = 'Remover';
        removeButton.className = 'remove-button';
        removeButton.onclick = () => removeFromCart(index);
        removeCell.appendChild(removeButton);
        
        row.appendChild(imageCell);
        row.appendChild(productCell);
        row.appendChild(priceCell);
        row.appendChild(removeCell);
        
        cartItems.appendChild(row);
        
        totalPrice += item.price;
    });
    
    // Atualizar o preço total
    document.getElementById('total-price').textContent = totalPrice.toFixed(2);
}

// Função para remover itens do carrinho
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
    updateCartCount();
}

// Chamar a função para carregar os itens do carrinho quando a página carregar
window.onload = function() {
    loadCart();
    updateCartCount();
};

// Função para atualizar o contador de itens no carrinho
function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    document.getElementById('cart-count').textContent = cart.length;
}

// Função para adicionar um item ao carrinho
function addToCart(name, price, imageUrl) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name: name, price: price, imageUrl: imageUrl });
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const errorMessage = document.getElementById('error-message');

    if (password !== confirmPassword) {
        errorMessage.textContent = 'As senhas não coincidem.';
        return;
    }

    if (password.length < 6) {
        errorMessage.textContent = 'A senha deve ter pelo menos 6 caracteres.';
        return;
    }

    // Aqui você pode adicionar a lógica para enviar os dados para o servidor
    // Exemplo:
    // fetch('/api/register', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({ username, email, password })
    // }).then(response => {
    //     if (response.ok) {
    //         window.location.href = '/login';
    //     } else {
    //         errorMessage.textContent = 'Erro ao realizar o cadastro.';
    //     }
    // });

    errorMessage.textContent = '';
    alert('Cadastro realizado com sucesso!');
});
