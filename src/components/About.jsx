import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-about" data-section="about">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                                    <div className="col-md-12">
                                        <div className="about-desc">
                                            <h2 className="colorlib-heading">Współpraca</h2>
                                            <p>Wszyscy klienci współpracujący z tą firmą mogą skorzystać z najwyższej klasy obsługi w atrakcyjnych cenach. W obszarze produktów ubezpieczeniowych gwarantujemy kompleksową pomoc podczas wyboru ubezpieczeń, troszcząc się o kompletne dostosowanie propozycji do konkretnych potrzeb klientów. Pełna opieka przy zakupie a zwłaszcza przy zgłaszaniu zdarzeń czy szkód.</p>
                                            <p>Wszyscy agenci współpracujący z tą firmą mogą skorzystać z programu porównującego oferty Towarzystw Ubezpieczeniowych.</p>
                                            <p></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                                <div className="hire">
                                    <h2 style={{ textAlign: 'center' }}>NOWOŚĆ! Ubezpieczenie psa i kota</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}