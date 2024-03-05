import React, { useState } from 'react'
import useActions from '../../hooks/useActions'
import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  IconButton,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { useStyles } from './TaskInput.styles'

const MAX_LENGTH = 40

export const TaskInput = () => {
  const [input, setInput] = useState('')
  const [isOpenModal, setIsOpenModal] = React.useState(false)
  const [showAlert, setShowAlert] = useState(false)

  const styles = useStyles()
  const { addTask } = useActions()
  const isDisabled = input.length < 1

  const handleCloseAlert = () => setShowAlert(false)

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = () => {
    if (input.trim().length > 0 && input.length <= MAX_LENGTH) {
      addTask({ name: input })
      setInput('')
      setIsOpenModal(false)
    } else {
      setShowAlert(true)
    }
  }

  return (
    <>
      <IconButton onClick={() => setIsOpenModal(true)} sx={styles.root}>
        <AddIcon fontSize="large" />
      </IconButton>
      <Dialog
        open={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        PaperProps={{ sx: styles.paper }}
      >
        <Typography variant="h6" color="secondary.main">
          Describe you task
        </Typography>
        <Stack mt={2}>
          <TextField
            id="outlined-multiline-flexible"
            onChange={handleChange}
            multiline
            fullWidth
            maxRows={4}
          />
        </Stack>
        <DialogActions sx={{ mt: 2 }}>
          <Button onClick={handleSubmit} variant="contained" disabled={isDisabled}>
            Add Task
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar open={showAlert} autoHideDuration={6000} onClose={handleCloseAlert}>
        <Alert onClose={handleCloseAlert} severity="error" variant="filled" sx={{ width: '100%' }}>
          {`Description should be less than ${MAX_LENGTH} characters`}
        </Alert>
      </Snackbar>
    </>
  )
}
