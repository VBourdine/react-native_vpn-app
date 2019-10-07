import React, { Component } from "react";
import { Image, StyleSheet} from "react-native";
import { Block, Button, Text, Utils } from "expo-ui-kit";
import { background } from "../constants/images"; 

export default class Welcome extends Component {
  render() {
    return(
        <Block safe>
            <Block center middle>
              <Image source={background.welcome} />
            </Block>
            <Block flex={false} center bottom margin={60}>
              <Text h3 semibold>
                Secured, forever.
              </Text>
              <Text center caption gray margin={[10, 0]}>
                Lorem ipsum dolor cit amet
              </Text>
              <Button primary>
                <Text center white caption bold margin={[12, 30]}>
                  GET STARTED
                </Text>
              </Button>
            </Block>
        </Block>
      );
    }
}