"use client";

import { useState } from 'react';
import Layout from '../../components/layout/Layout';
import { Tab } from '@headlessui/react';
import Link from 'next/link';

const Blank = () => {
	const [activeCategory, setActiveCategory] = useState('business');


	return (
		<Layout>
			{/* Верхняя шапка */}
			<section className="-mt-24 pt-20 pb-12 bg-blueGray-100">
				<div className="container">
					<h1 className="text-2xl lg:text-4xl font-bold mb-5 wow animate__animated animate__fadeIn animated">
						База знаний
					</h1>
				</div>
			</section>

			<section className="py-8 bg-gray-200">
				<div className="container mx-auto">
					<Tab.Group>
						<Tab.List className="flex justify-center gap-4">
							<Tab
								className={({selected}) =>
									selected
										? "px-6 py-3 rounded-lg shadow-lg bg-blue-600 text-white"
										: "px-6 py-3 rounded-lg shadow-lg bg-white text-blue-500 border border-blue-500 hover:bg-blue-50"
								}
							>
								10 советов для вашего бизнеса
							</Tab>
							<Tab
								className={({selected}) =>
									selected
										? "px-6 py-3 rounded-lg shadow-lg bg-purple-600 text-white"
										: "px-6 py-3 rounded-lg shadow-lg bg-white text-purple-500 border border-purple-500 hover:bg-purple-50"
								}
							>
								10 советов в сфере трудовых отношений
							</Tab>
						</Tab.List>
					</Tab.Group>
				</div>
			</section>


			{/* Основное содержимое */}
			<section className="py-40">
				<div className="container mx-auto p-6">
					{activeCategory === 'business' ? (
						<>
							{/* Блок с бизнес-советами */}
							<h1 className="text-4xl font-bold text-center mb-8">
								10 советов для вашего бизнеса
							</h1>
							{/* Содержание */}
							<nav id="contents" className="mb-8">
								<h2 className="text-2xl font-bold mb-4">Содержание</h2>
								<ul className="list-decimal list-inside">
									<li>
										<a href="#advice1" className="text-blue-500 hover:underline">
											1. Как защитить свой бизнес?
										</a>
									</li>
									<li>
										<a href="#advice2" className="text-blue-500 hover:underline">
											2. Если к вам пришли с проверкой
										</a>
									</li>
									<li>
										<a href="#advice3" className="text-blue-500 hover:underline">
											3. Ваши права в ходе проводимой проверки
										</a>
									</li>
									<li>
										<a href="#advice4" className="text-blue-500 hover:underline">
											4. Если проверяющие нарушают ваши права
										</a>
									</li>
									<li>
										<a href="#advice5" className="text-blue-500 hover:underline">
											5. Какая проверка может быть признана незаконной?
										</a>
									</li>
									<li>
										<a href="#advice6" className="text-blue-500 hover:underline">
											6. Что важно знать участникам госзакупок?
										</a>
									</li>
									<li>
										<a href="#advice7" className="text-blue-500 hover:underline">
											7. Как открыть свой бизнес в колонии?
										</a>
									</li>
									<li>
										<a href="#advice8" className="text-blue-500 hover:underline">
											8. Знаете ли вы о поддержке, оказываемой государством?
										</a>
									</li>
									<li>
										<a href="#advice9" className="text-blue-500 hover:underline">
											9. Куда ещё можно обратиться при нарушении прав предпринимателей помимо
											госорганов?
										</a>
									</li>
									<li>
										<a href="#advice10" className="text-blue-500 hover:underline">
											10. Ответственность предпринимательства за нарушение законодательства
										</a>
									</li>
								</ul>
							</nav>

							{/* Пример секции – 1 совет. (Остальные секции advice2 ... advice10 аналогичным образом) */}
							<section id="advice1" className="mb-12 section-anchor">
								<h2 className="text-2xl font-semibold mb-4">
									1 совет. Как защитить свой бизнес?
								</h2>
								<blockquote className="border-l-4 border-green-500 pl-4 italic text-gray-700 mb-4">
									«Быстрее всего учишься в трех случаях — до семи лет, на тренингах, и когда жизнь
									загнала тебя в угол»
								</blockquote>
								<p className="mb-2 font-semibold">Эксперт в области менеджмента</p>
								<p className="mb-4 font-semibold">Стивен Нови</p>
								<p className="mb-4">
									Защитите бизнес от возможных расследований и судебных исков. Избегайте деловых
									контактов с людьми, имеющими плохую репутацию.
								</p>
								<p className="mb-4">
									Следите за наличными деньгами и доходами. Проводите независимый аудит предприятия,
									чтобы избежать нарушений.
								</p>
								<p className="mb-4">
									Сотрудничайте с квалифицированным адвокатом и финансовым консультантом. Используйте
									все налоговые послабления.
								</p>
								<p className="mb-4">
									Вся переписка должна вестись официально – договоренности фиксируйте документально.
								</p>
								<h3 className="text-xl font-semibold mb-2">
									ДОЛЖНЫ ЛИ ГОСОРГАНЫ УВЕДОМЛЯТЬ ПРЕДПРИНИМАТЕЛЯ О ПРЕДСТОЯЩЕЙ ПРОВЕРКЕ?
								</h3>
								<p className="mb-4">
									Да. Письменное уведомление должно поступать не менее чем за 30 календарных дней (или
									за сутки при внеплановой проверке).
								</p>
								<p>
									Исключения составляют внеплановые проверки, проводимые согласно законодательству.
								</p>
								<div className="mt-4">
									<a
										href="#contents"
										className="inline-block px-4 py-2 bg-green-500 text-white rounded-full shadow-md transition transform hover:bg-green-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400 animate__animated animate__fadeIn"
									>
										← Вернуться к содержанию
									</a>
								</div>
							</section>
							{/* ... остальные секции бизнес-советов */}
						</>
					) : (
						<>
							{/* Блок с трудовыми советами */}
							<h1 className="text-4xl font-bold text-center mb-8">
								10 советов в сфере трудовых отношений
							</h1>

							{/* Содержание для трудовых отношений */}
							<nav id="laborContents" className="mb-8">
								<h2 className="text-2xl font-bold mb-4">Содержание</h2>
								<ul className="flex flex-wrap gap-4">
									<li>
										<a
											href="#labor1"
											className="inline-block px-6 py-3 bg-purple-500 text-white rounded-lg shadow-lg transition transform hover:bg-purple-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400 animate__animated animate__fadeIn"
										>
											1. Как урегулировать трудовой спор?
										</a>
									</li>
									<li>
										<a
											href="#labor2"
											className="inline-block px-6 py-3 bg-purple-500 text-white rounded-lg shadow-lg transition transform hover:bg-purple-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400 animate__animated animate__fadeIn"
										>
											2. Как составить трудовой договор?
										</a>
									</li>
									{/* Добавьте остальные пункты labor3 ... labor10 */}
								</ul>
							</nav>

							{/* Пример секции – 1 совет по трудовым отношениям */}
							<section id="labor1" className="mb-12 section-anchor">
								<h2 className="text-2xl font-semibold mb-4">
									1 совет. Как урегулировать трудовой спор?
								</h2>
								<p className="mb-4">
									Здесь разместите подробные рекомендации по урегулированию трудового спора, порядок
									переговоров и порядок медиации или обращения в суд.
								</p>
								<div className="mt-4">
									<a
										href="#laborContents"
										className="inline-block px-4 py-2 bg-green-500 text-white rounded-full shadow-md transition transform hover:bg-green-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400 animate__animated animate__fadeIn"
									>
										← Вернуться к содержанию
									</a>
								</div>
							</section>
							{/* Добавьте остальные секции для трудовых отношений labor2 ... labor10 */}
						</>
					)}
				</div>
			</section>
		</Layout>
	);
};

export default Blank;
