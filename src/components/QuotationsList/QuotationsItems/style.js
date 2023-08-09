import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  mainContant: {
    width: '95%',
    height: "auto",
    backgroundColor: "#232323",
    marginLeft: "3%",
    marginBottom: 15,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    padding: 10
  },
  boxLogo: {
    flexDirection: "row",
    alignItems: "center",

  },
  contextLeft: {
    width: "36%",
    alignItems: "flex-start",

  },
  contextRigth: {
    width: "60%",
    alignItems: "flex-end",
  },
  dayContation: {
    fontSize: 12,
    padding: 2,
    color: "#ccc",
    fontWeight: "bold",
    marginLeft: 8,
  },
  dayContation2: {
    fontSize: 16,
    padding: 2,
    color: "#fff",
    fontWeight: "bold",
    marginLeft: 8,
  },
  price: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold"
  }
})

export default style