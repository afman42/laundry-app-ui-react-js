import { BottomNavigator } from '../components'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function AppLayout({ children }){
	const [widthPhone,setWidthPhone] = useState(true)
	useEffect(() => {
		if(window.innerWidth > 500){
			setWidthPhone(false)
		}
	},[])
	const location = useLocation().pathname;
	let bottomNav = ( location == '/home'	|| location == '/pesanan' || location == '/profile')
	if(widthPhone){
		return (
			<div className="sm:min-h-full">
				{children}
				{ bottomNav && <BottomNavigator /> }
			</div>
		)
	} else {
		return (
			<div className="grid place-items-center min-h-screen">
				Especially for mobile phone
			</div>
		)
	}
}