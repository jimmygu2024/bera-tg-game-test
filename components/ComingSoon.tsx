const ComingSoon = (props: any) => {
  const { className } = props;

  return (
    <div className={`text-[1rem] whitespace-nowrap text-white font-[600] flex justify-center items-center h-[50px] shrink-0 px-[20px] rounded-[25px] border border-[rgba(255,_255,_255,_0.20)] bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0.20)_0%,_rgba(255,_255,_255,_0.00)_100%)] backdrop-blur-[10px] ${className}`}>
      Coming Thoon Q5
    </div>
  );
};

export default ComingSoon;
