import React from 'react';
import { Link } from 'react-router';
import NameTextField from './NameTextField';
import DescriptionTextField from './DescriptionTextField';
import GpxFileUploadField from './GpxFileUploadField';
import SelectCategoryField from './SelectCategoryField';
import SelectDifficultyField from './SelectDifficultyField';
import PointsOfInterestTextField from './PointsOfInterestTextField';
import MapInFormContainer from '../containers/MapInFormContainer'

const AddReviewForm = props => {
  return(
    <div className="add-review-form">
      <form onSubmit={props.handleFormSubmit} encType="multipart/form-data">
        {props.errorDiv}
        <div className="add-review-container">
          <label><h3>Add a Route Review</h3></label>

            <NameTextField
              value={props.nameValue}
              placeholder="Add a Route Name (required)"
              name="name"
              label="Name of Ride Route"
              name="name"
              type="text"
              className="name"
              id="name"
              handleNameChange={props.handleNameChange}
            />
            <DescriptionTextField
              value={props.descriptionValue}
              placeholder="Add a Route Description (required)"
              label="Add a Description"
              name="description"
              type="text"
              className="description"
              id="description"
              handleDescriptionChange={props.handleDescriptionChange}
          />
            <h4>Add coordinates by clicking on A and B in the map to log the start and end coordinate points</h4>
            <p>Once your Route Review is created, total mileage, starting address and ending address will appear automatically on the Route Review page, if available for that particular route.</p>
            <p><img  src="/images/geolocate-icon.png" alt="avatar" /> Clicking on the
            geo-locate icon on map will find your present location</p>

            <MapInFormContainer
              handleStartCoordinatesChange={props.handleStartCoordinatesChange}
              handleEndCoordinatesChange={props.handleEndCoordinatesChange}
            />
            <SelectCategoryField
              value={props.categoryValue}
              placeholder="Choose a category"
              label="Choose a Category (required)"
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
        <PointsOfInterestTextField
          value={props.pointsOfInterestValue}
          placeholder="Add any points of interest"
          label="Add any points of interest along the way"
          name="points_interest"
          type="text"
          className="points_interest"
          id="points_interest"
          handlePointsOfInterestChange={props.handlePointsOfInterestChange}
      />

          <div><input type="submit" value='Post your Route Review' /></div>
        </div>
      </form>
    </div>
  )
}

export default AddReviewForm;
