import mongoose from "mongoose";

const mtmaSchema = mongoose.Schema({
	instituteName: String,
	studentName: String,
	paymentDate: String,
	academicYear: String,
	paymentMethod: String,
	amount: Number,
	std: String,
	receipt: { type: Number, required: true, unique: true },
});
const mtma = mongoose.model("mtma", mtmaSchema);
export default mtma;
