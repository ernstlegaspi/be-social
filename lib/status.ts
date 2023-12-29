import { NextResponse } from "next/server"

export const res = (code: number) => NextResponse.json("", { status: code })
