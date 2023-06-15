---
outline: deep
---
# C# 基础面试题（二）

## 面对对象基础

### C# 中的对象是什么？

对象是类的实例，可以使用类的属性和方法来表示真实世界实体（或想象中的实体）的特征。

例如，如果我们有一个处理书籍的程序，我们可以创建一个Book类，它有两个属性，标题和作者。然后我们可以实例化Book类来创建不同的Book对象，它们有不同的标题和作者。

### C# 中多态性是什么？它有哪些实现方式？
多态性是一种特殊特性，用于表示不同类型的对象以自己特有的方式响应相同的消息或方法调用。多态性有以下实现方式：
 - 方法重载（Method overloading）：在同一个类中定义多个同名但不同参数列表的方法
 - 方法重写（Method overriding）：在派生类中重新定义基类中已有的虚方法或抽象方法
 - 运算符重载（Operator overloading）：重新定义已有运算符对自定义类型的操作方式

### C# 中继承是什么？它有哪些特点？
继承是一种特殊特性，用于表示一个类（派生类）从另一个类（基类）获取其成员和行为。继承有以下特点：
 - 继承提供了代码复用和扩展的能力，并且遵循is-a关系
 - 继承可以实现多层次的层级结构，并且支持单一继承和接口多重实现
 - 继承可以实现方法重写和多态性，并且可以使用base关键字访问基类成员

### C# 中封装是什么？它有哪些好处？
封装是一种特殊特性，用于表示将数据和行为包装在一个单元中，并且控制对外部的可见性和访问权限。封装有以下好处：
 - 封装提高了代码的安全性和可维护性，并且遵循has-a关系
 - 封装可以隐藏实现细节，并且提供公共接口供外部使用
 - 封装可以实现数据验证、计算或转换等逻辑，并且可以使用属性和索引器实现封装

### C# 中的overload和override有什么区别？

overload和override概念都属于C#中的多态。多态是面向对象编程的特征，它允许一种语言以不同的形式使用相同的名称。例如，名为 Add 的方法可以添加整数、双精度和小数。

overload：重载，又称为早期绑定。

 - 同类同名不同参，属于编译时多态；重载是在一个类中定义多个方法名相同的方法，表示一个行为有多种实现方式。
 - 是在使用某个程序集前，已知该程序集里封装的方法、属性等。则创建该类的实例后可以直接调用类中封装的方法。

override：重写，，覆盖，又称为后期绑定。
 - 重写是用子类的方法来重写父类的方法，表示相同的方法在父类和子类中具有差异性
 - 需要使用System.Reflection，动态地获取程序集里封装的方法、属性等。

### C# 中重载方法有哪些方式？
C# 中重载方法有两种不同的方式：
1. 通过改变方法的参数个数或类型来实现重载；
2. 通过使用 params 关键字来实现重载。params 关键字允许将可变数量的参数作为一个数组传递给方法。

### C# 中哪些方法可以被重载？
方法重载是一种实现编译时多态性的方法，可以使用具有相同名称但不同签名的方法。例如：
```c#
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Hello_Word {
    class overloding {
        public static void Main() {
            Console.WriteLine(volume(10));
            Console.WriteLine(volume(2.5F, 8));
            Console.WriteLine(volume(100L, 75, 15));
            Console.ReadLine();
        }

        static int volume(int x) {
            return (x * x * x);
        }

        static double volume(float r, int h) {
            return (3.14 * r * r * h);
        }

        static long volume(long l, int b, int h) {
            return (l * b * h);
        }
    }
}
```

### C# 中的虚方法是什么？
虚方法是可以在派生类中重新定义的方法。虚方法在基类中是有实现的，并从该类派生。在基类中创建的虚拟方法，可以在派生类中覆盖它。可以使用 `virtual` 关键字在基类中创建一个虚方法，并使用 `override` 关键字在派生类中重写该方法。

当方法在基类中声明为虚方法时，它可以在基类中定义，并且派生类可以选择重写该方法。因此，它也是多态性的一个例子。

注意：
 - 默认情况下，方法是非虚拟的。
 - 不能将 `virtual` 修饰符与 `static`、`abstract`、`private` 或 `override` 修饰符一起使用。

### C# 中的虚方法和抽象方法的区别？
虚方法需要一个默认的实现。但是抽象方法没有实现。抽象方法必须在抽象类中声明，并且必须由派生类重写。虚方法可以在非抽象类中声明，并且可以由派生类重写或继承。

### C# 中接口是什么？它和抽象类有什么区别？

接口是一种特殊类型，用于定义一组抽象的成员，包括属性、方法、事件和索引器。

### C# 中的接口和抽象类有什么区别？
接口与抽象类有以下区别：
 - 接口只能包含抽象成员，抽象类可以包含抽象成员和非抽象成员
 - 接口不能包含字段、构造函数和析构函数，抽象类可以
 - 接口不能包含访问修饰符，默认都是公共的，抽象类可以包含不同的访问修饰符
 - 接口可以多重实现，抽象类只能单一继承
 - 接口适合表示不同类型之间的契约或行为，抽象类适合表示相似类型之间的共性或层次

### C# 中为什么不能为接口内的方法指定可访问性修饰符？
C# 中不能为接口内的方法指定可访问性修饰符，因为接口中的所有成员都隐式地具有 public 可访问性，并且不能更改。这是因为接口是一种定义契约或规范的方式，并且应该对所有实现它们的类或结构可见。

### C# 中如果继承接口中的方法名称发生冲突会怎样？

C# 中如果继承接口中的方法名称发生冲突，可以使用显式接口实现来解决。显式接口实现是指在实现接口方法时，在方法前加上接口名称和点号，以指定该方法属于哪个接口。如：

```c#
interface testInterface1 {
    void Show();
}
interface testInterface2 {
    void Show();
}
class Abc: testInterface1,
    testInterface2 {
        void testInterface1.Show() {
            Console.WriteLine("For testInterface1 !!");
        }
        void testInterface2.Show() {
            Console.WriteLine("For testInterface2 !!");
        }
    }
```

### C# 中显示和隐式实现接口的区别？
显示实现接口就是在方法名前加上接口名称，例如 `void IAnimal.Dog()`。这样做的好处是可以避免多个接口中有相同的方法签名造成的歧义，也可以标识出哪个方法属于哪个接口。但是，显示实现接口的方法不能直接通过类的实例访问，只能通过接口类型的引用访问，或者进行强制类型转换。

隐式实现接口就是不加接口名称，直接实现接口中的方法，例如 public void Dog()。这样做的好处是可以方便地访问接口方法和类自身具有的方法和属性，无需类型转换。但是，如果多个接口中有相同的方法签名，就需要使用显示实现接口来区分。

一般情况下，如果类只实现一个接口，或者没有相同的方法签名，可以使用隐式实现接口。如果类实现多个接口，并且有相同的方法签名，推荐使用显示实现接口。

### C# 中用sealed修饰的类有什么特点？

用`sealed`修饰的类不能被继承；用`sealed`修饰的方法不能被重写。

### C# 中怎样才能设置类被继承，又不让方法被重写呢？

C# 中可以使用 sealed 关键字来设置类被继承，又不让方法被重写。sealed 关键字可以用于修饰方法、属性、索引器或事件，并阻止它们在派生类中被重写。例如，
```C#
public sealed override void Method() { }
```

## 委托与事件

### C# 中的委托是什么？它有什么作用？

委托是一种特殊类型，用于表示对具有特定参数列表和返回类型的方法的引用。白话说，委托的本质是一个类，委托是将一种方法作为参数代入到另一种方法。

### C# 中的多播委托是什么？
委托允许将方法作为参数传递给其他方法，并且可以包含多个方法引用，称为多播委托。委托通常与事件和匿名方法结合使用。

### C# 中的事件是什么？
C# 中的事件是一种由类或对象向其他类或对象通知发生的相关事情的方式。事件是基于委托模型的。事件可以用于表示用户操作，例如单击按钮或图形用户界面中的菜单选项。

### C# 中的事件是不是一种委托？
事件基于委托，事件的本质是委托字段的包装器，对委托字段的访问起限制作用，事件隐藏了委托实例的大部分功能，仅暴露添加和移除事件处理器的功能。

### 简述Func与Action的区别？

Func与Action都是泛型委托类型，它们可以封装具有不同参数和返回值类型的方法。Func与Action有以下区别：

Func委托必须有返回值，并且返回值类型必须是最后一个泛型参数指定的类型；Action委托没有返回值，并且没有指定返回值类型的泛型参数

Func委托通常用于封装具有计算功能或者需要返回结果的方法；Action委托通常用于封装具有执行功能或者不需要返回结果的方法

### 在C# 中如何使用委托、事件和Lambda表达式实现发布订阅模式？
发布订阅模式，即一对多的通知机制，当一个对象（发布者）的状态发生变化时，通知所有关注它的对象（订阅者）。实现步骤如下：

 - 定义一个委托类型，用于表示事件处理程序的签名
 - 定义一个事件类型，用于表示事件的名称和数据
 - 在发布者类中声明一个委托类型的字段，并且使用event关键字修饰
 - 在发布者类中定义一个方法，用于触发事件并通知订阅者
 - 在订阅者类中定义一个方法，用于处理事件并执行相应的逻辑
 - 在订阅者类中创建一个发布者类的实例，并且使用+=运算符注册事件处理程序
 - 在订阅者类中调用发布者类的方法，用于触发事件并执行事件处理程序
 - 可以使用Lambda表达式来简化事件处理程序的定义和注册
### 在C# 中如何使用委托、事件和匿名方法实现观察者模式？
观察者模式，即一种一对多的通知机制，当一个对象（主题）的状态发生变化时，通知所有关注它的对象（观察者）。实现步骤如下：
 - 定义一个接口类型，用于表示观察者的行为
 - 定义一个委托类型，用于表示主题的状态变化
 - 在主题类中声明一个委托类型的字段，并且使用event关键字修饰
 - 在主题类中定义一个方法，用于添加或移除观察者
 - 在主题类中定义一个方法，用于更新主题的状态并通知观察者
 - 在观察者类中实现接口类型，并且定义一个方法，用于处理主题的状态变化
 - 在观察者类中创建一个主题类的实例，并且调用添加或移除方法来注册或注销观察者
 - 在观察者类中调用主题类的更新方法，用于更新主题的状态并执行观察者方法
 - 可以使用匿名方法来简化观察者方法的定义和注册

## String

### C# 中String与StringBuilder的区别是：
`String`是一个不可变的数据类型，即一旦创建了一个String对象，它的值就不能被修改。任何看起来修改String的操作，实际上都是返回了一个新的String对象。例如：

```c#
string s = "Hello";
s = s + " World"; // 创建了一个新的String对象，值为"Hello World"
```

复制不可变的数据类型有一些好处，例如可以在多线程中安全地使用，或者可以直接返回私有字段而不用担心被修改。但是如果不小心使用，也可能造成严重的性能问题，因为会产生和销毁很多不必要的对象。

`StringBuilder`是一个可变的数据类型，即它可以在不创建新对象的情况下修改自身的值。`StringBuilder`属于`System.Text`命名空间，它是一个动态的字符缓冲区，可以根据需要扩展或缩减。例如：

```c#
StringBuilder sb = new StringBuilder ("Hello");
sb.Append (" World"); // 修改了StringBuilder对象本身，值为"Hello World"
```

复制可变的数据类型在需要频繁修改字符串的场景下有很大的优势，因为它可以避免创建和销毁多余的对象，提高性能和内存效率。

### 字符串中`string str=null`和`string str=""`和`string str=string.Empty`的区别

`string str = null` 表示str没有指向任何字符串对象

`string str=""` 表示str指向一个空字符串对象

`string str = string.Empty` 等价于`string str = ""`

### Strings = new String("xyz");创建了几个StringObject?

创建了两个String Object。一个是"xyz"，它存储在字符串池中。另一个是Strings变量指向的对象，它存储在堆上。


### 什么是逐字字符串？

逐字字符串是一种特殊的字符串字面量，它以**@**符号开头，并且不需要对特殊字符进行转义 。

逐字字符串有以下好处：

- 可以方便地表示包含换行、制表符等特殊字符的字符串
- 可以方便地表示包含双引号、反斜杠等特殊字符的字符串
- 可以方便地表示包含文件路径、正则表达式等复杂的字符串 

### 字符串拼接、字符串内插法是什么？

字符串拼接是指将多个字符串连接成一个字符串，具有：

- 使用**+**运算符，如

```C#
string s = "Hello" + "World";
```
- 使用**string.Concat**方法，如

```C#
string s = string.Concat("Hello"， "World");
```
- 使用**string.Join**方法，如

```C#
string s = string.Join("，"， "Hello"， "World");
```
- 使用StringBuilder类，如

```C#
StringBuilder sb = new StringBuilder(); 
sb.Append("Hello"); 
sb.Append("World"); 
string s = sb.ToString();
```

字符串内插法是指在一个字符串中嵌入表达式的值，具有：

- 使用**符号和花括号**，如

```C#
string name="Tom";
int age=18;
string s="Hello， {name}， you are {age} years old.";
```
- 使用**string.Format**方法，如

```C#
string name = "Tom"; 
int age = 18; 
string s = string.Format("Hello， {0}， you are {1} years old."， name， age) 
```

### 原始字符串是什么？

原始字符串是一种使用 @ 符号作为前缀的字符串字面量，它可以让编译器忽略字符串中的转义序列，而直接按照原样输出字符串中的每个字符。

原始字符串的使用方法是在双引号前加上 `@` 符号，例如 `string s = @"Hello\nWorld"`。这样，这个字符串就不会被解释为包含换行符的字符串，而是包含 `\n` 字符的字符串。

原始字符串的好处是可以方便地表示一些包含特殊字符或多行文本的字符串，而不需要使用转义序列或拼接操作。

原始字符串也可以与插值字符串结合使用，在双引号前加上 @符号，例如`string name="Alice"; strings=@"Hello, {name}"`。这样，这个字符串就可以在保持原样输出的同时，插入变量或表达式的值。

## 数组

### C#中的数组是什么？
在 C#中，数组索引从零开始。这意味着数组的第一项的索引为0，而最后一项的索引为`数组总长度-1`。因此，如果数组长度为10，则第十项的索引为9。

在 C# 中，数组可以声明为固定长度或动态的。

固定长度数组可以存储预定义数量的项目。

动态数组没有预定义的大小。相反，动态数组的大小会随着您向数组中添加新项而增加。可以声明一个固定长度或动态的数组。甚至可以在定义动态数组后将其更改为静态数组。

### 什么是 C# 中的交错数组？
交错数组其实是一个数组，交错数组的元素可以具有不同的维度和大小。交错数组有时称为“数组的数组”。如下示例：

```c#
int[][] jaggedArray = new int[3][];
jaggedArray[0] = new int[5];
jaggedArray[1] = new int[4];
jaggedArray[2] = new int[2];
```

### Array.CopyTo() 和 Array.Clone() 有什么区别？
`Array.Clone()`方法创建数组的浅副本(浅拷贝)。 `Array`的浅拷贝只复制`Array`的元素，无论是引用类型还是值类型，但它不复制引用所引用的对象。**新数组中的引用指向与原始数组中相同的对象**。

`Array` 类的 `CopyTo()` 静态方法将一个数组的一部分复制到另一个数组。 `CopyTo`方法将一个数组的所有元素复制到另一个数组。

### C# 中的 Array 和 ArrayList 有什么区别？
以下是两者之间的差异列表：

|Array|ArrayList|
|-|-|
|Array使用向量数组存储|ArrayList使用双链表存储|
|Array需要指定容量|不需要指定容量|
|Array需要指定要存储的数据类型|ArrayList存储Object的数据，所以它可以存储任意数据类型|
|不需要类型转换|每次都要类型转换|
|没有Runtime 异常|会有Runtime 异常|
|元素不能数据中间插入或删除|元素可以插入或删除|

### Array 元素如何按降序排序？

`Array` 元素可以使用 `Array.Sort` 方法和自定义的比较器来按降序排序。

比较器需要实现了 `IComparer<T>` 接口才能够使用。
## 常用类库

### C#中集合是什么？它有哪些类型？
集合是一种特殊类型，用于存储多个元素并提供对元素进行操作和管理的功能。集合有多种类型，根据元素存储方式、顺序、数量等不同而区分。常见的集合类型有：
 - 数组（Array）：固定大小、相同数据类型、连续内存空间、随机访问
 - 列表（List）：可变大小、相同数据类型、连续内存空间、随机访问
 - 链表（LinkedList）：可变大小、相同数据类型、非连续内存空间、顺序访问
 - 栈（Stack）：后进先出（LIFO）、相同数据类型、顺序访问
 - 队列（Queue）：先进先出（FIFO）、相同数据类型、顺序访问
 - 哈希表（Hashtable）：键值对、无序、唯一键、快速查找
 - 字典（Dictionary）：键值对、无序、唯一键、快速查找
 - 集合（Set）：无重复元素、无序、快速查找
 - 排序列表（SortedList）：键值对、有序、唯一键、快速查找
 - 排序集合（SortedSet）：无重复元素、有序、快速查找
 - 排序字典（SortedDictionary）：键值对、有序、唯一键、快速查找

### C#中的 IEnumerable<> 是什么？

`IEnumerable` 是 `System.Collections` 命名空间中所有非泛型集合的父接口，如 `ArrayList`、`HastTable`等可以枚举的集合。此接口的泛型版本是 `IEnumerable<T>`，它是 `System.Collections.Generic` 命名空间（如 `List<>` 等）中所有泛型集合类的父接口。

在 `System.Collections.Generic.IEnumerable<T>` 中只有一个方法 `GetEnumerator()`，它返回一个 `IEnumerator`。`IEnumerator`通过使用 `Current` 属性以及 `Move Next` 和 `Reset` 方法来遍历集合的，如果没有这个接口作为父级的话，就不能使用 `foreach` 循环遍历和`LINQ` 查询。



### IEnumerable 和 IQueryable 有什么区别？
在探讨区别之前，先了解什么是 `IEnumerable` 和 `IQueryable`。

**IEnumerable**

IEnumerable是 `System.Collections` 命名空间中所有非泛型集合的父接口，如 `ArrayList`、`HastTable`等。此接口的泛型版本是 `IEnumerable<T>`，它是 `System.Collections.Generic` 命名空间中所有泛型集合类的父接口，如 `List<>` 等。

**IQueryable**

`IQueryable`接口是查询提供程序（query providers）实现的，而查询提供程序也实现了`IQueryable<T>`。

`IQueryable`接口继承了`IEnumerable` 接口，所以，`IQueryable`的查询结果是可以被枚举的。枚举会使得`IQueryable`对象关联的表达式树被执行。

### string和StringBuilder的区别，两者性能的比较

`string`是不可变的引用类型，在堆上分配内存空间；

`String Builder`是可变的引用类型，在堆上分配内存空间，并且可以动态扩展或缩减容量

`string`在进行字符串拼接时会产生新的字符串对象，并且占用更多的内存空间和时间开销

`String Builder`在进行字符串拼接时不会产生新的字符串对象，并且占用较少的内存空间和时间开销

### C# 中 SortedList 和 SortedDictionary 的区别？
SortedList 和 SortedDictionary 都是基于键值对的集合，它们可以按照键的顺序存储和检索元素。区别在于内存的使用和插入和删除的性能：

 - SortedList 使用的内存比 SortedDictionary 少，因为它是基于数组的。
 - SortedDictionary 可对未排序的数据执行更快的插入和移除操作，因为它是基于二叉搜索树的。它的时间复杂度为 O(log n)，而 SortedList 为 O(n)。
 - 如果使用排序数据一次性填充列表，则 SortedList 比 SortedDictionary 快，因为它不需要调整树结构。

### C# 中的Hashtable是什么？
Hashtable是存储 (Keys, Values) 对的集合。在这里，Keys 用于查找存储位置，是不可变的，并且在 Hashtable 中不能有重复的条目。`.Net Framework` 提供了一个Hashtable，它包含实现Hashtable所需的所有功能，无需任何额外开发。Hashtable是一个泛型的字典集合。集合中的每个项都是一个具有两个属性的 `DictionaryEntry` 对象：一个键对象和一个值对象。 这些被称为键/值。将项添加到Hashtable时会自动生成HashCode，用于标识的键对象来访问表的值。由于集合中的项是根据隐藏的HashCode排序的，因此应将这些项视为随机排序。

### byte b = 'a';byte c = 1;byte d = 'ab';byte e = '啊';byte g = 256;这些变量有些错误是错在哪里?

这些变量中有三个错误：

`byted='ab'` 错误在于字符字面量只能包含一个字符

`bytee='啊'` 错误在于字符`'啊'`超出了byte的范围（0-255）

`byteg=256` 错误在于数值256超出了byte的范围（0-255）

### bytea=255;a+=5;a的值是多少？

`a`的值是4；因为`byte`类型的范围是**0-255**，当超出这个范围时，会发生溢出，相当于对256取模

### Math.Round(11.5)等于多少?Math.Round(-11.5)等于多少?

Math.Round(11.5)等于12；Math.Round(-11.5)等于-12；

因为Math.Round使用的是四舍六入五取偶的方式，当小数部分为0.5时，如果整数部分为奇数，则进一位；如果整数部分为偶数，则不进位。

## linq&Lambda
### C# 中的 LINQ 是什么？它有哪些优点？
LINQ（Language Integrated Query）是一种特殊技术，用于使用统一的语法查询各种数据源。LINQ有以下优点：
 - LINQ提供了强类型化和智能感知的查询能力，并且遵循声明式编程范式
 - LINQ支持多种数据源，包括对象集合、XML文档、数据库等，并且提供了不同的查询提供程序
 - LINQ支持延迟加载和即时加载两种查询模式，并且提供了标准查询运算符和Lambda表达式等工具
 
### C#10 中Lambda有什么改进？
 - Lambda 表达式可以具有自然类型，这使编译器可从 Lambda 表达式或方法组推断委托类型
    ```c#
    var func1 = LocalMethod;
    void LocalMethod(string a)
    {
        Console.WriteLine(a);
    }
    var fun2 = string.IsNullOrEmpty;
    var fun3 = Console.Read;
    Action<string> fun4 = Console.Write;
    ```
 - 如果编译器无法推断返回类型，Lambda 表达式可以声明该类型。
    ```c#
    int[] numbers = { 2, 3, 4, 5 };
    int min = numbers.Min((int x) => x); // 指定了x的类型和返回类型
    Console.WriteLine(min); // 输出 2
    ```
 - 属性可应用于 Lambda 表达式
    ```c#
    // 给Lambda表达式添加了ProvidesNullCheck属性[^1^][1]
    Func<string?, int?> parse = [ProvidesNullCheck] (s) => (s is not null) ? int.Parse(s) : null; 
    ```