import logoImage from "../assets/logo.svg";
import { Plus } from "phosphor-react";

export function Header() {
	return (
			<div className={'w-full max-w-3xl mx-auto flex items-center justify-between'}>
				<img src={logoImage} alt={"Logo Habits monitor"}/>

				<button
						className="btn border-2 border-violet-500 font-semibold rounded-lg flex items-center justify-center gap-3
                hover:text-violet-500"
						type={"button"}>
					<Plus size={20} className={"text-violet-500"}/>
					Novo hábito
				</button>

			</div>
	)
}

