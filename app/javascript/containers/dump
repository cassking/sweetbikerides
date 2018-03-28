import React, { Component, PropTypes } from 'react'
import ReactMapboxGl, { Layer, Feature, ZoomControl } from "react-mapbox-gl";


class MapContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  componentDidMount() {
    ReactMapboxGl.accessToken = 'sk.eyJ1IjoiY2Fzc2tpbmciLCJhIjoiY2pmOXI0czcxMDdncDMzbTFtbjVvZDM2YyJ9.MOZj4vWbSczjsQeI23sVEw'
    new ReactMapboxGl.Map({
      container: this.container,
      zoom: 7,
      interactive:true,
      center: [-122.486052, 37.830348],
      style: 'mapbox://styles/mapbox/light-v9'
    })
  }

  render() {
    return (
      <Map
        style="mapbox://styles/mapbox/outdoors-v9"
        containerStyle={{
          height: "100vh",
          width: "100vw"
        }}>

       <Layer
         type="line"
         layout={ { "line-join": "round","line-cap": "round"} }
         paint= { {"line-color": "#888",  "line-width": 4} }
         >
        <Feature properties={{'color': '#33C9EB'}} />
       </Layer>
          <ZoomControl/>
      </Map>
    )
  }
}

export default MapContainer;
