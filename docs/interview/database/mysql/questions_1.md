---
outline: deep
---

# MySQL面试题（基础篇一）

## 基础篇

### 什么是MySQL？MySQL有什么特点？

MySQL是一种开源的关系型数据库管理系统，它使用SQL语言来存储、管理和处理数据。MySQL具有以下特点：
 - MySQL是开源的，免费的，可以在不同的平台上运行，比如Linux、Windows、Mac OS等。
 - MySQL是简单易用的，支持多种编程语言，比如PHP、Java、Python等，可以轻松地与各种应用程序集成。
 - MySQL是快速、可靠、可扩展的，可以处理大量或高并发的数据，适合用于网站、商业数据、其他类型的数据存储。
 - MySQL是符合ANSI SQL标准的，支持复杂的查询和分析，支持事务处理，可以保证数据的安全性和一致性。

### MySQL 的基础架构图

- 客户端层：负责与用户或者应用程序交互，提供各种客户端工具和API，如 MySQL 命令行工具、JDBC 接口等
- 连接器层：负责管理客户端与服务器之间的连接，进行身份认证、权限检查、连接池维护等
- 分析器层：负责对 SQL 语句进行词法和语法分析，并生成解析树
- 优化器层：负责对解析树进行优化，并生成最佳执行计划
- 执行器层：负责根据执行计划调用存储引擎接口对数据进行操作，并返回结果
- 存储引擎层：负责数据的存储和管理，提供统一的接口

### 请问MySQL的端口号？如何修改？
默认端口号是3306，修改方式为：

- 修改配置文件：在MySQL的配置文件（如my.cnf或my.ini）中，找到[MySQLd]部分，添加或修改port=新端口号的语句，然后重启MySQL服务。
- 修改命令行参数：在启动MySQL服务时，在命令行中添加--port=新端口号的参数，覆盖配置文件中的设置。
- 修改系统变量：在MySQL服务运行时，在客户端中执行SET GLOBAL port=新端口号的语句，修改系统变量的值，但是这种方法只对新建立的连接有效，已经存在的连接还是使用旧的端口号。

### 如何开启和关闭MySQL服务

开启和关闭MySQL服务的方法取决于操作系统和安装方式

- windows系统：可以使用`net start MySQL`和`net stop MySQL`命令来开启和关闭MySQL服务
- linux系统，且使用了systemd：可以使用`start MySQLd`和`systemctl stop MySQLd`命令来开启和关闭MySQL服务
- linux系统，且使用了init.d：可以使用`service MySQL star`t和`service MySQL stop`命令来开启和关闭MySQL服务


### 检测MySQL端口是否运行

```
lsof -i:3306
netstat -tunlp|grep 3306
ss -tulnp|grep 3306
```

### MySQL的数据类型？
 - 数值型：用于存储数值数据，包括整数类型（如tinyint, smallint, mediumint, int, bigint）和浮点数类型（如float, double, decimal）
 - 字符型：用于存储文本数据，包括定长字符串类型（如char）和变长字符串类型（如varchar, text, blob）
 - 日期时间：用于存储日期和时间数据，包括年份类型（如year），日期类型（如date），时间类型（如time），日期时间类型（如datetime, timestamp）和时间间隔类型（如time）
 - 枚举：表示一个有限集合中的一个值，比如性别（'M','F'）
 - 集合：表示一个有限集合中的多个值，比如爱好（'reading','writing','music'）
 - 空间数据类型：用于存储地理空间数据，包括几何类型（如geometry, point, linestring, polygon）和地理类型（如geography, geopoint, geolinestring, geopolygon）
 - 空值（NULL）：表示没有值或未知值

### 什么是非标准字符串类型？

非标准字符串类型是指MySQL中除了CHAR和VARCHAR之外的其他字符串类型，主要有：

- TINYTEXT：可变长度的字符串类型，最大长度为255字节。
- TEXT：可变长度的字符串类型，最大长度为65535字节。
- MEDIUMTEXT：可变长度的字符串类型，最大长度为16777215字节。
- LONGTEXT：可变长度的字符串类型，最大长度为4294967295字节。

这些非标准字符串类型都不区分大小写，并且不能有默认值。

### MySQL函数的分类？
- 字符串函数：用于处理字符串，例如**concat**，**length**，**replace**，**substr**等。
- 数值函数：用于处理数值，例如**abs**，**ceil**，**floor**，**mod**，**round**等。
- 日期和时间函数：用于处理日期和时间，例如**curdate**，**curtime**，**date_add**，**date_format**，**datediff**等。
- 聚合函数：用于对一组数据进行统计或计算，例如**avg**，**count**，**max**，**min**，**sum**等。
- 流程控制函数：用于根据条件执行不同的表达式，例如**case**，**ifnull**， **nullif**, **coalesce**, **if**, **else**, **elseif**, **end**, **while**, **do**, **repeat**, **loop**, **leave**, **iterate**, **return**, **begin**, **end compound-statement**, **declare**, **handler**, **condition**, **signal**, **resignal**, etc.
- 其他函数：用于处理其他类型的数据或功能，例如转换函数（如cast），加密函数（如md5），系统信息函数（如version），用户自定义函数（如udf）等。

### MySQL 查询是否区分大小写？

MySQL 查询是否区分大小写取决于操作系统、存储引擎和字符集，如下：

- 操作系统：不同的操作系统对文件名的大小写敏感程度不同，例如Linux是区分大小写的，而Windows是不区分大小写的。这会影响到数据库名、表名、列名等对象的识别。
- 存储引擎：不同的存储引擎对数据的大小写敏感程度不同，例如MyISAM是区分大小写的，而InnoDB是不区分大小写的。这会影响到数据的比较和排序等操作。
- 字符集：不同的字符集对字符的大小写敏感程度不同，例如latin1_bin是区分大小写的，而latin1_general_ci是不区分大小写的。这会影响到字符串函数和模式匹配等操作。

### MySQL中都有哪些触发器？
在MySQL数据库中有如下六种触发器：
- Before Insert
- After Insert
- Before Update
- After Update
- Before Delete
- After Delete

### MySQL里记录货币用什么字段类型好

在MySQL中，记录货币常使用**Decimal**和**Numric**类型的字段表示，这两种类型被MySQL实现为同样的类型；它们被用于保存值，该值的准确精度是极其重要的值，例如与金钱有关的数据¹²。如果你的财务数据包含多币种的话，需要另加一个字段存储币种¹。

### BLOB和TEXT有什么区别？

BLOB和TEXT都是用来存储大量数据的数据类型，区别在于：

- BLOB是用来存储二进制数据的数据类型，如图片、音频、视频等。BLOB类型有四种：TINYBLOB、BLOB、MEDIUMBLOB、LONGBLOB，它们之间只是最大长度不同。
- TEXT是用来存储文本数据的数据类型，如文章、评论、日志等。TEXT类型有四种：TINYTEXT、TEXT、MEDIUMTEXT、LONGTEXT，它们之间只是最大长度不同。

### CHAR，VARCHAR 和 Text 的区别？

CHAR，VARCHAR 和 Text 都是用来存储字符串的数据类型，区别在于：

- CHAR 是定长类型，即每个值都占用相同的字节数，不管实际长度如何。VARCHAR 是变长类型，即每个值只占用实际长度所需的字节数。Text 是大对象类型，即每个值可以存储很大的文本数据。
- CHAR 的最大长度是 255 个字符，VARCHAR 的最大长度是 65535 个字符（但是受到行大小限制），Text 的最大长度是 65535 个字符（不受行大小限制）。
- CHAR 和 VARCHAR 可以指定字符集和排序规则，Text 不可以。
- CHAR 和 VARCHAR 可以创建索引，Text 不可以（除非使用前缀索引）。
- CHAR 和 VARCHAR 在比较时会忽略尾部空格，Text 不会。

### FLOAT和DOUBLE的区别是什么？

FLOAT和DOUBLE都是浮点数类型，用于存储小数。区别在于：

- 精度：FLOAT的精度是单精度，约有7位有效数字；DOUBLE的精度是双精度，约有15位有效数字。因此，DOUBLE比FLOAT更精确，也更适合存储高精度的数据
- 存储空间：FLOAT占用4个字节；DOUBLE占用8个字节。因此，FLOAT比DOUBLE更节省空间，也更适合存储大量的数据
- 性能：FLOAT的计算速度比DOUBLE快，因为它涉及的数据量更小；DOUBLE的计算速度比FLOAT慢，因为它涉及的数据量更大。因此，FLOAT比DOUBLE更适合进行频繁的计算操作

### varchar(50)中50是什么意思？

varchar是一个可变长的字符串类型，50表示该字符串类型的最大长度是50个字符。

如果插入的字符串长度小于50个字符，那么只占用实际长度的空间；如果插入的字符串长度大于50个字符，那么会被截断为50个字符。

### 字段为什么要求定义为not null？

字段定义为not null表示该字段不能为空值（NULL），即必须有具体的值。字段不允许为NUll可以：

- 提高数据完整性和质量，避免出现无意义或者错误的空值
- 提高查询效率和索引效率，避免对空值进行判断或者排序
- 节省存储空间和内存空间，避免为NULL值分配额外的标识位

### 用什么来确保表格里的字段只接受特定范围里的值?

- 使用 ENUM 类型。ENUM 类型可以定义一个枚举列表，只允许插入列表中的值，否则会报错或插入空值
- 使用 CHECK 约束。CHECK 约束可以定义一个条件表达式，只允许插入满足条件的值，否则会报错或拒绝插入
- 使用触发器。触发器可以在插入或更新数据之前或之后执行一些逻辑，可以检查数据是否在特定范围内，否则可以回滚或抛出异常
- 使用存储过程。存储过程可以封装一些业务逻辑，可以在插入或更新数据之前对数据进行校验和转换，确保数据在特定范围内

## 语法篇

### 常用的聚合函数

聚合函数是指对一组值进行计算，并返回单个值的函数。MySQL中常用的聚合函数有：

- **COUNT**：返回指定列的非空值的个数。
- **SUM**：返回指定列所有值的总和。
- **AVG**：返回指定列所有值的平均值。
- **MIN**：返回指定列所有值中的最小值。
- **MAX**：返回指定列所有值中的最大值。

聚合函数通常与GROUP BY子句配合使用，对分组后的数据进行统计。也可以与HAVING子句配合使用，对分组后的数据进行筛选。

### Where 和 Having 的区别？

- **Where**：用于过滤基础数据行，在分组之前进行筛选，不能使用聚合函数。
- **Having**：用于过滤分组后的数据行，在分组之后进行筛选，可以使用聚合函数。

### Union 和 Union All 的区别？

- **Union**：用于合并两个或多个查询结果集，并去除重复的行。
- **Union All**：用于合并两个或多个查询结果集，并保留重复的行。

UNION的效率高于UNION ALL

### MySQL中通用SQL函数是什么？

通用SQL函数是指MySQL中可以在任何上下文中使用的函数，主要有：

- `CONCAT(A, B)`：连接两个字符串值以创建单个字符串输出。例如：`CONCAT('Hello', 'World')`返回'HelloWorld'。
- `FORMAT(X, D)`：格式化数字X到D有效数字。例如：`FORMAT(1234.5678, 2)`返回'1,234.57'。
- `CURDATE()`：返回当前日期。等价于`CURRENT_DATE()`。
- `CURTIME()`：返回当前时间。等价于`CURRENT_TIME()`。
- `NOW()`：返回当前日期和时间。等价于`CURRENT_TIMESTAMP()`。
- `MONTH()`：从日期值中提取月份。例如：`MONTH('2021-12-30')`返回12。
- `DAY()`：从日期值中提取天数。例如：`DAY('2021-12-30')`返回30。
- `YEAR()`：从日期值中提取年份。例如：`YEAR('2021-12-30')`返回2021。
- `WEEK()`：从日期值中提取周数。例如：`WEEK('2021-12-30')`返回52。
- `WEEKDAY()`：从日期值中提取星期几。例如：`WEEKDAY('2021-12-30')`返回3（表示星期四）。

### NOW()和CURRENT_DATE()有什么区别？

`NOW()`和`CURRENT_DATE()`都是MySQL中的日期和时间函数，区别在于：

- `NOW()`函数返回当前的日期和时间，精确到秒，格式为'YYYY-MM-DD HH:MM:SS'。例如：NOW()返回'2023-01-01 01:02:03'。
- `CURRENT_DATE()`函数只返回当前的日期，不包含时间，格式为'YYYY-MM-DD'。例如：`CURRENT_DATE()`返回'2023-01-01'。

### MySQL的对比运算符有什么？

对比运算符是用来比较两个或多个列的值的运算符。具有：

- `=`：表示两个列的值相等
- `<>`：表示两个列的值不相等
- `<`：表示左边的列的值小于右边的列的值
- `<=`：表示左边的列的值小于或等于右边的列的值
- `>`：表示左边的列的值大于右边的列的值
- `>=`：表示左边的列的值大于或等于右边的列的值
- `<=>`：表示两个列的值相等，包括NULL值

### 列对比运算符是什么？

列对比运算符是一种用于比较两个或多个列值的运算符，具有：

- ANY/SOME：用于比较一个值是否与子查询返回的任意一个值满足某种关系。例如：SELECT * FROM t1 WHERE a > ANY (SELECT b FROM t2)；表示查询t1中a列大于t2中b列任意一个值的记录。
- ALL：用于比较一个值是否与子查询返回的所有值满足某种关系。例如：SELECT * FROM t1 WHERE a > ALL (SELECT b FROM t2)；表示查询t1中a列大于t2中b列所有值的记录。
- IN：用于比较一个值是否在子查询返回的集合中。例如：SELECT * FROM t1 WHERE a IN (SELECT b FROM t2)；表示查询t1中a列在t2中b列中存在的记录。
- EXISTS：用于判断子查询是否返回非空集合。例如：SELECT * FROM t1 WHERE EXISTS (SELECT * FROM t2 WHERE t1.a = t2.b)；表示查询t1中a列与t2中b列相等的记录。


### 分组查询需要注意什么？

- `group by`子句必须出现在`where`子句之后，`order by`子句之前。
- `select`子句中除了聚合函数外，只能包含`group by`子句中出现的字段。如果要显示其他字段或表达式，可以使用`any_value()`函数来包裹它们。
- 可以使用`having`子句来对分组后的结果进行过滤。`having`子句必须出现在`group by`子句之后，`order by`子句之前。`having`子句中可以包含聚合函数或子查询。
- `group by`子句可以包含多个字段或表达式，用逗号分隔。分组的顺序是按照`group by`子句中字段或表达式的先后顺序进行的。
- `group by`子句中不能包含聚合函数或子查询。
- 可以使用`with rollup`选项来对分组后的结果进行汇总。`with rollup`选项必须出现在`group by`子句之后。`with rollup`选项会在每个分组级别上添加一个额外的行来显示该级别的汇总值。

### limit使用方法？
limit子句用于限制查询结果的数量，limit子句有两种使用方法：

- `select * from emp limit n`：表示只返回前N条记录。
- `select * from emp limit m,n`：表示从第M+1条记录开始返回N条记录。

limit子句必须出现在查询语句的最后。如果要指定排序顺序，必须先使用order by子句。

### LIKE和REGEXP操作有什么区别？

LIKE和REGEXP都是用来进行模糊匹配的操作符，区别在于：

- LIKE只支持两种通配符：`%`表示任意长度的任意字符，`_`表示单个任意字符。例如：`LIKE '%oo_'`可以匹配`'book'、'food'`等字符串。
- REGEXP支持正则表达式语法，可以实现更复杂和灵活的匹配规则。例如：`REGEXP '^[a-z]+$'`可以匹配由小写字母组成的字符串。

一般来说，如果匹配规则比较简单，可以使用LIKE；如果匹配规则比较复杂，可以使用REGEXP。但是，REGEXP通常比LIKE更耗费资源和时间，所以在性能要求较高的场景下应该谨慎使用。

## 脚本篇

### 如何增加删除修改表结构

```sql
alter table 表名 add 列名 数据类型(长度) --添加列名
alter table 表名 modify 列名 数据类型(长度) --修改列属性
alter table 表名 change 原列名 现列名 数据类型(长度) --修改列名称
alter table 表名 drop 列 --删除列
```

###  查看当前数据库版本
```sql
SELECT VERSION();
```
你可以使用``命令来查看当前数据库版本。

### 查看当前登录的用户
```sql
SELECT USER();
SELECT CURRENT_USER();
```
### 查看T1数据库中所有表
```sql
SHOW TABLES FROM T1;
```
### 创建GBK字符集的数据库 dotnetguide，并查看已建库完整语句

**创建GBK字符集的数据库dotnetguide**

```sql
CREATE DATABASE dotnetguide CHARACTER SET GBK;
```

**查看已建库完整语句**

```sql
SHOW CREATE DATABASE dotnetguide;
```

### 如何进入dotnetguide数据库

```sql
USE dotnetguide;
```

### 创建用户dotnetguide，使之可以管理数据库dotnetguide

**创建用户dotnetguide**使之可以管理数据库dotnetguide

```sql
CREATE USER 'dotnetguide'@'localhost' IDENTIFIED BY 'password';
```

```sql
GRANT ALL PRIVILEGES ON dotnetguide.* TO 'dotnetguide'@'localhost';
```

### 查看创建的用户 dotnetguide 拥有哪些权限

```sql
SHOW GRANTS FOR 'dotnetguide'@'localhost';
```

### 查看当前数据库里有哪些用户

```sql
SELECT User, Host FROM MySQL.user;
```



### 查看建表结构及表结构的SQL语句

```sql
DESCRIBE test;
SHOW CREATE TABLE test;
```

### 创建test表
创建一个innodb GBK表test，字段id int(4)和name varchar(16)

```sql
CREATE TABLE test (
  id int(4),
  name varchar(16),
) ENGINE=InnoDB DEFAULT CHARSET=GBK;
```

### 插入一条数据
插入一条数据"1,dotnetguide"

```sql
INSERT INTO test (id, name) VALUES (1, 'dotnetguide');
```

### 插入2条数据

批量插入2行数据 "2,码涯"，"3,dotnet"

```sql
INSERT INTO test (id, name) VALUES (2, '码涯'), (3, 'dotnet');
```

### 查询名字为dotnetguide的数据


```sql
SELECT * FROM test WHERE name = 'dotnetguide';
```

### 更改列名为name的数据

把数据id等于3的名字dotnet更改为dotnetcore

```sql
UPDATE test SET name = 'dotnetcore' WHERE id = 3;
```

### 在字段name前插入age字段
在字段name前插入age字段，类型tinyint(2)

```sql
ALTER TABLE test ADD COLUMN age tinyint(2) NOT NULL BEFORE name;
```

### 不退出数据库,完成备份dotnetguide数据库

```
MySQLdump -u dotnetguide -p dotnetguide > dotnetguide.sql;
```

### 删除test表中的所有数据
```sql
DELETE FROM test;
```









