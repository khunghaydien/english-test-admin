import clsx from "clsx";
import CommonButton from "../button";
import CommonLabel from "../common/CommonLabel";

type ITap = {
  id: string;
  name: string;
};
type ICommonTap = {
  required: boolean;
  label: string;
  taps: ITap[];
  onClick: (id: string) => void;
};
const CommonTap = ({ label, taps, required, onClick }: ICommonTap) => {
  return (
    <div className="common-tap">
      <CommonLabel label={label} required={required} />
      {taps.map(({ name, id }) => (
        <CommonButton
          key={id}
          onClick={() => onClick(id)}
          className={clsx("")}
          label="name"
        />
      ))}
    </div>
  );
};
export default CommonTap;
