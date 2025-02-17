// FIXME: fix relative path
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const InputPanel = () => {
	return (
		<div className="flex flex-col gap-4 items-start mt-6">
			<div className="w-full">
				<label>Numbers: </label>
				<Input placeholder="e.g., 1,2,3,4,5,6..." />
			</div>
			<div className="w-full">
				<label>Target: </label>
				<Input />
			</div>
			<Button className="cursor-pointer">Search</Button>
		</div>
	);
};

export default InputPanel;
