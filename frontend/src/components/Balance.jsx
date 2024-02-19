const Balance = ({ balance }) => {
  return (
    <div className="flex items-center gap-4 px-10 py-8">
      <div className="text-[26px] font-bold font-sans">Your Balance</div>
      <div className="text-[26px] font-bold flex gap-2"> 
        ${balance}
      </div>
    </div>
  );
};

export default Balance;
