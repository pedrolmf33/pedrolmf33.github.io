// Scripts da aba Portfólio (migrados de Meu_Portfolio/index.html)

// Envia a mensagem do formulário de contato direto para o WhatsApp
function enviarWhats(event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const mensagem = document.getElementById('mensagem').value;
  const telefone = '5535997312033';

  const texto = `Olá! Me chamo ${nome}, ${mensagem}`;
  const msgFormatada = encodeURIComponent(texto);

  const url = `https://wa.me/${telefone}?text=${msgFormatada}`;

  window.open(url, '_blank');
}

// Navegação interna da aba Portfólio.
// Usa rolagem suave em vez de links "#ancora", porque o template
// usa o hash da URL para trocar de aba (Início / Currículo / Portfólio).
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.meu-portfolio .menu-link[data-alvo]').forEach(function (botao) {
    botao.addEventListener('click', function () {
      const alvo = document.getElementById(botao.getAttribute('data-alvo'));
      if (alvo) {
        alvo.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});
