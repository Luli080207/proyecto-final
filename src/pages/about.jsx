import React from "react";

const About = () => {
  return (
    <main className="about-page">
    <section>
      <h2>Descripción general del proyecto</h2>
      <p>Tienda online en donde se pueden visualizar productos, agregarlos al carrito y si sos administrador, podes editarlos.</p>
    </section>

    <section>
      <h2>A quién esta dirigido</h2>
      <p>Está dirigido a cualquier persona que este interesada en aprender sobre el desarrollo web.</p>
    </section>

    <section>
      <h2>Tectonologías usadas</h2>
      <p>Se utilizó react para la parte de frontend, Node.js y Express para el backend.
      </p>
    </section>
    </main>
  );
};

export default About;