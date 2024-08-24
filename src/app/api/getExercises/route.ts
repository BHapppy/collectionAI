import { NextRequest, NextResponse } from "next/server";
import { IExercise } from "@/types";

import { allExercises } from "./BD(test)";

export function GET(req: NextRequest) {
    const { searchParams } = req.nextUrl

    const id = searchParams.get("id")
    if(id) {  
        return NextResponse.json<IExercise | string>(
            allExercises.find(item => item.id === id) || "item not found!"
        )
    }
    return NextResponse.json<IExercise[]>(allExercises)
}