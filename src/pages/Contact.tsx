import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section className="py-20 px-10 bg-gray-200/60 flex gap-10 justify-betweenco">
      <div>
        <h1 className="font-medium py-2">Contact</h1>
        <div className="flex flex-col gap-y-2">
          <p className="text-sm text-gray-1 font-light">
            Do Cha Marg, Maharajgunj-3, Kathmandu, Nepal
          </p>
          <a className="text-sm text-gray-1 font-light" href="tel:+14516543">
            +14516543
          </a>
          <a
            className="text-sm text-gray-1 font-light hover:text-blue-1 transition-colors duration-500"
            href="mailto:info@naxa.com.np"
            target="_blank"
          >
            info@naxa.com.np
          </a>
          <a
            className="text-sm text-gray-1 font-light hover:text-blue-1 transition-colors duration-500"
            href="mailto:hr@naxa.com.np"
            target="_blank"
          >
            hr@naxa.com.np
          </a>
        </div>
      </div>
      <div className="bg-white-1 p-8">
        <h1 className="text-gray-2">Let's talk!</h1>
        <p className="font-light text-sm my-2 text-black">
          Want to chat? Shoot us an email at{" "}
          <span className="text-blue-2 cursor-pointer">info@naxa.com.np</span> /{" "}
          <span className="text-blue-2 cursor-pointer">hr@naxa.com.np</span>
        </p>
        <Button variant={"secondary"}>Join our team</Button>
      </div>
    </section>
  );
};

export default Contact;
