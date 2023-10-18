import { Link } from "react-router-dom";


export const CardLayout = ({ img, id, title, desc, link }) => {
  return (
    <div className="card-l" key={id}>
      <picture className="card-picture" key={id}>
        <img src={img} alt={title}/>
      </picture>
      <div className="card-info-flex">
        <h1 className="card-layout-h1">{title}</h1>
        <p className="card-layout-p">{desc}</p>
        <Link className="card-layout-link" to={link}>Discover more {">"}</Link>
      </div>
    </div>
  );
};
