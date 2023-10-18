import './Grid-Index/IndexLayout.css'

export const HowToBuy = ({title, textDesc, link}) => {
  return (
    <section className='iphone-cuotas-trade-flex'>
      <h1 className="iphone-cuotas-h1">{title}</h1>
      <p className="iphone-cuotas-p">
        {textDesc}
      </p>
      <a className="iphone-cuotas-link" href="/">{link}</a>
    </section>
  );
};
