import React from 'react';
const categories =['Asphalt',
'Grass',
'Gravel',
'Dirt/Rocky',
'Mixed/Asphalt/Gravel/Grass',
'Dirt']

const SelectCategoryField = props => {
let routeCategories=[]
  routeCategories = categories.map( category =>{
    return (
      <option key={category} selected value={category} >{category}</option>
    );
  })

  return (
    <div className="form-group row">
      <label className="col-3">{props.label}</label>
        <div className="col-9">
          <select name={props.name}
            value={props.value}
            onChange={props.handleCategorySelectChange}
            className="form-control">
            <option value="selected"></option>
            {routeCategories}
          </select>
        </div>
    </div>
  );
}

export default SelectCategoryField;
