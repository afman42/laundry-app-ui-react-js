export default function ButtonText({ clickButton, label }) {
	return (
		<button
			onClick={clickButton}
			className="sm:bg-[#01B1BC] sm:text-[white] sm:w-full sm:py-2 sm:rounded-lg sm:hover:opacity-70"
		>
			{label}
		</button>
	);
}
