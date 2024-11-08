const Card = (props: Props) => {
  const { style, children, className } = props;

  return (
    <div
      className={`bg-[#F7F9EA] backdrop-blur-[0.312500rem] border border-[#4B371F] rounded-[1.000000rem] p-[0.625000rem_0.625000rem_0.875000rem] text-[#4B371F] text-[1.000000rem] font-[700] ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default Card;

interface Props {
  style?: React.CSSProperties;
  className?: string;
  children?: any;
}
