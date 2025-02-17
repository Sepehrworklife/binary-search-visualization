// FIXME: fix relative path
import { Input } from "./ui/input";
import { Button } from "./ui/button";

type Props = {
	inputNumbers: string;
	setInputNumbers: (value: string) => void;
	target: string;
	setTarget: (value: string) => void;
	isSorted: boolean;
	handleSearch: () => void;
	isSearching: boolean;
};

const InputPanel = ({
	inputNumbers,
	setInputNumbers,
	target,
	setTarget,
	isSorted,
	handleSearch,
	isSearching,
}: Props) => {
	return (
		<div className="flex flex-col gap-4 items-start mt-6">
			<div className="w-full">
				<label>Numbers: </label>
				<Input
					value={inputNumbers}
					onChange={(e) => setInputNumbers(e.target.value)}
					placeholder="e.g., 1,2,3,4,5,6..."
				/>
				<span className="text-muted-foreground text-sm">
					Array Status: {isSorted ? "Sorted" : "Unsorted (will be auto-sorted)"}
				</span>
			</div>
			<div className="w-full">
				<label>Target: </label>
				<Input value={target} onChange={(e) => setTarget(e.target.value)} />
			</div>
			<Button
				onClick={handleSearch}
				disabled={isSearching || !target}
				className="cursor-pointer"
			>
				Search
			</Button>
		</div>
	);
};

export default InputPanel;
