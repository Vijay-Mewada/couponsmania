const mysqlCommonData = require("../../config/commonMysql");
var pool = require("../../config/dbConnection");

// controller to add new coupons
add_coupons = (req, res) => {
    if (req.body) {
        var categoryId = req.body.categoryId ? parseInt(req.body.categoryId) : 0
        var companyId = req.body.companyId ? parseInt(req.body.companyId) : 0
        var code = req.body.code ? req.body.code : 'no coupon code'
        var title = req.body.title ? req.body.title : 'copoun'
        var description = req.body.description ? req.body.description : ''
        var validity = req.body.validity ? req.body.validity : ''
        var subcategoryId = req.body.subcategoryId ? req.body.subcategoryId : 0
        var couponUrl = req.body.couponUrl ? req.body.couponUrl : ''
        console.log(req.body)
    
    pool.getConnection(function (err, connection) {
        if (err) {
            res.status(200).send({
                message: err,
                content: [],
                is_success: false
            })
        }
        else {
            connection.query(
                `INSERT INTO coupons (title,code,description,validity,categoryId,companyId, subcategoryId,couponUrl) VALUES ("${title}",'${code}',"${description}","${validity}",${categoryId},${companyId}, ${subcategoryId},"${couponUrl}")`,
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
                        connection.release();

                    }
                }
            );
        }
    })
}
else {
    res.status(200).send({
        message: 'Invalid request',
        content: [],
        is_success: false
    })
}
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
    if (mysqlCommonData && mysqlCommonData.selectDataFromAllTables && req.body && req.body.categoryIds) {
        pool.getConnection(function (err, connection) {
            if (err) {
                res.status(200).send({
                    message: err,
                    content: [],
                    is_success: false
                })
            }
            else {

                connection.query(
                    `SELECT ${mysqlCommonData.selectDataFromAllTables}
                    FROM coupons INNER JOIN 
                    companies on coupons.companyId = companies.id 
                    INNER JOIN category on coupons.categoryId = category.id 
                    INNER JOIN subcategory on coupons.subcategoryId = subcategory.id 
                    WHERE coupons.categoryId IN (${req.body.categoryIds})`,
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

                            res.status(200).json({
                                message: "filtered coupon list",
                                content: coupon[0],
                                is_success: true,
                            });
                            connection.release();
                        }
                    }
                );
            }
        });
    } else {
        res.status(200).send({
            message: 'Invalid request',
            content: [],
            is_success: false
        })
    }
};
// controller to get coupons by sub-category
get_coupons_by_subcategory = (req, res) => {
    if (mysqlCommonData && mysqlCommonData.selectDataFromAllTables && req.body && req.body.subcategoryIds) {
        pool.getConnection(function (err, connection) {
            if (err) {
                res.status(200).send({
                    message: err,
                    content: [],
                    is_success: false
                })
            }
            else {
                connection.query(
                    `SELECT ${mysqlCommonData.selectDataFromAllTables}
                FROM coupons INNER JOIN 
                companies on coupons.companyId = companies.id 
                INNER JOIN category on coupons.categoryId = category.id 
                INNER JOIN subcategory on coupons.subcategoryId = subcategory.id 
                WHERE coupons.subcategoryId IN (${req.body.subcategoryIds})`,
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

                            res.status(200).json({
                                message: "filtered coupon list",
                                content: coupon[0],
                                is_success: true,
                            });
                            connection.release();
                        }
                    }
                );
            }
        });
    } else {
        res.status(200).send({
            message: 'Invalid request',
            content: [],
            is_success: false
        })
    }
};
// controller to get coupons by cat and subcat
get_coupons_by_cat_and_subcat = (req, res) => {
    var catId = req.body.categoryIds && req.body.categoryIds.length ? req.body.categoryIds : 0
    var subCatId = req.body.subcategoryIds && req.body.subcategoryIds.length ? req.body.subcategoryIds : 0
    if (mysqlCommonData && mysqlCommonData.selectDataFromAllTables && req.body && catId && subCatId) {
        pool.getConnection(function (err, connection) {
            if (err) {
                res.status(200).send({
                    message: err,
                    content: [],
                    is_success: false
                })
            }
            else {
                connection.query(
                    `SELECT ${mysqlCommonData.selectDataFromAllTables}
                FROM coupons INNER JOIN 
                companies on coupons.companyId = companies.id 
                INNER JOIN category on coupons.categoryId = category.id 
                INNER JOIN subcategory on coupons.subcategoryId = subcategory.id 
                WHERE coupons.subcategoryId IN (${subCatId}) 
                AND coupons.categoryId in (${catId})`,
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

                            res.status(200).json({
                                message: "filtered coupon list",
                                content: coupon[0],
                                is_success: true,
                            });
                            connection.release();
                        }
                    }
                );
            }
        });
    } else {
        res.status(200).send({
            message: 'Invalid request',
            content: [],
            is_success: false
        })
    }
};

// controller to get coupons by company
get_coupons_by_company = (req, res) => {
    if (mysqlCommonData && mysqlCommonData.selectDataFromAllTables && req.body && req.body.companyId) {
        pool.getConnection(function (err, connection) {
            if (err) {
                res.status(200).send({
                    message: err,
                    content: [],
                    is_success: false
                })
            }
            else {
                connection.query(
                    `SELECT ${mysqlCommonData.selectDataFromAllTables}
                FROM coupons INNER JOIN 
                companies on coupons.companyId = companies.id 
                INNER JOIN category on coupons.categoryId = category.id 
                INNER JOIN subcategory on coupons.subcategoryId = subcategory.id 
                WHERE coupons.companyId = ${req.body.companyId}`,
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

                            res.status(200).json({
                                message: "filtered coupon list",
                                content: coupon[0],
                                is_success: true,
                            });
                            connection.release();
                        }
                    }
                );
            }
        });
    } else {
        res.status(200).send({
            message: 'Invalid request',
            content: [],
            is_success: false
        })
    }
};

// controller to get ALl coupons
get_all_coupons = (req, res) => {
    if (mysqlCommonData && mysqlCommonData.selectDataFromAllTables) {
        pool.getConnection(function (err, connection) {
            if (err) {
                res.status(200).send({
                    message: err,
                    content: [],
                    is_success: false
                })
            }
            else {
                connection.query(
                    `SELECT ${mysqlCommonData.selectDataFromAllTables}  
                FROM coupons
                INNER JOIN category ON coupons.categoryId=category.id 
                INNER JOIN subcategory ON coupons.subcategoryId=subcategory.id 
                INNER JOIN companies on coupons.companyId = companies.id;`,
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

                            res.status(200).json({
                                message: "coupon list",
                                content: coupon[0],
                                is_success: true,
                            });
                            connection.release();
                        }
                    }
                );
            }
        })
    } else {
        res.status(200).send({
            message: 'Invalid request',
            content: [],
            is_success: false
        })
    }
};

get_coupons_by_search = (req, res) => {
    if (mysqlCommonData && mysqlCommonData.selectDataFromAllTables && req.body && req.body.searchParams) {

    pool.getConnection(function (err, connection) {
        if (err) {
            res.status(200).send({
                message: err,
                content: [],
                is_success: false
            })
        }
        else {
            connection.query(
                `SELECT ${mysqlCommonData.selectDataFromAllTables}
        FROM coupons
        INNER JOIN companies on coupons.companyId = companies.id 
        INNER JOIN category on coupons.categoryId = category.id
        INNER JOIN subcategory on coupons.subcategoryId = subcategory.id
        ${req.body.searchBy == 'all' ? `WHERE coupons.title LIKE '${req.body.searchParams}' OR 
        companies.name LIKE '%${req.body.searchParams}%' OR 
        category.name LIKE '%${req.body.searchParams}%' OR
        subcategory.name LIKE '%${req.body.searchParams}%'` :
                    req.body.searchBy == 'category' ? `WHERE category.name LIKE '%${req.body.searchParams}%'` :
                        req.body.searchBy == 'store' ? `WHERE companies.name LIKE '%${req.body.searchParams}%'` :
                            req.body.searchBy == 'subcategory' ? `WHERE subcategory.name LIKE '%${req.body.searchParams}%'` :
                                `WHERE companies.name LIKE '%${req.body.searchParams}%'`}
        `,
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

                        res.status(200).json({
                            message: "filtered coupon list",
                            content: coupon[0],
                            is_success: true,
                        });
                        connection.release();
                    }
                }
            );
        }
    })
} else {
    res.status(200).send({
        message: 'Invalid request',
        content: [],
        is_success: false
    })
}
}


module.exports = {
    get_all_coupons,
    add_coupons,
    update_coupons,
    get_coupons_by_category,
    get_coupons_by_company,
    get_coupons_by_id,
    get_coupons_by_search,
    get_coupons_by_subcategory,
    get_coupons_by_cat_and_subcat
}