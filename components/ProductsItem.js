import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../screens/Redux/CartReducer";

const ProductsItem = ({ item }) => {
  const [addedToCart, setAddedToCart] = useState(false);
  const dispatch = useDispatch();
  const addItemToCart = (item) => {
    setAddedToCart(true);
    dispatch(addToCart(item));
    setTimeout(() => {
      setAddedToCart(false);
    }, 60000);
  };
  return (
    <Pressable style={{ marginHorizontal: 20, marginVertical: 25 }}>
      <Image
        style={{ width: 150, height: 150, resizeMode: "contain" }}
        source={{ uri: item?.image }}
      />

      <Text numberOfLines={1} style={{ width: 150, marginTop: 10 }}>
        {item?.title}
      </Text>

      <View
        style={{
          marginTop: 5,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>{item?.price}</Text>
        <Text style={{ color: "#FFC72C", fontWeight: "500" }}>
          {item?.rating?.rate} rates
        </Text>
      </View>
      <Pressable
        onPress={() => addItemToCart(item)}
        style={{
          backgroundColor: "#FFC27C",
          padding: 10,
          borderRadius: 20,
          justifyContent: "center",
          alignItems: "center",
          marginHorizontal: 1,
          marginTop: 10,
        }}
      >
        <Text>Add to Cart</Text>
      </Pressable>
    </Pressable>
  );
};

export default ProductsItem;

const styles = StyleSheet.create({});
