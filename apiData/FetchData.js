import React, { useState,useEffect,useContext } from "react";

const FetchData = async () => {
    try {
      let res = await fetch(
        "https://sheets.googleapis.com/v4/spreadsheets/1HzqNFvyYcxjMUSeFoVCZCVtPZYAyC8DVDLzpvtdnIo0/values/Sheet1?valueRenderOption=FORMATTED_VALUE&key=AIzaSyDEiSql14bmWTvwm5aOwOoijmhK-f9Caqs"
      );
      const data = await res.json();
      let { values } = data;
      // console.log(data);
      return values;
      
    } catch (err) {
      console.log("Error", err);
    }
};

export const DataContext = React.createContext({});

export const DataProvider  = ({children}) => {

  const [data, setData] = useState(null);
  const [loading,setLoading]=useState(false);

  const getData = async ()=>{
    setLoading(true)
    const newText = await FetchData();
    setData(newText)
    setLoading(false)
  }

  useEffect(()=> {
    getData()
  },[])


  return (
      <DataContext.Provider value={{loading,list:data}}> 
        {children}
      </DataContext.Provider>
    )
}
  
// https://sheets.googleapis.com/v4/spreadsheets/1d2DZRKthfVZwxs2gGgillC7GO_YY1S13NZq8t7-X0lk/values/Sheet1?valueRenderOption=FORMATTED_VALUE&key=AIzaSyDviRCV3vNrfY2IVNduOGJb-oGxcGvp_jY