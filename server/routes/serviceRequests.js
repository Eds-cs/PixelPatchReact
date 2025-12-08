// routes/serviceRequests.js
import express from "express";
import db from "../config/db.js";
import { upload } from "../middleware/upload.js";
import { authRequired } from "../middleware/authMiddleware.js";

const router = express.Router();

/* -----------------------------------------------------------
   CREATE SERVICE REQUEST
------------------------------------------------------------ */
router.post(
  "/",
  authRequired,
  upload.array("attachments", 10),
  async (req, res) => {
    try {
      const {
        shop_id,
        service_type,
        device_id,
        issue_description,
        pickup_address_id,
        preferred_date,
        notes
      } = req.body;

      const client_id = req.user.id;

      // Validate required fields
      if (!shop_id || !device_id || !pickup_address_id || !issue_description) {
        return res.status(400).json({ message: "Some required fields missing." });
      }

      /* -----------------------------------------------------------
         INSERT MAIN SERVICE REQUEST (PROMISE VERSION)
      ------------------------------------------------------------ */
      const [result] = await db.promise().query(
        `INSERT INTO service_requests 
          (client_id, shop_id, service_type, device_id, issue_description, pickup_address_id,
           preferred_date, notes, estimated_price, status, created_at, updated_at)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, 0.00, 'PENDING', NOW(), NOW())`,
        [
          client_id,
          shop_id,
          service_type,
          device_id,
          issue_description,
          pickup_address_id,
          preferred_date,
          notes
        ]
      );

      const request_id = result.insertId;

      /* -----------------------------------------------------------
         INSERT ATTACHMENTS
      ------------------------------------------------------------ */
      if (req.files?.length > 0) {
        for (const file of req.files) {
          await db.promise().query(
            `INSERT INTO service_request_attachments 
              (attachment_id, service_request_id)
             VALUES (?, ?)`,
            [file.filename, request_id]
          );
        }
      }

      /* -----------------------------------------------------------
         LOG STATUS HISTORY
      ------------------------------------------------------------ */
      await db.promise().query(
        `INSERT INTO request_status_history 
          (request_id, status, updated_by, remarks, updated_at)
         VALUES (?, ?, ?, ?, NOW())`,
        [
          request_id,
          "PENDING",
          client_id,
          "Client submitted request"
        ]
      );

      /* -----------------------------------------------------------
         SUCCESS RESPONSE
      ------------------------------------------------------------ */
      res.json({
        message: "Service request created successfully",
        request_id
      });

    } catch (err) {
      console.error("Service Request Error:", err);
      res.status(500).json({
        message: "Server error creating service request"
      });
    }
  }
);

export default router;
