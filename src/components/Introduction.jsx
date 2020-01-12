import React from 'react'

const backgroundImageSlide1 = 'url(images/img_bg8.jpg)';
const backgroundImageSlide3 = 'url(images/img_bg6.jpg)';
const backgroundImageSlide4 = 'url(images/img_bg11.jpg)';

export default function Introduction() {
  return (
    <div className="Introduction">
      <section id="colorlib-hero" className="js-fullheight">
        <div className="flexslider js-fullheight">
          <ul className="slides">
            <li style={{ backgroundImage: backgroundImageSlide1 }}>
              <div className="overlay" />
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-9 col-md-offset-6 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                    <div className="slider-text-inner js-fullheight">
                      <div className="desc">
                        <h1>Witamy w <br />Ubezpieczenia Madu</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li style={{ backgroundImage: backgroundImageSlide3 }}>
              <div className="overlay" />
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-9 col-md-offset-6 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                    <div className="slider-text-inner">
                      <div className="desc">
                        <h1>Szeroki wachlarz <br />możliwości </h1>
                        <p><a className="btn btn-primary btn-learn" href="/" target="_blank"
                              rel="noopener noreferrer">Sprawdz <i className="icon-book" /></a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li style={{ backgroundImage: backgroundImageSlide4 }}>
              <div className="overlay" />
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-9 col-md-offset-6 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                    <div className="slider-text-inner">
                      <div className="desc">
                        <h1>Współpracujemy z <br />najlepszymi </h1>
                        <p>
                          <a href="#partners" data-nav-section="partners" className="btn btn-primary btn-learn">Partnerzy <i className="icon-book" /></a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}
