import TitleSection from "@/components/TitleSection";

import Content from "@/components/Content";
import Image from "next/image";
import { motion } from "framer-motion";

import ProductSection from "@/components/ProductSection";

import { Link } from "react-scroll";
import { poppins } from "@/components/data/fontData";

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
          <div className="border-2 border-grey md:w-[40%] p-10 my-14">
            <ul className="font-medium text-[15px] list-decimal list-inside">
              <span className="font-bold text-2xl">Produk</span>
              <Link
                to="uditch"
                smooth={true}
                spy={true}
                offset={-100}
                duration={500}
              >
                <li className="group pt-2 cursor-pointer">
                  <span className="bg-left-bottom bg-gradient-to-r from-red-500 to-red-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                    U Ditch
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
                <li className="group cursor-pointer">
                  <span className="bg-left-bottom bg-gradient-to-r from-red-500 to-red-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                    Box Culvert
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
                <li className="group cursor-pointer">
                  <span className="bg-left-bottom bg-gradient-to-r from-red-500 to-red-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                    Cover U Ditch
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
                <li className="group cursor-pointer">
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
                <li className="group cursor-pointer">
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
          <ul className="list-disc text-red-500 px-4">
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
          <p className="text-center py-5 font-semibold">
            Ukuran Produk
          </p>
          <div className="relative overflow-x-auto">
            <table className={` w-full text-center text-sm text-black`}>
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
            </table>
          </div>
          <div className='font-normal'>
            <p className="text-center py-5 font-semibold">Spesifikasi Produk</p>
            <dt>Mutu Beton : </dt>
            <dd>K-400</dd>
            <dt>Metode Produksi : </dt>
            <dd>Cetak basah dengan getaran frekuensi tinggi</dd>
            <dt>Baja Tulangan : </dt>
            <ul className="list-disc list-inside text-[15px] text-red-500">
              <li>
                <span className="text-black">
                  U-50 Hard Drawn Deformed {"(HDDW)"}
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
          <ul className="list-disc text-red-500 px-4">
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
          <ul className="list-disc text-red-500 px-4">
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
        </ProductSection>
      </motion.div>
    </Content>
  );
}
