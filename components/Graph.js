import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import React, { useState, useEffect } from 'react';
import { DataContext } from '../apiData/FetchData';

function TimeSeriesChart() {
  
  
  // data is an array of objects containing time and value properties
  const { list, currentIndex } = React.useContext(DataContext);
// Use the list array to create the data for the time series graph
  const [data, setData] = useState({
    labels: list.map((item) => item[0]), // Use the first column of each item in the list array as the labels for the graph
    datasets: [
      {
        data: list.map((item) => item[1]), // Use the second column of each item in the list array as the data for the graph
      },
    ],
  });

// Update the data variable whenever the currentIndex value changes
useEffect(() => {
  // Get the number of elements in the first dataset
  const numElements = data.datasets[0].data.length;

  // Make sure that all datasets have the same number of elements
  const updatedData = {
    labels: list.slice(0, numElements).map((item) => item[0]),
    datasets: data.datasets.map((dataset) => ({
      ...dataset,
      data: dataset.data.slice(0, numElements),
    })),
  };

  setData(updatedData);
}, [currentIndex, list]);

  const chartConfig = {
    backgroundColor: "#e26a00",
    backgroundGradientFrom: "#fb8c00",
    backgroundGradientTo: "#ffa726",
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: "6",
      strokeWidth: "2",
      stroke: "#ffa726",
    },
  };
  const chartWidth = 400;
  const chartHeight = 200;

  console.log("Data:\n", data)

  return <LineChart
    data={data}
    chartConfig={chartConfig}
    width={chartWidth}
    height={chartHeight}
    />;
};

export default TimeSeriesChart;