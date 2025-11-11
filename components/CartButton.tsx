
import { images } from "@/constants";
import { useCartStore } from "@/store/cart.store";
import { router } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const CartButton = () => {
  const { getTotalItems } = useCartStore();
  const totalItems = getTotalItems();

  return (
    <TouchableOpacity
      onPress={() => router.push("/cart")}
      activeOpacity={0.9}
      className="relative bg-white border border-gray-200 rounded-full p-3 shadow-sm shadow-black/10"
    >
      <Image source={images.bag} className="w-6 h-6" resizeMode="contain" tintColor="#000" />
      {totalItems > 0 && (
        <View className="absolute -top-1.5 -right-1.5 bg-black rounded-full px-1.5 py-0.5">
          <Text className="text-white text-xs font-semibold">{totalItems}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default CartButton;
