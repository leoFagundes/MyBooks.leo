export interface BookData {
    name: string;
    desc: string;
    genre: string[];
    img: string;
    pdf: string;
    rate: string;
    author: string;
  }

export const dataBooks: BookData[] = [
    {
        name: 'Verity',
        desc: `
        Verity Crawford é a autora best-seller por trás de uma série de sucesso. Ela está no auge de sua carreira, aclamada pela crítica e pelo público, no entanto, um súbito e terrível acidente acaba interrompendo suas atividades, deixando-a sem condições de concluir a história… E é nessa complexa circunstância que surge Lowen Ashleigh, uma escritora à beira da falência convidada a escrever, sob um pseudônimo, os três livros restantes da já consolidada série.
        <br/><br/>
        Para que consiga entender melhor o processo criativo de Verity com relação aos livros publicados e, ainda, tentar descobrir seus possíveis planos para os próximos, Lowen decide passar alguns dias na casa dos Crawford, imersa no caótico escritório de Verity – e, lá, encontra uma espécie de autobiografia onde a escritora narra os fatos acontecidos desde o dia em que conhece Jeremy, seu marido, até os instantes imediatamente anteriores a seu acidente – incluindo sua perspectiva sobre as tragédias ocorridas às filhas do casal.
        <br/><br/>
        Quanto mais o tempo passa, mais Lowen se percebe envolvida em uma confusa rede de mentiras e segredos, e, lentamente, adquire sua própria posição no jogo psicológico que rodeia aquela casa. Emocional e fisicamente atraída por Jeremy, ela precisa decidir: expor uma versão que nem ele conhece sobre a própria esposa ou manter o sigilo dos escritos de Verity?
        <br/><br/>
        Em Verity, Colleen Hoover se afasta do estilo que a consagrou, os romances, para se aventurar em um suspense psicológico que deixou todo o mercado editorial sem palavras de tão avassalador. Através de uma narrativa perturbadora e chocante, Verity explora o lado mais sombrio das relações humanas deixando uma surpresinha chocante no final.
        `,
        genre: ['Romance', 'Fiction', 'Mystery', 'Suspense', 'Adult', 'Dark'],
        img: 'verity.png',
        pdf: 'verity.pdf',
        rate: '10',
        author: 'Colleen Hoover'
    },
    {
        name: 'O homem mais rico da Babilônia',
        desc: `
        A sabedoria transmitida pela obra é baseada nas práticas de sucesso dos antigos babilônicos, que embora sejam de uma época distante ainda são bastante úteis nos dias atuais, já que as leis que regiam o dinheiro há 6 mil anos seguem as mesmas, segundo o autor George S. Clason.
        <br/><br/>
        Os ensinamentos do livro têm sua raiz na questão geográfica dessa civilização, que possuía os homens mais ricos daquela época, mas que era pobre em recursos naturais, fazendo com que seus habitantes tivessem que desenvolver técnicas para superar esse fator limitante.
        <br/><br/>
        Assim, a obra traz conselhos para quem quer aprender a:
        <br/><br/>
        - Buscar conhecimento e informação em vez de apenas lucro;<br/><br/>
        - Não desperdiçar recursos durante tempos de opulência;<br/><br/>
        - Manter a pontualidade no pagamento de dívidas;<br/><br/>
        - Assegurar uma renda para o futuro;<br/><br/>
        - E, sobretudo, cultivar as próprias aptidões, tornando-se cada vez mais consciente e habilidoso.
        `,
        genre: ['Economics', 'Financial education', 'Investments', 'Self-Help', 'Classics'],
        img: 'O_homem_mais_rico_da_Babilonia.png',
        pdf: 'O_homem_mais_rico_da_Babilonia.pdf',
        rate: '9',
        author: 'George S Clason'
    },
    {
        name: 'Do Mil ao Milhão',
        desc: `
        No livro “Do mil ao milhão”, Thiago Nigro demonstra quais são os três pilares para atingir a prosperidade financeira. O autor realizou diversos estudos e atendeu vários clientes até chegar nesses conceitos. Nigro é criador da plataforma “O Primo Rico” e ensina aos leitores os três pilares para a independência financeira. São eles: gastar bem, investir melhor e ganhar mais. 
        <br/><br/>
        Em seu livro, o autor mostra que a riqueza é possível para todos, e para isso basta estar disposto a aprender e se dedicar. Saber fazer o seu dinheiro trabalhar para você é essencial para garantir o sucesso financeiro e o crescimento de suas riquezas. Os investidores de sucesso sabem disso, e por isso conseguem mesclar os riscos às oportunidades de lucro.
        `,
        genre: ['Economics', 'Financial education', 'Investments'],
        img: 'Do_mil_ao_milhao.png',
        pdf: 'Do_mil_ao_milhao.pdf',
        rate: '5',
        author: 'Thiago Nigro'
    },
    {
        name: 'Os Dois Morrem No Final',
        desc: `
        No dia 5 de setembro, pouco depois da meia-noite, Mateo Torrez e Rufus Emeterio recebem uma ligação da Central da Morte. A notícia é devastadora: eles vão morrer naquele mesmo dia.
        <br/><br/>
        Os dois não se conhecem, mas, por motivos diferentes, estão à procura de um amigo com quem compartilhar os últimos momentos, uma conexão verdadeira que ajude a diminuir um pouco a angústia e a solidão que sentem. Por sorte, existe um aplicativo para isso, e é graças a ele que Rufus e Mateo vão se encontrar para uma última grande aventura: viver uma vida inteira em um único dia.
        <br/><br/>
        Uma história sensível e emocionante, Os dois morrem no final nos lembra o que significa estar vivo. Com seu olhar único, Adam Silvera mostra que cada segundo importa, e mesmo que não haja vida sem morte, nem amor sem perda, tudo pode mudar em 24 horas.
        `,
        genre: ['Romance', 'Fiction', 'Suspense', 'Young Adult', 'Queer', 'Fantasy'],
        img: 'Os_Dois_Morrem_No_Final.png',
        pdf: 'Os_Dois_Morrem_No_Final.pdf',
        rate: '8',
        author: 'Adam Silvera '
    },
    {
        name: 'teste1',
        desc: `
        
        `,
        genre: ['teste'],
        img: 'teste',
        pdf: 'teste',
        rate: 'teste',
        author: 'teste'
    },
    {
        name: 'teste2',
        desc: `
        
        `,
        genre: ['teste'],
        img: 'teste',
        pdf: 'teste',
        rate: 'teste',
        author: 'teste'
    },
    {
        name: 'teste3',
        desc: `
        
        `,
        genre: ['teste'],
        img: 'teste',
        pdf: 'teste',
        rate: 'teste',
        author: 'teste'
    },
    {
        name: 'teste4',
        desc: `
        
        `,
        genre: ['teste'],
        img: 'teste',
        pdf: 'teste',
        rate: 'teste',
        author: 'teste'
    },
    
]