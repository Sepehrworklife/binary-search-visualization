import { useCallback } from "react";

type StepState = {
	low: number;
	high: number;
	mid: number;
	foundIndex: number | null;
	message: string;
};

const useBinarySearch = (
	sortedNumbers: number[],
	target: string,
	setSteps: (steps: StepState[]) => void,
	setCurrentStep: (step: number) => void,
	setIsSearching: (status: boolean) => void,
) => {
	return useCallback(async () => {
		if (!target || sortedNumbers.length === 0) return;

		const targetNumber = Number(target);
		let steps: StepState[] = [];
		let low = 0;
		let high = sortedNumbers.length - 1;

		while (low <= high) {
			const mid = Math.floor((low + high) / 2);
			const currentValue = sortedNumbers[mid];

			steps.push({
				low,
				high,
				mid,
				foundIndex: null,
				message: `Searching between indices ${low} and ${high}`,
			});

			if (currentValue === targetNumber) {
				steps[steps.length - 1].foundIndex = mid;
				steps[steps.length - 1].message = `Found at index ${mid}!`;
				break;
			}

			if (currentValue < targetNumber) low = mid + 1;
			else high = mid - 1;
		}

		if (!steps.find((step) => step.foundIndex !== null)) {
			steps.push({
				low: -1,
				high: -1,
				mid: -1,
				foundIndex: null,
				message: "Element not found in array",
			});
		}

		setIsSearching(true);
		setSteps(steps);
		setCurrentStep(0);

		for (let i = 0; i < steps.length; i++) {
			await new Promise((resolve) => setTimeout(resolve, 1000));
			setCurrentStep(i);
		}

		setIsSearching(false);
	}, [sortedNumbers, target]);
};

export type { StepState };
export default useBinarySearch;
