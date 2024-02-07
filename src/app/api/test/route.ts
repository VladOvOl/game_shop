import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(request:Request) {

    console.log("Function enter")

    let data = await axios.get('https://api.rawg.io/api/games?key=75914cb5b1324db79e107e5342a81c47&page_size=100').then(data=>(data.data))

    console.log("Function get api request")
    console.log(data)
    return NextResponse.json(data)
}