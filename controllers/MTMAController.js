import mt from "../models/MTMA.js";
export const getReceipts = async (req, res) => {
	try {
		const students = await mt.find();
		console.log("Success");
		res.status(200).json({ data: students, status: 200 });
	} catch (error) {
		console.log(error);
		res.status(404).json({ message: error.message, status: 404 });
	}
};

export const createReceipt = async (req, res) => {
	// const student = req.body;
	// const newStudent = new mt(student);
	// try {
	//     await newStudent.save();
	//     res.status(201).json(newStudent);
	// } catch (error) {
	//     res.status(409).json({ message: error.message });
	// }
	try {
		const { studentName, paymentDate, instituteName } = req.body;
		// console.log(name, paymentDate);
		const existing = await mt.findOne({ studentName, paymentDate, instituteName });
		console.log(existing);
		if (existing) {
			console.log("Receipt already exists");
			res.status(400).json({ message: "Receipt already exists", status: 400 });
		} else {
			const newReceipt = await mt.create(req.body);
			console.log("Success");
			res.status(200).json({ message: "Receipt created successfully", status: 200 });
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: error.message });
	}
};

export const getReceiptNumber = async (req, res) => {
	try {
		const receipts = await mt.countDocuments();
		const receiptNumber = (new Date().getFullYear() % 100) * 1000 + receipts + 1;
		// const receiptNumber = receipts;
		res.status(200).json(receiptNumber);
		console.log("Success");
	} catch (error) {
		console.log(error);
		res.status(404).json({ message: error.message });
	}
};

export const deleteReceipt = async (req, res) => {
	try {
		const { id } = req.params;
		const receipt = await mt.findOneAndDelete({ receipt: id });
		if (!receipt) {
			return res.status(404).json({ message: "No receipt with that id" });
		}
		// const newData = await mt.find();
		console.log("Success");
		res.json({ message: "Receipt deleted successfully", status: 200 });
	} catch (error) {
		console.log(error);
		res.status(400).json({ message: error.message, status: 400 });
	}
};
