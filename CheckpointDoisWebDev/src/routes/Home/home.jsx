
export default function Home() {

    return (
      <main>
        <section>
          <div className="promocao-container">
            <div className="info-promocoes">
              <h1>OFERTAS DE </h1>
              <h2>Smartphones Antigos</h2>
              <h3></h3>
            </div>
            <div className="oferta">
              <h3>COM ATÉ</h3>
              <h1>90% OFF!</h1>
            </div>
              <img id="imagem-iphones" src="./image/iphones.png" alt="iphones" />
          </div>
          <div className="promocao-container-dois">
            <div className="info-promocoes-dois">
              <h1>ENCONTRE O SMARTPHONE SAMSUNG PERFEITO PRA VOCÊ E MERGULHE NO MUNDO DA TECNOLOGIA!</h1>
            </div>
            <img id="imagem-tablet" src="./image/tablet.png" alt="tablet" />
            <div className="oferta-dois">
              <h3>EM OFERTAS DE ATÉ:</h3>
              <h1>10% OFF!</h1>
        
            </div>
          </div>
        </section>
      </main>
    )
  }
  