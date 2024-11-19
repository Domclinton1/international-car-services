document.getElementById('simulacaoForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    // Coletando os dados do formulário
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const valor = document.getElementById('valor').value.trim();
  
    // Validando campos (opcional)
    if (!nome || !email || !telefone || !valor) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
  
    // Número do WhatsApp no formato internacional
    const numeroWhatsApp = '553135828296';
  
    // Montando a mensagem
    const mensagem = `Olá, meu nome é ${nome}.
  Gostaria de informações sobre financiamento.
  E-mail: ${email}
  Telefone: ${telefone}
  Valor desejado: ${valor}`;
  
    // Codificando a mensagem para URL
    const mensagemCodificada = mensagem.replace(/\n/g, '%0A');
  
    // Gerando a URL do WhatsApp
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`;
  
    // Testando a URL gerada no console
    console.log(urlWhatsApp);
  
    // Redirecionando para o WhatsApp
    window.open(urlWhatsApp, '_blank');
  });
  