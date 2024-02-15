import React, { useState } from 'react';

import Input from './input';
import FilteredList from './filteredList';

const Wrapper = ({ items }) => {
    const [filter, setFilter] = useState('');

    return (
        <div>
            <h2>My Filtered List</h2>
            <Input
                filter={filter}
                setFilter={setFilter}
            />
            <FilteredList
                filter={filter}
                items={items.filter(item => item.indexOf(filter) > -1)}
            />
        </div>
    );
}

export default Wrapper;