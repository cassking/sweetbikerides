import React from 'react';

const DescriptionTextField = props => {
  return(
    <div className="form-group row">
      <label className="col-3">{props.label}</label>
        <div className="col-9">
          <input
            placeholder={props.placeholder}
            value={props.value}
            id={props.id}
            name={props.name}
            type={props.type}
            onChange={props.handleDescriptionChange}
            className="form-control"
            required />
        </div>
    </div>
  )
}

export default DescriptionTextField
