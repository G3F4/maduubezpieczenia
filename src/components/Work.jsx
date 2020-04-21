import React, { Component } from 'react'
import Button from '@material-ui/core/Button';

export default class About extends Component {
    render() {
        return (
          <section className="colorlib-experience" data-section="work">
              <div className="colorlib-narrow-content">
                  <a href="https://bezpieczny.pl/27218">
                      <div className="row animate-box" data-animate-effect="fadeInLeft">
                          <div className="col-md-12 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                              <div className="hire" style={{ textAlign: 'center' }}>
                                  <Button size="large">
                                      <h2 style={{ textAlign: 'center' }}>
                                          Kupuj online 10% taniej
                                      </h2>
                                  </Button>
                              </div>
                          </div>
                      </div>
                  </a>
                  <br />
                  <br />
                  <div className="row">
                      <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                           data-animate-effect="fadeInLeft">
                          <h2 className="colorlib-heading animate-box">Współpraca</h2>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-md-12">
                          <p style={{ fontSize: '1.4em' }}>
                              Pragnę, aby współpraca przynosiła korzyści dla obu stron. Wysoka jakość świadczonych usług jest autoreklamą, która pozytywnie działa na dobrą opinię. W biznesie wykazuję się profesjonalnym podejściem, żeby współpraca była komfortowa. Przedstawiam Państwu kilka atutów płynących ze współpracy:
                          </p>
                          <br />
                          <div className="timeline-centered">
                              <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                                  <div className="timeline-entry-inner">

                                      <div className="timeline-icon color-1">
                                          <i className="icon-check bigIcon"></i>
                                      </div>

                                      <div className="timeline-label">
                                          <h2 style={{ marginBottom: 10 }}>Poszerzasz ofertę</h2>
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
                                          <h2 style={{ marginBottom: 10 }}>Zyskujesz wsparcie</h2>
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
                                          <h2 style={{ marginBottom: 10 }}>Nie ponosisz kosztów</h2>
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
                                          <h2 style={{ marginBottom: 10 }}>Zarabiasz</h2>
                                          <p>Rozszerzenie własnej oferty to okazja do zwiększenia Twoich zarobków. Korzystnym wynikiem współpracy będą finanse, z uwagi na atrakcyjne prowizje od sprzedaży.</p>
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