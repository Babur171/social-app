import { StatusBar, View, Image, StyleSheet } from "react-native";
import type { PropsWithChildren } from "react";

import { useTheme } from "@/theme";
import Images from "@/theme/images";

interface UserProfile {
  isFav?: boolean;
  isStory?: boolean;
}

function UserProfile({ isFav, isStory }: UserProfile) {
  const { layout } = useTheme();
  const { Profile, Favourite, UnFavourite, } = Images;

  return (
    <View
      style={[
        layout.justifyCenter,
        layout.itemsCenter,
        isStory ? styles.storyWraper : styles.main,
      ]}
    >
      <Image style={styles.userImage} resizeMode="cover" source={Profile} />
      <View style={styles.iconSection}>
        {isFav ? (
          <Image style={styles.favIcon} resizeMode="cover" source={Favourite} />
        ) : (
          <Image
            style={styles.favIcon}
            resizeMode="cover"
            source={UnFavourite}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    borderRadius: 50,
    height: 72,
    width: 72,
  },
  storyWraper: {
    borderColor: "#FF34E2",
    borderRadius: 50,
    height: 72,
    width: 72,
    borderWidth: 1,
  },
  userImage: {
    height: 68,
    width: 68,
    borderRadius: 50,
  },
  iconSection: {
    position: "absolute",
    alignSelf: "flex-end",
    bottom: 5,
    marginRight: 40,
  },
  favIcon: {
    height: 14,
    width: 14,
    marginRight: 4,
  },
});

export default UserProfile;
