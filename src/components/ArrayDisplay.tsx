import { StepState } from "@/hooks/useBinarySearch";
import { cn } from "@/lib/utils";

type Props = {
	sortedNumbers: number[];
	currentState: StepState;
};

const ArrayDisplay = ({ sortedNumbers, currentState }: Props) => {
	return (
		<div className="grid grid-cols-4 md:grid-cols-6 gap-2 mt-6">
			{sortedNumbers.map((num, index) => {
				const isMid = index === currentState?.mid;
				const isInRange =
					index >= currentState?.low && index <= currentState?.high;
				const isFound = index === currentState?.foundIndex;
				return (
					<div
						key={
							index
							// Since sortedNumbers is derived from user input and then sorted, it does not change dynamically while rendering.
						}
						className={cn(
							"border bg-white rounded-lg flex flex-col justify-center items-center p-4",
							isInRange && "bg-indigo-100",
							isMid && "bg-indigo-500 text-white",
							isFound && "bg-emerald-800 text-white",
						)}
					>
						<span className="font-bold">{num}</span>
						<span className="text-sm">{index}</span>
					</div>
				);
			})}
		</div>
	);
};

export default ArrayDisplay;
