import CartItem from "@/components/CartItem";
import CustomButton from "@/components/CustomButton";
import EmptyState from "@/components/EmptyState";
import { useCartStore } from "@/store/cart.store";
import { router } from "expo-router";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const CartScreen = () => {
  const { items: cart = [], getTotalPrice, clearCart } = useCartStore();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = getTotalPrice();

  const handleCheckout = () => {
    router.push("/order-success");
    clearCart();
  };

  if (cart.length === 0) {
    return (
      <EmptyState
        title="Your cart is empty 😋"
        subtitle="Start adding some tasty items to enjoy your meal!"
      />
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-[#DC2626]">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-32 px-5 pt-5"
      >
        {/* Header */}
        <View className="mb-6">
          <Text className="text-3xl font-extrabold text-white mb-1">
            Your Cart 🛒
          </Text>
          <Text className="text-white/90 text-base">
            Review your order before checkout
          </Text>
        </View>

        {/* Cart Items */}
        {cart.map((item) => (
          <View
            key={item.id + JSON.stringify(item.customizations)}
            className="bg-white rounded-3xl p-4 mb-4 shadow-md"
          >
            <CartItem item={item} />
          </View>
        ))}

        {/* Payment Summary */}
        <View className="bg-white rounded-3xl shadow-lg p-6 mt-6 border border-red-100">
          <Text className="text-xl font-extrabold text-gray-900 mb-5">
            Payment Summary
          </Text>

          <View className="flex-row justify-between mb-3">
            <Text className="text-gray-600">Total Items ({totalItems})</Text>
            <Text className="text-gray-900 font-bold">
              ${totalPrice.toFixed(2)}
            </Text>
          </View>

          <View className="flex-row justify-between mb-3">
            <Text className="text-gray-600">Delivery Fee</Text>
            <Text className="text-green-600 font-bold">Free</Text>
          </View>

          <View className="flex-row justify-between mb-3">
            <Text className="text-gray-600">Discount</Text>
            <Text className="text-gray-600 font-semibold">None</Text>
          </View>

          <View className="border-t border-gray-200 my-4" />

          <View className="flex-row justify-between items-center mb-6">
            <Text className="text-lg font-bold text-gray-900">Total</Text>
            <Text className="text-lg font-bold text-red-600">
              ${totalPrice.toFixed(2)}
            </Text>
          </View>

          <CustomButton
            title="Place Order"
            onPress={handleCheckout}
            style="bg-red-500 py-4 rounded-full shadow-md"
            textStyle="text-white font-bold text-base tracking-wider"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CartScreen;
