import React from 'react';

export default function Contact() {
  return (
    <section className="colorlib-education" data-section="contact">
      <div className="colorlib-narrow-content">
        <div className="row animate-box" data-animate-effect="fadeInLeft">
          <div className="col-md-12 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
            <div className="hire">
              <h2 style={{ textAlign: 'center' }}>Internetowa sprzedaż polis na&nbsp;życie</h2>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="row animate-box" data-animate-effect="fadeInLeft">
          <div className="col-md-9 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
            <h2 className="colorlib-heading">Kontakt</h2>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }} className="row animate-box" data-animate-effect="fadeInLeft">
          <div style={{ marginLeft: 10, flexGrow: 1 }}>
            <a href="mailto:ubezpieczeniamadu@gmail.com">
              <div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="colorlib-icon">
                  <i className="icon-mail"></i>
                </div>
                <div className="colorlib-text">
                  <p>ubezpieczeniamadu@gmail.com</p>
                </div>
              </div>
            </a>
            <br />
            <a href="tel://+48 798 385 487">
              <div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="colorlib-icon">
                  <i className="icon-phone"></i>
                </div>
                <div className="colorlib-text">
                  <p>+48 798 385 487</p>
                </div>
              </div>
            </a>
          </div>
          <div style={{ textAlign: 'center' }}>
            <img alt="logo" src="images/ja.png" />
            <br />
            <br />
            <h4>Marcin Marczyk</h4>
          </div>
        </div>
      </div>
    </section>
  )
}