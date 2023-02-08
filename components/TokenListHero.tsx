import React from 'react';
import Link from 'next/link';
import dayjs, {extend} from 'dayjs';
import dayjsDuration from 'dayjs/plugin/duration.js';
import relativeTime from 'dayjs/plugin/relativeTime.js';
import weekday from 'dayjs/plugin/weekday.js';
import {useTimer} from 'hooks/useTimer';
import relativeTimeFormat from 'utils/time';
import {Button} from '@yearn-finance/web-lib/components/Button';
import IconGithub from '@yearn-finance/web-lib/icons/IconSocialGithub';

import type {TTokenListSummary} from 'pages/tokenlists';
import type {ReactElement} from 'react';

extend(relativeTime);
extend(dayjsDuration);
extend(weekday);

function TokenListHero({summary}: {summary: TTokenListSummary | undefined}): ReactElement {
	const nextSundayNoon = dayjs().weekday(7).hour(12).minute(0).second(0).millisecond(0);
	const time = useTimer({endTime: nextSundayNoon.valueOf() / 1000});

	return (
		<div className={'bg-neutral-0 relative isolate overflow-hidden'}>
			<svg
				className={'absolute inset-0 -z-10 h-full w-full stroke-neutral-900/10 [mask-image:radial-gradient(100%_100%_at_top_right,black,transparent)]'}
				aria-hidden={'true'}>
				<defs>
					<pattern
						id={'983e3e4c-de6d-4c3f-8d64-b9761d1534cc'}
						width={200}
						height={200}
						x={'50%'}
						y={-1}
						patternUnits={'userSpaceOnUse'}>
						<path d={'M.5 200V.5H200'} fill={'none'} />
					</pattern>
				</defs>
				<svg
					x={'50%'}
					y={-1}
					className={'overflow-visible fill-neutral-200/20'}>
					<path
						d={'M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z'}
						strokeWidth={0} />
				</svg>
				<rect
					width={'100%'}
					height={'100%'}
					strokeWidth={0}
					fill={'url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)'} />
			</svg>
			<div className={'mx-auto grid max-w-4xl grid-cols-1 px-6 pt-10 pb-0 md:grid-cols-2 md:pb-10 md:pt-20'}>
				<div className={'w-full'}>
					<div>
						<span className={'rounded-default border border-neutral-200 bg-neutral-100 px-3 py-1 text-xs leading-6 text-neutral-500 md:text-sm'}>
							{'Last update: '}
							<span className={'inline-flex items-center pl-2 font-bold text-neutral-900'}>
								<span suppressHydrationWarning>{relativeTimeFormat(summary?.timestamp || 0)}</span>
							</span>
						</span>
					</div>
					<h1 className={'mt-4 text-3xl font-bold tracking-tight text-neutral-900 md:mt-6 md:text-4xl'}>
						{'Tokenlistooor'}
					</h1>
					<p className={'mt-4 text-base leading-normal text-neutral-500 md:mt-6 md:text-lg md:leading-8'}>
						{'Up to date token lists that fulfill your needs! Tokenlistooor is a fork of Uniswap Tokenlists, with focus on adding more automation and extra features.'}
					</p>
					<div className={'mt-6 flex items-center gap-x-6 md:mt-10'}>
						<Link href={'https://github.com/migratooor/tokenlists/'} target={'_blank'}>
							<Button>
								<IconGithub className={'mr-4 h-6 w-6'} />
								{'Github'}
							</Button>
						</Link>
						<Button
							onClick={(): void => document.getElementById('tokenlistooor')?.scrollIntoView({behavior: 'smooth', block: 'start'})}>
							{'Browse lists'}
							<p className={'pt-1 pl-2'}>&#10549;</p>
						</Button>
					</div>
				</div>
				<div className={'hidden w-full items-center justify-center pl-0 md:flex md:pl-20'}>
					<div className={'flex items-center justify-center'}>
						<div className={'box-0 relative flex flex-col p-6'}>
							<div>
								<b suppressHydrationWarning className={'font-number text-xl'}>{time}</b>
								<p className={'pt-2 text-xs text-neutral-400'}>{'The next automatic update is just around the corner! Our lists are updated automatically with each new commit or every Sunday at midday, without any manual input.'}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default TokenListHero;