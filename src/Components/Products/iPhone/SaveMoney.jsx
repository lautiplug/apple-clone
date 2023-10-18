export const SaveMoney = ({ img, alt, title, text, link }) => {
  return (
    <article className="save-money-card">
      <img src={img} alt={alt} />
      <h1>{title}</h1>
      <p>{text}</p>
      <a href="/">{link}</a>
    </article>
  );
};
