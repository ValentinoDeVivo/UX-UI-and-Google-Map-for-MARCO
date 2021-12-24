import { StyleSheet } from "react-native";

const externalStyle = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",

    width: "100%",
    height: "100%",
    backgroundColor: "#ecf2f5",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    
    width: "100%",
    height: 190,
    backgroundColor: "#0fa4cb",
  },
  map: {
    justifyContent: "center",
    alignItems: "center",

    marginTop: -75,
    marginBottom: 30,
    width: 370,
    height: 183,
    borderRadius: 8,
  },
  details: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",

    width: 370,
    height: 100,
    marginTop: -24,
    padding: 20,
    backgroundColor: "#dee1e3",
    borderRadius: 10,
  },
});

export default externalStyle;
