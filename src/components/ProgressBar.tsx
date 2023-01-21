import * as Progress from '@radix-ui/react-progress';
import {useEffect, useState} from "react";

type ProgressBarProps = {
	progress: number
}

export function ProgressBar(props: ProgressBarProps) {
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const timer = setTimeout(() => setProgress(props.progress), 500);
		return () => clearTimeout(timer);
	}, []);

	return (
			<Progress.Root className={'h-3 rounded-xl bg-zinc-700 w-full mt-4 overflow-hidden'} value={props.progress}>
				<Progress.Indicator
						className={'h-3 rounded-xl bg-violet-600 transition ease-in-out duration-300'}
						style={{ transform: `translateX(-${100 - progress}%)`}}
				/>
			</Progress.Root>

			// <div className={'h-3 rounded-xl bg-zinc-700 w-full mt-4'}>
			// 	<div className={'h-3 rounded-xl bg-violet-600 w-3/4'}></div>
			// </div>
	)
}