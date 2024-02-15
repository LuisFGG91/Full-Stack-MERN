import React from 'react';

const FilteredList = ({ filter, items }) => items
    .map((item, i) => {
        const start = item.indexOf(filter);
        const end = start + filter.length;

        return (
            <p key={i}>
                {item.slice(0, start)}
                <em>{item.slice(start, end)}</em>
                {item.slice(end)}
            </p>
        );
    }
    )

export default FilteredList;