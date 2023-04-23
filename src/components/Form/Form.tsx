import { FormEvent, useRef, useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
	name: z.string().min(3, { message: 'Name must be at least 3 characters' }),
	age: z.number({ invalid_type_error: 'Age field is required.' }).min(18, { message: 'Age must be at least 18' }),
})

type FormData = z.infer<typeof schema>

const Form = () => {
	// React from hook
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<FormData>({ resolver: zodResolver(schema) })
	const onSubmit = (data: FieldValues) => console.log(data)

	// Ref Hook
	//const nameRef = useRef<HTMLInputElement>(null)
	//const ageRef = useRef<HTMLInputElement>(null)
	//let person = {
	//	name: '',
	//	age: 0,
	//}

	// State hook
	//const [person, setPerson] = useState({
	//	name: '',
	//	age: '',
	//})

	//const handleSubmit = (event: FormEvent) => {
	// this will prevent the page to reload after submit the form
	//event.preventDefault()

	// Ref hook implementation
	//person.name = nameRef.current?.value as string
	//person.age = parseInt(ageRef.current?.value as string)
	//console.log(person)
	//}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className='mb-3'>
				<label htmlFor='name' className='form-label'>
					Name
				</label>
				<input
					{...register('name')}
					// state hook
					//value={person.name}
					//onChange={(event) => setPerson({ ...person, name: event.target.value })}

					//ref={nameRef} // ref hook

					id='name'
					type='text'
					className='form-control'
				/>
			{errors.name && <p className='text-danger'>{errors.name?.message}</p>}
			</div>
			<div className='mb-3'>
				<label htmlFor='age' className='form-label'>
					Age
				</label>
				<input
					{...register('age', { valueAsNumber: true})}
					// state hook
					//value={person.age}
					//onChange={(event) => setPerson({ ...person, age: event.target.value })}

					//ref={ageRef} // ref hook
					id='age'
					type='number'
					className='form-control'
				/>
        {errors.age && <p className='text-danger'>{errors.age?.message}</p>}
			</div>
			<button disabled={!isValid} type='submit' className='btn btn-primary'>
				Submit
			</button>
		</form>
	)
}

export default Form
