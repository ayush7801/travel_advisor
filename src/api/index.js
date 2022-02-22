import axios from "axios";

const url = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

export const getPlaceData = async (sw, ne) => {
    try{
        const { data: { data } } = await axios.get(url,{
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
          },
          headers: {
            'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
            'x-rapidapi-key': 'a9b6c4de33msh820c3f409e8887ap199c0ajsn47cacc07b7ed'
          }
        });
        return data;
    }catch(error){
        console.log(error);
    }
}

