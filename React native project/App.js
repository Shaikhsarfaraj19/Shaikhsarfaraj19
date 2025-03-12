import { SafeAreaView, StatusBar, View, StyleSheet, FlatList, Text } from "react-native";
import { useState, useEffect } from "react";

export default function App() {

  const [postList, setPostList] = useState([]);

  const fetchData = async (limit = 10) => {
    
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
      const data = await response.json();
      setPostList(data); // Update the postList state with the fetched data
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList
          data={postList}
          renderItem={({ item }) => {
            return (
              <View style={styles.card}>
                <Text style={styles.titleText}>{item.title}</Text>
                <Text style={styles.bodyText}>{item.body}</Text>
              </View>
            );
          }}
          ItemSeparatorComponent={() => <View style={{ height: 16 }} />} // Add some space between the items
          ListEmptyComponent={<Text style={styles.headerText}>No Posts Found</Text>}
          ListHeaderComponent={<Text style={styles.headerText}>Posts</Text>}
          ListFooterComponent={<Text style={styles.headerText}>End of Posts</Text>}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: StatusBar.currentHeight,
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 10, // Added margin to separate cards
  },
  titleText: {
    fontSize: 20, // Adjusted font size for readability
    fontWeight: 'bold',
    marginBottom: 8,
  },
  bodyText: {
    fontSize: 16,
    color: "#666666",
  },
  headerText: {
    fontSize: 24,
    textAlign: 'center',
    maarbottm: 12,
  },
  fotterText: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 12,
  }
});
