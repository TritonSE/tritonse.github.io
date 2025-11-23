import { assertUniqueKey, makeComparator } from "../util";

// Roles are listed alphabetically in each category.
const allRoles = [
  "President",
  // VPs
  "VP Design",
  "VP Engineering",
  "VP External",
  "VP Operations",
  "VP Products",
  "VP Projects",
  "VP Technology",
  // Leads
  "Marketing Lead",
  "Outreach Lead",
  "Socials Lead",
  "TEST Design Lead",
  "TEST Developer Lead",
  // Managers
  "Engineering Manager",
  "Product Manager",
  "Project Manager",
  // Members
  "Designer",
  "Developer",
  "TEST Designer",
  "TEST Developer",
] as const satisfies readonly string[];
type Role = (typeof allRoles)[number];

type Member = {
  readonly id: string;
  readonly name: string;
  readonly roles: readonly Role[];
  readonly hidden?: boolean;
  readonly graduation?: number;
};

type Alumnus = {
  readonly graduation: number;
} & Member;

type RawPerson = Omit<Member, "name">;

const rawPeople = [
  {
    id: "Aaron Yang 0",
    roles: ["President"],
    graduation: 2018,
  },
  {
    id: "Thomas Galpin 0",
    roles: ["VP Operations"],
    graduation: 2018,
  },
  {
    id: "Belal Aboabdo 0",
    roles: ["VP External"],
    graduation: 2018,
  },
  {
    id: "Khaled Ahmad 0",
    roles: ["VP Technology"],
    graduation: 2018,
  },
  {
    id: "Zach Liou 0",
    roles: ["Project Manager", "VP Technology"],
    graduation: 2018,
  },
  {
    id: "Donald Kwan 0",
    roles: ["Project Manager"],
    graduation: 2018,
  },
  {
    id: "Joann Chen 0",
    roles: ["Developer", "Project Manager"],
    graduation: 2018,
  },
  {
    id: "Gary Zhao 0",
    roles: ["Developer"],
    graduation: 2019,
  },
  {
    id: "John Lu 0",
    roles: ["Developer"],
    graduation: 2019,
  },
  {
    id: "Akashnarendran Premkumar 0",
    roles: ["Product Manager"],
    hidden: true, // hidden because not sure who they are, just adding to give credit for their work
  },
  {
    id: "Anne Xu 0",
    roles: ["Developer"],
    hidden: true, // hidden because not sure who they are, just adding to give credit for their work
  },
  {
    id: "Arnav Taneja 0",
    roles: ["Developer"],
    hidden: true, // hidden because not sure who they are, just adding to give credit for their work
  },
  {
    id: "Bryan Yuan 0",
    roles: ["Developer"],
    hidden: true, // hidden because not sure who they are, just adding to give credit for their work
  },
  {
    id: "Jason Vega 0",
    roles: ["Developer"],
    hidden: true, // hidden because not sure who they are, just adding to give credit for their work
  },
  {
    id: "Alex Li 0",
    roles: ["Developer"],
    hidden: true, // hidden because not sure who they are, just adding to give credit for their work
  },
  {
    id: "Brent Min 0",
    roles: ["Developer"],
    hidden: true, // hidden because not sure who they are, just adding to give credit for their work
  },
  {
    id: "Loc Vu 0",
    roles: ["Developer"],
    hidden: true, // hidden because not sure who they are, just adding to give credit for their work
  },
  {
    id: "Roger Ji 0",
    roles: ["Developer"],
    hidden: true, // hidden because not sure who they are, just adding to give credit for their work
  },
  {
    id: "Davin Tjong 0",
    roles: ["Developer"],
    hidden: true, // hidden because not sure who they are, just adding to give credit for their work
  },
  {
    id: "Victor Luong 0",
    roles: ["Developer"],
    hidden: true, // hidden because not sure who they are, just adding to give credit for their work
  },
  {
    id: "Alexandra Michael 0",
    roles: ["Developer"],
    hidden: true, // hidden because not sure who they are, just adding to give credit for their work
  },
  {
    id: "Nathan Zhao 0",
    roles: ["Developer"],
    hidden: true, // hidden because not sure who they are, just adding to give credit for their work
  },
  {
    id: "Kevin Soloway 0",
    roles: ["Developer"],
    hidden: true, // hidden because not sure who they are, just adding to give credit for their work
  },
  {
    id: "Sumeet Bansal 0",
    roles: ["Developer", "Project Manager", "President"],
    graduation: 2020,
  },
  {
    id: "Alex Chiu 0",
    roles: ["Developer", "Project Manager"],
    graduation: 2020,
  },
  {
    id: "Bryant Liu 0",
    roles: ["Developer", "Project Manager"],
    graduation: 2020,
  },
  {
    id: "Dan Huang 0",
    roles: ["Project Manager"],
    graduation: 2020,
  },
  {
    id: "Glenn Raskovich 0",
    roles: ["Developer", "Project Manager"],
    graduation: 2020,
  },
  {
    id: "Kenny Yi 0",
    roles: ["Developer", "Project Manager"],
    graduation: 2020,
  },
  {
    id: "Winnie Chen 0",
    roles: ["Designer"],
    graduation: 2020,
  },
  {
    id: "Benson Budiman 0",
    roles: ["Developer", "VP Operations"],
    graduation: 2021,
  },
  {
    id: "Ayush Shukla 0",
    roles: ["Developer", "VP External"],
    graduation: 2021,
  },
  {
    id: "Jessica Nguyen 0",
    roles: ["Designer", "VP Design"],
    graduation: 2021,
  },
  {
    id: "Wesley Chen 0",
    roles: ["Developer", "VP External", "President"],
    graduation: 2021,
  },
  {
    id: "Anoushka Dave 0",
    roles: ["Developer", "VP Operations", "President"],
    graduation: 2023,
  },
  {
    id: "Reyna Abhyankar 0",
    roles: ["Developer", "VP Products"],
    graduation: 2023,
  },
  {
    id: "David Hacker 0",
    roles: ["Developer", "VP Technology"],
    graduation: 2021,
  },
  {
    id: "Holly Ham 0",
    roles: ["Developer", "Project Manager", "VP Projects"],
    graduation: 2021,
  },
  {
    id: "Mylinh Lac 0",
    roles: ["Designer", "VP Design"],
    graduation: 2022,
  },
  {
    id: "Heather Gan 0",
    roles: ["Developer", "Outreach Lead"],
    graduation: 2022,
  },
  {
    id: "Kelly Li 0",
    roles: ["Designer", "Marketing Lead"],
    graduation: 2022,
  },
  {
    id: "Amrit Singh 0",
    roles: ["Developer", "Project Manager"],
    graduation: 2021,
  },
  {
    id: "Arnold Duan 0",
    roles: ["Developer", "Project Manager"],
    graduation: 2021,
  },
  {
    id: "David Cruz 0",
    roles: ["Developer", "Project Manager"],
    graduation: 2021,
  },
  {
    id: "Hannah Hsu 0",
    roles: ["Developer", "Project Manager"],
    graduation: 2021,
  },
  {
    id: "Sara Blumin 0",
    roles: ["Developer", "Project Manager"],
    graduation: 2021,
  },
  {
    id: "Jason Cabrera 0",
    roles: ["Project Manager"],
    graduation: 2021,
  },
  {
    id: "Declan Sullivan 0",
    roles: ["Project Manager", "Developer"],
    graduation: 2021,
  },
  {
    id: "Andrew Caballero 0",
    roles: ["Designer", "VP Design"],
    graduation: 2023,
  },
  {
    id: "Evan Lam 0",
    roles: ["Designer", "VP Design"],
    graduation: 2022,
  },
  {
    id: "Kenny Tran 0",
    roles: ["Designer"],
    graduation: 2021,
  },
  {
    id: "Lydia Smith 0",
    roles: ["Designer"],
    graduation: 2022,
  },
  {
    id: "Rachel Blumin 0",
    roles: ["Designer"],
    graduation: 2023,
  },
  {
    id: "Rickie Chen 0",
    roles: ["Designer", "TEST Design Lead"],
    graduation: 2023,
  },
  {
    id: "Thomas Li 0",
    roles: ["Developer", "Project Manager"],
    hidden: true,
  },
  {
    id: "Tracy Nguyen 0",
    roles: ["Designer"],
    graduation: 2022,
  },
  {
    id: "Aaron Kirk 0",
    roles: ["Developer"],
    hidden: true,
  },
  {
    id: "Advay Sharma 0",
    roles: ["Developer", "Engineering Manager"],
    hidden: true,
  },
  {
    id: "Aksharan Saravanan 0",
    roles: ["Developer"],
    graduation: 2023,
  },
  {
    id: "Alejandro Rodriguez Pascual 0",
    roles: ["Developer"],
    hidden: true,
  },
  {
    id: "Allison Bhavsar 0",
    roles: ["Developer"],
    graduation: 2022,
  },
  {
    id: "Amitesh Sharma 0",
    roles: ["Developer"],
    hidden: true,
  },
  {
    id: "Anshul Birla 0",
    roles: ["Developer", "Engineering Manager"],
    graduation: 2023,
  },
  {
    id: "Anson Lee 0",
    roles: ["Developer"],
    graduation: 2021,
  },
  {
    id: "Benson Vuong 0",
    roles: ["Developer"],
    graduation: 2022,
  },
  {
    id: "Robert Tatum 0",
    roles: ["Developer", "Project Manager"],
    graduation: 2022,
  },
  {
    id: "Deepansha Singh 0",
    roles: ["Developer"],
    hidden: true,
  },
  {
    id: "Dhanush Nanjunda Reddy 0",
    roles: ["Developer", "Engineering Manager"],
    graduation: 2022,
  },
  {
    id: "Dhruv Sood 0",
    roles: ["Developer"],
    hidden: true,
  },
  {
    id: "Elias Fang 0",
    roles: ["Developer"],
    graduation: 2022,
  },
  {
    id: "Emmanuel Flores 0",
    roles: ["Developer", "Product Manager"],
    graduation: 2024,
  },
  {
    id: "Hana Kim 0",
    roles: ["Developer"],
    hidden: true,
  },
  {
    id: "Jacob Au 0",
    roles: ["Developer"],
    graduation: 2023,
  },
  {
    id: "Justin Yao Du 0",
    roles: ["Developer", "VP Technology"],
    graduation: 2024,
  },
  {
    id: "Kevin Han 0",
    roles: ["Developer"],
    graduation: 2021,
  },
  {
    id: "Kunal Bhandarkar 0",
    roles: ["Developer", "VP Engineering"],
    graduation: 2022,
  },
  {
    id: "Ly Nguyen 0",
    roles: ["Developer"],
    graduation: 2022,
  },
  {
    id: "Navid Boloorian 0",
    roles: ["Developer", "Engineering Manager", "President"],
    graduation: 2024,
  },
  {
    id: "Nicholas Vanny 0",
    roles: ["Developer"],
    hidden: true,
  },
  {
    id: "Nicolas La Polla 0",
    roles: ["Developer", "Engineering Manager"],
    graduation: 2022,
  },
  {
    id: "Nirmal Agnihotri 0",
    roles: ["Developer", "Engineering Manager"],
    graduation: 2023,
  },
  {
    id: "Patrick Brown 0",
    roles: ["Developer", "Engineering Manager"],
    graduation: 2022,
  },
  {
    id: "Philip Zhang 0",
    roles: ["Developer", "Engineering Manager"],
    graduation: 2024,
  },
  {
    id: "Rohan Puthukudy 0",
    roles: ["Developer", "TEST Developer Lead"],
    graduation: 2023,
  },
  {
    id: "Rohith Kasar 0",
    roles: ["Developer"],
    hidden: true,
  },
  {
    id: "Ryan Bui 0",
    roles: ["Developer"],
    hidden: true,
  },
  {
    id: "Shravan Hariharan 0",
    roles: ["Developer"],
    hidden: true,
  },
  {
    id: "Shravan Konduru 0",
    roles: ["Developer", "VP Operations"],
    graduation: 2023,
  },
  {
    id: "Stephen Tan 0",
    roles: ["Developer", "TEST Developer Lead", "Product Manager", "VP Products"],
    graduation: 2024,
  },
  {
    id: "Thai Gillespie 0",
    roles: ["Developer"],
    graduation: 2021,
  },
  {
    id: "Thomas Garry 0",
    roles: ["Developer"],
    hidden: true,
  },
  {
    id: "William Wu 0",
    roles: ["Developer", "VP Engineering"],
    graduation: 2024,
  },
  {
    id: "Xi-Kai Wu 0",
    roles: ["Developer"],
    hidden: true,
  },
  {
    id: "Zain Khan 0",
    roles: ["Developer"],
    hidden: true,
  },
  {
    id: "Ainesh Arumugam 0",
    roles: ["Developer"],
    hidden: true,
  },
  {
    id: "Alex Zhang 0",
    roles: ["Developer", "Engineering Manager"],
    hidden: true,
  },
  {
    id: "Kevin Fu 0",
    roles: ["Developer"],
    hidden: true,
  },
  {
    id: "Pratyush Chand 0",
    roles: ["Developer"],
    graduation: 2025,
  },
  {
    id: "Andrew Russell 0",
    roles: ["Developer", "Engineering Manager", "VP Technology"],
    graduation: 2024,
  },
  {
    id: "James Zhang 0",
    roles: ["Developer"],
    graduation: 2024,
  },
  {
    id: "Mohak Vaswani 0",
    roles: ["Developer"],
    graduation: 2024,
  },
  {
    id: "Shreya Gupta 0",
    roles: ["Developer", "Product Manager"],
    graduation: 2024,
  },
  {
    id: "Akhilan Gurumoorthy 0",
    roles: ["Developer"],
    graduation: 2023,
  },
  {
    id: "Aammya Sapra 0",
    roles: ["Developer"],
    graduation: 2024,
  },
  {
    id: "Andrew Masek 0",
    roles: ["Developer"],
    graduation: 2023,
  },
  {
    id: "Anvitaa Sekhsaria 0",
    roles: ["Developer"],
    graduation: 2023,
  },
  {
    id: "Artyom Muradyan 0",
    roles: ["Developer"],
    hidden: true,
  },
  {
    id: "Helen Lin 0",
    roles: ["Developer", "Engineering Manager"],
    graduation: 2025,
  },
  {
    id: "Mary Vu 0",
    roles: ["Developer"],
    hidden: true,
  },
  {
    id: "Nishant Balaji 0",
    roles: ["Developer"],
    hidden: true,
  },
  {
    id: "Aman Aggarwal 0",
    roles: ["Developer", "Engineering Manager"],
    graduation: 2023,
  },
  {
    id: "Parth Patel 0",
    roles: ["Developer"],
    graduation: 2025,
  },
  {
    id: "Assaf Cohen-Arazi 0",
    roles: ["Developer", "Engineering Manager"],
    graduation: 2023,
  },
  {
    id: "Ryan Hung 0",
    roles: ["Developer"],
    hidden: true,
  },
  {
    id: "Shreekar Pandey 0",
    roles: ["Developer", "VP External"],
    hidden: true,
  },
  {
    id: "William Jin 0",
    roles: ["Developer"],
    graduation: 2023,
  },
  {
    id: "Yucheng Huang 0",
    roles: ["Developer"],
    hidden: true,
  },
  {
    id: "Leslie Aguiar 0",
    roles: ["Designer"],
    graduation: 2022,
  },
  {
    id: "Jonathan Lum 0",
    roles: ["Designer"],
    graduation: 2023,
  },
  {
    id: "Juliet Zhuang 0",
    roles: ["Designer", "Marketing Lead"],
    graduation: 2023,
  },
  {
    id: "Tracey Du 0",
    roles: ["Designer"],
    hidden: true,
  },
  {
    id: "Mrinal Sharma 0",
    roles: ["Product Manager"],
    graduation: 2023,
  },
  {
    id: "Annie Wen 0",
    roles: ["Product Manager", "Designer", "TEST Design Lead", "VP Design"],
    graduation: 2025,
  },
  {
    id: "Casey Toy 0",
    roles: ["TEST Developer"],
    graduation: 2022,
  },
  {
    id: "Sage Amon 0",
    roles: ["TEST Developer"],
    graduation: 2022,
  },
  {
    id: "Abel Seyoum 0",
    roles: ["TEST Developer"],
    graduation: 2022,
  },
  {
    id: "Garrett Lam 0",
    roles: ["TEST Developer"],
    graduation: 2022,
  },
  {
    id: "Eric Shults 0",
    roles: ["TEST Developer"],
    graduation: 2022,
  },
  {
    id: "Alicia Danielle 0",
    roles: ["TEST Developer"],
    graduation: 2022,
  },
  {
    id: "Frances Sy 0",
    roles: ["TEST Designer"],
    graduation: 2022,
  },
  {
    id: "Aska Kunita Demirci 0",
    roles: ["TEST Designer", "Designer"],
    graduation: 2025,
  },
  {
    id: "Annie Ye 0",
    roles: ["TEST Designer"],
    graduation: 2022,
  },
  {
    id: "Nhu Luong 0",
    roles: ["Designer"],
    hidden: true,
  },
  {
    id: "Aaron Chan 0",
    roles: ["Developer"],
    graduation: 2025,
  },
  {
    id: "Adhithya Ananthan-Regina 0",
    roles: ["Developer", "Engineering Manager"],
    graduation: 2024,
  },
  {
    id: "Anthony Pertsel 0",
    roles: ["Developer", "Engineering Manager"],
    graduation: 2025,
  },
  {
    id: "Arnav Modi 0",
    roles: ["Developer"],
    graduation: 2024,
  },
  {
    id: "Arohan Mittal 0",
    roles: ["Developer"],
    graduation: 2024,
  },
  {
    id: "Benjamin Johnson 0",
    roles: ["Developer", "Engineering Manager", "VP Technology", "President"],
  },
  {
    id: "Brenton Dunn 0",
    roles: ["Developer"],
    graduation: 2024,
  },
  {
    id: "Christen Xie 0",
    roles: ["Developer"],
    graduation: 2025,
  },
  {
    id: "Daniel Shao 0",
    roles: ["Developer"],
    graduation: 2024,
  },
  {
    id: "Edward Lin 0",
    roles: ["Developer"],
    graduation: 2025,
  },
  {
    id: "Emily Marschall-Niswonger 0",
    roles: ["Developer", "TEST Developer Lead"],
    graduation: 2025,
  },
  {
    id: "Emily Yu 0",
    roles: ["Designer"],
    graduation: 2024,
  },
  {
    id: "Emma Zhu 0",
    roles: ["Developer"],
    graduation: 2025,
  },
  {
    id: "Fatima Dong 0",
    roles: ["TEST Developer"],
    graduation: 2023,
  },
  {
    id: "Harsh Gurnani 0",
    roles: ["Developer", "Engineering Manager"],
    graduation: 2025,
  },
  {
    id: "Hrithik Pai 0",
    roles: ["Developer", "VP Products"],
    graduation: 2025,
  },
  {
    id: "James Luo 0",
    roles: ["Developer"],
    graduation: 2023,
  },
  {
    id: "Jared Rosas 0",
    roles: ["TEST Developer", "Developer"],
    graduation: 2025,
  },
  {
    id: "Jennifer Chen 0",
    roles: ["Developer"],
    graduation: 2023,
  },
  {
    id: "Jennifer Tanurdjaja 0",
    roles: ["Developer", "Product Manager"],
    graduation: 2024,
  },
  {
    id: "Jenny Mar 0",
    roles: ["Developer", "Engineering Manager"],
    graduation: 2024,
  },
  {
    id: "Jocelyn Horng 0",
    roles: ["Designer"],
    graduation: 2024,
  },
  {
    id: "Kacy Umana 0",
    roles: ["TEST Developer"],
    graduation: 2023,
  },
  {
    id: "Kevin Do 0",
    roles: ["Developer"],
    graduation: 2025,
  },
  {
    id: "Laura Liu 0",
    roles: ["TEST Designer"],
    graduation: 2023,
  },
  {
    id: "Lillian Ho 0",
    roles: ["Developer"],
    graduation: 2024,
  },
  {
    id: "Madhav Bansal 0",
    roles: ["Developer"],
    graduation: 2025,
  },
  {
    id: "Megan Leong 0",
    roles: ["Developer"],
    graduation: 2024,
  },
  {
    id: "Melina Dimitropoulou 0",
    roles: ["Developer"],
    graduation: 2024,
  },
  {
    id: "Nitya Pillai 0",
    roles: ["Developer"],
    graduation: 2024,
  },
  {
    id: "Samvrit Srinath 0",
    roles: ["Developer", "Product Manager"],
    graduation: 2025,
  },
  {
    id: "Sidhant Rohatgi 0",
    roles: ["Developer", "Product Manager"],
    graduation: 2025,
  },
  {
    id: "Steven Shi 0",
    roles: ["Developer", "Product Manager"],
    graduation: 2025,
  },
  {
    id: "Sydney Zhang 0",
    roles: ["Developer", "VP Engineering"],
    graduation: 2025,
  },
  {
    id: "Victor Siu 0",
    roles: ["Developer"],
    graduation: 2024,
  },
  {
    id: "Vinayak Sharma 0",
    roles: ["Developer", "Product Manager"],
    graduation: 2025,
  },
  {
    id: "Vivian Liu 0",
    roles: ["Developer", "VP Operations", "President"],
    graduation: 2025,
  },
  {
    id: "Yash Ravipati 0",
    roles: ["Developer", "VP Operations"],
    graduation: 2025,
  },
  {
    id: "Madison Plotkin 0",
    roles: ["TEST Designer", "Designer", "TEST Design Lead"],
    graduation: 2025,
  },
  {
    id: "Mandy Lai 0",
    roles: ["Designer", "Marketing Lead"],
    graduation: 2024,
  },
  {
    id: "Melanie Haro 0",
    roles: ["TEST Developer"],
    graduation: 2023,
  },
  {
    id: "Omar Khalil 0",
    roles: ["TEST Designer"],
    graduation: 2023,
  },
  {
    id: "Rosario Ortiz 0",
    roles: ["TEST Developer"],
    graduation: 2023,
  },
  {
    id: "Shana Chen 0",
    roles: ["Designer"],
    graduation: 2023,
  },
  {
    id: "Sujana Nagasuri 0",
    roles: ["Designer"],
    graduation: 2024,
  },
  {
    id: "Tiffany Lee 0",
    roles: ["Designer", "VP Design"],
    graduation: 2024,
  },
  {
    id: "Yoto Kim 0",
    roles: ["TEST Developer", "Developer", "Product Manager"],
  },
  {
    id: "Andrew Pu 0",
    roles: ["Developer"],
  },
  {
    id: "Andrew Zhou 0",
    roles: ["Developer"],
    graduation: 2025,
  },
  {
    id: "Eshaan Sharma 0",
    roles: ["Developer", "Engineering Manager", "VP Engineering"],
  },
  {
    id: "Jacob Hansen 0",
    roles: ["Developer"],
    graduation: 2024,
  },
  {
    id: "Karen Yan 0",
    roles: ["Developer", "Product Manager"],
  },
  {
    id: "Katelyn Nguyen 0",
    roles: ["Developer"],
    graduation: 2025,
  },
  {
    id: "Kathy Chen 0",
    roles: ["Developer", "Product Manager"],
    graduation: 2025,
  },
  {
    id: "Leo Friedman 0",
    roles: ["Developer"],
    graduation: 2025,
  },
  {
    id: "Lisa Liu 0",
    roles: ["Developer"],
    graduation: 2024,
  },
  {
    id: "Michael Sullivan 0",
    roles: ["Developer", "Engineering Manager"],
  },
  {
    id: "Pranav Soma 0",
    roles: ["Developer", "Engineering Manager"],
    graduation: 2025,
  },
  {
    id: "Ramtin Tajbakhsh 0",
    roles: ["Developer"],
    graduation: 2024,
  },
  {
    id: "Rohan Sachdeva 0",
    roles: ["Developer"],
    graduation: 2025,
  },
  {
    id: "Rachel Wei 0",
    roles: ["Developer", "Product Manager"],
    graduation: 2025,
  },
  {
    id: "Sophia Yu 0",
    roles: ["Developer"],
    graduation: 2025,
  },
  {
    id: "Sophia Zhu 0",
    roles: ["Developer"],
    graduation: 2024,
  },
  {
    id: "Alice Lam 0",
    roles: ["Designer"],
    graduation: 2025,
  },
  {
    id: "Hieu Phan 0",
    roles: ["Designer"],
    graduation: 2024,
  },
  {
    id: "Joanne Tsai 0",
    roles: ["Designer", "Marketing Lead"],
    graduation: 2025,
  },
  {
    id: "Justin Kim 0",
    roles: ["Designer"],
    graduation: 2025,
  },
  {
    id: "Nandini Desai 0",
    roles: ["Designer", "VP Products"],
  },
  {
    id: "Nicole Zhi 0",
    roles: ["Designer"],
    graduation: 2025,
  },
  {
    id: "Rain Dong 0",
    roles: ["Designer"],
    graduation: 2024,
  },
  {
    id: "Uma Naik 0",
    roles: ["Designer"],
    graduation: 2024,
  },
  {
    id: "Thoa Nguyen 0",
    roles: ["Designer"],
    graduation: 2025,
  },
  {
    id: "Alexa Mendoza 0",
    roles: ["TEST Developer"],
    graduation: 2024,
  },
  {
    id: "Alexis Vega 0",
    roles: ["TEST Developer", "Developer", "TEST Developer Lead"],
  },
  {
    id: "Kaitlin Calimbahin 0",
    roles: ["TEST Developer"],
    graduation: 2024,
  },
  {
    id: "Luis Marquez 0",
    roles: ["TEST Developer", "Developer", "Product Manager"],
  },
  {
    id: "Nola Seyoum 0",
    roles: ["TEST Developer"],
    graduation: 2024,
  },
  {
    id: "Verania Salcido 0",
    roles: ["TEST Developer", "Developer", "Socials Lead"],
    graduation: 2025,
  },
  {
    id: "Zoe Kothari 0",
    roles: ["TEST Designer"],
    graduation: 2024,
  },
  {
    id: "Jesus Azpitarte 0",
    roles: ["TEST Designer", "Developer"],
  },
  {
    id: "Nancy Liu 0",
    roles: ["TEST Designer", "Designer", "VP Design"],
  },
  {
    id: "Vivian Liu 1",
    roles: ["TEST Designer", "Designer"],
  },
  {
    id: "Adam Rolander 0",
    roles: ["Developer"],
  },
  {
    id: "Anirudh Annabathula 0",
    roles: ["Developer"],
  },
  {
    id: "Annabelle Guiditta 0",
    roles: ["Developer", "Product Manager"],
  },
  {
    id: "Brandon Jonathan 0",
    roles: ["Developer", "Product Manager"],
  },
  {
    id: "Isabel Ku 0",
    roles: ["Developer"],
  },
  {
    id: "Jeffrey Liu 0",
    roles: ["Developer"],
  },
  {
    id: "Jordan Junaidi 0",
    roles: ["Developer", "Engineering Manager"],
  },
  {
    id: "Ketan Mittal 0",
    roles: ["Developer", "Engineering Manager"],
  },
  {
    id: "Kevin Wu 0",
    roles: ["Developer"],
    graduation: 2025,
  },
  {
    id: "Kile Hsu 0",
    roles: ["Developer"],
    graduation: 2025,
  },
  {
    id: "Kiruthika Marikumaran 0",
    roles: ["Developer"],
    graduation: 2025,
  },
  {
    id: "Navyaa Gupta 0",
    roles: ["Developer", "Engineering Manager"],
  },
  {
    id: "Numaan Formoli 0",
    roles: ["Developer"],
    graduation: 2025,
  },
  {
    id: "Philip Chen 0",
    roles: ["Developer", "Engineering Manager"],
  },
  {
    id: "Raymond Wu 0",
    roles: ["Developer"],
  },
  {
    id: "Rudraksh Bhandari 0",
    roles: ["Developer"],
  },
  {
    id: "Shashwat Bhandari 0",
    roles: ["Developer"],
  },
  {
    id: "Srikar Eranky 0",
    roles: ["Developer", "Product Manager"],
  },
  {
    id: "Sur Shah 0",
    roles: ["Developer", "VP Operations"],
  },
  {
    id: "Sweekrit Bhatnagar 0",
    roles: ["Developer"],
  },
  {
    id: "Unnati Goyal 0",
    roles: ["Developer"],
  },
  {
    id: "Weston Zong 0",
    roles: ["Developer", "Engineering Manager"],
  },
  {
    id: "William Wu 1",
    roles: ["Developer"],
  },
  {
    id: "Yifei Xue 0",
    roles: ["Developer"],
  },
  {
    id: "Yixuan Li 0",
    roles: ["Developer", "VP Technology"],
  },
  {
    id: "Yunshan Li 0",
    roles: ["Developer"],
    graduation: 2025,
  },
  {
    id: "Akira Wolfe 0",
    roles: ["Designer"],
    graduation: 2025,
  },
  {
    id: "Alice Guo 0",
    roles: ["Designer", "TEST Design Lead"],
  },
  {
    id: "Allison Huang 0",
    roles: ["Designer"],
  },
  {
    id: "Irene Joo 0",
    roles: ["Designer"],
  },
  {
    id: "Ivan Rim 0",
    roles: ["Designer"],
  },
  {
    id: "Kristen Lee 0",
    roles: ["Designer"],
  },
  {
    id: "Liam Lai 0",
    roles: ["Designer"],
  },
  {
    id: "Marilyn Hoang 0",
    roles: ["Designer"],
    graduation: 2025,
  },
  {
    id: "Renato Pimentel 0",
    roles: ["Designer"],
  },
  {
    id: "Alyssia Almanza 0",
    roles: ["TEST Developer", "Developer"],
  },
  {
    id: "Charlie Suarez Robles 0",
    roles: ["TEST Developer", "Developer"],
  },
  {
    id: "Edward Millan 0",
    roles: ["TEST Developer", "Developer"],
  },
  {
    id: "Joana Peralta 0",
    roles: ["TEST Developer"],
    graduation: 2025,
  },
  {
    id: "Kate Songpetchmongkol 0",
    roles: ["TEST Developer", "Designer"],
  },
  {
    id: "Angelica Facundo Arguilla 0",
    roles: ["TEST Designer", "Designer"],
    graduation: 2025,
  },
  {
    id: "Hillary Co 0",
    roles: ["TEST Designer", "Designer", "Marketing Lead"],
  },
  {
    id: "Johnny Tiangco 0",
    roles: ["TEST Designer", "Designer"],
  },
  {
    id: "Sylvie Tran 0",
    roles: ["TEST Designer", "Designer"],
  },
] as const satisfies readonly RawPerson[];

type PersonId = (typeof rawPeople)[number]["id"];

// Sort and validate data.
const mutablePeople: Member[] = rawPeople.map((p) => {
  // Get the person's name by removing the number from the end of the ID.
  // For consistency, also assert that every ID ends with a number.
  const trailingNumberRegex = /\s+\d+$/;
  if (!trailingNumberRegex.test(p.id)) {
    throw new Error(`Format of person ID ${JSON.stringify(p.id)} is incorrect`);
  }
  return { ...p, name: p.id.replace(trailingNumberRegex, "") };
});
mutablePeople.sort(
  makeComparator(({ roles, id, ...person }) => [
    person.graduation ?? 9999,
    allRoles.indexOf(roles[roles.length - 1]),
    id,
  ]),
);
assertUniqueKey(mutablePeople, "id");

const allPeople = mutablePeople as readonly Member[];
const visiblePeople = allPeople.filter((person) => !person.hidden);

// Create arrays with only alumni and only members.
function isAlumnus(member: Member): member is Alumnus {
  return "graduation" in member;
}
const allAlumni: readonly Alumnus[] = visiblePeople.filter(isAlumnus);
const allMembers: readonly Member[] = visiblePeople.filter((person) => !isAlumnus(person));

export { allAlumni, allMembers, allPeople, allRoles };
export type { Alumnus, Member, PersonId, Role };
