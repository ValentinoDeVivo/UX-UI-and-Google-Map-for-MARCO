import { faBalanceScale } from "@fortawesome/free-solid-svg-icons";
import { StyleSheet } from "react-native";

const externalStyle = StyleSheet.create({
    viewHolder: {
        justifyContent: "center",
        alignItems: "flex-start",

        marginTop: 9,
        marginRight: 8,
        marginLeft: 8,
        paddingVertical: 13,
        paddingLeft: 15,
        width: 373,
        height: 54,
        backgroundColor: "#f4f5f5",
        borderWidth:  1.5,
        borderColor: "#0fa4cb",
        borderRadius: 10,
      },
      displayText: {
        color: "#c8c9c8",
        fontSize: 22,
        paddingRight: 17,
      },
      removeBtn: {
        position: "absolute",
        right: 13,
        height: 30,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",

      },
      text:{
        color: "#0fa4cb",
      },
      btnImage: {
        resizeMode: "contain",
        width: "100%",
      },
});

export default externalStyle;