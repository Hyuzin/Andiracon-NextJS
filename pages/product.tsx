import TitleSection from "@/components/TitleSection";

import Content from "@/components/Content";
import Image from "next/image";
import { motion } from "framer-motion";

import ProductSection from "@/components/ProductSection";

import { Link } from "react-scroll";
import { poppins } from "@/components/data/fontData";
import TableComponent from "@/components/Table";
import { Table } from "@chakra-ui/react";

export default function Product() {
  return (
    <Content
      title="Produk Beton Berkualitas dengan Harga Terjangkau | Produk"
      description="Pilihan Produk Beton Terbaik untuk Kebutuhan Konstruksi Anda"
    >
      <TitleSection title="Produk" />
      <motion.div
        className={`max-w-[53rem] mx-auto px-5 md:px-10 lg:px-5 pt-20`}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0, transition: { delay: 0.3 } }}
      >
        <div className={`${poppins.className} font-medium text-3xl`}>
          Produk yang tersedia di perusahaan kami.
          <div className="border-2 border-grey md:w-[50%] p-10 my-14">
            <ul className="font-medium text-[15px] list-decimal list-inside">
              <span className="text-2xl font-bold">Produk</span>
              <Link
                to="uditch"
                smooth={true}
                offset={-100}
                duration={500}
              >
                <li className="pt-2 cursor-pointer group">
                  <span className="bg-left-bottom bg-gradient-to-r from-red-500 to-red-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                    U Ditch
                  </span>
                </li>
              </Link>
              <Link
                to="rcp"
                smooth={true}
                spy={true}
                offset={-100}
                duration={500}
              >
                <li className="cursor-pointer group">
                  <span className="bg-left-bottom bg-gradient-to-r from-red-500 to-red-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                    Reinforced Concrete Pipes (RCP)
                  </span>
                </li>
              </Link>
              <Link
                to="cover"
                smooth={true}
                spy={true}
                offset={-100}
                duration={500}
              >
                <li className="cursor-pointer group">
                  <span className="bg-left-bottom bg-gradient-to-r from-red-500 to-red-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                    Cover U Ditch
                  </span>
                </li>
              </Link>
              <Link
                to="box"
                smooth={true}
                spy={true}
                offset={-100}
                duration={500}
              >
                <li className="cursor-pointer group">
                  <span className="bg-left-bottom bg-gradient-to-r from-red-500 to-red-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                    Box Culvert
                  </span>
                </li>
              </Link>
              <Link
                to="porouswell"
                smooth={true}
                spy={true}
                offset={-100}
                duration={500}
              >
                <li className="cursor-pointer group">
                  <span className="bg-left-bottom bg-gradient-to-r from-red-500 to-red-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                    Sumur Resapan (Porous Well)
                  </span>
                </li>
              </Link>
              <Link
                to="kansteen"
                smooth={true}
                spy={true}
                offset={-100}
                duration={500}
              >
                <li className="cursor-pointer group">
                  <span className="bg-left-bottom bg-gradient-to-r from-red-500 to-red-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                    Kansteen
                  </span>
                </li>
              </Link>
              <Link
                to="barrier"
                smooth={true}
                spy={true}
                offset={-100}
                duration={500}
              >
                <li className="cursor-pointer group">
                  <span className="bg-left-bottom bg-gradient-to-r from-red-500 to-red-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                    Barrier (MCB)
                  </span>
                </li>
              </Link>
              <Link
                to="fence"
                smooth={true}
                spy={true}
                offset={-100}
                duration={500}
              >
                <li className="cursor-pointer group">
                  <span className="bg-left-bottom bg-gradient-to-r from-red-500 to-red-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                    Pagar Beton (Concrete Fence)
                  </span>
                </li>
              </Link>
              <Link
                to="tiang"
                smooth={true}
                spy={true}
                offset={-100}
                duration={500}
              >
                <li className="cursor-pointer group">
                  <span className="bg-left-bottom bg-gradient-to-r from-red-500 to-red-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                    Tiang Kolom
                  </span>
                </li>
              </Link>
              <Link
                to="pipabuis"
                smooth={true}
                spy={true}
                offset={-100}
                duration={500}
              >
                <li className="cursor-pointer group">
                  <span className="bg-left-bottom bg-gradient-to-r from-red-500 to-red-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                    Pipa Buis
                  </span>
                </li>
              </Link>
              <Link
                to="pavingblock"
                smooth={true}
                spy={true}
                offset={-100}
                duration={500}
              >
                <li className="cursor-pointer group">
                  <span className="bg-left-bottom bg-gradient-to-r from-red-500 to-red-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                    Paving Block
                  </span>
                </li>
              </Link>
              <Link
                to="sheetpile"
                smooth={true}
                spy={true}
                offset={-100}
                duration={500}
              >
                <li className="cursor-pointer group">
                  <span className="bg-left-bottom bg-gradient-to-r from-red-500 to-red-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                    Sheet Pile
                  </span>
                </li>
              </Link>
              <Link
                to="squarepile"
                smooth={true}
                spy={true}
                offset={-100}
                duration={500}
              >
                <li className="cursor-pointer group">
                  <span className="bg-left-bottom bg-gradient-to-r from-red-500 to-red-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                    Square Pile
                  </span>
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <ProductSection
          title="U Ditch"
          imageName="u-ditch.jpg"
          hashUrl="uditch"
        >
          <span className="font-medium"> U Ditch </span> Adalah salah satu
          produk beton precast yang digunakan untuk saluran drainase. Bentuknya
          menyerupai huruf U yang terbalik, sehingga dapat mengalirkan air
          dengan baik. <br /> <br /> Beton pra cetak U Ditch memiliki beberapa
          keunggulan, antara lain:
          <br />
          <br />
          <ul className="px-4 text-red-500 list-disc">
            <li>
              <div className="text-black">
                Kualitas beton terjamin karena diproduksi di pabrik dengan
                standar yang ketat.
              </div>
            </li>
            <li>
              <div className="text-black">
                Pemasangan lebih cepat dan mudah karena sudah berbentuk modul
                yang siap dipasang.
              </div>
            </li>
            <li>
              <div className="text-black">
                Tahan lama dan kuat karena tidak mudah retak atau rusak akibat
                cuaca atau beban lalu lintas.
              </div>
            </li>
            <li>
              <div className="text-black">
                Hemat biaya karena tidak memerlukan banyak material dan tenaga
                kerja
              </div>
            </li>
          </ul>
          <br />
          Beton pra cetak U Ditch tersedia dalam berbagai ukuran dan spesifikasi
          sesuai dengan kebutuhan proyek. Harga beton pra cetak U Ditch
          bervariasi tergantung pada ukuran, kualitas, dan lokasi pengiriman.
          Untuk informasi lebih lanjut tentang beton pra cetak U Ditch, silakan
          hubungi kami di nomor telepon atau email yang tersedia di website kami
          <TableComponent title="U-Ditch">
            <thead className="text-xs">
              <tr className="bg-gray-100">
                <th className="py-5">KODE PRODUK</th>
                <th>LEBAR</th>
                <th>DALAM</th>
                <th colSpan={10}>DIMENSI</th>
                <th>BERAT PRODUK</th>
              </tr>
              <tr className="bg-orange-100">
                <th rowSpan={2}>Product Code</th>
                <th>Width</th>
                <th>Depth</th>
                <th>A</th>
                <th>A1</th>
                <th>B</th>
                <th>C</th>
                <th>D</th>
                <th>T</th>
                <th>L</th>
                <th>t</th>
                <th>t1</th>
                <th>x</th>
                <th>Weight</th>
              </tr>
              <tr className="bg-yellow-200">
                <th>mm</th>
                <th>mm</th>
                <th>mm</th>
                <th>mm</th>
                <th>mm</th>
                <th>mm</th>
                <th>mm</th>
                <th>mm</th>
                <th>mm</th>
                <th>mm</th>
                <th>mm</th>
                <th>mm</th>
                <th>Product</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>U30X30X120</td>
                <td rowSpan={4}>300</td>
                <td>300</td>
                <td>300</td>
                <td>300</td>
                <td>280</td>
                <td>390</td>
                <td>60</td>
                <td>45</td>
                <td>1200</td>
                <td>160</td>
                <td>200</td>
                <td>40</td>
                <td>166</td>
              </tr>
              <tr>
                <td>U30X40X120</td>
                <td>400</td>
                <td>292</td>
                <td>400</td>
                <td>280</td>
                <td>400</td>
                <td>70</td>
                <td>54</td>
                <td>1200</td>
                <td>200</td>
                <td>270</td>
                <td>60</td>
                <td>237</td>
              </tr>
              <tr>
                <td>U30X50X120</td>
                <td>500</td>
                <td>296</td>
                <td>500</td>
                <td>280</td>
                <td>400</td>
                <td>70</td>
                <td>52</td>
                <td>1200</td>
                <td>250</td>
                <td>320</td>
                <td>60</td>
                <td>270</td>
              </tr>
              <tr>
                <td>U30X60X120</td>
                <td>600</td>
                <td>300</td>
                <td>600</td>
                <td>280</td>
                <td>400</td>
                <td>70</td>
                <td>50</td>
                <td>1200</td>
                <td>300</td>
                <td>370</td>
                <td>60</td>
                <td>300</td>
              </tr>
              <tr>
                <td>U40X40X120</td>
                <td rowSpan={3}>400</td>
                <td>400</td>
                <td>400</td>
                <td>400</td>
                <td>380</td>
                <td>500</td>
                <td>70</td>
                <td>50</td>
                <td>1200</td>
                <td>200</td>
                <td>270</td>
                <td>70</td>
                <td>259</td>
              </tr>
              <tr>
                <td>U40X50X120</td>
                <td>500</td>
                <td>396</td>
                <td>500</td>
                <td>380</td>
                <td>500</td>
                <td>70</td>
                <td>52</td>
                <td>1200</td>
                <td>250</td>
                <td>320</td>
                <td>70</td>
                <td>290</td>
              </tr>
              <tr>
                <td>U40X60X120</td>
                <td>600</td>
                <td>400</td>
                <td>600</td>
                <td>380</td>
                <td>500</td>
                <td>70</td>
                <td>50</td>
                <td>1200</td>
                <td>300</td>
                <td>370</td>
                <td>70</td>
                <td>322</td>
              </tr>
              <tr>
                <td>U50X50X120</td>
                <td rowSpan={3}>500</td>
                <td>500</td>
                <td>500</td>
                <td>500</td>
                <td>480</td>
                <td>640</td>
                <td>70</td>
                <td>70</td>
                <td>1200</td>
                <td>250</td>
                <td>320</td>
                <td>70</td>
                <td>383</td>
              </tr>
              <tr>
                <td>U50X60X120</td>
                <td>600</td>
                <td>496</td>
                <td>600</td>
                <td>480</td>
                <td>640</td>
                <td>70</td>
                <td>72</td>
                <td>1200</td>
                <td>300</td>
                <td>370</td>
                <td>70</td>
                <td>426</td>
              </tr>
              <tr>
                <td>U50X70X120</td>
                <td>700</td>
                <td>500</td>
                <td>700</td>
                <td>480</td>
                <td>640</td>
                <td>70</td>
                <td>70</td>
                <td>1200</td>
                <td>350</td>
                <td>420</td>
                <td>70</td>
                <td>468</td>
              </tr>
              <tr>
                <td>U60X60X120</td>
                <td rowSpan={3}>600</td>
                <td>600</td>
                <td>600</td>
                <td>600</td>
                <td>580</td>
                <td>740</td>
                <td>70</td>
                <td>70</td>
                <td>1200</td>
                <td>300</td>
                <td>370</td>
                <td>70</td>
                <td>446</td>
              </tr>
              <tr>
                <td>U60X70X120</td>
                <td>700</td>
                <td>600</td>
                <td>700</td>
                <td>580</td>
                <td>740</td>
                <td>70</td>
                <td>70</td>
                <td>1200</td>
                <td>350</td>
                <td>420</td>
                <td>70</td>
                <td>534</td>
              </tr>
              <tr>
                <td>U60X80X120</td>
                <td>800</td>
                <td>600</td>
                <td>800</td>
                <td>580</td>
                <td>740</td>
                <td>90</td>
                <td>70</td>
                <td>1200</td>
                <td>400</td>
                <td>490</td>
                <td>70</td>
                <td>581</td>
              </tr>
              <tr>
                <td>U80X80X120</td>
                <td rowSpan={3}>800</td>
                <td>800</td>
                <td>792</td>
                <td>800</td>
                <td>760</td>
                <td>940</td>
                <td>100</td>
                <td>74</td>
                <td>1200</td>
                <td>400</td>
                <td>500</td>
                <td>70</td>
                <td>673</td>
              </tr>
              <tr>
                <td>U80X90X120</td>
                <td>1000</td>
                <td>800</td>
                <td>900</td>
                <td>760</td>
                <td>940</td>
                <td>100</td>
                <td>70</td>
                <td>1200</td>
                <td>500</td>
                <td>600</td>
                <td>70</td>
                <td>746</td>
              </tr>
              <tr>
                <td>U80X100X120</td>
                <td>1200</td>
                <td>810</td>
                <td>1000</td>
                <td>760</td>
                <td>940</td>
                <td>100</td>
                <td>65</td>
                <td>1200</td>
                <td>600</td>
                <td>700</td>
                <td>70</td>
                <td>763</td>
              </tr>
              <tr>
                <td>U100X100X120</td>
                <td rowSpan={3}>1000</td>
                <td>1000</td>
                <td>1000</td>
                <td>1000</td>
                <td>930</td>
                <td>1180</td>
                <td>130</td>
                <td>90</td>
                <td>1200</td>
                <td>500</td>
                <td>630</td>
                <td>100</td>
                <td>1136</td>
              </tr>
              <tr>
                <td>U100X120X120</td>
                <td>1200</td>
                <td>1016</td>
                <td>1200</td>
                <td>930</td>
                <td>1180</td>
                <td>130</td>
                <td>82</td>
                <td>1200</td>
                <td>600</td>
                <td>730</td>
                <td>100</td>
                <td>1242</td>
              </tr>
              <tr>
                <td>U100X140X120</td>
                <td>1400</td>
                <td>1030</td>
                <td>1400</td>
                <td>930</td>
                <td>1180</td>
                <td>130</td>
                <td>75</td>
                <td>1200</td>
                <td>700</td>
                <td>830</td>
                <td>100</td>
                <td>1337</td>
              </tr>
              <tr>
                <td>U120X120X120</td>
                <td rowSpan={2}>1200</td>
                <td>1200</td>
                <td>1186</td>
                <td>1200</td>
                <td>1110</td>
                <td>1400</td>
                <td>140</td>
                <td>107</td>
                <td>1200</td>
                <td>600</td>
                <td>740</td>
                <td>100</td>
                <td>1549</td>
              </tr>
              <tr>
                <td>U120X140X120</td>
                <td>1400</td>
                <td>1200</td>
                <td>1400</td>
                <td>1110</td>
                <td>1400</td>
                <td>140</td>
                <td>100</td>
                <td>1200</td>
                <td>700</td>
                <td>840</td>
                <td>100</td>
                <td>1673</td>
              </tr>
              <tr>
                <td>U140X140X120</td>
                <td rowSpan={4}>1400</td>
                <td>1400</td>
                <td>1400</td>
                <td>1400</td>
                <td>1360</td>
                <td>1680</td>
                <td>170</td>
                <td>140</td>
                <td>1200</td>
                <td>700</td>
                <td>870</td>
                <td>140</td>
                <td>2074</td>
              </tr>
              <tr>
                <td>U140X160X120</td>
                <td>1600</td>
                <td>1406</td>
                <td>1600</td>
                <td>1360</td>
                <td>1680</td>
                <td>170</td>
                <td>137</td>
                <td>1200</td>
                <td>800</td>
                <td>970</td>
                <td>140</td>
                <td>2230</td>
              </tr>
              <tr>
                <td>U140X180X120</td>
                <td>1800</td>
                <td>1412</td>
                <td>1800</td>
                <td>1360</td>
                <td>1680</td>
                <td>170</td>
                <td>134</td>
                <td>1200</td>
                <td>900</td>
                <td>1070</td>
                <td>140</td>
                <td>2381</td>
              </tr>
              <tr>
                <td>U140X200X120</td>
                <td>2000</td>
                <td>1420</td>
                <td>2000</td>
                <td>1360</td>
                <td>1680</td>
                <td>170</td>
                <td>130</td>
                <td>1200</td>
                <td>1000</td>
                <td>1170</td>
                <td>140</td>
                <td>2521</td>
              </tr>
              <tr>
                <td>U150X150X120</td>
                <td rowSpan={3}>1500</td>
                <td>1500</td>
                <td>1500</td>
                <td>1500</td>
                <td>1470</td>
                <td>1790</td>
                <td>160</td>
                <td>145</td>
                <td>1200</td>
                <td>750</td>
                <td>910</td>
                <td>150</td>
                <td>2349</td>
              </tr>
              <tr>
                <td>U150X180X120</td>
                <td>1800</td>
                <td>1507</td>
                <td>1800</td>
                <td>1470</td>
                <td>1790</td>
                <td>160</td>
                <td>142</td>
                <td>1200</td>
                <td>900</td>
                <td>1060</td>
                <td>150</td>
                <td>2590</td>
              </tr>
              <tr>
                <td>U150X200X120</td>
                <td>2000</td>
                <td>1511</td>
                <td>2000</td>
                <td>1470</td>
                <td>1790</td>
                <td>160</td>
                <td>140</td>
                <td>1200</td>
                <td>1000</td>
                <td>1160</td>
                <td>150</td>
                <td>2759</td>
              </tr>
              <tr>
                <td>U160X140X120</td>
                <td rowSpan={4}>1600</td>
                <td>1400</td>
                <td>1594</td>
                <td>1400</td>
                <td>1560</td>
                <td>1850</td>
                <td>150</td>
                <td>128</td>
                <td>1200</td>
                <td>700</td>
                <td>850</td>
                <td>140</td>
                <td>2058</td>
              </tr>
              <tr>
                <td>U160X160X120</td>
                <td>1600</td>
                <td>1600</td>
                <td>1600</td>
                <td>1560</td>
                <td>1850</td>
                <td>150</td>
                <td>125</td>
                <td>1200</td>
                <td>800</td>
                <td>950</td>
                <td>140</td>
                <td>2633</td>
              </tr>
              <tr>
                <td>U160X180X120</td>
                <td>1800</td>
                <td>1606</td>
                <td>1800</td>
                <td>1560</td>
                <td>1850</td>
                <td>150</td>
                <td>122</td>
                <td>1200</td>
                <td>900</td>
                <td>1050</td>
                <td>140</td>
                <td>2795</td>
              </tr>
              <tr>
                <td>U160X200X120</td>
                <td>2000</td>
                <td>1610</td>
                <td>2000</td>
                <td>1560</td>
                <td>1850</td>
                <td>150</td>
                <td>120</td>
                <td>1200</td>
                <td>1000</td>
                <td>1150</td>
                <td>140</td>
                <td>2943</td>
              </tr>
              <tr>
                <td>U180X160X120</td>
                <td rowSpan={3}>1800</td>
                <td>1600</td>
                <td>1811</td>
                <td>1600</td>
                <td>1780</td>
                <td>2100</td>
                <td>180</td>
                <td>144</td>
                <td>1200</td>
                <td>885</td>
                <td>895</td>
                <td>200</td>
                <td>2724</td>
              </tr>
              <tr>
                <td>U180X180X120</td>
                <td>1800</td>
                <td>1816</td>
                <td>1800</td>
                <td>1760</td>
                <td>2100</td>
                <td>180</td>
                <td>142</td>
                <td>1200</td>
                <td>900</td>
                <td>1080</td>
                <td>200</td>
                <td>2907</td>
              </tr>
              <tr>
                <td>U180X200X120</td>
                <td>2000</td>
                <td>1820</td>
                <td>2000</td>
                <td>1760</td>
                <td>2100</td>
                <td>180</td>
                <td>140</td>
                <td>1200</td>
                <td>1000</td>
                <td>1180</td>
                <td>200</td>
                <td>3092</td>
              </tr>
              <tr>
                <td>U200X200X120</td>
                <td>2000</td>
                <td>2000</td>
                <td>2000</td>
                <td>2000</td>
                <td>1960</td>
                <td>2278</td>
                <td>170</td>
                <td>140</td>
                <td>1200</td>
                <td>1000</td>
                <td>1170</td>
                <td>200</td>
                <td>4125</td>
              </tr>
            </tbody>
          </TableComponent>
          <Image
            src="/assets/images/uditch-spec.png"
            alt="U Ditch"
            width={1000}
            height={1000}
            className="mt-5 md:w-[60%] mx-auto"
            loading="eager"
            priority={true}
          />
          <div className="font-normal">
            <p className="py-10 font-semibold text-center">
              Spesifikasi Produk
            </p>
            <dt>Mutu Beton : </dt>
            <dd>K-400</dd>
            <dt>Metode Produksi : </dt>
            <dd>Cetak basah dengan getaran frekuensi tinggi</dd>
            <dt>Baja Tulangan : </dt>
            <ul className="list-disc list-inside text-[15px] text-red-500">
              <li>
                <span className="text-black">
                  U-50 Hard Drawn Deformed Wire {"(HDDW)"}
                </span>
              </li>
              <li>
                <span className="text-black">
                  Tegangan Leleh = 4500 Kg/Cm<sup>2</sup>
                </span>
              </li>
              <li>
                <span className="text-black">
                  Tegangan Tarik = 5000 Kg/Cm<sup>2</sup>
                </span>
              </li>
            </ul>
          </div>
        </ProductSection>
        <ProductSection
          title="Reinforced Concrete Pipes"
          imageName="reinforcoed-concrete-pipe1.jpg"
          hashUrl="rcp"
        >
          <span className="font-medium">Reinforced Concrete Pipe (RCP) </span>
          adalah pipa yang terbuat dari beton bertulang yang diperkuat dengan
          baja di dalamnya. Pipa beton bertulang ini digunakan untuk berbagai
          macam aplikasi, seperti saluran pembuangan air, pipa drainase, pipa
          pembuangan limbah, pipa pembuangan air hujan, dan sebagainya.
          <br />
          <br /> RCP biasanya diproduksi dalam berbagai ukuran dan panjang yang
          berbeda, dan seringkali dipasang dalam sistem jaringan pipa yang rumit
          untuk memenuhi kebutuhan pengaliran air. Keunggulan RCP meliputi
          ketahanan terhadap tekanan dan beban, daya tahan terhadap cuaca dan
          korosi, serta kemampuan untuk menangani beban berat di atasnya.
          <br />
          <br /> RCP sering digunakan di berbagai proyek konstruksi seperti
          jalan raya, jembatan, bangunan, dan infrastruktur lainnya yang
          memerlukan sistem pipa yang kuat dan tahan lama.
          <TableComponent title="Reinforced Concrete Pipes">
            <thead className="text-xs">
              <tr className="bg-gray-300">
                <th rowSpan={3} className="px-1">
                  NO
                </th>
                <th className="py-5">KODE PRODUK</th>
                <th>Normal Diameter</th>
                <th>Wall ThueCnesc</th>
                <th>OOuide DDmeter</th>
                <th>OOtride SocOct Diameter</th>
                <th>Inside SocOct Diameter</th>
                <th rowSpan={2}>S</th>
                <th rowSpan={2} className="px-2">
                  P
                </th>
                <th rowSpan={2} className="px-3">
                  L
                </th>
                <th>Perkiraan Berat</th>
                <th colSpan={2}>Breaking Load</th>
              </tr>
              <tr className="bg-orange-100">
                <th rowSpan={2}>Product Code</th>
                <th>Dia</th>
                <th>T</th>
                <th>OD</th>
                <th>OD1</th>
                <th>ID</th>
                <th>ApproA Weight</th>
                <th colSpan={2}>KN/M</th>
              </tr>
              <tr className="bg-yellow-200">
                <th>ee</th>
                <th>ee</th>
                <th>ee</th>
                <th>ee</th>
                <th>ee</th>
                <th>mm</th>
                <th>ee</th>
                <th>ee</th>
                <th>
                  <sup>k</sup>g
                </th>
                <th>crack</th>
                <th>destroy</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>RCP300X2500</td>
                <td>300</td>
                <td>37</td>
                <td>374</td>
                <td>461</td>
                <td>300</td>
                <td>84</td>
                <td>2334</td>
                <td>2500</td>
                <td>269</td>
                <td>23</td>
                <td>34</td>
              </tr>
              <tr>
                <td>2</td>
                <td>RCP400X2500</td>
                <td>400</td>
                <td>40</td>
                <td>480</td>
                <td>570</td>
                <td>400</td>
                <td>88</td>
                <td>2327</td>
                <td>2500</td>
                <td>360</td>
                <td>27</td>
                <td>41</td>
              </tr>
              <tr>
                <td>3</td>
                <td>RCP500X2500</td>
                <td>500</td>
                <td>45</td>
                <td>590</td>
                <td>680</td>
                <td>500</td>
                <td>104</td>
                <td>2315</td>
                <td>2500</td>
                <td>563</td>
                <td>33</td>
                <td>50</td>
              </tr>
              <tr>
                <td>4</td>
                <td>RCP600X2500</td>
                <td>600</td>
                <td>60</td>
                <td>720</td>
                <td>840</td>
                <td>600</td>
                <td>107</td>
                <td>2304</td>
                <td>2500</td>
                <td>808</td>
                <td>39</td>
                <td>59</td>
              </tr>
              <tr>
                <td>5</td>
                <td>RCP800X2500</td>
                <td>800</td>
                <td>70</td>
                <td>940</td>
                <td>1100</td>
                <td>800</td>
                <td>115</td>
                <td>2293</td>
                <td>2500</td>
                <td>1405</td>
                <td>51</td>
                <td>76</td>
              </tr>
              <tr>
                <td>6</td>
                <td>RCP1000X2500</td>
                <td>1000</td>
                <td>80</td>
                <td>1160</td>
                <td>1340</td>
                <td>1000</td>
                <td>131</td>
                <td>2274</td>
                <td>2500</td>
                <td>1965</td>
                <td>61</td>
                <td>91</td>
              </tr>
              <tr>
                <td>7</td>
                <td>RCP1200X2500</td>
                <td>1200</td>
                <td>95</td>
                <td>1400</td>
                <td>1586</td>
                <td>1200</td>
                <td>160</td>
                <td>2215</td>
                <td>2500</td>
                <td>2713</td>
                <td>69</td>
                <td>104</td>
              </tr>
              <tr>
                <td>8</td>
                <td>RCP1400X2500</td>
                <td>1400</td>
                <td>104</td>
                <td>1608</td>
                <td>1821</td>
                <td>1400</td>
                <td>160</td>
                <td>2209</td>
                <td>2500</td>
                <td>3581</td>
                <td>75</td>
                <td>113</td>
              </tr>
              <tr>
                <td>9</td>
                <td>RCP1500X2500</td>
                <td>1500</td>
                <td>107</td>
                <td>1714</td>
                <td>1937</td>
                <td>1500</td>
                <td>160</td>
                <td>2201</td>
                <td>2500</td>
                <td>3951</td>
                <td>81</td>
                <td>122</td>
              </tr>
            </tbody>
          </TableComponent>
          <Image
            src="/assets/images/rcp.png"
            alt="reinforced concrete pipes"
            width={1000}
            height={1000}
            className="mt-5"
            loading="eager"
            priority={true}
          />
          <div className="font-normal">
            <p className="py-10 font-semibold text-center">
              Spesifikasi Produk
            </p>
            <dt>Mutu Beton : </dt>
            <dd>K-400</dd>
            <dt>Metode Produksi : </dt>
            <dd>Cetak basah dengan getaran frekuensi tinggi</dd>
            <dt>Baja Tulangan : </dt>
            <ul className="list-disc list-inside text-[15px] text-red-500">
              <li>
                <span className="text-black">
                  U-50 Hard Drawn Deformed Wire {"(HDDW)"}
                </span>
              </li>
              <li>
                <span className="text-black">
                  Tegangan Leleh = 4500 Kg/Cm<sup>2</sup>
                </span>
              </li>
              <li>
                <span className="text-black">
                  Tegangan Tarik = 5000 Kg/Cm<sup>2</sup>
                </span>
              </li>
            </ul>
          </div>
        </ProductSection>
        <ProductSection
          title="Cover U Ditch"
          imageName="cover-uditch.jpg"
          hashUrl="cover"
        >
          <span className="font-medium"> Cover u ditch </span>adalah produk
          beton pracetak yang digunakan untuk menutup saluran u ditch. Cover u
          ditch berfungsi untuk melindungi saluran u ditch dari kotoran, hujan,
          dan hewan liar. <br />
          <br /> Cover u ditch juga dapat meningkatkan estetika lingkungan
          sekitar saluran u ditch. Cover u ditch yang kami tawarkan memiliki
          kualitas tinggi dan harga terjangkau.
          <br />
          <br /> Kami menggunakan bahan beton berkualitas dan tulangan u ditch
          untuk memperkuat struktur cover u ditch. Kami juga menyediakan
          berbagai ukuran dan bentuk cover u ditch sesuai dengan kebutuhan Anda.{" "}
          <br />
          <br /> Jika Anda tertarik untuk membeli cover u ditch dari kami,
          silakan hubungi kami melalui nomor telepon atau email yang tertera di
          website kami. Kami siap melayani Anda dengan profesional dan ramah.
          <TableComponent title="Cover U-Ditch Heavy Duty">
            <thead className="text-xs">
              <tr className="bg-gray-300">
                <th rowSpan={2}>NO</th>
                <th>KODE PRODUK</th>
                <th>REFERENSI UKURAN U DITCH</th>
                <th colSpan={4}>
                  UKURAN TUTUP <br />
                  Cover Size
                </th>
                <th>PERKIRAAN BERAT</th>
                <th>KUAT TEKAN</th>
              </tr>
              <tr className="bg-orange-100">
                <th>Product Code</th>
                <th>U-Ditch Reference Size</th>
                <th>
                  KETEBALAN <br /> Thicness (mm)
                </th>
                <th>
                  LEBAR <br /> width (mm)
                </th>
                <th>
                  PANJANG <br /> length (mm)
                </th>
                <th>
                  COAKAN <br />
                  Rebate (mm)
                </th>
                <th>Approx Weight (kg)</th>
                <th>Proof Load (Ton)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>CUH30X60T10</td>
                <td>CUH - 300</td>
                <td>100</td>
                <td>410</td>
                <td>600</td>
                <td>70</td>
                <td>55</td>
                <td>5,5 - 7,5</td>
              </tr>
              <tr>
                <td>2</td>
                <td>CUH30X60T12</td>
                <td>CUH - 300</td>
                <td>120</td>
                <td>410</td>
                <td>600</td>
                <td>70</td>
                <td>70</td>
                <td>5,5 - 7,5</td>
              </tr>
              <tr>
                <td>3</td>
                <td>CUH40X60T10</td>
                <td>CUH - 400</td>
                <td>100</td>
                <td>540</td>
                <td>600</td>
                <td>75</td>
                <td>78</td>
                <td>5,5 - 7,5</td>
              </tr>
              <tr>
                <td>4</td>
                <td>CUH40X60T12</td>
                <td>CUH- 400</td>
                <td>120</td>
                <td>540</td>
                <td>600</td>
                <td>75</td>
                <td>94</td>
                <td>5,5 - 7,5</td>
              </tr>
              <tr>
                <td>5</td>
                <td>CUH50X60T13</td>
                <td>CUH - 500</td>
                <td>130</td>
                <td>640</td>
                <td>600</td>
                <td>75</td>
                <td>121</td>
                <td>5,5 - 7,5</td>
              </tr>
              <tr>
                <td>6</td>
                <td>CUH60X60T12</td>
                <td>CUH - 600</td>
                <td>120</td>
                <td>740</td>
                <td>600</td>
                <td>95</td>
                <td>162</td>
                <td>5,5 - 7,5</td>
              </tr>
              <tr>
                <td>7</td>
                <td>CUH60X60T15</td>
                <td>CUH - 600</td>
                <td>150</td>
                <td>740</td>
                <td>600</td>
                <td>95</td>
                <td>162</td>
                <td>5,5 - 7,5</td>
              </tr>
              <tr>
                <td>8</td>
                <td>CUH80X60T15</td>
                <td>CUH - 800</td>
                <td>150</td>
                <td>940</td>
                <td>600</td>
                <td>95</td>
                <td>207</td>
                <td>5,5 - 7,5</td>
              </tr>
              <tr>
                <td>9</td>
                <td>CUH100X60T15</td>
                <td>CUH - 1000</td>
                <td>150</td>
                <td>1180</td>
                <td>600</td>
                <td>100</td>
                <td>288</td>
                <td>5,5 - 7,5</td>
              </tr>
              <tr>
                <td>10</td>
                <td>CUH120X60T15</td>
                <td>CUH - 1200</td>
                <td>150</td>
                <td>1410</td>
                <td>600</td>
                <td>125</td>
                <td>310</td>
                <td>5,5 - 7,5</td>
              </tr>
              <tr>
                <td>11</td>
                <td>CUH140X60T18</td>
                <td>CUH - 1400</td>
                <td>180</td>
                <td>1680</td>
                <td>600</td>
                <td>155</td>
                <td>440</td>
                <td>5,5 - 7,5</td>
              </tr>
              <tr>
                <td>12</td>
                <td>CUH150X60T18</td>
                <td>CUH - 1500</td>
                <td>180</td>
                <td>1790</td>
                <td>600</td>
                <td>160</td>
                <td>463</td>
                <td>5,5 - 7,5</td>
              </tr>
              <tr>
                <td>13</td>
                <td>CUH160X60T20</td>
                <td>CUH - 1800</td>
                <td>250</td>
                <td>1840</td>
                <td>600</td>
                <td>170</td>
                <td>670</td>
                <td>5,5 - 7,5</td>
              </tr>
            </tbody>
          </TableComponent>
          <TableComponent title="Cover U-Ditch Light Duty">
            <thead className="text-xs">
              <tr className="bg-gray-300">
                <th rowSpan={2}>NO</th>
                <th>KODE PRODUK</th>
                <th>REFERENSI UKURAN U DITCH</th>
                <th colSpan={4}>
                  UKURAN TUTUP <br />
                  Cover Size
                </th>
                <th>PERKIRAAN BERAT</th>
                <th>KUAT TEKAN</th>
              </tr>
              <tr className="bg-orange-100">
                <th>Product Code</th>
                <th>U-Ditch Reference Size</th>
                <th>
                  KETEBALAN <br /> Thicness (mm)
                </th>
                <th>
                  LEBAR <br /> width (mm)
                </th>
                <th>
                  PANJANG <br /> length (mm)
                </th>
                <th>
                  COAKAN <br />
                  Rebate (mm)
                </th>
                <th>Approx Weight (kg)</th>
                <th>Proof Load (Ton)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>CUL30X60T8</td>
                <td>CUL - 300</td>
                <td>80</td>
                <td>410</td>
                <td>600</td>
                <td>70</td>
                <td>45</td>
                <td>3</td>
              </tr>
              <tr>
                <td>2</td>
                <td>CUL40X60T10</td>
                <td>CUL - 400</td>
                <td>100</td>
                <td>540</td>
                <td>600</td>
                <td>75</td>
                <td>78</td>
                <td>3</td>
              </tr>
              <tr>
                <td>3</td>
                <td>CUL50X60T10</td>
                <td>CUL - 500</td>
                <td>100</td>
                <td>640</td>
                <td>600</td>
                <td>75</td>
                <td>90</td>
                <td>3</td>
              </tr>
              <tr>
                <td>4</td>
                <td>CUL60X60T10</td>
                <td>CUL - 600</td>
                <td>100</td>
                <td>740</td>
                <td>600</td>
                <td>95</td>
                <td>106</td>
                <td>3</td>
              </tr>
              <tr>
                <td>5</td>
                <td>CUL80X60T10</td>
                <td>CUL - 800</td>
                <td>100</td>
                <td>940</td>
                <td>600</td>
                <td>95</td>
                <td>137</td>
                <td>3</td>
              </tr>
              <tr>
                <td>6</td>
                <td>CUL100X60T10</td>
                <td>CUL - 1000</td>
                <td>100</td>
                <td>1180</td>
                <td>600</td>
                <td>100</td>
                <td>171</td>
                <td>3</td>
              </tr>
              <tr>
                <td>7</td>
                <td>CUL120X60T12</td>
                <td>CUL - 1200</td>
                <td>120</td>
                <td>1410</td>
                <td>600</td>
                <td>125</td>
                <td>247</td>
                <td>3</td>
              </tr>
              <tr>
                <td>8</td>
                <td>CUL140X60T15</td>
                <td>CUL - 1400</td>
                <td>150</td>
                <td>1680</td>
                <td>600</td>
                <td>155</td>
                <td>368</td>
                <td>3</td>
              </tr>
              <tr>
                <td>9</td>
                <td>CUL160X60T18</td>
                <td>CUL - 1600</td>
                <td>180</td>
                <td>1840</td>
                <td>600</td>
                <td>170</td>
                <td>487</td>
                <td>3</td>
              </tr>
            </tbody>
          </TableComponent>
          <Image
            src="/assets/images/cover-uditch-spec.png"
            alt="cover uditch"
            width={1000}
            height={1000}
            className="mt-5"
            loading="eager"
            priority={true}
          />
          <div className="font-normal">
            <p className="py-10 font-semibold text-center">
              Spesifikasi Produk
            </p>
            <dt>Mutu Beton : </dt>
            <dd>K-350</dd>
            <dt>Metode Produksi : </dt>
            <dd>Cetak basah dengan getaran frekuensi tinggi</dd>
            <dt>Baja Tulangan : </dt>
            <ul className="list-disc list-inside text-[15px] text-red-500">
              <li>
                <span className="text-black">
                  U-50 Hard Drawn Deformed Wire{"(HDDW)"}
                </span>
              </li>
              <li>
                <span className="text-black">
                  Tegangan Leleh = 4500 Kg/Cm<sup>2</sup>
                </span>
              </li>
              <li>
                <span className="text-black">
                  Tegangan Tarik = 5000 Kg/Cm<sup>2</sup>
                </span>
              </li>
            </ul>
          </div>
        </ProductSection>
        <ProductSection
          title="Box Culvert"
          imageName="box-culvert.jpg"
          hashUrl="box"
        >
          <span className="font-medium"> Box culvert </span> adalah salah satu
          jenis saluran air yang terbuat dari beton bertulang dan berbentuk
          persegi panjang. Box culvert biasanya digunakan untuk mengalirkan air
          di bawah jalan raya, rel kereta api, atau bangunan lainnya. <br />{" "}
          <br /> Box culvert memiliki beberapa keunggulan, seperti kuat, tahan
          lama, mudah dipasang, dan fleksibel. Box culvert juga memiliki
          beberapa fungsi, seperti mengurangi banjir, melindungi tanah dari
          erosi, dan meningkatkan kualitas air.
          <TableComponent title="Box Culvert Heavy Duty">
            <thead className="text-xs">
              <tr className="bg-gray-300">
                <th rowSpan={2}>NO</th>
                <th>KODE PRODUK</th>
                <th>TIPE</th>
                <th colSpan={5}>
                  DIMENSI <br /> Box Size
                </th>
                <th>
                  PERKIRAAN <br /> BERAT
                </th>
                <th colSpan={2}>
                  KAPASITAS BEBAN <br /> Load Capacity
                </th>
              </tr>
              <tr className="bg-orange-100">
                <th>Product Code</th>
                <th>TYPE</th>
                <th>L</th>
                <th>A</th>
                <th>B</th>
                <th>C</th>
                <th>T</th>
                <th>Approx Weight (Kg)</th>
                <th>BEBAN TITIK Proof Load (Ton)</th>
                <th>BEBAN GANDAR Axle Load (Ton)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>BCH40X40X100</td>
                <td>BC 400X400</td>
                <td>1000</td>
                <td>400</td>
                <td>230</td>
                <td>85</td>
                <td>85</td>
                <td>456</td>
                <td>10,5</td>
                <td>21</td>
              </tr>
              <tr>
                <td>2</td>
                <td>BCH50X50X100</td>
                <td>BC 500X500</td>
                <td>1000</td>
                <td>500</td>
                <td>300</td>
                <td>100</td>
                <td>90</td>
                <td>587</td>
                <td>10,5</td>
                <td>21</td>
              </tr>
              <tr>
                <td>3</td>
                <td>BCH60X60X100</td>
                <td>BC 600X600</td>
                <td>1000</td>
                <td>600</td>
                <td>400</td>
                <td>100</td>
                <td>95</td>
                <td>712</td>
                <td>10,5</td>
                <td>21</td>
              </tr>
              <tr>
                <td>4</td>
                <td>BCH80X80X100</td>
                <td>BC 800X800</td>
                <td>1000</td>
                <td>320</td>
                <td>560</td>
                <td>120</td>
                <td>150</td>
                <td>1509</td>
                <td>10,5</td>
                <td>21</td>
              </tr>
              <tr>
                <td>5</td>
                <td>BCH100X100X100</td>
                <td>BC 1000X1000</td>
                <td>1000</td>
                <td>1000</td>
                <td>680</td>
                <td>160</td>
                <td>150</td>
                <td>1870</td>
                <td>10,5</td>
                <td>21</td>
              </tr>
              <tr>
                <td>6</td>
                <td>BCH120X120X100</td>
                <td>BC 1200X1200</td>
                <td>1000</td>
                <td>1200</td>
                <td>900</td>
                <td>150</td>
                <td>150</td>
                <td>2230</td>
                <td>10,5</td>
                <td>21</td>
              </tr>
              <tr>
                <td>7</td>
                <td>BCH140X140X100</td>
                <td>BC 1400X1400</td>
                <td>1000</td>
                <td>1400</td>
                <td>1100</td>
                <td>150</td>
                <td>150</td>
                <td>2948</td>
                <td>10,5</td>
                <td>21</td>
              </tr>
              <tr>
                <td>8</td>
                <td>BCH150X150X100</td>
                <td>BC 1500X1500</td>
                <td>1000</td>
                <td>1500</td>
                <td>1160</td>
                <td>170</td>
                <td>175</td>
                <td>3102</td>
                <td>10,5</td>
                <td>21</td>
              </tr>
              <tr>
                <td>9</td>
                <td>BCH160X160X100</td>
                <td>BC 1600X1600</td>
                <td>1000</td>
                <td>1600</td>
                <td>1200</td>
                <td>200</td>
                <td>200</td>
                <td>3800</td>
                <td>10,5</td>
                <td>21</td>
              </tr>
              <tr>
                <td>10</td>
                <td>BCH200X200X100</td>
                <td>BC 2000X2000</td>
                <td>1000</td>
                <td>2000</td>
                <td>1560</td>
                <td>200</td>
                <td>200</td>
                <td>4640</td>
                <td>10,5</td>
                <td>21</td>
              </tr>
              <tr>
                <td>11</td>
                <td>BCH250X250X100</td>
                <td>BC 2500X2500</td>
                <td>1000</td>
                <td>2500</td>
                <td>2000</td>
                <td>250</td>
                <td>250</td>
                <td>7188</td>
                <td>10,5</td>
                <td>21</td>
              </tr>
              <tr>
                <td>12</td>
                <td>BCH300X300X100</td>
                <td>BC 3000X3000</td>
                <td>1000</td>
                <td>3000</td>
                <td>2500</td>
                <td>250</td>
                <td>250</td>
                <td>9945</td>
                <td>10,5</td>
                <td>21</td>
              </tr>
            </tbody>
          </TableComponent>
          <Image
            src="/assets/images/boxculvert-heavyduty.png"
            alt="boxculvert heavy duty"
            width={1000}
            height={1000}
            className="mt-5 md:w-[60%] mx-auto"
            loading="eager"
            priority={true}
          />
          <TableComponent title="Box Culvert Light Duty">
            <thead className="text-xs">
              <tr className="bg-gray-300">
                <th rowSpan={2}>NO</th>
                <th>KODE PRODUK</th>
                <th>TIPE</th>
                <th colSpan={5}>
                  DIMENSI <br /> Box Size
                </th>
                <th>
                  PERKIRAAN <br /> BERAT
                </th>
                <th colSpan={2}>
                  KAPASITAS BEBAN <br /> Load Capacity
                </th>
              </tr>
              <tr className="bg-orange-100">
                <th>Product Code</th>
                <th>TYPE</th>
                <th>L</th>
                <th>A</th>
                <th>B</th>
                <th>C</th>
                <th>T</th>
                <th>Approx Weight (Kg)</th>
                <th>BEBAN TITIK Proof Load (Ton)</th>
                <th>BEBAN GANDAR Axle Load (Ton)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  BCL
                  <br />
                  40X40X100
                </td>
                <td>
                  BC
                  <br />
                  400X400
                </td>
                <td>1000</td>
                <td>400</td>
                <td>230</td>
                <td>85</td>
                <td>85</td>
                <td>456</td>
                <td>7.25</td>
                <td>14.5</td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  BCL
                  <br />
                  50X50X100
                </td>
                <td>
                  BC
                  <br />
                  500X500
                </td>
                <td>1000</td>
                <td>500</td>
                <td>300</td>
                <td>100</td>
                <td>90</td>
                <td>587</td>
                <td>7.25</td>
                <td>14.5</td>
              </tr>
              <tr>
                <td>3</td>
                <td>
                  BCL
                  <br />
                  60X60X100
                </td>
                <td>
                  BC
                  <br />
                  600X600
                </td>
                <td>1000</td>
                <td>600</td>
                <td>400</td>
                <td>95</td>
                <td>95</td>
                <td>712</td>
                <td>7.25</td>
                <td>14.5</td>
              </tr>
              <tr>
                <td>4</td>
                <td>
                  BCL
                  <br />
                  80X80X100
                </td>
                <td>
                  BC
                  <br />
                  800X800
                </td>
                <td>1000</td>
                <td>800</td>
                <td>560</td>
                <td>120</td>
                <td>110</td>
                <td>1086</td>
                <td>7.25</td>
                <td>14.5</td>
              </tr>
              <tr>
                <td>5</td>
                <td>
                  BCL
                  <br />
                  100X100X100
                </td>
                <td>
                  BC
                  <br />
                  1000X1000
                </td>
                <td>1000</td>
                <td>1000</td>
                <td>680</td>
                <td>160</td>
                <td>120</td>
                <td>1485</td>
                <td>7.25</td>
                <td>14.5</td>
              </tr>
              <tr>
                <td>6</td>
                <td>
                  BCL
                  <br />
                  120X120X100
                </td>
                <td>
                  BC
                  <br />
                  1200X1200
                </td>
                <td>1000</td>
                <td>1200</td>
                <td>900</td>
                <td>150</td>
                <td>120</td>
                <td>1693</td>
                <td>7.25</td>
                <td>14.5</td>
              </tr>
              <tr>
                <td>7</td>
                <td>
                  BCL
                  <br />
                  150X150X100
                </td>
                <td>
                  BC
                  <br />
                  1500X1500
                </td>
                <td>1000</td>
                <td>1500</td>
                <td>1160</td>
                <td>170</td>
                <td>150</td>
                <td>2620</td>
                <td>7.25</td>
                <td>14.5</td>
              </tr>
              <tr>
                <td>8</td>
                <td>
                  BCL
                  <br />
                  160X160X100
                </td>
                <td>
                  BC
                  <br />
                  1600X1600
                </td>
                <td>1000</td>
                <td>1600</td>
                <td>1200</td>
                <td>200</td>
                <td>160</td>
                <td>2895</td>
                <td>7.25</td>
                <td>14.5</td>
              </tr>
            </tbody>
          </TableComponent>
          <Image
            src="/assets/images/boxculvert-lightduty.png"
            alt="boxculvert light duty"
            width={1000}
            height={1000}
            className="mt-5 md:w-[50%] mx-auto "
            loading="eager"
            priority={true}
          />
          <div className="font-normal">
            <p className="py-10 font-semibold text-center">
              Spesifikasi Produk
            </p>
            <dt>Mutu Beton : </dt>
            <dd>K-450</dd>
            <dt>Metode Produksi : </dt>
            <dd>Cetak basah dengan getaran frekuensi tinggi</dd>
            <dt>Baja Tulangan : </dt>
            <ul className="list-disc list-inside text-[15px] text-red-500">
              <li>
                <span className="text-black">
                  U-50 Hard Drawn Deformed Wire{"(HDDW)"}
                </span>
              </li>
              <li>
                <span className="text-black">
                  Tegangan Leleh = 4500 Kg/Cm<sup>2</sup>
                </span>
              </li>
              <li>
                <span className="text-black">
                  Tegangan Tarik = 5000 Kg/Cm<sup>2</sup>
                </span>
              </li>
            </ul>
          </div>
        </ProductSection>
        <ProductSection
          title="Sumur Resapan ( Porous Well )"
          imageName="porous-well.jpg"
          hashUrl="porouswell"
          height="h-[50vw] lg:h-[30vw]"
        >
          <span className="font-medium"> Sumur Resapan</span>, juga dikenal
          sebagai <span className="font-medium"> Porous Well</span>, adalah
          salah satu jenis sistem pengolahan air hujan atau sistem drainase yang
          dirancang untuk mengumpulkan dan menyimpan air hujan di tempat-tempat
          yang memungkinkan air tersebut meresap ke dalam tanah.
          <br />
          <br /> Sumur resapan terdiri dari sumur atau lubang yang diisi dengan
          batu atau material berpori yang memungkinkan air hujan untuk meresap
          ke dalam tanah di sekitarnya. <br />
          <br />
          Sumur resapan biasanya digunakan untuk mengurangi volume air hujan
          yang masuk ke saluran pembuangan permukaan, seperti selokan dan
          sungai, yang dapat menyebabkan banjir dan erosi tanah. Selain itu,
          sumur resapan juga dapat membantu meningkatkan kualitas air tanah
          dengan mengurangi aliran permukaan dan mengurangi risiko pencemaran
          air.
          <br />
          <br /> Sumur resapan biasanya dibangun di area yang memiliki curah
          hujan tinggi dan tanah yang mudah meresap air. Namun, penggunaan sumur
          resapan harus diperhatikan dengan baik untuk memastikan bahwa mereka
          tidak mengganggu struktur bangunan atau lingkungan sekitarnya, dan
          harus dirancang dan dibangun dengan benar untuk menghindari kebocoran
          atau kerusakan yang dapat merusak lingkungan.
          <TableComponent title="Sumur Resapan ( Porous Well ) ">
            <thead>
              <tr className="bg-gray-300">
                <th rowSpan={2} className="px-5">
                  NO
                </th>
                <th rowSpan={2} className="px-5">
                  KOMPONEN
                </th>
                <th>TEBAL</th>
                <th>DIAMETER DALAM</th>
                <th>DIAMETER LUAR</th>
                <th>TINGGI</th>
                <th>TINGGI EFEKTIF</th>
                <th>PERKIRAAN BERAT</th>
              </tr>
              <tr className="bg-orange-100">
                <th>
                  T <br />
                  mm
                </th>
                <th>
                  OD <br />
                  mm
                </th>
                <th>
                  ID <br />
                  mm
                </th>
                <th>
                  H <br />
                  mm
                </th>
                <th>
                  H (Effective)
                  <br /> mm
                </th>
                <th>
                  Approx Weight <br />
                  (Kg)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Well Cover No 1 (Type HD )</td>
                <td></td>
                <td>405</td>
                <td>324</td>
                <td>126</td>
                <td></td>
                <td>27</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Well Cover No 2 (Type HD )</td>
                <td>168</td>
                <td>1185</td>
                <td>314</td>
                <td>226</td>
                <td></td>
                <td>207</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Digest Well Porous 0 1000</td>
                <td>100</td>
                <td>1194</td>
                <td>1014</td>
                <td></td>
                <td>1000</td>
                <td>864</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Well Cover No 1</td>
                <td></td>
                <td>260</td>
                <td>200</td>
                <td>80</td>
                <td></td>
                <td>9</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Well Cover No 2</td>
                <td>100</td>
                <td>770</td>
                <td>260</td>
                <td>100</td>
                <td></td>
                <td>90</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Digest Well Porous 0 600</td>
                <td>80</td>
                <td>760</td>
                <td>600</td>
                <td></td>
                <td>1000</td>
                <td>428</td>
              </tr>
            </tbody>
          </TableComponent>
          <Image
            src="/assets/images/porous-well-spec.png"
            alt="porous well"
            width={1000}
            height={1000}
            className="mt-5 md:w-[60%] mx-auto"
            loading="eager"
            priority={true}
          />
          <div className="font-normal">
            <p className="py-10 font-semibold text-center">
              Spesifikasi Produk
            </p>
            <dt>Mutu Beton : </dt>
            <dd>K-350</dd>
            <dt>Metode Produksi : </dt>
            <dd>Cetak basah dengan getaran frekuensi tinggi</dd>
            <dt>Baja Tulangan : </dt>
            <ul className="list-disc list-inside text-[15px] text-red-500">
              <li>
                <span className="text-black">
                  U-50 Hard Drawn Deformed Wire{"(HDDW)"}
                </span>
              </li>
              <li>
                <span className="text-black">
                  Tegangan Leleh = 4500 Kg/Cm<sup>2</sup>
                </span>
              </li>
              <li>
                <span className="text-black">
                  Tegangan Tarik = 5000 Kg/Cm<sup>2</sup>
                </span>
              </li>
            </ul>
          </div>
        </ProductSection>
        <ProductSection
          title="Kansteen"
          hashUrl="kansteen"
          imageName="kansteen.png"
        >
          <span className="font-medium"> Kansteen </span>adalah elemen
          konstruksi yang digunakan untuk membatasi jalan, trotoar, median, atau
          area lain yang memerlukan pembatasan.
          <br />
          <br />
          Kansteen biasanya berbentuk persegi panjang dengan ukuran bervariasi
          sesuai dengan kebutuhan dan standar. Kansteen beton memiliki
          keunggulan seperti kuat, tahan lama, mudah dipasang, dan murah.
          Kansteen beton juga dapat diwarnai atau dicetak untuk meningkatkan
          estetika lingkungan.
          <TableComponent title="Kansteen">
            <thead>
              <tr className="bg-gray-300">
                <th rowSpan={2}>NO</th>
                <th>KODE PRODUK</th>
                <th rowSpan={2}>TYPE</th>
                <th colSpan={3}>DIMENSI PRODUK</th>
                <th>PERKIRAAN BERAT</th>
              </tr>
              <tr className="bg-orange-100">
                <th>Product Code</th>
                <th>
                  Length <br /> mm
                </th>
                <th>
                  Width <br /> mm
                </th>
                <th>
                  Height <br /> mm
                </th>
                <th>
                  Approx <br /> Weigth <br /> Kg
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-5">1</td>
                <td>KAP16X20X40</td>
                <td>Type 1</td>
                <td>400</td>
                <td>160</td>
                <td>200</td>
                <td>38</td>
              </tr>
              <tr>
                <td className="py-5">2</td>
                <td>KAP16X26X60</td>
                <td>Type 2</td>
                <td>600</td>
                <td>160</td>
                <td>260</td>
                <td>48</td>
              </tr>
              <tr>
                <td className="py-5">3</td>
                <td>KAP15X30X60</td>
                <td>Type 3</td>
                <td>600</td>
                <td>150</td>
                <td>300</td>
                <td>63</td>
              </tr>
              <tr>
                <td className="py-5">4</td>
                <td>KAP20X30X60</td>
                <td>Type 4</td>
                <td>600</td>
                <td>200</td>
                <td>300</td>
                <td>90</td>
              </tr>
              <tr>
                <td className="py-5">5</td>
                <td>KAP21X30X60</td>
                <td>Type 5</td>
                <td>600</td>
                <td>210</td>
                <td>300</td>
                <td>94</td>
              </tr>
              <tr>
                <td className="py-5">6</td>
                <td>KAP22X25X60</td>
                <td>Type 6</td>
                <td>600</td>
                <td>220</td>
                <td>250</td>
                <td>83</td>
              </tr>
              <tr>
                <td className="py-5">7</td>
                <td>KAP25X30X60</td>
                <td>Type 7</td>
                <td>600</td>
                <td>250</td>
                <td>300</td>
                <td>103</td>
              </tr>
            </tbody>
          </TableComponent>
          <Image
            src="/assets/images/kansteen-spec.png"
            alt="kansteen"
            width={1000}
            height={1000}
            className="mt-5 md:w-[90%] mx-auto"
            loading="eager"
            priority={true}
          />
          <div className="font-normal">
            <p className="py-10 font-semibold text-center">
              Spesifikasi Produk
            </p>
            <dt>Mutu Beton : </dt>
            <dd>K-300</dd>
            <dt>Metode Produksi : </dt>
            <dd>Cetak basah dengan getaran frekuensi tinggi</dd>
            <dt>Baja Tulangan : </dt>
            <ul className="list-disc list-inside text-[15px] text-red-500">
              <li>
                <span className="text-black">
                  U-50 Hard Drawn Deformed Wire{"(HDDW)"}
                </span>
              </li>
              <li>
                <span className="text-black">
                  Tegangan Leleh = 4500 Kg/Cm<sup>2</sup>
                </span>
              </li>
              <li>
                <span className="text-black">
                  Tegangan Tarik = 5000 Kg/Cm<sup>2</sup>
                </span>
              </li>
            </ul>
          </div>
        </ProductSection>
        <ProductSection
          title="Barrier ( MCB )"
          hashUrl="barrier"
          imageName="mcb1.jpg"
        >
          <span className="font-medium"> Median Concrete Barrier</span> adalah
          sebuah struktur pembatas yang terbuat dari beton dan dipasang di
          tengah jalan raya untuk mencegah kendaraan melintas ke jalur yang
          berlawanan arah.
          <br />
          <br /> Median concrete barrier memiliki beberapa keuntungan, seperti
          meningkatkan keselamatan pengendara, mengurangi risiko tabrakan
          frontal, dan mempertahankan kapasitas jalan.
          <br />
          <br /> Median concrete barrier juga memiliki beberapa kelemahan,
          seperti meningkatkan biaya pembangunan dan pemeliharaan, membatasi
          akses darurat dan pejalan kaki, dan menimbulkan dampak visual dan
          lingkungan.
          <TableComponent title="Barrier ( MCB )">
            <thead>
              <tr className="bg-gray-300">
                <th rowSpan={2}>NO</th>
                <th>KODE PRODUK</th>
                <th rowSpan={2}>TYPE</th>
                <th colSpan={3}>DIMENSI PRODUK</th>
                <th>PERKIRAAN BERAT</th>
              </tr>
              <tr className="bg-orange-100">
                <th>Product Code</th>
                <th>
                  Length <br /> mm
                </th>
                <th>
                  Width <br /> mm
                </th>
                <th>
                  Height <br /> mm
                </th>
                <th>
                  Approx <br /> Weigth <br /> Kg
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-5">1</td>
                <td>BAR40X60</td>
                <td>Type 1</td>
                <td>1000</td>
                <td>400</td>
                <td>600</td>
                <td>280</td>
              </tr>
              <tr>
                <td className="py-5">2</td>
                <td>BAR50X80</td>
                <td>Type 2</td>
                <td>1000</td>
                <td>500</td>
                <td>800</td>
                <td>610</td>
              </tr>
              <tr>
                <td className="py-5">3</td>
                <td>BAR60X80</td>
                <td>Type 3</td>
                <td>1000</td>
                <td>600</td>
                <td>800</td>
                <td>620</td>
              </tr>
              <tr>
                <td className="py-5">4</td>
                <td>BAR60X100</td>
                <td>Type 3</td>
                <td>1000</td>
                <td>600</td>
                <td>1000</td>
                <td>746</td>
              </tr>
            </tbody>
          </TableComponent>
          <Image
            src="/assets/images/mcb-spec.png"
            alt="mcb"
            width={1000}
            height={1000}
            className="mt-5 md:w-[70%] mx-auto"
            loading="eager"
            priority={true}
          />
          <div className="font-normal">
            <p className="py-10 font-semibold text-center">
              Spesifikasi Produk
            </p>
            <dt>Mutu Beton : </dt>
            <dd>K-350</dd>
            <dt>Metode Produksi : </dt>
            <dd>Cetak basah dengan getaran frekuensi tinggi</dd>
            <dt>Baja Tulangan : </dt>
            <ul className="list-disc list-inside text-[15px] text-red-500">
              <li>
                <span className="text-black">
                  U-50 Hard Drawn Deformed Wire{"(HDDW)"}
                </span>
              </li>
              <li>
                <span className="text-black">
                  Tegangan Leleh = 4500 Kg/Cm<sup>2</sup>
                </span>
              </li>
              <li>
                <span className="text-black">
                  Tegangan Tarik = 5000 Kg/Cm<sup>2</sup>
                </span>
              </li>
            </ul>
          </div>
        </ProductSection>
        <ProductSection
          title="Pagar Beton ( CONCRETE FENCE )"
          hashUrl="fence"
          imageName="pagarbeton.jpg"
        >
          <span className="font-medium"> Pagar beton</span> adalah jenis pagar
          yang terbuat dari beton, yaitu campuran semen, pasir, kerikil, dan
          air. Pagar beton memiliki keunggulan seperti kuat, tahan lama, tahan
          api, dan mudah dipasang.
          <br />
          <br /> Pagar beton juga dapat dibentuk sesuai dengan keinginan dan
          kebutuhan pengguna, misalnya dengan motif, warna, atau ukuran
          tertentu. Pagar beton cocok digunakan untuk melindungi area perumahan,
          industri, pertanian, atau fasilitas umum lainnya.
          <TableComponent title="Pagar Beton ( CONCRETE FENCE )">
            <thead>
              <tr className="bg-gray-300">
                <th rowSpan={2}>NO</th>
                <th>KODE PRODUK</th>
                <th rowSpan={2}>TYPE</th>
                <th colSpan={3}>DIMENSI PRODUk</th>
                <th>PERKIRAAN BERAT</th>
              </tr>
              <tr className="bg-orange-100">
                <th>Product Code</th>
                <th>H mm</th>
                <th>L mm</th>
                <th>T mm</th>
                <th>
                  Approx Weight <br />
                  Kg
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-5">1</td>
                <td>PAN240405</td>
                <td>2400X400X50</td>
                <td>400</td>
                <td>2400</td>
                <td>50</td>
                <td>121</td>
              </tr>
              <tr>
                <td className="py-5">2</td>
                <td>PAN240408</td>
                <td>2400X400X80</td>
                <td>400</td>
                <td>2400</td>
                <td>80</td>
                <td>194</td>
              </tr>
            </tbody>
          </TableComponent>
          <Image
            src="/assets/images/pagarbeton-spec.png"
            alt="kansteen"
            width={1000}
            height={1000}
            className="mt-5 md:w-[70%] mx-auto"
            loading="eager"
          priority={true}
          />
          <div className="font-normal">
            <p className="py-10 font-semibold text-center">
              Spesifikasi Produk
            </p>
            <dt>Mutu Beton : </dt>
            <dd>K-350</dd>
            <dt>Metode Produksi : </dt>
            <dd>Cetak basah dengan getaran frekuensi tinggi</dd>
            <dt>Baja Tulangan : </dt>
            <ul className="list-disc list-inside text-[15px] text-red-500">
              <li>
                <span className="text-black">
                  U-50 Hard Drawn Deformed Wire{"(HDDW)"}
                </span>
              </li>
              <li>
                <span className="text-black">
                  Tegangan Leleh = 4500 Kg/Cm<sup>2</sup>
                </span>
              </li>
              <li>
                <span className="text-black">
                  Tegangan Tarik = 5000 Kg/Cm<sup>2</sup>
                </span>
              </li>
            </ul>
          </div>
        </ProductSection>
        <ProductSection
          title="Tiang Kolom"
          hashUrl="tiang"
          imageName="tiangkolom.jpg"
        >
          <span className="font-medium"> Tiang kolom</span> dalam beton adalah
          struktur penyangga yang terbuat dari beton bertulang besi yang
          berfungsi untuk menopang beban lantai dan atap di atasnya. <br />
          <br />
          Tiang kolom dalam beton harus dirancang dengan baik agar dapat menahan
          gaya tekan dan lentur yang timbul akibat beban mati dan beban hidup.
          Tiang kolom dalam beton juga harus memenuhi persyaratan keamanan,
          kekuatan, dan keindahan bangunan.
          <TableComponent title="Tiang Kolom">
            <thead>
              <tr className="bg-gray-300">
                <th rowSpan={2}>NO</th>
                <th>KODE PRODUK</th>
                <th rowSpan={2}>TYPE</th>
                <th colSpan={7}>DIMENSI PRODUK</th>
                <th>PERKIRAAN BERAT</th>
              </tr>
              <tr className="bg-orange-100">
                <th>Product Code</th>
                <th>
                  H <br />
                  mm
                </th>
                <th>
                  H{"'"} <br />
                  mm
                </th>
                <th>
                  W1 <br />
                  mm
                </th>
                <th>
                  W2 <br />
                  mm
                </th>
                <th>
                  m <br />
                  mm
                </th>
                <th>
                  W4 <br />
                  mm
                </th>
                <th>
                  C <br />
                  mm
                </th>
                <th>
                  Approx Weight <br />
                  Kg
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>CL 2700X200X160</td>
                <td rowSpan={3}>T K 200X160</td>
                <td>2400</td>
                <td>400</td>
                <td>200</td>
                <td>160</td>
                <td>55</td>
                <td>50</td>
                <td>15</td>
                <td>182</td>
              </tr>
              <tr>
                <td>2</td>
                <td>CL 3200X200X160</td>
                <td>3200</td>
                <td>400</td>
                <td>200</td>
                <td>160</td>
                <td>55</td>
                <td>50</td>
                <td>15</td>
                <td>216</td>
              </tr>
              <tr>
                <td>3</td>
                <td>CL 4000X200X160</td>
                <td>4000</td>
                <td>400</td>
                <td>200</td>
                <td>160</td>
                <td>55</td>
                <td>50</td>
                <td>15</td>
                <td>270</td>
              </tr>
              <tr>
                <td>4</td>
                <td>CL 2700X180X160</td>
                <td rowSpan={3}>T K 180X160</td>
                <td>2400</td>
                <td>400</td>
                <td>180</td>
                <td>160</td>
                <td>55</td>
                <td>50</td>
                <td>15</td>
                <td>161</td>
              </tr>
              <tr>
                <td>5</td>
                <td>CL 3200X180X160</td>
                <td>3200</td>
                <td>400</td>
                <td>180</td>
                <td>160</td>
                <td>55</td>
                <td>50</td>
                <td>15</td>
                <td>191</td>
              </tr>
              <tr>
                <td>6</td>
                <td>CL 4000X180X160</td>
                <td>4000</td>
                <td>400</td>
                <td>180</td>
                <td>160</td>
                <td>55</td>
                <td>50</td>
                <td>15</td>
                <td>238</td>
              </tr>
            </tbody>
          </TableComponent>
          <Image
            src="/assets/images/tiangkolom-spec.png"
            alt="tiang kolom"
            width={1000}
            height={1000}
            className="mt-5 md:w-[70%] mx-auto"
            loading="eager"
          priority={true}
          />
          <div className="font-normal">
            <p className="py-10 font-semibold text-center">
              Spesifikasi Produk
            </p>
            <dt>Mutu Beton : </dt>
            <dd>K-350</dd>
            <dt>Metode Produksi : </dt>
            <dd>Cetak basah dengan getaran frekuensi tinggi</dd>
            <dt>Baja Tulangan : </dt>
            <ul className="list-disc list-inside text-[15px] text-red-500">
              <li>
                <span className="text-black">
                  U-50 Hard Drawn Deformed Wire{"(HDDW)"}
                </span>
              </li>
              <li>
                <span className="text-black">
                  Tegangan Leleh = 4500 Kg/Cm<sup>2</sup>
                </span>
              </li>
              <li>
                <span className="text-black">
                  Tegangan Tarik = 5000 Kg/Cm<sup>2</sup>
                </span>
              </li>
            </ul>
          </div>
        </ProductSection>
        <ProductSection
          title="Pipa Buis"
          hashUrl="pipabuis"
          imageName="pipabuis.jpg"
        >
          <span className="font-medium">Pipa Buis </span>adalah jenis pipa yang
          terbuat dari beton bertulang atau beton pracetak yang berbentuk
          silinder. Pipa buis biasanya digunakan untuk saluran air, irigasi,
          drainase, atau pembuangan limbah.
          <br />
          <br /> Pipa buis memiliki keunggulan seperti kuat, tahan lama, mudah
          dipasang, dan murah. Pipa buis juga dapat disesuaikan dengan ukuran
          dan bentuk yang diinginkan sesuai dengan kebutuhan proyek.
          <TableComponent title="Pipa Buis Full">
            <thead>
              <tr className="bg-gray-300">
                <th rowSpan={2}>NO</th>
                <th rowSpan={2}>Type Produk</th>
                <th colSpan={3}>Dimensi</th>
                <th rowSpan={2}>
                  BerBt <br />
                  Pr^^u^ <br />
                  (Kg)
                </th>
              </tr>
              <tr className="bg-orange-100">
                <th>
                  Diamater D <br /> (mm)
                </th>
                <th>Tebal T (mm)</th>
                <th>Panjang L (mm)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Buis 200</td>
                <td>200</td>
                <td>35</td>
                <td>1000</td>
                <td>75</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Buis 300</td>
                <td>300</td>
                <td>40</td>
                <td>1000</td>
                <td>100</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Buis 400</td>
                <td>400</td>
                <td>50</td>
                <td>1000</td>
                <td>175</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Buis 500</td>
                <td>500</td>
                <td>55</td>
                <td>1000</td>
                <td>250</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Buis 600</td>
                <td>600</td>
                <td>60</td>
                <td>1000</td>
                <td>300</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Buis 800</td>
                <td>800</td>
                <td>80</td>
                <td>1000</td>
                <td>550</td>
              </tr>
            </tbody>
          </TableComponent>
          <TableComponent title="Pipa Buis Half">
            <thead>
              <tr className="bg-gray-300">
                <th rowSpan={2}>NO</th>
                <th rowSpan={2}>Type Produk</th>
                <th colSpan={3}>Dimensi</th>
                <th rowSpan={2}>
                  Berat <br />
                  Pit^dud- <br />
                  (Kg)
                </th>
              </tr>
              <tr className="bg-orange-100">
                <th>
                  Diamater D <br /> (mm)
                </th>
                <th>Tebal T (mm)</th>
                <th>Panjang L (mm)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Buis 200</td>
                <td>200</td>
                <td>35</td>
                <td>1000</td>
                <td>37,5</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Buis 300</td>
                <td>300</td>
                <td>40</td>
                <td>1000</td>
                <td>50</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Buis 400</td>
                <td>400</td>
                <td>50</td>
                <td>1000</td>
                <td>87,5</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Buis 500</td>
                <td>500</td>
                <td>55</td>
                <td>1000</td>
                <td>125</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Buis 600</td>
                <td>600</td>
                <td>60</td>
                <td>1000</td>
                <td>150</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Buis 800</td>
                <td>800</td>
                <td>80</td>
                <td>1000</td>
                <td>275</td>
              </tr>
            </tbody>
          </TableComponent>
          <Image
            src="/assets/images/pipabuis-spec.png"
            alt="pipa buis"
            width={1000}
            height={1000}
            className="mt-5 md:w-[70%] mx-auto"
            loading="eager"
          priority={true}
          />
          <div className="font-normal">
            <p className="py-10 font-semibold text-center">
              Spesifikasi Produk
            </p>
            <dt>Mutu Beton : </dt>
            <dd>K-225</dd>
            <dt>Metode Produksi : </dt>
            <dd>Semi Dry Cast</dd>
          </div>
        </ProductSection>
        <ProductSection
          title="Paving Block"
          hashUrl="pavingblock"
          imageName="pavingblock.jpg"
        >
          <span className="font-medium">Paving block </span>adalah salah satu
          jenis bahan bangunan yang digunakan untuk menutup permukaan tanah
          dengan cara menyusun blok-blok beton berbentuk persegi atau segi
          lainnya. <br />
          <br />
          Paving block memiliki beberapa keunggulan, seperti tahan lama, mudah
          dipasang dan dilepas, dapat menyerap air hujan, dan memberikan
          estetika yang menarik. Paving block biasanya digunakan untuk membuat
          trotoar, jalan masuk, taman, halaman, dan tempat parkir.
          <TableComponent title="Paving Block">
            <thead>
              <tr className="bg-gray-300">
                <th className="py-5">NO</th>
                <th>TYPE</th>
                <th>UKURAN</th>
                <th>ISI PER M2</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>HEXAGON</td>
                <td>
                  20x20x6
                  <br />
                  20x20x8
                </td>
                <td>25</td>
              </tr>
              <tr>
                <td>2</td>
                <td>UBIN SET</td>
                <td>
                  21x21x6
                  <br />
                  21x21x8
                </td>
                <td>
                  22
                  <br />
                  5,5
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>TRIHEX</td>
                <td>
                  19,7x9,6x6
                  <br />
                  19,7x9,6x8
                </td>
                <td>39</td>
              </tr>
              <tr>
                <td>4</td>
                <td>UBIN KECIL</td>
                <td>
                  10,5x10,5x6
                  <br />
                  10,5x10,5x8
                </td>
                <td>88</td>
              </tr>
              <tr>
                <td>5</td>
                <td>UBIN BESAR</td>
                <td>
                  21x21x6
                  <br />
                  21x21x8
                </td>
                <td>22</td>
              </tr>
              <tr>
                <td>6</td>
                <td>
                  GRASSBLOCK <br /> LB 8
                </td>
                <td>
                  TEBAL 6<br />
                  TEBAL 8
                </td>
                <td>7,5</td>
              </tr>
              <tr>
                <td>7</td>
                <td>
                  GRASSBLOCK <br /> LB 5
                </td>
                <td>TEBAL 8</td>
                <td>6,25</td>
              </tr>
              <tr>
                <td>8</td>
                <td>TOPI USKUP</td>
                <td>
                  TEBAL 6<br />
                  TEBAL 8
                </td>
                <td>6,25</td>
              </tr>
            </tbody>
          </TableComponent>
        </ProductSection>
        <ProductSection
          title="Sheet Pile"
          imageName="sheet-pile.jpg"
          hashUrl="sheetpile"
        >
          <span className="font-medium"> Sheet pile </span>adalah material
          konstruksi yang berbentuk lembaran tipis dan panjang yang digunakan
          untuk membuat dinding penahan tanah atau air. Sheet pile biasanya
          terbuat dari baja, beton, atau plastik dan dipasang dengan cara
          ditancapkan ke dalam tanah. <br />
          <br /> Sheet pile memiliki beberapa keuntungan, seperti mudah
          dipasang, hemat biaya, dan tahan lama. Sheet pile juga memiliki
          beberapa jenis yang berbeda sesuai dengan fungsi dan cara
          pemasangannya.
          <br />
          <br />
          Jenis-jenis sheet pile antara lain:
          <br />
          <br />
          <ul className="px-4 text-red-500 list-disc">
            <li>
              <div className="text-black">
                Kantilever: sheet pile yang mampu menahan beban lateral dengan
                memanfaatkan kekuatan dari tanah yang ada di depan dinding.
                Jenis ini cocok untuk kondisi tanah yang keras dan kedalaman
                penancapan yang tidak terlalu dalam.
              </div>
            </li>
            <li>
              <div className="text-black">
                Anker: sheet pile yang membutuhkan bantuan dari elemen lain,
                seperti tiang pancang atau kabel baja, untuk menahan beban
                lateral. Jenis ini cocok untuk kondisi tanah yang lunak atau
                kedalaman penancapan yang sangat dalam
              </div>
            </li>
            <li>
              <div className="text-black">
                Sekat: sheet pile yang digunakan untuk memisahkan dua ruang
                berbeda, seperti saluran air atau ruang bawah tanah. Jenis ini
                membutuhkan kedap air yang baik dan kuat tekan yang tinggi.
              </div>
            </li>
          </ul>
          <TableComponent title="Corrugated Sheet Pile">
            <thead>
              <tr className="bg-gray-300">
                <th className="px-10 md:px-0">Type</th>
                <th>
                  Height <br /> H <br />
                  (mm)
                </th>
                <th>
                  Thickness <br /> t <br />
                  (mm)
                </th>
                <th>
                  Width
                  <br />
                  (mm)
                </th>
                <th>
                  Concrete <br /> Area <br />
                  (cm<sup>2</sup>)
                </th>
                <th>
                  Weight
                  <br /> (kg/m)
                </th>
                <th>
                  Length
                  <br /> (m)
                </th>
                <th>
                  Cracking
                  <br />
                  Moment <br />
                  (t.m)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  W-325 A 1000
                  <br />
                  W-325 B 1000
                </td>
                <td>325</td>
                <td>110</td>
                <td>996</td>
                <td>1314</td>
                <td>329</td>
                <td>
                  6 ~ 13
                  <br />
                  6~14
                </td>
                <td>
                  11.4
                  <br />
                  13.3
                </td>
              </tr>
              <tr>
                <td>
                  W-350 A 1000
                  <br />
                  W-350 B 1000
                </td>
                <td>350</td>
                <td>120</td>
                <td>996</td>
                <td>1467</td>
                <td>368</td>
                <td>
                  6 ~ 15
                  <br />6 ~ 15
                </td>
                <td>
                  15.6
                  <br />
                  17.0
                </td>
              </tr>
              <tr>
                <td>
                  W-400 A 1000
                  <br />
                  W-400 B 1000
                </td>
                <td>350</td>
                <td>120</td>
                <td>996</td>
                <td>1597</td>
                <td>400</td>
                <td>
                  6 ~ 16
                  <br />6 ~ 16
                </td>
                <td>
                  20.1
                  <br />
                  23.4
                </td>
              </tr>
              <tr>
                <td>
                  W-450 A 1000
                  <br />
                  W-450 B 1000
                </td>
                <td>450</td>
                <td>120</td>
                <td>996</td>
                <td>1834</td>
                <td>459</td>
                <td>
                  6 ~ 17
                  <br />6 ~ 17
                </td>
                <td>
                  26.9
                  <br />
                  30.7
                </td>
              </tr>
              <tr>
                <td>
                  W-500 A 1000
                  <br />
                  W-500 B 1000
                </td>
                <td>500</td>
                <td>120</td>
                <td>996</td>
                <td>1817</td>
                <td>455</td>
                <td>
                  6 ~ 18
                  <br />6 ~ 19
                </td>
                <td>
                  35.2
                  <br />
                  40.4
                </td>
              </tr>
              <tr>
                <td>
                  W-600 A 1000
                  <br />
                  W-600 B 1000
                </td>
                <td>600</td>
                <td>120</td>
                <td>996</td>
                <td>2077</td>
                <td>525</td>
                <td>
                  6 ~ 20
                  <br />6 ~ 21
                </td>
                <td>
                  50.6
                  <br />
                  59.6
                </td>
              </tr>
            </tbody>
          </TableComponent>
          <Image
            src="/assets/images/sheetpile-corrugated.png"
            alt="Sheet Pile Corrugated"
            width={1000}
            height={1000}
            className="mt-5"
            loading="eager"
          priority={true}
          />
          <TableComponent title="Flat Sheet Pile">
            <thead>
              <tr className="bg-gray-300">
                <th rowSpan={2}>
                  Size
                  <br />
                  (cm)
                </th>
                <th rowSpan={2}>
                  Weight
                  <br />
                  (kg/m)
                </th>
                <th rowSpan={2}>Type</th>
                <th rowSpan={2}>
                  Length
                  <br />
                  (m)
                </th>
                <th colSpan={2}>Bending Moment</th>
              </tr>
              <tr className="bg-orange-100">
                <th>
                  Crack
                  <br />
                  (t.m)
                </th>
                <th>
                  Nominal
                  <br />
                  (t.m)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>50 x 22</td>
                <td>275</td>
                <td>
                  A<br />
                  B<br />
                  C<br />
                  D<br />
                  E<br />
                  F<br />
                  G<br />
                  H<br />
                  I<br />
                </td>
                <td>
                  6 ~ 11
                  <br />
                  6 ~ 12
                  <br />
                  6 ~ 13
                  <br />
                  6 ~ 13
                  <br />
                  6 ~ 14
                  <br />
                  6 ~ 15
                  <br />
                  6 ~ 15
                  <br />
                  6 ~ 16
                  <br />
                  6 ~ 16
                  <br />
                </td>
                <td>
                  3.1
                  <br />
                  3.5
                  <br />
                  3.9
                  <br />
                  4.2
                  <br />
                  4.8
                  <br />
                  4.9
                  <br />
                  5.4
                  <br />
                  5.8
                  <br />
                  6.6
                  <br />
                </td>
                <td>
                  4.9
                  <br />
                  6.6
                  <br />
                  8.3
                  <br />
                  8.9
                  <br />
                  11.2
                  <br />
                  11.9
                  <br />
                  13.5
                  <br />
                  14.9
                  <br />
                  17.9
                  <br />
                </td>
              </tr>
              <tr>
                <td>50 x 32</td>
                <td>400</td>
                <td>
                  A<br />
                  B<br />
                  C<br />
                  D<br />
                  E<br />
                  F<br />
                  G<br />
                  H<br />
                  I<br />
                </td>
                <td>
                  6 ~ 14
                  <br />
                  6 ~ 14
                  <br />
                  6 ~ 15
                  <br />
                  6 ~ 15
                  <br />
                  6 ~ 16
                  <br />
                  6 ~ 17
                  <br />
                  6 ~ 18
                  <br />
                  6 ~ 19
                  <br />
                  6 ~ 20
                  <br />
                </td>
                <td>
                  6.3
                  <br />
                  6.9
                  <br />
                  7.6
                  <br />
                  8.1
                  <br />
                  8.9
                  <br />
                  9.5
                  <br />
                  10.7
                  <br />
                  11.9
                  <br />
                  13.1
                  <br />
                </td>
                <td>
                  9.6
                  <br />
                  12.1
                  <br />
                  14.5
                  <br />
                  16.3
                  <br />
                  19.3
                  <br />
                  21.7
                  <br />
                  26.1
                  <br />
                  30.4
                  <br />
                  34.8
                  <br />
                </td>
              </tr>
            </tbody>
          </TableComponent>
          <Image
            src="/assets/images/sheetpile-flat.png"
            alt="Sheet Pile Flat"
            width={1000}
            height={1000}
            className="mt-5"
            loading="eager"
          priority={true}
          />
        </ProductSection>
        <ProductSection
          title="Square Pile"
          imageName="square-pile.jpg"
          hashUrl="squarepile"
        >
          <span className="font-medium"> Square Piles </span> adalah salah satu
          jenis tiang pancang yang digunakan untuk mendukung struktur bangunan
          di atas tanah yang tidak stabil atau lemah. Square Piles berbentuk
          persegi dan terbuat dari beton bertulang yang dicetak di pabrik.{" "}
          <br />
          <br /> Square Piles memiliki beberapa keuntungan, antara lain:
          <br />
          <br />
          <ul className="px-4 text-red-500 list-disc">
            <li>
              <div className="text-black">
                Kapasitas beban lebih tinggi karena luas penampang yang besar
                dan penguatan yang kuat.
              </div>
            </li>
            <li>
              <div className="text-black">
                Tahan terhadap beban lateral dan momen lentur yang mungkin
                timbul akibat gempa bumi atau angin kencang.
              </div>
            </li>
            <li>
              <div className="text-black">
                Mudah dipasang dengan menggunakan alat pemukul atau vibrator
                yang sesuai dengan ukuran dan berat tiang.
              </div>
            </li>
            <li>
              <div className="text-black">
                Dapat digunakan untuk berbagai jenis tanah, baik lunak maupun
                keras, dengan memilih panjang dan diameter yang tepat.
              </div>
            </li>
          </ul>
          <br />
          <br />
          Square Piles biasanya digunakan untuk proyek-proyek besar seperti
          jembatan, gedung bertingkat, bendungan, pelabuhan, dan lain-lain.
          Square Piles membutuhkan perencanaan dan perhitungan yang cermat untuk
          menjamin keamanan dan kinerja struktur bangunan. Square Piles juga
          memerlukan perawatan dan inspeksi berkala untuk mencegah kerusakan
          atau retak yang dapat mengurangi kapasitas beban tiang.
          <TableComponent title="Square Pile">
            <thead>
              <tr className="bg-gray-300">
                <th className="py-5">
                  Ukuran
                  <br />
                  Sisi
                  <br />
                  (cm)
                </th>
                <th>Jumlah Tulangan</th>
                <th>Mutu Beton</th>
                <th>Mutu baja</th>
                <th>
                  Luas
                  <br />
                  Penampang
                  <br />
                  (cm<sup>2</sup>)
                </th>
                <th>
                  Daya Dukung
                  <br />
                  Ujin Tiang
                  <br />
                  (Kg)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-5">28</td>
                <td>3xD16</td>
                <td>K 500</td>
                <td>U 39</td>
                <td>335.0</td>
                <td>30.000.00</td>
              </tr>
              <tr>
                <td className="py-5">30</td>
                <td>3xD16</td>
                <td>K 500</td>
                <td>U 39</td>
                <td>320.0</td>
                <td>30.000.00</td>
              </tr>
              <tr>
                <td className="py-5">32</td>
                <td>3xD16</td>
                <td>K 500</td>
                <td>U 39</td>
                <td>440.0</td>
                <td>40.000.00</td>
              </tr>
            </tbody>
          </TableComponent>
          <p className="py-10 font-semibold text-center">
            Spesifikasi Standar Solid Square Pile
          </p>
          <Image
            src="/assets/images/square-pile-tables.png"
            alt="square pile table"
            width={1000}
            height={1000}
            loading="eager"
          priority={true}
          />
        </ProductSection>
      </motion.div>
    </Content>
  );
}
