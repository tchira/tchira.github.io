import React, { useRef, useEffect, useState } from 'react';

import mapboxgl from 'mapbox-gl/dist/mapbox-gl-csp';
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';
import MapboxDraw from "@mapbox/mapbox-gl-draw";

import FormatPanel from "./FormatPanel"

mapboxgl.workerClass = MapboxWorker;
mapboxgl.accessToken = 'pk.eyJ1IjoiY2hpcmF0dWRvciIsImEiOiJjaW10NHlhZWYwMDZzdm5seXZiOXM4bnpsIn0.eZ_3bNvBihSFfydEOwzbrg';


const Map = () => {

    const mapContainer = useRef();
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/dark-v10',
            center: [lng, lat],
            zoom: zoom
        });

        setUpMapMove(map)
        setUpDrawControls(map)

        return () => map.remove();
    }, []);

    function setUpDrawControls(map) {
        var Draw = new MapboxDraw();
        map.addControl(Draw, 'top-right')
        map.on('draw.create', (e) => {
            console.log(e.features)
        })
    }

    function setUpMapMove(map) {
        map.on('move', () => {
            setLng(map.getCenter().lng.toFixed(4))
            setLat(map.getCenter().lat.toFixed(4))
            setZoom(map.getZoom().toFixed(2))
        })
    }

    return (
        <div>
            <div className="sidebar">
                Lat {lat} : Lon {lng} | Zoom {zoom}
            </div>
            <FormatPanel/>
            <div className="map-container" ref={mapContainer} />
        </div>
    )
}

export default Map;