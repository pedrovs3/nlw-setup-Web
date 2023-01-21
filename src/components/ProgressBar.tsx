import * as Progress from '@radix-ui/react-progress';
import {useEffect, useState} from "react";

type ProgressBarProps = {
	progress: number
}

export function ProgressBar(props: ProgressBarProps) {
	return (
			<div className={'h-3 rounded-xl bg-zinc-700 w-full mt-4'}>
				<div role={"progressbar"}
				aria-label={"Progresso de Hábitos completados nesse dia"}
				aria-valuenow={props.progress}
			  className={'h-3 rounded-xl bg-violet-600 transition-all duration-300'}
				style={{width: `${props.progress}%`}}></div>
			</div>

			// <Progress.Root className={'h-3 rounded-xl bg-zinc-700 w-full mt-4 overflow-hidden'} value={props.progress}>
			// 	<Progress.Indicator
			// 			className={'h-3 rounded-xl bg-violet-600  delay-0'}
			// 			style={{ transform: `translateX(-${100 - progress}%)`}}
			// 	/>
			// </Progress.Root>

			// <div className={'h-3 rounded-xl bg-zinc-700 w-full mt-4'}>
			// 	<div className={'h-3 rounded-xl bg-violet-600 w-3/4'}></div>
			// </div>
	)
}