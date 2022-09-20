import { SDItem } from "./DItem.styles";

interface DItemProps {
  name: string;
  value: string;
}
function DItem({ name, value }: DItemProps) {
  return (
    <SDItem>
      <span className="name">{name}:&nbsp;</span>
      <span className="value">{value}</span>
    </SDItem>
  );
}

export default DItem;
