import { router } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const OrderSuccess = () => {
  return (
    <View className="flex-1 bg-white justify-center items-center px-6">
      {/* Icon check animation style */}
      <View className="bg-green-100 rounded-full p-6 mb-6 shadow-md shadow-green-200">
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/845/845646.png",
          }}
          className="w-20 h-20"
          resizeMode="contain"
        />
      </View>

      {/* Success text */}
      <Text className="text-3xl font-extrabold text-green-600 mb-3 text-center">
        Order Successful! 🎉
      </Text>

      <Text className="text-base text-gray-600 mb-8 text-center leading-relaxed">
        Thank you for your purchase.{"\n"}
        Your delicious meal is being prepared and will arrive soon!
      </Text>

      {/* Back to Home button */}
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => router.replace("/")}
        className="bg-orange-500 px-8 py-4 rounded-full shadow-md shadow-orange-200"
      >
        <Text className="text-white font-semibold text-lg">Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OrderSuccess;
