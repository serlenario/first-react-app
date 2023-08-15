import './AppInfo.css';

const AppInfo = ({ totalEmployees, increasedEmployees }) => {
	return (
		<div className='app-info'>
			<h1>Accounting for employees in company N</h1>
			<h2>Total number of employees: {totalEmployees}</h2>
			<h2>The increase is received by: {increasedEmployees}</h2>
		</div>
	);
};

export default AppInfo;
