import React, {useContext} from 'react';
import SettingType from './setting-types';
import { ThemeContext } from './theme';
import ThemeActionType from './theme-actions';

const useTheme = (): {theme: SettingType, dispatch: ThemeActionType} => {
    const {state: theme, dispatch} = useContext(ThemeContext);
    return {theme, dispatch: dispatch!};
}
export default useTheme;