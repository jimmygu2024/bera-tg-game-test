const User = () => {

  return (
    <div className="flex items-center">
      <div className="relative z-10 flex items-center justify-center w-[50px] h-[50px] bg-[url('/images/beraciaga/avator_box.svg')] bg-no-repeat bg-center">
        <div className="w-[22px]">
          <img src="/images/beraciaga/avator.svg" alt="avator" />
        </div>
      </div>
      <div className="relative -left-[10px] bg-[rgba(38, 38, 38, 0.30)] border-2 border-[rgba(51, 50, 48, 0.38)] rounded-[12px] py-[8px] pr-[12px] pl-[18px] text-[#F7F9EA] font-montserrat text-[12px] font-semibold leading-[100%]">
        @Mency123
      </div>
    </div>
  );
};

export default User;
