import Mock from "mockjs";

import MockBase from "./public";

import MockData from './responseData';

Mock.mock(MockBase.GetURL('/mock/list'), 'get', options => {
    let params = MockBase.params2obj(options.url)

    let listData = MockData.generateRoleListsData(params.pageNumber);

    return MockBase.SuccessTem(listData);
});

Mock.mock(MockBase.GetURL('/mock/login'), 'post', options => {
    let params = JSON.parse(options.body);

    if (MockData.registrantLists.has(params.username) && params.password == MockData.registrantLists.get(params.username).password) return MockBase.SuccessTem(
        MockData.registrantLists.get(params.username)
    )
    return MockBase.ErrorTem();
})
export default Mock;
