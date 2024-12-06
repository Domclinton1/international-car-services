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



  document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os elementos com a classe .faq-question
    const faqQuestions = document.querySelectorAll('.faq-question');
  
    faqQuestions.forEach(question => {
      question.addEventListener('click', function() {
        const faqItem = this.parentNode;
        const answer = faqItem.querySelector('.faq-answer');
        
        // Verificar se a resposta já está visível
        const isVisible = answer.style.display === 'block';
        
        // Ocultar todas as respostas
        document.querySelectorAll('.faq-answer').forEach(a => {
          a.style.display = 'none';
        });
        
        // Mostrar ou ocultar a resposta clicada
        answer.style.display = isVisible ? 'none' : 'block';
      });
    });
  
    // Fechar todas as respostas quando clicar fora
    document.addEventListener('click', function(event) {
      if (!event.target.classList.contains('faq-question')) {
        document.querySelectorAll('.faq-answer').forEach(answer => {
          answer.style.display = 'none';
        });
      }
    });
  });
  
  document.getElementById('menu-icon').addEventListener('click', function () {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
  });
  

  // Exibir o modal automaticamente ao carregar a página
document.addEventListener("DOMContentLoaded", function() {
  modal.style.display = "block";
});

// Seleciona o modal e o botão de fechar
var modal = document.getElementById("myModal");
var span = document.querySelector(".close");

// Seleciona todos os botões com a classe .modalSimulator
var buttons = document.querySelectorAll(".modalSimulator");

// Adiciona um evento de clique para cada botão com a classe .modalSimulator
buttons.forEach(function(button) {
  button.onclick = function() {
      modal.style.display = "block";
  };
});

// Quando o usuário clicar no "X" (span), o modal será fechado
span.onclick = function() {
  modal.style.display = "none";
}

// Quando o usuário clicar fora do modal, ele será fechado
window.onclick = function(event) {
  if (event.target == modal) {
      modal.style.display = "none";
  }
};
