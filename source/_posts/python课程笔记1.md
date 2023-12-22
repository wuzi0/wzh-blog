---
title: Python课程笔记(一)
date: 2023-11-15
---

## Python课程笔记(一)：

### 第一章：绪论

Pvthon是一种解释型的、面向对象的、带有动态语义的高级程序设计语言。

字符编码统一为unicode编码。

### 第二章：编程基础

1、解释（Interpret）是在程序运行时才对源代码进行逐条语句的翻译并运行。解释型语言编写的程序每执行一次，就要翻译一次，翻译结果不会像编译型语言一样保存在可执行文件中，因此效率较低。Python是一种解释型语言，但为了提高运行效率，Python程序在执行一次之后会自动生成扩展名为.pyc的字节码文件；字节码不同于机器语言，但很容易转换为机器语言。

2、函数input只能返回字符串；若需要输入的是数字，则必须使用Python的数值转换函数：int、float、eval
a,b=eval(input(""))，eval 函数用于执行用户输入的字符串，将其解释为有效的Python表达式。如果用户输入的内容是有效的Python表达式，它将被计算。例如，如果用户输入 "3, 5"，eval 将返回一个包含两个整数的元组 (3, 5)。

![image-20231019144559678](https://cdn.jsdelivr.net/gh/wuzi0/picgo-blog-imag/blog-imag/image-20231019144559678.png)

eval函数功能强大且有点复杂

![image-20231019212720120](https://cdn.jsdelivr.net/gh/wuzi0/picgo-blog-imag/blog-imag/image-20231019212720120.png)

3、输出函数：print(value, ..., sep=' ', end='\n')，
sep：表示输出的值之间用什么字符串隔开，缺省是空格
end：表示以这个字符串结尾，缺省为换行。若希望输出一行之后不换行，则end=''（空字符）
将数字转为字符串的函数是str()

当在一条语句中输出多个字符串时，print()函数会自动地插入空格，只需用逗号将不同的字符串隔开即可。
输出格式：

![image-20231019194503684](https://cdn.jsdelivr.net/gh/wuzi0/picgo-blog-imag/blog-imag/image-20231019194503684.png)

如果是数字，可以用%nd来控制占位符。

```python
num1, num2 = 4, 6
print("%3d%4d" % (num1,num2))
# 输出：空格空格4空格空格空格6
# 这里输出空格只是更好理解，并不是真的输出空格两个字


# 也可以用f来控制输出，f控制字符串输出时，中间如果需要插入数字变量，需要{}括起来
# f 是字符串格式化的一个标记，它用于创建格式化字符串。这种字符串称为 f-string，是Python 3.6及更高版本中引入的一种方便的字符串格式化方法。在 f-string 中，你可以在字符串中插入变量的值，以一种直观和方便的方式。
num1, num2 = 4, 6
print(f'第一个数字为{num1:3d}，第二个数字为{num2:4d}')
# 输出：第一个数字为空格空格4，第二个数字为空格空格空格6
```





4、列出模块中的函数：导入模块后，可使用函数dir(m)列出模块的所有函数。

![image-20231019144751321](https://cdn.jsdelivr.net/gh/wuzi0/picgo-blog-imag/blog-imag/image-20231019144751321.png)

5、编码：
ASCII码是标准化字符集，7位二进制编码，可表示128个字符。
Unicode编码：为解决传统的字符编码方案的局限而产生的；跨语言、跨平台进行文本转换和处理；对每种语言中字符设定统一且唯一的二进制编码；每个字符两个字节长（也就是16比特）；65536 个字符的编码空间（2^16）；如“严”这个字符的Unicode的十六进制数编码为4E25。
UTF-8：可变长度的Unicode的实现方式，节省空间，占1—4字节；英文对应Unicode的单字节，中、日、韩文对应Unicode的3字节；例如“严”的十六进制数编码为E4B8A5；Python 3.x默认支持utf-8编码。
python中可以对字符进行编码和解码：函数为：编码：encode()，默认utf-8编码；解码：decode()
Python使用的是utf-8编码，变长的unicode。

![image-20231019145355085](https://cdn.jsdelivr.net/gh/wuzi0/picgo-blog-imag/blog-imag/image-20231019145355085.png)

### 第三章：基础语法

1、命名规则：Python语言有一套自己的命名规则命名规则并不是语法规定，只是一种习惯用法，建议遵守。

变量名、模块名、包名：通常采用小写字母，可使用下划线；通常前缀有一个下划线的变量名为全局变量。
Python虽然允许用中文作为变量名，但由于输入较为麻烦，实际中也很少使用。

类名、对象名：
类首字母采用大写；
类中的方法名首字母小写，其后的每个单词的首字母大写（类的特殊方法例外，类的特殊方法名前后均有双下划线）；
对象名（类的实例）采用小写；
类外引用其属性和方法名时，以对象名作为前缀，即：对象名.属性名/对象名.方法名。
类的私有变量、私有方法以双下划线作为前缀。

函数名：函数名通常采用小写字母，并用下划线或单词首字母大写增加名称的可读性（和类中的方法名命名规则相同，类中的方法实际也是函数）。



例如：

![image-20231019153935535](https://cdn.jsdelivr.net/gh/wuzi0/picgo-blog-imag/blog-imag/image-20231019153935535.png)

2、randrange(start, stop[,step])是random模块下的函数
说明：参数start表示生成随机数所在范围的开始数字。参数stop表示生成随机数所在范围的结束数字，但不包括数字stop。参数step表示步长。生成的随机数在[start, stop-1]的范围内，取值等于start+step。

3、代码缩进与冒号：使用冒号和代码缩进区分代码之间的层次，即代码的逻辑关系。Python中，这是语法规定。

4、模块导入：
import  <模块名>：引用模块中的函数要以模块名做前缀
from  <模块名>  import  <*/函数名清单>：可直接引用模块中的函数（注意会覆盖程序中的同名函数）

使用第二种导入方式，在调用math模块中的任何函数时，都无需在前面加上“math.”。
使用第二种导入方式时，如果程序中的函数与math模块中的某个函数同名，将被math模块中的同名函数覆盖。第一种导入方式不会覆盖任何既有函数，但使用起来不如第二种方式简洁。还可以导入模块math中的特定函数。例如：from math import sqrt,tan  只导入函数sqrt和tan。

5、 语句的分隔符“;”
如果一行写一条语句，行尾不需要“;”，若一行写多条语句，语句之间要用“;”隔开。这也表明Python语法更推荐通常一行写一条语句。

6、语句续行符”\”，Python也支持多行写一条语句，Python使用“\”作为续行符。多行写一条语句适用于长语句的情况。

7、变量和常量
变量：在Python语言中，变量是计算机内存中的一块区域，变量可以存储任何值，而且值可以改变。
Python定义变量方式与其他高级语言的区别：其他高级语言如C/C++，定义变量是定义一个某种类型的盒子（内存单元），然后往里装相应类型的数据，而Python定义变量是给值贴标签，给不同类型的值贴上标签，这个标签即变量名，同时取得了某种类型的值；Python中实际上是指向或引用，而且值可以改变C/C++变量中的值，一旦赋新值，旧值即被冲掉，被替换为新值，而Python的值一直在那儿，由系统定期自动回收。

<img src="https://cdn.jsdelivr.net/gh/wuzi0/picgo-blog-imag/blog-imag/image-20231019213806308.png" alt="image-20231019213806308" style="zoom:80%;" />

print（id（i））是打印对象i的内存地址，在Python中，整数对象（小整数对象，通常在范围[-5, 256]内）会被缓存，因此对于相同的整数值，它们通常会共享相同的内存地址。但是，当你修改变量的值，它会指向一个新的对象，因此内存地址也会不同。

<img src="https://cdn.jsdelivr.net/gh/wuzi0/picgo-blog-imag/blog-imag/image-20231019214018016.png" alt="image-20231019214018016" style="zoom:80%;" />



命名：
必须符合标识符规定。
首字符是字母或下划线（Python中汉字属于字母，但不建议用汉字定义变量名，输入不方便） 
其余可以是字母、下划线、数字，大小写敏感（如：PI和pi是不同的标识符） 
变量名的长度不受限制
不能将Python关键字用作变量名
Python有很多内置函数，虽然给内置函数名赋值不会报错，但会影响内置函数的正常使用。因此内置函数名也不建议作为变量名。

常量：常量是一块只读内存区域，常量一旦初始化就不能修改。

<img src="https://cdn.jsdelivr.net/gh/wuzi0/picgo-blog-imag/blog-imag/image-20231019170529878.png" alt="image-20231019170529878" style="zoom:80%;" />



关于python中的变量和名字：

<img src="https://cdn.jsdelivr.net/gh/wuzi0/picgo-blog-imag/blog-imag/image-20231019171545343.png" alt="image-20231019171545343" style="zoom:80%;" />

<img src="https://cdn.jsdelivr.net/gh/wuzi0/picgo-blog-imag/blog-imag/image-20231019171637511.png" alt="image-20231019171637511" style="zoom:80%;" />

8、数据类型：
Python内置数据类型包括：数字、字符串、列表、元组、字典、集合。（其中字符串、列表、元组统称序列）
内置函数：type(x)查看x的类型

（1）数字类型：包括：整型、浮点型、布尔型、复数类型。
整型（int）：数学意义的整数，在Python 3.x中，长度无限（仅受内存限制）；
布尔型：整型的子类，只有True和False两个值，本质上是用1和0分别存储的（各种类型中某些值被视为相当于False，如：None， 0，0.0，0j，""，[]，()， {}，set()，其它值则被视为相当于True，但除0、0.0之外都不等于False，除1之外都不等于True）；
浮点型：数学意义的实数（小数），长度受限，数据过大或过小，均会溢出
复数型：数学意义的虚数，长度受限，Python中，用1j表示-1的平方根

布尔型的数据，括号里的这句话这个怎么理解呢？
也就是说，如果一个变量，可以视为True或者False，比如变量名为value，如果value=None，那么value就是视为False，但是不等于False，所以你如果用代码：if value，则value视为False，不执行if后面的代码，而代码if value == False，可能你会说value视为False，那么if后面的代码应该执行，但是实际上也不执行，因为它视为False，但是不等于False，只有0和0.0才是等于False，只有1等于True。所以在python中，推荐用if value来判断，这样增加了代码可读性。

进制：

- 八进制：以0o/0O打头，0-7数字
- 十六进制：以0x/0X打头，0-9数字，字母a-f/A-F
- 二进制：以0b/0B打头，0-1数字
- 此处的字母大小写等价

进制转换函数：

- oct函数—将十进制数转换为八进制数字符串
- hex函数—将十进制数转换为十六进制数字符串
- bin函数—将十进制数转换为二进制数字符串
- int(数字形式字符串，进制)，其中，进制可以为2/8/16，返回十进制整数

（2）字符串：
在Python中，可以使用三种方式表示字符串。单引号，如： 'http'、'open windows'、 'cat'
双引号，如： "http"、 "open windows"、 "cat"
三引号，如： """ http"""或多行字符串：
"""
Me and my monkey
have something to hide
"""
三种引号是等价的。大多数情况会使用单引号，因为易于输入（不需按下Shift键）。
单引号和双引号的一个主要用途为：可以在字符串中包含字符"和'，不需要转义字符（ \ " 或\ ' ）。如："It's great"，'She said "Yes!"'
三引号适用于创建多行字符串，不需要使用续行符（\）。三引号括起的字符串中还可以包含字符"和'，不需要转义字符（ \ " 或\ ' ） 。另外，三引号创建的多行字符串可作为程序的文档说明。

9、运算符和表达式
算术运算符、位运算符、关系运算符、逻辑运算符。

各类运算符的优先级：

<img src="https://cdn.jsdelivr.net/gh/wuzi0/picgo-blog-imag/blog-imag/image-20231019212400304.png" alt="image-20231019212400304" style="zoom:80%;" />

（1）算数运算符

<img src="https://cdn.jsdelivr.net/gh/wuzi0/picgo-blog-imag/blog-imag/image-20231019204446854.png" alt="image-20231019204446854" style="zoom:80%;" />

复数运算：除了//和%运算符之外，其他用于整数的算术运算符都可用于复数。复数可以分离实数部分和虚数部分 （实部和虚部均为float类型）即：复数.real 和 复数.imag。复数的共轭：复数.conjugate()



（2）位运算符及表达式

![image-20231019205956271](https://cdn.jsdelivr.net/gh/wuzi0/picgo-blog-imag/blog-imag/image-20231019205956271.png)

也就是说，是对于二进制的运算，所以首先要把十进制转化为二进制。

左移（<<）：左移后，低位补0，高位左移（因为Python整型数据无界限，与C/C++不同，C/C++高位舍弃）

右移运算（>>）：右移后，低位是舍弃，而高位是，无符号数：补0，有符号数：补“符号位”

按位与（&）：运算规则：两个操作数进行按位与，若对应位都是1，则结果该位为1，若对应位有一个为0或都为0，则结果该位为0。

按位异或（^）：运算规则：两个操作数进行异或，若对应位相同，则结果该位为 0，若对应位不同，则结果该位为 1。（注意这个符号不是乘方，而是异或，python中乘方是**，两个乘号。2^3是2和3异或，而不是2的三次方）

按位或（|）：运算规则：两个操作数进行按位或，若对应位其中有一个是1，则结果该位为1，若对应位都为0，则结果该位为0。

（3）关系运算符

<img src="https://cdn.jsdelivr.net/gh/wuzi0/picgo-blog-imag/blog-imag/image-20231019210939848.png" alt="image-20231019210939848" style="zoom:80%;" />

例如：先算算数运算，因为算数运算符优先级大于关系运算符。

![image-20231019212027996](https://cdn.jsdelivr.net/gh/wuzi0/picgo-blog-imag/blog-imag/image-20231019212027996.png)



（4）逻辑运算符和逻辑表达式：

<img src="https://cdn.jsdelivr.net/gh/wuzi0/picgo-blog-imag/blog-imag/image-20231019212112287.png" alt="image-20231019212112287" style="zoom:80%;" />



10、常用类型转换函数

float—将数字或数字形式的字符串转换为浮点数。

int—将数字或整数数字形式的字符串转换为整数。

eval—将字符串当成有效的表达式来求值并返回计算结果；若参数为列表、元组、字典、集合形式的字符串，则返回原数据结构。

str—将数字（整数或实数）转换为相应的字符串。

round—银行家舍入法，四舍六入五配偶（注意存储误差）
函数round(x, p)——Python的舍入函数不是通常的四舍五入，而是使用的是所谓银行家舍入法（其中x是要舍入的数据，p是精度，缺省p，保留整数）。舍入规则：被舍入的数字<5时，该数字舍去；被舍入的数字>5时，则进位；被舍入的数字等于5时，要看5前面的数字，若是奇数则进位，若是偶数则将5舍掉；若5的后面还有不为“0”的任何数，则此时无论5的前面是奇数还是偶数，均应进位（据我观察，也不一定）。

complex—将整数、浮点数或数字形式的整数、浮点数字符串转换为复数

说明：Python不同类型的数字运算时，可自动进行隐式类型转换。隐式类型转换的规则为：整型 → 浮点型 → 复数型
三种类型存在一种逐渐“扩展”的关系：   整数-> 浮点数-> 复数 （整数是浮点数特例，浮点数是复数特例）
不同数字类型之间可以进行混合运算，运算后生成结果为“最宽类型”。

11、赋值

多元赋值（赋值号两端是元组，有无圆括号均相同）
同时给多个变量赋不同值：var1,var2,…,varn=value1,value2,…,valuen



常用内置数学函数：

![image-20231019204759316](https://cdn.jsdelivr.net/gh/wuzi0/picgo-blog-imag/blog-imag/image-20231019204759316.png)

math库中常用的数学函数：

<img src="https://cdn.jsdelivr.net/gh/wuzi0/picgo-blog-imag/blog-imag/image-20231019205227832.png" alt="image-20231019205227832" style="zoom:80%;" />

random库中常用的函数：

<img src="https://cdn.jsdelivr.net/gh/wuzi0/picgo-blog-imag/blog-imag/image-20231019205522920.png" alt="image-20231019205522920" style="zoom:80%;" />

当设定相同的种子后，每次调用随机函数后生成的随机数都是相同的。这就是随机种子的作用。因为计算机是一个确定设备，不能生成真正的随机数。所以，由计算机产生的随机数都是由一个种子开始的伪随机序列。相同的随机种子产生相同的伪随机数序列，也有利于程序的验证执行。若未设定随机数种子，则默认采用系统时钟作为随机数种子，则每次产生的随机数当然就不同了。

![image-20231019205732930](https://cdn.jsdelivr.net/gh/wuzi0/picgo-blog-imag/blog-imag/image-20231019205732930.png)

其他内置数学模块介绍：

cmath模块—除具备math模块的功能之外，还支持复数运算。
decimal模块—支持固定精度的浮点数计算。
fractions模块—可生成分数，或将浮点数转换为分数。



### 第四章：流程控制

1、 多分支

```python
if <condition1>:
	<case1 statements>
elif <condition2>:
	<case2 statements>
elif <condition2>:
	<case3 statements>
else:
	<default statements>
```

2、条件表达式

Python也有类似于C++的条件表达式，其格式为：  

```python
<表达式1>  if  <表达式2>  else  <表达式3>
# 例如
max = a if a > b else b
```

功能：先计算表达式2的值，如果其值为真，则表达式1的值就是整个表达式的值；否则表达式3的值就是整个表达式的值。





循环语句：

Python中有两种主要的循环：for循环和while循环。

一般来说，固定次数的循环问题使用for循环和while循环都可以解决，而循环次数不固定的循环问题只能使用while循环解决。

3、for循环

for循环通常比while循环更容易使用，也不那么容易出错，但没有while循环灵活。

格式：

```python
for <variable> in <sequence>:
	<statements>
```

功能：循环变量variable遍历序列中的每一个值，循环的语句体为每个值执行一次。序列可以是字符串、列表、元组、字典、集合等数据结构。

```python
words = ["a", "abc", "abcd"]
for w in words:
    print(w, len(w))


sum = 0
for i in range(1,101):
    sum+=i
print(sum)
# sum=1+2+3+...+100=5050
# range就是类似生成一个列表，[1，2，3，...,100]，然后i循环遍历这个列表，和上面一样
```

for循环经常与range()函数一起使用，range()函数返回一个range类，类似于列表，for循环可以遍历其中的元素。
range()函数格式：range(start,stop[,step])，参数start表示开始值，默认为0；参数stop表示结束值，不能缺省，循环到stop-1停止；参数step表示步长，默认值为1。

还有一种缺省i的循环用法，也就是不用循环变量，我们只关注这个循环会循环多少次，那么不用循环变量，则可以用‘_’符号表示：

```python
# n表示循环n次
for _ in range(n):
	<statements>
```



4、while循环

格式：

```python
while <condition>:
	<statements>
```

一般来说，固定次数的循环问题使用for循环和while循环都可以解决，而循环次数不固定的循环问题只能使用while循环解决。



5、跳转语句和循环中的else语句

（1）跳转语句

与C、C++类似，在Python中除了提供顺序执行、选择控制和循环控制语句外，还提供了一类跳转语句。这类语句的总体功能是中断当前某段程序的执行，并跳转到程序的其他位置继续执行。
Python的跳转语句有：break语句和continue语句。此外，与其他高级语言不同，Python的循环语句还可以搭配使用else语句。

break语句的作用是：结束当前正在执行的循环（for、while），转而执行这些结构后面的语句。
continue语句的作用是：结束当前正在执行的这一次循环（for、while），接着执行下一次循环。即跳过循环体中尚未执行的语句，接着进行下一次是否执行循环的判定。
continue语句和break语句的区别是：continue语句只结束本次循环，而不是终止整个循环的执行。而break语句则是结束整个循环，不再进行条件判断，其实和其他语言一样的

（2）循环中的else语句

在Python语言中else可与循环搭配使用。
else：后的表达式在for循环列表遍历完毕后 或 while条件语句不满足的情况下执行。
如果循环语句中出现else语句，则它是循环语句的组成部分。也就是说如果for/while语句中出现了else子句，else子句与for/while是一个整体。



带else子句的for循环：

格式：

```python
for <variable> in <sequence>:
	<statements 1>
else:
	<statements 2> 		# 在循环正常结束后执行的代码

# 举例
numbers = [1, 2, 3, 4, 5]
for num in numbers:
    if num == 3:
        print("Found 3, breaking loop")
        break
else:
    print("Loop completed without finding 3")    # 该程序找到了3，执行了break，故else语句不执行
```

功能：依次对sequence中的每个值，执行<statements 1>，循环结束后再执行<statements 2>。sequence可以是range(...)，也可以是字符串、列表、元组、字典、集合等。

说明：

- 这个是用于在循环结束后执行一些额外的操作。
- 当循环遍历完所有元素后，如果没有使用 break 语句中断循环，那么 `else` 子句中的代码会被执行。如果循环中使用了 break，则 else子句中的代码不会执行。
- for 循环带有 else 子句通常用于检查循环是否完成了遍历整个可迭代对象，或者是否提前中断。如果循环完成了全部迭代，那么 else子句中的代码可以执行一些收尾工作。
  



带else子句的while循环：

格式：

```python
while <condition>:
<statements 1>
else:
<statements 2>

# 举例
count = 0
while count < 5:
    print(f"Count is {count}")
    count += 1
else:
    print("Loop completed")
# 在这个示例中，while 循环会执行直到 count 变量小于 5 为止。一旦 count 达到 5，循环条件不再为真，while 循环结束，然后 else 子句中的代码会执行，打印 "Loop completed"。
# 带有 else 子句的 while 循环通常用于检查循环是否完成了所有迭代。和上面带有else语句的for循环一样，如果 while 循环是因为条件不再满足而退出的，那么 else 子句中的代码将被执行。如果 while 循环是因为 break 语句而提前中断的，else 子句不会执行。
```

带有 else 子句的 while循环在某些情况下也可以使用，尽管它不如在 for循环中常见。 while 循环会在给定条件为真的情况下执行一段代码块，而 else 子句可以在循环正常结束（即条件变为假）后执行。

同样：如果 while 循环是因为条件不再满足而退出的，那么 else 子句中的代码将被执行。如果 while 循环是因为 break 语句而提前中断的，else 子句不会执行。



### 第五章：模块与函数

1、python程序结构

函数是一段可重用的有名称的代码。模块是处理某一类问题的集合，模块由函数和类组成。包是一个完成特定任务的工具箱。

函数、模块及包均可以自定义。

<img src="https://cdn.jsdelivr.net/gh/wuzi0/picgo-blog-imag/blog-imag/image-20231020124613897.png" alt="image-20231020124613897" style="zoom:80%;" /><img src="https://cdn.jsdelivr.net/gh/wuzi0/picgo-blog-imag/blog-imag/image-20231020212424493.png" alt="image-20231020212424493" style="zoom: 80%;" />



2、Python自带的工具包和模块安装在其安装目录的Lib子目录中。例如：Lib目录中的xml文件夹。xml文件夹就是一个包，该包用于完成XML的应用开发，xml包中包含四个子包：dom、sax、etree和parsers。文件\_\_init\_\_.py是xml包的注册文件，若无此文件，Python将不能识别xml包。注意：包必须至少含有一个\_\_init\_\_.py文件。 \_\_init\_\_.py文件的内容可以为空，它用于标识当前文件夹是一个包。

3、关于Python的main函数

Python没有真正意义的main函数，可以自定义一个main函数或其他名称的启动函数，如均不定义，也可以直接执行：

```python
print(函数名(实参表))
```

 但如果程序中出现如下语句：

```python
if __name__ == '__main__':
    statements1
else:
    statements2
```

 则表示：若直接执行本文件，则执行if之后的语句序列statements1，否则，若此文件被其他文件调用，则执行else之后的语句序列statements2。即：若一个文件中有此语句，则此文件既可以作为执行程序，也可作为模块被其他程序调用（一般来说，单纯的模块没有此语句）。



3、函数

（1）函数定义格式：

```python
def 函数名([形参表]):
    函数体语句序列
    [return 表达式]    #可选项，即有的函数可以没有返回值
```

函数名与变量名的命名规则相同，只能包含字母、数字和下划线_，且不能以数字打头。

（2）函数的参数

在C、C++中，参数的传递有值传递和引用传递两种方式。Python中任何东西都是对象，所以参数只支持引用传递的方式。Python通过名称绑定的机制，把实际参数的值和形式参数的名称绑定在一起，即把形式参数传递到函数所在的局部命名空间中，形式参数和实际参数指向内存中同一个存储空间。

（3）传参的形式

Python函数的参数传递有多种形式：按引用传递（也叫位置参数）、默认值参数、关键字参数、不定长参数、拆分参数列表。



参数传递顺序：

在定义函数时，可以混合使用多种参数传递方式，此时要遵循以下规则：

- 关键字参数应放在位置参数后面
- 元组参数必须在关键字参数后面
- 字典参数要放在元组参数后面

在调用函数时，首先按位置顺序传递参数，其次按关键字传递参数。多余的非关键字参数传递给元组，多余的关键字参数传递给字典。Python也允许普通形参放在不定长参数后面，但此时要求在调用函数时必须使用关键字参数方式给不定长参数后面的形参传递实参。



（3.1）按引用传递（位置参数；形参、实参变量名相同或不同均可）

```py
def add(a,b) :
    return a+b
x, y=3,4
print(x,'+',y,'=',add(x,y))
```

（3.2）默认值参数（函数调用时，若不给出实参，则使用默认值参数；带默认值的参数不能位于没有默认值的参数前面）

```python
def greet (name,greeting='He11o') :
    print(greeting,name+'!')
greet('Bob')
greet('Bob!Good morning')
```

（3.3） 关键字参数（关键字参数的顺序无关紧要，但形参、实参变量名必须相同）

```python
def shop (where='store' ,what='pasta' ,howmuch='5 pounds'):
    print(where)
    print(howmuch,'of',what)

shop ()
shop (what='sugar')
shop (howmuch='2 pounds' ,what='sugar')
shop (howmuch='2 pounds' ,what='sugar' ,where='super market')

'''
输出
store
5 pounds of pasta 
store
5 pounds of sugar
store
2 pounds of sugar
super market
2 pounds of sugar
'''
```

（3.4） 不定长参数（形参名之前出现：*—封装为元组；**—封装为字典）

不定长参数，即在调用函数时可以接收任意数量的实参，这些实参在传递给函数时会被封装成元组（位置参数）或字典（关键字参数）形式。在参数名前面加一个“*”，表示参数是以形参名为标识符的元组。在参数名前加两个“**”，表示参数是以形参名为标识符的字典，其中关键字为“键”，参数值为“值”。

```python
# 格式
def 函数名([普通形参列表,] *不定长参数名 [,关键字参数形参列表]):
	函数体

或：

def 函数名([普通形参列表,] **不定长参数名):
    函数体



    
# 举例
def StudentInfo1(name, *args):
    print('姓名:',name,'其他:',args)
def StudentInfo2(name, **args):
    print('姓名:',name,'其他:',args)
def StudentInfo3(name, *args , country='中国'):
    print('姓名:',name,'国籍:',country,'其他',args)

StudentInfo1('李明','优秀','中国')
StudentInfo2('李明',中文水平='优秀',国籍='中国')
StudentInfo3('李明',19,'良好')
StudentInfo3('David',19,'良好',country='美国')  # Python也允许普通形参放在不定长参数后面，但此时要求在调用函数时必须使用关											  键字参数方式给不定长参数后面的形参传递实参。

'''
输出
姓名: 李明 其他: ('优秀', '中国')
姓名: 李明 其他: {'中文水平': '优秀', '国籍': '中国'}
姓名: 李明 国籍: 中国 其他 (19, '良好')
姓名: David 国籍: 美国 其他 (19, '良好')
'''
```



（3.5）拆分参数列表（实参名之前出现：*是将列表或元组中的元素拆分出来作为位置实参；**是将字典中的元素拆分出来作为关键字实参）

如果一个函数所需要的参数已经存储在了列表、元组或字典中，则可以直接从列表、元组或字典中拆分出来函数所需要的这些参数。

当*或\*\*加在形参的前面，表示不定长参数，分别将它们以元组和字典的形式接收进函数。
当在实参前面加上\*或\*\*，就意味着拆分参数。\*表示将列表、元组拆成一个个单独的位置实参；\*\*表示将字典拆分成关键字参数。

```python
def SumVal(*args):
    total = 0
    for i in args:
        total+=1
    return total
ls=[3,5,2,7,1]
print(SumVal(ls[0],ls[1],ls[2],ls[3],ls[4]))		# 不通过拆分方法传递参数
print(SumVal(*ls))              				   # 通过拆分方法传递参数, 说明:实参*ls的作用是把列表ls中的所有元素拆分													出来作为SumVal的实参，即等价于SumVal(3,5,2, 7,1)


# 字典拆分结果作为函数关键字参数
def StudentInfo(name, chineselevel, country):
    print('姓名:%s ,中文水平:%s ,国籍:%s' % (name, chineselevel, country))

d={'country':'中国','chineselevel':'优秀','name':'李明'}
StudentInfo(**d)

# 说明：实参**d的作用是把字典d中的所有元素拆分出来作为StudentInfo的实参，
# 即等价于StudentInfo(country= '中国',chineselevel= '优秀', name='李明')

```



（4）函数返回

没有返回值、返回一个值、返回多个值

没有返回值（无return或return None）

一个返回值（return <变量>或return <表达式>）

多个返回值（return <变量1>,<变量2>,……..<变量n>或者return <表达式1>,<表达式2>,……..<表达式n>）



（5）函数的嵌套

C、C++都支持函数的嵌套调用，Python不仅支持函数的嵌套调用，还支持函数的嵌套定义，即在函数内部再定义函数。建议：尽量不要在函数内部定义函数，这种方式不便于程序维护，容易造成逻辑上的混乱，且嵌套定义的函数层次越多，程序维护的代价就越大。



4、变量的作用域（局部变量、全局变量）

局部变量：局部变量是只能在函数内使用的变量；函数一旦结束，局部变量的生命周期也就结束；局部变量的作用范围只在其被创建的函数内有效；函数形参也属于局部变量。

全局变量：全局变量是能够被不同的函数、类或文件共享的变量；在函数之外定义的变量都可以称为全局变量；全局变量可以被文件内部的任何函数和外部文件访问；全局变量通常在文件的开始处定义（命名规范为单下划线打头，若不写也不是语法错）；若要在函数内部修改全局变量的值，必须用global语句声明。

建议：按常规使用，即尽量不再函数体内修改全局变量。



同名变量，其实也就是说在函数内部定义的变量作用域只是函数内部，也只是函数内部的a和全局变量a不是同一个，但当函数内部没有这个变量时，就会被识别是全局变量的，毕竟全局变量是作用全局。只是如果函数内部有名字一样的，就优先用函数内部的。

<img src="https://cdn.jsdelivr.net/gh/wuzi0/picgo-blog-imag/blog-imag/image-20231021155602132.png" alt="image-20231021155602132" style="zoom:80%;" />

```python
count = 1

def fun():
    count = count+1

fun()

# 报错：UnboundLocalError: local variable 'count' referenced before assignment

# 原因分析：看上去是函数体中全局变量count被修改，实际上系统认为count是局部变量
'''
在Python中，函数内部的变量如果第一次出现，且出现在“=”的左边，即被视为定义一个局部变量，函数中使用的将是局部变量；
本例在函数中发现对count赋值，就会将其加入到函数的局部变量命名空间，进行赋值时，右边引用了count变量，此时它还未被赋值 ，所以报错；其实也就是在函数中这个count认为是新的一个局部变量，但是右侧又是count+1，count还没赋值，所以报错。和外部count没关系。

若在函数体中未对其进行赋值，仅仅引用该变量，则与C/C++相同，则没有问题，建议按常规使用；
如果确实要在函数体内对全局变量的值进行修改，则必须使用global语句进行声明。
'''


# 若要修改全局变量，可以这样操作，但是不建议修改全局变量
count = 1
def fun():
    global count
    count = count+1
fun()

# 这样就完成了修改，这个不报错的原因，就是global count相当于告诉了后面用的count其实是全局变量，所以count = count+1这里的count是全局变量，而全局变量是之前定义了的，赋值了的，所以不会报错。

```



全局变量使用注意：

统一管理全局变量，可以将全局变量放到一个专门的文件中，便于统一管理。例如gl.py

```py
# gl.py 全局变量
count1 = 1
count2 = 2
```

```python
import gl
def fun():
    print(gl.count1)
    print(gl.count2)
    gl.count1 = 5				# 修改全局变量，此处不需要global关键字，因为使用了前导符gl. 相当于已经告诉了这是全局变量
    						   # 也就是说global其实也就是告诉这个变量是全局变量，而gl.也相当于告诉了这是全局变量
   							   # 所以这不是局部变量。修改的是全局变量

fun()
print(gl.count1)
```

非必要应该尽量避免使用全局变量。因为不同的模块都可以自由地访问全局变量，可能会导致全局变量的不可预知性。对于上例中gl.py中的全局变量，若程序员甲修改了count1的值，程序员乙同时也要使用count1，此时就可能导致程序的错误。这种错误是很难发现和更正的。全局变量降低了函数或模块之间的通用性，不同的函数或模块都要依赖于全局变量。同样，全局变量降低了代码的可读性，阅读程序者并不知道调用的某个变量是全局变量。





5、递归函数

递归函数可以在函数主体内直接或间接地调用自己，即函数的嵌套是函数本身；解决一个问题，先做一步，看看剩下的问题是否变为与原问题形式相同，但规模更小，若是的话即可用递归方法求解；递归是一种程序设计方法，使用递归可以减少重复的代码，使程序变得简洁；递归的过程分为两个阶段：递推和回归。

归程序虽然易读、易编，但需要占用额外的内存空间，并且执行速度也受影响。当问题规模较大时，递归调用会涉及到很多层的函数调用，一方面会由于栈操作影响程序运行速度，另一方面在Python中有栈的限制、太多层的函数调用会引起栈溢出问题。是否利用递归编程要看实际问题，如果要节约内存就用循环语句实现。若对内存要求并不高，可以用递归编程。如果不用递归程序很难实现，则只能选择递归算法。



6、特殊函数

匿名函数lambda、生成器函数、高阶函数、猴子补丁



（1）lambda函数

用于创建一个匿名函数，函数名未和标识符进行绑定。lambda函数是一种不使用def定义函数的形式，其作用是能快速定义一个简短的函数。lambda函数的函数体只是一个表达式， 所以lambda函数通常只能实现比较简单的功能，返回一些简单的运算结果。

```python
# 格式：
lambda 参数1,参数2, … ,参数n:表达式

'''
功能：
可以将lambda直接作为函数使用。
也可以将lambda赋值给一个变量，变量名即相当于函数名，可作为函数使用
其中：
参数1---参数n：相当于普通函数的参数；表达式：相当于普通函数的返回值。
'''

# 例如

# 1、将变量my_add和lambda绑定在一起，变量my_add就是函数名
my_add = lambda x, y : x + y			# my_add是函数名；x，y是参数；x+y是返回值

# 2、直接用lambda函数求绝对值
print(lambda x : -x if x<0 else x (-2))		# 输出结果2
# 这行代码是：冒号左边x是参数，然后冒号右边是返回值，即-x if x<0 else x，然后后面的（-2）是传参

# 3、用lambda函数作为max函数的排序规则
x = (99,1234,345,11111)
max(x)													# 输出11111
max(x, key=lambda item: (str(item)))	   				   # 输出99


x = ((3,4,5),(3,4,6),(3,6,4))
print(max(x))											 # 输出（3，6，4）
print(max(x,key=lambda item : (item[0],item[2])))			# 输出（3，4，6）
```

对于3、用lambda函数作为max函数的排序规则

首先解释：
max函数：max() 函数将返回具有最大值的元素，根据指定的 key 函数来比较。
max(iterable, key=function, default=defaultValue)
---iterable 是必需的，表示要查找最大值的可迭代对象。
---key 是可选的，它是一个用于自定义比较规则的函数。
---default 是可选的，表示如果可迭代对象为空时，返回的默认值。
所以key=lambda item: (str(item))和key=lambda item : (item[0],item[2]))这两个都是将函数作为参数传递。
其次解释：
max(x,key=lambda item : (item[0],item[2]))如何理解？
首先分析a item : (item[0],item[2])这个函数，参数是item，返回值是(item[0],item[2])
等价于这个函数：

```python
def fun(item):
	return (item[0],item[2])
max=(x, y=fun)
```

那么这个函数返回的到底是什么呢，也就是说将item[0]和item[2]作为一个元组进行返回，比如（3，4，6），返回的就是（3，6）。所以x = ((3,4,5),(3,4,6),(3,6,4))返回的就是（3，5），（3，6），（3，4），那么max排序肯定是（3，6）排在前面，而（3，6）是从（3，4，6）截取的，所以最后输出就是（3，4，6）。但是问题来了，为什么lambda返回的是两个元素的元组，最后max输出的却是三个元素的元组呢？

这是因为 `max()` 函数虽然是根据 `key` 函数的返回值来确定最大值，但它实际上返回的是具有最大值的完整元组。所以在这个例子中，`max(x, key=lambda item: (item[0], item[2]))` 返回 `(3, 4, 6)`，因为这个元组 `(3, 4, 6)` 具有最大值，尽管 `key` 函数返回 `(3, 6)`，但 `max()` 返回的是完整的元组。这个行为是 `max()` 函数的标准行为，它返回的是具有最大值的元组，而不仅仅是 `key` 函数返回的内容。



### （2）生成器（Generator）函数

定义：生成器(generator)是用来创建Python序列的一个对象，可将其看作是一个不断产生值的函数；使用它可以迭代庞大的序列，且不需要在内存中创建和存储整个序列。

Generator函数的定义与普通函数的区别只是在函数体内使用yield生成数据项。 Generator函数可以被for循环遍历，且可以通过\_\_next\_\_()方法（Python 2是next方法）获得yield生成的数据项。

```python
# 格式：
def 函数名(参数列表):
    …
yield 表达式
```

yield语句和return语句区别

yield语句：立即返回一个值；或下一次迭代生成器函数时，从yield语句后的语句继续执行，直到再次执行yield语句返回一个值，或终止。
return语句：终止函数的执行，下次调用会重新执行函数。



（3）高阶函数

高阶函数是指把函数作为参数的一种函数。函数不仅可以赋给形参，也可以赋给普通变量。赋值后，即可以用变量名替代函数名完成函数调用。

```python
def FunAdd(f,x,y):
    return f(x)+f(y)

def Square(x):
    return x**2

def Cube(x):
    return x**3

print (FunAdd(Square,3,-5))
print (FunAdd(Cube,3,-5))
```



（4）猴子补丁

猴子补丁是指在程序执行时动态替换已有的代码。主要用于在不修改已有代码情况下修改其功能或增加新功能。例如，在使用第三方模块时，模块中的某些方法可能无法满足需求。此时，可以在不修改这些方法代码的情况下，通过猴子补丁用自己编写的新方法进行替代，从而实现一些新的功能。

<img src="https://cdn.jsdelivr.net/gh/wuzi0/picgo-blog-imag/blog-imag/image-20231021190826464.png" alt="image-20231021190826464" style="zoom:80%;" />



7、模块

模块实际上是将一组函数放在一起共享公共的主题；将这些函数存储于一个.py文件中；使用import命令导入。



（1）创建和引用

创建模块，即创建一个`.py`文件，在其中包含用于完成任务的变量、类和函数，不包括所谓的main函数，即调用该模块中函数的语句。

模块使用之前要导入该模块，导入方法：

```python
import  <模块名>

from  <模块名> import  *

from  <模块名>  import  <函数名1> ,<函数名2>, …… <函数名n>
```



模块的属性：

模块有一些内置属性，用于完成特定的任务。用dir函数可以查看模块的属性，dir(shapes)，就输出了模块shapes的属性。

例如
\_\_doc\_\_：模块中用于描述的文档字符串
\_\_name\_\_：模块名
\_\_file\_\_：模块保存的路径



关于内置属性\_\_name\_\_：

- 每个模块中都有的一个内置属性\_\_name\_\_。
- \_\_name\_\_的作用是获取当前模块的名称，如果当前模块是单独执行的，则其\_\_name\_\_的值就是\_\_main\_\_；否则，如果是作为模块导入，则其\_\_name\_\_的值就是模块的名字。

```python
# module.py里
print(__name__)		# 输出：__main__

# 若在别的模块里
import module
print(__name__)		# 输出：__module__
```

例如：

<img src="https://cdn.jsdelivr.net/gh/wuzi0/picgo-blog-imag/blog-imag/image-20231021192531045.png" alt="image-20231021192531045" style="zoom:80%;" />





（2）内置模块`__builtins__`的常用函数

Python提供了一个内置模块\_\_builtins\_\_，无需导入。该模块定义了一些常用函数，利用这些函数可以实现数据类型的转换、数据的计算、序列的处理等功能。可通过dir(\_\_builtins\_\_)查看所包含内容。

其中：

`filter(function or None, iterable)`：filter()可以对某个序列做过滤处理，根据自定义函数返回的结果是否为真来过滤，并一次性返回处理结果。返回结果是filter对象。（可迭代）

<img src="https://cdn.jsdelivr.net/gh/wuzi0/picgo-blog-imag/blog-imag/image-20231021193455130.png" alt="image-20231021193455130" style="zoom:80%;" />

`map(function,iterables)`：对多个序列的每个元素都执行相同的操作，并返回一个map对象（可迭代）

<img src="https://cdn.jsdelivr.net/gh/wuzi0/picgo-blog-imag/blog-imag/image-20231021193824189.png" alt="image-20231021193824189" style="zoom:80%;" />

`reduce(function,sequence[,initial])`：功能：对序列中的元素进行连续操作。例如：可对某个序列中的元素进行累加、累乘和阶乘等操作。若提供初始值，则将其置于所有序列项之前，当序列为空时，则作为缺省值，返回一个值。（Python 3在functools模块中，需引入）

<img src="https://cdn.jsdelivr.net/gh/wuzi0/picgo-blog-imag/blog-imag/image-20231021193402571.png" alt="image-20231021193402571" style="zoom:80%;" />



其余函数：

<img src="https://cdn.jsdelivr.net/gh/wuzi0/picgo-blog-imag/blog-imag/image-20231021192841334.png" alt="image-20231021192841334" style="zoom:80%;"/>



8、包

（1）包的用途

利用包可以将多个关系密切的模块组织在一起，方便进行程序的重用，也可以有效避免模块命名冲突问题。

（2）创建包、子包

- 创建包就是创建一个文件夹并在该文件定义夹下创建一个\_\_init\_\_.py文件（内容可以为空），文件夹的名字就是包名。**当包被调用时（使用import也可导入包），则自动执行\_\_init\_\_.py文件。**
- 另外，可以根据需要在该文件夹下再创建子文件夹，子文件夹中创建一个\_\_init\_\_.py文件，则又形成了一个子包。

（3）包中模块的导入及引用

模块可以放在任何一个包或子包中，在导入模块时需要指定所在的包和子包的名字。例如，如果要导入包A中的模块B，则需要使用“import A.B”。



包与模块的关系：

<img src="https://cdn.jsdelivr.net/gh/wuzi0/picgo-blog-imag/blog-imag/image-20231021194209648.png" alt="image-20231021194209648" style="zoom:80%;" />

定义一个包parent。在parent包中创建两个子包pack1和pack2；包pack1中定义了一个模块myModule1，包pack2中定义了一个模块myModule2；最后在包parent中定义了一个模块main，调用包pack1和pack2。

<img src="https://cdn.jsdelivr.net/gh/wuzi0/picgo-blog-imag/blog-imag/image-20231021194726626.png" alt="image-20231021194726626" style="zoom: 80%;" />

<img src="https://cdn.jsdelivr.net/gh/wuzi0/picgo-blog-imag/blog-imag/image-20231021194758458.png" alt="image-20231021194758458" style="zoom:80%;" />

<img src="https://cdn.jsdelivr.net/gh/wuzi0/picgo-blog-imag/blog-imag/image-20231021194813358.png" alt="image-20231021194813358" style="zoom:80%;" />

9、第三方库（模块）的安装（numpy，pandas等等）

Python库的自定义安装

- 找到库所在的网站，根据提示下载安装

Python库的工具安装，使用pip工具

- 通过pip在线安装库函数，需要联网

Python库的文件安装

- 下载安装包，通过.whl文件直接安装



安装方式选择：

- 优先级1：pip工具安装（绝大多数都能成功安装）少部分不成功
- 优先级2：文件安装
- 优先级3：自定义安装

安装第三方库注意事项：

- 以管理员身份进入cmd方式；
- 若系统中已安装了多个版本的Python，要在指定版本中安装第三方库，则要进入该版本的Scripts目录下；若使用.whl文件安装，则要将该安装文件也拷贝到该目录下；
- 如果使用PyCharm，则有更为便捷的安装方式。





