import React, { Component } from "react";
import { Image, StyleSheet } from "react-native";
import { Block, Button, Text, Utils } from "expo-ui-kit";

// constants
import { images } from "../constants";

// theme
const { theme, rgba } = Utils;
const { SIZES, COLORS } = theme;

export default class VPN extends Component {
  state = {
    connected: false,
  };

  handleConnect() {
    const { connected } = this.state;
    this.setState({ connected: !connected });
  }

  render() {
    const { connected } = this.state;

    return (
      <Block safe center>
        <Block flex={false} padding={[20, 0]}> 
          <Text title semibold>
            VPN
          </Text>
        </Block>

        <Block center middle>
          <Block 
            flex={false} 
            row 
            center 
            middle 
            white 
            shadow
            radius={SIZES.base * 3}
            padding={[SIZES.base, SIZES.padding]} 
          >
            <Text subtitle semibold gray height={30}> 
              {connected ? "Connected" : "Disconnected"}
            </Text>
            <Block 
              flex={false} 
              radius={10} 
              style={styles.status}
              color={connected ? COLORS.success : rgba(COLORS.gray, 0.5)} 
            />
          </Block> 

          <Image 
            style={styles.image} 
            source={images.icons.offline} 
          />

          <Button 
            outlined 
            style={styles.connect} 
            onPress={() => this.handleConnect()}
          >
            <Text 
              caption 
              center 
              bold 
              margin={[10, 0]}>
                {connected ? "DISCONNECT" : "CONNECT NOW"}
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
    width: 180,
    height: 180,
    marginVertical: 20,
  },
  status: {
    width: 8,
    height: 8,
    marginLeft: 10
  },
});