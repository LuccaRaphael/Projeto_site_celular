import React from 'react';
import { listaAparelhos } from "../../Components/ListaAparelhos/listaAparelhos";
import { Link } from 'react-router-dom';

export default function Aparelhos() {
  const celulares = listaAparelhos.slice(0, 5);
  const tablets = listaAparelhos.slice(5);

  return (
    <main>
      <section className="assuntos-saibamais">
        <h1 className="itens">Smartphones</h1>
        <div className="principal">
        {celulares.map((prod) => (
        <div key={prod.id} className="lista">
          <div className="assunto">
            <Link to={`/VisualizarAparelho/${prod.id}`}>
              <img src={prod.imagem} alt={prod.modelo} className="imagem-assunto" />
            </Link>
            <div>
              <Link className="subtitulo" to={`/VisualizarAparelho/${prod.id}`}>
                {prod.modelo}
              </Link>
              <p className="preco"> Preço: R${prod.preco}</p> 
            </div>
          </div>
        </div>
      ))}

        </div>
        
      </section>
    </main>
  )
}
