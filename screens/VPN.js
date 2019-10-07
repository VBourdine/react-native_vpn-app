import React, { Component } from "react";
import { Images, StyleSheet } from "react-native";
import { Block, Button, Text, Utils } from "expo-ui-kit";

// constants
import { images } from "../constants";

// theme
const { theme, rgba } = Utils;
const { SIZES, COLORS } = theme;

export default class VPN extends Component {
  render() {
    return (
      <Block safe center>
        <Block flex={false} padding={[20, 0]}> 
          <Text title semibold>
            VPN
          </Text>
        </Block>

        <Block center middle>
          <Image source={images.icons.online} />

          <Button outlined style={styles.connect}>
            <Text 
              caption 
              center 
              bold 
              margin={[10, 0]}>
                Connect
            </Text>
          </Button>
        </Block>

        <Block 
          flex={false} 
          center 
          middle 
          white 
          shadow 
          style={{ width: "100%" }}>
          <Text> Servers </Text>
        </Block>
      </Block>
    )
  }
}

const styles = StyleSheet.create({
  connect: {
    width: SIZES.width / 2
  },
  image: {
    width: 100,
    heigh: 100,
    marginVertical: 20,
  }
});