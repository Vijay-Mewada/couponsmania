var db = require("../../config/dbConnection");

// controller to add new category
add_category = (req, res, next) => {
console.log('body',req.body);
    try {
        db.query(
            `INSERT INTO category (name) SELECT * FROM (SELECT '${req.body.category}') AS tmp
            WHERE NOT EXISTS ( SELECT name FROM category WHERE name = '${req.body.category}') LIMIT 1`,
            (err, result) => {
                if (err) {
                    res.status(200).send({
                        message: 'category not created !',
                        content: [],
                        error: err,
                        is_success: false,
                    });
                    // throw err;
                } else {
                    let data = [result];
                    res.status(200).json({
                        message: 'category added successfully',
                        content: [data],
                        is_success: true,
                    });

                }
            }
        );
    } catch (err) {
        res.status(200).send({
            message: err,
            content: [],
            is_success: false,
        });
    }

};

// controller to update new category
update_category = (req, res) => {

    //  write query here

    res.send('update category');
};

// controller to getcate byt id
get_category_by_id = (req, res) => {

    //  write query here

    res.send('get by id category');
};

// controller to get ALl category
get_all_category = (req, res) => {
    db.query(`SELECT * FROM category`, (err, result) => {
        // db.query(`SELECT * FROM onlinecoupons`, (err, result) => {
        // user does not exists
        if (err) {
          res.status(200).send({
            message: err,
            content: [],
            is_success: false,
          });
        } else {
          let coupon = [result];
          return res.status(200).json({
            message: "Category list",
            content: coupon[0],
            is_success: true,
          });
        }
      });
};

module.exports = {
    add_category,
    get_all_category,
    get_category_by_id,
    update_category
}