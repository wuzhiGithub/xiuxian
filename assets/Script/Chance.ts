export const CHANCE_MAP = {
    // taskType: 1, //对应TAST_TEXT  0-日常 1-对敌 2-探宝 3-传承
    // taskID: 1,
    // conditionType: 1, // 成功与否条件 1-战力判断 2-境界判断
    // conditionValue: 10000,
    // result1: 10001, // 对应RESULT
    // result2: 20001,

    //炼气期任务

    //经验
    [10001]:{
        taskType: 0, 
        result1: 11001, 
    },
    [10002]:{
        taskType: 0, 
        result1: 11002, 
    },
    [10003]:{
        taskType: 0, 
        result1: 11003, 
    },
    //送灵石
    [10004]:{
        taskType: 0, 
        result1: 13001, 
    },
    [10005]:{
        taskType: 0, 
        result1: 13002, 
    },
    [10006]:{
        taskType: 0, 
        result1: 13003, 
    },
    //pk魔修
    [10007]:{
        taskType: 1, 
        taskID: 1,
        conditionType: 2, 
        conditionValue: 1,
        result1: 12001,
        result2: 19001,
    },
    [10008]:{
        taskType: 1, 
        taskID: 2,
        conditionType: 2, 
        conditionValue: 2,
        result1: 12002, 
        result2: 19002,
    },
    [10009]:{
        taskType: 1, 
        taskID: 3,
        conditionType: 2, 
        conditionValue: 3,
        result1: 12003, 
        result2: 19003,
    },
    //探宝(功法、装备、武器)
    //功法
    [10010]:{
        taskType: 2, 
        taskID: 1,
        result1: 12004, 
    },
    [10011]:{
        taskType: 2, 
        taskID: 1,
        result1: 12005, 
    },
    [10012]:{
        taskType: 2, 
        taskID: 1,
        result1: 12006, 
    },
    [10013]:{
        taskType: 2, 
        taskID: 1,
        result1: 12007, 
    },
    //武器
    [10014]:{
        taskType: 2, 
        taskID: 1,
        result1: 12008, 
    },
    [10015]:{
        taskType: 2, 
        taskID: 1,
        result1: 12009, 
    },
    [10016]:{
        taskType: 2, 
        taskID: 1,
        result1: 12010, 
    },
    [10017]:{
        taskType: 2, 
        taskID: 1,
        result1: 12011, 
    },
    //防具
    [10018]:{
        taskType: 2, 
        taskID: 1,
        result1: 12012, 
    },
    [10019]:{
        taskType: 2, 
        taskID: 1,
        result1: 12013, 
    },
    [10020]:{
        taskType: 2, 
        taskID: 1,
        result1: 12014, 
    },
    [10021]:{
        taskType: 2, 
        taskID: 1,
        result1: 12015, 
    },
    //特殊类
    [10022]:{
        taskType: 3, 
        taskID: 1,
        result1: 12016, 
    },
    [10023]:{
        taskType: 3, 
        taskID: 1,
        result1: 12017, 
    },
    [10024]:{
        taskType: 3, 
        taskID: 1,
        result1: 12018, 
    },


     //筑基期任务

    //经验
    [20001]:{
        taskType: 0, 
        result1: 21001, 
    },
    [20002]:{
        taskType: 0, 
        result1: 21002, 
    },
    [20003]:{
        taskType: 0, 
        result1: 21003, 
    },
    //送灵石
    [20004]:{
        taskType: 0, 
        result1: 23001, 
    },
    [20005]:{
        taskType: 0, 
        result1: 23002, 
    },
    [20006]:{
        taskType: 0, 
        result1: 23003, 
    },
    //pk魔修
    [20007]:{
        taskType: 1, 
        taskID: 1,
        conditionType: 2, 
        conditionValue: 1,
        result1: 22001, 
        result2: 29001,
    },
    [20008]:{
        taskType: 1, 
        taskID: 2,
        conditionType: 2, 
        conditionValue: 2,
        result1: 22002, 
        result2: 29002,
    },
    [20009]:{
        taskType: 1, 
        taskID: 3,
        conditionType: 2, 
        conditionValue: 3,
        result1: 22003, 
        result2: 29003,
    },
    //探宝(功法、装备、武器)
    //功法
    [20010]:{
        taskType: 2, 
        taskID: 1,
        result1: 22004, 
    },
    [20011]:{
        taskType: 2, 
        taskID: 1,
        result1: 22005, 
    },
    [20012]:{
        taskType: 2, 
        taskID: 1,
        result1: 22006, 
    },
    [20013]:{
        taskType: 2, 
        taskID: 1,
        result1: 22007, 
    },
    //武器
    [20014]:{
        taskType: 2, 
        taskID: 1,
        result1: 22008, 
    },
    [20015]:{
        taskType: 2, 
        taskID: 1,
        result1: 22009, 
    },
    [20016]:{
        taskType: 2, 
        taskID: 1,
        result1: 22010, 
    },
    [20017]:{
        taskType: 2, 
        taskID: 1,
        result1: 22011, 
    },
    //防具
    [20018]:{
        taskType: 2, 
        taskID: 1,
        result1: 22012, 
    },
    [20019]:{
        taskType: 2, 
        taskID: 1,
        result1: 22013, 
    },
    [20020]:{
        taskType: 2, 
        taskID: 1,
        result1: 22014, 
    },
    [20021]:{
        taskType: 2, 
        taskID: 1,
        result1: 22015, 
    },
    //特殊类
    [20022]:{
        taskType: 3, 
        taskID: 1,
        result1: 22016, 
    },
    [20023]:{
        taskType: 3, 
        taskID: 1,
        result1: 22017, 
    },
    [20024]:{
        taskType: 3, 
        taskID: 1,
        result1: 22018, 
    },

     //金丹期任务

    //经验
    [30001]:{
        taskType: 0, 
        result1: 31001, 
    },
    [30002]:{
        taskType: 0, 
        result1: 31002, 
    },
    [30003]:{
        taskType: 0, 
        result1: 31003, 
    },
    //送灵石
    [30004]:{
        taskType: 0, 
        result1: 33001, 
    },
    [30005]:{
        taskType: 0, 
        result1: 33002, 
    },
    [30006]:{
        taskType: 0, 
        result1: 33003, 
    },
    //pk魔修
    [30007]:{
        taskType: 1, 
        taskID: 1,
        conditionType: 2, 
        conditionValue: 1,
        result1: 32001, 
        result2: 39001,
    },
    [30008]:{
        taskType: 1, 
        taskID: 2,
        conditionType: 2, 
        conditionValue: 2,
        result1: 32002, 
        result2: 39002,
    },
    [30009]:{
        taskType: 1, 
        taskID: 3,
        conditionType: 2, 
        conditionValue: 3,
        result1: 32003, 
        result2: 39003,
    },
    //探宝(功法、装备、武器)
    //功法
    [30010]:{
        taskType: 2, 
        taskID: 1,
        result1: 32004, 
    },
    [30011]:{
        taskType: 2, 
        taskID: 1,
        result1: 32005, 
    },
    [30012]:{
        taskType: 2, 
        taskID: 1,
        result1: 32006, 
    },
    [30013]:{
        taskType: 2, 
        taskID: 1,
        result1: 32007, 
    },
    //武器
    [30014]:{
        taskType: 2, 
        taskID: 1,
        result1: 32008, 
    },
    [30015]:{
        taskType: 2, 
        taskID: 1,
        result1: 32009, 
    },
    [30016]:{
        taskType: 2, 
        taskID: 1,
        result1: 32010, 
    },
    [30017]:{
        taskType: 2, 
        taskID: 1,
        result1: 32011, 
    },
    //防具
    [30018]:{
        taskType: 2, 
        taskID: 1,
        result1: 32012, 
    },
    [30019]:{
        taskType: 2, 
        taskID: 1,
        result1: 32013, 
    },
    [30020]:{
        taskType: 2, 
        taskID: 1,
        result1: 32014, 
    },
    [30021]:{
        taskType: 2, 
        taskID: 1,
        result1: 32015, 
    },
    //特殊类
    [30022]:{
        taskType: 3, 
        taskID: 1,
        result1: 32016, 
    },
    [30023]:{
        taskType: 3, 
        taskID: 1,
        result1: 32017, 
    },
    [30024]:{
        taskType: 3, 
        taskID: 1,
        result1: 32018, 
    },



    
}

