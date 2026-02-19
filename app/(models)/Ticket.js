import mongoose, { Schema } from 'mongoose'

mongoose.connect(process.env.MONGODB_URI)
mongoose.Promise = global.Promise

const ticketSchema = new Schema(
    {
        title: String,
        description: String,
        category: String,
        priotirity: Number,
        progress: Number,
        status: String,
        active: Boolean,
    },
    {
        timestamp: true,
    }
)

const Ticket = mongoose.model.Ticket || mongoose.model("Ticket", ticketSchema)

export default Ticket