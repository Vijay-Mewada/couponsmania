var db = require("../../config/dbConnection");

// controller to add new coupons
add_coupons = (req, res) => {
console.log(req.body);
    if (req.body) {
        var categoryId = req.body.categoryId ? parseInt(req.body.categoryId) : 0
        var companyId = req.body.companyId ? parseInt(req.body.companyId) : 0
        var code = req.body.code ? req.body.code : 'no coupon code'
        var title = req.body.title ? req.body.title : 'copoun'
        var description = req.body.description ? req.body.description : ''
        var validity = req.body.validity ? req.body.validity : ''
    }
    // var image_filename = ''
    // if (req.file) {
    //     var image_filename = req.file.filename ? req.file.filename : ''
    // }
    //  check for comapny name if already present then get id or inset new company name and get new id
    //  insert all data into coupons table 
    db.query(
        `INSERT INTO coupons (title,code,description,validity,category,company) VALUES ("${title}",'${code}',"${description}",'${validity}',${categoryId},${companyId})`,
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
                    message: 'coupon added successfully',
                    content: [data],
                    is_success: true,
                });

            }
        }
    );
};

// controller to update new coupons
update_coupons = (req, res) => {

    //  write query here

    res.send('update coupons');
};

// controller to get coupons by id
get_coupons_by_id = (req, res) => {

    //  write query here

    res.send('get by id coupons');
};

// controller to get coupons by category
get_coupons_by_category = (req, res) => {
console.log('body-----', req.body)
    db.query(
        `SELECT * FROM coupons INNER JOIN companies on coupons.company = companies.id WHERE category IN (${req.body.categoryIds})`,
        (err, result) => {
            // user does not exists
            if (err) {
                res.status(200).send({
                    message: err,
                    content: [],
                    is_success: false,
                });
                // throw err;
            } else {
                let coupon = [result];

                return res.status(200).json({
                    message: "filtered coupon list",
                    content: coupon[0],
                    is_success: true,
                });
            }
        }
    );
};

// controller toget coupons by company
get_coupons_by_company = (req, res) => {

    //  write query here

    res.send('get coupons by company');
};

// controller to get ALl coupons
get_all_coupons = (req, res) => {
    db.query(
        `SELECT coupons.id, coupons.title, coupons.code, coupons.description, coupons.validity, companies.image, category.id as category_id, category.name as category_name, companies.id as company_id, companies.name as company_name  FROM coupons
        INNER JOIN category ON coupons.category=category.id INNER JOIN companies on coupons.company = companies.id;`,
        (err, result) => {
            // user does not exists
            if (err) {
                res.status(200).send({
                    message: err,
                    content: [],
                    is_success: false,
                });
                // throw err;
            } else {
                let coupon = [result];

                return res.status(200).json({
                    message: "coupon list",
                    content: coupon[0],
                    is_success: true,
                });
            }
        }
    );
};


module.exports = {
    get_all_coupons,
    add_coupons,
    update_coupons,
    get_coupons_by_category,
    get_coupons_by_company,
    get_coupons_by_id
}