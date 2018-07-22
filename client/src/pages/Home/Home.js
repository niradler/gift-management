import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer/Footer';

class Home extends Component {
  render() {
    return <div className="Home">
      <section className="hero is-info is-large">
  <div className="hero-head">
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <div className="navbar-item">
          <h1 className="title"> SNAPPY </h1>
          </div>          
        </div>
      </div>
    </nav>
  </div>

  <div className="hero-body">
    <div className="container has-text-centered">
      <p className="title">
      Employee Recognition Done Right!
      </p>
      <p className="subtitle">
      Take your culture to the next level - make work fun!
      </p>
    </div>
  </div>

  <div className="hero-foot">
    <nav className="tabs is-boxed is-fullwidth">
      <div className="container">
        <ul>
          <li className="is-active">
          <Link to='/shipping'>Accept Your Gift</Link>
          </li>
          <li>
          <Link to='/admin'>Admin</Link>
          </li>        
        </ul>
      </div>
    </nav>
  </div>
</section>


<Footer />
    </div>;
  }
}

export default Home;
