import ContactCss from "./Contact.module.css";
import { useState, useLayoutEffect } from "react";
import mapboxgl from "mapbox-gl/dist/mapbox-gl.js";
import React from "react";

function Contact(props) {
  //mapbox api
  const [marker, setMarker] = useState();
  mapboxgl.accessToken =
    "pk.eyJ1IjoiZGFubmV5dHJpZXUiLCJhIjoiY2t5OXU4NHNpMDl4YjJucDg5aGdqenViZyJ9.IFqyiKcBZEZK_gJNv58TjA";
  useLayoutEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/dark-v10",
      center: [12.567898, 55.67583],
      zoom: 9,
    });
    // create marker
    const mapMarker = new mapboxgl.Marker()
      .setLngLat([12.567898, 55.67583])
      .addTo(map);
    setMarker(mapMarker);
  }, []);
  //Store locations data
  const stores = {
    central: [12.567898, 55.67583],
    norrebro: [12.553806, 55.699299],
    airport: [12.650784, 55.618042],
  };
  function handleStoreChange(event) {
    const location = event.target.value;
    marker.setLngLat(stores[location]);
  }

  return (
    <>
      <article className={ContactCss.container}>
        <h2>Contact Us</h2>
        <h3>Address</h3>
        <h4>123 Main Street, Anytown, CA 12345 – USA</h4>
        <h3>Phone</h3>
        <h4>Hotline: 1009 678 456</h4>
        <h3>Email</h3>
        <h4>mail@domain.com</h4>
      </article>
      <div className={ContactCss.mapOverlay}>
        <h3>Choose store: </h3>
        <select onChange={handleStoreChange}>
          <option value="central">Central station</option>
          <option value="norrebro">Norrebro street</option>
          <option value="airport">CPH Airport</option>
        </select>
      </div>
      <div id="map" className={ContactCss.map}></div>
    </>
  );
}

export default Contact;
