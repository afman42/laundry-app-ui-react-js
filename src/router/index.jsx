import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Splash, Home, Daftar, Registrasi, Pesanan, Profile } from "../pages";
import AppLayout from '../layout/AppLayout'

export default function Router() {
	return (
		<BrowserRouter>
			<AppLayout>
			<Routes>
				<Route path="/" element={<Splash />} />
				<Route path="/daftar" element={<Daftar />} />
				<Route path="/registrasi" element={<Registrasi />} />
				<Route path="/home" element={<Home />} />
				<Route path="/pesanan" element={<Pesanan />} />
				<Route path="/profile" element={<Profile />} />
			</Routes>
			</AppLayout>
		</BrowserRouter>
	);
}
