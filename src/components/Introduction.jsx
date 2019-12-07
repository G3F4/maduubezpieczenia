import React from 'react'

const backgroundImageSlide1 = 'url(images/img_bg4.jpg)';
const backgroundImageSlide2 = 'url(images/img_bg.jpg)';
const backgroundImageSlide3 = 'url(images/img_bg6.jpg)';

export default function Introduction() {
  return (
    <div className="Introduction">
      <section id="colorlib-hero" className="js-fullheight" data-section="home">
        <div className="flexslider js-fullheight">
          <ul className="slides">
            <li style={{backgroundImage: backgroundImageSlide1}}>
              <div className="overlay"/>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                    <div className="slider-text-inner js-fullheight">
                      <div className="desc">
                        <h1>Witamy w <br/>Madu Ubezpieczenia</h1>
                        <p><a className="btn btn-primary btn-learn" href="/" target="_blank" rel="noopener noreferrer">Coś
                          tam<i className="icon-download4"/></a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li style={{backgroundImage: backgroundImageSlide2}}>
              <div className="overlay"/>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                    <div className="slider-text-inner">
                      <div className="desc">
                        <h1>Profesjonalne<br/> podejście</h1>
                        <p><a className="btn btn-primary btn-learn" href="/" target="_blank"
                              rel="noopener noreferrer">Certyfikaty <i className="icon-briefcase3"/></a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li style={{backgroundImage: backgroundImageSlide3}}>
              <div className="overlay"/>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                    <div className="slider-text-inner">
                      <div className="desc">
                        <h1>Współpracujemy z <br/>najlepszymi </h1>
                        <p><a className="btn btn-primary btn-learn" href="/" target="_blank"
                              rel="noopener noreferrer">Partnerzy <i className="icon-book"/></a></p>
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
