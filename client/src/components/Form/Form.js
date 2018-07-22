import React from 'react';

const Form = (props) => (
  <div >
  <form className="column is-6" onSubmit={props.onSubmit}>
            <div className="field">
              <div className="control">
                <input className="input" type="text" name="first_name" placeholder="First Name" required/>
              </div>
            </div>

             <div className="field">
              <div className="control">
                <input className="input" type="text" name="last_name" placeholder="Last Name" required/>
              </div>
            </div>

             <div className="field">
              <div className="control">
                <input className="input" type="text" name="address" placeholder="Address" required/>
              </div>
            </div>

             <div className="field">
              <div className="control">
                <input className="input" type="number" name="zip_code" placeholder="Zip Code" required/>
              </div>
            </div>

             <div className="field">
              <div className="control">
                <input className="input" type="text" name="city" placeholder="City" required/>
              </div>
            </div>

            <div className="field">
              <div className="control">
                <input className="input" type="email" name="email" placeholder="Email" required/>
              </div>
            </div>

            <div className="field">
              <div className="control">
                <input className="input" type="tel" name="phone"  pattern="[0-9]{10}" placeholder="Phone" required/>
              </div>
            </div>

             <div className="field">
              <div className="control">
                <input className="input" type="text" name="notes" placeholder="Notes" />
              </div>
            </div>

              <div className="field">
              <div className="control">
              <button className="button" type="submit">Submit</button>
              </div>
            </div>
          </form>
  </div>
)

export default Form;