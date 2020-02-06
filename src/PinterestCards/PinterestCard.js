import React from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: "center",
    flex: 1,
    paddingBottom: 10
  },
  cardStyle: {
    justifyContent: "center",
    alignItems: "center",
    height: 200,
    backgroundColor: "#121111",
    color: "white",
    borderRadius: 10,
    marginLeft: 5,
    marginRight: 5,
    fontSize: 16
  },
  textStyle: {
    fontSize: 14,
    textAlign: "left",
    fontWeight: "bold"
  },
  descriptionStyle: {
    fontSize: 12
  }
});

function PinterestCard({ data }) {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <View style={{ flex: 1, flexDirection: "column", margin: 1 }}>
          <TouchableOpacity>
            <Image style={styles.cardStyle} source={{ uri: item.image }} />
          </TouchableOpacity>
          <Text style={styles.textStyle}>{item.title}</Text>
          <Text style={styles.descriptionStyle}>{item.description}</Text>
        </View>
      )}
      numColumns={2}
      keyExtractor={(item, index) => index.toString()}
    />
  );
}

export default PinterestCard;
