import React,{ useEffect, useState } from 'react';
// import { useRecoilState } from "recoil";
// import { userInfoState } from "../recoilAtoms";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginHandeler = (props) => {
  // const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const navigate = useNavigate();
  let params = new URL(window.location.href).searchParams;
  let access_token = params.get("accessToken");
  let refresh_token = params.get("refreshToken");
  const [accessTokenFetching, setAccessTokenFetching] =useState(false)

  // console.log("access_token: ", access_token)
  // console.log("refresh_token: ", refresh_token)

  const getAccessToken = async () => {
    if (accessTokenFetching) return; // Return early if fetching

    console.log("getAccessToken 호출");

    try {
        setAccessTokenFetching(true); // Set fetching to true

        const response = await axios.post(
            "~~~/api/auth/kakao",
            {
                authorizationCode: access_token,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization : `Bearer ${access_token}`

                },
            }
        )
        .then((res)=>{
          console.log("데이터 성공 : ");
          console.log(res);
          const { data } = res;
          const {access_token} = data;

          if (access_token) {
            console.log(`Bearer ${access_token}`);
            axios
            .post(
              "~~~/api/auth/kakao",
              {},
              {
                headers: {
                  "Content-Type": "application/json",
                  Authorization : `Baearer ${access_token}`

              },
              }
            )}
      });

        const accessToken = response.data.accessToken;
        console.log("accessToken:", accessToken);
        navigate("/");
        setAccessTokenFetching(false); // Reset fetching to false
    } catch (error) {
        console.error("Error:", error);
        setAccessTokenFetching(false); // Reset fetching even in case of error
    }
  };

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
//     if (access_token && !userInfo.accessToken) {
//         getAccessToken();
//     }
// }, [access_token, userInfo]);

  return (
    <div className="LoginHandeler">
      <div className="notice">
        <p>로그인 중입니다.</p>
        <p>잠시만 기다려주세요.</p>
        <div className="spinner">
        </div>
      </div>
    </div>
  );
};

export default LoginHandeler;