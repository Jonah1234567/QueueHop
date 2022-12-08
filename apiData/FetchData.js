import React, { useState,useEffect,useContext } from "react";
import { NFTData } from "../constants";

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
  const [loading, setLoading] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const getData = async ()=>{
    setLoading(true)
    const newText = await FetchData();
    setData(newText)
    setLoading(false)
  }

  useEffect(()=> {
    getData()
  },[])

  // Increment currentIndex every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      // Check if currentIndex is greater than or equal to the length of the list array
    if (currentIndex >= data.length - 1) {
      // If it is, do not increment the currentIndex
      setCurrentIndex(0);
      return;
    }
    // If it is not, increment the currentIndex
    setCurrentIndex(currentIndex + 1);
    }, 7000);
    return () => clearInterval(interval);
  }, [currentIndex, data]);
  
  return (
      <DataContext.Provider value={{loading,list:data, currentIndex, setCurrentIndex}}> 
        {children}
      </DataContext.Provider>
    )
}
  
// https://sheets.googleapis.com/v4/spreadsheets/1d2DZRKthfVZwxs2gGgillC7GO_YY1S13NZq8t7-X0lk/values/Sheet1?valueRenderOption=FORMATTED_VALUE&key=AIzaSyDviRCV3vNrfY2IVNduOGJb-oGxcGvp_jY