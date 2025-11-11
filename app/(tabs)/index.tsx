
import CartButton from "@/components/CartButton";
import { images, offers } from "@/constants";
import useAuthStore from "@/store/auth.store";
import cn from "clsx";
import {
  FlatList,
  Image,
  Pressable,
  Text,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../globals.css";

export default function Index() {
  const { user } = useAuthStore();

  return (
    <SafeAreaView className="flex-1 bg-red-600">
      {/* Header */}
      <View className="flex-row justify-between items-center px-5 pt-6 pb-4">
        <View>
          <Text className="text-white/90 text-base">Welcome back,</Text>
          <Text className="text-2xl font-extrabold text-white">
            {user?.name || "Guest 👋"}
          </Text>
        </View>
        <CartButton />
      </View>

      {/* Title */}
      <View className="px-5 mb-5">
        <Text className="text-lg text-white/90 font-medium">
          Discover our best offers
        </Text>
        <View className="h-0.5 bg-white/70 w-16 mt-1 rounded-full" />
      </View>

      {/* Offer List */}
      <FlatList
        data={offers}
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-24 px-5"
        renderItem={({ item, index }) => {
          const isEven = index % 2 === 0;
          return (
            <Pressable
              className={cn(
                "rounded-3xl overflow-hidden mb-6 shadow-lg",
                isEven ? "flex-row-reverse" : "flex-row"
              )}
              style={{
                backgroundColor: "#fff",
                shadowColor: "#b91c1c",
                elevation: 5,
              }}
              android_ripple={{ color: "#b91c1c22" }}
            >
              <View className="w-1/2 h-40 justify-center items-center bg-red-100">
                <Image
                  source={item.image}
                  className="w-full h-full"
                  resizeMode="contain"
                />
              </View>

              <View
                className={cn(
                  "w-1/2 p-5 justify-center",
                  isEven ? "items-start" : "items-end"
                )}
              >
                <Text
                  className={cn(
                    "text-black font-bold text-lg leading-tight mb-3",
                    isEven ? "text-left" : "text-right"
                  )}
                >
                  {item.title}
                </Text>
                <Image
                  source={images.arrowRight}
                  className="w-7 h-7"
                  resizeMode="contain"
                  tintColor="#b91c1c"
                />
              </View>
            </Pressable>
          );
        }}
      />
    </SafeAreaView>
  );
}

