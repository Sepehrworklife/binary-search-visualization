const Legend = () => {
	return (
		<>
			<div className="bg-white rounded-lg px-4 py-2 border mt-6">
				Index found!
			</div>
			<div className="flex flex-row gap-4">
				<div className="flex items-center gap-1">
					<div className="w-3 h-3 rounded-full bg-orange-500"></div>
					<span className="text-sm">Middle Element</span>
				</div>
				<div className="flex items-center gap-1">
					<div className="w-3 h-3 rounded-full bg-lime-500"></div>
					<span className="text-sm">Search range</span>
				</div>
				<div className="flex items-center gap-1">
					<div className="w-3 h-3 rounded-full bg-teal-500"></div>
					<span className="text-sm">Found Element</span>
				</div>
			</div>
		</>
	);
};

export default Legend;
