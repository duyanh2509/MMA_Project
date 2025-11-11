import { UserInformationProps } from "@/type";
import React from "react";
import { Image, Text, View } from "react-native";

const UserInformationItem = ({ label, value, icon }: UserInformationProps) => {
  return (
    <View className="profile-field my-6">
      <View className="profile-field__icon">
        <Image source={icon} className="size-6" />
      </View>
      <View className="ml-3">
        <Text className="text-gray-500">{label}</Text>
        <Text className="font-semibold text-base text-gray-500">{value}</Text>
      </View>
    </View>
  );
};

export default UserInformationItem;
