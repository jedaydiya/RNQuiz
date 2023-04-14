import React from "react";
import { View, Text } from "react-native";
import { Card } from "@rneui/base";
import { CardTitle } from "@rneui/base/dist/Card/Card.Title";
type Props = {};

const HomeScreen = (props: Props) => {
  return (
    <>
      <View>
        <Card>
          <Card.Title>Quiz App</Card.Title>
        </Card>
      </View>
    </>
  );
};

export default HomeScreen;
