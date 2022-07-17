import dynamic from 'next/dynamic';
import { Characters, CheckBox } from 'components';

import { useGetCharacters } from 'hooks';
import { useForm } from 'react-hook-form';
interface Props {}

export const CharactersHOC: React.FC<Props> = () => {
	// const { data, loading, error } = useGetCharacters();
	const { control, handleSubmit, register } = useForm();

	const onSubmit = (data: any) => {
		console.log(data);
	};
	return (
		<div className='container'>
			<form onSubmit={handleSubmit(onSubmit)}>
				{Array.from({ length: 6 }).map((_, index) => (
					<CheckBox
						key={index}
						name='fruits'
						control={control}
						id={`${index}`}
					/>
				))}

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
