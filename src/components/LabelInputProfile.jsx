export default function LabelInputProfile({ label, placeholder }){
	return (
		<div className="sm:flex sm:flex-col sm:my-2">
			<label className="sm:font-light">{label}</label>
			<input type="text" value={placeholder} className="sm:border-2 sm:pb-2 sm:border-b-[#504F5E] sm:border-t-white sm:border-r-white sm:border-l-white" />
		</div>
	)
}