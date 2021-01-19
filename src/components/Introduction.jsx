import React from 'react';
import Lottie from 'react-lottie';
import mobMovieData from './mob.json';
import deskMovieData from './desk.json';

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
    const mobOptions = {
      loop: true,
      autoplay: true,
      animationData: mobMovieData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };
    const deskOptions = {
      loop: true,
      autoplay: true,
      animationData: deskMovieData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    return (
      <div className="Introduction">
        <section id="colorlib-hero" className="js-fullheight" style={{marginBottom: 20}}>
          <div className="flexslider js-fullheight">
            <ul className="slides js-fullheight">
              {this.state.wideScreen ? (
                  <Lottie options={deskOptions} />
              ) : (
                  <Lottie options={mobOptions} />
              )}
            </ul>
          </div>
        </section>
      </div>
    )
  }
}
