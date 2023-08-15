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

	const [newData, setData] = useState({
		data,
		searchString: '',
		filter: 'all',
	});
	const { data: employees, searchString, filter } = newData;

	const maxId = employees.length;

	const deleteItem = id => {
		const updatedData = employees.filter(elem => elem.id !== id);

		setData(prev => {
			return { ...prev, data: updatedData };
		});
	};

	const addItem = newItem => {
		const namesArr = employees.map(data => {
			return data.name;
		});

		if (!namesArr.includes(newItem.name)) {
			newItem.id = maxId + 1;
			const updatedData = [...employees, newItem];
			setData(prev => {
				return { ...prev, data: updatedData };
			});
		}
	};

	const toggle = (id, toggleItem) => {
		const toggledItem = employees.map(item => {
			if (item.id === id) {
				item[toggleItem] = !item[toggleItem];
			}
			return item;
		});

		setData(prev => {
			return { ...prev, data: toggledItem };
		});
	};

	const increasedEmployees = employees.filter(employ => {
		if (employ.increase) return employ;
	});

	const searchEmployees = (employees, searchString) => {
		if (searchString.length === 0) return employees;

		return employees.filter(employ => {
			return employ.name.indexOf(searchString) > -1;
		});
	};

	const onUpdateSearch = searchString => {
		setData(prev => {
			return { ...prev, searchString };
		});
	};

	const filterPost = (employees, filter) => {
		if (filter === 'rise') {
			return employees.filter(employ => {
				return employ.rise;
			});
		}

		if (filter === 'moreThen1000') {
			return employees.filter(employ => {
				return employ.salary > 1000;
			});
		}

		return employees;
	};

	const onFilterSelect = filter => {
		setData(prev => {
			return { ...prev, filter };
		});
	};

	const onChangeSalary = (salary, id) => {
		const updateEmployees = employees.map(item => {
			if (item.id === id) {
				console.log(parseInt(salary));
				item.salary = parseInt(salary);
			}
			return item;
		});
		setData(prev => {
			return { ...prev, updateEmployees };
		});
	};

	const visibleData = filterPost(
		searchEmployees(employees, searchString),
		filter
	);

	return (
		<div className='app'>
			<AppInfo
				totalEmployees={maxId}
				increasedEmployees={increasedEmployees.length}
			/>

			<div className='search-panel'>
				<SearchPanel onUpdateSearch={onUpdateSearch} />
				<AppFilter filter={filter} onFilterSelect={onFilterSelect} />
			</div>

			<EmployeesList
				data={visibleData}
				onDelete={deleteItem}
				onToggle={toggle}
				onChangeSalary={onChangeSalary}
			/>
			<EmployeesAddForm onAdd={addItem} />
		</div>
	);
};

export default App;
