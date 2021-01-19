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
                                        W trosce o dopasowanie propozycji do konkretnych potrzeb gwarantuję pomoc nie tylko podczas wyboru czy zakupu ubezpieczeń, ale również przy zgłaszaniu zdarzeń.<br />
                                        W celu utrzymania wysokiej jakości usług współpracuję z przodującymi Towarzystwami Ubezpieczeniowymi.<br />
                                        Dbam, aby moi klienci czuli się zabezpieczeni i ze spokojem spoglądali w przyszłość.
                                    </p>
                                </div>
                            </div>
                            <div style={{ textAlign: 'center', flexGrow: 1, width: '50%' }}>
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
