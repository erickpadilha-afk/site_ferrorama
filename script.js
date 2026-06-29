// Seleciona todos os inputs do tipo radio na página
const radioButtons = document.querySelectorAll('.radio-input');

// Seleciona as áreas de texto do painel lateral de checkout
const checkoutPriceText = document.getElementById('checkout-price');
const checkoutClassText = document.getElementById('checkout-class');

// Função que atualiza as informações da barra lateral
function updateCheckout() {
    // Localiza qual passagem está ativa (marcada)
    const selectedRadio = document.querySelector('.radio-input:checked');
    
    if (selectedRadio) {
        // Encontra o container correspondente (<label>) da passagem marcada
        const parentLabel = selectedRadio.closest('.class-option');
        
        // Extrai os valores reais de texto contidos nela
        const currentPrice = parentLabel.querySelector('.class-price').innerText;
        const currentClassName = parentLabel.querySelector('.class-name').innerText;
        
        // Renderiza no card de resumo
        checkoutPriceText.innerText = currentPrice;
        checkoutClassText.innerText = currentClassName;
    }
}

// Vincula o evento para rodar toda vez que o usuário alterar o rádio selecionado
radioButtons.forEach(radio => {
    radio.addEventListener('change', updateCheckout);
});