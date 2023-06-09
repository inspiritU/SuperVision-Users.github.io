/*! jQuery Validation Plugin - v1.17.0 - 7/29/2017
 * https://jqueryvalidation.org/
 * Copyright (c) 2017 Jörn Zaefferer; Licensed MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery","../jquery.validate.min"],a):"object"==typeof module&&module.exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){return a.extend(a.validator.messages,{required:"必須填寫",remote:"請修正此欄位",email:"請輸入有效的電子郵件",url:"請輸入有效的網址",date:"請輸入有效的日期",dateISO:"請輸入有效的日期 (YYYY-MM-DD)",number:"請輸入正確的數值",digits:"只可輸入數字",creditcard:"請輸入有效的信用卡號碼",equalTo:"請重複輸入一次",extension:"請輸入有效的後綴",maxlength:a.validator.format("最多 {0} 個字"),minlength:a.validator.format("最少 {0} 個字"),rangelength:a.validator.format("請輸入長度為 {0} 至 {1} 之間的字串"),range:a.validator.format("請輸入 {0} 至 {1} 之間的數值"),max:a.validator.format("請輸入不大於 {0} 的數值"),min:a.validator.format("請輸入不小於 {0} 的數值")}),a});