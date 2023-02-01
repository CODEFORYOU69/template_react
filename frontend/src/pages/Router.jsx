// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import { useCurrentUserContext } from "../contexts/userContext";

// import { useCurrentResponsiveContext } from "../contexts/responsiveContext";

// export default function Router() {
//   const { user } = useCurrentUserContext();

//   const { isDesktop, isMobile, isTablet, isLittleMobile } =
//     useCurrentResponsiveContext();

//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />

//       {(isMobile || isTablet || isLittleMobile) && (
//         <>
//           <Route path="/connexion" element={<Connexion />} />
//           <Route path="/inscription" element={<Registration />} />
//           <Route
//             path="/menu"
//             element={
//               <Protected verifyCondition={user.id}>
//                 <Menu />
//               </Protected>
//             }
//           />
//           <Route
//             path="/profil"
//             element={
//               <Protected verifyCondition={user.id}>
//                 <Profil />
//               </Protected>
//             }
//           />
//           <Route
//             path="/Contact"
//             element={
//               <Protected verifyCondition={user.id}>
//                 <Contact />
//               </Protected>
//             }
//           />
//           <Route path="/forgottenpassword" element={<NewPassword />} />
//           <Route
//             path="/resetpassword/:passwordtoken"
//             element={<ResetPassword />}
//           />

//           {user.id && user.is_admin === 1 && (
//             <>
//               <Route path="/Admin-User" element={<AdminUser />} />
//               <Route path="/Admin" element={<Dashboard />} />
//               <Route path="/Admin-Scores" element={<Dashboard />} />
//               <Route path="/Admin-Badges" element={<Dashboard />} />
//               <Route path="/Admin-Pictures" element={<Dashboard />} />
//               <Route path="/Admin-Modif-User" element={<ModifUser />} />
//               <Route path="/Admin-Create-User" element={<CreateUser />} />
//               <Route path="/Admin-Works" element={<BoardWork />} />
//               <Route
//                 path="/Admin-Validate-Work"
//                 element={<AdminValidateWork />}
//               />
//               <Route path="/Admin-Messages" element={<AdminMessage />} />
//               <Route path="/Admin-Artist" element={<AdminArtist />} />
//               <Route path="/Admin-Shop" element={<AdminShop />} />
//               <Route path="/Admin-Artwork" element={<AdminArtWork />} />
//               <Route path="/Admin-ArtworkPict" element={<ArtWorkPictures />} />
//             </>
//           )}
//         </>
//       )}

//       <Route path="*" element={<Error />} />
//     </Routes>
//   );
// }
