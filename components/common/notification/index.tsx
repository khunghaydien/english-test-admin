import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import clsx from 'clsx';
const NotificationComponent = () => {
    return (
        <div className={clsx('notification cursor-pointer relative')}>
            <NotificationsNoneIcon />
            <div className='flex items-center justify-center bg-red-700 text-white rounded-full absolute top-0 right-0 w-[14px] h-[14px] text-[8px]'>1</div>
        </div>
    )
}
export default NotificationComponent