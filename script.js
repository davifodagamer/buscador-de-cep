document.getElementById("buscar").addEventListener("click", () => {
    const cep = document.getElementById("cep").value.replace(/\D/g, '');

    if (cep.length !== 8) {
        alert("Por favor, digite um CEP válido com 8 números.");
        return;
    }

    const url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.erro) {
                document.getElementById("resultado").innerHTML = "<p>CEP não encontrado.</p>";
                return;
            }

            document.getElementById("resultado").innerHTML = `
                <p><strong>Logradouro:</strong> ${data.logradouro}</p>
                <p><strong>Bairro:</strong> ${data.bairro}</p>
                <p><strong>Cidade:</strong> ${data.localidade}</p>
                <p><strong>Estado:</strong> ${data.uf}</p>
                <p><strong>CEP:</strong> ${data.cep}</p>
            `;
        })
        .catch(error => {
            document.getElementById("resultado").innerHTML = "<p>Erro ao buscar CEP.</p>";
            console.error(error);
        });
});