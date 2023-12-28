import './layout.scss'
type IRegisterLayout = {
    children: React.ReactNode
}
const RegisterLayout = ({ children }: IRegisterLayout) => {
    const ROOT = "layout"
    return (
        <div className={`${ROOT}`}>
            {children}
        </div>
    )
}
export default RegisterLayout