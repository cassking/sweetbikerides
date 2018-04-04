import React from 'react';
import { Link } from 'react-router';
import NameTextField from './NameTextField';
import DescriptionTextField from './DescriptionTextField';
import GpxFileUploadField from './GpxFileUploadField';
import SelectCategoryField from './SelectCategoryField';
import SelectDifficultyField from './SelectDifficultyField';
import MapInFormContainer from '../containers/MapInFormContainer'


const AddReviewForm = props => {
  return(
    <div className="add-review-form">
      <form onSubmit={props.handleFormSubmit} encType="multipart/form-data">
        {/* {props.errorDiv} */}
        <div className="add-review-container">
          <label><h3>Add a Route Review</h3></label>


            <NameTextField
              value={props.nameValue}
              name="name"
              label="Name Of Ride Route"
              name="name"
              type="text"
              className="name"
              id="name"
              handleNameChange={props.handleNameChange}
            />
            <DescriptionTextField
              value={props.descriptionValue}
            label="Add A Description"
            name="description"
            type="text"
            className="description"
            id="descrption"
            handleDescriptionChange={props.handleDescriptionChange}
          />
            <h4>Add coordinates for your route using the map below</h4>
            <MapInFormContainer

            />

          <SelectCategoryField
            value={props.categoryValue}
            placeholder="Choose a category"
            label="Choose A Category"
            name="category"
            className="category"
            id="category"
            handleCategorySelectChange={props.handleCategorySelectChange}
          />
        <SelectDifficultyField
          value={props.difficultyValue}
          placeholder="Choose a difficulty"
          label="Choose A Difficulty"
          name="difficulty"
          className="difficulty"
          id="difficulty"
          handleDifficultySelectChange={props.handleDifficultySelectChange}
        />
          <GpxFileUploadField
            className="upload-file"
            label="GPX file upload"
            name="file"
            type="file"
            id="file"
            handleFileUploadChange={props.handleFileUploadChange}
          />

          <div><input type="submit" value='Post your Route Review' /></div>
        </div>
      </form>
    </div>
  )
}

export default AddReviewForm;
