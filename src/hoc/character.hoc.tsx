import dynamic from 'next/dynamic';
import { Characters, CheckBox } from 'components';

import { useGetCharacters } from 'hooks';
import { useForm } from 'react-hook-form';
import { Fragment, useEffect } from 'react';
interface Props {}

export const CharactersHOC: React.FC<Props> = () => {
	// const { data, loading, error } = useGetCharacters();
	const { control, handleSubmit, register, watch, setValue } = useForm();

	const all = watch('all');
	const fruits = watch('fruits');

	useEffect(() => {
		console.log('all', all);
		if (all === '*') {
			setValue('fruits', ['0', '1', '2', '3', '4', '5']);
		} else {
			setValue('fruits', []);
		}
	}, [all]);

	// useEffect(() => {
	// 	console.log('fruits', fruits);
	// 	if (fruits.length === 6) {
	// 		// setValue('all', '*');
	// 	} else {
	// 		setValue('all', false);
	// 	}
	// }, [fruits]);

	const onSubmit = (data: any) => {
		console.log(data);
		console.log(data.fruits.every((item: any) => Boolean(item) === true));
	};
	return (
		<div className='container'>
			<form onSubmit={handleSubmit(onSubmit)}>
				{/* {Array.from({ length: 6 }).map((_, index) => (
					<CheckBox
						key={index}
						name='fruits'
						control={control}
						id={`${index}`}
					/>
				))} */}

				{Array.from({ length: 6 }).map((_, index) => (
					<Fragment key={index}>
						<input
							{...register('fruits')}
							type='checkbox'
							id={`${index}`}
							name='fruits'
							value={`${index}`}
						/>
						<label htmlFor={`${index}`}>{index}</label>
					</Fragment>
				))}

				<div>
					<input
						type='checkbox'
						{...register('all')}
						name={'all'}
						id={'*'}
						checked={
							(fruits?.length === 6 &&
								fruits.every(
									(item: any) => Boolean(item) === true
								)) ||
							false
						}
					/>
					<label htmlFor='*'>all</label>
				</div>

				{/* <input
					{...register('kareem')}
					type='checkbox'
					id='1'
					name='kareem'
					value={'1'}
				/>
				<input
					{...register('kareem')}
					type='checkbox'
					id='2'
					name='kareem'
					value={'2'}
				/> */}
				<button type='submit'>submit</button>
			</form>

			{/* <Characters characters={data?.characters?.results} /> */}
		</div>
	);
};
