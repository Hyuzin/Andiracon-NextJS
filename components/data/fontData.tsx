import { Poppins, Montserrat, Inter } from "@next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const inter = Inter({
  subsets: ["latin", "cyrillic", "greek"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
