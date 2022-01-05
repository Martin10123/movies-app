import { AiOutlineBarChart, AiOutlineWhatsApp } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsFillCalendar2DateFill,
} from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { FaExchangeAlt } from "react-icons/fa";
import { ImPriceTag } from "react-icons/im";

export const moviesMood = [
  {
    id: 1,
    icon: BiCategory,
    classCom: "ul_types",
    classSvg: "navbar_menu_svg",
    type: "Tipos",
    options: ["Terror", "Action", "Ciencia ficción", "Terror", "Comedia"],
  },
  {
    id: 2,
    icon: BsFillCalendar2DateFill,
    classCom: "ul_year",
    classSvg: "navbar_menu_svg",
    type: "Año",
    options: ["Las más recientes", "Las más antiguas"],
  },
  {
    id: 3,
    icon: ImPriceTag,
    classCom: "ul_price",
    classSvg: "navbar_menu_svg",
    type: "Precio",
    options: ["Menores a 5.000", "Mayores a 5.000"],
  },
  {
    id: 4,
    icon: AiOutlineBarChart,
    classCom: "ul_votes",
    classSvg: "navbar_menu_svg",
    type: "Votos",
    options: ["Mayor a 90%", "Menor al 90%"],
  },
  {
    id: 5,
    icon: FaExchangeAlt,
    classCom: "ul_rented",
    classSvg: "navbar_menu_svg",
    type: "Renta",
    options: ["Rentados", "Sin rentar"],
  },
];

export const socialNetwork = [
  {
    id: 1,
    icon: BsFacebook,
    class: "social_network",
    link: "https://www.facebook.com/martinelias1012",
  },
  {
    id: 2,
    icon: BsGithub,
    class: "social_network",
    link: "https://github.com/Martin10123",
  },
  {
    id: 3,
    icon: SiGmail,
    class: "social_network",
    link: "mailto:martinsimarra4@gmail.com?",
  },
  {
    id: 4,
    icon: BsInstagram,
    class: "social_network",
    link: "https://www.instagram.com/martinelias1012/",
  },
  {
    id: 4,
    icon: AiOutlineWhatsApp,
    class: "social_network",
    link: "https://wa.link/2995b6",
  },
];

export const informationAbout = [
  {
    id: 1,
    title: "¿Quienes somos?",
    desc: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet molestias accusamus doloremque laudantium provident quaerat recusandae. Modi itaque commodi similique, ut iusto, excepturi voluptates dolor, enim quasi tempore molestiae quas.",
  },
  {
    id: 2,
    title: "¿Que puedo hacer?",
    desc: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet molestias accusamus doloremque laudantium provident quaerat recusandae. Modi itaque commodi similique, ut iusto, excepturi voluptates dolor, enim quasi tempore molestiae quas.",
  },
  {
    id: 3,
    title: "¿Por qué no puedo rentar una pelicula sin estar suscrito?",
    desc: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet molestias accusamus doloremque laudantium provident quaerat recusandae. Modi itaque commodi similique, ut iusto, excepturi voluptates dolor, enim quasi tempore molestiae quas.",
  },
  {
    id: 4,
    title: "¿Cuantas peliculas puedo rentar?",
    desc: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet molestias accusamus doloremque laudantium provident quaerat recusandae. Modi itaque commodi similique, ut iusto, excepturi voluptates dolor, enim quasi tempore molestiae quas.",
  },
  {
    id: 5,
    title: "¿De donde vienen las peliculas?",
    desc: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet molestias accusamus doloremque laudantium provident quaerat recusandae. Modi itaque commodi similique, ut iusto, excepturi voluptates dolor, enim quasi tempore molestiae quas.",
  },
];

export const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
