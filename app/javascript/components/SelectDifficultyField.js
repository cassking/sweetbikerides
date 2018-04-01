import React from 'react';
const difficulties = ['Flat',
'Flat/Rolling Hills',
'Rolling Hills',
'Hilly',
'Very Hilly']
const SelectDifficultyField = props => {
let routeDifficulties=[]
  routeDifficulties = difficulties.map( difficulty =>{
    return (
      <option key={difficulty} selected value={difficulty} selected>{difficulty}</option>
    );
  })

  return (
    <div className="form-group row">
      <label className="col-3">{props.label}</label>
        <div className="col-9">
          <select name={props.name}
            value={props.value}
            onChange={props.handleDifficultySelectChange}
            className="form-control">
            <option value="selected"></option>
            {routeDifficulties}
          </select>
        </div>
    </div>
  );
}

export default SelectDifficultyField;
