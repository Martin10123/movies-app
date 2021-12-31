import { AiOutlineBarChart } from "react-icons/ai";
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
    link: "a",
  },
  {
    id: 2,
    icon: BsGithub,
    class: "social_network",
    link: "a",
  },
  {
    id: 3,
    icon: SiGmail,
    class: "social_network",
    link: "a",
  },
  {
    id: 4,
    icon: BsInstagram,
    class: "social_network",
    link: "a",
  },
];
