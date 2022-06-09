import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItem = (props) => {
	return (
		<View style={styles.goalItem}>
			<Pressable
				android_ripple={{ color: "#210644", borderless: true }}
				onPress={props.onDeleteItem.bind(this, props.id)}
				style={({ pressed }) => pressed && styles.pressedItem}>
				<Text style={styles.goalText}>{props.text}</Text>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	goalItem: {
		margin: 8,
		borderRadius: 6,
		backgroundColor: "#5e0acc"
	},
	pressedItem: {
		opacity: 0.5
	},
	goalText: {
		color: "#fff",
		padding: 8
	}
});

export default GoalItem;
