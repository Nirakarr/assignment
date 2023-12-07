import express from "express";
import multer from "multer";
import conn from "../config/db.js";

const router = express.Router();

// img storage confing
var imgconfig = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./userUploads");
  },
  filename: (req, file, callback) => {
    // Use the current timestamp as a unique identifier
    const uniqueId = Date.now();
    const fileName = `image-${uniqueId}.image.jpg`;
    callback(null, fileName);
  },
});

// img filter
const isImage = (req, file, callback) => {
  if (file.mimetype.startsWith("image")) {
    callback(null, true);
  } else {
    callback(null, Error("only image is allowed"));
  }
};

var upload = multer({
  storage: imgconfig,
  fileFilter: isImage,
});

// CREATE - Register a new user with photo
router.post("/createuser", upload.single("Photo"), (req, res) => {
  const { UserName, FullName, Email, Phone, CompanyId } = req.body;
  const Photo = req.file.filename; // Use the generated filename

  // Check if the CompanyId exists in the company table
  conn.query(
    "SELECT * FROM company WHERE id = ?",
    [CompanyId],
    (companyErr, companyResult) => {
      if (companyErr) {
        console.error("Error checking CompanyId:", companyErr);
        return res
          .status(500)
          .json({ status: 500, error: "Internal Server Error" });
      }

      if (companyResult.length === 0) {
        return res
          .status(404)
          .json({ status: 404, error: "Company not found" });
      }

      // Insert new user into the user table
      conn.query(
        "INSERT INTO user (UserName, FullName, Phone, Email, Photo, CompanyId) VALUES (?, ?, ?, ?, ?, ?)",
        [UserName, FullName, Phone, Email, Photo, CompanyId],
        (err, result) => {
          if (err) {
            console.error("Error adding User:", err);
            return res
              .status(500)
              .json({ status: 500, error: "Internal Server Error" });
          }

          // Fetch the user data with the inserted id
          conn.query(
            "SELECT * FROM user WHERE id = ?",
            [result.insertId],
            (fetchErr, fetchResult) => {
              if (fetchErr) {
                console.error("Error fetching User data:", fetchErr);
                return res
                  .status(500)
                  .json({ status: 500, error: "Internal Server Error" });
              }

              // Construct the final response
              const responseData = {
                ...fetchResult[0],
                Photo: Photo, // Change the field name back to Photo
              };

              return res.status(201).json({
                status: 201,
                data: responseData,
              });
            }
          );
        }
      );
    }
  );
});

// READ - Get all users
router.get("/getallusers", (req, res) => {
  try {
    conn.query(
      "SELECT id,UserName, FullName, Phone, Email, Photo, CompanyId FROM user",
      (err, result) => {
        if (err) {
          console.error("Error fetching users:", err);
          res.status(500).json({ status: 500, error: "Internal Server Error" });
        } else {
          res.status(200).json({ status: 200, data: result });
        }
      }
    );
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ status: 500, error: "Internal Server Error" });
  }
});

// READ - Get user by ID
router.get("/getuserbyid/:id", (req, res) => {
  const userId = req.params.id;

  try {
    conn.query("SELECT * FROM user WHERE id = ?", [userId], (err, result) => {
      if (err) {
        console.error("Error fetching user:", err);
        res.status(500).json({ status: 500, error: "Internal Server Error" });
      } else {
        if (result.length === 0) {
          res.status(404).json({ status: 404, error: "User not found" });
        } else {
          res.status(200).json({ status: 200, data: result[0] });
        }
      }
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ status: 500, error: "Internal Server Error" });
  }
});

// UPDATE - Update user by ID
router.put("/updateuser/:id", upload.single("Photo"), (req, res) => {
  const userId = req.params.id;
  const { UserName, FullName, Email, Phone, CompanyId } = req.body;
  const Photo = req.file ? req.file.filename : null; // Use the generated filename if a new profile picture is provided

  // Check if the CompanyId exists in the company table
  conn.query(
    "SELECT * FROM company WHERE id = ?",
    [CompanyId],
    (companyErr, companyResult) => {
      if (companyErr) {
        console.error("Error checking CompanyId:", companyErr);
        res.status(500).json({ status: 500, error: "Internal Server Error" });
        return;
      }

      if (companyResult.length === 0) {
        res.status(404).json({ status: 404, error: "Company not found" });
        return;
      }

      // Update the user with the validated CompanyId
      try {
        conn.query(
          "UPDATE user SET UserName = ?, FullName = ?, Email = ?, Phone = ?, Photo = ?, CompanyId = ? WHERE id = ?",
          [UserName, FullName, Email, Phone, Photo, CompanyId, userId],
          (err, result) => {
            if (err) {
              console.error("Error updating user:", err);
              res
                .status(500)
                .json({ status: 500, error: "Internal Server Error" });
            } else {
              if (result.affectedRows === 0) {
                res.status(404).json({ status: 404, error: "User not found" });
              } else {
                console.log("User updated successfully");
                res.status(200).json({
                  status: 200,
                  data: {
                    UserName,
                    FullName,
                    Email,
                    Phone,
                    Photo,
                    CompanyId,
                  },
                });
              }
            }
          }
        );
      } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ status: 500, error: "Internal Server Error" });
      }
    }
  );
});

// DELETE - Delete user by ID
router.delete("/deleteuser/:id", (req, res) => {
  const userId = req.params.id;

  try {
    conn.query("DELETE FROM user WHERE id = ?", [userId], (err, result) => {
      if (err) {
        console.error("Error deleting user:", err);
        res.status(500).json({ status: 500, error: "Internal Server Error" });
      } else {
        if (result.affectedRows === 0) {
          res.status(404).json({ status: 404, error: "User not found" });
        } else {
          console.log("User deleted successfully");
          res
            .status(200)
            .json({ status: 200, message: "User deleted successfully" });
        }
      }
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ status: 500, error: "Internal Server Error" });
  }
});

export default router;
