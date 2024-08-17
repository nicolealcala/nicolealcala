import Section from "@/components/ui/section-full";
import { Button, Input, Textarea } from "@nextui-org/react";

import { UserRound, AtSign, NotebookPen, Pencil } from "lucide-react";
import React from "react";

const Contact = () => {
  return (
    <main className="flex flex-col">
      <Section>
        <div className="container">
          <div className="flex flex-col md:flex-row gap-12 contaner w-full">
            <div className="w-full md:w-1/2">
              <p className="subheading font-semibold mb-6">Wanna talk?</p>
              <p>
                Got something on your mind? Whether it&apos;s a quick question,
                a detailed inquiry, or just a friendly hello, let me know!
                Either drop a message using the form or you can contact me
                directly using the email address provided below and I&apos;ll
                respond as soon as possible!
              </p>
            </div>

            <div className="w-full md:w-1/2 md:px-6">
              <form action="" className="space-y-5">
                <div className="flex gap-x-5">
                  <Input
                    size="lg"
                    placeholder="Name"
                    labelPlacement="inside"
                    color="warning"
                    // variant="underlined"
                    startContent={
                      <UserRound className="text-yellow-300 size-5" />
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
                    color="warning"
                    // variant="underlined"
                    startContent={<AtSign className="text-yellow-300 size-5" />}
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
                  color="warning"
                  // variant="underlined"
                  startContent={
                    <NotebookPen className="text-yellow-300 size-5" />
                  }
                  classNames={{
                    inputWrapper: "!shadow-none !rounded border border-yellow",
                  }}
                />
                <Textarea
                  size="lg"
                  placeholder="Message"
                  labelPlacement="inside"
                  color="warning"
                  // variant="underlined"
                  minRows={5}
                  maxRows={8}
                  startContent={<Pencil className="text-yellow-300 size-5" />}
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
