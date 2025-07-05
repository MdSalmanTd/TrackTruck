// components/LiveMap.jsx
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';


const MyLocation = ({ position }) => {
    const map = useMap();
    useEffect(() => {
        if (position) {
            map.setView(position, 15);
        }
    }, [position, map]);
    return position ? <Marker position={position} /> : null;
};

const LiveMap = () => {
    const [position, setPosition] = useState(null);

    useEffect(() => {
        if (!navigator.geolocation) {
            alert("Geolocation not supported");
            return;
        }
        const watchId = navigator.geolocation.watchPosition(
            (pos) => {
                const { latitude, longitude } = pos.coords;
                setPosition([latitude, longitude]);
            },
            (err) => console.error("Geolocation error:", err),
            { enableHighAccuracy: true }
        );

        return () => navigator.geolocation.clearWatch(watchId);
    }, []);

    return (
        <div className="w-full h-full overflow-hidden ">
            <MapContainer
                center={position || [23.8103, 90.4125]}
                zoom={13}
                scrollWheelZoom={true}
                className="w-full h-screen"
            >
                <TileLayer
                    url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                    attribution='&copy; <a href="https://carto.com/">CARTO</a>'
                />
                <MyLocation position={position} />
            </MapContainer>

        </div>
    );
};

export default LiveMap;
