import {
	SplashSvg
} from '../assets'
import { useEffect } from 'react'
import { useNavigate } from "react-router-dom";

export default function Splash(){
	let navigate = useNavigate();
	useEffect(() => {
		setTimeout(() => {
			navigate('/daftar')
		},3000)
	},[])

	return (
		<div className="sm:bg-[#01B1BC] sm:flex sm:justify-center sm:items-center sm:h-screen">
			<img src={SplashSvg} />
		</div>
	)
}