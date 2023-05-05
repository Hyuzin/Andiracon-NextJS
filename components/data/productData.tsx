const blurUrl = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAE9Aq4DASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwCzRRRSEFLSUUALRRRQAUUUUDCiiimAtFJS0AFFFFAC0UlFAC0UUUAFFFFABRRRQAUlFFABRRRQMKSiigBKKKKAEpKWkoASiikoASkNLSUAIaQ0tJQISmmlNIaAENNNONNNACGmmlNIaAGmmmnGmmgBppDSmmmgQhpppTSGgBpphpxppoENNNNONNNIBppppxppoENNNNONNNAhppppxpppCEpKWkoEFLSUtIYtKKQUoplDhSikFLQMcKUUgpRTGOFKKQUooGKKdTRTqBi0opKUUwFpaSloAWlpKWgApaSloGFFFFAC0UUUAblFJRSIFooooAKKKKAFopKKYxaKKKACiiigBaKSigBaKKKACiiigBaKSigAooooAKKKKACikooGFFFJQAUlLSUAFJRRQAlJS0lACUhpaSgBKSg0hoEIaQ0ppDQAhpppTSGgBppDSmmmgBDTTSmkNADTTTTjTTQIaaaacaaaAGmmmnGmmgQ000040w0AIaaaU000hDTTTTjTTQIaaaaU0hpEiUUUlAC0UlFIY4U4U0UoplIcKcKaKUUDHCnCmilFMY4U4U0UooGOFOpopaBjqUU2lFMB1LTaWgB1FJS0ALS0lFAxaKKKACiiigDcopKKRAtFJRQAtFFFAC0UlFMYtFJRQAtFFFAC0UlFAC0UlLQAUUUUALRSUUALSUUUAFFJRQMWikooAKKSigAopKKACkopKACkpaSgBKSlptAAaQ0GkoEIaQ0pppoADTTSmmmgBDSGlNNNACGmmlNNNACGmmnGmmgQ00004000ANNNNONNNAhppppTTTQAhphpxpppCGmmmlNNJoJYhptKaSkISiikpDFopKKAFFOFMpwNMaHinCmCnCgocKcKYKcKYxwpwpopRQMcKdTRS0DHUoptKKYDqWm0tADqWm0tAxaWkooAWikpaAClpKKANuiiiggWikooAWikooAWikooGOopKKAFopKKAFopKWgBaKSigBaKSigBaKSigBaKSigBaSikoGLRSUUALSUUlAC0lFJQAUUlFABSUUlABSUUlACGkNKaaaBAaQ0GkNACGkNBpDQAhpppTSGgBDTTSmmmgBDTTSmmmgQhpppTTTQAhpppTTTQIQ0w040w0CENNNKaYTQIQmmGlJppoJCkoNJUsYUlFJSGLRSUUALSikooAeDTgaYDTgaY0PFOFMBpwplDxSimilFAx4paaKWgY6nCmCnUAOpabS0wHUUlFAx1FJRQA6ikooAWiiigDaopM0UEDqKbRQA6ikooAWikooAdRTaWgYtFJRQAtFJRQA6im0tAC0UlFAC0UlFAC0UlFAC0lJRQMWikooAKKSigBaSkooAKKSkoAWkopKACkopKACmmikNAAaQ0GkNAhDSGg0hoAQ0hoNNNAAaaaU000AIaaaU000CENNNKaaaAENNNKaaaBDTTSaUmmk0CGk0wmnE0wmgliGmmlNNNAkBpKCabmpKFpM0maM0FWFzRmm5ozQFh2aWm5pc0CsOzTgajzTgaAJAacDUYNPBplIeDThTAacDQMeKWmA04GgY4U6mClzQA+lpl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B2aXNNzRmgY7NGabmjNADs0ZpuaM0AOzRmm5pc0AOzRmm5ozSAdmjNNzRmgY7NLmm5ozQA7NGabmjNADs0ZpuaM0hjs0ZpuaM0AOzSZpM0ZoAXNGabmjNAC5ozSZpM0AOzSZpM0maQDs0maTNJmgBc0maTNGaAFzSZpM0maADNJmjNITTACaQmkJpCaAAmmk0E0hNAATTSaCaaTQIQmmk0E0xjQIRjUZNDGmmmAlFFFAwooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigBaM0lFADqKbS0DuLRSZozSHc280uabmjNUQOzRmm5ozQA7NGabmjNADs0ZpuaM0AOzS5puaM0AOzRmm5ozSAdmlzTc0ZoGOzRmm5ozQA7NGabmjNADs0ZpuaXNIYuaM03NGaAHZozTc0ZoAdmkzSZozQAuaM03NGaQC5ozSZpM0ALmkzRmkzQMXNJmkzSZoAXNJmkzSZoELmkzSZpCaAFJppNBNNJoACaQmgmmk0ABNMJoJppNAhCajY0rGoyaYATSUUUwCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigDZzRmm5ozVCHZozTc0ZoAdmjNNzS5pALmlzTc0ZoAdmjNNzRmgB2aXNNzRmkMdmjNNzRmgB2aM0maM0ALmlzTc0ZoAdmjNNzRmkMdmjNNzRmgB2aM03NGaAFzRmkzRmkAuaM03NGaAFzRmkzSZoAXNJmkzRmgBc0maTNJmgBc0maTNJmgBc00mjNITQAE00mgmkJoACaaTQTTSaQCE0xjSk1GxpgIxptFFUIKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigDVzRmkzRmqELmjNJmjNADs0ZpuaM0gHZozTc0uaAHZozTc0ZoAdmjNJmjNAx2aM03NGaQDs0ZpM0ZoAXNGaTNFADs0ZpuaKQDqKbRQMdmjNNooAXNGaSikAuaM0lJQAuaM0lJQAtJRSUALSUlFABSUUmaQBTSaCaQmgAJppNBNNJoACaaTQTTSaAGk0wmlY02qQgooopgFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQBpZozSZozVCFzRmkzRmgB2aKbmjNADs0ZpM0ZpAOzRmm5ozQMdmjNJRQA7NGabS0gFzRSUUAOopKKAFopKKQC0UlFAC0UlFAxaKSikAtJRSUALSUUlAC0lFJQAUUlJSAKSikoADSGg0hoAQmmk0ppppAITTCaUmmE1SAQ0lFFUIKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAv5ozSUVQhaWm0tAC0ZpKKAFzS02ikMdRSUUAOoptLQAtLTaWkAtFJRQAtLSUUALRSUUgFopKKAFooooAKKSikMWkopKAFpKKKACkopKACiikpAFNNLSGgBDTTSmkNIBDTTSmmmhANNMNONMq0IKKKKYBRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAF2ikoqgFopKKAHUUlFIBaWm0tAC0UlLQAtFJRQAtLSUUgFpabS0ALRSUtABS0lFIBaKSigBaKSigBaSiikAUUUlAC0lFFABSUUlABSUtJSASkNLSGgBDTTSmmmkMQ00040w00IaabSmkqwCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigC3RRRVALRSUUALRRRQAtFJRSAWlpKKAFpaSigBaWkopALRRRQAtFJS0AFLSUUgFopKKAFopKKAFopKKACiiikAUlLSUAFJRRQAlJS0lACUhpaQ0gENNNKaQ0gGmmmnGmGqQDTSUppKoAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAtUUUVQC0UlLQAUtJRSAWiiigBaKSloAWiiigBaKKKQBS0lLQAUtJRQAtFFFIAooooAKKKKACiiigAooopAJRRRQAlFFFACUlLSUAJSGlpDSAaaQ0ppppAIaYaeaYapANNJSmkqgCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/2Q==';

export const productData = [
  {
    id: 1,
    image: "u-ditch",
    title: "U Ditch",
    hash: "uditch",
    description:
      "Beton U Ditch adalah salah satu produk beton pra cetak yang berbentuk huruf Udan digunakan untuk saluran air.",
    classFalse: "translate-y-[57%]",
    blurDataUrl: blurUrl
  },
  {
    id: 2,
    image: "reinforcoed-concrete-pipe",
    title: "RCP",
    hash: "rcp",
    description:
      "Reinforced Concrete Pipe (RCP) adalah pipa yang terbuat dari beton bertulang yang diperkuat dengan baja di dalamnya.",
    classFalse: "translate-y-[60%]",
    blurDataUrl: blurUrl
  },
  {
    id: 3,
    image: "cover-uditch",
    title: "Cover U Ditch",
    hash: "cover",
    description:
      "Cover U Ditch adalah produk beton pracetak yang digunakan untuk menutup saluran u ditch.",
    classFalse: "translate-y-[57%]",
    blurDataUrl: blurUrl
  },
  {
    id: 4,
    image: "box-culvert",
    title: "Box Culvert",
    hash: "box",
    description:
      "Box Culvert adalah salah satu jenis saluran air yang terbuat dari beton bertulang dan berbentuk persegi panjang. ",
    classFalse: "translate-y-[57%]",
    blurDataUrl: blurUrl
  },
  {
    id: 5,
    image: "porous-well",
    title: "Sumur Resapan",
    hash: "porouswell",
    description:
      "Sumur Resapan adalah salah satu jenis sumur yang berfungsi untuk menampung air hujan dan mengalirkannya ke dalam tanah.",
    classFalse: "translate-y-[61%]",
    blurDataUrl: blurUrl
  },
  {
    id: 6,
    image: "kansteen",
    title: "Kansteen",
    hash: "Kansteen",
    description:
      "Kansteen adalah elemen konstruksi yang digunakan untuk membatasi jalan, trotoar, median, atau area lain yang memerlukan pembatasan.",
    classFalse: "translate-y-[65%]",
    blurDataUrl: blurUrl
  },
  {
    id: 7,
    image: "mcb",
    title: "Barrier (MCB)",
    hash: "barrier",
    description:
      "Barrier (MCB) adalah sebuah struktur pembatas yang terbuat dari beton dan dipasang di tengah jalan raya untuk mencegah kendaraan melintas ke jalur yang berlawanan arah",
    classFalse: "translate-y-[68%]",
    blurDataUrl: blurUrl
  },
  {
    id: 8,
    image: "pagarbeton",
    title: "Pagar Beton",
    hash: "fence",
    description:
      "Pagar Beton adalah jenis pagar yang terbuat dari beton, yaitu campuran semen, pasir, kerikil, dan air.",
    classFalse: "translate-y-[57%]",
    blurDataUrl: blurUrl
  },
  {
    id: 9,
    image: "tiangkolom",
    title: "Tiang Kolom",
    hash: "tiang",
    description:
      "Tiang kolom dalam beton adalah struktur penyangga yang terbuat dari beton bertulang besi yang berfungsi untuk menopang beban lantai dan atap di atasnya. ",
    classFalse: "translate-y-[64%]",
    blurDataUrl: blurUrl
  },
  {
    id: 10,
    image: "pipabuis",
    title: "Pipa Buis",
    hash: "pipabuis",
    description:
      "Pipa Buis adalah jenis pipa yang terbuat dari beton bertulang atau beton pracetak yang berbentuk silinder. ",
    classFalse: "translate-y-[60%]",
    blurDataUrl: blurUrl
  },
  {
    id: 11,
    image: "pavingblock",
    title: "Paving Block",
    hash: "pavingblock",
    description:
      "Paving block adalah salah satu jenis bahan bangunan yang digunakan untuk menutup permukaan tanah dengan cara menyusun blok-blok beton berbentuk persegi atau segi lainnya ",
    classFalse: "translate-y-[67%]",
    blurDataUrl: blurUrl
  },
  {
    id: 5,
    image: "sheet-pile",
    title: "Sheet Pile",
    hash: "sheetpile",
    description:
      "Sheet Pile adalah material konstruksi yang berbentuk lembaran tipis dan panjang yang digunakan untuk membuat dinding penahan tanah atau air.",
    classFalse: "translate-y-[63%]",
    blurDataUrl: blurUrl
  },
  {
    id: 6,
    image: "square-pile",
    title: "Square Pile",
    hash: "squarepile",
    description:
      "Square Piles adalah salah satu jenis tiang pancang yang digunakan untuk mendukung struktur bangunan di atas tanah yang tidak stabil atau lemah.",
    classFalse: "translate-y-[63%]",
    blurDataUrl: blurUrl
  },
];
