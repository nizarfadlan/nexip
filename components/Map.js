import { MapContainer, TileLayer ,Marker,Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet-defaulticon-compatibility'

export default function Map({ latMap, lonMap }){
  const lat = latMap
  const lon = lonMap
  return (
    <MapContainer center={[lat,lon]} zoom={50} scrollWheelZoom={false} style={{height: "100vh", width: "100%"}}>
      {/* 
        Jika tidak menggunakan MAPBOX pakai default leatlet
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      /> 
      */}
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.MAPBOX_API_KEY}`}
        attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
      />
      <Marker position={[lat,lon]} draggable={true} animate={true}>
        <Popup>
          Location
        </Popup>
      </Marker>
    </MapContainer>
  )
}