import { useMemo, useState } from "react";
import ArrayDisplay from "./components/ArrayDisplay";
import InputPanel from "./components/InputPanel";
import Legend from "./components/Legend";
import useBinarySearch, { StepState } from "./hooks/useBinarySearch";

function App() {
	const [steps, setSteps] = useState<StepState[]>([]);
	const [currentStep, setCurrentStep] = useState(0);
	const [inputNumbers, setInputNumbers] = useState("");
	const [target, setTarget] = useState("");
	const [isSearching, setIsSearching] = useState(false);

	const { sortedNumbers, isSorted } = useMemo(() => {
		const numbers = inputNumbers
			.split(",")
			.map(Number)
			.filter((n) => !isNaN(n));
		const sorted = [...numbers].sort((a, b) => a - b);
		return {
			sortedNumbers: sorted,
			isSorted: numbers.every((val, i, arr) => !i || val >= arr[i - 1]),
		};
	}, [inputNumbers]);

	const handleSearch = useBinarySearch(
		sortedNumbers,
		target,
		setSteps,
		setCurrentStep,
		setIsSearching,
	);
	return (
		<div className="bg-muted min-h-screen p-5">
			<main className="w-xl mx-auto">
				<h1 className="text-2xl font-bold">Binary Search Visualizer</h1>
				<p className="text-muted-foreground text-sm">
					The BinaVry Search Visualizer is an interactive React application
					designed to help users understand and visualize the binary search
					algorithm. Users can input a list of comma-separated numbers and a
					target value, and the application automatically checks if the list is
					sorted, sorts it if necessary, and performs a binary search to find
					the target. The visualization highlights the current search range, the
					middle element being evaluated, and the final result (if found) with
					clear color-coded indicators. Each step of the algorithm is animated,
					making it easy to follow the process of narrowing down the search
					range. This tool is perfect for students, developers, and anyone
					looking to deepen their understanding of binary search in an engaging
					and intuitive way.
					<span className="italic font-bold">
						This text has been generated by AI.
					</span>
				</p>

				<InputPanel />
				<ArrayDisplay />
				<Legend />
			</main>
		</div>
	);
}

export default App;
