// import React from 'react'

//   const testimonials = [
//   {
//     name: "Alice Johnson",
//     role: "Product Manager",
//     avatar: "https://i.pravatar.cc/100?img=1",
//     message:
//       "SmartSave made saving effortless. I reached my vacation goal 2 months earlier than planned!",
//     rating: 5,
//   },
//   {
//     name: "Michael Lee",
//     role: "Software Engineer",
//     avatar: "https://i.pravatar.cc/100?img=2",
//     message:
//       "The automated savings feature changed the way I manage money. Truly life-changing!",
//     rating: 4,
//   },
//   {
//     name: "Sophia Martinez",
//     role: "Freelancer",
//     avatar: "https://i.pravatar.cc/100?img=3",
//     message:
//       "I love how transparent and simple SmartSave is. It feels secure and motivating.",
//     rating: 5,
//   },
// ];

// const testimonies = () => {

//   return (
//    <section className="bg-white py-16 px-6 md:px-20">
//       <div className="max-w-6xl mx-auto text-center">
//         <motion.h2
//           className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
//           initial={{ opacity: 0, y: -30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           What Our Users Say
//         </motion.h2>

//         <motion.p
//           className="text-gray-600 mb-12 max-w-2xl mx-auto"
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           viewport={{ once: true }}
//         >
//           Hear how SmartSave is transforming lives through smarter, simpler
//           savings.
//         </motion.p>

//         <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
//           {testimonials.map((testimonial, index) => (
//             <motion.div
//               key={index}
//               className="bg-gray-50 rounded-2xl shadow-md p-6 text-left hover:shadow-lg transition"
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: index * 0.2 }}
//               viewport={{ once: true }}
//             >
//               <div className="flex items-center mb-4">
//                 <img
//                   src={testimonial.avatar}
//                   alt={testimonial.name}
//                   className="w-12 h-12 rounded-full mr-4"
//                 />
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-800">
//                     {testimonial.name}
//                   </h3>
//                   <p className="text-sm text-gray-500">{testimonial.role}</p>
//                 </div>
//               </div>
//               <p className="text-gray-700 mb-4">“{testimonial.message}”</p>
//               <div className="flex items-center">
//                 {Array.from({ length: testimonial.rating }).map((_, i) => (
//                   <svg
//                     key={i}
//                     className="w-5 h-5 text-yellow-400"
//                     fill="currentColor"
//                     viewBox="0 0 20 20"
//                   >
//                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 00-.364 1.118l1.286 3.966c.3.922-.755 1.688-1.539 1.118L10 14.347l-3.388 2.46c-.784.57-1.838-.196-1.539-1.118l1.286-3.966a1 1 0 00-.364-1.118L2.607 9.394c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.967z" />
//                   </svg>
//                 ))}
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default testimonies
