import React, {useEffect, useRef, useState} from "react";
import { usePetData } from "hooks";
import mapboxgl from "mapbox-gl";
import css from "./Map.css";
import { InputComp } from "Ui/inputs/Input";
import { SubTitle } from "Ui/subtitle/Subtitle";
import { ButtonRosa } from "Ui/buttons/Button";

export const mapboxToken = "pk.eyJ1Ijoia2VhbmVkZXYiLCJhIjoiY2wzeXliMHBkMGVtcjNicDBsaGc1OGJ6NiJ9.1Db1Gwvjb0eViHzNQbTKMg";
mapboxgl.accessToken = mapboxToken;
console.log(mapboxToken, mapboxgl.accessToken);

export function Mapbox(){
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [petData, setPetData] = usePetData();
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [query, setQuery] = useState("");
    const [zoom, setZoom] = useState(9);

    
    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });
    }, [mapContainer]);

    async function searchPet(){
        const { features } = await (
            await fetch(
              "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
                query +
                ".json?country=ar&types=place%2Caddress%2Clocality%2Cneighborhood%2Cregion%2Cdistrict&postcode%2Cpoi&autocomplete=true&fuzzyMatch=true&routing=true&access_token=" +
                mapboxToken
            )
          ).json();
          const longitud = features["0"]?.geometry.coordinates[0];
          const latitud = features["0"]?.geometry.coordinates[1];
          map.current.setCenter([longitud, latitud]);
          const place = query;
          console.log(features);
          setLat(latitud);
          setLng(longitud);
          console.log(place, latitud, longitud);
          setPetData({...petData, lat:latitud, lng:longitud, petUbi:place})
    }
    
        
    function handleChange(e){
        setQuery(e.target.value);
    }
    

  
    return(
        <div className={css.container}>
            <link href="https://api.mapbox.com/mapbox-gl-js/v1.10.1/mapbox-gl.css" rel="stylesheet" />
            <div className={css.map} ref={mapContainer}>
                <div className="sidebar">
                    Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
                </div>
            </div>
            <div>
                <label>
                    <span>Ubicacion</span>
                    <input onChange={handleChange}  name="name" type="string" />
                </label>
                <button onClick={searchPet}>Buscar</button>
                <SubTitle children="Buscá un punto de referencia para reportar a tu mascota. Puede ser una dirección, un barrio o una ciudad." />
            </div>
        </div>
    )
}