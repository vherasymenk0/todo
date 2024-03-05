import { ChangeEventHandler } from 'react'
import useActionsTs from '../hooks/use-actions.ts'
import { InputAdornment, TextField } from '@mui/material'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'

export const SearchBar = () => {
  const { setSearchTerm } = useActionsTs()

  const handleSearchChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchTerm(event.target.value || '')
  }

  return (
    <TextField
      id="outlined-start-adornment"
      color="primary"
      placeholder="Search tasks..."
      size="small"
      sx={{ width: '100%' }}
      onChange={handleSearchChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchOutlinedIcon />
          </InputAdornment>
        ),
        sx: { borderRadius: 2, bgcolor: '#fff' },
      }}
    />
  )
}
