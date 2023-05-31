import express from "express";
import {
	getReceipts,
	createReceipt,
	getReceiptNumber,
	deleteReceipt,
} from "../controllers/MTMAController.js";
const router = express.Router();
router.get("/getReceipts", getReceipts);
router.post("/createReceipt", createReceipt);
router.get("/getReceipts/:id", getReceipts);
router.get("/getReceiptNumber", getReceiptNumber);
router.delete("/deleteReceipt/:id", deleteReceipt);
router.get("/", (req, res) => {
	res.status(200).send("MTMAS Server Up and running");
});
export default router;
