import Image from "next/image"
import Link from "next/link"

const Footer = () => {
	return (
		<>
			<section className="py-20">
				<div className="container px-4 mx-auto wow animate__animated animate__fadeIn" data-wow-delay=".3s">
					<div className="flex flex-wrap mb-12 lg:mb-20 -mx-3 text-center lg:text-left">
						<div className="w-full lg:w-1/5 px-3 mb-6 lg:mb-0">
							<Link href="/" className="inline-block mx-auto lg:mx-0 text-3xl font-semibold leading-none">
								<Image
									width="400"
									height="400"
									sizes="100vw"
									style={{ width: "auto", height: "auto" }} className="h-10" src="/assets/imgs/logos/DALL_E-2025-01-31-12.17-removebg.svg" alt="ZanNavi" />

							</Link>
						</div>
						<div className="w-full lg:w-2/5 px-3 mb-8 lg:mb-0">
							<p className="max-w-md mx-auto lg:max-w-full lg:mx-0 lg:pr-32 lg:text-lg text-blueGray-400 leading-relaxed">
								Помащь вам <strong>делает нас счастливыми </strong>
							</p>
						</div>
						<div className="w-full lg:w-1/5 px-3 mb-8 lg:mb-0">
							<p className="mb-2 lg:mb-4 lg:text-lg font-bold font-heading text-blueGray-800">Астана</p>
							<p className="lg:text-lg text-blueGray-400">пр-т. Мангилик Ел. 14 </p>
						</div>
						<div className="w-full lg:w-1/5 px-3">
							<p className="mb-2 lg:mb-4 lg:text-lg font-bold font-heading text-blueGray-800">Контакты</p>
							<p className="lg:text-lg text-blueGray-400"> 87753331234</p>
							<p className="lg:text-lg text-blueGray-400">armankz2012@gmail.com</p>
						</div>
					</div>
					<div className="flex flex-col lg:flex-row items-center lg:justify-between">
						<p className="text-sm text-blueGray-400">
							&copy; {new Date().getFullYear()}. Все права защищены. Разрабатывался при поддержке Баймаханова А.А.
							{/*{" "}*/}
							{/*<Link className="text-blue-400" href="https://alithemes.com" target="_blank">*/}
							{/*	Alithemes.com*/}
							{/*</Link>*/}
						</p>
						<div className="order-first lg:order-last -mx-2 mb-4 lg:mb-0">
							<Link className="inline-block px-2" href="https://facebook.com">
								<Image
									width="0"
									height="0"
									sizes="100vw"
									style={{ width: "auto", height: "auto" }} src="/assets/imgs/icons/facebook-blue.svg" alt="Monst" />
							</Link>
							<Link className="inline-block px-2" href="https://twitter.com">
								<Image
									width="0"
									height="0"
									sizes="100vw"
									style={{ width: "auto", height: "auto" }} src="/assets/imgs/icons/twitter-blue.svg" alt="Monst" />
							</Link>
							<Link className="inline-block px-2" href="https://www.instagram.com">
								<Image
									width="0"
									height="0"
									sizes="100vw"
									style={{ width: "auto", height: "auto" }} src="/assets/imgs/icons/instagram-blue.svg" alt="Monst" />
							</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Footer
