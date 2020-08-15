import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// backgroundColor: "#f0f0f7",
		// height: 100,
		backgroundColor: "#8257e5",
	},

	teacherList: {
		marginTop: -10,
	},

	searchForm: {
		// marginBottom: 24,
		// backgroundColor: "red",
	},

	label: {
		color: "#d4c2ff",
		fontFamily: "Poppins_400Regular",
	},

	inputGroup: {
		flexDirection: "row",
		justifyContent: "space-between",
	},

	inputBlock: {
		width: "48%",
	},

	input: {
		height: 54,
		backgroundColor: "#FFF",
		borderRadius: 8,
		justifyContent: "center",
		paddingHorizontal: 16,
		marginTop: 4,
		marginBottom: 12,
	},

	submitButton: {
		backgroundColor: "#04d361",
		height: 56,
		borderRadius: 8,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},

	submitButtonText: {
		color: "#FFF",
		fontFamily: "Archivo_700Bold",
		fontSize: 16,
	},
});

export default styles;
