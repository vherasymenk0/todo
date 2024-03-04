import { SxProps, Theme, useTheme } from '@mui/material'

type StyleFunction<TPropsType, TStylesType extends Record<string, SxProps<Theme>>> = [
  TPropsType,
] extends [never]
  ? (theme: Theme, props?: TPropsType) => TStylesType
  : (theme: Theme, props: TPropsType) => TStylesType

export const makeSxStyles = <
  TPropsType = never,
  TStylesType extends Record<string, SxProps<Theme>> = Record<string, SxProps<Theme>>,
>(
  styles: StyleFunction<TPropsType, TStylesType>,
) => {
  return (props?: TPropsType): TStylesType => {
    const theme = useTheme<Theme>()
    return styles(theme, props as TPropsType)
  }
}
