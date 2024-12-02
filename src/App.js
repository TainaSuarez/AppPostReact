import React, { useState } from "react";
import "./styles.css";

function App() {
  const [titulo, setTitulo] = useState("");
  const [imagenUrl, setImagenUrl] = useState("");
  const [posts, setPosts] = useState([]);

  //  envio del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Crea un nuevo post
    const nuevoPost = {
      titulo: titulo,
      imagenUrl: imagenUrl,
    };

    // Agrega el nuevo post a la lista de posts
    setPosts([...posts, nuevoPost]);

    // Resetea el formulario
    setTitulo("");
    setImagenUrl("");
  };

  // Maneja la eliminación de todos los posts
  const handleDeletePosts = () => {
    setPosts([]);
  };

  return (
    <div className="container">
      <h1>Criar e Visualizar Posts</h1>
      <form onSubmit={handleSubmit} className="formulario">
        <div className="form-group">
          <label>Título:</label>
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            placeholder="Digite o nome"
            required
          />
        </div>
        <div className="form-group">
          <label>Link da Imagem:</label>
          <input
            type="text"
            value={imagenUrl}
            onChange={(e) => setImagenUrl(e.target.value)}
            placeholder="Digite o link"
            required
          />
        </div>
        <div className="botones">
          <button type="submit" className="btn btn-enviar">
            Enviar
          </button>
          <button
            type="button"
            onClick={handleDeletePosts}
            className="btn btn-deletar"
          >
            Deletar Posts
          </button>
        </div>
      </form>

      {}
      <div className="posts">
        {posts.length === 0 ? (
          <p>nenhum post adicionado</p> // Mensaje cuando no hay posts
        ) : (
          posts.map((post, index) => (
            <div key={index} className="post">
              <h2>{post.titulo}</h2>
              <img
                src={post.imagenUrl}
                alt={post.titulo}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://via.placeholder.com/500x300?text=Imagen+no+disponible";
                }}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
