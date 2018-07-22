import React, {Component} from 'react';
import Form from '../../components/Form/Form';
import api from '../../services/api';

class Shipping extends Component {
  constructor(props){
    super();
  }

  onSubmit = async (e) => {
    e.preventDefault();
    const data = {
      first_name: e.target.elements["first_name"].value,
      last_name: e.target.elements["last_name"].value,
      address: e.target.elements["address"].value,
      zip_code: e.target.elements["zip_code"].value,
      city: e.target.elements["city"].value,
      email: e.target.elements["email"].value,
      phone: e.target.elements["phone"].value,
      notes: e.target.elements["notes"].value,
    }
    
    const req_verify = await api.verifyAddress({
      address: data.address,
      city: data.city,
      zip_code: data.zip_code,
    });

    if (req_verify.data.ErrorCode !== 0) {
      alert("Address not found!")
    } else {
      const req_add = await api.addShipping(data);
      alert("Complete!")
      this.props.history.push("/");
    }

  }

  render() {
    return <div className="Shipping">
      <section className="hero is-primary is-medium">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              Congratulation!
            </h1>
            <h2 className="subtitle">
              To accept your gift please fill in your shipping details.
            </h2>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h1 className="title">Shipping Details</h1>

          <Form onSubmit={this.onSubmit} />

        </div>
      </section>

    </div>;
  }
}

export default Shipping;
