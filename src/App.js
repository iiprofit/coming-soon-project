import React from 'react';
import { ReactComponent as IconFacebook } from './assets/icons/facebook.svg';
import { ReactComponent as IconTwitter } from './assets/icons/twitter.svg';
import { ReactComponent as IconGithub } from './assets/icons/github.svg';
import "./App.css";

class App extends React.Component {
  render = () => {
    return (
      <div className="card">
        <div className="header">
          <div className="logo">
            <a href=".">LOGO</a>
          </div>
          <div className="social">
            <a href="#" title="Facebook" target="_blank" >
              <IconFacebook className="icon" />
            </a>
            <a href="#" title="Twitter" target="_blank" >
              <IconTwitter className="icon" />
            </a>
            <a href="#" title="GitHub" target="_blank">
              <IconGithub className="icon" />
            </a>
          </div>
        </div>
        <div className="content">
          <div className="title-holder">
            <h1>Get ready for the change.</h1>
            <p>Website coming soon. Please check back to know more. Shoot us an email if you're curious.</p>
          </div>
          <a href="mailto:email@example.com">
            <div className="cta">Send us an email</div>
          </a>
        </div>
        <div className="footer">
          <span>made by <a className="underlined" href="#" target="_blank" >Company-Name</a> </span>
        </div>
      </div>
    );
  }
}

export default App;