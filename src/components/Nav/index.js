import React from 'react';
import Logo from '../../logo.svg'



function Nav(props) {

  const {
    navSelected,
    setNavSelected,
  } = props;

  
  return (
    <header className="flex-row px-1">
        <h2>
            <a data-testid="link" href="/">
                <img src={Logo} height="90" alt="Eric Normann" />
            </a>
        </h2>
        <nav>
            <ul className="flex-row">
            <li className={`mx-2 ${navSelected ==='about' && 'navActive'}`}>
                    <span onClick={() => setNavSelected('about')}>About Me</span>
                </li>
                <li className={`mx-2 ${navSelected ==='portfolio' && 'navActive'}`}>
                    <span onClick={() => setNavSelected('portfolio')}>Portfolio</span>
                </li>
                <li className={`mx-2 ${navSelected === 'contact' && 'navActive'}`}>
                    <span onClick={() => setNavSelected('contact')}>Contact</span>
                </li>
                <li className={`mx-2 ${navSelected === 'resume' && 'navActive'}`}>
                    <span onClick={() => setNavSelected('resume')}>Resume</span>
                </li>
            </ul>
        </nav>
    </header>
  );
}

export default Nav;