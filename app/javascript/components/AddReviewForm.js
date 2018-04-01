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
      <form onSubmit={this.handleFormSubmit} encType="multipart/form-data">
        {/* {props.errorDiv} */}
        <div className="add-review-container">
            <label><h3>Add a Route Review</h3></label>
            <NameTextField
              content={props.name}
              label="Name"
              name="name"
              type="text"
              className="name"
              id="name"
              handleChange={props.handleNameChange}
            />
            <DescriptionTextField
            content={props.description}
            label="Description"
            name="description"
            type="text"
            className="description"
            id="descrption"
            handleChange={props.handleDescriptionChange}
          />
          <SelectCategoryField
          placeholder="Choose a category"
          label="Category"
          name="category"
          className="category"
          id="category"
          handleChange={props.handleCategorySelectChange}
        />
        <SelectDifficultyField
          placeholder="Choose a difficulty"
        label="Difficulty"
        name="difficulty"
        className="difficulty"
        id="difficulty"
        handleChange={props.handleDifficultySelectChange}
      />
          <GpxFileUploadField
            className="upload-file"
            label="GPX file upload"
            name="file"
            type="file"
            id="file"
            handleChange={props.handleFileUploadChange}
          />
          <MapInFormContainer
            height="80vh"
            width="80vh"
            center={[8.66903, 50.11259]}
            zoomLevel={4}
            animated={true}
            showUserLocation={true}
            coordinates={this.coordinates}
          />



          <div><input type="submit" value='Post your Route Review' /></div>
        </div>
      </form>
    </div>
  )
}

export default AddReviewForm;
