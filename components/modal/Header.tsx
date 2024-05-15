import CloseIcon from "@mui/icons-material/Close";
export type IHeaderModal = {
  title: string;
  onClose: () => void;
};
const HeaderModal = ({ title, onClose }: IHeaderModal) => {
  return (
    <div className="flex items-center justify-between p-4 md:p-5 rounded-t font-bold">
      {title?.toUpperCase()}
      <CloseIcon onClick={onClose} className="cursor-pointer" />
    </div>
  );
};
export default HeaderModal;
