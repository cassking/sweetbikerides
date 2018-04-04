import React from 'react';

const PointsOfInterestTextField = props => {
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
            onChange={props.handlePointsOfInterestChange}
            className="form-control"
          />
        </div>
    </div>
  )
}

export default PointsOfInterestTextField
