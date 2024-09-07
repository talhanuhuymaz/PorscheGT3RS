//---------------------------STYLESHEET----------------------------
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },

  textContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 190, // Position the text closer to the bottom
    left: 40,
    right: 40,
  },

  rectangle: {
    width: 199,
    height: 1200,
    backgroundColor: "#FFFFFF",
    transform: [{ rotate: "25deg" }],
  },

  circle: {
    width: 501,
    height: 501,
    borderRadius: 501 / 2,
    backgroundColor: "#FFFFFF",
    position: "absolute",
    bottom: -138, // Sağ alt köşe
    right: -114,
  },
  detailWrapper: {
    position: "absolute",
    bottom: 44, // Position the wrapper
    left: -28,
    width: 130,
    height: 70,
    zIndex: 1, // Ensure it's on top of other elements
    justifyContent: "center",
    alignItems: "center",
  },
  detail: {
    width: 130,
    height: 70,
    backgroundColor: "#000000",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    color: "#FFFFFF", // Contrast color for the text
    fontWeight: "bold",
    paddingLeft: 10,
  },

  image: {
    width: 415,
    height: 210,
    position: "absolute",
    top: 208,
    shadowColor: "#000",
    borderRadius: 100,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
  text: {
    fontSize: 40,
    color: "#000000",
    fontWeight: "bold",
    marginBottom: 10,
    padding: 10,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
  longText: {
    fontSize: 16,
    color: "#000000", // Softer color for the description text
    lineHeight: 22, // Improves readability for longer text
    fontStyle: "italic",
  },

  logo: {
    width: 160,
    height: 90,
    position: "absolute",
    bottom: 30, // Sağ alt köşe
  },
});
export default styles;
