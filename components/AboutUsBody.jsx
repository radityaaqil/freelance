const AboutUsBody = () => {
  return (
    <div className="mx-12 md:mx-28 lg:mx-44 mt-8 font-ubuntu text-[#3c0c3e]/80">
      {/* Small Screen */}
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
      {/* Large Screen */}
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
      <div className="hidden lg:block mt-10 w-full h-[350px] bg-yellow-500">Content</div>
    </div>
  );
};

export default AboutUsBody;
