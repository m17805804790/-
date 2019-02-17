### break-word:

###### 使用弹性布局时候，为了使英文单词以及数字不被拆分，会冲出布局，此时使用`word-break:break-all `就可以使之换行和`word-wrap:break-word `区别在于前者会直接断词，而后者会由于默认把第二个单词放到另一行，在进行断词，所以前者更节省空间，后者的话更简洁

### text-indent:

首行缩进

### BOX问题

`-webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box; `当你设置一个元素为 `box-sizing: border-box;` 时，此元素的内边距和边框不再会增加它的宽度。 传统IE盒子和现在盒子的区别

### 浮动

脱离标准流，并且脱离标准流的元素无法撑起父元素高度，想要换行就得给div一个高度， 或者小偏方：当想让float撑起父元素高度，可以使用`overflow:hidden`内墙法 外墙法

内墙法可以使第二个盒子使用margin-top 第一个使用margin-bottom

`clear： both`用于清除浮动