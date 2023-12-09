export interface BookData {
    name: string;
    desc: string;
    genre: string[];
    img: string;
    pdf?: string;
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
        name: 'Percy Jackson - O Ladrão de Raios',
        desc: `
        E se os deuses do Olimpo estivessem vivos no século XXI? E se eles ainda se apaixonassem por mortais e gerassem filhos heróis? Segundo a lenda da Antiguidade, a maioria desses semideuses dificilmente passa da adolescência. Poucos conseguem descobrir sua identidade. 
        <br/><br/>
        Percy Jackson é filho de um deus. Ele está prestes a ser expulso do colégio... De novo. Mas, aos doze anos, esse é apenas mais um de seus problemas: além do transtorno do déficit de atenção e da dislexia, parece que, ultimamente, criaturas fantásticas e deuses do Olimpo saltam dos livros de mitologia diretamente para a realidade. E ao que tudo indica estão aborrecidos. O raio-mestre de Zeus foi roubado, e é Percy quem deve resgatá-lo. 
        <br/><br/>
        Para restaurar a paz no Olimpo, ele e seus amigos heróis precisarão fazer mais que capturar o verdadeiro ladrão: Percy terá de encarar o pai, resolver o enigma do Oráculo e desvendar uma traição mais ameaçadora que a fúria dos deuses.
        `,
        genre: ['Adventure', 'Fantasy', 'Mythology'],
        img: '1-Percy_Jackson_e_o_ladrão_de_raios.png',
        pdf: '1-Percy_Jackson_e_o_ladrão_de_raios.pdf',
        rate: '8',
        author: 'Rick Riordan'
    },
    {
        name: 'Percy Jackson - O Mar de Monstros',
        desc: `
        O ano de Percy Jackson foi surpreendentemente calmo. Nenhum monstro colocou os pés em sua escola, não teve acidentes estranhos e nenhuma briga em sala de aula. Mas quando um inocente jogo de queimada entre ele e seus colegas torna-se uma disputa mortal contra uma tenebrosa gangue de gigantes canibais, as coisas começam a ficar feias. A inesperada chegada de Annabeth traz outras más notícias: as fronteiras mágicas que protegem o Acampamento Meio-Sangue foram envenenadas por um inimigo misterioso e, a menos que um antídoto seja encontrado, o único porto seguro dos semideuses será destruído.

        Percy e seus amigos precisam se aventurar no Mar de Monstros para buscar o único artefato capaz de salvar o acampamento. Antes, porém, nosso herói entrará em confronto com a verdadeira natureza de seu amigo Tyson - algo que o fará questionar se ser filho de Poseidon é uma honra ou uma terrível maldição.
        `,
        genre: ['Adventure', 'Fantasy', 'Mythology'],
        img: '2-Percy_Jackson_o_mar_de_monstros.png',
        pdf: '2-Percy_Jackson_o_mar_de_monstros.pdf',
        rate: '7',
        author: 'Rick Riordan'
    },
    {
        name: 'Percy Jackson - A Maldição do Titã',
        desc: `
        Em dezembro, seis meses após os acontecimentos de O Mar de Monstros, Percy Jackson, Thalia Grace e Annabeth Chase vão até a escola de Westover Hall para encontrar Grover Underwood: o sátiro parece ter encontrado dois semideuses muito poderosos, os irmãos Nico e Bianca di Angelo. Thalia demonstra sua habilidade em manipular a Névoa e tenta convencer professor e vice-diretora de que os três estudam na escola. A professora é facilmente enganada, mas o vice-diretor, que na verdade é uma Manticora disfarçada, não foi iludido. Os três então se juntam a Grover durante o baile da escola.
        <br/><br/>
        Grover logo informa os três meios-sangues que Dr. Espinheiro, o vice-diretor da escola é um monstro, e desconfia da identidade dos dois semideuses encontrados. Thalia arquiteta um plano para distrair o Dr. Espinheiro; entretanto, o plano não sai como planejado: eles são separados pela multidão do baile e Percy é forçado a seguir sozinho o monstro, que levara consigo as duas crianças.
        <br/><br/>
        Quando se aproxima de Bianca e Nico, Dr. Espinheiro arremessa um dardo que raspa o ombro de Percy, que percebe também o veneno que adentrara seu corpo. Muito fraco para lutar, o filho de Poseidon escuta enquanto a Manticora fala sobre seus planos. Os irmãos estão apavorados, e Percy tenta tranquilizá-los. A Manticora leva os três até um penhasco enquanto espera seus aliados coletá-los. Percy tenta de todo jeito enviar a Grover uma mensagem por meio da conexão empática que possui com o sátiro, que funciona, e logo Grover, Thalia e Annabeth aparecem, momento em que Dr. Espinheiro revela sua verdadeira forma.
        <br/><br/>
        De repente, algumas flechas prateadas passam por Percy e atingem a Manticora, que ataca em retaliação com seus espinhos, quando mais flechas prateadas continuam a vir dos arbustos. As arqueiras saem de suas posições. Todas são garotas adolescentes usando roupas prateadas. Thalia as introduz como Caçadoras de Ártemis. Elas estão prestes a atirar, quando Dr. Espinheiro avança para Thalia e Percy, sabendo que ambos não possuem boas condições de batalha. Annabeth sobe na Manticora e apunhala com sua faca, mas as Caçadoras disparam suas flechas, e monstro cai do penhasco, levando junto a filha de Atena, que deixa para trás seu boné dos Yankees.
        <br/><br/>
        Ártemis logo aparece e ordena que as Caçadoras montem acampamento. Percy é convidado para uma conversa com a deusa, que aparece na forma de uma garota com mais ou menos doze anos de idade. Ela pede a Percy o que exatamente a Manticora falara e conclui que tempos perigosos estão por vir. Ela decide caçar criaturas poderosas, uma que possui poder suficiente para destruir os deuses olimpianos. Antes de ir, Zoë Doce-Amarga, sua tenente, é colocada como responsável pelo grupo, que ficará no Acampamento Meio-Sangue até que Ártemis retorne. Durante sua curta passagem em Westover Hall, Bianca escolhe se juntar às Caçadoras, ganhando imortalidade e uma nova família, além de abandonar para sempre amor romântico, deixando Nico ao cuidado dos responsáveis pelo Acampamento Meio-Sangue
        <br/><br/>
        O grupo, de carona com Apolo, o irmão de Ártemis, que os deixa dirigir sua Carruagem do Sol, com Thalia no volante. Após uma breve aventura com a filha de Zeus na pilotagem, eles finalmente alcançam o Acampamento Meio-Sangue, quase batendo no lago de canoagem.
        `,
        genre: ['Adventure', 'Fantasy', 'Mythology'],
        img: '3-Percy_Jackson_a_maldicao_do_tita.png',
        pdf: '3-Percy_Jackson_a_maldicao_do_tita.pdf',
        rate: '6',
        author: 'Rick Riordan'
    },
    {
        name: 'Percy Jackson - A Batalha do Labirinto',
        desc: `
        O Monte Olimpo está em perigo. Cronos, o perverso titã que foi destronado e feito em pedaços pelos doze deuses olimpianos, prepara um retorno triunfal. 
        <br/><br/>
        O primeiro passo de suas tropas será atacar e destruir o campo de treinamento dos heróis, filhos de deuses com mortais, que desde a Grécia Antiga combatem na linha de frente em defesa dos olimpianos.
        <br/><br/>
        Para assegurar que o refúgio de semideuses, o Acampamento Meio-Sangue, não seja invadido, Percy Jackson, Tyson, Annabeth e Grover são destacados para uma importante missão: deter as forças de Cronos antes que se aproximem do acampamento, no emaranhado de corredores do temido Labirinto de Dédalo – um interminável universo subterrâneo que, a cada curva, revela as mais aterrorizantes surpresas
        `,
        genre: ['Adventure', 'Fantasy', 'Mythology'],
        img: '4-Percy_Jackson_a_batalha_do_labirinto.png',
        pdf: '4-Percy_Jackson_a_batalha_do_labirinto.pdf',
        rate: '10',
        author: 'Rick Riordan'
    },
    {
        name: 'Percy Jackson - O Último Olimpiano',
        desc: `
        O aguardado desfecho da premiada série de fantasia «Percy Jackson e os Olimpianos».<br/>
        Os mestiços passaram o ano inteiro a preparar para a batalha contra os Titãs, sabendo que a vitória é pouco provável. O exército de Cronos está mais forte do que nunca, e a cada novo deus ou mestiço que é recrutado, o poder de Cronos aumenta cada vez mais.
        <br/><br/>
        Enquanto os Olimpianos lutam para travar o monstro Tifão, Cronos avança em direção à cidade de Nova Iorque, onde o Monte Olimpo quase não tem vigilância. Cabe agora a Percy Jackson e ao seu exército de jovens semideuses travarem o Senhor do Tempo.
        <br/><br/>
        Neste muito aguardado quinto e último livro da série best-seller «Percy Jackson e os Heróis do Olimpo», a profecia envolve o dia do 16.º aniversário de Percy. E, enquanto luta por travar o fim da civilização ocidental nas ruas de Manhattan, Percy enfrenta a terrível sensação de que, na realidade, está a lutar contra o seu próprio destino.
        `,
        genre: ['Adventure', 'Fantasy', 'Mythology'],
        img: '5-Percy_Jackson_o_ultimo_olimpiano.png',
        pdf: '5-Percy_Jackson_o_ultimo_olimpiano.pdf',
        rate: '10',
        author: 'Rick Riordan'
    },
    {
        name: 'Percy Jackson - Os Olimpianos',
        desc: `
        Baseado nos romances escritos por Rick Riordan, a série acompanha o jovem Percy Jackson, um garoto que acaba de descobrir que é um semideus - metade humano, metade deus.
        <br/><br/>
        Percy é filho de Poseidon, o deus dos mares e oceanos na mitologia grega, e precisa aprender a controlar suas habilidades especiais. Frequentando o Acampamento Meio-Sangue, um lugar para crianças e adolescentes como ele, Percy se aproxima de Grover e Annabeth. Grover é um sátiro sensível à natureza e as emoções dos outros, enquanto Annabeth é uma garota astuta e curiosa, características de sua mãe, a deusa Atena.
        <br/><br/>
        Juntos, os melhores amigos embarcam em uma jornada para impedir que aconteça uma guerra entre os deuses do Olimpo. Pouco depois de descobrir sua verdadeira origem como semideus, Percy é acusado por Zeus, o deus do céu e também seu tio, de ter roubado o seu mais precioso raio. Percy e seus amigos devem viajar pelo país para encontrar o raio e restaurar a ordem no Olimpo.
        `,
        genre: ['Adventure', 'Fantasy', 'Mythology'],
        img: 'Percy_Jackson_e_os_Olimpianos.png',
        pdf: 'Percy_Jackson_e_os_Olimpianos.pdf',
        rate: '8',
        author: 'Rick Riordan'
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