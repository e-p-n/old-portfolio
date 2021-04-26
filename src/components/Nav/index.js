import React from 'react';
import Logo from '../../logo.svg'



function Nav(props) {

  const {
    navSelected,
    setNavSelected,
  } = props;

  
  return (
    <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-muted">
            <a className="navbar-brand" href="/">
                <img src={Logo} height="90" alt="Eric Normann" />
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className={`nav-item ${navSelected ==='about' && 'active'}`}>
                        <span className="nav-link" onClick={() => setNavSelected('about')}>About Me</span>
                    </li>
                    <li className={`nav-item ${navSelected ==='portfolio' && 'active'}`}>
                        <span className="nav-link" onClick={() => setNavSelected('portfolio')}>Portfolio</span>
                    </li><li className={`nav-item ${navSelected ==='contact' && 'active'}`}>
                        <span className="nav-link" onClick={() => setNavSelected('contact')}>Contact Me</span>
                    </li><li className={`nav-item ${navSelected ==='resume' && 'active'}`}>
                        <span className="nav-link" onClick={() => setNavSelected('resume')}>Resume</span>
                    </li>
        
                </ul>

            </div>
        </nav>
    </header>
  );
}

export default Nav;