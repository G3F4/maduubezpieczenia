import React from 'react';

export default function Contact() {
  return (
    <section className="colorlib-contact" data-section="contact">
      <div className="colorlib-narrow-content">
        <div className="row">
          <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
            <h2 className="colorlib-heading">Kontakt</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-5">
            <div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
              <div className="colorlib-icon">
                <i className="icon-globe-outline"></i>
              </div>
              <div className="colorlib-text">
                <p><a href="#">kontakt@ubezpieczeniamadu.pl</a></p>
              </div>
            </div>

            <div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
              <div className="colorlib-icon">
                <i className="icon-map"></i>
              </div>
              <div className="colorlib-text">
                <p>Granica, Reja, Xx, Mazowieckie, Polska</p>
              </div>
            </div>

            <div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
              <div className="colorlib-icon">
                <i className="icon-phone"></i>
              </div>
              <div className="colorlib-text">
                <p><a href="tel://">+48 765 456 890</a></p>
              </div>
            </div>
          </div>
          <div className="col-md-7 col-md-push-1">
            <div className="row">
              <div className="col-md-10 col-md-offset-1 col-md-pull-1 animate-box" data-animate-effect="fadeInRight">
                <form action="">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Imię" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Email" />
                  </div>
                  <div className="form-group">
                    <textarea name="" id="message" cols="30" rows="7" className="form-control"
                              placeholder="Wiadomość"></textarea>
                  </div>
                  <div className="form-group">
                    <input type="submit" className="btn btn-primary btn-send-message" value="Wyślij" />
                  </div>
                </form>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}