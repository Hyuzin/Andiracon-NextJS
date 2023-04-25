import TitleSection from "@/components/TitleSection";

import Content from "@/components/Content";
import Image from "next/image";
import { motion } from "framer-motion";

import ProductSection from "@/components/ProductSection";

import { Link } from "react-scroll";
import { poppins } from "@/components/data/fontData";

export default function Product() {
  return (
    <Content title="Produk">
      <TitleSection title="Produk" />
      <motion.div
        className={`max-w-[53rem] mx-auto px-5 pt-20`}
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
          ini.
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
