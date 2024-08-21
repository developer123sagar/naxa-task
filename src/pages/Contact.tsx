import { Loader } from "lucide-react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MapComp from "@/components/MapComp";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { formSchema } from "@/validations";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      address: "",
      contact: "",
      photo: undefined,
      cv: undefined,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);

    const formData = new FormData();

    if (values.cv && values.photo) {
      formData.append("photo", values.photo);
      formData.append("cv", values.cv);
    }
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("address", values.address);
    formData.append("contact", values.contact);

    setTimeout(() => {
      setLoading(false);
      alert("Submitted successfully!");
      form.reset();
    }, 1000);
  }

  return (
    <>
      <Header />
      <section className="bg-gray-50 w-full h-screen overflow-x-hidden">
        <div className="py-20 px-2 md:px-20 bg-gray-50 flex flex-col md:flex-row gap-2 md:gap-10 justify-between">
          <div className="basis-[30%]">
            <h1 className="font-medium py-2">Contact</h1>
            <div className="flex flex-col gap-y-2">
              <p className="text-sm text-gray-1 font-light">
                Do Cha Marg, Maharajgunj-3, Kathmandu, Nepal
              </p>
              <a
                className="text-sm text-gray-1 font-light"
                href="tel:+14516543"
              >
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
          <div className="bg-white-1 p-2 mt-10 sm:mt-0 md:p-8 basis-[65%]">
            <h1 className="text-gray-2">Let's talk!</h1>
            <p className="font-light text-sm my-2 text-black">
              Want to chat? Shoot us an email at{" "}
              <span className="text-blue-2 cursor-pointer">
                info@naxa.com.np
              </span>{" "}
              /{" "}
              <span className="text-blue-2 cursor-pointer">hr@naxa.com.np</span>
            </p>
            <Button variant={"secondary"} className="my-2">
              Join our team
            </Button>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="my-5 grid grid-cols-1 md:grid-cols-2 justify-between gap-10">
                  <div className="basis-[46%]">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem className="flex flex-col basis-[46%]">
                          <FormLabel className="text-sm font-medium text-gray-2">
                            Username
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="Sagar Chand" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="basis-[46%]">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem className="flex flex-col basis-[45%]">
                          <FormLabel className="text-sm font-medium text-gray-2">
                            Email
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="chandsagar314@gmail.com"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel className="text-sm font-medium text-gray-2">
                          Address
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Enter your Address"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="contact"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel className="text-sm font-medium text-gray-2">
                          Contact
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="9800501332" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="photo"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel className="text-sm font-medium text-gray-2">
                          Photo
                        </FormLabel>
                        <FormControl>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) =>
                              field.onChange(e.target.files?.[0])
                            }
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="cv"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel className="text-sm font-medium text-gray-2">
                          CV
                        </FormLabel>
                        <FormControl>
                          <input
                            type="file"
                            accept=".pdf"
                            onChange={(e) =>
                              field.onChange(e.target.files?.[0])
                            }
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <Button
                  type="submit"
                  className="mt-5"
                  disabled={loading}
                  variant={"secondary"}
                >
                  {loading ? (
                    <div className="flex gap-1 items-center w-fit mx-auto">
                      <Loader
                        className="animate-spin w-fit mx-auto"
                        size={24}
                      />
                      <span className="text-gray-2">Submitting...</span>
                    </div>
                  ) : (
                    "Submit"
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
        <MapComp />
        <Footer />
      </section>
    </>
  );
};

export default Contact;
