import logo from './logo.svg';
import './App.css';

function App() {

  const funcion = "ProbaDoVideo"
  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido")
  }
  /*<div classNameName="App">
    <header classNameName="App-header">
      <img src={logo} classNameName="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>*/
  return (

    < body >
      <div className="tela-inteira">
        <header className="titulo">
          <h1 >LabeTube</h1>
        </header>

        <main>
          <nav className="menu-vertical">
            <ul>
              <li className="botoes-meunu-vertical">Início</li>
              <li className="botoes-meunu-vertical">Em alta</li>
              <li className="botoes-meunu-vertical">Inscrições</li>
              <hr>
              </hr>
              <li className="botoes-meunu-vertical">Originais</li>
              <li className="botoes-meunu-vertical">Histórico</li>
            </ul>
          </nav>

          <section className="painel-de-videos">
            <div className="box-pagina-principal media1" onclick="reproduzVideo()">
              <iframe width="400" height="418" src="https://www.youtube.com/embed/obaT-OfuUmQ" title="Road Fighter [MAME] 918,330 ロードファイター" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              <h4>Road Figther</h4>
            </div>
            <div className="box-pagina-principal media2" onclick="reproduzVideo()">
              <iframe width="400" height="418" src="https://www.youtube.com/embed/dScq4P5gn4A" title="Arcade Game: Pac-Man (1980 Namco (Midway License for US release))" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              <h4>Pac Man</h4>
            </div>
            <div className="box-pagina-principal media3" onclick="reproduzVideo()">
              <iframe width="400" height="418" src="https://www.youtube.com/embed/3zNXo2VEO6Q" title="Top 15 MAME Fighting Games" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              <h4>Figthers</h4>
            </div>
            <div className="box-pagina-principal media4" onclick="reproduzVideo()">
              <iframe width="400" height="418" src="https://www.youtube.com/embed/LruDucJqkAc" title="MAME Toki gameplay" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              <h4>Toki</h4>
            </div>
            <div className="box-pagina-principal media5" onclick="reproduzVideo()">
              <iframe width="400" height="418" src="https://www.youtube.com/embed/82dDNelIQAw" title="Wonder Boy | MAME 32 | Gameplay part 1)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              <h4>Wonder Boy</h4>
            </div>
            <div className="box-pagina-principal media6" onclick="reproduzVideo()">
              <iframe width="400" height="418" src="https://www.youtube.com/embed/KBrLZ2yWUu4" title="Galaga (FC) [1]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              <h4>Galaga</h4>
            </div>
            <div className="box-pagina-principal media7" onclick="reproduzVideo()">
              <iframe width="400" height="418" src="https://www.youtube.com/embed/Pp2aMs38ERY" title="Donkey Kong (Original) Full Playthrough (JP Arcade Version)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              <h4>Donkey Kong</h4>
            </div>
            <div className="box-pagina-principal media8" onclick="reproduzVideo()">
              <iframe width="400" height="418" src="https://www.youtube.com/embed/OZ6fN1tal6s" title="Astro Fighter 1979 Data East Mame" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              <h4>Astro Figther</h4>
            </div>
          </section>
        </main>

        <footer className="footer">
          <h4>Oi! Eu moro no footer!</h4>
        </footer>
      </div>
    </body >
  )
};

export default App;
