import React from "react";

const Arrow = ({ leftArrow, rightArrow, setDate, date, currentDate }) => {
	return (
    <span
      className="left-arrow"
      role="img"

      onClick={() => setDate(date - 1)}
    >
      {date === currentDate ? null : leftArrow}

    </span>,
		<span
			className="right-arrow"
			role="img"

			onClick={() => setDate(date + 1)}
		>
			{date === currentDate ? null : rightArrow}

		</span>
	);
};

export default Arrow;
