import { useState } from 'react';

import './App.css';
import AppInfo from '../AppInfo/AppInfo';
import SearchPanel from '../SearchPanel/SearchPanel';
import AppFilter from '../AppFilter/AppFilter';
import EmployeesList from '../EmployeesList/EmployeesList';
import EmployeesAddForm from '../EmployeesAddForm/EmployeesAddForm';

const App = () => {
	const data = [
		{
			name: 'John M.',
			salary: 500,
			increase: false,
			rise: false,
			id: 1,
		},
		{
			name: 'Burn S.',
			salary: 800,
			increase: false,
			rise: false,
			id: 2,
		},
		{
			name: 'Kedy A.',
			salary: 5000,
			increase: false,
			rise: false,
			id: 3,
		},
	];

	const [newData, setData] = useState(data);
	const maxId = newData.length;

	const deleteItem = id => {
		const updatedData = newData.filter(elem => elem.id !== id);

		setData(updatedData);
	};

	const addItem = newItem => {
		const namesArr = newData.map(data => {
			return data.name;
		});

		if (!namesArr.includes(newItem.name)) {
			newItem.id = maxId + 1;
			const updatedData = [...newData, newItem];
			setData(updatedData);
		}
	};

	const toggle = (id, toggleItem) => {
		console.log(toggleItem);
		const toggledItem = newData.map(item => {
			if (item.id === id) {
				item[toggleItem] = !item[toggleItem];
			}
			return item;
		});

		setData(toggledItem);
	};

	const increasedEmployees = newData.filter(employ => {
		if (employ.increase) return employ;
	});

	return (
		<div className='app'>
			<AppInfo
				totalEmployees={maxId}
				increasedEmployees={increasedEmployees.length}
			/>

			<div className='search-panel'>
				<SearchPanel />
				<AppFilter />
			</div>

			<EmployeesList data={newData} onDelete={deleteItem} onToggle={toggle} />
			<EmployeesAddForm onAdd={addItem} />
		</div>
	);
};

export default App;
