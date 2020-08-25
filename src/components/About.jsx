import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-about" data-section="about">
                    <div className="colorlib-narrow-content">
                        <div className="row animate-box contactWrapper" data-animate-effect="fadeInLeft">
                                <div style={{ marginLeft: 10, flexGrow: 1, width: '50%' }}>
                                <div className="about-desc">
                                    <h2 className="colorlib-heading">O mnie</h2>
                                    <p style={{ fontSize: '1.4em' }}>
                                      Gwarantuję kompleksową pomoc podczas wyboru ubezpieczenia, troszcząc się o dopasowanie propozycji do konkretnych potrzeb.
                                      <br />Klienci otrzymują opiekę nie tylko przy wyborze czy zakupie ofert, ale również przy zgłaszaniu zdarzeń.
                                      <br />W zakresie ubezpieczeń zdrowotnych lub na życie, do każdej osoby, bądź sprawy podchodzę indywidualnie.
                                      <br />W celu zachowania poczucia bezpieczeństwa współpracuję wyłącznie z przodującymi Towarzystwami Ubezpieczeniowymi.
                                      <br />Dbam o to, aby moi klienci czuli się bezpieczni i spokojni o swoją przyszłość.
                                    </p>
                                </div>
                            </div>
                            <div style={{ textAlign: 'center', flexGrow: 1, width: '50%' }}>
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <img alt="logo" src="images/ja.png" />
                                <br />
                                <br />
                                <h4>Marcin Marczyk</h4>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
