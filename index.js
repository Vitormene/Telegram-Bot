process.env.NTBA_FIX_319 = 1;
const  TelegramBot  =  require ( 'node-telegram-bot-api' ) ;
const  token  =  'YOU-TOKEN';
const bot = new TelegramBot( token, { polling: true } );

bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, `Olá ${msg.chat.first_name} ${msg.chat.last_name}, Bem vindo ao Atendente Virtual - Supermercado Estrela Azul.`)

});


bot.onText(/\/endereco/, (msg) => {
    bot.sendMessage(msg.chat.id, 'Loja 1 - Praça Porto de ferreira, 48-A - Guilhermina Esperança\nTelefone: 011 2023-9090\nLoja 2- Av. Antônio Estêvão de Carvalho, 1532 - Cidade Patriarca\nTelefone: 011 2023-6350\nLoja 3 - Rua Padre João de Castro e Costa, 5 - Vila Bauab\nTelefone: 011 2280-5422');
 });

 
 bot.onText(/\/jornal/, (msg) => {
    const url = 'http://www.supermercadoestrelaazul.com.br/imagens/tabloide_frente_gd.jpg';
    bot.sendPhoto(msg.chat.id, url);
    const url2 = 'http://www.supermercadoestrelaazul.com.br/imagens/tabloide_verso_gd.jpg';
    bot.sendPhoto(msg.chat.id, url2);

});

bot.onText(/\/compreeretire/, (msg) => {
    bot.sendMessage(msg.chat.id, `Compre Online e Retire sua compra em nossas Lojas!\n
    Para Comprar e Retirar na Loja-1 (Guilhermina):
    http://drive.supermercadoestrelaazul.com.br/
    Para Comprar e Retirar na Loja-3 (Ponte Rasa):
    https://santaluzia.ecommerce.bluesoft.com.br/\n
Qual é o Passo a Passo da Compra Online?
Para efetuar a sua compra é muito fácil! Siga o Passo a Passo:\n
    1- Acesse o Link e escolha a Loja em que deseja Retirar e Pagar sua compra.
    2- Antes de fazer as suas compras, clique em ENTRAR e faça seu cadastro.
    3- Acesse o seu e-mail e confirme o seu cadastro clicando no link.
    4- Faça o login e seu pedido colocando os produtos desejados no seu carrinho.
    5- Finalize sua compra clicando no carrinho e aguarde a Separação dos seus produtos
    6- Aguarde o e-mail do pedido separado com o horário…
    `
)
const url5 = "http://supermercadoestrelaazul.com.br/video/drive.mp4" 
bot.sendVideo(msg.chat.id, url5);
});

bot.onText(/\/delivery/, (msg) =>{
    bot.sendMessage(msg.chat.id, `Vocês fazem Delivey?
    \nAs entregas são realizadas somente quando a compra é feita presencialmente... pedimos para que entre em contato com a unidade mais próxima para mais detalhes sobre quais produtos podem ser entregues e valor mínimo de compra.
    `)

});

bot.onText(/\/horario/, (msg) =>{
      bot.sendMessage(msg.chat.id, `Horário de Funcionamento:\n
    ▪ Loja 1 e Loja 2:
    Segunda a Sábado
    Das 07:00 às 21:00
    Domingos e Feriados
    Das 07:00 às 13:30
    Grupo de risco
    Das 07:00 às 08:00 - Todos os dias.\n
    ▪ Loja 3:
    Segunda a Sábado
    Das 08:00 às 20:00
    Domingos e Feriados
    Das 08:00 às 14:00
    Grupo de risco
    Das 08:00 às 09:00 - Todos os dias.
      `)
})
bot.onText(/\/app/, (msg) =>{
    const url4= 'https://i.postimg.cc/907hVKqN/Logotipo-estrela-azul.jpg'
    bot.sendPhoto(msg.chat.id, url4);
    bot.sendMessage(msg.chat.id, `😮Mais uma NOVIDADE o APP ESTRELA AZUL DRIVE.🛒

    ☑️Conte com mais FACILIDADE no seu dia a dia, 
    compre pelo APP ESTRELA AZUL DRIVE e
    Retire sua compra em nossa Loja!✨
    📲Baixe agora:
    https://play.google.com/store/apps/details?id=br.com.estrelaazuldrive
    Para Comprar e Retirar na Loja-1 (Guilhermina)`)
    
});
bot.onText(/\/faleconosco/, (msg)=> {
  bot.sendMessage(msg.chat.id, `Fale diretamente com a nossa atendente virtual!\n
  https://api.whatsapp.com/send?phone=5511961876610
  `)

})
bot.onText(/\/caixa/, (msg)=>{
    bot.sendMessage(msg.chat.id, `Está com dúvidas de como funciona?
    Siga o passo a passo!😉`)
    const url4 = 'https://i.postimg.cc/GtFbG6hT/photo-2020-06-04-13-01-30.jpg';
    bot.sendPhoto(msg.chat.id, url4);
});
