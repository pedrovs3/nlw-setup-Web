import logoImage from "../assets/logo.svg";
import {Plus, X} from "phosphor-react";
import {useState} from "react";
import * as Dialog from "@radix-ui/react-dialog";
import {NewHabitForm} from "./NewHabitForm";

export function Header() {

	return (
			<div className={'w-full max-w-3xl mx-auto flex items-center justify-between'}>
				<img src={logoImage} alt={"Logo Habits monitor"} draggable={false}/>

				<Dialog.Root>
					<Dialog.Trigger
							className="btn border-2 border-violet-500 font-semibold rounded-lg flex items-center justify-center gap-3
                hover:text-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-700 focus:ring-offset-2 focus:ring-offset-background"
							type={"button"}

					>
						<Plus size={20} className={"text-violet-500"}/>
						Novo hábito
					</Dialog.Trigger>

					<Dialog.Portal>
						<Dialog.Overlay className={'w-screen h-screen bg-black/80 fixed inset-0'}/>

						<Dialog.Content className={'absolute p-10 bg-zinc-900 rounded-2xl w-full max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'}>
							<Dialog.Close className={'absolute right-6 top-6 text-zinc-400 hover:text-zinc-200 focus:outline-none focus:ring-2 focus:ring-violet-700 focus:ring-offset-2 focus:ring-offset-background	rounded-lg'}>
								<X size={24} aria-label={'Close'}/>
							</Dialog.Close>
							<Dialog.Title className={'text-3xl leading-tight font-extrabold text-white'}>
								Criar Hábito
							</Dialog.Title>
							<NewHabitForm/>
						</Dialog.Content>
					</Dialog.Portal>
				</Dialog.Root>
			</div>
	)
}

