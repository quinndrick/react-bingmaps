import React, { Component } from "react";
import ReactBingmaps from "components/ReactBingmaps";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true,
      bingmapKey:
        "AvDUTg8D7NBg8OUKTvm2GSXDkAwYpK7-TJSx8mW9GlID96kK6CUU_osRadnrZwqQ",
      infoboxes: [
        {
          location: [13.0827, 80.2707],
          option: { title: "Chennai", description: "..." },
          addHandler: { type: "click", callback: this.callBackMethod }
        }
      ],
      pushPins: [
        {
          location: [13.0827, 80.2707],
          option: { color: "red" },
          addHandler: { type: "click", callback: this.callBackMethod }
        },
        {
          location: [-33.854109, 151.2132827],
          option: { color: "red" },
          addHandler: { type: "click", callback: this.callBackMethod }
        }
      ],
      heatMap: [
        {
          location: [-33.854109, 151.213282],
          option: { color: "red" }
        }
      ],
      regularPolygons: [
        {
          center: [13.0827, 80.2707],
          radius: 5,
          points: 36,
          option: { fillColor: "rgba(0,0,0,0.5)", strokeThickness: 2 }
        }
      ],
      infoboxesWithPushPins: [
        {
          location: [13.0827, 80.2707],
          addHandler: "mouseover", //on mouseover the pushpin, infobox shown
          infoboxOption: { title: "Infobox Title", description: "Infobox" },
          pushPinOption: { title: "Pushpin Title", description: "Pushpin" },
          infoboxAddHandler: { type: "click", callback: this.callBackMethod },
          pushPinAddHandler: { type: "click", callback: this.callBackMethod }
        }
      ],
      boundary: {
        location: ["chennai"],
        option: {
          entityType: "PopulatedPlace"
        },
        polygonStyle: {
          fillColor: "rgba(161,224,255,0.4)",
          strokeColor: "#a495b2",
          strokeThickness: 2
        }
      },
      searchInput: "",
      getLocationHandledData: "",
      polyline: {
        location: [[13.0827, 80.2707], [13.0827, 80.1907]],
        option: {
          strokeColor: "blue",
          strokeThickness: 10,
          strokeDashArray: [1, 2, 5, 10]
        }
      },
      directions: {
        renderOptions: { itineraryContainer: "itineraryContainer" },
        requestOptions: { routeMode: "driving", maxRoutes: 2 },
        wayPoints: [
          {
            address: "Chennai, Tamilnadu"
          },
          {
            address: "Salem, Tamilnadu"
          }
        ]
      }
    };
  }
  changeState() {
    this.setState({
      infoboxes: [
        {
          location: [13.0827, 80.2707],
          option: { title: "Chennai", description: "Tamilnadu" },
          addHandler: { type: "click", callback: this.callBackMethod }
        }
      ],
      pushPins: [
        {
          location: [13.0827, 80.2707],
          option: { color: "yellow" },
          addHandler: { type: "click", callback: this.callBackMethod }
        },
        {
          location: [13.0727, 80.2707],
          option: { color: "green" },
          addHandler: { type: "click", callback: this.callBackMethod }
        }
      ],
      regularPolygons: [
        {
          center: [13.0827, 80.2707],
          radius: 5,
          points: 6,
          option: { fillColor: "rgba(0,0,0,0.5)", strokeThickness: 2 }
        }
      ],
      infoboxesWithPushPins: [
        {
          location: [13.0827, 80.2707],
          addHandler: "mouseover", //on mouseover the pushpin, infobox shown
          infoboxOption: { title: "Chennai", description: "Infobox" },
          pushPinOption: { title: "Chennai", description: "Pushpin" },
          infoboxAddHandler: { type: "click", callback: this.callBackMethod },
          pushPinAddHandler: { type: "click", callback: this.callBackMethod }
        }
      ],
      boundary: {
        search: "636303",
        polygonStyle: {
          fillColor: "rgba(161,224,255,0.4)",
          strokeColor: "#a495b2",
          strokeThickness: 2
        },
        option: {
          entityType: "PopulatedPlace"
        }
      },
      polyline: {
        location: [[13.0827, 80.2707], [13.0527, 80.2707]],
        option: {
          strokeColor: "red",
          strokeThickness: 10,
          strokeDashArray: [1, 2, 5, 10]
        }
      },
      directions: {
        inputPanel: "inputPanel",
        renderOptions: { itineraryContainer: "itineraryContainer" },
        requestOptions: { routeMode: "driving", maxRoutes: 2 },
        wayPoints: [
          {
            address: "Chennai, Tamilnadu"
          },
          {
            address: "Salem, Tamilnadu"
          },
          {
            address: "Coimbatore, Tamilnadu"
          }
        ]
      }
    });
  }
  handleSubmit(event) {
    if (this.state.searchInput !== null && this.state.searchInput !== "") {
      this.setState({
        boundary: {
          search: this.state.searchInput,
          polygonStyle: {
            fillColor: "rgba(161,224,255,0.4)",
            strokeColor: "#a495b2",
            strokeThickness: 2
          },
          option: {
            entityType: "PopulatedPlace"
          }
        }
      });
    }
    event.preventDefault();
  }
  GetLocationHandled(location) {
    this.setState({
      getLocationHandledData: JSON.stringify(location)
    });
  }
  GetEventHandled(callbackData) {
    console.log(callbackData);
  }
  render() {
    return (
      <div>
        <h1>
          <u>Example React-Bingmaps</u>
        </h1>
        {this.state.isVisible && (
          <div>
            <div className="map-three">
              <u>Heat Maps</u>
              <ReactBingmaps
                className="heatMap"
                id="heat"
                bingmapKey={this.state.bingmapKey}
                heatMap={this.state.heatMap}
              />
            </div>
            <div className="map-one">
              <u>Bingmaps with Center set and zoom = 5</u>
              <ReactBingmaps
                id="one"
                bingmapKey={this.state.bingmapKey}
                // center={[13.0827, 80.2707]}
                zoom={4}
                className="customClass"
              />
            </div>
            <div className="map-two">
              <u>Bingmaps with Pushpin</u>
              <ReactBingmaps
                id="two"
                className="customClass"
                bingmapKey={this.state.bingmapKey}
                // center={[13.0827, 80.2707]}
                mapTypeId={"aerial"}
                pushPins={this.state.pushPins}
              />
            </div>
            <div className="map-one">
              <u>Bingmaps with Infobox</u>
              <ReactBingmaps
                id="three"
                center={[13.0827, 80.2707]}
                className="customClass"
                bingmapKey={this.state.bingmapKey}
                infoboxes={this.state.infoboxes}
              />
            </div>
            <div className="map-two">
              <u>Bingmaps with Infobox and Pushpin</u>
              <ReactBingmaps
                id="four"
                // center={[13.0827, 80.2707]}
                className="customClass"
                bingmapKey={this.state.bingmapKey}
                infoboxesWithPushPins={this.state.infoboxesWithPushPins}
              />
            </div>
            <div className="map-one">
              <u>Bingmaps with Regular Polygons</u>
              <ReactBingmaps
                id="five"
                // center={[13.0827, 80.2707]}
                className="customClass"
                bingmapKey={this.state.bingmapKey}
                regularPolygons={this.state.regularPolygons}
              />
            </div>
            <div className="map-two">
              <u>Bingmaps with Spatial Data Service (Boundary)</u>
              <span style={{ display: "inline-block" }}>
                <form onSubmit={this.handleSubmit.bind(this)}>
                  <input
                    type="text"
                    placeholder="search place, pin, city"
                    onChange={event => {
                      this.setState({ searchInput: event.target.value });
                    }}
                    value={this.state.searchInput}
                  />
                  <input type="submit" value="Search" />
                </form>
              </span>
              <ReactBingmaps
                className="customClass"
                id="six"
                // center={[13.0827, 80.2707]}
                bingmapKey={this.state.bingmapKey}
                boundary={this.state.boundary}
              />
            </div>
            <div className="map-one">
              <u>
                Bingmaps with Get Location -{" "}
                <span>{this.state.getLocationHandledData}</span>
              </u>
              <ReactBingmaps
                id="seven"
                className="customClass"
                // center={[13.0827, 80.2707]}
                bingmapKey={this.state.bingmapKey}
                getLocation={{
                  addHandler: "click",
                  callback: this.GetLocationHandled.bind(this)
                }}
              />
            </div>
            <div className="map-two">
              <u>Bingmaps with EventHandlers - callback data is consoled</u>
              <ReactBingmaps
                className="customClass"
                id="eight"
                // center={[13.0827, 80.2707]}
                bingmapKey={this.state.bingmapKey}
                mapHandlers={[
                  {
                    addHandler: "click",
                    callback: this.GetEventHandled.bind(this)
                  },
                  {
                    addHandler: "viewchangeend",
                    callback: this.GetEventHandled.bind(this)
                  }
                ]}
              />
            </div>
            <div className="map-one">
              <u>Bingmaps with Polyline</u>
              <ReactBingmaps
                id="nine"
                className="customClass"
                // center={[13.0827, 80.2707]}
                bingmapKey={this.state.bingmapKey}
                polyline={this.state.polyline}
              />
            </div>
            <div className="map-two">
              <u>Bingmaps with mapOptions - 'maxZoom': 12, 'minZoom': 5 </u>
              <ReactBingmaps
                className="customClass"
                id="ten"
                // center={[13.0827, 80.2707]}
                bingmapKey={this.state.bingmapKey}
                mapOptions={{ maxZoom: 12, minZoom: 5 }}
              />
            </div>

            <div className="map-three">
              <u>Bingmaps with Directions</u>
              <ReactBingmaps
              // className="customClass"
              // id="eleven"
              // center={[13.0827, 80.2707]}
              // bingmapKey={this.state.bingmapKey}
              // directions={this.state.directions}
              />
              <div className="direction-container">
                <div className="input-panel" id="inputPanel" />
                <div className="itinerary-container" id="itineraryContainer" />
              </div>
            </div>
          </div>
        )}
        <br />
      </div>
    );
  }
}

export default App;
