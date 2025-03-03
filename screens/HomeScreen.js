import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const insightsData = [
  { id: "1", title: "Scan new", subtitle: "Scanned 483", icon: "scan", backgroundColor: "#ECECFF", iconColor: "#6B5AED" },
  { id: "2", title: "Counterfeits", subtitle: "Counterfeited 32", icon: "alert-circle", backgroundColor: "#FEEFE9", iconColor: "#F2994A" },
  { id: "3", title: "Success", subtitle: "Checkouts 8", icon: "checkmark-circle", backgroundColor: "#E9FBF3", iconColor: "#2ECC71" },
  { id: "4", title: "Directory", subtitle: "History 26", icon: "calendar", backgroundColor: "#EAF6FF", iconColor: "#3498DB" },
];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hello 👋</Text>
          <Text style={styles.username}>Christie Doe</Text>
        </View>
        <Image source={{ uri: "https://i.pravatar.cc/102" }} style={styles.profilePic} />
      </View>

      {/* Your Insights */}
      <Text style={styles.sectionTitle}>Your Insights</Text>
      <View style={styles.insightsContainer}>
        {insightsData.map((item, index) => (
          <View
            key={item.id}
            style={[
              styles.card,
              index % 2 === 0 ? { left: 20 } : { left: 196 },
              index > 1 ? { top: 191.56 } : { top: 0 },
            ]}
          >
            <View style={[styles.iconContainer, { backgroundColor: item.backgroundColor }]}>
              <Ionicons name={item.icon} size={30} color={item.iconColor} />
            </View>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardSubTitle}>{item.subtitle}</Text>
          </View>
        ))}
      </View>

      {/* Explore More */}
      <View style={styles.exploreMoreContainer}>
        <Text style={styles.exploreMoreText}>Explore More</Text>
        <TouchableOpacity>
          <Ionicons name="arrow-forward" size={24} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF", paddingHorizontal: 20, paddingTop: 50 },

  /** HEADER */
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 30 },
  greeting: { fontSize: 22, fontWeight: "bold", marginBottom: 5 },
  username: { fontSize: 16, color: "#666" },
  profilePic: { width: 45, height: 45, borderRadius: 22.5, backgroundColor: "#ddd" },

  /** INSIGHTS */
  sectionTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 20 },
  insightsContainer: { position: "relative", height: 400 },
  card: {
    position: "absolute",
    width: 158.16,
    height: 176.82,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF", 
    padding: 18,
  },
  cardTitle: { fontSize: 16, fontWeight: "600", marginTop: 8 },
  cardSubTitle: { fontSize: 13, color: "#666", marginTop: 3 },

  /** EXPLORE MORE */
  exploreMoreContainer: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 30 },
  exploreMoreText: { fontSize: 16, fontWeight: "500" },

  /** ICON CONTAINER */
  iconContainer: {
    width: 55,
    height: 55,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },

  profilePic: { 
    width: 45, 
    height: 45, 
    borderRadius: 8,  
    backgroundColor: "#ddd" 
  },
});

export default HomeScreen;
