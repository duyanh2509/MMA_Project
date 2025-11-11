// import CartButton from "@/components/CartButton";
// import EmptyState from "@/components/EmptyState";
// import Filter from "@/components/Filter";
// import MenuCard from "@/components/MenuCard";
// import SearchBar from "@/components/SearchBar";
// import { getCategories, getMenu } from "@/libs/appwrite";
// import useAppwrite from "@/libs/useAppwrite";
// import { MenuItem } from "@/type";
// import cn from "clsx";
// import { useLocalSearchParams } from "expo-router";
// import { useEffect } from "react";
// import { FlatList, Text, View } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";

// const Search = () => {
//   const { category, query } = useLocalSearchParams<{
//     query: string;
//     category: string;
//   }>();

//   const { data, refetch, loading } = useAppwrite({
//     fn: getMenu,
//     params: {
//       category,
//       query,
//       limit: 6,
//     },
//   });

//   const { data: categories } = useAppwrite({
//     fn: getCategories,
//   });

//   useEffect(() => {
//     refetch({ category, query, limit: 6 });
//   }, [category, query]);

//   return (
//     <SafeAreaView className="bg-gray-50 h-full">
//       <FlatList
//         data={data}
//         renderItem={({ item, index }) => {
//           const isFirstRightColItem = index % 2 === 0;
//           return (
//             <View
//               className={cn(
//                 "flex-1 max-w-[48%]",
//                 !isFirstRightColItem ? "mt-10" : "mt-0"
//               )}
//             >
//               <MenuCard item={item as MenuItem} />
//             </View>
//           );
//         }}
//         keyExtractor={(item) => item.$id}
//         numColumns={2}
//         columnWrapperClassName="gap-7"
//         contentContainerClassName="gap-7 px-5 pb-32"
//         ListHeaderComponent={() => (
//           <View className="my-5 gap-5">
//             <View className="flex-between flex-row w-full ">
//               <View className="flex-start">
              
//                 <View className="flex-start flex-row gap-x-1 mt-0.5">
//                   <Text className="paragraph-semibold font-bold text-dark-100">
//                     KFC
//                   </Text>
//                 </View>
//               </View>
//               <CartButton />
//             </View>

//             {/* Search Bar */}
//             <SearchBar />

//             {/* Filter */}
//             <Filter categories={categories!} />
//           </View>
//         )}
//         ListEmptyComponent={() =>
//           !loading && (
//             <EmptyState
//               title="Nothing matched your search"
//               subtitle="Try a different search term or check for typos."
//             />
//           )
//         }
//       />
//     </SafeAreaView>
//   );
// };

// export default Search;
import CartButton from "@/components/CartButton";
import EmptyState from "@/components/EmptyState";
import Filter from "@/components/Filter";
import MenuCard from "@/components/MenuCard";
import SearchBar from "@/components/SearchBar";
import { getCategories, getMenu } from "@/libs/appwrite";
import useAppwrite from "@/libs/useAppwrite";
import { MenuItem } from "@/type";
import cn from "clsx";
import { useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { FlatList, Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Search = () => {
  const { category, query } = useLocalSearchParams<{
    query: string;
    category: string;
  }>();

  const { data, refetch, loading } = useAppwrite({
    fn: getMenu,
    params: {
      category,
      query,
      limit: 6,
    },
  });

  const { data: categories } = useAppwrite({
    fn: getCategories,
  });

  useEffect(() => {
    refetch({ category, query, limit: 6 });
  }, [category, query]);

  return (
    <SafeAreaView className="flex-1 bg-[#DC2626]">
      <FlatList
        data={data}
        renderItem={({ item, index }) => {
          const isFirstRightColItem = index % 2 === 0;
          return (
            <View
              className={cn(
                "flex-1 max-w-[48%]",
                !isFirstRightColItem ? "mt-10" : "mt-0"
              )}
            >
              <MenuCard item={item as MenuItem} />
            </View>
          );
        }}
        keyExtractor={(item) => item.$id}
        numColumns={2}
        columnWrapperClassName="gap-7"
        contentContainerClassName="gap-7 px-5 pb-32"
        ListHeaderComponent={() => (
          <View className="my-6 gap-5">
            {/* Header */}
            <View className="flex-row justify-between items-center w-full">
              <View className="flex-row items-center gap-x-2">
                <Image
                  source={{
                    uri: "https://static.tnex.com.vn/uploads/2023/06/word-image-15111-1.jpeg",
                  }}
                  className="w-14 h-14 rounded-xl border border-white"
                  resizeMode="cover"
                />
                <Text className="text-3xl font-extrabold text-white tracking-tight">
                  KFC
                </Text>
              </View>

              <CartButton />
            </View>

            {/* Search Bar */}
            <SearchBar />

            {/* Filter */}
            <Filter categories={categories!} />
          </View>
        )}
        ListEmptyComponent={() =>
          !loading && (
            <EmptyState
              title="No results found 🍗"
              subtitle="Try a different keyword or category!"
            />
          )
        }
      />
    </SafeAreaView>
  );
};

export default Search;
