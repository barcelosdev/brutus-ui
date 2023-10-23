import SearchIcon from '@mui/icons-material/Search';

export default function Home() {
	return (
		<main className="">
			<section className="flex flex-col justify-center items-center gap-12 mt-8">
				<span className="text-center text-6xl font-black max-w-[60rem]">
					Encontre trabalhos científicos e contribua para o mundo acadêmico
				</span>
				<form className="flex items-center min-w-[30rem] w-[40rem] h-14 border transtion-all duration-300
				border-gray-200 shadow-md rounded-2xl overflow-hidden focus-within:border-blue-500">
					<input
						className="w-full p-4"
						placeholder="Pesquisa rápida"
						type="text"
					/>
					<div className="flex items-center gap-2 p-2 h-full">
						{/* <span className="text-xs text-center text-gray-500 p-2 h-full rounded-xl bg-gray-200">
							Enter
						</span> */}
						<button className="bg-secondary rounded-xl w-10 h-full">
							<SearchIcon className="fill-white" />
						</button>
					</div>
				</form>
			</section>
		</main>
	)
}
