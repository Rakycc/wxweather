_satellite.pushAsyncScript(function(event, target, $variables){
  try {
    var type = "";
    var cat = "";
    var originalPage = _satellite.getVar('sc_pageName_original');
    var originalPath = window.location.pathname;
    if (originalPage.match("SUBCAT:NW>PERSONAL>MORTGAGES>1>INDEX|NW>PERSONAL>MORTGAGES>M>A>NATWEST-MORTGAGES1>INDEX")) {
        src = "4318015";
        type = "natwe768";
        cat = "n_mtg831";
    } else if (originalPage.match(":NW>PERSONAL>MORTGAGES>M>A>NATWEST-MORTGAGES>INDEX")) {
        src = "4318015";
        type = "natwe768";
        cat = "n_mtg831";
    } else if (originalPage.match("PRODUCT:NW>PERSONAL>CREDIT-CARDS>COMPARE-CREDIT-CARDS>REWARD-CREDIT-CARD2>INDEX")) {
        src = "4318015";
        type = "natcbp01";
        cat = "n_cbplan"; 
    } else if (originalPage.match("PRODUCT:NW>PERSONAL>CREDIT-CARDS>COMPARE-CREDIT-CARDS>REWARD-CREDIT-CARD>INDEX")) {
        src = "4318015";
        type = "natcbp01";
        cat = "n_cbplan"; 
    } else if (originalPage.match("PRODUCT:NW>PERSONAL>CREDIT-CARDS>COMPARE-CREDIT-CARDS>REWARD-CREDIT-CARD1>INDEX")) {
        src = "4318015";
        type = "natcbp01";
        cat = "n_cbplan";        
    } else if (originalPage.match("CATEGORY:CREDIT-CARDS>>REWARD-CREDIT-CARD")) {
        src = "4318015";
        type = "natrw001";
        cat = "n_rwcl01";
    } else if (originalPage.match("CATEGORY:CREDIT-CARDS>>REWARD-BLACK-CREDIT-CARD")) {
        src = "4318015";
        type = "natrw001";
        cat = "n_rwcb01";
    } else if (originalPage.match("CATEGORY:CREDIT-CARDS>>STUDENT-CREDIT-CARD")) {
        src = "4318015";
        type = "natwe686";
        cat = "n_car700";
    } else if (originalPage.match("CATEGORY:CREDIT-CARDS>>CLEAR-RATE-CREDIT-CARD")) {
        src = "4318015";
        type = "natwe094";
        cat = "n_car684";
    } else if (originalPage.match("SUBCAT:NW>PERSONAL>MORTGAGES>CASHBACK2>INDEX")) {
        src = "4318015";
        type = "natwe679";
        cat = "n_mtg003";
    } else if (originalPage.match("SUBCAT:NW>PERSONAL>MORTGAGES>CASHBACK1>INDEX")) {
        src = "4318015";
        type = "natwe679";
        cat = "n_mtg003";
    } else if (originalPage.match("PRODUCT:NW>PERSONAL>INVESTMENTS>NATWEST_INVEST>NATWEST-INVEST")) {
        src = "4318015";
        type = "natinv01";
        cat = "n_inv001";
    } else if (originalPage.match("INFO:RBS>BUSINESS>SUPPORTING-BUSINESS-LANDING>INDEX")) {
        src = "5228822";
        type = "busin0";
        cat = "rbs-s0";
    } else if (originalPage.match("INFO:RBS>BUSINESS>BUSINESS-LENDING-AT-ROYAL-BANK>APPLYING-ONLINE-LIMITED-COMPANY>INDEX")) {
        src = "5228822";
        type = "busin0";
        cat = "rbsbu0";
    } else if (originalPage.match("INFO:NW>PERSONAL>LIFE-MOMENTS>MANAGING-YOUR-MONEY>BUDGET-CALCULATOR>INDEX|SUBCAT:NW>PERSONAL>LIFE-MOMENTS>MANAGING-YOUR-MONEY|PRODUCT:NW>PERSONAL>LIFE-MOMENTS>MANAGING-YOUR-MONEY>DEBT-CALCULATOR>INDEX|PRODUCT:NW>PERSONAL>LIFE-MOMENTS>MANAGING-YOUR-MONEY>HOW-DO-I-START-SAVING|PRODUCT:NW>PERSONAL>LIFE-MOMENTS>MANAGING-YOUR-MONEY>KEY-SAVINGS-TIPS>INDEX|PRODUCT:NW>PERSONAL>LIFE-MOMENTS>MANAGING-YOUR-MONEY>RUNNING-A-BANK-ACCOUNT>INDEX")) {
        src = "4318015";
        type = "natwe711";
        cat = "n_mym001";
    } else if (originalPage.match("PRODUCT:NW>PERSONAL>LIFE-MOMENTS>MANAGING-YOUR-MONEY>MANAGING-YOUR-HOUSEHOLD-BILLS|PRODUCT:NW>PERSONAL>LIFE-MOMENTS>MANAGING-YOUR-MONEY>STAY-ON-TOP-OF-YOUR-SPENDING>INDEX|PRODUCT:NW>PERSONAL>LIFE-MOMENTS>MANAGING-YOUR-MONEY>HOW-DO-I-STOP-LIVING-MONTH-TO-MONTH>INDEX|PRODUCT:NW>PERSONAL>LIFE-MOMENTS>MANAGING-YOUR-MONEY>DEALING-WITH-MONEY-PROBLEMS|NW>PERSONAL>LIFE-MOMENTS>MANAGING-YOUR-MONEY>MANAGING-YOUR-HOUSEHOLD-BILLS>DIRECT-DEBIT-V-STANDINGORDER>INDEX")) {
        src = "4318015";
        type = "natwe711";
        cat = "n_mym001";
    } else if (originalPage.match("NW>PERSONAL>LIFE-MOMENTS>MANAGING-YOUR-MONEY>MANAGING-YOUR-HOUSEHOLD-BILLS>UTILITY-BILL-SAVERS>INDEX|NW>PERSONAL>LIFE-MOMENTS>MANAGING-YOUR-MONEY>MANAGING-YOUR-HOUSEHOLD-BILLS>THE-LOWDOWN-ON-HOUSEHOLD-BILLS>INDEX|NW>PERSONAL>LIFE-MOMENTS>MANAGING-YOUR-MONEY>MANAGING-YOUR-HOUSEHOLD-BILLS>BROADBAND-BILL-BUSTER>INDEX|PRODUCT:NW>PERSONAL>LIFE-MOMENTS>MANAGING-YOUR-MONEY>RUNNING-A-BANK-ACCOUNTB>INDEX|NW>PERSONAL>LIFE-MOMENTS>MANAGING-YOUR-MONEY>DEALING-WITH-MONEY-PROBLEMS>PAYING-OFF-THOSE-DEBTS>INDEX")) {
        src = "4318015";
        type = "natwe711";
        cat = "n_mym001";
    } else if (originalPage.match("PRODUCT:NW>PERSONAL>LIFE-MOMENTS>MANAGING-YOUR-MONEY>BUDGET-2016>INDEX|PRODUCT:NW>PERSONAL>LIFE-MOMENTS>MANAGING-YOUR-MONEY>CHRISTMAS-SURVIVAL-GUIDE>INDEX|NW>PERSONAL>LIFE-MOMENTS>MANAGING-YOUR-MONEY>DEALING-WITH-MONEY-PROBLEMS>MAKING-SAVINGS-A-PRIORITY>INDEX|PRODUCT:NW>PERSONAL>LIFE-MOMENTS>MANAGING-YOUR-MONEY>HOW-DO-I-START-SAVINGB>INDEX")) {
        src = "4318015";
        type = "natwe711";
        cat = "n_mym001";
    } else if (originalPage.match("NW>PERSONAL>LIFE-MOMENTS>MANAGING-YOUR-MONEY>HOW-DO-I-START-SAVING>MAKING-YOUR-MONEY-GO-FURTHER>INDEX|NW>PERSONAL>LIFE-MOMENTS>MANAGING-YOUR-MONEY>DEALING-WITH-MONEY-PROBLEMS>CONTROLLING-YOUR-OVERDRAFT>INDEX")) {
        src = "4318015";
        type = "natwe711";
        cat = "n_mym001";
    } else if (originalPage.match("PRODUCT:ULSTERNI>PERSONAL>MORTGAGES>FIRST-TIME-BUYERS>CASHBACK>INDEX")) {
        src = "2934218";
        type = "mortni";
        cat = "2017_0";
    } else if (originalPage.match("INFO:NW>PERSONAL>LOANS>LANDING-PAGES>MSM-1K>INDEX")) {
        src = "4318015";
        type = "natwe947";
        cat = "n_msm100";
    } else if (originalPage.match("INFO:NW>PERSONAL>LOANS>LANDING-PAGES>MSM-3K>INDEX")) {
        src = "4318015";
        type = "natwe947";
        cat = "n_msm300";
    } else if (originalPage.match("INFO:NW>PERSONAL>LOANS>LANDING-PAGES>MSM-5K>INDEX")) {
        src = "4318015";
        type = "natwe947";
        cat = "n_msm500";
    } else if (originalPage.match("INFO:NW>PERSONAL>LOANS>LANDING-PAGES>MSM-7-5K>INDEX")) {
        src = "4318015";
        type = "natwe947";
        cat = "n_msm705";
    } else if (originalPage.match("INFO:RBS>PERSONAL>LOANS>LANDING-PAGES>MSM-1K>INDEX")) {
        src = "4318014";
        type = "rbspe345";
        cat = "r_msm100";
    } else if (originalPage.match("INFO:RBS>PERSONAL>LOANS>LANDING-PAGES>MSM-3K>INDEX")) {
        src = "4318014";
        type = "rbspe345";
        cat = "r_msm300";
    } else if (originalPage.match("INFO:RBS>PERSONAL>LOANS>LANDING-PAGES>MSM-5K>INDEX")) {
        src = "4318014";
        type = "rbspe345";
        cat = "r_msm500";
    } else if (originalPage.match("INFO:RBS>PERSONAL>LOANS>LANDING-PAGES>MSM-7-5K>INDEX")) {
        src = "4318014";
        type = "rbspe345";
        cat = "r_msm705";
    } else if (originalPage.match("SUBCAT:NW>BUSINESS>TURNOVER-2M-OR-OVER>SUPPORTING-BUSINESS")) {
        src = "4318015";
        type = "bus001";
        cat = "nbb_s0";
    } else if (originalPage.match("CATEGORY:NW>>INTERMEDIARY-SOLUTIONS")) {
        src = "4318015";
        type = "natwe101";
        cat = "n_mis001";
    } else if (originalPage.match("SUBCAT:NW>PERSONAL>MORTGAGES>MORTGAGE-CALCULATORS")) {
        src = "4318015";
        type = "natwe657";
        cat = "n_cal001";
    } else if (originalPage.match("SUBCAT:RBS>PERSONAL>MORTGAGES>MORTGAGE-CALCULATORS>INDEX")) {
        src = "4318014";
        type = "rbsmo279";
        cat = "r_mcl002";
    } else if (originalPage.match("SUBCAT:RBS>PERSONAL>WAYS-TO-BANK>MOBILE-APP")) {
        src = "4318014";
        type = "rbsmo699";
        cat = "r_hom007";
    } else if (originalPage.match("SUBCAT:RBS>PERSONAL>CURRENT-ACCOUNTS>UPGRADE-TO-REWARD")) {
        src = "4318014";
        type = "rbsup926";
        cat = "r_mta731";
    } else if (originalPage.match("SUBCAT:RBS>PERSONAL>CURRENT-ACCOUNTS>COMPARE-CURRENT-ACCOUNTS")) {
        src = "4318014";
        type = "rbsca393";
        cat = "r_mtcc01";
    } else if (originalPage.match("SUBCAT:NW>PERSONAL>CURRENT-ACCOUNTS>COMPARE-REWARD-BANK-ACCOUNTS>INDEX")) {
        src = "4318015";
        type = "natmta01";
        cat = "n_com001";
    } else if (originalPage.match("SUBCAT:ULSTERROI>PERSONAL>PERSONAL-LOANS>WEDDING-LOANS>INDEX")) {
        src = "2934218";
        type = "2015u000";
        cat = "ubroi0";
    } else if (originalPage.match("INFO:NW>PERSONAL>LOANS>TOOLS>QUICK-QUOTE>QUICKQUOTE>INDEX")) {
        src = "4318015";
        type = "natwe947";
        cat = "n_loa00";
    } else if (originalPage.match("SUBCAT:NW>PERSONAL>LOANS>HOME-IMPROVEMENT-LOANS>INDEX")) {
        src = "4318015";
        type = "natwe947";
        cat = "n_loa000";
    } else if (originalPage.match("PREAPPLY:NW>PERSONAL>LOANS>SHARED-COMPONENTS>APPLY-NOW-IMPORTANT-INFORMATION>INDEX")) {
        src = "4318015";
        type = "natwe947";
        cat = "n_loa001";
    } else if (originalPage.match("SUBCAT:RBS>PERSONAL>LOANS>HOME-IMPROVEMENT-LOANS>INDEX")) {
        src = "4318014";
        type = "rbspe345";
        cat = "r_loa00";
    } else if (originalPage.match("INFO:RBS>PERSONAL>LOANS>TOOLS>QUICK-QUOTE>QUICKQUOTE>INDEX")) {
        src = "4318014";
        type = "rbspe345";
        cat = "r_loa000";
    } else if (originalPage.match("PREAPPLY:RBS>PERSONAL>LOANS>SHARED-CONTENT-AREA>APPLY-NOW-IMPORTANT-INFORMATION>INDEX")) {
        src = "4318014";
        type = "rbspe345";
        cat = "r_loa001";
    } else if (originalPage.match("SUBCAT:NW>PERSONAL>LOANS>LARGE-LOANS>INDEX")) {
        src = "4318015";
        type = "natwe947";
        cat = "n_lll001";
    } else if (originalPage.match("INFO:NW>PERSONAL>LOANS>TOOLS>LOANSCALCULATOR>INDEX")) {
        src = "4318015";
        type = "natwe947";
        cat = "n_lnc001";
    } else if (originalPage.match("SUBCAT:RBS>PERSONAL>LOANS>LARGE-LOANS>INDEX")) {
        src = "4318014";
        type = "rbspe345";
        cat = "r_lll001";
    } else if (originalPage.match("CATEGORY:ULSTERNI>>PERSONAL")) {
        src = "6805522";
        type = "hom";
        cat = "s_hom0";
    } else if (originalPage.match("CATEGORY:ULSTERNI>GLOBALS>ANYTIME-LOGOUT")) {
        src = "6805522";
        type = "olb";
        cat = "s_mta0";
    } else if (originalPage.match("INFO:NW>PERSONAL>LOANS>LANDING-PAGES>MSM-25-50K>INDEX")) {
        src = "4318015";
        type = "natwe947";
        cat = "n_loa002";
    } else if (originalPage.match("INFO:RBS>PERSONAL>LOANS>LANDING-PAGES>MSM-25-50K>INDEX")) {
        src = "4318014";
        type = "rbspe345";
        cat = "r_loa002";
    } else if (originalPage.match("PRODUCT:ULSTERNI>PERSONAL>SAVINGS>INSTANT-ACCESS-ACCOUNTS>ESAVINGS")) {
        src = "6805522";
        type = "sav";
        cat = "s_sav0";
    } else if (originalPage.match("CATEGORY:NW>PERSONAL>SECURITY-CENTRE")) {
        src = "4318015";
        type = "natsc001";
        cat = "n_secl01";
    } else if (originalPage.match("PRODUCT:NW>PERSONAL>WAYS-TO-BANK>MOBILE-APP>SECURITY>INDEX")) {
        src = "4318015";
        type = "natwe705";
        cat = "n_sec163";
    } else if (originalPage.match("PRODUCT:NW>PERSONAL>WAYS-TO-BANK>MOBILE-APP>TECHXPERTS>INDEX")) {
        src = "4318015";
        type = "natwe705";
        cat = "n_techxp";
    } else if (originalPage.match("PRODUCT:NW>PERSONAL>WAYS-TO-BANK>MOBILE-APP>GETCASH>INDEX")) {
        src = "4318015";
        type = "natwe705";
        cat = "n_getcas";
    } else if (originalPage.match("INFO:RBS>PERSONAL>MORTGAGES>SECURE>MORTGAGE-OVERPAYMENT-TOOL>INDEX")) {
        src = "4318014";
        type = "mortg0";
        cat = "r_mtg0";
    } else if (originalPage.match("INFO:RBS>PERSONAL>MORTGAGES>SECURE>AGREEMENTINPRINCIPLE")) {
        src = "4318014";
        type = "rbsmo579";
        cat = "r_aip002";
    } else if (originalPage.match("INFO:NW>PERSONAL>MORTGAGES>MORTGAGE-CALCULATORS>HOW-MUCH-CAN-I-BORROW>INDEX")) {
        src = "4318015";
        type = "natwe657";
        cat = "n_borcal";
    } else if (originalPage.match("INFO:NW>PERSONAL>MORTGAGES>MORTGAGE-CALCULATORS>RATES-CALCULATOR>INDEX") || originalPage.match("INFO:NW>PERSONAL>MORTGAGES>MORTGAGE-CALCULATORS>MORTGAGE-RATE-FINDER-MORTGAGE-CALCULATOR>INDEX")) {
        src = "4318015";
        type = "natwe595";
        cat = "n_ratefi";
    } else if (originalPage.match("CATEGORY:ULSTERROI>GLOBALS>ANYTIME-LOGOUT")) {
        src = "2934218";
        type = "ulste186";
        cat = "2015u0";
    } else if (originalPage.match("SUBCAT:NW>PERSONAL>CREDIT-CARDS>1")) {
        src = "4318015";
        type = "natwe768";
        cat = "n_car056";
    } else if (originalPage.match("SUBCAT:NW>PERSONAL>CREDIT-CARDS>COMPARE-CREDIT-CARDS")) {
        src = "4318015";
        type = "natwe768";
        cat = "n_car056";
    } else if (originalPage.match("SUBCAT:NW>PERSONAL>CREDIT-CARDS>2>INDEX")) {
        src = "4318015";
        type = "natwe768";
        cat = "n_car056";
    } else if (originalPage.match("SUBCAT:NW>PERSONAL>MORTGAGES>CASHBACK>INDEX")) {
        src = "4318015";
        type = "natwe679";
        cat = "n_mtg003";
    }  else if (originalPage.match("SUBCAT:NW>PERSONAL>MORTGAGES>MORTGAGES-DDL-RES>INDEX")) {
        src = "4318015";
        type = "natwe768";
        cat = "n_mtg831";
    } else if (originalPage.match("SUBCAT:NW>PERSONAL>MORTGAGES>MORTGAGES-DDL-BTL>INDEX")) {
        src = "4318015";
        type = "natwe240";
        cat = "n_mtg759";
    }  else if (originalPage.match("SUBCAT:RBS>PERSONAL>MORTGAGES>MORTGAGES-DDL-RES>INDEX")) {
        src = "4318014";
        type = "rbsca393";
        cat = "rbsmo467";
    }  else if (originalPage.match("SUBCAT:NW>PERSONAL>LOANS>CAR-LOANS>INDEX")) {
        src = "4318015";
        type = "natwe947";
        cat = "n_crl001";
    }  else if (originalPage.match("SUBCAT:RBS>PERSONAL>LOANS>CAR-LOANS>INDEX")) {
        src = "4318014";
        type = "rbspe345";
        cat = "r_crl001";
    }  else if (originalPage.match("NW>PERSONAL>MORTGAGES>M>A>NATWEST-MORTGAGES2>INDEX")) {
        src = "4318015";
        type = "natwe101";
        cat = "n_mormsm";
    }  else if (originalPage.match("INFO:NW>PERSONAL>LOANS>LANDING-PAGES>MSM-20-25K>INDEX")) {
        src = "4318015";
        type = "natwe947";
        cat = "n_loa00f";
    }  else if (originalPage.match("INFO:RBS>PERSONAL>LOANS>LANDING-PAGES>MSM-20-25K>INDEX")) {
        src = "4318014";
        type = "rbspe345";
        cat = "r_loa003";
    }  else if (originalPath.match(/(?=.*life\-moments)(?=.*selling\-your\-home)|(?=.*life\-moments)(?=.*buying\-a\-home)/)) {
        src = "4318015";
        type = "natwe711";
        cat = "n_byh001";
    } else if (originalPath.match(/(?=.*life\-moments)(?=.*first\-time\-buyer\-guide)|(?=.*life\-moments)(?=.*remortgaging)/)) {
        src = "4318015";
        type = "natwe711";
        cat = "n_byh001";
    } else if (originalPath.match(/(?=.*life\-moments)(?=.*home\-improvements)/)) {
        src = "4318015";
        type = "natwe711";
        cat = "n_him001";
    } else if (originalPath.match(/(?=.*life\-moments)(?=.*managing\-your\-money)/)) {
        src = "4318015";
        type = "natwe711";
        cat = "n_mym001";
    } else if (originalPath.match(/(?=.*life\-moments)(?=.*having\-a\-baby)/)) {
        src = "4318015";
        type = "natwe711";
        cat = "n_bab001";
    } else if (originalPath.match(/(?=.*life\-moments)(?=.*travel)/)) {
        src = "4318015";
        type = "natwe711";
        cat = "n_trav01";
    } else if (originalPath.match(/(?=.*life\-moments)(?=.*caring\-for\-vulnerable\-relatives)/)) {
        src = "4318015";
        type = "natwe711";
        cat = "n_rel001";
    } else if (originalPath.match(/(?=.*life\-moments)(?=.*becoming\-a\-student)/)) {
        src = "4318015";
        type = "natwe711";
        cat = "n_bas001";
    } else if (originalPath.match(/(?=.*life\-moments)(?=.*bereavement)/)) {
        src = "4318015";
        type = "natwe711";
        cat = "n_brv001";
    } else if (originalPath.match(/(?=.*life\-moments)(?=.*buying\-a\-car)/)) {
        src = "4318015";
        type = "natwe711";
        cat = "n_bac001";
    } else if (originalPath.match(/(?=.*life\-moments)(?=.*getting\-married)/)) {
        src = "4318015";
        type = "natwe711";
        cat = "n_mar001";
    } else if (originalPath.match(/(?=.*life\-moments)(?=.*graduates)/)) {
        src = "4318015";
        type = "natwe711";
        cat = "n_grd001";
    } else if (originalPath.match(/(?=.*life\-moments)(?=.*retirement)/)) {
        src = "4318015";
        type = "natwe711";
        cat = "n_ret001";
    } else if (originalPath.match(/(?=.*life\-moments)(?=.*starting\-working\-life)/)) {
        src = "4318015";
        type = "natwe711";
        cat = "n_wrk001";
		} else if (originalPage.match("INFO:NW>PERSONAL>CAR-FINANCE>FLEX-CAR-FINANCE")) {
        src = "4318015";
        type = "natwe947";
        cat = "n_loa010";
    } 
  		else if (originalPage.match("PRODUCT:RBS>PERSONAL>SAVINGS>ISA-OVERVIEW>CASH-ISA")) {
        src = "4318014";
        type = "rbsca124";
        cat = "r_sav293";
    } 
    if (type && cat) {
        _satellite.getVar('sc_triggerDoubleClick');
        triggerDoubleClick(src, type, cat);
    }
} catch (e1) {}
});
