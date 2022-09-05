import {
	LabelInput,
	ButtonText
} from '../components'
import { useNavigate, NavLink } from 'react-router-dom'

export default function Registrasi(){
	let navigate = useNavigate();
	return (
		<div className="sm:mt-5 sm:mx-5">
			<h1 className="sm:text-2xl">Masuk</h1>
			<p className="text-[#B5ACAC] sm:my-2">Silakan masuk terlebih dahulu</p>
			<LabelInput label="Alamat Email" placeholder="Masukan Alamat Email" />
			<LabelInput label="Password" placeholder="Masukan Password" password />
			<div className="sm:mt-5">
				<ButtonText clickButton={() => navigate('/home')} label="Masuk" />
			</div>	
			<div className="sm:text-center sm:mt-3">
				Anda sudah punya akun? <NavLink to="/daftar" className="sm:text-[#01B1BC]">Daftar</NavLink>
			</div>
		</div>
	)
}