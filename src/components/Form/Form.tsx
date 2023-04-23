import { FormEvent, useRef, useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form'

interface FormData {
	name: string
	age: number
}

const Form = () => {
	// React from hook
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>()
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
					{...register('name', { required: true, minLength: 3 })}
					// state hook
					//value={person.name}
					//onChange={(event) => setPerson({ ...person, name: event.target.value })}

					//ref={nameRef} // ref hook

					id='name'
					type='text'
					className='form-control'
				/>
			</div>
			{errors.name?.type === 'required' && <p className='text-danger'>Name field is required.</p>}
			{errors.name?.type === 'minLength' && <p className='text-danger'>Name must be at least 3 characters long.</p>}
			<div className='mb-3'>
				<label htmlFor='age' className='form-label'>
					Age
				</label>
				<input
					{...register('age')}
					// state hook
					//value={person.age}
					//onChange={(event) => setPerson({ ...person, age: event.target.value })}

					//ref={ageRef} // ref hook
					id='age'
					type='number'
					className='form-control'
				/>
			</div>
			<button type='submit' className='btn btn-primary'>
				Submit
			</button>
		</form>
	)
}

export default Form
