import React from 'react';

const DescriptionTextField = props => {
  return(
    <div className="form-group row">
      <label className="col-3">{props.label}</label>
        <div className="col-9">
          <input
            id={props.id}
            name={props.name}
            type={props.type}
            value={props.content}
            onChange={props.handleChange}
            className="form-control"
          />
        </div>
    </div>
  )
}

export default DescriptionTextField
