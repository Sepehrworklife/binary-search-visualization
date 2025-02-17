const Legend = () => {
	return (
		<div className="flex flex-row gap-4">
			<div className="flex items-center gap-1">
				<div className="w-3 h-3 rounded-full bg-indigo-500"></div>
				<span className="text-sm">Middle Element</span>
			</div>
			<div className="flex items-center gap-1">
				<div className="w-3 h-3 rounded-full bg-indigo-200"></div>
				<span className="text-sm">Search range</span>
			</div>
			<div className="flex items-center gap-1">
				<div className="w-3 h-3 rounded-full bg-emerald-800"></div>
				<span className="text-sm">Found Element</span>
			</div>
		</div>
	);
};

export default Legend;
