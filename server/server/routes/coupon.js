var express = require("express");
var db = require("../config/dbConnection");
var deleFileMiddleware = require("../middleware/deleteImage.middleware");
var path = require("path");
const multer = require("multer");
const fs = require("fs");
const categoryController  = require("../controllers/category/category.controller");
const companyController  = require("../controllers/company/company.controller");
const couponController  = require("../controllers/coupons/coupons.controller");

const storage = multer.diskStorage({
  destination: './upload/images',
  filename: (req, file, cb) => {
    return cb(null, `${file.fieldname}_${Date.now()}_${path.extname(file.originalname)}`)
  }

})
const upload = multer({
  storage: storage
});

var router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send({
    message: 'index page',
    content: [],
    is_success: true,
  });
});

// ********1********* Category routes ****************//
// Add new category
router.post("/addCategory",categoryController.add_category);
// get all category
router.get("/getAllCategory", categoryController.get_all_category)
// ********************  Category *******************//


// *********2********* company routes******************//
// add new company name 
router.post("/addCompany", upload.single("image") ,companyController.add_company);
// getall companies list
router.get("/getAllCompany",companyController.get_all_company);
// get most 10 used company list
router.get("/getpopularCompany",companyController.get_popular_companies);
// ****************** company routes******************//


// **********3******** coupons routes******************//
// add new coupon
router.post("/addCoupon", couponController.add_coupons)
// get all coupons
router.get("/getAllCoupon", deleFileMiddleware, couponController.get_all_coupons)
// get all coupons by category 
router.post("/getCouponsByCategory", couponController.get_coupons_by_category)
// ****************** coupons routes******************//










router.post("/addCou", upload.single("image"), (req, res, next) => {
  // console.log(req.body, 'add-- ', req.file);
  var image_filename = ''
  if(req.body){
    var categoryName = req.body.category
    var comapnyName = req.body.company
    var code = req.body.code
    var title = req.body.title
    var description = req.body.description
    var validity = req.body.validity
  }
  var categoryId = 0
  var companyId = 0
  if (req.file) {
    image_filename = req.file.filename
  }
  //  check for comapny name if already present then get id or inset new company name and get new id
  db.query(
    `INSERT INTO companies (name)
    SELECT * FROM (SELECT '${comapnyName}') AS tmp
    WHERE NOT EXISTS (
        SELECT name FROM companies WHERE name = '${comapnyName}'
    ) LIMIT 1`,
    (err, result) => {
      if (err) {
        res.status(200).send({
          message: err,
          content: [],
          is_success: false,
        });
        // throw err;
      } else {
        // *** check for category name if already present then get id or inset new category name and get new id
        db.query(
          `INSERT INTO category (name)
          SELECT * FROM (SELECT '${categoryName}') AS tmp
          WHERE NOT EXISTS (
              SELECT name FROM category WHERE name = '${categoryName}'
          ) LIMIT 1`,
          (err, result) => {
            if (err) {
              res.status(200).send({
                message: err,
                content: [],
                is_success: false,
              });
              // throw err;
            } else {
              db.query(
                `SELECT id FROM category where name = '${categoryName}'`,
                (err, result) => {
                  if (err) {
                    res.status(200).send({
                      message: err,
                      content: [],
                      is_success: false,
                    });
                    // throw err;
                  } else {
                    let cat_id = [result];
                    categoryId = cat_id && cat_id[0] && cat_id[0][0] ? cat_id[0][0].id  : 0
                    db.query(
                      `SELECT id FROM companies where name = '${comapnyName}'`,
                      (err, result) => {
                        if (err) {
                          res.status(200).send({
                            message: err,
                            content: [],
                            is_success: false,
                          });
                          // throw err;
                        } else {
                          let comp_id = [result];
                          companyId = comp_id && comp_id[0] && comp_id[0][0] ? comp_id[0][0].id  : 0
                          //  insert all data into coupons table 
                          db.query(
                            `INSERT INTO coupons (title,code,description,validity,category,company,image) VALUES ('${title}','${code}','${description}','${validity}',${categoryId},${companyId},'${image_filename}')`,
                            (err, result) => {
                              if (err) {
                                res.status(200).send({
                                  message: err,
                                  content: [],
                                  is_success: false,
                                });
                                // throw err;
                              } else {
                                let data = [result];
                                res.status(200).json({
                                  message: 'data added successfully',
                                  content: [data],
                                  is_success: true,
                                });



                              }
                            }
                          );


                        }
                      }
                    );
                  }
                }
              );

            }
          }
        );

      }
    }
  );

});
// ****************** coupons routes******************//


module.exports = router;
