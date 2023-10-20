import "./Footer.css";
import { FooterList } from "./FooterList";

export const Footer = ({ title }) => {
  return (
    <footer>
      <nav>
        <span> </span>
        <p>{">"}</p>
        <h1>{title.slice(14, 20)}</h1>
      </nav>
      <ul>
        <FooterList />
      </ul>
    </footer>
  );
};
