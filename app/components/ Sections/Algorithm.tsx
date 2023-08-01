const Algorithm = () => {
	return (
		<div id="algorithm" className="flex flex-col align-left w-4/5 px-24">
			<h3 className="font-bold text-3xl py-8">Алгоритм действий</h3>

			<ol className="hidden md:flex items-start">
				<li className="relative mb-6 sm:mb-0">
					<div className="flex items-center">
						<div className="z-10 flex items-center justify-center w-10 h-10 bg-violet-100 text-violet-600 text-xl rounded-full  shrink-0">
							1
						</div>
						<div className="hidden sm:flex w-full bg-gray-200 h-0.5 "></div>
					</div>
					<div className="mt-3 sm:pr-8">
						<h3 className="text-lg   leading-5 text-gray-400  ">Идея</h3>
						<time className="block mb-2 text-white/0 text-sm font-normal leading-none text-gray-400 ">
							Подготовка Подготовка документов
						</time>
					</div>
				</li>
				<li className="relative mb-6 sm:mb-0">
					<div className="flex items-center">
						<div className="z-10 flex items-center justify-center w-10 h-10 bg-violet-100 text-violet-600 text-xl rounded-full  shrink-0">
							2
						</div>
						<div className="hidden sm:flex w-full bg-gray-200 h-0.5 "></div>
					</div>
					<div className="mt-3 sm:pr-8">
						<h3 className="text-lg   leading-5 text-gray-400  ">
							Консультация
						</h3>
						<time className="block mb-2 text-white/0 text-sm font-normal leading-none text-gray-400 ">
							Подготовка Подготовка документов
						</time>
					</div>
				</li>
				<li className="relative mb-6 sm:mb-0">
					<div className="flex items-center">
						<div className="z-10 flex items-center justify-center w-10 h-10 bg-violet-100 text-violet-600 text-xl rounded-full  shrink-0">
							3
						</div>
						<div className="hidden sm:flex w-full bg-gray-200 h-0.5 "></div>
					</div>
					<div className="mt-3 sm:pr-8">
						<h3 className="text-lg   leading-5 text-gray-400  ">
							Подготовка
							<br />
							проекта
						</h3>
						<time className="block mb-2 text-white/0 text-sm font-normal leading-none text-gray-400 ">
							Подготовка Подготовка документов
						</time>
					</div>
				</li>
				<li className="relative mb-6 sm:mb-0">
					<div className="absolute z-10 -ml-16 -mt-16 text-xs text-gray-400  bg-gray-100 rounded-xl p-2">
						Если у вас уже есть бизнес
						<br />
						сотрудничество начинаем тут
						<div className="tooltip-arrow" data-popper-arrow></div>
					</div>
					<div className="flex items-center">
						<div className="z-10 flex items-center justify-center w-10 h-10 bg-violet-100 text-violet-600 text-xl rounded-full  shrink-0">
							4
						</div>
						<div className="hidden sm:flex w-full bg-gray-200 h-0.5 "></div>
					</div>
					<div className="mt-3 sm:pr-8">
						<h3 className="text-lg   leading-5 text-gray-400  ">
							Подготовка
							<br /> документов
						</h3>
						<time className="block mb-2 text-white/0 text-sm font-normal leading-none text-gray-400 ">
							Подготовка Подготовка документов
						</time>
					</div>
				</li>
				<li className="relative mb-6 sm:mb-0">
					<div className="flex items-center">
						<div className="z-10 flex items-center justify-center w-10 h-10 bg-violet-100 text-violet-600 text-xl rounded-full  shrink-0">
							5
						</div>
						<div className="hidden sm:flex w-full bg-gray-200 h-0.5 "></div>
					</div>
					<div className="mt-3 sm:pr-8">
						<h3 className="text-lg   leading-5 text-gray-400  ">
							Подача документов
							<br /> в Испании
						</h3>
						<time className="block mb-2 text-white/0 text-sm font-normal leading-none text-gray-400 ">
							Подготовка Подготовка документов
						</time>
					</div>
				</li>
				<li className="relative mb-6 sm:mb-0">
					<div className="flex items-center">
						<div className="z-10 flex items-center justify-center w-10 h-10 bg-violet-100 text-violet-600 text-xl rounded-full  shrink-0">
							6
						</div>
					</div>
					<div className="mt-3 sm:pr-8">
						<h3 className="text-lg   leading-5 text-gray-400  ">Ответ</h3>
						<time className="block mb-2 text-white/0 text-sm font-normal leading-none text-gray-400 "></time>
					</div>
				</li>
			</ol>
			<ol className="relative lg:hidden relative border-l border-gray-200">
				<li className="mb-10 ml-6">
					<span className="absolute flex items-center justify-center w-10 h-10  rounded-full -left-5  ring-white bg-violet-100 text-violet-600 text-xl">
						1
					</span>
					<h3 className="ml-3 flex items-center leading-9 text-lg font-semibold text-gray-900 ">
						Идея
					</h3>
				</li>
				<li className="mb-10 ml-6">
					<span className="absolute flex items-center justify-center w-10 h-10 bg-violet-100 text-violet-600 text-xl rounded-full -left-5  ring-white ">
						2
					</span>
					<h3 className="ml-3 text-lg leading-10 font-semibold text-gray-900 ">
						Консультация
					</h3>
				</li>
				<li className="mb-10 ml-6">
					<span className="absolute flex items-center justify-center w-10 h-10 bg-violet-100 text-violet-600 text-xl rounded-full -left-5  ring-white ">
						3
					</span>
					<h3 className="ml-3 text-lg leading-10 font-semibold text-gray-900 ">
						Подготовка проекта
					</h3>
				</li>
				<li className="mb-10 ml-6">
					<span className="absolute flex items-center justify-center w-10 h-10 bg-violet-100 text-violet-600 text-xl rounded-full -left-5  ring-white ">
						4
					</span>
					<h3 className="ml-3 text-lg leading-10 font-semibold text-gray-900 ">
						Подготовка документов
					</h3>
				</li>
				<li className="mb-10 ml-6">
					<span className="absolute flex items-center justify-center w-10 h-10 bg-violet-100 text-violet-600 text-xl rounded-full -left-5  ring-white ">
						5
					</span>
					<h3 className="ml-3 text-lg leading-10 font-semibold text-gray-900 ">
						Подача документов в Испании
					</h3>
				</li>
				<li className="ml-6">
					<span className="absolute flex items-center justify-center w-10 h-10 bg-violet-100 text-violet-600 text-xl rounded-full -left-5  ring-white ">
						6
					</span>
					<h3 className="ml-3 text-lg  leading-10 font-semibold text-gray-900 ">
						Ответ
					</h3>
				</li>
			</ol>
		</div>
	);
};
export default Algorithm;
