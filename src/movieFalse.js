// import auto1 from "./Images/Cars/auto1.jpg";
// import auto2 from "./Images/Cars/auto2.jpg";
// import auto3 from "./Images/Cars/auto3.jpg";
// import camioneta1 from "./Images/Cars/camioneta1.png";
// import camioneta2 from "./Images/Cars/camioneta2.png";
// import camioneta3 from "./Images/Cars/camioneta3.jpg";
// import moto1 from "./Images/Cars/moto1.jpg";
// import moto2 from "./Images/Cars/moto2.jpg";
// import moto3 from "./Images/Cars/moto3.jpg";

const moviesFalse = [
  {
    id: 1,
    name: "SpiderMan -No way home",
    year: 2021,
    type: ["Action", "Drama", "Ciencia ficción"],
    Place: "Estados unidos",
    votes: {
      positivos: "92%",
      negativos: "8%",
    },
    synopsis:
      "Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo Contenido aquí, contenido aquí. Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de Lorem Ipsum va a dar por resultado muchos sitios web que usan este texto si se encuentran en estado de desarrollo. Muchas versiones han evolucionado a través de los años, algunas veces por accidente, otras veces a propósito (por ejemplo insertándole humor y cosas por el estilo).",
    price: "$2.000",
    rented: false,
    cantidad: 10,
    image:
      "https://m.media-amazon.com/images/M/MV5BMjMyOTM4MDMxNV5BMl5BanBnXkFtZTcwNjIyNzExOA@@._V1_SX300.jpg",
  },
  {
    id: 2,
    name: "Rapidos y furiosos",
    year: 2014,
    type: ["Action", "Crimen", "Ciencia ficción"],
    Place: "Estados unidos",
    votes: {
      positivos: "87%",
      negativos: "13%",
    },
    synopsis:
      "Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo Contenido aquí, contenido aquí. Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de Lorem Ipsum va a dar por resultado muchos sitios web que usan este texto si se encuentran en estado de desarrollo. Muchas versiones han evolucionado a través de los años, algunas veces por accidente, otras veces a propósito (por ejemplo insertándole humor y cosas por el estilo).",
    price: "$6.000",
    rented: false,
    cantidad: 10,
    image:
      "https://m.media-amazon.com/images/M/MV5BMjMyOTM4MDMxNV5BMl5BanBnXkFtZTcwNjIyNzExOA@@._V1_SX300.jpg",
  },
  {
    id: 3,
    name: "Una pareja explosiva 2",
    year: 2008,
    type: ["Action", "Aventura", "Comedia"],
    Place: "Estados unidos",
    votes: {
      positivos: "90%",
      negativos: "10%",
    },
    synopsis:
      "Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo Contenido aquí, contenido aquí. Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de Lorem Ipsum va a dar por resultado muchos sitios web que usan este texto si se encuentran en estado de desarrollo. Muchas versiones han evolucionado a través de los años, algunas veces por accidente, otras veces a propósito (por ejemplo insertándole humor y cosas por el estilo).",
    price: "$1.500",
    rented: false,
    cantidad: 10,
    image:
      "https://static.wikia.nocookie.net/doblaje/images/f/fd/UnaParejaExplosiva3.png/revision/latest?cb=20141009062012&path-prefix=es",
  },
  {
    id: 4,
    name: "Lucy",
    year: 2012,
    type: ["Suspendo", "Drama", "Ciencia ficción"],
    Place: "Estados unidos",
    votes: {
      positivos: "85%",
      negativos: "15%",
    },
    synopsis:
      "Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo Contenido aquí, contenido aquí. Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de Lorem Ipsum va a dar por resultado muchos sitios web que usan este texto si se encuentran en estado de desarrollo. Muchas versiones han evolucionado a través de los años, algunas veces por accidente, otras veces a propósito (por ejemplo insertándole humor y cosas por el estilo).",
    price: "$5.000",
    rented: false,
    cantidad: 10,
    image:
      "https://m.media-amazon.com/images/M/MV5BODcxMzY3ODY1NF5BMl5BanBnXkFtZTgwNzg1NDY4MTE@._V1_SX300.jpg",
  },
  {
    id: 5,
    name: "Venom",
    year: 2021,
    type: ["Action", "Aventura", "Ciencia ficción"],
    Place: "Estados unidos",
    votes: {
      positivos: "99%",
      negativos: "1%",
    },
    synopsis:
      "Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo Contenido aquí, contenido aquí. Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de Lorem Ipsum va a dar por resultado muchos sitios web que usan este texto si se encuentran en estado de desarrollo. Muchas versiones han evolucionado a través de los años, algunas veces por accidente, otras veces a propósito (por ejemplo insertándole humor y cosas por el estilo).",
    price: "$2.500",
    rented: false,
    cantidad: 10,
    image:
      "https://m.media-amazon.com/images/M/MV5BNzAwNzUzNjY4MV5BMl5BanBnXkFtZTgwMTQ5MzM0NjM@._V1_SX300.jpg",
  },
  {
    id: 6,
    name: "La purga",
    year: 2020,
    type: ["Action", "Suspendo", "Terror"],
    Place: "Estados unidos",
    votes: {
      positivos: "94%",
      negativos: "6%",
    },
    synopsis:
      "Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo Contenido aquí, contenido aquí. Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de Lorem Ipsum va a dar por resultado muchos sitios web que usan este texto si se encuentran en estado de desarrollo. Muchas versiones han evolucionado a través de los años, algunas veces por accidente, otras veces a propósito (por ejemplo insertándole humor y cosas por el estilo).",
    price: "$7.000",
    rented: false,
    cantidad: 10,
    image:
      "https://m.media-amazon.com/images/M/MV5BMGE5NjJjNGMtZDkwMy00MGFlLWFkYTktYWFkNTY1NjcwOTY2XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg",
  },
  {
    id: 7,
    name: "El joker",
    year: 2019,
    type: ["Action", "Drama", "Suspenso"],
    Place: "España",
    votes: {
      positivos: "99%",
      negativos: "1%",
    },
    synopsis:
      "Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo Contenido aquí, contenido aquí. Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de Lorem Ipsum va a dar por resultado muchos sitios web que usan este texto si se encuentran en estado de desarrollo. Muchas versiones han evolucionado a través de los años, algunas veces por accidente, otras veces a propósito (por ejemplo insertándole humor y cosas por el estilo).",
    price: "$10.000",
    rented: false,
    cantidad: 10,
    image:
      "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
  },
  {
    id: 8,
    name: "El juego del miedo",
    year: 2010,
    type: ["Action", "Terror", "Ciencia ficción", "Suspenso", "Drama"],
    Place: "Inglaterra",
    votes: {
      positivos: "82%",
      negativos: "18%",
    },
    synopsis:
      "Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo Contenido aquí, contenido aquí. Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de Lorem Ipsum va a dar por resultado muchos sitios web que usan este texto si se encuentran en estado de desarrollo. Muchas versiones han evolucionado a través de los años, algunas veces por accidente, otras veces a propósito (por ejemplo insertándole humor y cosas por el estilo).",
    price: "$3.500",
    rented: false,
    cantidad: 10,
    image:
      "https://m.media-amazon.com/images/M/MV5BNjc0NjUyNzg3MF5BMl5BanBnXkFtZTYwODMxOTM3._V1_SX300.jpg",
  },
  {
    id: 9,
    name: "Resident evil 6",
    year: 2020,
    type: ["Action", "Drama", "Ciencia ficción", "Terror"],
    Place: "Estados unidos",
    votes: {
      positivos: "98%",
      negativos: "2%",
    },
    synopsis:
      "Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo Contenido aquí, contenido aquí. Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de Lorem Ipsum va a dar por resultado muchos sitios web que usan este texto si se encuentran en estado de desarrollo. Muchas versiones han evolucionado a través de los años, algunas veces por accidente, otras veces a propósito (por ejemplo insertándole humor y cosas por el estilo).",
    price: "$5.000",
    rented: false,
    cantidad: 10,
    image:
      "https://m.media-amazon.com/images/M/MV5BMTc0Mzc2OTQ0Ml5BMl5BanBnXkFtZTgwOTQ5MjE4MDI@._V1_SX300.jpg",
  },
];

export default moviesFalse;
