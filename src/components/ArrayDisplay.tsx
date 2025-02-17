const ArrayDisplay = () => {
	return (
		<div className="grid grid-cols-6 gap-2 mt-6">
			{Array.from(Array(10).keys()).map(() => (
				<div className="border bg-white rounded-lg flex flex-col justify-center items-center p-4">
					<span className="font-bold">10</span>
					<span className="text-muted-foreground text-sm">0</span>
				</div>
			))}
		</div>
	);
};

export default ArrayDisplay;
