// Do not edit. Automatically generated from index-template.ts by generate.ts
 
import path from "path";

import { ImageLoader } from "next/image";

import config from "./config";
import { getOptimizedImagePath } from "./util";

export interface ImageWrapper {
  width: number;
  height: number;
  maxSize: number;
  ext: string;
}

const allImages = {
  "clients/center_for_community_health": { width: 300, height: 300, maxSize: 384, ext: ".jpg" },
  "clients/dynamics_performance_team": { width: 1312, height: 1312, maxSize: 1920, ext: ".jpg" },
  "clients/feeding_san_diego": { width: 390, height: 390, maxSize: 640, ext: ".jpg" },
  "clients/international_health_collective": { width: 247, height: 247, maxSize: 256, ext: ".jpg" },
  "clients/key_conservation": { width: 480, height: 480, maxSize: 640, ext: ".jpg" },
  "clients/office_of_innovation_and_commercialization": { width: 500, height: 500, maxSize: 640, ext: ".jpg" },
  "clients/og_yoga": { width: 200, height: 200, maxSize: 256, ext: ".jpg" },
  "clients/symphonic_student_association": { width: 224, height: 224, maxSize: 256, ext: ".jpg" },
  "clients/united_women_of_east_africa": { width: 1379, height: 1379, maxSize: 1920, ext: ".jpg" },
  "content/fa21-all-hands-2-group-pic-1": { width: 4032, height: 2268, maxSize: 3840, ext: ".jpg" },
  "content/photoshoot-marketing-12": { width: 4917, height: 3376, maxSize: 3840, ext: ".jpg" },
  "content/photoshoot-marketing-15": { width: 6000, height: 3376, maxSize: 3840, ext: ".jpg" },
  "content/photoshoot-marketing-17": { width: 6000, height: 2954, maxSize: 3840, ext: ".jpg" },
  "content/photoshoot-marketing-3": { width: 3760, height: 3294, maxSize: 3840, ext: ".jpg" },
  "content/photoshoot-marketing-7": { width: 6000, height: 3376, maxSize: 3840, ext: ".jpg" },
  "icons/tse-bulb": { width: 1484, height: 1484, maxSize: 1920, ext: ".png" },
  "members/aaron_yang": { width: 1365, height: 1365, maxSize: 1080, ext: ".jpg" },
  "members/advay_sharma": { width: 3023, height: 3023, maxSize: 1080, ext: ".jpg" },
  "members/aksharan_saravanan": { width: 2780, height: 2512, maxSize: 1080, ext: ".jpg" },
  "members/alejandro_rodriguez_pascual": { width: 2528, height: 2528, maxSize: 1080, ext: ".png" },
  "members/alex_chiu": { width: 759, height: 759, maxSize: 828, ext: ".jpg" },
  "members/allison_bhavsar": { width: 2859, height: 2859, maxSize: 1080, ext: ".jpg" },
  "members/amitesh_sharma": { width: 2208, height: 2188, maxSize: 1080, ext: ".jpg" },
  "members/amrit_singh": { width: 2203, height: 2203, maxSize: 1080, ext: ".jpg" },
  "members/andrew_caballero": { width: 2203, height: 2203, maxSize: 1080, ext: ".jpg" },
  "members/anoushka_dave": { width: 2383, height: 2383, maxSize: 1080, ext: ".jpg" },
  "members/anshul_birla": { width: 2402, height: 2402, maxSize: 1080, ext: ".jpg" },
  "members/anson_lee": { width: 1844, height: 1857, maxSize: 1080, ext: ".jpg" },
  "members/arnold_duan": { width: 512, height: 512, maxSize: 640, ext: ".jpg" },
  "members/ayush_shukla": { width: 1000, height: 1001, maxSize: 1080, ext: ".jpg" },
  "members/belal_aboabdo": { width: 1840, height: 1840, maxSize: 1080, ext: ".jpg" },
  "members/benson_budiman": { width: 2143, height: 2142, maxSize: 1080, ext: ".jpg" },
  "members/benson_vuong": { width: 1423, height: 1433, maxSize: 1080, ext: ".jpg" },
  "members/bobby_tatum": { width: 1865, height: 1865, maxSize: 1080, ext: ".jpg" },
  "members/bryant_liu": { width: 846, height: 812, maxSize: 1080, ext: ".jpg" },
  "members/dan_huang": { width: 3024, height: 3024, maxSize: 1080, ext: ".jpg" },
  "members/david_cruz": { width: 1148, height: 1148, maxSize: 1080, ext: ".jpg" },
  "members/david_hacker": { width: 1680, height: 1680, maxSize: 1080, ext: ".jpg" },
  "members/dhanush_nanjunda_reddy": { width: 2900, height: 2900, maxSize: 1080, ext: ".png" },
  "members/dhruv_sood": { width: 3006, height: 2732, maxSize: 1080, ext: ".jpg" },
  "members/donald_kwan": { width: 933, height: 933, maxSize: 1080, ext: ".jpg" },
  "members/elias_fang": { width: 1906, height: 1906, maxSize: 1080, ext: ".jpg" },
  "members/emmanuel_flores": { width: 2470, height: 2471, maxSize: 1080, ext: ".jpg" },
  "members/evan_lam": { width: 1672, height: 1673, maxSize: 1080, ext: ".jpg" },
  "members/gary_zhao": { width: 1245, height: 1245, maxSize: 1080, ext: ".jpg" },
  "members/glenn_raskovich": { width: 1000, height: 995, maxSize: 1080, ext: ".jpg" },
  "members/hana_kim": { width: 750, height: 750, maxSize: 750, ext: ".jpg" },
  "members/hannah_hsu": { width: 2983, height: 3050, maxSize: 1080, ext: ".jpg" },
  "members/heather_gan": { width: 748, height: 748, maxSize: 750, ext: ".jpg" },
  "members/holly_ham": { width: 2078, height: 2043, maxSize: 1080, ext: ".jpg" },
  "members/jacob_au": { width: 1387, height: 1387, maxSize: 1080, ext: ".jpg" },
  "members/jessica_nguyen": { width: 1000, height: 995, maxSize: 1080, ext: ".jpg" },
  "members/joann_chen": { width: 627, height: 627, maxSize: 640, ext: ".jpg" },
  "members/justin_yao_du": { width: 3000, height: 3000, maxSize: 1080, ext: ".jpg" },
  "members/kelly_li": { width: 1542, height: 1542, maxSize: 1080, ext: ".jpg" },
  "members/kenny_tran": { width: 2264, height: 2264, maxSize: 1080, ext: ".jpg" },
  "members/kenny_yi": { width: 400, height: 400, maxSize: 640, ext: ".jpg" },
  "members/kevin_han": { width: 3024, height: 3024, maxSize: 1080, ext: ".jpg" },
  "members/kunal_bhandarkar": { width: 848, height: 848, maxSize: 1080, ext: ".jpg" },
  "members/ly_nguyen": { width: 2316, height: 2316, maxSize: 1080, ext: ".jpg" },
  "members/lydia_smith": { width: 600, height: 636, maxSize: 640, ext: ".jpg" },
  "members/mylinh_lac": { width: 3024, height: 3024, maxSize: 1080, ext: ".jpg" },
  "members/nicholas_vanny": { width: 2370, height: 2171, maxSize: 1080, ext: ".jpg" },
  "members/nicolas_la_polla": { width: 965, height: 543, maxSize: 1080, ext: ".jpg" },
  "members/nirmal_agnihotri": { width: 1204, height: 1204, maxSize: 1080, ext: ".jpg" },
  "members/patrick_brown": { width: 2527, height: 2527, maxSize: 1080, ext: ".png" },
  "members/philip_zhang": { width: 960, height: 960, maxSize: 1080, ext: ".jpg" },
  "members/rachel_blumin": { width: 2218, height: 2218, maxSize: 1080, ext: ".jpg" },
  "members/rickie_chen": { width: 2956, height: 2956, maxSize: 1080, ext: ".jpg" },
  "members/roger_ji": { width: 782, height: 772, maxSize: 828, ext: ".png" },
  "members/rohan_puthukudy": { width: 3009, height: 3009, maxSize: 1080, ext: ".jpg" },
  "members/rohith_kasar": { width: 512, height: 512, maxSize: 640, ext: ".png" },
  "members/ryan_bui": { width: 2000, height: 2000, maxSize: 1080, ext: ".jpg" },
  "members/sara_blumin": { width: 2682, height: 2682, maxSize: 1080, ext: ".jpg" },
  "members/shravan_hariharan": { width: 1733, height: 1733, maxSize: 1080, ext: ".jpg" },
  "members/shravan_konduru": { width: 1505, height: 1505, maxSize: 1080, ext: ".jpg" },
  "members/stephen_tan": { width: 720, height: 714, maxSize: 750, ext: ".png" },
  "members/sumeet_bansal": { width: 520, height: 520, maxSize: 640, ext: ".jpg" },
  "members/thai_gillespie": { width: 1022, height: 1015, maxSize: 1080, ext: ".png" },
  "members/thomas_galpin": { width: 781, height: 781, maxSize: 828, ext: ".jpg" },
  "members/thomas_garry": { width: 2107, height: 2107, maxSize: 1080, ext: ".jpg" },
  "members/thomas_li": { width: 3687, height: 3684, maxSize: 1080, ext: ".jpg" },
  "members/tracy_nguyen": { width: 2819, height: 2819, maxSize: 1080, ext: ".jpg" },
  "members/viren_abhyankar": { width: 1051, height: 1051, maxSize: 1080, ext: ".jpg" },
  "members/wesley_chen": { width: 2029, height: 2029, maxSize: 1080, ext: ".jpg" },
  "members/william_wu": { width: 600, height: 600, maxSize: 640, ext: ".jpg" },
  "members/winnie_chen": { width: 1000, height: 1005, maxSize: 1080, ext: ".jpg" },
  "members/xi-kai_wu": { width: 4213, height: 4213, maxSize: 1080, ext: ".jpg" },
  "members/zach_liou": { width: 1359, height: 1360, maxSize: 1080, ext: ".jpg" },
  "projects/uweast_community_kitchen/contact_page": { width: 469, height: 264, maxSize: 640, ext: ".png" },
} as const;

export type ImageKey = keyof typeof allImages;

function isImageKey(key: string): key is ImageKey {
  return Object.prototype.hasOwnProperty.call(allImages, key);
}

function getImage(key: ImageKey): ImageWrapper {
  return allImages[key];
}

function firstValidImageKey(...keys: string[]) {
  for (const key of keys) {
    if (isImageKey(key)) {
      return key;
    }
  }
  throw new Error(`No image found matching key(s): ${JSON.stringify(keys)}`);
}

const staticLoader: ImageLoader = ({ src, width }) => {
  const image = getImage(firstValidImageKey(src));
  return path.join(
    "/",
    config.staticPrefix,
    getOptimizedImagePath(src + image.ext, Math.min(width, image.maxSize))
  );
};

export { isImageKey, getImage, firstValidImageKey, staticLoader };
