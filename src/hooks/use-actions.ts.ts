import { useDispatch } from 'react-redux'
import { useMemo } from 'react'
import { bindActionCreators } from '@reduxjs/toolkit'
import { rootAction } from '../store/root-action'

const useActionsTs = () => {
  const dispatch = useDispatch()
  return useMemo(() => bindActionCreators(rootAction, dispatch), [dispatch])
}

export default useActionsTs
