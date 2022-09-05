import {
	SplashHomeSvg,
	MomLaundrySvg,
	ClotcheSvg,
	SetrikaSvg,
	ScaleSvg,
	DressSvg,
	LaundrySvg,
} from '../assets'

export default function Home(){
	return (
		<div className="sm:h-screen">
			<img src={SplashHomeSvg} className="sm:mt-2 sm:ml-2 sm:mb-4" />
			<div className="sm:ml-2 sm:mb-3">
				<h1 className="sm:font-light">Selamat Datang</h1>
				<h1 className="sm:font-bold">Farhan</h1>
			</div>
			<div className="sm:bg-[#01B1BC] sm:mx-2 sm:flex sm:justify-between sm:rounded-lg">
				<div className="sm:pt-5 sm:pl-5">
					<h1 className="sm:text-white sm:text-3xl sm:flex sm:font-bold sm:flex-row sm:h-auto">20% <span className="sm:flex sm:items-end sm:text-base sm:font-normal">OFF</span></h1>
					<p style={{ fontSize:'10px'}} className="sm:py-4 sm:text-white">Pesanan pertamamu</p>
					<button className="sm:text-[#01B1BC] sm:bg-[white] sm:w-full sm:py-2" style={{ fontSize: '10px'}}>Pesan sekarang</button>
				</div>
				<img src={MomLaundrySvg} />
			</div>
			<div className="sm:flex sm:flex-col sm:my-4 sm:mx-2">
				<h1 className="sm:font-bold">Layanan Kami</h1>
				<div className="sm:flex sm:flex-row sm:justify-between sm:mx-10 sm:my-3">
					<div className="sm:flex sm:flex-col sm:items-center">
						<div className="sm:border-2 sm:border-[#E0E0E0] sm:px-2 sm:py-2 sm:rounded-full">
							<img src={ScaleSvg} className="w-[40px] h-[40px]"/>
						</div>
						<h1 className="sm:font-semibold">Kiloan</h1>
					</div>
					<div className="sm:flex sm:flex-col sm:items-center">
						<div className="sm:border-2 sm:border-[#E0E0E0] sm:px-2 sm:py-2 sm:rounded-full">
							<img src={ClotcheSvg} className="w-[40px] h-[40px]"/>
						</div>
						<h1 className="sm:font-semibold">Satuan</h1>
					</div>
					<div className="sm:flex sm:flex-col sm:items-center">
						<div className="sm:border-2 sm:border-[#E0E0E0] sm:px-2 sm:py-2 sm:rounded-full">
							<img src={DressSvg} className="w-[40px] h-[40px]"/>
						</div>
						<h1 className="sm:font-semibold">VIP</h1>
					</div>
				</div>
				<div className="sm:flex sm:flex-row sm:justify-between sm:mx-10">
					<div className="sm:flex sm:flex-col sm:items-center">
						<div className="sm:border-2 sm:border-[#E0E0E0] sm:px-2 sm:py-2 sm:rounded-full">
							<img src={LaundrySvg} className="w-[40px] h-[40px]"/>
						</div>
						<h1 className="sm:font-semibold">Karpet</h1>
					</div>
					<div className="sm:flex sm:flex-col sm:items-center">
						<div className="sm:border-2 sm:border-[#E0E0E0] sm:px-2 sm:py-2 sm:rounded-full">
							<img src={SetrikaSvg} className="w-[40px] h-[40px]" />
						</div>
						<h1 className="sm:font-semibold">Setrika</h1>
					</div>
					<div className="sm:flex sm:flex-col sm:items-center">
						<div className="sm:border-2 sm:border-[#E0E0E0] sm:px-2 sm:py-2 sm:rounded-full">
							<img src={DressSvg} className="w-[40px] h-[40px]" />
						</div>
						<h1 className="sm:font-semibold">Express</h1>
					</div>
				</div>
			</div>
			<div className="sm:bg-[#01B1BC] sm:rounded-lg sm:px-7 sm:py-2 sm:rounded-lg">
				<h1 className="sm:pb-2 sm:text-lg sm:text-[white] sm:font-bold">Pesanan Aktif</h1>
				<div className="sm:bg-[white] sm:flex sm:flex-row sm:p-3 sm:rounded-lg sm:shadow-lg">
					<img src={ScaleSvg} className="sm:mr-3 sm:pl-3" />
					<div>
						<h1 className="sm:font-semibold">Pesanan No 23</h1>
						<h3 className="sm:font-semibold">Sedang di kilo</h3>
					</div>
				</div>
			</div>
		</div>
	)
}