import CustomHeader from "@/components/CustomHeader";
import UserInformationItem from "@/components/UserInformationItem";
import { images } from "@/constants";
import { logout } from "@/libs/appwrite";
import useAuthStore from "@/store/auth.store";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
  const { user } = useAuthStore();

  const handleLogout = async () => {
    try {
      await logout();
      useAuthStore.getState().setUser(null);
      useAuthStore.getState().setIsAuthenticated(false);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-[#DC2626]">
      {/* Header */}
      <View className="px-5 pt-5">
        <CustomHeader title="My Profile ❤️" />
      </View>

      {/* Avatar Section */}
      <View className="items-center mt-6">
        <View className="relative bg-white/90 p-2 rounded-full shadow-md">
          <Image
            source={{ uri: user?.avatar }}
            className="w-32 h-32 rounded-full border-4 border-red-100"
          />
        </View>
        <Text className="text-white font-extrabold text-xl mt-4">
          {user?.name || "Guest User"}
        </Text>
        <Text className="text-white/90 text-sm">{user?.email}</Text>
      </View>

      {/* Thông tin người dùng */}
      <View className="bg-white rounded-3xl mx-5 mt-8 p-5 shadow-lg space-y-4">
        <Text className="text-lg font-extrabold text-gray-900 mb-2">
          Personal Information
        </Text>

        <UserInformationItem
          label="Full Name"
          value={user?.name}
          icon={images.user}
        />
        <UserInformationItem
          label="Email"
          value={user?.email}
          icon={images.envelope}
        />
        <UserInformationItem
          label="Phone Number"
          value={"1234567890"}
          icon={images.phone}
        />
        <UserInformationItem
          label="Address"
          value={"Ha Noi, Viet Nam"}
          icon={images.location}
        />
      </View>

      {/* Nút Logout */}
      <TouchableOpacity
        onPress={handleLogout}
        activeOpacity={0.9}
        className="bg-white py-4 rounded-full items-center mt-10 mx-5 shadow-md"
      >
        <Text className="text-red-600 font-bold text-base tracking-wide">
          Logout
        </Text>
      </TouchableOpacity>

      {/* Footer slogan nhỏ */}
      <View className="items-center mt-8">
        <Text className="text-white/80 text-sm italic">
          “Thanks for being part of our family ❤️”
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
