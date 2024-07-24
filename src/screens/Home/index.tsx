import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  Text,
  View,
  StyleSheet,
  FlatList,
  Pressable,
} from "react-native";
import { useTranslation } from "react-i18next";

import { useTheme } from "@/theme";
import SafeScreen from "@/components/SafeScreen";

import type { RootScreenProps } from "@/types/navigation";
import LinearGradient from "react-native-linear-gradient";
import Images from "@/theme/images";
import UserProfile from "@/components/UserProfile";
import { users } from "@/utils/dummyData";
import FastImage from "react-native-fast-image";

function Home({ navigation }: RootScreenProps<"Home">) {
  const { layout, gutters, fonts } = useTheme();
  const { Profile, Heart, Reward, Shoes, Chart, Bookmark, UnBookmark } = Images;
  const { t } = useTranslation(["startup"]);
  const [eventName, setEventName] = useState(-1);

  const renderProfile = ({ item, index }: any) => {
    return (
      <View style={[index !== 0 && gutters.marginLeft_8]}>
        <UserProfile isFav={item.isFav} isStory={item.isStory} />
      </View>
    );
  };

  const renderList = ({ item, index }: any) => {
    return (
      <Pressable
        style={[index !== 0 && gutters.marginLeft_8]}
        onPress={() => setEventName(index)}
      >
        <View
          style={[
            styles.textWraper,
            eventName === index && styles.textWraperBorderColor,
          ]}
        >
          <Text style={styles.forYouText}>For You</Text>
        </View>
      </Pressable>
    );
  };

  return (
    <SafeScreen>
      <View style={[layout.flex_1, layout.col]}>
        <View style={styles.home}>
          <View style={styles.component14}>
            <View style={[styles.groupChildPosition]}>
              <View>
                <Image
                  style={[styles.profileSection]}
                  resizeMode="cover"
                  source={Profile}
                />
              </View>

              <View style={styles.faizanFarooqParent}>
                <Text style={[styles.goodMorning]}>Good morning</Text>
                <Text style={[styles.forYouTypo]} numberOfLines={1}>
                  Dwight Clarke
                </Text>
              </View>
            </View>
            <View style={styles.groupContainer}>
              <View style={styles.sellFarm}>
                <View>
                  <Text style={[styles.sellWrapper]}>Sell</Text>
                </View>
              </View>
              <View style={styles.reward}>
                <Image
                  style={[styles.frameLayout]}
                  resizeMode="cover"
                  source={Reward}
                />
              </View>
              <View style={styles.reward}>
                <Image
                  style={[styles.frameLayout]}
                  resizeMode="cover"
                  source={Heart}
                />
              </View>
            </View>
          </View>
          <View style={[gutters.marginTop_22]}>
            <FlatList
              horizontal
              data={users}
              contentContainerStyle={[layout.flexGrow, gutters.paddingLeft_22]}
              renderItem={renderProfile}
            />
          </View>
          <View style={[layout.itemsStart, gutters.marginTop_28]}>
            <FlatList
              horizontal
              data={users}
              contentContainerStyle={[layout.flexGrow, gutters.paddingLeft_22]}
              renderItem={renderList}
            />
          </View>
          <View style={{ flex: 1, marginTop: 20 }}>
            <LinearGradient
              style={[styles.dark]}
              locations={[0, 1]}
              colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.85)"]}
              useAngle={true}
              angle={180}
            >
              <View style={styles.iconlylightbookmarkParent}>
                <FastImage
                  style={[styles.iconlylightbookmark]}
                  resizeMode="cover"
                  source={Shoes}
                >
                  <Image
                    style={[styles.groupChild]}
                    resizeMode="cover"
                    source={Chart}
                  />
                  <Image
                    style={[styles.iconlylightchart]}
                    resizeMode="cover"
                    source={Bookmark}
                  />
                  <View style={styles.frameParent}>
                    <View style={styles.wrapper}>
                      <Text style={styles.text}>$200</Text>
                    </View>
                    <Text
                      style={[styles.makeMondaysFree, styles.basketballTypo]}
                    >
                      All Sneakers start at $1 Let's Goooo🚀!!
                    </Text>
                    <View style={styles.basketballCardsParent}>
                      <Text
                        style={[styles.basketballCards, styles.basketballTypo]}
                      >{`Sneakers & Shoes`}</Text>
                      <Image
                        style={styles.frameChild}
                        resizeMode="cover"
                        source={Profile}
                      />
                      <Text style={[styles.breaks, styles.breaksTypo]}>
                        Footwear
                      </Text>
                    </View>
                  </View>
                </FastImage>
                {/* <Image
            style={[styles.groupChild, styles.groupItemLayout]}
            resizeMode="cover"
            source={Profile}
          />
          <Image
            style={[styles.iconlylightchart, styles.groupItemLayout]}
            resizeMode="cover"
            source={Profile}
          /> */}
              </View>
            </LinearGradient>
          </View>
        </View>
      </View>
    </SafeScreen>
  );
}

const styles = StyleSheet.create({
  textWraper: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.6)",
    alignItems: "center",
  },
  forYouText: {
    fontSize: 16,
    lineHeight: 20,
    color: "rgba(255, 255, 255, 0.9)",
    fontWeight: "600",
    paddingHorizontal: 11,
    paddingVertical: 8,
  },
  textWraperBorderColor: {
    borderColor: "rgba(255, 255, 255, 0.1)",
  },
  forYouTypo: {
    lineHeight: 20,
    fontSize: 16,
    textAlign: "left",
    fontFamily: "Proxima Nova",
    color: "#fff",
    letterSpacing: -1,
  },

  reward: {
    height: 42,
    width: 42,
    borderRadius: 50,
    borderColor: "rgba(255, 255, 255, 0.1)",
    justifyContent: "center",
    borderWidth: 1,
    alignItems: "center",
    marginLeft: 6,
  },
  timeLayout: {
    width: 54,
    top: "50%",
  },
  timeTypo: {
    textAlign: "center",
    color: "#fff",
    fontFamily: "Proxima Nova",
    fontWeight: "600",
    position: "absolute",
  },

  basketballTypo: {
    textAlign: "left",
    fontFamily: "Proxima Nova",
  },
  breaksTypo: {
    opacity: 0.5,
    marginLeft: 5,
    letterSpacing: 0,
    textAlign: "left",
    color: "#fff",
    fontFamily: "Proxima Nova",
    fontWeight: "600",
    lineHeight: 17,
  },
  textTypo: {
    fontSize: 14,
    left: "24.05%",
    top: "5.24%",
    textAlign: "left",
    fontFamily: "Proxima Nova",
    fontWeight: "600",
    lineHeight: 17,
    display: "none",
    position: "absolute",
  },

  groupChildPosition: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
  },
  profileSection: {
    height: 46,
    width: 46,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#34DAFF",
  },
  sellFarm: {
    width: 42,
    height: 42,
    borderColor: "rgba(255, 255, 255, 0.1)",
    borderWidth: 1,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  frameLayout: {
    width: 20,
    height: 20,
  },
  dark: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
  },
  iconlylightbookmark: {
    height: "67.74%",
    width: "50%",
    borderRadius: 20,
  },
  groupChild: {
    height: 5.83,
    width: 5.83,
    // top: "-1.33%",
  },
  iconlylightchart: {
    height: "5.31%",
    width: "8.57%",
  },
  text: {
    textAlign: "right",
    opacity: 0.8,
    color: "#fff",
    fontFamily: "Proxima Nova",
    fontWeight: "600",
    lineHeight: 17,
    fontSize: 12,
  },
  wrapper: {
    borderRadius: 6,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderColor: "rgba(255, 255, 255, 0.2)",
    paddingHorizontal: 8,
    paddingVertical: 3,
    opacity: 0,
    justifyContent: "center",
    borderWidth: 1,
    borderStyle: "solid",
    alignItems: "center",
    flexDirection: "row",
  },
  makeMondaysFree: {
    width: 140,
    marginTop: 8,
    color: "#fff",
    fontWeight: "600",
    lineHeight: 17,
    fontSize: 12,
  },
  basketballCards: {
    letterSpacing: 0,
    color: "#fff",
    fontWeight: "600",
    lineHeight: 17,
    fontSize: 12,
  },
  frameChild: {
    width: 3,
    height: 3,
    opacity: 0.7,
    marginLeft: 5,
  },
  breaks: {
    fontSize: 10,
  },
  basketballCardsParent: {
    marginTop: 8,
    alignItems: "center",
    flexDirection: "row",
  },
  frameParent: {
    height: "33.63%",
    top: "66.37%",
    justifyContent: "flex-end",
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  iconlylightbookmarkParent: {
    // flex: 1,
    // height: "91.13%",
    // width: "88.61%",
  },
  text1: {
    color: "#000",
  },
  groupItem: {
    width: "21.43%",
    right: "78.57%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  leoCalzoni: {
    top: "5.56%",
    left: "25%",
    opacity: 0.8,
    color: "#fff",
    fontWeight: "600",
    lineHeight: 17,
    fontSize: 12,
    position: "absolute",
  },
  ellipseParent: {
    height: "7.26%",
    width: "53.16%",
    top: "102.02%",
    right: "46.84%",
    bottom: "-9.27%",
    left: "0%",
    position: "absolute",
  },
  component1: {
    top: 289,
  },
  basketballCards1: {
    color: "#34daff",
    letterSpacing: 0,
    fontWeight: "600",
    lineHeight: 17,
    fontSize: 12,
  },

  forYou: {
    color: "rgba(255, 255, 255, 0.9)",
    fontWeight: "600",
  },
  forYouWrapper: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    borderColor: "rgba(255, 255, 255, 0.6)",
    top: 0,
    paddingVertical: 8,
    paddingHorizontal: 11,
    left: 0,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
    overflow: "hidden",
  },

  goodMorning: {
    lineHeight: 15,
    color: "#d2d2d2",
    letterSpacing: 0,
    fontSize: 12,
  },
  faizanFarooqParent: {
    left: "14.98%",
  },

  ellipseParent7: {
  },
  groupChild5: {
  },
  sellWrapper: {
    fontSize: 12,
    lineHeight: 18,
    // letterSpacing: 0,
    color: "#fff",
    fontWeight: "600",
  },

  frameChild2: {
    marginLeft: 6,
  },
  groupContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },

  component14: {
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 22,
    marginTop: 20,
  },

  homeItem: {
    marginLeft: -200.5,
    bottom: 0,
    left: "50%",
    width: 401,
    height: 87,
    position: "absolute",
  },
  home: {
    borderRadius: 22,
    backgroundColor: "#000",
    flex: 1,
  },
});

export default Home;
