import { React } from 'react';
import './App.scss';

const labels = ['ItemName', 'Rate', 'Discount', 'Tax'];
const fruits = [{
	ItemName: 'Apple',
	Rate: 150,
	Discount: 0.25,
	Tax: 0.1,
},
{
	ItemName: 'Orange',
	Rate: 80,
	Discount: 0.5,
	Tax: 0.2,
},
{
	ItemName: 'papaya',
	Rate: 60,
	Discount: 0.1,
	Tax: 0.3,

}];
const App = () =>
	<div className="App">

		<table>
			<tr>
				{labels.map((label, i) => <th key={ i }>{label}</th>)}
			</tr>
			{fruits.map((fruit, i) =>
				<tr key={ i }>
					<td>{fruit.ItemName}</td>
					<td>{fruit.Rate}</td>
					<td>{fruit.Discount}</td>
					<td>{fruit.Tax}</td>
				</tr>)}
		</table>
	</div>;

export default App;
