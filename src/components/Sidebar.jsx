import React from 'react'

export default function Sidebar() {
  return (
    <div>
      <div>
        <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse"
             data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
        <aside id="colorlib-aside" className="border js-fullheight">
          <div className="text-center">
            <a href="http://ubezpieczeniamadu.pl/" className="blog-img">
              <img src="images/logo.svg" className="img-responsive" alt="logo" />
            </a>
          </div>
          <br />
          <nav id="colorlib-main-menu" role="navigation" className="navbar">
            <div id="navbar" className="collapse">
              <ul>
                <li><a className="menuItem" href="#about" data-nav-section="about">O mnie</a></li>
                <li><a className="menuItem" href="#insurances" data-nav-section="insurances">Ubezpieczenia</a></li>
                <li><a className="menuItem" href="#partners" data-nav-section="partners">Partnerzy</a></li>
                {/*<li><a className="menuItem" href="#work" data-nav-section="work">Współpraca</a></li>*/}
                <li><a className="menuItem" href="#contact" data-nav-section="contact">Kontakt</a></li>
              </ul>
            </div>
          </nav>
        </aside>
      </div>
    </div>
  )
}
