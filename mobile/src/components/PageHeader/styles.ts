import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		padding: 30,
		backgroundColor: "#8257e5",
		// marginBottom: 60,
		// height: 200,
		// height: "100%",
	},

	topBar: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},

	header: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},

	title: {
		fontFamily: "Archivo_700Bold",
		color: "#FFF",
		fontSize: 24,
		lineHeight: 48,
		// maxWidth: 160,
		marginVertical: 8,
		marginBottom: 10,
		textAlign: "center",
	},
});

export default styles;
