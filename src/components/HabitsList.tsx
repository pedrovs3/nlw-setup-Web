import * as Checkbox from "@radix-ui/react-checkbox";
import {Check} from "phosphor-react";
import React, {useEffect, useState} from "react";
import {api} from "../lib/axios";
import dayjs from "dayjs";

interface HabitsListProps {
	date: Date;
	onChangeCompleted: (completed: number) => void
}

type HabitsInfoProps = {
	possibleHabits: Array<{
		id: string
		title: string;
		created_at: string;
	}>;
	completedHabits: string[];
}

export function HabitsList({ date, onChangeCompleted }: HabitsListProps) {

	const [habitsInfo, setHabitsInfo] = useState<HabitsInfoProps>()

	useEffect(()=> {
		api.get('/day', {
			params: {
				date: date.toISOString(),
			}
		}).then(response => setHabitsInfo(response.data.data))
	}, [])

	const isDateInPast = dayjs(date).endOf('day').isBefore(new Date());

	const handleToggleHabit = async (habitId: string) => {
		await api.patch(`/habits/${habitId}/toggle`);

		const isHabitAlreadyCompleted = habitsInfo!.completedHabits.includes(habitId)

		let completedHabits: string[] = []

		if(isHabitAlreadyCompleted) {
			completedHabits = habitsInfo!.completedHabits.filter((id) => id !== habitId)
		} else {
			completedHabits = [...habitsInfo!.completedHabits, habitId]
		}

		setHabitsInfo({
			possibleHabits: habitsInfo!.possibleHabits,
			completedHabits,
		});

		onChangeCompleted(completedHabits.length)
	}

	return (
		<div className={'mt-6 flex flex-col gap-3'}>
			{
				habitsInfo?.possibleHabits.map(habit => {
					return (
							<Checkbox.Root key={habit.id}
														 onCheckedChange={() => handleToggleHabit(habit.id)}
														 className={'flex items-center gap-3 group focus:outline-none disabled:cursor-not-allowed'}
														 defaultChecked={habitsInfo?.completedHabits.includes(habit.id)}
														 disabled={isDateInPast}
							>

								<div className={'checkbox h-8 w-8 flex items-center justify-center border-2 group-data-[state=checked]:bg-violet-600 group-data-[state=checked]:border-violet-500 transition-colors group-focus:ring-2 group-focus:ring-violet-700 group-focus:ring-offset-2 group-focus:ring-offset-background'}>
									<Checkbox.Indicator>
										<Check size={20} className={'text-white'}/>
									</Checkbox.Indicator>
								</div>

								<span className={'leading-tight font-semibold text-xl text-white group-data-[state=checked]:line-through group-data-[state=checked]:text-zinc-400'}>{habit.title}</span>
							</Checkbox.Root>
					)
				})
			}
		</div>
	)
}