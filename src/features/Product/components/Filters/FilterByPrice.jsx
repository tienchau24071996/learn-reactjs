import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, makeStyles, TextField, Typography } from '@material-ui/core';

const useStyle = makeStyles(theme => ({
    root: {
        borderTop: `1px solid ${theme.palette.grey[200]}`,
        padding: theme.spacing(2)
    },

    range: {
        display: 'flex',
        flexFlow: 'row nowrap',
        alignItems: 'center',
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),

        '& > span':{
            marginRight: theme.spacing(1),
            marginLeft: theme.spacing(1)
        }
    }
}))

FilterByPrice.propTypes = {
    onChange: PropTypes.func,
};

function FilterByPrice({onChange}) {
    const classes = useStyle()

    const [values,setValues] = useState({
        salePrice_gte: 0,
        salePrice_lte: 0
    })

    const handleSubmit = () => {
        if(onChange) onChange(values)
        setValues({
            salePrice_gte: 0,
            salePrice_lte: 0
        })
    }

    const handleChange = (e) => {
        const {name,value}= e.target
        setValues(prevValues => ({
            ...prevValues,
            [name] : value,
        }))
    }

    return (
        <Box className={classes.root}>
            <Typography variant="subtitle2">GIÁ</Typography>
            <Box className={classes.range}>
                <TextField name="salePrice_gte" value={values.salePrice_gte} onChange={handleChange} />
                <span>-</span>
                <TextField name="salePrice_lte" value={values.salePrice_lte} onChange={handleChange} />
            </Box>
            <Button variant="outlined" color="primary" size="small" onClick={handleSubmit}>Áp dụng</Button>
        </Box>
    );
}

export default FilterByPrice;