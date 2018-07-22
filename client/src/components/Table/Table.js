import React from 'react';

const Table = (props) => (
    <div>
    <table className="table is-hoverable">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Address</th>
          <th>Zip Code</th>
          <th>City</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
          {
              props.data.map((a, i) => (
                <tr key={a.first_name + i}>
                <td>{a.first_name}</td>
                <td>{a.last_name}</td>
                <td>{a.address}</td>
                <td>{a.zip_code}</td>
                <td>{a.city}</td>
                <td>{a.email}</td>
                <td>{a.phone}</td>
                <td>{a.notes}</td>
                </tr>
              ))
          }       
      </tbody>
    </table>
    </div>
)

export default Table;