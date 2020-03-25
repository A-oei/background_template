import Mock from "mockjs";

const Random = Mock.Random;

//角色信息列表
let roleListsData: object[] = [];

function generateRoleListsData(dataLength: number = 10) {
    let i = 0,
        l = dataLength;

    for (; i < l; i++) {
        roleListsData.push(Mock.mock({
            "id|1-100": 100,
            'name': Random.ctitle(3),
            'createTime': Random.date('yyyy-MM-dd'),
            'creator': Random.cname(),
            'productName': Random.ctitle(5)
        }))
    }

    return roleListsData;
}

//登录信息列表
let registrantLists: any = new Map();
registrantLists.set('caofeiProd', {username: 'caofeiProd', password:'qwe123',token: `caofeiProd${new Date().getTime()}`});

export default {
    generateRoleListsData,
    registrantLists
}
