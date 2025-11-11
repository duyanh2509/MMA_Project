import { images } from "@/constants";
import { useCartStore } from "@/store/cart.store";
import { CartItemType } from "@/type";
import { Image, Text, TouchableOpacity, View } from "react-native";

const CartItem = ({ item }: { item: CartItemType }) => {
  const { increaseQty, decreaseQty, removeItem } = useCartStore();

  return (
    <View className="bg-white border border-gray-200 rounded-2xl p-4 mb-3 flex-row justify-between items-center shadow-sm">
      <View className="flex-row items-center gap-x-4 flex-1">
        <Image
          source={{ uri: item.image_url }}
          className="w-16 h-16 rounded-xl"
          resizeMode="cover"
        />
        <View className="flex-1">
          <Text className="text-gray-900 font-semibold text-base">
            {item.name}
          </Text>
          <Text className="text-gray-800 font-bold mt-1">${item.price}</Text>

          <View className="flex-row items-center mt-2">
            <TouchableOpacity
              onPress={() => decreaseQty(item.id, item.customizations!)}
              className="bg-gray-100 rounded-full p-1.5"
            >
              <Image source={images.minus} className="w-4 h-4" tintColor="#000" />
            </TouchableOpacity>

            <Text className="mx-3 text-gray-900 font-semibold">{item.quantity}</Text>

            <TouchableOpacity
              onPress={() => increaseQty(item.id, item.customizations!)}
              className="bg-gray-100 rounded-full p-1.5"
            >
              <Image source={images.plus} className="w-4 h-4" tintColor="#000" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <TouchableOpacity onPress={() => removeItem(item.id, item.customizations!)}>
        <Image source={images.trash} className="w-5 h-5" tintColor="#000" />
      </TouchableOpacity>
    </View>
  );
};

export default CartItem;
