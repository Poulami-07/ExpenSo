// export const useGetUserInfo = () =>{
//     const {name, profilePhoto, useID, isAuth} = JSON.parse(
//         localStorage.getItem("auth")
//         );

//         return {name, profilePhoto, useID, isAuth};
// };

export const useGetUserInfo = () => {
    const { name, profilePhoto, userID, isAuth } =
      JSON.parse(localStorage.getItem("auth")) || {};
  
    return { name, profilePhoto, userID, isAuth };
  };