const DataAPI = async () => {
    try {
      let data = await fetch(
        "https://sheets.googleapis.com/v4/spreadsheets/1k1En7elz-mxDEMwkFSRsiGkUOCulpJKgMUWtSLEpCTs/values/Sheet1?valueRenderOption=FORMATTED_VALUE&key=AIzaSyDEiSql14bmWTvwm5aOwOoijmhK-f9Caqs"
      );
      let { values } = await data.json();
      let [, ...Data] = values.map((data) => data);
      return Data;
    } catch {
      console.log("Error");
    }
  };
  export default DataAPI;
  
// https://sheets.googleapis.com/v4/spreadsheets/1d2DZRKthfVZwxs2gGgillC7GO_YY1S13NZq8t7-X0lk/values/Sheet1?valueRenderOption=FORMATTED_VALUE&key=AIzaSyDviRCV3vNrfY2IVNduOGJb-oGxcGvp_jY