import clsx from 'clsx'
import './layout.scss'
type IRegisterLayout = {
    children: React.ReactNode
}
const ROOT = 'register-layout'
const RegisterLayout = ({ children }: IRegisterLayout) => {
    return (
        <div className={clsx("h-screen w-screen flex items-center justify-end", ROOT)}>
            <div className={clsx(`${ROOT}__container`)}>
                <div className={clsx(`${ROOT}__form`)}>
                    {children}
                </div>
            </div>
        </div>
    )
}
export default RegisterLayout