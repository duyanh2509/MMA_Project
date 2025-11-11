import { appwriteConfig } from "@/libs/appwrite";
import { useCartStore } from "@/store/cart.store";
import { MenuItem } from "@/type";
import React from "react";
import {
  Image,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const MenuCard = ({
  item: { $id, image_url, name, price },
}: {
  item: MenuItem;
}) => {
  const imageURL = `${image_url}?project=${appwriteConfig.projectId}`;
  const { addItem } = useCartStore();

  return (
    // === Nền đỏ ngoài cùng, có bo tròn và bóng nhẹ ===
    <View
      className="bg-[#DC2626] w-[95%] items-center py-4 mb-5 rounded-3xl"
      style={
        Platform.OS === "android"
          ? { elevation: 6, shadowColor: "#7f1d1d" }
          : {
              shadowColor: "#7f1d1d",
              shadowOpacity: 0.2,
              shadowRadius: 10,
              shadowOffset: { width: 0, height: 4 },
            }
      }
    >
      {/* --- Card trắng bên trong --- */}
      <TouchableOpacity
        activeOpacity={0.9}
        className="bg-white rounded-2xl w-[90%] overflow-hidden"
        style={
          Platform.OS === "android"
            ? { elevation: 8, shadowColor: "#000" }
            : {
                shadowColor: "#000",
                shadowOpacity: 0.15,
                shadowRadius: 6,
                shadowOffset: { width: 0, height: 3 },
              }
        }
      >
        {/* --- Ảnh sản phẩm --- */}
        <View className="relative w-full h-40 bg-red-50">
          <Image
            source={{ uri: imageURL }}
            className="w-full h-full"
            resizeMode="cover"
          />

          {/* Nhãn giảm giá hoặc nổi bật */}
          <View className="absolute top-3 left-3 bg-red-500 px-3 py-1 rounded-full">
            <Text className="text-white text-xs font-semibold uppercase">
              Hot Deal
            </Text>
          </View>
        </View>

        {/* --- Nội dung --- */}
        <View className="px-5 py-4">
          <Text
            className="text-lg font-extrabold text-gray-900 mb-1"
            numberOfLines={1}
          >
            {name}
          </Text>
          <Text className="text-base text-gray-500 mb-3">
            From <Text className="text-red-500 font-bold">${price}</Text>
          </Text>

          {/* --- Nút Add to Cart --- */}
          <TouchableOpacity
            onPress={() =>
              addItem({
                id: $id,
                name,
                price,
                image_url: imageURL,
                customizations: [],
              })
            }
            className="bg-red-500 py-2.5 rounded-full flex-row justify-center items-center"
            activeOpacity={0.9}
          >
            <Text className="text-white font-semibold text-sm uppercase tracking-wider">
              + Add to Cart
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MenuCard;
