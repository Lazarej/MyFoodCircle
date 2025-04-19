import DefaultView from "@/components/global/defaultView";
import AntDesign from "@expo/vector-icons/build/AntDesign";
import { useEffect, useMemo, useState } from "react";
import { StyleSheet, View, TextInput, FlatList } from "react-native";
import { MD3Theme, Text, useTheme } from "react-native-paper";
import RestoCard from "@/components/global/restoCard";
import debounce from "lodash.debounce";
import restaurants from "../../mock/resto.json";
import Restaurant from "@/constants/type/restaurant";

export default function modalSearch() {
  const theme = useTheme();
  const style = styles(theme);

  const [searchQuery, setSearchQuery] = useState("");
  const [filtered, setFiltered] = useState<Restaurant[]>([]);

  const debouncedFilter = useMemo(
    () =>
      debounce((text) => {
        const lowerText = text.toLowerCase();
        const results = restaurants.filter((item) =>
          item.title.toLowerCase().includes(lowerText)
        );
        setFiltered(results);
      }, 100),
    []
  );

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFiltered([]); //
      return;
    }
    debouncedFilter(searchQuery);
    return () => debouncedFilter.cancel();
  }, [searchQuery]);

  return (
    <View style={style.modal}>
      <View style={style.headerCont}>
        <Text variant="titleMedium">Rechercher un restaurant</Text>
      </View>

      <View style={style.body}>
        <View style={style.searchCont}>
          <View style={style.search}>
            <AntDesign
              name="search1"
              size={26}
              color={theme.colors.secondary}
            />
            <TextInput
              placeholder="Nom du restaurant"
              placeholderTextColor={theme.colors.secondary}
              onChangeText={(value) => setSearchQuery(value)}
              value={searchQuery}
              style={style.input}
            />
          </View>
        </View>
        <FlatList
          style={style.list}
          data={filtered}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <RestoCard props={item} />}
          ListEmptyComponent={
            searchQuery.trim() === "" ? (
              <View style={style.messageCont}>
                <Text variant="titleMedium" style={style.message}>
                taper pour chercher un restaurant
              </Text>
              </View>
            ) : (
                <View style={style.messageCont} >
                  <Text  style={style.message}  variant="titleMedium" >
                Aucun résultat trouvé
              </Text>
              </View>
            )
          }
        />
      </View>
    </View>
  );
}

const styles = (theme: MD3Theme) =>
  StyleSheet.create({
    modal: {
      flex: 1,
      backgroundColor:'white'
    },

    headerCont: {
      paddingLeft: 20,
      width: "100%",
      height: 100,
      justifyContent: "center",
      alignItems: "flex-start",

      borderBottomWidth: 1,
      borderBottomColor: theme.colors.outline,
    },

    body: {
      flex: 1,
      padding: 20,
    },

    searchCont: {
      width: "100%",
      justifyContent: "center",
      height: 70,
      marginBottom:30
    },

    search: {
      flexDirection: "row",
      borderWidth: 2,
      borderColor: theme.colors.outline,
      borderRadius: 12,
      height: 55,
      alignItems: "center",
      paddingHorizontal: 15,
      backgroundColor: theme.colors.inverseOnSurface,
    },

    input: {
      fontSize: 16,
      height: "100%",
      color: theme.colors.secondary,
      flex: 1,
      lineHeight: -20,
      paddingLeft: 10,
      outline: "none",
    },

    messageCont: {
      marginTop:100,
      justifyContent: 'center',
      alignItems:'center'
    },

    message: {
      color:theme.colors.secondary
    }

  });
