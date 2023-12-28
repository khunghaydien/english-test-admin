import { Box } from "@mui/material"
import clsx from "clsx"
type IInputErrorMessage = {
    content: string,
    className?: string
}
const ROOT = 'input-error-message'
const InputErrorMessage = ({ content, className }: IInputErrorMessage) => {
    return (
        <Box className={clsx(className, ROOT)}>
            {content}
            <Box className={`${ROOT}__scroll`} component="span"></Box>
        </Box>
    )
}
export default InputErrorMessage