import {
	ChevronLeftSvg,
	ChecklistSvg,
	ProfileSvg,
} from '../assets'
import {
	LabelInputProfile,
	ButtonText
} from '../components'
import { useNavigate } from 'react-router-dom'

export default function Profile(){
	let navigate = useNavigate();
	return (
		<div>
			<div className="sm:flex sm:flex-row sm:justify-between sm:bg-[#01B1BC] sm:px-2 sm:py-4">
				<img src={ChevronLeftSvg} onClick={() => navigate('/home')} />
				<h1 className="sm:text-white">Edit Akun</h1>
				<img src={ChecklistSvg} />
			</div>
			<div className="sm:flex sm:justify-center sm:my-10">
				<img src={ProfileSvg} />
			</div>
			<div className="sm:mx-5">
				<LabelInputProfile label="Nama" placeholder="Farhan Muhammad" />
				<LabelInputProfile label="Username" placeholder="Farhan" />
				<LabelInputProfile label="Nama" placeholder="farahanmuhamadd@gmail.com" />
				<div className="sm:mt-8">
				<ButtonText label="Simpan" clickButton={() => alert('Simpan')} />
				</div>
			</div>
		</div>
	)
}