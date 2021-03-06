import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import { StatusBar } from "expo-status-bar";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
	const [myGoals, setMyGoals] = useState([]);
	const [showModal, setShowModal] = useState(false);

	// Show Modal
	function startAddGoalHandler() {
		setShowModal(true);
	}

	// Hide Modal
	function endAddGoalHandler() {
		setShowModal(false);
	}

	// Add new Goal
	function addGoalHandler(enteredGoalText) {
		setMyGoals((currentGoals) => [
			...currentGoals,
			{ text: enteredGoalText, id: Math.random().toString() }
		]);
		setShowModal(false);
	}

	// Delete a Goal
	const deleteGoalHandler = (goalId) => {
		setMyGoals((prevState) => {
			return prevState.filter((goal) => goal.id !== goalId);
		});
	};

	return (
		<>
			<StatusBar style="light" />
			<View style={styles.appContainer}>
				<Button
					title="Add New Goal"
					color="#a065ec"
					onPress={startAddGoalHandler}
				/>
				<GoalInput
					onAddGoal={addGoalHandler}
					visible={showModal}
					onCancel={endAddGoalHandler}
				/>
				<View style={styles.goalsContainer}>
					<FlatList
						keyExtractor={(item, index) => item.id}
						data={myGoals}
						renderItem={(itemData) => {
							return (
								<GoalItem
									text={itemData.item.text}
									id={itemData.item.id}
									onDeleteItem={deleteGoalHandler}
								/>
							);
						}}
					/>
				</View>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		paddingTop: 70,
		paddingHorizontal: 16
	},

	goalsContainer: {
		flex: 5
	}
});

