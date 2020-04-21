import React from 'react'

const backgroundImageSlide1 = 'url(images/MaduFamily720.gif)';
const backgroundImageSlide3 = 'url(images/windowBg.jpg)';
const backgroundImageSlide4 = 'url(images/img_bg11.jpg)';

const slideClassName = 'col-md-9 col-md-offset-5 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text';

export default function Introduction() {
  return (
    <div className="Introduction">
      <section id="colorlib-hero" className="js-fullheight" style={{ marginBottom: 20 }}>
        <div className="flexslider js-fullheight">
          <ul className="slides js-fullheight">
            <li className="js-fullheight" style={{ backgroundImage: backgroundImageSlide1 }}>

            </li>

            {/*<li style={{ backgroundImage: backgroundImageSlide4 }}>*/}
            {/*  <div className="overlay" />*/}
            {/*  <div className="container-fluid">*/}
            {/*    <div className="row">*/}
            {/*      <div className={slideClassName}>*/}
            {/*        <div className="slider-text-inner">*/}
            {/*          <div className="desc slideText">*/}
            {/*            <h1>Współpracuję<br />z najlepszymi</h1>*/}
            {/*          </div>*/}
            {/*        </div>*/}
            {/*      </div>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</li>*/}

            {/*<li style={{ backgroundImage: backgroundImageSlide3 }}>*/}
            {/*  <div className="overlay" />*/}
            {/*  <div className="container-fluid">*/}
            {/*    <div className="row">*/}
            {/*      <div className="col-md-9 col-md-offset-5 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">*/}
            {/*        <div className="slider-text-inner">*/}
            {/*          <div className="desc slideText">*/}
            {/*            <h1>Szeroki wachlarz <br />możliwości</h1>*/}
            {/*          </div>*/}
            {/*        </div>*/}
            {/*      </div>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</li>*/}
          </ul>
        </div>
      </section>
    </div>
  )
}
