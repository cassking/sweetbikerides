import React from 'react';

const GpxUploadFileField = props => {

  return (
    <div className="form-group row">
      <label className="col-3 col-form-label">
        <i className="fa fa-cloud-upload"></i> {props.label}</label>
        <span></span>
        <div className="col-9">
          <input
            id={props.id}
            type={props.type}
            name={props.name}
            className={props.className}
            onChange={props.handleFileUploadChange}
          />
        </div>
    </div>
  );
}

export default GpxUploadFileField;
