import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
          <section className="colorlib-experience" data-section="work">
              <div className="colorlib-narrow-content">
                  <div className="row">
                      <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                           data-animate-effect="fadeInLeft">
                          <h2 className="colorlib-heading animate-box">Współpraca</h2>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-md-12">
                          <div className="timeline-centered">
                              <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                                  <div className="timeline-entry-inner">

                                      <div className="timeline-icon color-1">
                                          <i className="icon-check bigIcon"></i>
                                      </div>

                                      <div className="timeline-label">
                                          <h2>Poszerzasz ofertę</h2>
                                          <br />
                                          <p>Nie tracisz klienta, a przyciągasz nowych coraz większą i lepszą ofertą. Twoi klienci mają możliwość zakupu nowych usług właśnie u Ciebie.</p>
                                      </div>
                                  </div>
                              </article>

                              <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                                  <div className="timeline-entry-inner">

                                      <div className="timeline-icon color-1">
                                          <i className="icon-check bigIcon"></i>
                                      </div>

                                      <div className="timeline-label">
                                          <h2>Zyskujesz wsparcie</h2>
                                          <br />
                                          <p>Wspieram swoich współpracowników w ich własnych działaniach, a prośby o pomoc i zlecone mi zadania traktuję priorytetowo.</p>
                                      </div>
                                  </div>
                              </article>

                              <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                                  <div className="timeline-entry-inner">

                                      <div className="timeline-icon color-1">
                                          <i className="icon-check bigIcon"></i>
                                      </div>

                                      <div className="timeline-label">
                                          <h2>Nie ponosisz kosztów</h2>
                                          <br />
                                          <p>Współpraca wymaga jedynie chęci. Nie wiążą się z nią żadne zobowiązania. Nie wymagam osiągania sprzedaży oraz nie ustanawiam limitów - pracujesz, kiedy chcesz.</p>
                                      </div>
                                  </div>
                              </article>

                              <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                                  <div className="timeline-entry-inner">

                                      <div className="timeline-icon color-1">
                                          <i className="icon-check bigIcon"></i>
                                      </div>

                                      <div className="timeline-label">
                                          <h2>Zarabiasz</h2>
                                          <br />
                                          <p>Rozszerzenie własnej oferty to okazja do zwiększenia Twoich zarobków. Korzystnym wynikiem naszej współpracy będą finanse, z uwagi na atrakcyjne prowizje od sprzedaży.</p>
                                      </div>
                                  </div>
                              </article>


                              <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                                  <div className="timeline-entry-inner">
                                      <div className="timeline-icon color-none">
                                      </div>
                                  </div>
                              </article>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
        )
    }
}