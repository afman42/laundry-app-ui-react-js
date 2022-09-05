import { EyeShowSvg } from "../assets";

export default function LabelInput({ label, placeholder, password }) {
	return (
		<div className="sm:my-2 sm:flex sm:flex-col">
			<label className="sm:text-base">{label}</label>
			{password ? (
				<div className="sm:flex sm:flex-row sm:items-center sm:border-[#E0E0E0] sm:border-2 sm:px-2 sm:py-2 sm:rounded-lg">
					<input placeholder={placeholder} className="sm:w-full" />
					<img src={EyeShowSvg} className="sm:w-6 sm:h-6" />
				</div>
			) : (
				<input
					placeholder={placeholder}
					className="sm:border-[#E0E0E0] sm:border-2 sm:px-2 sm:py-2 sm:rounded-lg"
				/>
			)}
		</div>
	);
}
