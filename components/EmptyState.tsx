import { images } from "@/constants";
import { EmptyStateProps } from "@/type";
import React from "react";
import { Image, Text, View } from "react-native";

const EmptyState = ({ title, subtitle }: EmptyStateProps) => {
  return (
    <View className="flex-1 justify-center items-center bg-[#DC2626] px-8">
      {/* Ảnh minh họa */}
      <View className="bg-white/90 rounded-full p-6 mb-6 shadow-lg">
        <Image
          source={images.emptyState} 
          className="w-40 h-40"
          resizeMode="contain"
        />
      </View>

      {/* Tiêu đề */}
      <Text className="text-2xl font-extrabold text-white text-center mb-3">
        {title}
      </Text>

      {/* Phụ đề */}
      <Text className="text-base text-white/90 text-center leading-6">
        {subtitle}
      </Text>
    </View>
  );
};

export default EmptyState;
