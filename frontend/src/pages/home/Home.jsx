import './Home.scss'
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home-page">
      <header>
        <h1>Pagina inicial | React</h1>
      </header>
      <section className='links'>
        <h2>Escolha uma rota</h2>
        <nav>
          <ul>
            <li>
              <Link to='/contador' className='link'>Contador</Link>
            </li>
            <li>
              <Link to='/api-contador' className='link'>API Contador</Link>
            </li>
          </ul>
        </nav>
      </section>
    </div>
  );
}