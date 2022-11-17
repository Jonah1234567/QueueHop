import FetchData from './FetchData';
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, ScrollView, ActivityIndicator, View } from "react-native";

export default function Data() {
    const [value, setValue] = useState();
    useEffect(() => {
      let data = async () => {
        setValue(await FetchData());
      };
      data();
    }, []);
    if (!value) {
      return (
        <ActivityIndicator
          size="large"
          animating={true}
          color="rgba(137,232,207,100)"
        />
      );
    }
    return (
        <ScrollView>
            {value.map((files, index) => (
                <Text> {files[0]} </Text>
            ))}
      </ScrollView>
    );
}