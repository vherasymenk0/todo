import { makeSxStyles } from '../../helpers'

interface Props {
  isCompleted: boolean
}
export const useStyles = makeSxStyles(({ palette }, { isCompleted }: Props) => ({
  root: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    borderRadius: 2,
    mb: 2,
    border: `1px solid rgba(0, 0, 0, 0.23)`,
  },
  title: {
    textDecoration: isCompleted ? 'line-through' : 'none',
    cursor: 'pointer',
    wordBreak: 'break-word',
  },
  date: {
    display: 'inline-flex',
    width: 'max-content',
    alignItems: 'center',
    gap: 0.5,
  },
}))
