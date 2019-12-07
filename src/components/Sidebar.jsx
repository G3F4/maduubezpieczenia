import React from 'react'

const logoImage = 'url(images/about.png)';

export default function Sidebar() {
  return (
    <div>
      <div>
        <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse"
             data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
        <aside id="colorlib-aside" className="border js-fullheight">
          <div className="text-center">
            <div className="author-img" style={{ backgroundImage: logoImage }} />
            <h1 id="colorlib-logo"><a href="index.html">Madu Ubezpieczenia</a></h1>
          </div>
          <nav id="colorlib-main-menu" role="navigation" className="navbar">
            <div id="navbar" className="collapse">
              <ul>
                <li><a href="#about" data-nav-section="about">O Mnie</a></li>
                <li><a href="#timeline" data-nav-section="traffic">Ubezpieczenia</a></li>
                <li><a href="#timeline" data-nav-section="contact">Kontakt</a></li>
              </ul>
            </div>
          </nav>
          <div className="colorlib-footer">
            <p><small>
              Tutaj damy jakiś tekst
            </small></p>
          </div>
        </aside>
      </div>
    </div>
  )
}
