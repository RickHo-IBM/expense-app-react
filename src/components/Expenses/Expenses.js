import React, { useState } from "react";

import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState("2021");

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	const isYear = (item) => {
		return item.date.getFullYear() === parseInt(filteredYear, 10);
	};

	const filteredExpenses = props.items.filter(isYear);
	return (
		<li>
			<Card className="expenses">
				<ExpensesFilter
					defaultYear={filteredYear}
					onChangeFilter={filterChangeHandler}
				/>
				<ExpensesChart expenses={filteredExpenses} />
				<ExpensesList items={filteredExpenses} />
			</Card>
		</li>
	);
};

export default Expenses;
