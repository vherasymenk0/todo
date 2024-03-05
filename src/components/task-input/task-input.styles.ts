import { makeSxStyles } from '../../helpers'

export const useStyles = makeSxStyles(({ palette }) => ({
  root: {
    position: 'absolute',
    bottom: 50,
    right: 50,
    width: 70,
    height: 70,
    bgcolor: palette.primary.main,
    color: '#fff',
    '&:hover': { bgcolor: palette.success.main },
  },
  paper: {
    maxWidth: 500,
    width: '100%',
    p: 3,
  },
}))
