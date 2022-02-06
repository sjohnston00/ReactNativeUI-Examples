import React, { useRef, useState } from "react";
import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import {
  ColorPicker,
  Colors,
  Text,
  View,
  TextField,
  Button,
  Incubator,
  Icon,
  Assets
} from "react-native-ui-lib";
import { Alert, Keyboard, TouchableWithoutFeedback } from "react-native";
import {
  ScrollView,
  TouchableHighlight,
  TouchableOpacity
} from "react-native-gesture-handler";

type Habit = {
  name: string;
  colour: string;
};

export default function App() {
  const [colors, setColors] = useState<Array<string>>([]);
  const [text, setText] = useState("");
  const [habits, setHabits] = useState<Array<Habit>>([]);

  const handleNewHabit = () => {
    if (colors.length === 0) {
      alert("You must pick a color");
      return;
    }
    if (!text) {
      alert("You must enter a habit name");
      return;
    }

    setHabits([
      ...habits,
      {
        name: text,
        colour: colors[0]
      }
    ]);
    setText("");
  };

  return (
    <TouchableWithoutFeedback accessible={false} onPress={Keyboard.dismiss}>
      <ScrollView
        style={{
          flex: 1,
          paddingVertical: 80,
          paddingHorizontal: 20,
          marginBottom: 20
        }}>
        <Text text30BO>Adding a habit</Text>
        <Incubator.TextField
          marginV-20
          grey-10
          text60R
          multiline={false}
          returnKeyType='done'
          onScroll={() => console.log("Scrolling")}
          value={text}
          style={{
            borderBottomColor: Colors.primary,
            borderBottomWidth: 2
          }}
          onChangeText={(e) => setText(e)}
          floatingPlaceholder={true}
          floatingPlaceholderColor={Colors.primary}
          placeholder='Habit Name'
          floatOnFocus={true}
          onSubmitEditing={handleNewHabit}
        />
        <Button
          borderRadius={4}
          enableShadow
          marginB-20
          onPress={handleNewHabit}>
          <Text white text70R>
            New Habit
          </Text>
          <Icon
            marginL-10
            tintColor={Colors.white}
            source={Assets.icons.search}
          />
        </Button>
        <ColorPicker
          colors={colors}
          onSubmit={(color, textColor) => setColors([color])}
          onValueChange={(color, textColor) => console.log(color)} //when pressing a color
        />
        <StatusBar style='auto' />
        {/* Works on these views being swipeapple left and right for deletion */}
        {/* https://wix.github.io/react-native-ui-lib/docs/components/basic/Drawer */}
        {habits.length > 0 ? (
          <View>
            {habits.map((habit, index) => (
              <TouchableOpacity
                key={index}
                style={{
                  backgroundColor: habit.colour,
                  borderRadius: 10,
                  padding: 20,
                  justifyContent: "center",
                  alignItems: "center",
                  marginVertical: 10,
                  borderColor: Colors.grey1,
                  borderWidth: 2
                }}
                onPress={() => {
                  Alert.alert(`${habit.name}\nColour: ${habit.colour}`);
                }}
                onLongPress={() => {
                  Alert.alert(
                    `${habit.name}`,
                    `Are you sure you want to delete ${habit.name}?`,
                    [
                      {
                        text: "Yes",
                        style: "default"
                      },
                      {
                        text: "No",
                        style: "destructive"
                      }
                    ]
                  );
                }}>
                <Text
                  white
                  text30BL
                  style={{
                    textShadowColor: Colors.grey1,
                    textShadowRadius: 2,
                    textShadowOffset: { width: 0, height: 0 }
                  }}>
                  {habit.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        ) : null}
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}
