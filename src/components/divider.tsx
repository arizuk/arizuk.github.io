type Props = {
  className?: string;
};
const Divider: React.FC<Props> = ({ className = "" }) => {
  return (
    <div
      className={`${className} bg-gradient-to-r from-transparent via-gray-400 to-transparent h-[1px] my-8`}
    />
  );
};
export default Divider;
