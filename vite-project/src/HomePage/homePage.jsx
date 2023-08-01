import "./HomePage.css";

const HomePage = () => {
  return (
    // O componente principal é envolvido em uma div com a classe
    <div className="container-HomePage"> 
    {/* imagem no topo da página*/}
      <div className="background-container">
        {/* imagem no topo da página e configurações */}
        <div className="content">
          <h1 className="site-name">MEDIC+</h1>
          <p className="sub-title">Gestão de medicamentos</p>
          <div><button className="cadastro-button1">Cadastre-se</button>
              </div>
          </div>
        </div>
        {/* Seção da página completa */}
        <div className="main-content">
           {/* Seção da página um */}
        <div className="page-one">
              <div>
            <h2>Uma plataforma que você pode contar.</h2>
            <p>
              Desenvolvido para facilitar o controle de estoque e disponibilidade de
              medicamentos em postos de saúde. Proporcionando uma gestão eficiente e
              transparente.
            </p>
              </div>
            {/* Seção de avaliação */}
          <div id="Avaliation"> 
          <div className="rectangleCliente">
          <img src="/src/img/logodrsaude.png" alt="LogoCliente1" width="54" height="55" />
          <div className="stars">  {/* ícones das estrelas de avaliação */}
            <img src="/src/img/estrela.png" alt="Estrela preenchida" width="21" height="21" />
            <img src="/src/img/estrela.png" alt="Estrela preenchida" width="21" height="21" />
            <img src="/src/img/estrela.png" alt="Estrela preenchida" width="21" height="21" />
            <img src="src/img/meia estrela.png" alt="Estrela Metade" width="21" height="21" />
            <img src="src/img/estrela vazia.png" alt="Estrela vazia" width="21" height="21" />
          </div>
          <p>Dr. Saúde</p>
          <p>86%</p>
          <p>
            Em fase de implementação, já estamos obtendo resultados satisfatórios,
            evitando longas esperas dos pacientes e insatisfações.
          </p>
          </div>
          <div className="rectangleCliente">
          <img src="src/img/logomedac.jpg" alt="LogoCliente2" width="54" height="55" />
          <div className="stars"> {/* ícones das estrelas de avaliação */}
            <img src="/src/img/estrela.png" alt="Estrela preenchida" width="21" height="21" />
            <img src="/src/img/estrela.png" alt="Estrela preenchida" width="21" height="21" />
            <img src="/src/img/estrela.png" alt="Estrela preenchida" width="21" height="21" />
            <img src="/src/img/estrela.png" alt="Estrela preenchida" width="21" height="21" />
            <img src="src/img/estrela vazia.png" alt="Estrela vazia" width="21" height="21" />
          </div>
          <p>Medac</p>
          <p>92%</p>
          <p>
            Resultados satisfatórios, evita retrabalho e auxilia uma melhor comunicação entre o posto e o paciente.
          </p>
          </div>
          </div>
        <h2>Gestão inovadora que você pode confiar.</h2>
        {/* Seção de retangulos com destaques da plataforma */}
          <div className="rectangle-container">
            <div className="rectangle1">
              <img src="src/img/mao-segurando-a-caixa.png" alt="bloco1" width="60" height="60" />
              <p>Controle seu estoque de medicamentos na palma das mãos.</p>
            </div>
            <div className="rectangle1">
              <img src="src/img/equipe-medica.png" alt="bloco2" width="60" height="60" />
              <p>Agilidade no atendimento dos pacientes.</p>
            </div>
            <div className="rectangle1">
              <img src="src/img/wi-fi.png" alt="bloco3" width="60" height="60" />
              <p>Experiência 100% digital, fácil de usar.</p>
            </div>
          </div>
        </div>
        {/* Seção página dois */}
        <div className="page-two">
          <img src="src/img/logoMedic.png" alt="LogoCliente1" width="200" height="200" />
          <h2>Bem-vindo ao Medic+</h2>
            <div className="rectanglePage2">
                <p>
                Somos uma plataforma dedicada à gestão eficiente de medicamentos,
                buscando superar dificuldades no controle de estoque em postos de saúde.
                Priorizamos o acesso facilitado a medicamentos essenciais, promovendo uma
                vida saudável para a população. 
                Nosso projeto visa melhorar o acesso da população a medicamentos
                essenciais, enfrentando desafios na gestão de estoques em postos de saúde
                para evitar escassez e desperdício de recursos valiosos.
                Buscamos alinhar nossos esforços com a ODS 3 da ONU, que visa assegurar uma
                vida saudável e promover o bem-estar para todos. Ao otimizar recursos de
                medicamentos e o controle de estoques nos postos de saúde, colaboramos para
                alcançar essa meta global. 
                No Medic+, nosso compromisso é com a excelência em gestão de medicamentos e
                o bem-estar da comunidade que atendemos. Ansiamos colaborar com postos de
                saúde e outras instituições para criar um impacto positivo e duradouro na
                saúde pública.
                Junte-se a nós nesta jornada rumo a uma gestão mais eficiente de
                medicamentos, melhorando a saúde e o bem-estar de todos. Contamos com o
                apoio de cada um para alcançarmos nosso objetivo de proporcionar uma vida
                mais saudável e plena à população local.
              </p>
              <div>
              <button className="cadastro-button">Junte-se a nós</button>
              </div>
              </div>
        </div>
        {/* Seção da página três */}
        <div className="page-tree">
              <div className="container-Localiza">
                <h2>Onde nos encontrar</h2>
                {/* Seção de localização */}
                <div className="localization-rectangle">
                  <p>Nossa Localização</p>
                    </div>
                    {/* Iframe de localização e configuração*/}
                    <iframe
                      title="Google Maps"
                      width="100%"
                      height="400"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.993888341423!2d-34.88891218466581!3d-8.059983494191126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab18c0dab30523%3A0x1fe82e8387d2a09a!2sR.%20Gerv%C3%A1sio%20Pires%2C%20234%20-%20Santo%20Amaro%2C%20Recife%20-%20PE%2C%2050060-090!5e0!3m2!1sen!2sbr!4v1633746560808!5m2!1sen!2sbr"
                      allowFullScreen >
                      </iframe>
                  </div>
                  <div className="container-Localiza">
                  </div>
                  {/* Seção da página quatro com config. do linkedin*/}
              <div className="linkedin-rectangle">
                <div className="linkedin-person">
                  <a href="https://www.linkedin.com/in/layza-nicolle-6911a0197">
                    <div className="linkedin-person-image"
                      style={{
                        backgroundImage: 'url(src/img/fotoLayza.jpeg)',
                        backgroundSize: 'cover'}}>
                      </div>
                          </a>
                          <p>Layza Nicolle</p>
                          <a href="https://www.linkedin.com/in/layza-nicolle-6911a0197">LinkedIn</a>
                        </div>
              <div className="linkedin-person">
                <a href="https://www.linkedin.com/in/nataliamffarias/">
                  <div className="linkedin-person-image"
                    style={{
                      backgroundImage: 'url(src/img/fotonatalia.jpeg)',
                      backgroundSize: 'cover'}}>
                      </div>
                        </a>
                          <p>Natália Farias</p>
                          <a href="https://www.linkedin.com/in/nataliamffarias/">LinkedIn</a>
                        </div>
              <div className="linkedin-person">
                <a href="https://www.linkedin.com/in/pedro-vitor-86a517231/">
                  <div className="linkedin-person-image"
                    style={{
                      backgroundImage: 'url(src/img/pedrofoto.jpeg)',
                      backgroundSize: 'cover'}}>
                    </div>
                        </a>
                        <p>Pedro Vitor</p>
                        <a href="https://www.linkedin.com/in/pedro-vitor-86a517231/">LinkedIn</a>
                      </div>
              <div className="linkedin-person">
                <a href="https://www.linkedin.com/in/tatiane-clemente-7040ba235/">
                  <div className="linkedin-person-image"
                      style={{
                        backgroundImage: 'url(src/img/fototati.jpeg)',
                        backgroundSize: 'cover'}}>
                      </div>
                        </a>
                        <p>Tatiane Clemente</p>
                        <a href="https://www.linkedin.com/in/tatiane-clemente-7040ba235/">LinkedIn</a>
                      </div>
                      </div>            
        </div>
        {/* Seção da página quatro */}
        <div className="page-four">
  <h2 className="contact-title">Entre em Contato Conosco</h2>
  <div className="contato-container">
    <div className="retangulo-direito">
      <div className="contato-image">
        <img src="src/img/contatos conosco.png" alt="Imagem de contato" />
      </div>
    </div>
    <div className="retangulo-esquerdo">
      <div className="contato-form">
        <h2>Medic+</h2>
        <p>Deixe sua mensagem, entraremos em contato.</p>
        <div className="form-group">
          <label htmlFor="nomeCompleto">Nome Completo:</label>
          <input type="text" id="nomeCompleto" placeholder="Digite seu nome completo" />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail:</label>
          <input type="email" id="email" placeholder="Digite seu e-mail" />
        </div>
        <div className="form-group">
          <label htmlFor="comentario">Comentário:</label>
          <textarea id="comentario" rows="4" placeholder="Deixe seu comentário"></textarea>
        </div>
        <button className="enviar-button">Enviar</button>
      </div>
            </div>
          </div>
          </div>
          </div>
          {/* Seção do radapé da página*/}
           <div className="baseboard"> 
           <img src="src/img/fenix.png" alt="Imagem de rodapé" className="baseboard-image" />
        </div>
    </div>

  );
};

export {HomePage};