const form = document.getElementById('form');

// Adicione um evento de escuta para o envio do formulário
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o comportamento padrão do envio do formulário

    // Selecione todos os campos de entrada dentro do formulário
    const inputs = document.querySelectorAll('input');

    // Crie um objeto para armazenar os valores dos campos
    const formData = {};

    // Itere sobre cada campo de entrada
    inputs.forEach(input => {
        // Adicione o valor do campo ao objeto formData, usando o nome do campo como chave
        formData[input.name] = input.value;
        input.value = ""
    });

    // Exiba os valores coletados no console (você pode fazer algo mais útil com eles)
    console.log(formData);
});