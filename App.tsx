import React from "react";
import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native-ui-lib";

export default function App() {
  return (
    <View flex paddingT-120>
      <Text green20 text20>
        Testing app!
      </Text>
      <StatusBar style='auto' />
    </View>
  );
}
