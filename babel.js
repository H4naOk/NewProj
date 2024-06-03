const App = () => {
	return (
	<div id="container">
		<div id="body">
			<FullCalendar/>
		</div>
		<ul id="nav">
			{
				["todo","calendar","memo"].map(li=>
					<li>{li}</li>
				)
			}
		</ul>
	</div>
	)
}
const FullCalendar = () =>{
	var start_day = 10;
	var day = new Date();
	const month = () => {
		start_day++;
	}
	return (
		<div className="fullCalendar">
			<div className="header">
				<div className="lastMonth" onClick={month}>backward</div>
				<div className="date">{day.toDateString()}</div>
				<div className="nextMonth">forward</div>
			</div>
			<table>
				{(() => {
					return [...Array(5)].map((tr, index_week)=> {
						return(
							<tr>
							{
								[...Array(7)].map((td, index_day)=> {
									return <td>{start_day + index_week * 7 + index_day}</td>
								})
							}
							</tr>
						)
					})
				})()}
			</table>
		</div>
	)
}
const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(<App/>)