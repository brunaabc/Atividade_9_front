const Blogs = () => {
    return (
      <>
    <h1 className="tituloBlog">Blog dos Autores</h1>
    <div>
      <h1>Seja bem-vindo!</h1>
      <h3>Aqui estão os blogs dos escritores, fique a vontade para explorar as histórias de sua preferência.</h3>
      <h2 className="nomeAutor">Lucy Wright</h2>
      <h3>Descrição da autora:</h3>
      <p>É uma escritora britânica de romance e fantasia, capaz de tecer mundos mágicos e enredos cativantes com uma habilidade única.</p>
      <p>Nascida em um pequeno vilarejo da Inglaterra, ela cresceu rodeada por contos de fadas e lendas antigas, o que alimentou sua imaginação fértil. </p>
      <p>Suas histórias exploram temas de amor, coragem e autodescoberta, mergulhando os leitores em aventuras emocionantes. Com uma prosa rica e poética, ela dá vida a personagens memoráveis, que enfrentam desafios em reinos encantados e realidades paralelas. </p>
      <p>A paixão pela literatura e a imaginação desbordante a impulsionam a criar narrativas que encantam e inspiram, deixando uma marca indelével na mente de quem as lê.</p>
      <a href="#" onClick={(e) => e.preventDefault()}>
        Link do blog
      </a>
      <h2 className="nomeAutor2">Edoardo Ricci</h2>
      <h3>Descrição do autor:</h3>
      <p>É um autor italiano renomado por seus thrillers psicológicos envolventes e intrigantes.</p>
      <p>Nascido em Florença, ele cresceu cercado por arte e história, elementos que permeiam suas narrativas densas e bem construídas.</p>
      <p>Suas histórias frequentemente exploram a complexidade da mente humana, mergulhando em temas como a culpa, o arrependimento e os limites da moralidade.</p>
      <p>Cada livro é uma verdadeira montanha-russa emocional, onde personagens multifacetados se debatem com dilemas éticos enquanto desvendam segredos obscuros.</p>
      <a href="#" onClick={(e) => e.preventDefault()}>
        Link do blog
      </a>
      <h2 className="nomeAutor3">Margaux Durand</h2>
      <h3>Descrição da autora:</h3>
      <p>É uma autora francesa cujos romances são verdadeiros hinos ao amor e à vida.</p>
      <p>Nascida em Paris, sua paixão pela literatura floresceu entre os cafés charmosos e as ruas históricas da cidade.</p>
      <p>Com um estilo elegante e poético, Margaux tem o talento de capturar a essência das emoções humanas, transportando seus leitores para histórias que celebram tanto os altos quanto os baixos do amor.</p>
      <p>Cada narrativa é adornada com descrições vívidas que evocam o cenário romântico da França, desde os campos de lavanda da Provença até os vibrantes mercados de Paris.</p>
      <a href="#" onClick={(e) => e.preventDefault()}>
        Link do blog
      </a>
      <h2 className="nomeAutor4">Francisco Pessoa</h2>
      <h3>Descrição do autor:</h3>
      <p>É um autor nordestino que se destaca no cenário da poesia brasileira. </p>
      <p>Nascido em Campina Grande, Paraíba, ele carrega em suas palavras a riqueza e a musicalidade da cultura nordestina. </p>
      <p>Desde jovem, Francisco se deixou inspirar pelas tradições, folguedos e a beleza do sertão, traduzindo essas experiências em versos que ecoam a alma do seu povo.</p>
      <p>Com uma linguagem repleta de ritmos e sonoridades típicas, seus poemas abordam temas como a saudade, o amor, a luta e a resistência, sempre imbuídos de um forte sentido de pertencimento.</p>
      <a href="#" onClick={(e) => e.preventDefault()}>
        Link do blog
      </a>
    </div>
    </>
    )
  };
  
  export default Blogs;