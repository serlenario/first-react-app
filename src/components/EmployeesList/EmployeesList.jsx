import EmployeesListItem from '../EmloyeesListItem/EmloyeesListItem';

import './EmployeesList.css';

const EmployeesList = ({ data, onDelete, onToggle }) => {
	const elements = data.map(item => {
		const { id, ...itemProps } = item;

		return (
			<EmployeesListItem
				key={id}
				{...itemProps}
				onDelete={() => onDelete(id)}
				onToggle={e =>
					onToggle(id, e.currentTarget.getAttribute('data-toggle'))
				}
			/>
		);
	});

	return <ul className='app-list list-group'>{elements}</ul>;
};

export default EmployeesList;
