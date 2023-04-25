import TitleSection from "@/components/TitleSection";
import dynamic from "next/dynamic";
const Content = dynamic(() => import("@/components/Content"));
import { ChakraProvider, Text, useToast } from "@chakra-ui/react";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Textarea } from "@chakra-ui/textarea";
import { useState } from "react";
import { Button } from "@chakra-ui/button";
import Link from "next/link";
import { sendContactForm } from "@/lib/api";
import ContactButton from "@/components/ContactButton";
import { motion } from "framer-motion";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

const initValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const initState = { values: initValues };

export default function Contact() {
  const toast = useToast();
  const [state, setState] = useState<any>(initState);
  const [touched, setTouched] = useState<any>({});

  const { values, isLoading, error } = state;

  const onBlur = ({
    target,
  }: {
    target: HTMLTextAreaElement | HTMLInputElement;
  }) => setTouched((prev: any) => ({ ...prev, [target.name]: true }));

  const handleChange = ({
    target,
  }: {
    target: HTMLTextAreaElement | HTMLInputElement;
  }) =>
    setState((prev: any) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async () => {
    setState((prev: any) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      await sendContactForm(values);
      setTouched({});
      setState(initState);
      toast({
        title: "Pesan Terkirim.",
        status: "success",
        duration: 2000,
        position: "top",
      });
    } catch (error: any) {
      setState((prev: any) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };

  return (
    <ChakraProvider>
      <Content
        title="Kontak Andiracon | Informasi Kontak, Alamat, dan Peta Lokasi"
        metaTitle="Kontak Kami - Whatsapp | Linkedin | Email"
        description="Hubungi Andiracon Group untuk Mendapatkan Layanan Terbaik"
      >
        <TitleSection title="Kontak" />
        <motion.div
          className={`px-3 md:px-20 lg:px-60 itmes-center `}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0, transition: { delay: 0.3 } }}
        >
          <div className="bg-white shadow-md rounded-xl flex flex-col md:flex-row gap-4 items-center">
            <div className="w-full">
              <div className="w-full h-[450px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.7905246757023!2d107.01110107501133!3d-6.291239661576754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698fc87f0feae1%3A0x82da286059679802!2sANDIRACON%20PABRIK%20UDITCH%2C%20BOXCULVERT%2C%20SHEETPILE%2C%20SQUAREPILE%2C%20PAGAR%20PANEL%2C%20PAVINGBLOK%2C%20KANSTEEN!5e0!3m2!1sen!2sid!4v1681951981563!5m2!1sen!2sid"
                  width="100%"
                  height="450"
                  className="object-cover rounded-xl"
                ></iframe>
              </div>
              <div className="pl-5 pb-5">
                <div className="py-5 pt-10 md:pt-5">
                  <span className="font-semibold"> Alamat : </span> <br /> Ruko
                  Botania, Jl.Raya Narogong, Jl. Pesona Metropolitan Jl. Pratama
                  3 No.24, Kota Bks, Jawa Barat 17115
                </div>
                <div className="pb-5 tracking-widest">
                  <span className="font-semibold"> No : </span> <br />
                  <Link
                    href="tel:+6282123886656"
                    className="underline underline-offset-8 decoration-red-500 hover:text-red-500"
                  >
                    0821 - 2388 - 6656
                  </Link>
                </div>
                <div className="pb-5 flex flex-col gap-3">
                  <span className="font-semibold">Social Media: </span>
                  <div className="grid grid-cols-2 gap-x-0 gap-y-3">
                    <ContactButton
                      href="https://wa.link/0merpx"
                      borderColor="green.600"
                      color="green.600"
                      hoverBgColor="green.600"
                      hoverColor="white"
                    >
                      WhatsApp
                      <FaWhatsapp className="ml-2" />
                    </ContactButton>
                    <ContactButton
                      href="https://send-email-xi.vercel.app/"
                      borderColor="blue.500"
                      color="blue.500"
                      hoverBgColor="blue.500"
                      hoverColor="white"
                    >
                      Facebook
                      <FaFacebook className="ml-2" />
                    </ContactButton>
                    <ContactButton
                      href="https://www.linkedin.com/in/imam-wahyudi-owner-andiracon-precast-concrete-134a251a8"
                      borderColor="blue.900"
                      color="blue.900"
                      hoverBgColor="blue.900"
                      hoverColor="white"
                    >
                      LinkedIn
                      <FaLinkedin className="ml-2" />
                    </ContactButton>
                    <ContactButton
                      href="https://send-email-xi.vercel.app/"
                      borderColor="purple.500"
                      color="purple.500"
                      hoverBgColor="purple.500"
                      hoverColor="white"
                    >
                      Instagram
                      <FaInstagram className="ml-2" />
                    </ContactButton>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full gap-5 py-5 px-5 border-l ">
              <p className="font-semibold text-center text-red-500">
                KIRIM PESAN
              </p>
              {error && (
                <Text color="red.500" fontSize="md">
                  {error}
                </Text>
              )}
              <FormControl isRequired isInvalid={touched.name && !values.name}>
                <FormLabel>Nama</FormLabel>
                <Input
                  type="text"
                  name="name"
                  errorBorderColor="red.500"
                  value={values.name}
                  onChange={handleChange}
                  focusBorderColor="black"
                  onBlur={onBlur}
                />
                <FormErrorMessage>Input wajib diisi.</FormErrorMessage>
              </FormControl>
              <FormControl
                isRequired
                isInvalid={touched.email && !values.email}
              >
                <FormLabel>Email</FormLabel>
                <Input
                  type="text"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  focusBorderColor="black"
                  errorBorderColor="red.500"
                  onBlur={onBlur}
                />
                <FormErrorMessage>Input wajib diisi.</FormErrorMessage>
              </FormControl>
              <FormControl
                isRequired
                isInvalid={touched.subject && !values.subject}
              >
                <FormLabel>Subjek</FormLabel>
                <Input
                  type="text"
                  name="subject"
                  value={values.subject}
                  onChange={handleChange}
                  focusBorderColor="black"
                  errorBorderColor="red.500"
                  onBlur={onBlur}
                />
                <FormErrorMessage>Input wajib diisi.</FormErrorMessage>
              </FormControl>
              <FormControl
                isRequired
                isInvalid={touched.message && !values.message}
              >
                <FormLabel>Pesan</FormLabel>
                <Textarea
                  name="message"
                  value={values.message}
                  onChange={handleChange}
                  rows={3}
                  onBlur={onBlur}
                  focusBorderColor="black"
                  errorBorderColor="red.500"
                />
                <FormErrorMessage>Input wajib diisi.</FormErrorMessage>
              </FormControl>
              <Button
                width={{ base: "100%", md: "40" }}
                variant="outline"
                isLoading={isLoading}
                bgColor="red.500"
                color="white"
                disabled={
                  !values.name ||
                  !values.email ||
                  !values.subject ||
                  !values.message
                }
                _hover={{ bgColor: "white", color: "red.500" }}
                _active={{ bgColor: "red.700", color: "white" }}
                onClick={onSubmit}
              >
                Kirim
              </Button>
            </div>
          </div>
        </motion.div>
      </Content>
    </ChakraProvider>
  );
}
