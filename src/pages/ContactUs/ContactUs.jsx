import PageBanner from "../../components/PageBanner/PageBanner";
import PageTitle from "../../components/PageTitle/PageTitle";
import { Button, Label, TextInput, Textarea } from 'flowbite-react';

const ContactUs = () => {
  return (
    <div>
      <PageTitle title="contact" />
      <PageBanner heading="Contact With Us" />
      <div className="w-11/12 mx-auto flex justify-center items-center my-20 h-[40vh]">
      <form className="w-full lg:w-1/2 flex  flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Your email" />
        </div>
        <TextInput id="email1" type="email" placeholder="your@name.com" required />
      </div>
      <div className="">
      <div className="mb-2 block">
        <Label htmlFor="comment" value="Your message" />
      </div>
      <Textarea id="comment" placeholder="Leave a comment..." required rows={4} />
    </div>
     
      <Button type="submit">Sent</Button>
    </form>
      </div>
    </div>
  );
};
export default ContactUs;
