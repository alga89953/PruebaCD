// import React from "react";
// import  {GoogleMap, withScriptjs, withGoogleMap}  from 'react-google-maps';


// export const Map = (_props) =>{
//     return(
//         <GoogleMap 
//         defaultZoom={10}
//         defaultCenter={{lat: -92.089935 , lng:16.902931}}
//         />
//     );
// };
// export default withScriptjs (
//     withGoogleMap(
//         Map
//     )
// );
import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';

const Map = () => {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 16.902944, lng: -92.089996 }}
    />
  );
};

export default withScriptjs(withGoogleMap(Map));

