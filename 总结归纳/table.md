#### Table

##### 总结

**在Template中渲染vnode**，正常来说只能在`render`函数中，如果想在`Template`中进行渲染，可以配合`slot`标签使用，使用格式如下

```javascript
<template>
    <slot name="tableColumnSlot"/>
    {{renderTableColumn($createElement,item[column['prop']])}}
</template>
```

`renderTableColumn`是一个函数，在渲染`template`时会执行该函数，在`methods`中定义该方法

```javascript
renderTableColumn(h, vnode) {
    this.$slots.tableColumnSlot = vnode;
}
```



