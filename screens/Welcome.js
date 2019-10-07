import React, { Component } from "react";
import { Image, ScrollView, StyleSheet} from "react-native";
import { Block, Button, Text, Utils } from "expo-ui-kit";

// constants
import { background } from "../constants/images"; 
// theme
const { theme, rgba } = Utils;
const { SIZES, COLORS } = theme;

const backgrounds = [
  {
    title: "Secured forever.",
    description: "Lorem ipsum dolor cit amet",
    img: background.welcome,
  },
  {
    title: "Secured, forever.",
    description: "Lorem ipsum dolor cit amet",
    img: background.encrypted,
  },
  {
    title: "Secured, forever.",
    description: "Lorem ipsum dolor cit amet",
    img: background.privacy,
  }
];

export default class Welcome extends Component {
  
  renderImages() {
    return (
      <ScrollView 
        horizontal 
        pagingEnabled 
        scrollEnabled 
        decelerationRate={0}
        scrollEventThrottle={16}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
      >
        {backgrounds.map((item, index) => (
          <Block 
            center 
            bottom 
            key={`img-${index}`} 
            style={{ width: SIZES.width }}
          >
            <Image 
              source={item.img} 
              resizeMode="center" 
              style={{
                width: SIZES.width / 1.5, 
                height: "100%"
              }}
            />
          </Block>
        ))}
      </ScrollView>
    )
  }

  renderDots() {
    return (
      <Block flex={false} row center middle margin={[20, 0, 40, 0]}>
        <Block 
          radius={8} 
          flex={false} 
          margin={[0, 5]} 
          color={COLORS.gray} 
          style={{ width: 8, height: 8 }} 
        />
        <Block 
          radius={8} 
          flex={false} 
          margin={[0, 5]} 
          color={rgba(COLORS.gray, 0.5)} 
          style={{ width: 8, height: 8 }} 
        />
         <Block 
          radius={8} 
          flex={false} 
          margin={[0, 5]} 
          color={rgba(COLORS.gray, 0.5)} 
          style={{ width: 8, height: 8 }} 
        />
      </Block>
    )
  }
  
  render() {
    const { navigation } = this.props;
    return(
        <Block safe>
            <Block center middle>
                {this.renderImages()}
            </Block>
            <Block flex={false} center bottom margin={60}>
              <Text h3 semibold>
                Secured, forever.
              </Text>
              <Text center caption gray margin={[10, 0]}>
                Lorem ipsum dolor cit amet
              </Text>
              {this.renderDots()}
              <Button 
                primary 
                onPress={() => navigation.navigate("VPN")} 
                style={{ borderRadius: 30 }}
              >
                <Text center white caption bold margin={[12, 30]}>
                  GET STARTED
                </Text>
              </Button>
            </Block>
        </Block>
      );
    }
}