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
        
        Para que consiga entender melhor o processo criativo de Verity com relação aos livros publicados e, ainda, tentar descobrir seus possíveis planos para os próximos, Lowen decide passar alguns dias na casa dos Crawford, imersa no caótico escritório de Verity – e, lá, encontra uma espécie de autobiografia onde a escritora narra os fatos acontecidos desde o dia em que conhece Jeremy, seu marido, até os instantes imediatamente anteriores a seu acidente – incluindo sua perspectiva sobre as tragédias ocorridas às filhas do casal.
        
        Quanto mais o tempo passa, mais Lowen se percebe envolvida em uma confusa rede de mentiras e segredos, e, lentamente, adquire sua própria posição no jogo psicológico que rodeia aquela casa. Emocional e fisicamente atraída por Jeremy, ela precisa decidir: expor uma versão que nem ele conhece sobre a própria esposa ou manter o sigilo dos escritos de Verity?
        
        Em Verity, Colleen Hoover se afasta do estilo que a consagrou, os romances, para se aventurar em um suspense psicológico que deixou todo o mercado editorial sem palavras de tão avassalador. Através de uma narrativa perturbadora e chocante, Verity explora o lado mais sombrio das relações humanas deixando uma surpresinha chocante no final.
        `,
        genre: ['Romance', 'Fiction', 'Mystery', 'Suspense', 'Adult', 'Drama', 'Favorite'],
        img: 'verity.png',
        pdf: 'verity.pdf',
        rate: '10',
        author: 'Colleen Hoover'
    },
    {
        name: 'O homem mais rico da Babilônia',
        desc: `
        A sabedoria transmitida pela obra é baseada nas práticas de sucesso dos antigos babilônicos, que embora sejam de uma época distante ainda são bastante úteis nos dias atuais, já que as leis que regiam o dinheiro há 6 mil anos seguem as mesmas, segundo o autor George S. Clason.
        
        Os ensinamentos do livro têm sua raiz na questão geográfica dessa civilização, que possuía os homens mais ricos daquela época, mas que era pobre em recursos naturais, fazendo com que seus habitantes tivessem que desenvolver técnicas para superar esse fator limitante.
        
        Assim, a obra traz conselhos para quem quer aprender a:
        
        - Buscar conhecimento e informação em vez de apenas lucro;
        - Não desperdiçar recursos durante tempos de opulência;
        - Manter a pontualidade no pagamento de dívidas;
        - Assegurar uma renda para o futuro;
        - E, sobretudo, cultivar as próprias aptidões, tornando-se cada vez mais consciente e habilidoso.
        `,
        genre: ['Economics', 'Financial education', 'Investments', 'Self-Help', 'Classics', 'Favorite'],
        img: 'O_homem_mais_rico_da_Babilonia.png',
        pdf: 'O_homem_mais_rico_da_Babilonia.pdf',
        rate: '10',
        author: 'George S Clason'
    },
    {
        name: 'Do Mil ao Milhão',
        desc: `
        No livro “Do mil ao milhão”, Thiago Nigro demonstra quais são os três pilares para atingir a prosperidade financeira. O autor realizou diversos estudos e atendeu vários clientes até chegar nesses conceitos. Nigro é criador da plataforma “O Primo Rico” e ensina aos leitores os três pilares para a independência financeira. São eles: gastar bem, investir melhor e ganhar mais. 
        
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
        
        Os dois não se conhecem, mas, por motivos diferentes, estão à procura de um amigo com quem compartilhar os últimos momentos, uma conexão verdadeira que ajude a diminuir um pouco a angústia e a solidão que sentem. Por sorte, existe um aplicativo para isso, e é graças a ele que Rufus e Mateo vão se encontrar para uma última grande aventura: viver uma vida inteira em um único dia.
        
        Uma história sensível e emocionante, Os dois morrem no final nos lembra o que significa estar vivo. Com seu olhar único, Adam Silvera mostra que cada segundo importa, e mesmo que não haja vida sem morte, nem amor sem perda, tudo pode mudar em 24 horas.
        `,
        genre: ['Romance', 'Fiction', 'Suspense', 'Young Adult', 'Queer', 'Fantasy'],
        img: 'Os_Dois_Morrem_No_Final.png',
        pdf: 'Os_Dois_Morrem_No_Final.pdf',
        rate: '8',
        author: 'Adam Silvera '
    },
    {
        name: 'Percy Jackson - O Ladrão de Raios - Vol1',
        desc: `
        E se os deuses do Olimpo estivessem vivos no século XXI? E se eles ainda se apaixonassem por mortais e gerassem filhos heróis? Segundo a lenda da Antiguidade, a maioria desses semideuses dificilmente passa da adolescência. Poucos conseguem descobrir sua identidade. 
        
        Percy Jackson é filho de um deus. Ele está prestes a ser expulso do colégio... De novo. Mas, aos doze anos, esse é apenas mais um de seus problemas: além do transtorno do déficit de atenção e da dislexia, parece que, ultimamente, criaturas fantásticas e deuses do Olimpo saltam dos livros de mitologia diretamente para a realidade. E ao que tudo indica estão aborrecidos. O raio-mestre de Zeus foi roubado, e é Percy quem deve resgatá-lo. 
        
        Para restaurar a paz no Olimpo, ele e seus amigos heróis precisarão fazer mais que capturar o verdadeiro ladrão: Percy terá de encarar o pai, resolver o enigma do Oráculo e desvendar uma traição mais ameaçadora que a fúria dos deuses.
        `,
        genre: ['Adventure', 'Fantasy', 'Mythology'],
        img: '1-Percy_Jackson_e_o_ladrão_de_raios.png',
        pdf: '1-Percy_Jackson_e_o_ladrão_de_raios.pdf',
        rate: '8',
        author: 'Rick Riordan'
    },
    {
        name: 'Percy Jackson - O Mar de Monstros - Vol2',
        desc: `
        O ano de Percy Jackson foi surpreendentemente calmo. Nenhum monstro colocou os pés em sua escola, não teve acidentes estranhos e nenhuma briga em sala de aula. Mas quando um inocente jogo de queimada entre ele e seus colegas torna-se uma disputa mortal contra uma tenebrosa gangue de gigantes canibais, as coisas começam a ficar feias. A inesperada chegada de Annabeth traz outras más notícias: as fronteiras mágicas que protegem o Acampamento Meio-Sangue foram envenenadas por um inimigo misterioso e, a menos que um antídoto seja encontrado, o único porto seguro dos semideuses será destruído.
        
        Percy e seus amigos precisam se aventurar no Mar de Monstros para buscar o único artefato capaz de salvar o acampamento. Antes, porém, nosso herói entrará em confronto com a verdadeira natureza de seu amigo Tyson - algo que o fará questionar se ser filho de Poseidon é uma honra ou uma terrível maldição.
        `,
        genre: ['Adventure', 'Fantasy', 'Mythology'],
        img: '2-Percy_Jackson_o_mar_de_monstros.png',
        pdf: '2-Percy_Jackson_o_mar_de_monstros.pdf',
        rate: '6',
        author: 'Rick Riordan'
    },
    {
        name: 'Percy Jackson - A Maldição do Titã - Vol3',
        desc: `
        Em dezembro, seis meses após os acontecimentos de O Mar de Monstros, Percy Jackson, Thalia Grace e Annabeth Chase vão até a escola de Westover Hall para encontrar Grover Underwood: o sátiro parece ter encontrado dois semideuses muito poderosos, os irmãos Nico e Bianca di Angelo. Thalia demonstra sua habilidade em manipular a Névoa e tenta convencer professor e vice-diretora de que os três estudam na escola. A professora é facilmente enganada, mas o vice-diretor, que na verdade é uma Manticora disfarçada, não foi iludido. Os três então se juntam a Grover durante o baile da escola.
        
        Grover logo informa os três meios-sangues que Dr. Espinheiro, o vice-diretor da escola é um monstro, e desconfia da identidade dos dois semideuses encontrados. Thalia arquiteta um plano para distrair o Dr. Espinheiro; entretanto, o plano não sai como planejado: eles são separados pela multidão do baile e Percy é forçado a seguir sozinho o monstro, que levara consigo as duas crianças.
        
        Quando se aproxima de Bianca e Nico, Dr. Espinheiro arremessa um dardo que raspa o ombro de Percy, que percebe também o veneno que adentrara seu corpo. Muito fraco para lutar, o filho de Poseidon escuta enquanto a Manticora fala sobre seus planos. Os irmãos estão apavorados, e Percy tenta tranquilizá-los. A Manticora leva os três até um penhasco enquanto espera seus aliados coletá-los. Percy tenta de todo jeito enviar a Grover uma mensagem por meio da conexão empática que possui com o sátiro, que funciona, e logo Grover, Thalia e Annabeth aparecem, momento em que Dr. Espinheiro revela sua verdadeira forma.
        
        De repente, algumas flechas prateadas passam por Percy e atingem a Manticora, que ataca em retaliação com seus espinhos, quando mais flechas prateadas continuam a vir dos arbustos. As arqueiras saem de suas posições. Todas são garotas adolescentes usando roupas prateadas. Thalia as introduz como Caçadoras de Ártemis. Elas estão prestes a atirar, quando Dr. Espinheiro avança para Thalia e Percy, sabendo que ambos não possuem boas condições de batalha. Annabeth sobe na Manticora e apunhala com sua faca, mas as Caçadoras disparam suas flechas, e monstro cai do penhasco, levando junto a filha de Atena, que deixa para trás seu boné dos Yankees.
        
        Ártemis logo aparece e ordena que as Caçadoras montem acampamento. Percy é convidado para uma conversa com a deusa, que aparece na forma de uma garota com mais ou menos doze anos de idade. Ela pede a Percy o que exatamente a Manticora falara e conclui que tempos perigosos estão por vir. Ela decide caçar criaturas poderosas, uma que possui poder suficiente para destruir os deuses olimpianos. Antes de ir, Zoë Doce-Amarga, sua tenente, é colocada como responsável pelo grupo, que ficará no Acampamento Meio-Sangue até que Ártemis retorne. Durante sua curta passagem em Westover Hall, Bianca escolhe se juntar às Caçadoras, ganhando imortalidade e uma nova família, além de abandonar para sempre amor romântico, deixando Nico ao cuidado dos responsáveis pelo Acampamento Meio-Sangue
        
        O grupo, de carona com Apolo, o irmão de Ártemis, que os deixa dirigir sua Carruagem do Sol, com Thalia no volante. Após uma breve aventura com a filha de Zeus na pilotagem, eles finalmente alcançam o Acampamento Meio-Sangue, quase batendo no lago de canoagem.
        `,
        genre: ['Adventure', 'Fantasy', 'Mythology'],
        img: '3-Percy_Jackson_a_maldicao_do_tita.png',
        pdf: '3-Percy_Jackson_a_maldicao_do_tita.pdf',
        rate: '6',
        author: 'Rick Riordan'
    },
    {
        name: 'Percy Jackson - A Batalha do Labirinto - Vol4',
        desc: `
        O Monte Olimpo está em perigo. Cronos, o perverso titã que foi destronado e feito em pedaços pelos doze deuses olimpianos, prepara um retorno triunfal. 
        
        O primeiro passo de suas tropas será atacar e destruir o campo de treinamento dos heróis, filhos de deuses com mortais, que desde a Grécia Antiga combatem na linha de frente em defesa dos olimpianos.
        
        Para assegurar que o refúgio de semideuses, o Acampamento Meio-Sangue, não seja invadido, Percy Jackson, Tyson, Annabeth e Grover são destacados para uma importante missão: deter as forças de Cronos antes que se aproximem do acampamento, no emaranhado de corredores do temido Labirinto de Dédalo – um interminável universo subterrâneo que, a cada curva, revela as mais aterrorizantes surpresas
        `,
        genre: ['Adventure', 'Fantasy', 'Mythology', 'Favorite'],
        img: '4-Percy_Jackson_a_batalha_do_labirinto.png',
        pdf: '4-Percy_Jackson_a_batalha_do_labirinto.pdf',
        rate: '10',
        author: 'Rick Riordan'
    },
    {
        name: 'Percy Jackson - O Último Olimpiano - Vol5',
        desc: `
        O aguardado desfecho da premiada série de fantasia «Percy Jackson e os Olimpianos».<br/>
        Os mestiços passaram o ano inteiro a preparar para a batalha contra os Titãs, sabendo que a vitória é pouco provável. O exército de Cronos está mais forte do que nunca, e a cada novo deus ou mestiço que é recrutado, o poder de Cronos aumenta cada vez mais.
        
        Enquanto os Olimpianos lutam para travar o monstro Tifão, Cronos avança em direção à cidade de Nova Iorque, onde o Monte Olimpo quase não tem vigilância. Cabe agora a Percy Jackson e ao seu exército de jovens semideuses travarem o Senhor do Tempo.
        
        Neste muito aguardado quinto e último livro da série best-seller «Percy Jackson e os Heróis do Olimpo», a profecia envolve o dia do 16.º aniversário de Percy. E, enquanto luta por travar o fim da civilização ocidental nas ruas de Manhattan, Percy enfrenta a terrível sensação de que, na realidade, está a lutar contra o seu próprio destino.
        `,
        genre: ['Adventure', 'Fantasy', 'Mythology'],
        img: '5-Percy_Jackson_o_ultimo_olimpiano.png',
        pdf: '5-Percy_Jackson_o_ultimo_olimpiano.pdf',
        rate: '9',
        author: 'Rick Riordan'
    },
    {
        name: 'Percy Jackson - Os Olimpianos',
        desc: `
        Baseado nos romances escritos por Rick Riordan, a série acompanha o jovem Percy Jackson, um garoto que acaba de descobrir que é um semideus - metade humano, metade deus.
        
        Percy é filho de Poseidon, o deus dos mares e oceanos na mitologia grega, e precisa aprender a controlar suas habilidades especiais. Frequentando o Acampamento Meio-Sangue, um lugar para crianças e adolescentes como ele, Percy se aproxima de Grover e Annabeth. Grover é um sátiro sensível à natureza e as emoções dos outros, enquanto Annabeth é uma garota astuta e curiosa, características de sua mãe, a deusa Atena.
        
        Juntos, os melhores amigos embarcam em uma jornada para impedir que aconteça uma guerra entre os deuses do Olimpo. Pouco depois de descobrir sua verdadeira origem como semideus, Percy é acusado por Zeus, o deus do céu e também seu tio, de ter roubado o seu mais precioso raio. Percy e seus amigos devem viajar pelo país para encontrar o raio e restaurar a ordem no Olimpo.
        `,
        genre: ['Adventure', 'Fantasy', 'Mythology'],
        img: 'Percy_Jackson_e_os_Olimpianos.png',
        pdf: 'Percy_Jackson_e_os_Olimpianos.pdf',
        rate: '8',
        author: 'Rick Riordan'
    },
    {
        name: 'Percy Jackson - O Herói Perdido - Vol1',
        desc: `
        Esse é o primeiro volume da ordem de livros de Os Heróis do Olimpo de Rick Riordan.
        
        Jason Grace acorda em um ônibus repleto de jovens desconhecidos, ele não faz ideia do que faz ali, todo o seu passado tinha sido apagado de sua memória. Junto com ele estão Piper e Leo, sua namorada e melhor amigo, respectivamente. Ele está tentando entender o que está havendo quando algo os ataca e em meio a essa luta muitas coisas são reveladas, logo em seguida eles conhecem Annabeth, ela estava indo até lá na esperança de encontrar Percy, que está desaparecido.
        
        eva para um lugar chamado acampamento meio-sangue, onde eles conhecem novos campistas. Neste lugar todos dizem ser “semideuses”, que significa filhos de deuses com humanos, mais especificamente, deuses gregos. Tudo parece uma grande loucura e só piora quando o grande Oráculo revela uma profecia envolvendo sete semideuses e uma batalha final, onde tudo acabaria de um jeito ou de outro. Juntos eles embarcam em uma aventura atrás de respostas.
        `,
        genre: ['Adventure', 'Fantasy', 'Mythology'],
        img: '1-Percy_Jackson_o_heroi_perdido.png',
        pdf: '1-Percy_Jackson_o_heroi_perdido.pdf',
        rate: '8',
        author: 'Rick Riordan'
    },
    {
        name: 'Percy Jackson - O Filho de Netuno - Vol2',
        desc: `
        Esse é o segundo volume da ordem deos livros de Os Heróis do Olimpo de Rick Riordan.
        
        Percy Jackson acorda de um sono profundo não se lembrando de nada além de seu próprio nome e o nome de alguém que parece ser importante: Annabeth. Ao acordar, se depara com uma loba chamada Lupa. Ela conta que ele é um semideus e o ensina a usar uma espada, na verdade uma caneta/espada, sua inseparável contracorrente, da qual ele não se lembrava que existia.
        
        Ele acaba chegando em uma acampamento de semideuses, onde mais tarde ele descobre ser um acampamento romano. Lá ele conhece dois jovens campistas, seus novos amigos Hazel e Frank. Percy descobre mais tarde, que o deus da morte, Tânatos, está aprisionado e que Gaia está formando um exército para ajudá-la a se reerguer e refazer o mundo de acordo com suas regras. Juntos eles terão que enfrentar novos desafios e um lugar congelante os aguarda em sua primeira missão.
        `,
        genre: ['Adventure', 'Fantasy', 'Mythology'],
        img: '2-Percy_Jackson_O_Filho_de_Netuno.png',
        pdf: '2-Percy_Jackson_O_Filho_de_Netuno.pdf',
        rate: '7',
        author: 'Rick Riordan'
    },
    {
        name: 'Percy Jackson - A Marca de Atena - Vol3',
        desc: `
        Esse é o terceiro volume da ordem dos livros de Os Heróis do Olimpo de Rick Riordan.
        
        Annabeth se vê arrasada quando percebe que Percy desapareceu e ainda mais frustrada por não fazer ideia de onde ele poderia estar, já que sua última pista só tinha a levado para mais problemas. Junto de seus novos amigos Jason, Piper e Leo, ela navega a bordo do Argo II, um navio feito por Leo, rumo ao acampamento Júpiter, lá ela espera reencontrar Percy e talvez conhecer os outros semideuses da profecia dos sete.
        
        O problema é que ela não sabe nada sobre o acampamento Júpiter, e eles igualmente, não sabem nada sobre os viajantes desconhecidos. Os romanos se preparam para guerrear contra os novos inimigos, tudo precisa ser esclarecido depressa antes que algo muito ruim aconteça. Parecendo não ter problemas suficientes, a mãe de Annabeth, a deusa Atena, deixou um presente para ela com uma missão: Siga a marca de Atena, vingue-me. Só o tempo vai dizer como tudo vai acabar, ela só sabe de uma coisa, ela precisa agir rápido.
        `,
        genre: ['Adventure', 'Fantasy', 'Mythology'],
        img: '3-Percy_Jackson_a_marca_de_atena.png',
        pdf: '3-Percy_Jackson_a_marca_de_atena.pdf',
        rate: '7',
        author: 'Rick Riordan'
    },
    {
        name: 'Percy Jackson - A Casa de Hades - Vol4',
        desc: `
        Esse é o quarto volume da ordem dos livros de Os Heróis do Olimpo de Rick Riordan.
        
        As coisas não param de dar errado, dois de nossos heróis terão que enfrentar um lugar temido por todos, um lugar de morte, o perigoso Tártaro. Nessa eletrizante jornada, eles irão enfrentar novos perigos e precisarão de toda a ajuda possível para impedir Gaia de se libertar de sua prisão.
        
        O Tártaro não é lugar para os fracos, passando fome e sede, eles lutam para sobreviver, conhecendo novos personagens que serão essenciais no caminho. Enquanto isso, os outros semideuses tentam ajudar os amigos a sair, seguindo a profecia, que ainda lhes parece uma incógnita. Todos precisam agir rápido ou será tarde demais.
        `,
        genre: ['Adventure', 'Fantasy', 'Mythology'],
        img: '4-Percy_Jackson_a_casa_de_hades.png',
        pdf: '4-Percy_Jackson_a_casa_de_hades.pdf',
        rate: '6',
        author: 'Rick Riordan'
    },
    {
        name: 'Percy Jackson - O Sangue do Olimpo - Vol5',
        desc: `
        Esse é o quinto volume da ordem dos livros de Os Heróis do Olimpo de Rick Riordan.
        
        No último livro da saga, Percy, Annabeth, Jason, Piper, Leo, Hazel e Frank precisam da ajuda de todos para enfrentarem o pior inimigo que já tiveram, a poderosa mãe terra. Ao mesmo tempo em que uma guerra entre acampamentos se aproxima e apenas uma antiga estátua, Atena Partenos, é capaz de mudar o rumo da história, impedindo uma guerra devastadora entre dois mundos. Um antigo personagem é inserido na história, e com ele revelações que deixarão os leitores chocados.
        
        Nico di Angelo ganha destaque na história e um espaço de fala importante na narrativa, tendo sua perspectiva mostrada, ele insere novos segredos nunca revelados. Preso dentro de si, ele luta contra os próprios sentimentos a muito tempo reprimidos. Na batalha final, vemos todos reunidos, deuses, semideuses, monstros e outros seres míticos, personagens antigos e novos, todos juntos para combater o mal. Tudo está em jogo e muitos serão os sacrifícios para se alcançar a vitória. O último livro é um dos mais tensos, misturando alegria e tristeza, raiva e drama, o desfecho de toda uma era reunida em uma só narrativa. 
        `,
        genre: ['Adventure', 'Fantasy', 'Mythology'],
        img: '5-Percy_Jackson_o_sangue_do_olimpo.png',
        pdf: '5-Percy_Jackson_o_sangue_do_olimpo.pdf',
        rate: '8',
        author: 'Rick Riordan'
    },
    {
        name: 'Saldo Positivo: Como Ficar Sempre no Azul',
        desc: `
        Qualquer pessoa pode conseguir alcançar a independência financeira. Poucas são as pessoas que já não se viram, pelo menos uma vez na vida, angustiadas por não conseguirem fazer o salário durar até o fim do mês.
        
        Então, se parece quase impossível ficar no azul o mês inteiro, como sair das dívidas e conseguir independência financeira? Ninguém, ao nascer, vem rotulado para não ganhar dinheiro nem ficar rico. As oportunidades existem e estão aí para serem aproveitadas por todas as pessoas. Neste livro, você verá que mesmo sendo assalariado, é possível enriquecer apenas com a renda do trabalho.
        
        Você vai aprender a se organizar e planejar para ter sempre saldo positivo e a adotar atitudes que não comprometam o resultado de seus planos. O que você está esperando para começar a construir sua independência financeira?
        `,
        genre: ['Financial education', 'Economics', 'Self-Help'],
        img: 'Saldo_Positivo.jpg',
        rate: '6',
        author: 'José Mário Severino'
    },
    {
        name: 'A Psicologia Financeira',
        desc: `
        O sucesso financeiro tem menos a ver com a sua inteligência e muito mais a ver com o seu comportamento. E a forma como alguém se comporta é uma coisa difícil de se ensinar, mesmo para pessoas bastante inteligentes.
        
        A maneira como lidamos com o dinheiro ― finanças pessoais, investimentos, decisões de negócios ― costuma ser explicada como um campo puramente matemático, no qual dados e fórmulas nos dizem o que fazer. A verdade, porém, é que grandes decisões monetárias não são tomadas diante de uma planilha, mas durante jantares com a família e reuniões com os colegas de trabalho. Além disso, cada uma delas é um reflexo da história pessoal e das dificuldades enfrentadas pelo indivíduo que as tomou.
        
        Abordando a gestão financeira de maneira inédita, Morgan Housel apresenta casos de sucessos e fracassos de investidores que demonstram a importância do fator psicológico no gerenciamento das finanças, oferecendo aprendizados para administrar e fazer o dinheiro render em busca do grande objetivo de todos nós: ser feliz.
        
        <i>“[A psicologia Financeira] é uma leitura essencial para qualquer pessoa interessada em administrar melhor seu dinheiro.” ― James Clear, autor do best-seller Hábitos Atômicos</i>
        `,
        genre: ['Financial education', 'Economics', 'Investments'],
        img: 'A_Psicologia_Financeira.jpg',
        pdf: 'A_Psicologia_Financeira.pdf',
        rate: '9',
        author: 'Morgan Housel'
    },
    {
        name: 'Os Segredos da Mente Milionária',
        desc: `
        Se as suas finanças andam na corda bamba, talvez esteja na hora de você refletir sobre o que T. Harv Eker chama de "o seu modelo de dinheiro" – um conjunto de crenças que cada um de nós alimenta desde a infância e que molda o nosso destino financeiro, quase sempre nos levando para uma situação difícil.
        
        Nesse livro, Eker mostra como substituir uma mentalidade destrutiva – que você talvez nem perceba que tem – pelos "arquivos de riqueza", 17 modos de pensar e agir que distinguem os ricos das demais pessoas. Alguns desses princípios fundamentais são:
        
        • Ou você controla o seu dinheiro ou ele controlará você.
        
        • O hábito de administrar as finanças é mais importante do que a quantidade de dinheiro que você tem.
        
        • A sua motivação para enriquecer é crucial: se ela possui uma raiz negativa, como o medo, a raiva ou a necessidade de provar algo a si mesmo, o dinheiro nunca lhe trará felicidade.
        
        • O segredo do sucesso não é tentar evitar os problemas nem se livrar deles, mas crescer pessoalmente para se tornar maior do que qualquer adversidade.
        
        • Os gastos excessivos têm pouco a ver com o que você está comprando e tudo a ver com a falta de satisfação na sua vida.
        
        O autor também ensina um método eficiente de administrar o dinheiro. Você aprenderá a estabelecer sua remuneração pelos resultados que apresenta e não pelas horas que trabalha. Além disso, saberá como aumentar o seu patrimônio líquido – a verdadeira medida da riqueza.
        
        A ideia é fazer o seu dinheiro trabalhar para você tanto quanto você trabalha para ele. Para isso, é necessário poupar e investir em vez de gastar. "Enriquecer não diz respeito somente a ficar rico em termos financeiros", diz Eker. "É mais do que isso: trata-se da pessoa que você se torna para alcançar esse objetivo."
        `,
        genre: ['Economics', 'Financial education', 'Investments'],
        img: 'Os_Segredos_Da_Mente_Milionária.jpg',
        pdf: 'Os_Segredos_Da_Mente_Milionária.pdf',
        rate: '7',
        author: 'T. Harv Eker'
    },
    {
        name: 'Pai Rico, Pai Pobre',
        desc: `
        A escola prepara as crianças para o mundo real?  Essa é a primeira pergunta com a qual o leitor se depara neste livro.  O recado é ousado e direto: boa formação e notas altas não bastam para assegurar o sucesso de alguém. O mundo mudou; a maioria dos jovens tem cartão de crédito, antes mesmo de concluir os estudos, e nunca teve aula sobre dinheiro, investimentos, juros etc. Ou seja, eles vão para a escola, mas continuam financeiramente improficientes, despreparados para enfrentar um mundo que valoriza mais as despesas do que a poupança.
        
        Para o autor, o conselho mais perigoso que se pode dar a um jovem nos dias de hoje é: “Vá para a escola, tire notas altas e depois procure um trabalho seguro.”  O fato é que agora as regras são outras, e não existe mais emprego garantido para ninguém.  Pai Rico, Pai Pobre demonstra que a questão não é ser empregado ou empregador, mas ter o controle do próprio destino ou delegá-lo a alguém.  É essa a tese de Robert Kiyosaki neste livro substancial e visionário.  Para ele, a formação proporcionada pelo sistema educacional não prepara os jovens para o mundo que encontrarão depois de formados E como os pais podem ensinar aos filhos o que a escola relega? Essa é outra das muitas perguntas que o leitor encontra em Pai Rico, Pai Pobre. Nesse sentido, a proposta do autor é facilitar a tarefa dos pais. Quem entende de contabilidade deve esquecer seus conhecimentos acadêmicos, pois muitas das teorias expostas por Robert Kiyosaki contrariam os princípios contábeis comumente aceitos, e apresentam uma valiosa e moderna percepção do modo como se realizam os investimentos.
        
        A sociedade sofre mudanças radicais e, talvez, de proporções maiores do que as ocorridas em séculos passados. Não existe bola de cristal, mas algo é certo: a perspectiva global de transformações transcende nossa realidade imediata. Aconteça o que acontecer,
        só existem duas alternativas: segurança ou independência financeira. E o objetivo de Pai Rico, Pai Pobre é instruir o leitor e despertar sua inteligência financeira e a de seus filhos.
        
        <i>"A principal razão pela qual as pessoas têm problemas financeiros é que passaram anos na escola, mas não aprenderam nada sobre dinheiro. O resultado é que elas aprendem a trabalhar por dinheiro… mas nunca a fazê-lo trabalhar para elas."- Robert Kiyosaki.</i>
        `,
        genre: ['Economics', 'Financial education', 'Investments', 'Classics'],
        img: 'Pai_Rico_Pai_Pobre.jpg',
        pdf: 'Pai_Rico_Pai_Pobre.pdf',
        rate: '7',
        author: ' Robert T. Kiyosaki'
    },
    {
        name: 'O Desafio de Ferro - Vol1',
        desc: `
        A maioria dos garotos faria qualquer coisa para passar no Desafio de Ferro. Callum Hunt não é um deles. Ele quer falhar.
        
        Durante toda a sua vida, Call foi alertado pelo pai para ficar longe da magia. Se for aprovado no Desafio de Ferro e admitido no Magisterium, ele tem certeza de que isso só irá lhe trazer coisas ruins.
        
        Assim, ele se esforça ao máximo para fazer o seu pior... e falha em seu plano de falhar.
        
        Agora, o Magisterium espera por ele, um lugar ao mesmo tempo incrível e sinistro, com laços sombrios que unem o passado de Call e um caminho tortuoso até seu futuro.
        
        O Desafio de Ferro é apenas o começo. A maior das provas ainda está por vir...
        `,
        genre: ['Fantasy', 'Adventure', 'Magic', 'Mystery', 'Fiction', 'Favorite'],
        img: 'Magisterium-O_Desafio_de_Ferro.png',
        pdf: 'Magisterium-O_Desafio_de_Ferro.pdf',
        rate: '10',
        author: 'Holly Black & Cassandra Clare'
    },
    {
        name: 'A Luva de Cobre - Vol2',
        desc: `
        Os estudantes do Magisterium estão aparentemente seguros. Sob os olhos observadores dos mestres, eles são ensinados a usar magia para levar a ordem a um mundo caótico.
        
        Mas agora o caos está revidando.
        
        Call, Tamara e Aaron deveriam estar preocupados apenas com as tarefas de jovens aprendizes de mago. Em vez disso, depois da assustadora morte de um de seus colegas de classe, eles devem rastrear um terrível assassino... e arriscar suas próprias vidas no processo.
        
        Como Call, Tamara e Aaron descobrem, a magia somente é tão boa quanto a pessoa que a usa. Nas mãos erradas, é capaz de causar um mal imensurável...
        
        Neste terceiro livro da saga Magisterium, as autoras best-sellers Holly Black e Cassandra Clare nos presenteiam com uma escola em que qualquer coisa – boa ou ruim – pode acontecer, e o único jeito de desvendar a verdade é arriscando tudo para encontrá-la.
        `,
        genre: ['Fantasy', 'Adventure', 'Magic', 'Mystery', 'Fiction'],
        img: 'Magisterium-A_Luva_de_Cobre.png',
        pdf: 'Magisterium-A_Luva_de_Cobre.pdf',
        rate: '9',
        author: 'Holly Black & Cassandra Clare'
    },
    {
        name: 'A Chave de Bronze - Vol3',
        desc: `
        Os estudantes do Magisterium estão aparentemente seguros. Sob os olhos observadores dos mestres, eles são ensinados a usar magia para levar a ordem a um mundo caótico.
        
        Mas agora o caos está revidando.
        
        Call, Tamara e Aaron deveriam estar preocupados apenas com as tarefas de jovens aprendizes de mago. Em vez disso, depois da assustadora morte de um de seus colegas de classe, eles devem rastrear um terrível assassino... e arriscar suas próprias vidas no processo.
        
        Como Call, Tamara e Aaron descobrem, a magia somente é tão boa quanto a pessoa que a usa. Nas mãos erradas, é capaz de causar um mal imensurável...
        
        Neste terceiro livro da saga Magisterium, as autoras best-sellers Holly Black e Cassandra Clare nos presenteiam com uma escola em que qualquer coisa – boa ou ruim – pode acontecer, e o único jeito de desvendar a verdade é arriscando tudo para encontrá-la.
        `,
        genre: ['Fantasy', 'Adventure', 'Magic', 'Mystery', 'Fiction'],
        img: 'Magisterium-A_Chave_de_Bronze.png',
        pdf: 'Magisterium-A_Chave_de_Bronze.pdf',
        rate: '9',
        author: 'Holly Black & Cassandra Clare'
    },
    {
        name: 'A Máscara de Prata - Vol4',
        desc: `
        Há uma geração, Constantine Madden quase conseguiu o que nenhum outro mago jamais ousou sequer tentar: trazer os mortos de volta à vida. Mas o "quase" não teve um peso tão ruim. Afinal, ele foi capaz de se manter vivo, dentro de uma criança chamada Callum Hunt.
        
        Agora Call é um dos mais temidos estudantes da história do Magisterium, conhecido como o Inimigo da Morte, o Suserano do Mal, considerado culpado pela morte do melhor amigo e estopim de uma constante ameaça de guerra. Como resultado, o menino foi aprisionado e interrogado.
        
        Todos querem saber as intenções em sua alma. Os planos de Constantine. Mas Call não faz ideia. E quando ele é libertado da prisão por aliados improváveis, interessados em seu poder sobre a magia do caos, ele se vê envolto em uma trama de mentiras e intrigas, e precisa decidir o que fazer com o próprio poder.
        `,
        genre: ['Fantasy', 'Adventure', 'Magic', 'Mystery', 'Fiction'],
        img: 'Magisterium-A_Máscara_de_Prata.png',
        pdf: 'Magisterium-A_Máscara_de_Prata.pdf',
        rate: '9',
        author: 'Holly Black & Cassandra Clare'
    },
    {
        name: 'A Torre de Ouro - Vol5',
        desc: `
        O volume final, emocionante desta extraordinária série das autores best-sellers Holly Black e Cassandra Clare.
        
        Uma geração atrás, o poderoso mago Constantine Madden chegou perto de alcançar o que nenhum mago jamais alcançou: a capacidade de trazer de volta os mortos. Ele não teve sucesso... mas ele encontrou uma maneira de se manter vivo, dentro de uma criança chamada Callum Hunt.
        
        Diante do que ele é, Callum lutou contra o caos e o mal ao longo de quatro anos de treinamento mágico no Magisterium, derrotando os exércitos do caos em uma batalha épica.
        
        Isso veio com um custo.
        
        Agora, triunfante e de coração partido, Callum Hunt quase teve o suficiente, e está pronto para completar seu treinamento. Mas o mal que Callum enfrentou não desistiu ainda...
        `,
        genre: ['Fantasy', 'Adventure', 'Magic', 'Mystery', 'Fiction'],
        img: 'Magisterium-A_Torre_de_Ouro.png',
        pdf: 'Magisterium-A_Torre_de_Ouro.pdf',
        rate: '9',
        author: 'Holly Black & Cassandra Clare'
    },
    {
        name: 'Diário de um Banana',
        desc: `
        Não é fácil ser criança. E ninguém sabe disso melhor do que Greg Heffley, que se vê mergulhado no ensino fundamental, onde fracotes subdesenvolvidos dividem os corredores com garotos mais altos, mais malvados e que já se barbeiam. Em Diário de um Banana, Greg nos conta as desventuras de sua vida escolar.
        
        Em busca de um pouco de popularidade (e também de um pouco de proteção), o garoto se envolve em uma série de situações que procura resolver de uma maneira muito particular. No primeiro livro da coleção, o autor e ilustrador Jeff Kinney nos apresenta um herói improvável e encantador. Um garoto comum às voltas com os desafios da puberdade
        `,
        genre: ['Comedy', 'Humor', 'Fiction'],
        img: 'Diario_de_um_banana.png',
        rate: '7',
        author: 'Jeff Kinney'
    },
    {
        name: 'A Arte da Guerra',
        desc: `
        “Se você conhece o inimigo e conhece a si mesmo, não precisa temer o resultado de cem batalhas. Se você se conhece, mas não conhece o inimigo, para cada vitória grande, sofrerá também uma derrota. Se você não conhece nem o inimigo e nem a si mesmo, perderá todas as batalhas…”
        
        A arte da guerra é sem dúvida a bíblia da estratégia, sendo utilizada amplamente no mundo dos negócios, conquistando pessoas e mercados. Na paz, preparar-se para a guerra; na guerra, preparar-se para a paz. A arte da guerra é de importância vital para o Estado. É uma questão de vida ou morte, um caminho tanto para a segurança como para a ruína. Assim, em nenhuma circunstância deve ser negligenciada.
        
        Desta maneira começa o notável documento chinês, escrito há cerca de 2500 anos, no qual é registrada a sabedoria de Sun Tzu, filósofo que se tornou general. Os conselhos de Sun Tzu podem ser usados de diferentes formas e para diversos campos do conhecimento humano. São muito úteis, principalmente, para jovens executivos e empreendedores, assim como para chefes de Estado e comandantes.
        
        Em A arte da guerra, são discutidos todos os aspectos da guerra – táticos, hierárquicos e humanos, entre outros – numa linguagem tão poética quanto didática. James Clavell, autor de prestígio mundial, assina o prefácio, onde cita alguns preceitos do livro e os contextualiza em nosso cotidiano. Uma obra para ser lida não apenas por todo comandante ou oficial, mas por qualquer pessoa interessada na paz. Não surpreende que o livro seja citado em filmes e constantemente aplicado para solucionar os mais recentes conflitos do nosso dia-a-dia.
        `,
        genre: ['Military Strategy', 'Philosophy', 'Classics'],
        img: 'A_arte_da_guerra.png',
        pdf: 'A_arte_da_guerra.pdf',
        rate: '8',
        author: 'Sun Tzu'
    },
    {
        name: 'Warcraft: Livro do Filme Oficial',
        desc: `
        A novelização do aguardado filme de ação e fantasia Warcraft Há muito Azeroth está em paz. Após expulsar os trolls, com a ajuda de Medivh, Guardião do reino, humanos vivem em paz com os vizinhos elfos e anões. Mas um novo mal desponta no horizonte, e a guerra ameaça engolfar mais uma vez os domínios do justo rei Llane. Uma raça temerária de invasores, os guerreiros orcs, insuflados pelo feiticeiro Guldan e liderados pelo monstruoso Mão Negra, fogem de seu mundo agonizante em busca de caça e oportunidades.
        
        Com a ajuda da vileza, a mais cruel das magias, Guldan criou um portal capaz de transportar sua Horda até Azeroth. A maré verde, de orcs dominados por esse mal, toma de assalto as terras humanas. Morte e destruição ameaçam destruir a tudo e a todos. Então, de lados opostos, dois heróis surgem, em uma rota de colisão que decidirá o destino de sua família, seu povo e seu lar. Durotan, o líder honrado do clã Lobo do Gelo, quer apenas uma chance para seu filho recém-nascido. Lothar, o Leão de Azeroth, busca redenção. E assim começa uma espetacular saga sobre poder e sacrifício, na qual a guerra tem muitas facetas e todos lutam por algo.
        `,
        genre: ['Adventure', 'Fantasy'],
        img: 'warcraft_livro_do_filme.png',
        rate: '7',
        author: 'Ducan Jones'
    },
    {
        name: 'O Príncipe - Nicolau Maquiavel',
        desc: `
        Nesta obra, que é um clássico sobre pensamento político, o grande escritor Maquiavel mostra como funciona a ciência política.
        
        Discorre sobre os diferentes tipos de Estado e ensina como um príncipe pode conquistar e manter o domínio sobre um Estado.
        
        Trata daquilo que é o seu objetivo principal: as virtudes que o governante deve adquirir e os vícios que deve evitar para manter-se no poder.
        
        Maquiavel mostra em O Príncipe que a moralidade e a ciência política são separadas.
        
        Ele aponta a contradição entre governar um Estado e, ao mesmo tempo, levar uma vida moral.
        `,
        genre: ['Political', 'Classics'],
        img: 'o_principe_nicolau_maquiavel.png',
        pdf: 'o_principe_nicolau_maquiavel.pdf',
        rate: '7',
        author: 'Nicolau Maquiavel'
    },
    {
        name: 'O Menino do Pijama Listrado',
        desc: `
        Bruno tem nove anos e não sabe nada sobre o Holocausto e a Solução Final contra os judeus. Também não faz idéia que seu país está em guerra com boa parte da Europa, e muito menos que sua família está envolvida no conflito. Na verdade, Bruno sabe apenas que foi obrigado a abandonar a espaçosa casa em que vivia em Berlim e a mudar-se para uma região desolada, onde ele não tem ninguém para brincar nem nada para fazer. Da janela do quarto, Bruno pode ver uma cerca, e para além dela centenas de pessoas de pijama, que sempre o deixam com frio na barriga.
        
        Em uma de suas andanças Bruno conhece Shmuel, um garoto do outro lado da cerca que curiosamente nasceu no mesmo dia que ele. Conforme a amizade dos dois se intensifica, Bruno vai aos poucos tentando elucidar o mistério que ronda as atividades de seu pai. O menino do pijama listrado é uma fábula sobre amizade em tempos de guerra, e sobre o que acontece quando a inocência é colocada diante de um monstro terrível e inimaginável.
        `,
        genre: ['Historical Fiction', 'Drama', 'Young Adult', 'War'],
        img: 'O_menino_do_pijama_listrado.png',
        pdf: 'O_menino_do_pijama_listrado.pdf',
        rate: '8',
        author: 'John Boyne'
    },
    {
        name: 'Ratobúrguer',
        desc: `
        Em Ratobúrguer, a protagonista Zoe tem uma vida triste: não tem amigos, não conta sequer com a simpatia da madrasta, e seu único companheiro, seu hamster de estimação, morreu. O pai dela está desempregado e passa o dia no bar. E, para piorar, ela também enfrenta uma rotina difícil na escola, pois o hobby favorito da valentona, Tina Trotts, é atormentá-la.
        
        Ao encontrar embaixo de sua cama um filhote de rato muito inteligente, Armitage, Zoe acredita que sua vida vai melhorar. Ela resolve adestrá-lo, ensina truques incríveis a ele e sonha em torná-lo um grande dançarino de break. Um novo vilão, porém, chega à cidade: Burt, um assustador vendedor de hambúrgueres que usa carne de rato para cozinhar. Armitage, então, torna-se seu alvo, e agora cabe a Zoe salvar seu melhor amigo.
        `,
        genre: ['Humor', 'Adventure', 'Fantasy'],
        img: 'ratoburguer.png',
        rate: '7',
        author: 'David Walliams'
    },
    {
        name: 'O Milagre da Manhã',
        desc: `
        Conheça o método simples e eficaz que vai proporcionar a vida dos sonhos — antes das 8 horas da manhã! Hal Elrod explica os benefícios de acordar cedo e desenvolver todo o nosso potencial e as nossas habilidades. 
        
        O milagre da manhã permite que o leitor alcance níveis de sucesso jamais imaginados, tanto na vida pessoal quanto profissional. A mudança de hábitos e a nova rotina matinal proposta por Hal vai proporcionar melhorias significativas na saúde, na felicidade, nos relacionamentos, nas finanças, na espiritualidade ou quaisquer outras áreas que necessitem ser aprimoradas.
        `,
        genre: ['Self-Help', 'Motivation'],
        img: 'O_Milagre_da_Manhã.png',
        pdf: 'O_Milagre_da_Manhã.pdf',
        rate: '8',
        author: 'Hal Elrod'
    },
    {
        name: 'O Pequeno Príncipe',
        desc: `
        Nesta história que marcou gerações de leitores em todo o mundo, um piloto cai com seu avião no deserto do Saara e encontra um pequeno príncipe, que o leva a uma aventura filosófica e poética através de planetas que encerram a solidão humana.
        
        livro para todos os públicos, O pequeno príncipe é uma obra atemporal, com metáforas pertinentes e aprendizados sobre afeto, sonhos, esperança e tudo aquilo que é invisível aos olhos. 
        `,
        genre: ['Fable', 'Fantasy', 'Philosophy', 'Classics'],
        img: 'O_pequeno_principe.png',
        pdf: 'O_pequeno_principe.pdf',
        rate: '7',
        author: 'Antoine de Saint-Exupéry'
    },
]

/*
Template
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
*/