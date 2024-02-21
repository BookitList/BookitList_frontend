import React,{useEffect} from 'react';
// import { useRecoilState } from "recoil";
// import { userInfoState } from "../recoilAtoms";
import { useNavigate } from 'react-router-dom';
// import axios from "axios";
// import api from 'components/api.js';

import Header from 'components/Header/Header.js';

const LoginHandeler = () => {
  const navigate = useNavigate();
  let params = new URL(window.location.href).searchParams;
  let access_token = params.get("accessToken");
  let refresh_token = params.get("refreshToken");
  // const [accessTokenFetching, setAccessTokenFetching] =useState(false)

  // console.log("access_token: ", access_token)
  // console.log("refresh_token: ", refresh_token)
  localStorage.setItem("access_token", access_token);
  localStorage.setItem("refresh_token", refresh_token);

  useEffect(() => {
    if (access_token) {
      navigate("/");
    }
  }, [access_token, navigate]);
  

  // console.log("refresh_token: ", refresh_token)

  // const getAccessToken = async () => {
  //   if (accessTokenFetching) return; // Return early if fetching

  //   console.log("getAccessToken 호출");


  //   try {
  //       setAccessTokenFetching(true); // Set fetching to true

  //       const response = await api.post( //4가지 전달
  //           "/auth/kakao",
  //           {},
  //           {
  //               headers: {
  //                   "Content-Type": "application/x-www-form-urlencoded:charset=utf-8",
  //                   Authorization : `Bearer ${access_token}`

  //               },
  //           }
  //       );
        
  //       const access_token = response.data.accessToken;
  //       console.log("accessToken:", access_token);
  //       setAccessTokenFetching(false); // Reset fetching to false
  //       navigate("/");
        
  //   } catch (error) {
  //       console.error("Error:", error);
  //       setAccessTokenFetching(false); // Reset fetching even in case of error
  //   }
  // };

//   .then((res)=>{
//     console.log("데이터 성공 : ");
//     console.log(res);
//     const { data } = res;
//     const {access_token} = data;

//     if (access_token) {
//       console.log(`Bearer ${access_token}`);
//       axios
//       .post(
//         "/api/auth/kakao",
//         {},
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization : `Baearer ${access_token}`

//         },
//         }
//       )}
// });
  // const post= async()=>{
  //   if (accessTokenFetching) return; // Return early if fetching

  //   console.log("getAccessToken 호출");

  //   const response = await axios.post(
  //     "https://api.bookitlist.store/books",
  //     {
  //         authorizationCode: access_token,
  //     },
  //     {
  //         headers: {
  //             "Content-Type": "application/json",
  //             Authorization : "Baearer "+accessToken,

  //         },
  //     }
  //   );
  //   const accessToken = response.data.accessToken;
  //       console.log("accessToken:", accessToken);
  //       navigate("/");
  //       setAccessTokenFetching(false); // Reset fetching to false
  //   } catch (error) {
  //       console.error("Error:", error);
  //       setAccessTokenFetching(false); // Reset fetching even in case of error
  //   }
  // }

//   useEffect(() => {
//     if (access_token) {
//         getAccessToken();
//     }
// }, [access_token]);

  return (
    <div className="LoginHandeler">
      <Header access_token={access_token} />
      <div className="notice">
        <p>로그인 중입니다.</p>
        <p>잠시만 기다려주세요.</p>
      </div>
    </div>
  );
};

export default LoginHandeler;