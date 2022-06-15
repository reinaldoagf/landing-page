import hero from './assets/images/hero.png';
import BRUSH1 from './assets/images/BRUSH1.png';
import BRUSH2 from './assets/images/BRUSH2.png';
import BRUSH3 from './assets/images/BRUSH3.png';
import Header from './components/Header';
import ArticleList from './containers/ArticleList';
import './App.css';
import { useState } from 'react';

function App() {
  const [query,setQuery] = useState('articles')
  const onChangeCategory = (event,category) => {
    event.preventDefault() 
    setQuery(category)
  }
  return (
    <>
      {/* <!-- ===== HEADER ====== --> */}
      <div className="hero" style={{
        backgroundImage: `url("${hero}")`
      }}>
        <Header />
        {/* <!-- ===== BODY ====== --> */}
        {/* <!-- home section --> */}
        <section id="hero" className="section_1 home container">
          <div className="slogan">
            <h1 className="slogan-title">El secreto de tu cocina</h1>
            <div className="slogan-image-container">
              <img src={BRUSH1} className="" alt="BRUSH1" />
            </div>
            {/* <div className="hero-btn"><a href="#" className="home-btn-link">I need a babysitter</a></div> */}
          </div>
        </section>
      </div>
      {/* <!-- about us section --> */}
      <div className='linear-gradient-background'></div>
      {/* <!-- services section --> */}
      <div id="services" className="section_2 services container">
        <div className="articles-title-container">
          <h2 className="articles-title">Nuestros artículos</h2>
          <div className="articles-image-container">
            <img src={BRUSH2} className="" alt="BRUSH2" />
          </div>
        </div>
        <div className='articles-sections'>
          <section>
            <ul className="nav">
              <li className={query === 'articles' ? "selected" : null}>
                <a 
                  href="#" 
                  onClick={ (event) => onChangeCategory(event, 'articles') }>
                  Todos
                  {query === 'articles' ? <em><i className="fas fa-arrow-right"></i></em> : null}
                </a>
              </li>
              <li className={query === 'articles?filter=Productos' ? "selected" : null}>
                <a 
                  href="#"
                  onClick={ (event) => onChangeCategory(event, 'articles?filter=Productos') }>
                  Productos 
                  {query === 'articles?filter=Productos' ? <em><i className="fas fa-arrow-right"></i></em> : null}
                </a>
              </li>
              <li className={query === 'articles?filter=Recetas' ? "selected" : null}>
                <a 
                  href="#" 
                  onClick={ (event) => onChangeCategory(event, 'articles?filter=Recetas') }>
                    Recetas
                    {query === 'articles?filter=Recetas' ? <em><i className="fas fa-arrow-right"></i></em> : null}
                </a>
              </li>
              <li className={query === 'articles?filter=Consejos' ? "selected" : null}>
                <a 
                  href="#" 
                  onClick={ (event) => onChangeCategory(event, 'articles?filter=Consejos') }>
                    Consejos
                    {query === 'articles?filter=Consejos' ? <em><i className="fas fa-arrow-right"></i></em> : null}                    
                </a>
              </li>
            </ul>
          </section>          
			    <ArticleList query={query} />
        </div>
      </div>
      <div id="" className="section_3 contact container">
        <div className="contact-title-container">
          <h2 className="contact-title">Contáctanos</h2>
          <div className="contact-image-container">
            <img src={BRUSH3} className="" alt="BRUSH3" />
          </div>
        </div>
        <section className="">
          <div className='form-container'>
          <form id="event-form">
            <div className="fieldset-wrapper">
              <div className="input-wrapper">
                <div className="complete-name">
                  <label htmlFor="first-name">Nombre</label>
                  <input type="text" id="first-name" required />
                </div>
                <div className="complete-name">
                  <label htmlFor="last-name">Apellido</label>
                  <input type="text" id="last-name" required />
                </div>
              </div>
              <div className="input-wrapper">
                <div className="complete-name">
                  <label htmlFor="mail">Mail</label>
                  <input type="text" id="mail" required />
                </div>
                <div className="complete-name">
                  <label htmlFor="phone">Teléfono</label>
                  <input type="text" id="phone" required />
                </div>
              </div>
            </div>
          </form>
          <footer>
            <button type="submit" className="button" form="event-form">ENVIAR</button>
        </footer>

          </div>
        </section>
      </div>
    </>
  );
}

export default App;
