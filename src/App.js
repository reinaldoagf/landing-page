import hero from './assets/images/hero.png';
import BRUSH1 from './assets/images/BRUSH1.png';
import BRUSH2 from './assets/images/BRUSH2.png';
import BRUSH3 from './assets/images/BRUSH3.png';
import ArticleList from './containers/ArticleList';
import './App.css';

function App() {
  const NavBar = () => {
    console.log('NavBar')
  }
  return (
    <>
      {/* <!-- ===== HEADER ====== --> */}
      <div className="hero" style={{
        backgroundImage: `url("${hero}")`
      }}>
        <header>
          {/* <!-- logo --> */}
          <a className="logo" href="#hero">Logo</a>
          {/* <!-- navbar --> */}
          <nav className="nav-bar">
            <ul className="nav-items">
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <span className="icon-container blue-color" >
                    <i className="fa fa-brands fa-facebook"></i>
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <span className="icon-container red-color">
                    <i className="fa fa-brands fa-instagram"></i>
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <span className="icon-container mustard-color">
                    <i className="fa fa-brands fa-youtube"></i>
                  </span>
                </a>
              </li>
            </ul>
          </nav>
          <div className="menu-icons">
            <i className="bx bx-menu"></i>
            <i className="bx bx-x"></i>
          </div>
        </header>
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
              <li><a className="profile" href="#">Todos</a></li>
              <li className="selected"><a className="messages" href="#">Productos <em><i className="fas fa-arrow-right"></i></em></a></li>
              <li><a className="settings" href="#">Recetas</a></li>
              <li><a className="logout" href="#">Consejos</a></li>
            </ul>
          </section>          
			    <ArticleList />
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
