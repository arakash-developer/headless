const Services = () => {
  return (
    <>
      <div className="mt-5">
        <h1 className="font-semibold text-4xl leading-[125%] text-[#343a40]">
          Create Residual Analysis
        </h1>
        <p className="font-normal text-base leading-[150%] text-[var(--text-secondary)] mt-2">
          Dashboard / Services /
          <span className="text-[--text-normal]">Create Residual Analysis</span>
        </p>
      </div>
      <div className="mt-8 pt-3 px-4 pb-4 bg-[var(--secondary] servicecard rounded-[8px]">
        <h2 className='text-[var(--Text-Normal)] text-lg not-italic font-semibold leading-7'>Project Information</h2>
        <p className='font-medium text-sm leading-[171%] text-[var(--text-secondary)]'>Project Name</p>
        <input
          type="text"
          name=""
          placeholder="Burleson Sand Volvo A40G Water Truck"
          className='py-2 px-3 mt-2 w-full h-[40px] bg-[var(--background)] border border-[var(--neutral-400)] rounded-[8px] text-sm leading-[171%] text-[#495057]'
        />
      </div>
      <div className="pt-3 pb-[33px] pl-5 mt-6 bg-[var(--secondary)] servicecard rounded-[8px]">
        <h3 className='font-semibold text-lg leading-[156%] text-[var(--text-normal)]'>Select Services</h3>
        <p className='font-normal text-sm leading-[171%] text-[var(--text-secondary)]'>Choose which services you want to include in this residual analysis project</p>
      </div>
    </>
  );
};

export default Services;
