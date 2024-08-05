// import { NextRequest, NextResponse } from "next/server";
// import axious from "axios";

// import { generateOAuthHeader } from "@/utils/oauth";

// const consumerKey = process.env.CONSUMER_KEY as string;
// const consumerSecret = process.env.CONSUMER_SECRET as string;

// export async function GET(request: NextRequest) {
//   const url = "https://api.schoology.com/v1/users/me";

//   try {
//     const authHeader = generateOAuthHeader(consumerKey, consumerSecret);

//     const response = await axious.get(url, {
//       headers: {
//         Authorization: authHeader,
//       },
//     });
//     return NextResponse.json(response.data, {
//       status: 200,
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//   } catch (error) {
//     return NextResponse.json(
//       {
//         error,
//       },
//       {
//         status: 500,
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );
//   }
// }

import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { generateOAuthHeader } from "../../../utils/oauth";

const consumerKey = process.env.SCHOOLOGY_CONSUMER_KEY as string;
const consumerSecret = process.env.SCHOOLOGY_CONSUMER_SECRET as string;

export async function GET(
  req: NextRequest,
  res: NextResponse
): Promise<NextResponse> {
  const url = "https://api.schoology.com/v1/users/me";

  try {
    const authHeader = generateOAuthHeader(consumerKey, consumerSecret);
    console.log(authHeader);

    const response = await axios.get(url, {
      headers: {
        Authorization: authHeader,
      },
    });

    return NextResponse.json(response.data, {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      {
        status: error.response ? error.response.status : 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
