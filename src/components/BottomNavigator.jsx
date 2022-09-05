import { NavLink } from "react-router-dom";
import {
	AccountBlue,
	AccountGray,
	HomeBlue,
	WashingGray,
	HomeGray,
} from "../assets";
import { useLocation } from "react-router-dom";

export default function BottomNavgiator() {
	const location = useLocation().pathname;
	return (
		<section className="sm:block sm:fixed sm:bottom-0 sm:inset-x-0 sm:z-50 sm:text-black sm:bg-white  sm:border-t-2">
			<div className="sm:flex sm:justify-between sm:mx-[30px] sm:pt-2 sm:pb-2">
				<NavLink to="/home" className="sm:h-full">
					{location == "/home" ? (
						<div className="sm:flex sm:flex-col sm:items-center sm:justify-center">
							<img src={HomeBlue} alt="example" className="sm:w-6 sm:h-6" />
							<span className="sm:text-center sm:text-sm sm:text-[#01B1BC] ">
								Home
							</span>
						</div>
					) : (
						<div className="sm:flex sm:flex-col sm:justify-center sm:items-center">
							<img src={HomeGray} alt="example" className="sm:w-6 sm:h-6"/>
							<span className="sm:text-center sm:text-sm sm:text-[#C4C4C4] ">
								Home
							</span>
						</div>
					)}
				</NavLink>
				<NavLink to="/pesanan">
						<div className="sm:flex sm:flex-col sm:justify-center sm:items-center">
							<img src={WashingGray} alt="example" className="sm:w-6 sm:h-6" />
							<span className="sm:text-center sm:text-sm sm:text-[#C4C4C4]">
								Pesanan
							</span>
						</div>
				</NavLink>
				<NavLink to="/profile">
					{location == "/profile" ? (
						<div className="sm:flex sm:flex-col sm:justify-center sm:items-center">
							<img src={AccountBlue} alt="example" className="sm:w-6 sm:h-6" />
							<span className="sm:text-center sm:text-sm sm:text-[#01B1BC]">
								Profile
							</span>
						</div>
					) : (
						<div className="sm:flex sm:flex-col sm:justify-center sm:items-center">
							<img src={AccountGray} alt="example" className="sm:w-6 sm:h-6"/>
							<span className="sm:text-center sm:text-sm sm:text-[#C4C4C4]">
								Profile
							</span>
						</div>
					)}
				</NavLink>
			</div>
		</section>
	);
}
