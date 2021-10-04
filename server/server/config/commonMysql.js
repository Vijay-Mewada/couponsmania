var mysqlCommonData = {
    selectDataFromAllTables: `coupons.id, 
                            coupons.title,
                            coupons.code,
                            coupons.description,
                            coupons.validity,
                            coupons.couponUrl,
                            companies.image,
                            coupontype.type,
                            coupons.isUsed,
                            coupontype.id as couponTypeId,
                            category.id as category_id,
                            category.name as category_name,
                            subcategory.id as subcategory_id,
                            subcategory.name as subcategory_name,
                            companies.id as company_id,
                            companies.name as company_name`,

    categoryTable: `categor`,
    subcategoryTable: `subcategory`,
    companytable: 'companies',
    couponnTable: 'coupons',
    tablesJoins : ``

}

module.exports = mysqlCommonData;


