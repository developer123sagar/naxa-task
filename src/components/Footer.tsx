const Footer = () => {
  return (
    <div className="footer-up w-[80%] mx-auto py-20 my-32 rounded-2xl relative h-[240px]">
      <img src="/1.svg" className="absolute left-0 bottom-0 rounded-b-2xl" />
      <img
        src="/2.svg"
        className="absolute right-0 top-0 rounded-2xl object-contain h-[240px]"
      />
      <h2 className="text-white-1 text-center text-3xl font-medium">
        Seeking <span className="text-yellow-2">Collaboration</span>?
      </h2>
      <p className="text-center text-white-1 mt-4">
        We constantly look forward to exploring ideas, collaborations, and
        technical <br />
        innovations. If you want to partner with us, we are just an email away.
      </p>
    </div>
  );
};

export default Footer;
