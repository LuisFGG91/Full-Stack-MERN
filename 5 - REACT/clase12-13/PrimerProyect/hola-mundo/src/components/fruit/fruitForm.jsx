import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, FormControlLabel, Checkbox, Button } from '@mui/material';

const fruits = [
    'banana',
    'pineapple',
    'peach',
    'apple',
    'berry'
];

export default function FruitForm() {
    const [selectedFruit, setSelectedFruit] = useState(fruits[0]);
    const [isTasty, setIsTasty] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        console.log('The ' + selectedFruit + ' is' + (isTasty ? '' : ' not') + ' tasty!');
    }

    return (
        <form onSubmit={handleSubmit}>
            <FormControl fullWidth>
                <InputLabel id="fruit-select-label">Fruit</InputLabel>
                <Select
                    labelId="fruit-select-label"
                    value={selectedFruit}
                    label="Fruit"
                    onChange={e => setSelectedFruit(e.target.value)}
                >
                    {fruits.map((fruit, idx) => (
                        <MenuItem key={idx} value={fruit}>{fruit}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControlLabel
                control={
                    <Checkbox
                        checked={isTasty}
                        onChange={e => setIsTasty(e.target.checked)}
                        name="isTasty"
                    />
                }
                label="Is it tasty?"
            />
            <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px' }}>
                Take a bite!
            </Button>
        </form>
    );
}
