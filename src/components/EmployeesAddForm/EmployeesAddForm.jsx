import { useState } from 'react';

import './EmployeesAddForm.css';

const EmployeesAddForm = ({ onAdd }) => {
	const [newItem, setValue] = useState({
		name: '',
		salary: '',
		increase: false,
		rise: false,
	});

	const onNameChange = e => {
		setValue(prevState => {
			return { ...prevState, name: e.target.value };
		});
	};

	const onSalaryChange = e => {
		setValue(prevState => {
			return { ...prevState, salary: +e.target.value };
		});
	};

	return (
		<div className='app-add-form'>
			<h3>Add a new employee</h3>
			<form
				className='add-form d-flex'
				onSubmit={e => {
					e.preventDefault();
					if (newItem.name && newItem.salary) {
						onAdd(newItem);
					}
				}}
			>
				<input
					type='text'
					className='form-control new-post-label'
					placeholder='What is his name?'
					name='name'
					onChange={onNameChange}
				/>
				<input
					type='number'
					className='form-control new-post-label'
					placeholder='Salary in $?'
					name='salary'
					onChange={onSalaryChange}
				/>

				<button type='submit' className='btn btn-outline-light'>
					Add
				</button>
			</form>
		</div>
	);
};

export default EmployeesAddForm;
