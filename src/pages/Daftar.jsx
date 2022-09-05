import {
	LabelInput,
	ButtonText
} from '../components'
import { useNavigate, NavLink } from "react-router-dom";

export default function Daftar(){
	let navigate = useNavigate();
	return (
		<div className="sm:mt-5 sm:mx-5">
			<h1 className="sm:text-2xl">Daftar Akun</h1>
			<p className="text-[#B5ACAC] sm:w-10/12 sm:my-2">Belum punya akun silahkan daftar akun terlebih dahulu</p>
			<LabelInput label="Full Name" placeholder="Masukan Nama Depan" />
			<LabelInput label="Alamat Email" placeholder="Masukan Alamat Email" />
			<LabelInput label="Password" placeholder="Masukan Password" password={true}/>
			<div className="sm:mt-5">
				<ButtonText clickButton={() => navigate('/home')} label="Daftar" />
			</div>	
			<div className="sm:text-center sm:mt-3">
				Anda sudah punya akun? <NavLink to="/registrasi" className="sm:text-[#01B1BC]">Masuk</NavLink>
			</div>
		</div>
	)
}