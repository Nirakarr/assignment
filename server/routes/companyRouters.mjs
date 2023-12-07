import express from "express";
import multer from "multer";
import conn from "../config/db.js";

const router = express.Router();

var imgconfig = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./uploads");
  },
  filename: (req, file, callback) => {
    callback(null, `image-${Date.now()}.${file.originalname}`);
  },
});

// img filter
const isImage = (req, file, callback) => {
  if (file.mimetype.startsWith("image")) {
    callback(null, true);
  } else {
    callback(null, Error("Only image is allowed"));
  }
};

var upload = multer({
  storage: imgconfig,
  fileFilter: isImage,
});

// CREATE - Register a new company with photo
router.post("/postcompanydetails", upload.single("CompanyLogo"), (req, res) => {
  const { CompanyName, Phone, Email } = req.body;
  const CompanyLogo = req.file.filename; // Use the generated filename

  try {
    conn.query(
      "INSERT INTO company (CompanyName, Phone, Email, CompanyLogo) VALUES (?, ?, ?, ?)",
      [CompanyName, Phone, Email, CompanyLogo],
      (err, result) => {
        if (err) {
          console.error("Error adding company:", err);
          res.status(500).json({ status: 500, error: "Internal Server Error" });
        } else {
          console.log("Company added successfully");
          res.status(201).json({
            status: 201,
            data: { CompanyName, Phone, Email, CompanyLogo },
          });
        }
      }
    );
  } catch (error) {
    console.error("Error:", error);
    res.status(422).json({ status: 422, error });
  }
});

// READ - Get all companies
router.get("/getdata", (req, res) => {
  try {
    conn.query(
      "SELECT id, CompanyName, Phone, Email, CompanyLogo FROM company",
      (err, result) => {
        if (err) {
          console.error("Error getting company data:", err);
          res.status(500).json({ status: 500, error: "Internal Server Error" });
        } else {
          res.status(200).json({ status: 200, data: result });
        }
      }
    );
  } catch (error) {
    res.status(422).json({ status: 422, error });
  }
});

// READ - Get company by ID
router.get("/getcompanybyid/:id", (req, res) => {
  const companyId = req.params.id;

  try {
    conn.query(
      "SELECT * FROM company WHERE id = ?",
      [companyId],
      (err, result) => {
        if (err) {
          console.error("Error fetching company:", err);
          res.status(500).json({ status: 500, error: "Internal Server Error" });
        } else {
          if (result.length === 0) {
            res.status(404).json({ status: 404, error: "Company not found" });
          } else {
            res.status(200).json({ status: 200, data: result[0] });
          }
        }
      }
    );
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ status: 500, error: "Internal Server Error" });
  }
});

// UPDATE - Update company by ID
router.put("/updatecompany/:id", upload.single("CompanyLogo"), (req, res) => {
  const companyId = req.params.id;
  const { CompanyName, Phone, Email } = req.body;
  const CompanyLogo = req.file ? req.file.filename : null; // Use the generated filename if a new image is provided

  try {
    conn.query(
      "UPDATE company SET CompanyName = ?, Phone = ?, Email = ?, CompanyLogo = ? WHERE id = ?",
      [CompanyName, Phone, Email, CompanyLogo, companyId],
      (err, result) => {
        if (err) {
          console.error("Error updating company:", err);
          res.status(500).json({ status: 500, error: "Internal Server Error" });
        } else {
          if (result.affectedRows === 0) {
            res.status(404).json({ status: 404, error: "Company not found" });
          } else {
            console.log("Company updated successfully");
            res.status(200).json({
              status: 200,
              data: { CompanyName, Phone, Email, CompanyLogo },
            });
          }
        }
      }
    );
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ status: 500, error: "Internal Server Error" });
  }
});

// DELETE - Delete company and related users
router.delete("/deleteCompany/:companyId", (req, res) => {
  const companyId = req.params.companyId;

  // Begin the transaction
  conn.beginTransaction((beginErr) => {
    if (beginErr) {
      console.error("Error beginning transaction:", beginErr);
      return res
        .status(500)
        .json({ status: 500, error: "Internal Server Error" });
    }

    // Delete users first (child table)
    conn.query(
      "DELETE FROM user WHERE CompanyId = ?",
      [companyId],
      (deleteUserErr) => {
        if (deleteUserErr) {
          console.error("Error deleting users:", deleteUserErr);
          return conn.rollback(() => {
            res
              .status(500)
              .json({ status: 500, error: "Internal Server Error" });
          });
        }

        // Then delete the company (parent table)
        conn.query(
          "DELETE FROM company WHERE id = ?",
          [companyId],
          (deleteCompanyErr) => {
            if (deleteCompanyErr) {
              console.error("Error deleting company:", deleteCompanyErr);
              return conn.rollback(() => {
                res
                  .status(500)
                  .json({ status: 500, error: "Internal Server Error" });
              });
            }

            // Commit the transaction
            conn.commit((commitErr) => {
              if (commitErr) {
                console.error("Error committing transaction:", commitErr);
                return conn.rollback(() => {
                  res
                    .status(500)
                    .json({ status: 500, error: "Internal Server Error" });
                });
              }

              res.status(200).json({
                status: 200,
                message: "Company and related users deleted successfully",
              });
            });
          }
        );
      }
    );
  });
});

export default router;
