import React from 'react'
import {Chip, FormControl, Input, InputLabel, makeStyles, MenuItem, Select} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: '100%',
    '& label.Mui-focused': {
      color: '#fafafa',
    },
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  label: {
   color: '#fafafa',
   paddingLeft: 10,
   marginBottom: 10
 }
}));
const SelectCustom = ({providers, filters, setFilters, selectName, label}) => {
 
  const classes = useStyles()
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-chip-label" className={classes.label} >{label}</InputLabel>
        <Select
          variant='filled'
          labelId="demo-mutiple-chip-label"
          id="demo-mutiple-chip"
          multiple
          value={selectName}
          onChange={e=>{ 
            setFilters({...filters, medios: e.target.value}) 
          }}
          input={<Input id="select-multiple-chip" />}
          renderValue={(selected) => (
            <div className={classes.chips}>
              {selected && selected.map((value) => (
                <Chip key={value} label={value} className={classes.chip}  />
              ))}
            </div>
          )}
          MenuProps={MenuProps}
        >
          {providers && providers.map(p=>(
            <MenuItem key={p._id} value={p._id} label={p.name}>{p.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}

export default SelectCustom
