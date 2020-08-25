import React from 'react';

export default class Introduction extends React.Component {
  constructor(props) {
    super(props);
    this.state = { wideScreen: false }
  }
  componentDidMount() {
    window.addEventListener('resize', this.resize.bind(this));
    this.resize();
  }

  resize() {
    this.setState({ wideScreen: window.innerWidth > 760 });
  }

  render() {
    return (
      <div className="Introduction">
        <section id="colorlib-hero" className="js-fullheight" style={{marginBottom: 20}}>
          <div className="flexslider js-fullheight">
            <ul className="slides js-fullheight">
              {this.state.wideScreen ? (
                <li className="js-fullheight">
                  <video poster="images/MklepsDes.gif" id="bgvid" playsinline autoPlay muted loop style={{height: '100%', width: '100%'}}>
                    <source src="videos/MADUF.mp4" type="video/mp4"/>
                  </video>
                </li>
              ) : (
                <li className="js-fullheight">
                  <video poster="images/MMobkleps.gif" id="bgvid" playsinline autoPlay muted loop style={{height: '100%', width: '100%'}}>
                    <source src="videos/MADUMOB.mp4" type="video/mp4"/>
                  </video>
                </li>
              )}
            </ul>
          </div>
        </section>
      </div>
    )
  }
}
