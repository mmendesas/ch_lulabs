import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import { API_KEY } from '../../utils/api';

const mapStyles = {
  width: '100%',
  height: '100%'
};

class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    initialCenter: {
      lat: -12.765219,
      lng: -52.079634
    },
    initialZoom: 4
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    const { initialZoom, initialCenter } = this.state;
    const { showMarker, google, lat, lng, logradouro } = this.props;

    return (
      <div className="map">
        <Map
          google={google}
          zoom={showMarker ? 15 : initialZoom}
          style={mapStyles}
          initialCenter={showMarker ? { lat, lng } : initialCenter}
        >
          {showMarker && (
            <Marker onClick={this.onMarkerClick} name={logradouro} />
          )}
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
            <div>
              <h4>{this.state.selectedPlace.name}</h4>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: API_KEY
})(MapContainer);
