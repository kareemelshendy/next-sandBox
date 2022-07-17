import React from 'react';
import { Control, Controller, FieldValues, useForm } from 'react-hook-form';

interface Props {
	name: string;
	id?: string;
	control: Control<FieldValues, object>;
}

export const CheckBox: React.FC<Props> = ({ name, id, control }) => {
	console.log('aaaa', id);
	return (
		<Controller
			name={name}
			defaultValue={id}
			control={control}
			render={({ field: { value, ref, ...rest } }) => (
				<>
					{console.log('value', value)}
					<input
						id={id}
						checked={value}
						type='checkbox'
						ref={ref}
						{...rest}
					/>
					<label htmlFor={id}>{id}</label>
				</>
			)}
		/>
	);
};
