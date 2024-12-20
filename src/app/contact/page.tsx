import Section from "@/components/shared-ui/section-full";
import { Button, Input, Textarea } from "@nextui-org/react";

import { UserRound, AtSign, NotebookPen, Pencil } from "lucide-react";
import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <main className="relative flex flex-col">
      <Section className="min-h-[90dvh]">
        <div className="absolute top-0 left-0 w-full">
          <div className="relative w-full h-[400px]">
            <Image
              src={
                "https://images.pexels.com/photos/1419923/pexels-photo-1419923.jpeg"
              }
              fill
              priority
              alt="Contact Page cover photo"
              className="object-cover object-top opacity-80"
            />
            <div className="absolute inset-0 bg-gradient opacity-10"></div>
          </div>
        </div>
        <div className="container z-30">
          <div className="flex flex-col bg-white px-8 py-12 rounded shadow-lg xl:flex-row xl:p-12 gap-12 contaner w-full text-slate-700">
            <div className="flex flex-col justify-center w-full xl:w-1/2">
              <p className="subheading font-semibold mb-6">Wanna talk?</p>
              <p>
                Got something on your mind? Whether it&apos;s a quick question,
                a detailed inquiry, or just a friendly hello, let me know!
                Either drop a message using the form or you can contact me
                directly using the email address provided below and I&apos;ll
                respond as soon as possible!
              </p>
            </div>

            <div className="w-full xl:w-1/2 xl:px-6">
              <form action="" className="space-y-5">
                <h2 className="font-semibold">Send me a message</h2>
                <div className="flex flex-col sm:flex-row gap-5">
                  <Input
                    size="lg"
                    placeholder="Name"
                    labelPlacement="inside"
                    startContent={
                      <UserRound className="text-gray-300 size-5" />
                    }
                    classNames={{
                      inputWrapper:
                        "!shadow-none !rounded border border-yellow",
                    }}
                  />
                  <Input
                    size="lg"
                    placeholder="Email"
                    labelPlacement="inside"
                    startContent={<AtSign className="text-gray-300 size-5" />}
                    classNames={{
                      inputWrapper:
                        "!shadow-none !rounded border border-yellow",
                    }}
                  />
                </div>
                <Input
                  size="lg"
                  placeholder="Subject"
                  labelPlacement="inside"
                  startContent={<NotebookPen className="text-gray-300" />}
                  classNames={{
                    inputWrapper: "!shadow-none !rounded border border-yellow",
                  }}
                />
                <Textarea
                  size="lg"
                  placeholder="Message"
                  labelPlacement="inside"
                  minRows={5}
                  maxRows={8}
                  startContent={<Pencil className="text-gray-300 size-5" />}
                  classNames={{
                    inputWrapper: "!shadow-none !rounded border border-yellow",
                  }}
                />
              </form>
              <Button className="mt-5 rounded bg-yellow text-yellow-900 font-semibold">
                Send message
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default Contact;
