import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
	const [inputTitle, setInputTitle] = useState("");
	const [inputAmount, setInputAmount] = useState("");
	const [inputDate, setInputDate] = useState("");

	// const [userInput, setUserInput] = useState({
	// 	title: "",
	// 	amount: "",
	// 	date: "",
	// });

	const titleChangeHandler = (event) => {
		// setUserInput((prevState) => {
		// 	return {
		// 		...userInput,
		// 		title: event.target.value,
		// 	};
		// });

		setInputTitle(event.target.value);
	};

	const amountChangeHandler = (event) => {
		// setUserInput((prevState) => {
		// 	return {
		// 		...userInput,
		// 		amount: event.target.value,
		// 	};
		// });
		setInputAmount(event.target.value);
	};

	const dateChangeHandler = (event) => {
		// setUserInput((prevState) => {
		// 	return {
		// 		...userInput,
		// 		date: event.target.value,
		// 	};
		// });
		setInputDate(event.target.value);
	};

	const submitHandler = (event) => {
		event.preventDefault();
		const expenseData = {
			title: inputTitle,
			amount: +inputAmount,
			date: new Date(inputDate),
		};
		//console.log(expenseData);
		props.onSaveExpenseData(expenseData);
		setInputTitle("");
		setInputAmount("");
		setInputDate("");
	};

	const [isAdding, setIsAdding] = useState("false");
	const cancelHandler = () => {
		setIsAdding(false);
	};

	const addhandler = () => {
		setIsAdding(true);
	};
	const notShownFrom = (
		<div>
			<div className="new-expense__actions">
				<button type="button" onClick={addhandler}>
					Add New Expense
				</button>
			</div>
		</div>
	);

	const shownForm = (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input type="text" value={inputTitle} onChange={titleChangeHandler} />
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input
						type="number"
						min="0.01"
						step="0.01"
						value={inputAmount}
						onChange={amountChangeHandler}
					/>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input
						type="date"
						min="2019-01-01"
						max="2022-12-31"
						value={inputDate}
						onChange={dateChangeHandler}
					/>
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="button" onClick={cancelHandler}>
					Cancel
				</button>
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);

	if (isAdding) return shownForm;

	return notShownFrom;
};

export default ExpenseForm;
