'use client'
import CounterUp from "../../components/elements/CounterUp"
import Layout from '../../components/layout/Layout'
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from 'react'

const Services = () => {
	const [inViewport, setInViewport] = useState(false)

	const handleScroll = () => {
		const elements = document.getElementsByClassName("counterUp")
		if (elements.length > 0) {
			const element = elements[0]
			const rect = element.getBoundingClientRect()
			const isInViewport = rect.top >= 0 && rect.bottom <= window.innerHeight
			if (isInViewport && !inViewport) {
				setInViewport(true)
			}
		}
	}

	useEffect(() => {
		window.addEventListener("scroll", handleScroll)
		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [])
	return (
		<>
			<Layout>
				<section className="-mt-24 pt-40 pb-12 bg-blueGray-100">
					<div className="container">
						<h1 className="text-2xl lg:text-5xl font-bold mb-5 wow animate__animated animate__fadeIn animated">Наши
							сервисы</h1>
						{/*<ul className="flex text-gray-500 text-sm lg:text-sm pb-12 wow animate__animated animate__fadeIn animated">*/}
						{/*	<li className="inline-flex items-center">*/}
						{/*		<Link href="#" className="hover:text-blue-500 text-gray-800">*/}
						{/*			Home*/}
						{/*		</Link>*/}

						{/*		<svg fill="currentColor" viewBox="0 0 20 20" className="h-5 w-auto text-gray-300">*/}
						{/*			<path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>*/}
						{/*		</svg>*/}
						{/*	</li>*/}
						{/*	<li className="inline-flex items-center">*/}
						{/*		<Link href="#" className="hover:text-blue-500 text-gray-800">*/}
						{/*			Our Services*/}
						{/*		</Link>*/}

						{/*		<svg fill="currentColor" viewBox="0 0 20 20" className="h-5 w-auto text-gray-300">*/}
						{/*			<path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>*/}
						{/*		</svg>*/}
						{/*	</li>*/}
						{/*	<li className="inline-flex items-center text-gray-400">*/}
						{/*		<span>Web Development</span>*/}
						{/*	</li>*/}
						{/*</ul>*/}
					</div>
				</section>
				<section className="pb-20 mt-12" id="key-features">
					<div className="container">
						{/*<div className="max-w-lg mx-auto mb-12 text-center">*/}
						{/*	<h2 className="my-2 text-3xl md:text-4xl font-bold font-heading wow animate__animated animate__fadeIn"*/}
						{/*		data-wow-delay=".1s">*/}
						{/*		We Consultant to Get <br/>*/}
						{/*		<span className="text-blue-500">Our Business</span> Plan*/}
						{/*	</h2>*/}
						{/*	<p className="text-blueGray-400 leading-loose wow animate__animated animate__fadeIn"*/}
						{/*	   data-wow-delay=".3s">*/}
						{/*		Business solution company sit our any how site used the our company any site us it-solve*/}
						{/*		theme is very professional*/}
						{/*	</p>*/}
						{/*</div>*/}
						<div className="flex flex-wrap -mx-3 mb-6">
							<div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
								<div
									className="border border-gray-100 pt-8 px-6 pb-6 bg-white text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeIn"
									data-wow-delay=".3s">
									<div className="text-blue-500 mx-auto mb-4">
										<svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor"
											 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
												  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
										</svg>
									</div>
									<h3 className="mb-2 font-bold font-heading"> Онлайн-консультации</h3>
									<p className="text-sm text-blueGray-400">получение юридических советов в режиме реального времени.</p>
								</div>
							</div>
							<div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
								<div
									className="border border-gray-100 pt-8 px-6 pb-6 bg-white text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeIn"
									data-wow-delay=".5s">
									<div className="text-blue-500 mx-auto mb-4">
										<svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor"
											 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
												  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
										</svg>
									</div>
									<h3 className="mb-2 font-bold font-heading">Генерация документов</h3>
									<p className="text-sm text-blueGray-400">автоматическое создание юридических документов по введённым данным.</p>
								</div>
							</div>
							<div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
								<div
									className="border border-gray-100 pt-8 px-6 pb-6 bg-white text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeIn"
									data-wow-delay=".7s">
									<div className="text-blue-500 mx-auto mb-4">
										<svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor"
											 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
												  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
										</svg>
									</div>
									<h3 className="mb-2 font-bold font-heading">База знаний</h3>
									<p className="text-sm text-blueGray-400">статьи и разъяснения по основным правовым вопросам.</p>
								</div>
							</div>
							<div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-8">
								<div
									className="border border-gray-100 pt-8 px-6 pb-6 bg-white text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeIn"
									data-wow-delay=".9s">
									<div className="text-blue-500 mx-auto mb-4">
										<svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor"
											 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
												  d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
												  d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
										</svg>
									</div>
									<h3 className="mb-2 font-bold font-heading">Калькуляторы</h3>
									<p className="text-sm text-blueGray-400">расчёт госпошлин, штрафов, компенсаций и других юридических платежей.</p>
								</div>
							</div>
							<div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
								<div
									className="border border-gray-100 pt-8 px-6 pb-6 bg-white text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeIn"
									data-wow-delay=".3s">
									<div className="text-blue-500 mx-auto mb-4">
										<svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor"
											 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
												  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path>
										</svg>
									</div>
									<h3 className="mb-2 font-bold font-heading">Юридический чат-бот</h3>
									<p className="text-sm text-blueGray-400">быстрая навигация и ответы на частые вопросы основанных на искуственном интелекте.</p>
								</div>
							</div>
							<div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
								<div
									className="border border-gray-100 pt-8 px-6 pb-6 bg-white text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeIn"
									data-wow-delay=".5s">
									<div className="text-blue-500 mx-auto mb-4">
										<svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor"
											 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
												  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
										</svg>
									</div>
									<h3 className="mb-2 font-bold font-heading">Личный кабинет</h3>
									<p className="text-sm text-blueGray-400">управление документами, вопросами, переписками с государственными органами и историей обращений.</p>
								</div>
							</div>
							<div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
								<div
									className="border border-gray-100 pt-8 px-6 pb-6 bg-white text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeIn"
									data-wow-delay=".7s">
									<div className="text-blue-500 mx-auto mb-4">
										<svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor"
											 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
												  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path>
										</svg>
									</div>
									<h3 className="mb-2 font-bold font-heading">Рейтинг и отзывы юристов</h3>
									<p className="text-sm text-blueGray-400">возможность оставлять отзывы только после реального взаимодействия с юристами.</p>
								</div>
							</div>
							<div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
								<div
									className="border border-gray-100 pt-8 px-6 pb-6 bg-white text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeIn"
									data-wow-delay=".9s">
									<div className="text-blue-500 mx-auto mb-4">
										<svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor"
											 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
												  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
										</svg>
									</div>
									<h3 className="mb-2 font-bold font-heading">Интеграция с государственными сервисами</h3>
									<p className="text-sm text-blueGray-400">проверка ИИН, штрафов, статуса дел.</p>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/*<section className="pt-12">*/}
				{/*	<div className="container py-12 mx-auto">*/}
				{/*		<div className="flex flex-wrap">*/}
				{/*			<div className="w-full md:w-1/2 pr-12 px-3 order-0 md:order-0 mb-12 md:mb-0 wow animate__animated animate__fadeIn" data-wow-delay=".5s">*/}
				{/*				<Image*/}
				{/*					width="0"*/}
				{/*					height="0"*/}
				{/*					sizes="100vw"*/}
				{/*					style={{ width: "auto", height: "auto" }} className="sm:max-w-sm lg:max-w-full mx-auto" src="/assets/imgs/placeholders/img-6.jpg" alt="Monst" />*/}
				{/*			</div>*/}
				{/*			<div className="w-full md:w-1/2 px-3 order-1 md:order-1">*/}
				{/*				<div className="max-w-md-2">*/}
				{/*					<div className="mb-4">*/}
				{/*						<span className="text-xs py-1 px-3 text-blue-500 font-semibold bg-blue-50 rounded-xl wow animate__animated animate__fadeInDown" data-wow-delay=".9s">*/}
				{/*							Why choose us*/}
				{/*						</span>*/}
				{/*						<h2 className="text-4xl mt-3 font-bold font-heading wow animate__animated animate__fadeIn" data-wow-delay=".3s">*/}
				{/*							We Provide Best <br />*/}
				{/*							<span className="text-blue-500">Web design </span>services*/}
				{/*						</h2>*/}
				{/*					</div>*/}

				{/*					<p className="mb-6 leading-loose text-blueGray-400 wow animate__animated animate__fadeIn" data-wow-delay=".1s">*/}
				{/*						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo et iaculis.*/}
				{/*					</p>*/}

				{/*					<div className="flex flex-wrap">*/}
				{/*						<div className="w-full md:w-1/2 items-start pt-4 pb-8 wow animate__animated animate__fadeIn" data-wow-delay=".2s">*/}
				{/*							<div className="w-8 mb-5 text-blue-500">*/}
				{/*								<span className="inline-block py-2 px-4 mr-4 text-xs font-semibold bg-blue-500 text-white rounded">1</span>*/}
				{/*							</div>*/}
				{/*							<div>*/}
				{/*								<h3 className="mb-2 text-xl font-semibold font-heading">Web design UX/UI</h3>*/}
				{/*								<p className="text-blueGray-400 leading-loose text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis expedita animi.</p>*/}
				{/*							</div>*/}
				{/*						</div>*/}
				{/*						<div className="w-full md:w-1/2 items-start py-4 wow animate__animated animate__fadeIn" data-wow-delay=".3s">*/}
				{/*							<div className="w-8 mb-5 text-blue-500">*/}
				{/*								<span className="inline-block py-2 px-4 mr-4 text-xs font-semibold bg-blue-500 text-white rounded">2</span>*/}
				{/*							</div>*/}
				{/*							<div>*/}
				{/*								<h3 className="mb-2 text-xl font-semibold font-heading">React Develop</h3>*/}
				{/*								<p className="text-blueGray-400 leading-loose text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis expedita animi.</p>*/}
				{/*							</div>*/}
				{/*						</div>*/}
				{/*						<div className="w-full md:w-1/2 items-start py-4 wow animate__animated animate__fadeIn" data-wow-delay=".4s">*/}
				{/*							<div className="w-8 mb-5 text-blue-500">*/}
				{/*								<span className="inline-block py-2 px-4 mr-4 text-xs font-semibold bg-blue-500 text-white rounded">3</span>*/}
				{/*							</div>*/}
				{/*							<div>*/}
				{/*								<h3 className="mb-2 text-xl font-semibold font-heading">Ecommerce Build</h3>*/}
				{/*								<p className="text-blueGray-400 leading-loose text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis expedita animi.</p>*/}
				{/*							</div>*/}
				{/*						</div>*/}
				{/*						<div className="w-full md:w-1/2 items-start py-4 wow animate__animated animate__fadeIn" data-wow-delay=".5s">*/}
				{/*							<div className="w-8 mb-5 text-blue-500">*/}
				{/*								<span className="inline-block py-2 px-4 mr-4 text-xs font-semibold bg-blue-500 text-white rounded">4</span>*/}
				{/*							</div>*/}
				{/*							<div>*/}
				{/*								<h3 className="mb-2 text-xl font-semibold font-heading">CMS develop</h3>*/}
				{/*								<p className="text-blueGray-400 leading-loose text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis expedita animi.</p>*/}
				{/*							</div>*/}
				{/*						</div>*/}
				{/*					</div>*/}
				{/*				</div>*/}
				{/*			</div>*/}
				{/*		</div>*/}
				{/*	</div>*/}
				{/*</section>*/}
				{/*<section className="pb-4">*/}
				{/*	<div className="container">*/}
				{/*		<div className="flex flex-wrap justify-between pt-8 pb-16 px-3">*/}
				{/*			<div className="hover-up-5 flex w-1/2 lg:w-auto py-4 wow animate__animated animate__fadeIn" data-wow-delay=".2s">*/}
				{/*				<div className="flex justify-center items-center bg-blueGray-50 text-blue-500 rounded-xl h-12 w-12 sm:h-20 sm:w-20">*/}
				{/*					<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">*/}
				{/*						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>*/}
				{/*					</svg>*/}
				{/*				</div>*/}
				{/*				<div className="sm:py-2 ml-2 sm:ml-6">*/}
				{/*					<span className="sm:text-2xl font-bold font-heading">+ </span>*/}
				{/*					<span className="sm:text-2xl font-bold font-heading count">*/}
				{/*						{inViewport && <CounterUp end={150} duration={10} />}*/}
				{/*					</span>*/}
				{/*					<p className="text-xs sm:text-base text-blueGray-400">Annual Partner</p>*/}
				{/*				</div>*/}
				{/*			</div>*/}
				{/*			<div className="hover-up-5 flex w-1/2 lg:w-auto py-4 wow animate__animated animate__fadeIn" data-wow-delay=".4s">*/}
				{/*				<div className="flex justify-center items-center bg-blueGray-50 text-blue-500 rounded-xl h-12 w-12 sm:h-20 sm:w-20">*/}
				{/*					<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">*/}
				{/*						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>*/}
				{/*					</svg>*/}
				{/*				</div>*/}
				{/*				<div className="sm:py-2 ml-2 sm:ml-6">*/}
				{/*					<span className="sm:text-2xl font-bold font-heading">+ </span>*/}
				{/*					<span className="sm:text-2xl font-bold font-heading count">*/}
				{/*						{inViewport && <CounterUp end={58} duration={10} />}*/}
				{/*					</span>*/}
				{/*					<span className="sm:text-2xl font-bold font-heading"> k </span>*/}
				{/*					<p className="text-xs sm:text-base text-blueGray-400">Completed Projects</p>*/}
				{/*				</div>*/}
				{/*			</div>*/}
				{/*			<div className="hover-up-5 flex w-1/2 lg:w-auto py-4 wow animate__animated animate__fadeIn" data-wow-delay=".6s">*/}
				{/*				<div className="flex justify-center items-center bg-blueGray-50 text-blue-500 rounded-xl h-12 w-12 sm:h-20 sm:w-20">*/}
				{/*					<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">*/}
				{/*						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>*/}
				{/*					</svg>*/}
				{/*				</div>*/}
				{/*				<div className="sm:py-2 ml-2 sm:ml-6">*/}
				{/*					<span className="sm:text-2xl font-bold font-heading">+ </span>*/}
				{/*					<span className="sm:text-2xl font-bold font-heading count">*/}
				{/*						{inViewport && <CounterUp end={500} duration={10} />}*/}
				{/*					</span>*/}
				{/*					<p className="text-xs sm:text-base text-blueGray-400">Happy Customers</p>*/}
				{/*				</div>*/}
				{/*			</div>*/}
				{/*			<div className="hover-up-5 flex w-1/2 lg:w-auto py-4 wow animate__animated animate__fadeIn" data-wow-delay=".8s">*/}
				{/*				<div className="flex justify-center items-center bg-blueGray-50 text-blue-500 rounded-xl h-12 w-12 sm:h-20 sm:w-20">*/}
				{/*					<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">*/}
				{/*						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>*/}
				{/*					</svg>*/}
				{/*				</div>*/}
				{/*				<div className="sm:py-2 ml-2 sm:ml-6">*/}
				{/*					<span className="sm:text-2xl font-bold font-heading">+ </span>*/}
				{/*					<span className="sm:text-2xl font-bold font-heading count counterUp">*/}
				{/*						{inViewport && <CounterUp end={320} duration={10} />}*/}
				{/*					</span>*/}
				{/*					<p className="text-xs sm:text-base text-blueGray-400">Research Work</p>*/}
				{/*				</div>*/}
				{/*			</div>*/}
				{/*		</div>*/}
				{/*	</div>*/}
				{/*</section>*/}
				{/*<section className="pt-20 pb-24 bg-blueGray-50" id="how-we-work">*/}
				{/*	<div className="container">*/}
				{/*		<div className="flex flex-wrap items-center justify-between max-w-2xl lg:max-w-full mb-12">*/}
				{/*			<div className="w-full lg:w-1/2 mb-4 lg:mb-0">*/}
				{/*				<h2 className="text-3xl md:text-4xl font-bold font-heading wow animate__animated animate__fadeInDown">*/}
				{/*					<span>We are </span>*/}
				{/*					<span className="text-blue-500">awesome team </span>*/}
				{/*					<br />*/}
				{/*					<span>for your business dream</span>*/}
				{/*				</h2>*/}
				{/*			</div>*/}
				{/*			<div className="w-full lg:w-1/2">*/}
				{/*				<p className="text-blueGray-400 leading-loose wow animate__animated animate__fadeIn">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo et iaculis. Quisque vitae nulla malesuada, auctor arcu vitae, luctus nisi. Sed elementum vitae ligula id imperdiet.</p>*/}
				{/*			</div>*/}
				{/*		</div>*/}
				{/*		<div className="flex flex-wrap -mx-3 -mb-6 text-center">*/}
				{/*			<div className="hover-up-5 w-full md:w-1/2 lg:w-1/3 px-3 mb-6 wow animate__animated animate__fadeIn" data-wow-delay=".3s">*/}
				{/*				<div className="p-12 bg-white shadow rounded">*/}
				{/*					<div className="flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">1</div>*/}
				{/*					<Image*/}
				{/*						width="0"*/}
				{/*						height="0"*/}
				{/*						sizes="100vw"*/}
				{/*						style={{ width: "auto", height: "auto" }} className="h-36 mx-auto my-4" src="/assets/imgs/illustrations/eating.svg" alt="Monst" />*/}
				{/*					<h3 className="mb-2 font-bold font-heading text-xl">Project Initialization</h3>*/}
				{/*					<p className="text-sm text-blueGray-400 leading-relaxed">Project initiation ensures that you lay a strong foundation for a new project in your company our team.</p>*/}
				{/*				</div>*/}
				{/*			</div>*/}
				{/*			<div className="hover-up-5 w-full md:w-1/2 lg:w-1/3 px-3 mb-6 wow animate__animated animate__fadeIn" data-wow-delay=".5s">*/}
				{/*				<div className="p-12 bg-white shadow rounded">*/}
				{/*					<div className="flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">2</div>*/}
				{/*					<Image*/}
				{/*						width="0"*/}
				{/*						height="0"*/}
				{/*						sizes="100vw"*/}
				{/*						style={{ width: "auto", height: "auto" }} className="h-36 mx-auto my-4" src="/assets/imgs/illustrations/space.svg" alt="Monst" />*/}
				{/*					<h3 className="mb-2 font-bold font-heading text-xl">Project planning</h3>*/}
				{/*					<p className="text-sm text-blueGray-400 leading-relaxed">A project plan is essential to keep everything related to the project organized, methodical, and on track.</p>*/}
				{/*				</div>*/}
				{/*			</div>*/}
				{/*			<div className="hover-up-5 w-full lg:w-1/3 px-3 mb-6">*/}
				{/*				<div className="p-12 bg-white shadow rounded wow animate__animated animate__fadeIn" data-wow-delay=".7s">*/}
				{/*					<div className="flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">3</div>*/}
				{/*					<Image*/}
				{/*						width="0"*/}
				{/*						height="0"*/}
				{/*						sizes="100vw"*/}
				{/*						style={{ width: "auto", height: "auto" }} className="h-36 mx-auto my-4" src="/assets/imgs/illustrations/tasks.svg" alt="Monst" />*/}
				{/*					<h3 className="mb-2 font-bold font-heading text-xl">Project organization</h3>*/}
				{/*					<p className="text-sm text-blueGray-400 leading-relaxed">Moving forward you will be able to keep yourself and your team on track, and address challenges early.</p>*/}
				{/*				</div>*/}
				{/*			</div>*/}
				{/*		</div>*/}
				{/*	</div>*/}
				{/*</section>*/}

				{/*<section className="pt-20 pb-16 xl:bg-contain bg-top bg-no-repeat">*/}
				{/*	<div className="container">*/}
				{/*		<div className="text-center mb-16">*/}
				{/*			<h2 className="max-w-lg mx-auto mb-4 text-4xl font-bold font-heading wow animate__animated animate__fadeIn" data-wow-delay=".2s">*/}
				{/*				<span>Start saving time today and</span>*/}
				{/*				<span className="text-blue-500"> choose </span>*/}
				{/*				<span>your best plan</span>*/}
				{/*			</h2>*/}
				{/*			<p className="max-w-sm mx-auto text-lg text-blueGray-400 wow animate__animated animate__fadeInDown" data-wow-delay=".5s">*/}
				{/*				Best for freelance developers who need to save their time*/}
				{/*			</p>*/}
				{/*		</div>*/}
				{/*		<div className="flex flex-wrap -mx-3">*/}
				{/*			<div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">*/}
				{/*				<div className="hover-up-5 border border-gray-200 pt-16 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn" data-wow-delay=".2s">*/}
				{/*					<Image*/}
				{/*						width="0"*/}
				{/*						height="0"*/}
				{/*						sizes="100vw"*/}
				{/*						style={{ width: "auto", height: "auto" }} className="h-20 mb-6 mx-auto" src="/assets/imgs/icons/startup.svg" alt="Monst" />*/}
				{/*					<h3 className="mb-2 text-4xl font-bold font-heading">Startup</h3>*/}
				{/*					<span className="text-4xl text-blue-500 font-bold font-heading">$45.99</span>*/}
				{/*					<p className="mt-2 mb-8 text-blueGray-400">user per month</p>*/}
				{/*					<div className="flex flex-col items-center mb-8">*/}
				{/*						<ul className="text-blueGray-400">*/}
				{/*							<li className="flex mb-3">*/}
				{/*								<svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">*/}
				{/*									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>*/}
				{/*								</svg>*/}
				{/*								<span>3 Emails</span>*/}
				{/*							</li>*/}
				{/*							<li className="flex mb-3">*/}
				{/*								<svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">*/}
				{/*									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>*/}
				{/*								</svg>*/}
				{/*								<span>1 Datebases</span>*/}
				{/*							</li>*/}
				{/*							<li className="flex mb-3">*/}
				{/*								<svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">*/}
				{/*									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>*/}
				{/*								</svg>*/}
				{/*								<span>Unlimited Domains</span>*/}
				{/*							</li>*/}
				{/*							<li className="flex">*/}
				{/*								<svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">*/}
				{/*									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>*/}
				{/*								</svg>*/}
				{/*								<span>10 GB Storage</span>*/}
				{/*							</li>*/}
				{/*						</ul>*/}
				{/*					</div>*/}
				{/*					<div>*/}
				{/*						<Link className="block sm:inline-block py-4 px-6 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded" href="#">*/}
				{/*							Start Free Trial*/}
				{/*						</Link>*/}
				{/*						<Link className="block sm:inline-block py-4 px-6 text-xs text-blueGray-500 hover:text-blueGray-600 text-center font-semibold leading-none bg-white border border-blueGray-200 hover:border-blueGray-300 rounded" href="#">*/}
				{/*							Purchase*/}
				{/*						</Link>*/}
				{/*					</div>*/}
				{/*				</div>*/}
				{/*			</div>*/}
				{/*			<div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">*/}
				{/*				<div className="hover-up-5 pt-16 pb-8 px-4 text-center text-white bg-blue-500 rounded shadow wow animate__animated animate__fadeIn" data-wow-delay=".4s">*/}
				{/*					<Image*/}
				{/*						width="0"*/}
				{/*						height="0"*/}
				{/*						sizes="100vw"*/}
				{/*						style={{ width: "auto", height: "auto" }} className="h-20 mb-6 mx-auto" src="/assets/imgs/icons/agency.svg" alt="Monst" />*/}
				{/*					<h3 className="mb-2 text-4xl font-bold font-heading">Agency</h3>*/}
				{/*					<span className="text-4xl font-bold font-heading">$65.99</span>*/}
				{/*					<p className="mt-2 mb-8">user per month</p>*/}
				{/*					<div className="flex flex-col items-center mb-8">*/}
				{/*						<ul>*/}
				{/*							<li className="flex items-center mb-3">*/}
				{/*								<svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">*/}
				{/*									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>*/}
				{/*								</svg>*/}
				{/*								<span>6 Emails</span>*/}
				{/*							</li>*/}
				{/*							<li className="flex items-center mb-3">*/}
				{/*								<svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">*/}
				{/*									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>*/}
				{/*								</svg>*/}
				{/*								<span>4 Datebases</span>*/}
				{/*							</li>*/}
				{/*							<li className="flex items-center mb-3">*/}
				{/*								<svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">*/}
				{/*									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>*/}
				{/*								</svg>*/}
				{/*								<span>Unlimited Domains</span>*/}
				{/*							</li>*/}
				{/*							<li className="flex items-center">*/}
				{/*								<svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">*/}
				{/*									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>*/}
				{/*								</svg>*/}
				{/*								<span>35 GB Storage</span>*/}
				{/*							</li>*/}
				{/*						</ul>*/}
				{/*					</div>*/}
				{/*					<div>*/}
				{/*						<Link className="block sm:inline-block py-4 px-6 mb-4 sm:mb-0 sm:mr-3 text-xs text-blue-500 font-semibold leading-none bg-white hover:bg-blueGray-50 rounded" href="#">*/}
				{/*							Start Free Trial*/}
				{/*						</Link>*/}
				{/*						<Link className="block sm:inline-block py-4 px-6 text-xs font-semibold leading-none border border border-blue-400 hover:border-blue-400 rounded" href="#">*/}
				{/*							Purchase*/}
				{/*						</Link>*/}
				{/*					</div>*/}
				{/*				</div>*/}
				{/*			</div>*/}
				{/*			<div className="w-full lg:w-1/3 px-3 mb-6">*/}
				{/*				<div className="hover-up-5 border border-gray-200 pt-16 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn" data-wow-delay=".6s">*/}
				{/*					<Image*/}
				{/*						width="0"*/}
				{/*						height="0"*/}
				{/*						sizes="100vw"*/}
				{/*						style={{ width: "auto", height: "auto" }} className="h-20 mb-6 mx-auto" src="/assets/imgs/icons/enterprise.svg" alt="Monst" />*/}
				{/*					<h3 className="mb-2 text-4xl font-bold font-heading">Enterprise</h3>*/}
				{/*					<span className="text-4xl text-blue-500 font-bold font-heading">$85.99</span>*/}
				{/*					<p className="mt-2 mb-8 text-blueGray-400">user per month</p>*/}
				{/*					<div className="flex flex-col items-center mb-8">*/}
				{/*						<ul className="text-blueGray-400">*/}
				{/*							<li className="flex mb-3">*/}
				{/*								<svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">*/}
				{/*									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>*/}
				{/*								</svg>*/}
				{/*								<span>12 Emails</span>*/}
				{/*							</li>*/}
				{/*							<li className="flex mb-3">*/}
				{/*								<svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">*/}
				{/*									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>*/}
				{/*								</svg>*/}
				{/*								<span>8 Datebases</span>*/}
				{/*							</li>*/}
				{/*							<li className="flex mb-3">*/}
				{/*								<svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">*/}
				{/*									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>*/}
				{/*								</svg>*/}
				{/*								<span>Unlimited Domains</span>*/}
				{/*							</li>*/}
				{/*							<li className="flex">*/}
				{/*								<svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">*/}
				{/*									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>*/}
				{/*								</svg>*/}
				{/*								<span>50 GB Storage</span>*/}
				{/*							</li>*/}
				{/*						</ul>*/}
				{/*					</div>*/}
				{/*					<div>*/}
				{/*						<Link className="block sm:inline-block py-4 px-6 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded" href="#">*/}
				{/*							Start Free Trial*/}
				{/*						</Link>*/}
				{/*						<Link className="block sm:inline-block py-4 px-6 text-xs text-blueGray-500 hover:text-blueGray-600 text-center font-semibold leading-none bg-white border border-blueGray-200 hover:border-blueGray-300 rounded" href="#">*/}
				{/*							Purchase*/}
				{/*						</Link>*/}
				{/*					</div>*/}
				{/*				</div>*/}
				{/*			</div>*/}
				{/*		</div>*/}
				{/*	</div>*/}
				{/*</section>*/}

				{/*<section className="pb-20">*/}
				{/*	<div className="container">*/}
				{/*		<div className="max-w-2xl mx-auto text-center">*/}
				{/*			<div className="max-w-md mb-8 mx-auto">*/}
				{/*				<span className="text-xs py-1 px-3 text-blue-500 font-semibold bg-blue-50 rounded-xl wow animate__animated animate__fadeInDown" data-wow-delay=".9s">*/}
				{/*					Contact Us*/}
				{/*				</span>*/}
				{/*				<h2 className="mt-2 text-4xl font-bold font-heading wow animate__animated animate__fadeIn" data-wow-delay=".3s">*/}
				{/*					We will <span className="text-blue-500">be glad</span> to hear from you!*/}
				{/*				</h2>*/}
				{/*			</div>*/}
				{/*			<div>*/}
				{/*				<form>*/}
				{/*					<div className="mb-4 text-sm wow animate__animated animate__fadeIn" data-wow-delay=".5s">*/}
				{/*						<span className="mr-4 font-semibold">Departament:</span>*/}
				{/*						<label className="mr-4">*/}
				{/*							<input className="mr-1" type="radio" name="department" value="1" />*/}
				{/*							<span>Support</span>*/}
				{/*						</label>*/}
				{/*						<label>*/}
				{/*							<input className="mr-1" type="radio" name="department" value="2" />*/}
				{/*							<span>Sales</span>*/}
				{/*						</label>*/}
				{/*					</div>*/}
				{/*					<div className="mb-4 wow animate__animated animate__fadeIn" data-wow-delay=".3s">*/}
				{/*						<input className="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none" type="text" placeholder="Subject" />*/}
				{/*					</div>*/}
				{/*					<div className="mb-4 wow animate__animated animate__fadeIn" data-wow-delay=".3s">*/}
				{/*						<input className="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none" type="text" placeholder="Name" />*/}
				{/*					</div>*/}
				{/*					<div className="mb-4 wow animate__animated animate__fadeIn" data-wow-delay=".3s">*/}
				{/*						<input className="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none" type="email" placeholder="name@example.com" />*/}
				{/*					</div>*/}
				{/*					<div className="mb-4 wow animate__animated animate__fadeIn" data-wow-delay=".3s">*/}
				{/*						<textarea className="w-full h-24 p-4 text-xs font-semibold leading-none resize-none bg-blueGray-50 rounded outline-none" placeholder="Message..."></textarea>*/}
				{/*					</div>*/}
				{/*					<div className="mb-4 wow animate__animated animate__fadeIn" data-wow-delay=".3s">*/}
				{/*						<label className="flex px-2 bg-blueGray-50 rounded">*/}
				{/*							<input className="hidden" type="file" name="Choose file" />*/}
				{/*							<span className="my-1 ml-auto px-4 py-3 text-xs text-white font-semibold leading-none bg-blueGray-500 hover:bg-blueGray-600 rounded cursor-pointer"> Browse</span>*/}
				{/*						</label>*/}
				{/*					</div>*/}
				{/*					<div className="flex justify-between items-center wow animate__animated animate__fadeIn" data-wow-delay=".3s">*/}
				{/*						<label>*/}
				{/*							<input className="mr-1" type="checkbox" name="terms" value="1" />*/}
				{/*							<span className="text-sm font-semibold">I agree to terms and conditions.</span>*/}
				{/*						</label>*/}
				{/*						<button className="py-4 px-8 text-sm text-white font-semibold leading-none bg-blue-500 hover:bg-blue-700 rounded" type="submit">*/}
				{/*							Submit*/}
				{/*						</button>*/}
				{/*					</div>*/}
				{/*				</form>*/}
				{/*			</div>*/}
				{/*		</div>*/}
				{/*	</div>*/}
				{/*</section>*/}
				{/*<section className="py-20 bg-blue-500">*/}
				{/*	<div className="container">*/}
				{/*		<div className="text-center max-w-xl mx-auto">*/}
				{/*			<h2 className="mb-4 text-3xl lg:text-3xl text-white font-bold font-heading">*/}
				{/*				<span>Subscribe now to </span>*/}
				{/*				<span className="text-blue-200">Our Newsletter</span> <br />*/}
				{/*				<span>and get the Coupon code.</span>*/}
				{/*			</h2>*/}
				{/*			<p className="mb-8 text-blueGray-200">All your information is completely confidential</p>*/}
				{/*			<div className="flex flex-wrap max-w-lg mx-auto">*/}
				{/*				<div className="flex w-full md:w-2/3 px-3 mb-3 md:mb-0 md:mr-6 bg-blue-500 border border-blue-300 rounded">*/}
				{/*					<svg className="h-6 w-6 my-auto text-blue-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">*/}
				{/*						<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>*/}
				{/*						<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>*/}
				{/*					</svg>*/}
				{/*					<input className="w-full pl-3 py-4 text-xs text-white placeholder-white font-semibold leading-none bg-blue-500 outline-none" type="text" placeholder="Type your e-mail" />*/}
				{/*				</div>*/}
				{/*				<button className="w-full md:w-auto py-4 px-8 text-xs text-white text-blue-800 hover:text-white font-semibold leading-none border border-blue-300 hover:border-blue-300 bg-white hover:bg-blue-500 rounded transition duration-300 ease-in-out" type="submit">*/}
				{/*					Sign Up*/}
				{/*				</button>*/}
				{/*			</div>*/}
				{/*		</div>*/}
				{/*	</div>*/}
				{/*</section>*/}
			</Layout>
		</>
	)
}

export default Services