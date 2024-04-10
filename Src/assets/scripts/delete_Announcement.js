// //Delete Announcement//
// const deleteAnnouncement = async (idelement) => {
//   let request = {
//     method: "DELETE",
//     headers: {
//       "Content-Type": "application/json; charset=utf-8",
//     },
//     body: JSON.stringify({ id: idelement }),
//   };

//   let apiRequest = fetch("http://localhost:3000/delete", request);
//   let reponse = await apiRequest;
//   console.log(reponse.status);
//   if (reponse.status === 200) {
//     console.log("supprimé");
//   }
// };

// getAllAnnouncements();
