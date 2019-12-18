#### 表单校验

##### 使用方法

仿照`element-ui`的格式，在使用表单校验时需要在表单完成包裹，必须传入表单校验规则参数`rules`

```vue
<aoei-form ref="aoeiForm" :rules="rules">
     <from-input :validator='rules.username.validator' placeholder="请输入用户名" v-model="username">
        <template #formIcon>
			<i/>
		</template>
     </from-input> 
     <aoei-button type="primary" class="login-form-button" @click="login">
		登录
	 </aoei-button>
</aoei-form>
```

校验规则参数`rules`格式如下

```javascript
rules: object = {
	username: {
		validator: 
	}
}
```

在提交表单时仿照`element-ui`的表单校验

```javascript
login() {
	this.$refs['aoeiForm'].validate((valid) => {
		if (valid) {//校验成功}
		else{//校验失败}
	})
}
```



##### AoeiForm配置参数

| 参数  |     说明     |  类型  | 可选值 | 默认值 |
| :---: | :----------: | :----: | :----: | :----: |
| rules | 表单校验规则 | object |   -    |   -    |

##### 实现原理

接收传入的`rules` 规则，定义`validate`方法，在提交表单时执行`validate`方法，执行时遍历`rules`，传入对应的校验规则和需要校验的值

```javascript
Object.keys(this.rules).map(rile => {
	let checking = this.rules[rile].validator(this.$parent.$data[rile]);
	if (checking != 'success') valid = false;
})
```

在回调函数中传入校验结果

```javascript
callback(valid);
```

用户在调用方法时可以通过判断参数是否为`true`来判断是否校验成功

```javascript
this.$refs['aoeiForm'].validate((valid) => {})
```

##### FormInput配置参数

|   参数    |       说明       |  类型  | 可选值 | 默认值 |
| :-------: | :--------------: | :----: | :----: | :----: |
| validator | 表单校验规则名称 | string |   -    |   -    |