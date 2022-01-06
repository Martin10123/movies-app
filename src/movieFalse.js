const moviesFalse = [
  {
    id: 1,
    name: "SpiderMan -No way home",
    year: 2021,
    type: ["Action", "Drama", "Ciencia ficción"],
    place: "Estados unidos",
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
    place: "Estados unidos",
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
      "https://www.semana.com/resizer/bsMF1r_2FiPNgvzYDd7BzqZDa-0=/1200x675/filters:format(jpg):quality(50)//cloudfront-us-east-1.images.arcpublishing.com/semana/223KN7OSKFDPLJKIA3IWWOTCOM.jpg",
  },
  {
    id: 3,
    name: "Una pareja explosiva 2",
    year: 2008,
    type: ["Action", "Aventura", "Comedia"],
    place: "Estados unidos",
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
      "https://cr00.epimg.net/radio/imagenes/2019/04/10/entretenimiento/1554902194_753768_1554902411_noticia_normal.jpg",
  },
  {
    id: 4,
    name: "Lucy",
    year: 2012,
    type: ["Suspendo", "Drama", "Ciencia ficción"],
    place: "Estados unidos",
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
    place: "Estados unidos",
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
    place: "Estados unidos",
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
    place: "España",
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
    place: "Inglaterra",
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
    place: "Estados unidos",
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
  {
    id: 10,
    name: "Halloween Kills",
    year: 2021,
    type: ["Action", "Terror"],
    place: "Estados unidos",
    votes: {
      positivos: "89%",
      negativos: "11%",
    },
    synopsis:
      "Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo Contenido aquí, contenido aquí. Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de Lorem Ipsum va a dar por resultado muchos sitios web que usan este texto si se encuentran en estado de desarrollo. Muchas versiones han evolucionado a través de los años, algunas veces por accidente, otras veces a propósito (por ejemplo insertándole humor y cosas por el estilo).",
    price: "$3.000",
    rented: false,
    cantidad: 10,
    image:
      "https://i0.wp.com/noescinetodoloquereluce.com/wp-content/uploads/2021/10/halloween_kills_2.jpg?resize=477%2C755&ssl=1",
  },
  {
    id: 11,
    name: "Alerta Roja",
    year: 2021,
    type: ["Action", "Drama", "Aventura"],
    place: "Estados unidos",
    votes: {
      positivos: "88%",
      negativos: "12%",
    },
    synopsis:
      "Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo Contenido aquí, contenido aquí. Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de Lorem Ipsum va a dar por resultado muchos sitios web que usan este texto si se encuentran en estado de desarrollo. Muchas versiones han evolucionado a través de los años, algunas veces por accidente, otras veces a propósito (por ejemplo insertándole humor y cosas por el estilo).",
    price: "$6.000",
    rented: false,
    cantidad: 10,
    image:
      "https://i0.wp.com/hipertextual.com/wp-content/uploads/2021/09/alerta-roja-netflix-gal-gadot.jpeg?resize=1200%2C692&ssl=1",
  },
  {
    id: 12,
    name: "Invencible",
    year: 2014,
    type: ["Action", "Drama", "Suspenso", "Cultura"],
    place: "Estados unidos",
    votes: {
      positivos: "97%",
      negativos: "3%",
    },
    synopsis:
      "Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo Contenido aquí, contenido aquí. Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de Lorem Ipsum va a dar por resultado muchos sitios web que usan este texto si se encuentran en estado de desarrollo. Muchas versiones han evolucionado a través de los años, algunas veces por accidente, otras veces a propósito (por ejemplo insertándole humor y cosas por el estilo).",
    price: "3.500",
    rented: false,
    cantidad: 10,
    image: "https://images.moviefit.me/t/o/8495-unbroken.jpg",
  },
  {
    id: 13,
    name: "Parásitos",
    year: 2019,
    type: ["Action", "Drama", "Ciencia ficción", "Suspenso"],
    place: "Japon",
    votes: {
      positivos: "99%",
      negativos: "1%",
    },
    synopsis:
      "Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo Contenido aquí, contenido aquí. Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de Lorem Ipsum va a dar por resultado muchos sitios web que usan este texto si se encuentran en estado de desarrollo. Muchas versiones han evolucionado a través de los años, algunas veces por accidente, otras veces a propósito (por ejemplo insertándole humor y cosas por el estilo).",
    price: "$15.000",
    rented: false,
    cantidad: 10,
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/parasite-explicacion-analisis-final-2-1572041599.jpg?crop=0.958xw:0.852xh;0.0228xw,0.0522xh&resize=1200:*",
  },
  {
    id: 14,
    name: "Call me by your name",
    year: 2017,
    type: ["Drama", "Aventura"],
    place: "Inglaterra",
    votes: {
      positivos: "70%",
      negativos: "30%",
    },
    synopsis:
      "Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo Contenido aquí, contenido aquí. Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de Lorem Ipsum va a dar por resultado muchos sitios web que usan este texto si se encuentran en estado de desarrollo. Muchas versiones han evolucionado a través de los años, algunas veces por accidente, otras veces a propósito (por ejemplo insertándole humor y cosas por el estilo).",
    price: "$2.000",
    rented: false,
    cantidad: 10,
    image:
      "https://imagenes.elpais.com/resizer/rE7g40hdvomWVsMaKiYf6hHlkj8=/414x311/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/3ZHY6BMOFHEWFH32DTRVQL33HQ.jpg",
  },
  {
    id: 15,
    name: "John Wick",
    year: 2014,
    type: ["Action", "Drama", "Ciencia ficción"],
    place: "Estados unidos",
    votes: {
      positivos: "89%",
      negativos: "11%",
    },
    synopsis:
      "Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo Contenido aquí, contenido aquí. Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de Lorem Ipsum va a dar por resultado muchos sitios web que usan este texto si se encuentran en estado de desarrollo. Muchas versiones han evolucionado a través de los años, algunas veces por accidente, otras veces a propósito (por ejemplo insertándole humor y cosas por el estilo).",
    price: "$8.000",
    rented: false,
    cantidad: 10,
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/john-wick-3-parabellum-1558685041.jpg?crop=1.00xw:0.893xh;0,0&resize=640:*",
  },
  {
    id: 16,
    name: "Déjame salir",
    year: 2017,
    type: ["Action", "Drama", "Ciencia ficción", "Terror", "Romance"],
    place: "Estados unidos",
    votes: {
      positivos: "94%",
      negativos: "6%",
    },
    synopsis:
      "Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo Contenido aquí, contenido aquí. Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de Lorem Ipsum va a dar por resultado muchos sitios web que usan este texto si se encuentran en estado de desarrollo. Muchas versiones han evolucionado a través de los años, algunas veces por accidente, otras veces a propósito (por ejemplo insertándole humor y cosas por el estilo).",
    price: "$6.500",
    rented: false,
    cantidad: 10,
    image: "https://m.media-amazon.com/images/I/91yhYRckRvL._SY445_.jpg",
  },
  {
    id: 17,
    name: "Celda 211",
    year: 2009,
    type: ["Action", "Prisión", "Suspenso"],
    place: "México",
    votes: {
      positivos: "85%",
      negativos: "15%",
    },
    synopsis:
      "Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo Contenido aquí, contenido aquí. Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de Lorem Ipsum va a dar por resultado muchos sitios web que usan este texto si se encuentran en estado de desarrollo. Muchas versiones han evolucionado a través de los años, algunas veces por accidente, otras veces a propósito (por ejemplo insertándole humor y cosas por el estilo).",
    price: "$3.000",
    rented: false,
    cantidad: 10,
    image: "https://filmfilicos.com/wp-content/uploads/2016/06/celda211-2.jpg",
  },
  {
    id: 18,
    name: "El caballero oscuro",
    year: 2008,
    type: ["Action", "Ciencia ficción", "Comedia"],
    place: "Estados unidos",
    votes: {
      positivos: "99%",
      negativos: "1%",
    },
    synopsis:
      "Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo Contenido aquí, contenido aquí. Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de Lorem Ipsum va a dar por resultado muchos sitios web que usan este texto si se encuentran en estado de desarrollo. Muchas versiones han evolucionado a través de los años, algunas veces por accidente, otras veces a propósito (por ejemplo insertándole humor y cosas por el estilo).",
    price: "$9.000",
    rented: false,
    cantidad: 10,
    image:
      "https://occ-0-1722-1723.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABfwFjxfu59rDJRpRf01esBzhcu7KTFlBFiApiFkyJKopCrCmdmQHTliw3Y40e4iTtN9qH6G9GRYuz77uAeI-duKG68qy.jpg?r=77f",
  },
  {
    id: 19,
    name: "El señor de los anillos",
    year: 2003,
    type: ["Action", "Ciencia ficción", "Aventura"],
    place: "Australia",
    votes: {
      positivos: "80%",
      negativos: "20%",
    },
    synopsis:
      "Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo Contenido aquí, contenido aquí. Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de Lorem Ipsum va a dar por resultado muchos sitios web que usan este texto si se encuentran en estado de desarrollo. Muchas versiones han evolucionado a través de los años, algunas veces por accidente, otras veces a propósito (por ejemplo insertándole humor y cosas por el estilo).",
    price: "$2.000",
    rented: false,
    cantidad: 10,
    image:
      "https://as01.epimg.net/meristation/imagenes/2021/07/07/noticias/1625672419_027507_1625737804_noticia_normal.jpg",
  },
  {
    id: 20,
    name: "La red social",
    year: 2010,
    type: ["Action", "Tecnologia"],
    place: "Estados unidos",
    votes: {
      positivos: "99%",
      negativos: "1%",
    },
    synopsis:
      "Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo Contenido aquí, contenido aquí. Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de Lorem Ipsum va a dar por resultado muchos sitios web que usan este texto si se encuentran en estado de desarrollo. Muchas versiones han evolucionado a través de los años, algunas veces por accidente, otras veces a propósito (por ejemplo insertándole humor y cosas por el estilo).",
    price: "$20.000",
    rented: false,
    cantidad: 10,
    image:
      "https://media.gq.com.mx/photos/5f6bb77606855de2e20a12bd/master/pass/la-red-social.jpg",
  },
];

export default moviesFalse;
