// "use client";

// import React from "react";
// import SectionHeading from "./SectionHeading";
// import { experiencesData } from "@/lib/data";
// import { useSectionInView } from "@/lib/hooks";
// import { useTheme } from "@/context/ThemeContext";

// export default function Experience() {
//   const { ref } = useSectionInView("Experience");
//   const { theme } = useTheme();

//   return (
//     <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
//       <SectionHeading>My Experience</SectionHeading>
//       <div className="space-y-6">
//         {experiencesData.map((item, index) => {
//           const IconComponent = item.icon;
//           return (
//             <div
//               key={index}
//               className={`p-6 rounded-lg border ${
//                 theme === "light"
//                   ? "bg-gray-100 border-gray-300"
//                   : "bg-gray-800 border-gray-700"
//               }`}
//             >
//               <div className="flex items-center gap-4">
//                 {IconComponent && <IconComponent className="w-10 h-10 text-blue-500" />}
//                 <div>
//                   <h3 className="text-lg font-semibold">{item.title}</h3>
//                   <p className="text-sm text-gray-600 dark:text-gray-300">{item.date}</p>
//                 </div>
//               </div>
//               <p className="mt-2 text-gray-700 dark:text-gray-400">{item.location}</p>
//               <p className="mt-2 text-gray-600 dark:text-gray-300">{item.description}</p>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }
