const AboutUsBody = () => {
  return (
    <div className="mx-12 md:mx-28 lg:mx-44 mt-8 font-ubuntu text-[#3c0c3e]/80">
      <div className="text-2xl font-bold lg:hidden">About FEAT</div>
      <div className="mt-5 text-justify lg:hidden">
        We are a marketing agency that focused on Content and Community
        Marketing. We believe Brands and consumer must have a better
        relationship nowadays through two-way communications. We build and
        connect brands to the community, so they may have a much better
        engagement beyond the products itself by creating creative strategy,
        acquisition, and maintenance program through partnered and in-house
        communities or Key Opinion Leaders.
      </div>
      <div className="pt-6 space-y-4 pb-10 lg:hidden">
        <div className="text-center text-xl p-4 border-2 border-[#3c0c3e] rounded-xl">
          Content Marketing
        </div>
        <div className="text-center text-xl p-4 border-2 border-[#3c0c3e] rounded-xl">
          Community Management
        </div>
        <div className="text-center text-xl p-4 border-2 border-[#3c0c3e] rounded-xl">
          KOL Marketing
        </div>
        <div className="text-center text-xl p-4 border-2 border-[#3c0c3e] rounded-xl">
          Social Conditioning
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-x-8">
        <div className="text-5xl font-bold space-y-5">
          <div>About</div>
          <div>FEAT</div>
        </div>
        <div>
          <div className="text-justify">
            We are a marketing agency that focused on Content and Community
            Marketing. We believe Brands and consumer must have a better
            relationship nowadays through two-way communications. We build and
            connect brands to the community, so they may have a much better
            engagement beyond the products itself by creating creative strategy,
            acquisition, and maintenance program through partnered and in-house
            communities or Key Opinion Leaders.
          </div>
        </div>
      </div>
      <div className="flex justify-center space-x-8 mt-8">
        <div className="w-5/12 space-y-6">
          <div className="text-center text-xl p-4 border-2 border-[#3c0c3e] rounded-xl">
            Content Marketing
          </div>
          <div className="text-center text-xl p-4 border-2 border-[#3c0c3e] rounded-xl">
            Community Management
          </div>
        </div>
        <div className="w-5/12 space-y-6">
          <div className="text-center text-xl p-4 border-2 border-[#3c0c3e] rounded-xl">
            KOL Marketing
          </div>
          <div className="text-center text-xl p-4 border-2 border-[#3c0c3e] rounded-xl">
            Social Conditioning
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsBody;
