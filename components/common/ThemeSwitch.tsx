import clsx from "clsx"
import DarkModeIcon from '@mui/icons-material/DarkMode';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
const ThemeSwitch = () => {
    const { setTheme, resolvedTheme } = useTheme()
    const [isMounted, setIsMounted] = useState(false)
    useEffect(() => { setIsMounted(true) }, [])
    return (
        <div className={clsx('theme-switch cursor-pointer')}>
            {resolvedTheme === 'dark' && isMounted && <DarkModeIcon onClick={() => setTheme('light')} className="text-white" />}
            {resolvedTheme === 'light' && isMounted && <WbSunnyIcon onClick={() => setTheme('dark')} className="text-blue-900" />}
        </div>
    )
}
export default ThemeSwitch