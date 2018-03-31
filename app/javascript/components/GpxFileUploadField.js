import React from 'react';

const GpxUploadFileField = props => {

  return (
    <div className="form-group row">
      <label className="col-3 col-form-label">{props.label}</label>
        <div className="col-9">
          <input ref={props.name}
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
