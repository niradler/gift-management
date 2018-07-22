import React, { Component } from 'react';
import Table from '../../components/Table/Table';
import api from '../../services/api';

class Admin extends Component {

  constructor(){
    super();
    this.state={};
    this.init();
  }

  init = async () => {
    const req = await api.getShippingAddress();
    this.setState({table_data: req.data.address || []});
  };

  render() {
    return <div className="Admin">
        <section className="hero is-primary is-medium">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              Admin
            </h1>
            <h2 className="subtitle">
              Shipping details
            </h2>
          </div>
        </div>
      </section>

    <section className="section">
            <div className="container">
              <h1 className="title">Shipping Details</h1>
              {
                this.state.table_data ? <Table data={this.state.table_data}/> : <h1>Loading ...</h1>
              }

    </div>
    </section>

    </div>;
  }
}

export default Admin;
