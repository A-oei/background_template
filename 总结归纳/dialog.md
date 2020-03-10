#### Dialog组件

##### 总结

`Dialog`组件只实现了一部分简单的弹窗功能，所以源码也很简单，主要涉及到的就是对`prop`值双向绑定的问题，在`Vue2.3`版本中推出`.snyc`修饰符，使用示例如下：

**父组件**

```javascript
<Dialog title="提示" :visible.sync="dialogVisible"/>
```

**子组件**

```javascript
dialogClose(){
    this.$emit('update:visible', false)
}
```

在使用`.sync`修饰符时

* 在父组件中将需要传入的`prop`值后添加`.sync`修饰符
* 在子组件中在需要修改该`prop`值的时候触发`$emit`事件，事件名称为`update:`+`prop值`，后面参数为改变后的值



`.sync`的书写格式是一个缩写格式，展开的格式如下

```javascript
<Dialog title='提示' :visible='dialogVisible'
					@update:visible='dialogVisible=$event'
/>
```



在为一个对象同时设置多个`prop`值的时候我们可以将多个值集合成一个对象和`v-bind`配合使用，例如

```javascript
let obj={width:'30%',visible:false}
<Dialog title='提示' v-bind:.sync='obj'>    
```

**需要注意**，`.sync`修饰符不能用于一个字面量的对象上，否则无法正常工作，例如

```javascript
v-bind.sync=”{ title: doc.title }”
```







