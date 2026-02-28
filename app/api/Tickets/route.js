import Ticket from "../../(models)/Ticket"
import { NextResponse } from "next/server"

export async function POST(req) {
    console.log("POST MAN")
    try {
        const body = await req.json()
        const ticketData = body.formData
        await Ticket.create(ticketData)

        return NextResponse.json({ message: "Ticket Created" }, { status: 500})
    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500})
    }
}

export async function GET() {
    

    try {
        const tickets = await Ticket.fing()
        return NextResponse.json({ tickets }, { status: 500 })
    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 })
    }
}