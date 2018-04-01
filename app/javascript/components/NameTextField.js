import React from 'react';

const NameTextField = props => {
  return(
    <div className="form-group row">
      <label className="col-3">{props.label}</label>
        <div className="col-9">
          <input
            value={props.value}
            name={props.name}
            type={props.type}
            id={props.id}

            onChange={props.handleNameChange}
            className="form-control"
          />
        </div>
    </div>
  )
}

export default NameTextField
