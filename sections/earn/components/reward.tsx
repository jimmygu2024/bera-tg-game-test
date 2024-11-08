import LazyImage from '@/components/img';

const Reward = (props: Props) => {
  const { style, children, className } = props;

  return (
    <div
      className={`flex items-center gap-[0.312500rem] ${className}`}
      style={style}
    >
      <LazyImage src="/images/icon-bera-coin.svg" width="1.250000rem" height="1.250000rem" />
      <span className="text-black text-[0.875000rem] font-[600]">{children}</span>
    </div>
  );
};

export default Reward;

interface Props {
  style?: React.CSSProperties;
  className?: string;
  children?: any;
}
