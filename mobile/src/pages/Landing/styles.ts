import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#8257e5",
		justifyContent: "center",
		padding: 40,
	},

	banner: {
		width: "100%",
		resizeMode: "contain",
		//resizeMode: 'cover'
	},

	title: {
		fontFamily: "Poppins_400Regular",
		color: "#FFF",
		fontSize: 29,
		lineHeight: 36,
		marginTop: 40,
	},

	titleBold: {
		fontFamily: "Poppins_600SemiBold",
	},

	buttonsContainer: {
		flexDirection: "row",
		marginTop: 40,
		justifyContent: "space-between",
	},

	button: {
		height: 150,
		width: "48%",
		backgroundColor: "#333",
		borderRadius: 8,
		padding: 25,
		alignItems: "center",
		justifyContent: "space-between",
	},

	buttonPrimary: {
		backgroundColor: "#9871f5",
	},

	buttonSecondary: {
		backgroundColor: "#04d361",
	},

	buttonImg: {
		width: "60%",
		height: "50%",
		marginTop: 5,
	},

	buttonText: {
		fontFamily: "Archivo_700Bold",
		color: "#FFF",
		fontSize: 20,
	},

	totalConnections: {
		fontFamily: "Poppins_400Regular",
		color: "#d4c2ff",
		textAlign: "center",
		fontSize: 12,
		lineHeight: 20,
		marginTop: 40,
		// maxWidth: 140
	},
});

export default styles;
