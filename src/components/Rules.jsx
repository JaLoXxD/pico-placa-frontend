export const Rules = () => {
	return (
		<div className="rulesCont">
			<p>The pico & placa schedules are from 06:00 to 09:30 and from 16:00 to 21:00.</p>
			<table className="table table-striped table-responsive">
				<thead>
					<tr>
						<th>Day</th>
						<th>Car Plates that cannot circulate</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Monday</td>
						<td>Car Plates ending in 1 and 2</td>
					</tr>
					<tr>
						<td>Tuesday</td>
						<td>Car Plates ending in 3 and 4</td>
					</tr>
					<tr>
						<td>Wednesday</td>
						<td>Car Plates ending in 5 and 6</td>
					</tr>
					<tr>
						<td>Thursday</td>
						<td>Car Plates ending in 7 and 8</td>
					</tr>
					<tr>
						<td>Friday</td>
						<td>Car Plates ending in 9 and 0</td>
					</tr>
					<tr>
						<td>Saturay</td>
						<td>Free circulation</td>
					</tr>
					<tr>
						<td>Sunday</td>
						<td>Free circulation</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};
