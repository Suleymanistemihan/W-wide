import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  mainCont: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    backgroundColor: "#E3E5E4"
  },
  sliderCont: {
    width: "100%",
    height: 250,
    alignItems: "center",
  },
  Header: {
    marginVertical: 10,
    fontWeight: "bold",
    fontSize: 25,
    color: "#2c2d2e",
    textAlign: "center",
    height: 50,
    width: "50%",
    alignSelf: "center",
    textDecorationLine: "underline",
  },
  sliderTouch: {
    backgroundColor: "#B5B8B7",
    width: 200,
    height: "100%",
    marginHorizontal: 10,
    alignItems: "center",
    borderRadius: 10,
    borderBottomWidth: 10,
    borderColor: "#66645E"

  },
  sliderImage: {
    width: "100%",
    height: "50%",
    marginBottom: 4,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10
  },
  sliderText: {
    color: "#2c2d2e",
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center",
    width: "90%",
    height: "100%",
    marginVertical: 10
  },
  sliderDate: {
    fontWeight: "bold",
  },
  previousCont: {
    width: "95%",
    alignSelf: "center",
  },
  previousTouch: {
    height: 135,
    width: "100%",
    flexDirection: "row",
    marginVertical: "3%",
    borderRadius: 15,
    borderRightWidth: 5,
    borderColor: "#66645E",
    backgroundColor: "#B5B8B7",
    borderBottomWidth: 3,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10
  },
  previousImageCont: {
    width: "100%",
    height: 135,
    flexDirection: "row",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10
  },
  previousImage: {
    width: "50%",
    height: "100%",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10
  },
  previousDetailCont: {
    width: "50%",
    height: 135,
    justifyContent: "space-between"
  },
  previousTitleCont: {
    height: "50%"
  },
  previousTitle: {
    fontSize: 14,
    color: "#2c2d2e",
    fontWeight: "bold",
    marginHorizontal: 10,
    marginVertical: 10
  },
  prewDateCont: {
    alignItems: "flex-end",
  },
  prewDate: {
    fontSize: 13,
    fontWeight: "bold",
    marginHorizontal: 5,
    marginVertical: 5
  }
})

export default styles;