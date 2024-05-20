import CloseIcon from "@mui/icons-material/Close";
export type IHeaderModal = {
  title: string;
  onClose: () => void;
  bgHeader?: "none" | "default" | "error" | "success";
};
const HeaderModal = ({
  title,
  onClose,
  bgHeader = "default",
}: IHeaderModal) => {
  return (
    <div
      className={`flex items-center justify-between p-4 md:p-5 rounded-t font-bold bg-${bgHeader}-800`}
    >
      {title?.toUpperCase()}
      <CloseIcon onClick={onClose} className="cursor-pointer" />
    </div>
  );
};
export default HeaderModal;
