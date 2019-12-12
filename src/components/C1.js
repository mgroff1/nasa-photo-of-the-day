import React from "react";

const Arrow = ({ arrow, setDate, date, currentDate }) => {
	return (
		<span
			className="arrow"
			role="img"
			aria-label="point-right"
			onClick={() => setDate(date - 1)}
		>
			{date === currentDate ? null : arrow}

		</span>
	);
};

export default Arrow;
