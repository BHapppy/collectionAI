import { NextRequest, NextResponse } from "next/server";

const fakeUser = {
    email: "example@test.com",
    password: "password"
}

export async function POST(req: NextRequest) {
    const { email, password } = await req.json()

    if(email === fakeUser.email && password === fakeUser.password) {
        return NextResponse.json({
            isSucces: true,
            text: "ok"
        })
    }

    return NextResponse.json({
        isSucces: false,
        text: "Invalid email or password"
    })
}