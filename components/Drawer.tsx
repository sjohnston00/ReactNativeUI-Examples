import React, { useRef, useState } from "react";
import {
  Alert,
  LayoutAnimation,
  StyleSheet,
  Touchable,
  TouchableWithoutFeedback
} from "react-native";
import {
  Assets,
  Drawer,
  Avatar,
  Badge,
  View,
  Text,
  Colors,
  TouchableOpacity,
  Button
} from "react-native-ui-lib";
import { Habit } from "../App";

type Props = {
  habits: Habit[];
};

const ITEMS = {
  read: {
    text: "Read",
    background: Colors.green30,
    testID: "left_item_read"
  },
  archive: {
    text: "Archive",
    background: Colors.blue30,
    testID: "right_item_archive"
  },
  delete: {
    text: "Delete",
    background: Colors.red30,
    testID: "right_item_delete"
  }
};

export function ReactNativeUIDrawer({ habits }: Props) {
  return (
    <Drawer>
      <View
        bg-grey80
        paddingH-20
        paddingV-10
        marginB-20
        row
        centerV
        style={{ borderBottomWidth: 1, borderColor: Colors.grey60 }}>
        <Badge
          testID='drawer_item_badge'
          size={12}
          backgroundColor={Colors.red30}
          containerStyle={{ marginRight: 8 }}
        />
        <View marginL-20>
          <Text text70BO>Test data</Text>
          <Text text80 marginT-2>
            you have a message
          </Text>
        </View>
      </View>
    </Drawer>
  );
}

import {
  View as NativeView,
  Text as NativeText,
  FlatList,
  Animated
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { RectButton } from "react-native-gesture-handler";

export function NativeDrawer({ habits }: Props) {
  const handleSwipeOnPress = () => {
    Alert.alert("You pressed archive button");
    ref?.current?.close();
  };

  const ref = useRef(null);
  const renderLeftAction = (
    progressAnimatedValue: Animated.AnimatedInterpolation,
    dragAnimatedValue: Animated.AnimatedInterpolation
  ) => {
    const trans = dragAnimatedValue.interpolate({
      inputRange: [0, 50, 100, 101],
      outputRange: [-20, 0, 0, 1]
    });

    return (
      <RectButton
        onPress={handleSwipeOnPress}
        style={{ backgroundColor: "green", padding: 20 }}>
        <Animated.Text style={{ transform: [{ translateX: trans }] }}>
          Left
        </Animated.Text>
      </RectButton>
    );
  };

  return (
    <Swipeable
      ref={ref}
      containerStyle={styles.a}
      friction={2}
      renderLeftActions={renderLeftAction}>
      <NativeText style={{ color: "white" }}>Native Drawer</NativeText>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  a: {
    padding: 20,
    borderRadius: 4,
    backgroundColor: "red"
  }
});
