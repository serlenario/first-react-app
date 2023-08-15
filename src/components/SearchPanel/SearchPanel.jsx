import { useState } from 'react';
import './SearchPanel.css';

const SearchPanel = ({ onUpdateSearch }) => {
	const [searchString, setSearch] = useState('');

	return (
		<input
			type='text'
			className='form-control search-input'
			placeholder='Find an employee'
			onChange={e => {
				setSearch(e.target.value);
				onUpdateSearch(e.target.value);
			}}
			value={searchString}
		/>
	);
};

export default SearchPanel;
