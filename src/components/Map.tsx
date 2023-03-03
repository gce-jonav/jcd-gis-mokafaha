import { MapContainer, Marker, Popup, TileLayer, useMap, WMSTileLayer } from 'react-leaflet';
import * as L from 'leaflet';
import { useEffect, useRef } from 'react';

export type ViewOptions = {
  center: [number, number];
  zoom: number;
};

const defaultViewOptions: ViewOptions = {
  center: [31.3, 37.5],
  zoom: 8,
};

type Props = {
  viewOptions?: ViewOptions;
};

export default function Map({ viewOptions }: Props) {
  const mapRef = useRef<L.Map>(null);

  useEffect(() => {
    if (!mapRef.current || !viewOptions) return;

    mapRef.current.flyTo(viewOptions.center, viewOptions.zoom);
  }, [viewOptions]);

  return (
    <MapContainer
      {...(viewOptions ? viewOptions : defaultViewOptions)}
      style={{ flex: 1, height: '100%', width: '100vw' }}
      ref={mapRef}
    >
      {/* Satellite tile images */}
      <TileLayer
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        attribution="Tiles Esri"
      />
      <WMSTileLayer
        url="https://geoserver.gisjordan.com/geoserver/gce/wms"
        crs={L.CRS.EPSG4326}
        layers="gce:Jurisdiction_Areas"
        format="image/png"
        transparent={true}
        opacity={1}
        version="1.1.1"
        styles="jcd_jur"
        attribution="JCD - GCE Jordan"
      />
      <WMSTileLayer
        url="https://geoserver.gisjordan.com/geoserver/gce/wms"
        crs={L.CRS.EPSG4326}
        layers="gce:centers"
        format="image/png"
        transparent={true}
        version="1.1.1"
        styles="jcd_centers"
        attribution="JCD - GCE Jordan"
      />
    </MapContainer>
  );
}
