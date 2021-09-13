import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  mainCont: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center"
  },
  sliderCont: {
    width: "100%",
    height: 250,
    alignItems: "center",
  },
  Header: {
    marginVertical: 10,
    fontWeight: "bold",
    fontSize: 16,
    color: "#2c2d2e",
    textAlign: "center"
  },
  sliderTouch: {
    backgroundColor: "#e8e8e8",
    width: 200,
    height: "100%",
    marginHorizontal: 10,
    alignItems: "center",
    borderRadius: 5,
    borderBottomWidth: 5,
    borderColor: "#bfbfbf"

  },
  sliderImage: {
    width: "100%",
    height: "50%",
    marginBottom: 5,
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
    borderRadius: 5,
    borderRightWidth: 5,
    borderColor: "#bfbfbf",
    backgroundColor: "#e8e8e8",
  },
  previousImageCont: {
    width: "100%",
    height: 135,
    flexDirection: "row",
  },
  previousImage: {
    width: "50%",
    height: "100%",
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5
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