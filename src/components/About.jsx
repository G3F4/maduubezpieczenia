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
                                            <h2 className="colorlib-heading">O mnie</h2>
                                            <p style={{ fontSize: '1.4em' }}>Gwarantuję kompleksową pomoc podczas wyboru ubezpieczenia, troszcząc się o dopasowanie propozycji do konkretnych potrzeb. Klienci otrzymują opiekę nie tylko przy wyborze czy zakupie ofert, ale również przy zgłaszaniu zdarzeń. W zakresie ubezpieczeń zdrowotnych lub na życie, do każdej osoby, bądź sprawy podchodzę indywidualnie. W celu zachowania poczucia bezpieczeństwa współpracuję wyłącznie z przodującymi Towarzystwami Ubezpieczeniowymi. Dbam o to, aby moi klienci czuli się bezpieczni i spokojni o swoją przyszłość. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}