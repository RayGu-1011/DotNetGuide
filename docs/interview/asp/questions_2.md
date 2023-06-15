---
outline: deep
---
# ASP.NET Core 基础面试题（二）
## 依赖注入
### 什么是控制反转？

控制反转（inversion of control）是指对象的创建和依赖关系的管理由容器（container）来负责，而不是由对象本身来负责。这样可以实现对象之间的松耦合，提高代码的可测试性和可替换性。

### 什么是依赖注入？

依赖注入（dependency injection）是一种设计模式，也是一种实现控制反转的方式。它可以让一个对象通过构造器、属性或者工厂方法来接收它所依赖的其他对象，而不是自己创建或查找这些对象

### 依赖注入的好处有哪些？

依赖注入的好处包括：
 - 降低了类之间的耦合度，提高了代码的可重用性和可维护性
 - 增加了代码的可测试性，可以使用模拟对象或存根对象替换真实的依赖关系进行单元测试
 - 提高了代码的灵活性和扩展性，可以根据不同的环境或需求轻松地更换不同的依赖关系实现

### 依赖注入的注入方式有哪些？

依赖注入的注入方式包括：
 - 构造器注入（constructor injection）：通过构造器参数来传递依赖对象
 - 属性注入（setter injection）：通过属性的setter方法来传递依赖对象
 - 工厂方法注入（factory method injection）：通过工厂方法返回的对象来传递依赖对象

### ASP.NET Core 内置容器的特点有什么？

 - 是一个轻量级的 IOC 容器，它支持构造器注入，可以方便地实现面向接口编程和依赖倒置
 - 提供了三种生命周期模式：`Transient`（瞬时）、`Scoped`（作用域）和`Singleton`（单例），可以根据不同的场景选择合适的模式
 - 可在 `Startup.cs` 的 `ConfigureServices` 方法里使用对应生命周期的注入，也可以使用特性（如 `ServiceFilterAttribute` 和 `TypeFilterAttribute`）来注入过滤器
  - 可通过扩展方法或第三方库来替换成其他的 IOC 容器，如 Autofac、Unity 等

### ASP.NET Core 中的服务生命周期有哪些？

ASP.NET Core 中提供了三种服务生命周期：
 - Transient：每次请求服务时都会创建一个新的实例。
 - Scoped：每个请求范围内只创建一个实例，同一个请求内多次请求相同的服务会得到相同的实例。
 - Singleton：在第一次请求服务时创建一个实例，并在整个应用程序生命周期内重用该实例。

## AOP

### AOP是什么？

AOP（Aspect Oriented Programming）是一种编程方式，它是一种通过预编译或动态代理的方式，在不修改源代码的情况下，给程序动态添加功能的技术，比如日志、事务、安全等。这些额外的操作被称为通知（advice），而被添加通知的方法被称为切入点（pointcut）。AOP可以实现代码的复用和解耦，提高程序的可维护性和可扩展性。

### AOP的切入点是什么？

切入点（Pointcut）是指一组匹配规则，用于确定哪些连接点（Join Point）需要被切面（Aspect）所关注。

切面（Aspect）是指一组具有相同功能或关注点的代码，它可以跨越多个方法或类。

连接点（Join Point）是指程序执行过程中的某个特定位置，例如方法的开始、结束、异常等。切面可以在这些位置插入自己的代码，以实现额外的功能或行为。

切面和连接点之间的关系是：一个切面可以关注多个连接点，一个连接点可以被多个切面所关注。

### AOP的通知是什么？

通知（Advice）是指切面在连接点处执行的具体代码，它定义了切面要做什么和何时做。具有：

- 前置通知（Before Advice）：在连接点之前执行的通知，例如在方法开始前记录日志
- 后置通知（After Advice）：在连接点之后执行的通知，例如在方法结束后清理资源
- 返回通知（After Returning Advice）：在连接点正常返回后执行的通知，例如在方法返回后缓存结果
- 异常通知（After Throwing Advice）：在连接点抛出异常后执行的通知，例如在方法异常后记录错误信息
- 环绕通知（Around Advice）：在连接点前后都执行的通知，例如在方法前后开启和提交事务

### AOP 和 ASP.NET Core Filter 有什么关系

ASP.NET Core Filter可以看作是一种实现aop的方式，它可以在不同的阶段对请求进行拦截、处理、验证、缓存、日志记录等操作

### ASP.NET Core Filter有哪几种？
ASP.NET Core Filter有五种，包括：
 - 授权筛选器（Authorization Filter）：用于确定当前请求用户是否被授权。如果请求未获授权，可以让管道短路
 - 资源筛选器（Resource Filter）：在授权之后第一个处理请求的过滤器，也是最后一个在请求离开过滤管道时接触请求的过滤器。在性能方面，对实现缓存或者对过滤管道进行短路特别有用
 - 操作筛选器（Action Filter）：包装对单个操作方法的调用，并且可以处理传递到操作的参数以及从操作返回的操作结果
 - 异常筛选器（Exception Filter）：用于对 MVC 应用程序中未处理的异常应用全局策略
 - 结果筛选器（Result Filter）：包装单个操作结果的执行，并且只在操作执行成功时运行。对于必须围绕视图执行或格式化程序执行的逻辑，会很有用

### ASP.NET Core Filter的执行顺序？

ASP.NET Core Filter的执行顺序如下：
1. 授权筛选器（Authorization Filter）
2. 资源筛选器（Resource Filter）
3. 操作筛选器（Action Filter）
4. 异常筛选器（Exception Filter）
5. 结果筛选器（Result Filter）

### 为什么要把ResourceFilter放在Action Filter前

Resource Filter可以在模型绑定之前执行一些逻辑，比如验证**请求参数**，**缓存响应**，**授权用户**等。这些逻辑可能会影响到后续的Action Filter的执行，比如短路请求管道或修改请求参数。

如果ResourceFilter放在Action Filter后，那么Action Filter就无法获取到ResourceFilter的修改或判断。

### ASP.NET Core Filter嵌套模式下的执行顺序？

1. 全局筛选器的 before 代码。
2. 控制器筛选器的 before 代码。
3. 操作方法筛选器的 before 代码。
4. 操作方法筛选器的 after 代码。
5. 控制器筛选器的 after 代码。
6. 全局筛选器的 after 代码。

### ASP.NET Core Filter 的注册方式有哪些？

ASP.NET Core Filter的注册方式有三个：
 - 控制器：使用特性来添加Filter，在控制器上添加特性则对整个控制器中的所有方法都生效
 - 方法：使用特性来添加Filter，在方法上添加特性则只对当前方法生效
 - 全局配置：可以在 `Startup` 的 `ConfigureServices` 配置，通过全局配置可以在整个项目中都生效

### ASP.NET Core Filter 如何支持依赖注入？

ASP.NET Core Filter 的依赖注入方式有三种：
 - 通过全局注册：如`builder.Services.AddScoped<Filter> ()`
 - ServiceFilter：`ServiceFilterAttribute` 是通过 DI 容器来管理 `ActionFilterAttribute`的，这就意味着在使用前，需将此Filter注入到DI中。它实现了`IFilterFactory`接口，并且可以标记在控制器或方法中。
 - TypeFilter：`TypeFilterAttribute` 则是通过一个工厂直接实例化，所以使用前不需要注册到 DI 容器中。它实现了`IFilterFactory`接口，并且可以标记在控制器或方法中。

## 中间件

### 中间件是什么？

中间件是一种软件组件，它可以处理HTTP请求和响应，并且可以与其他中间件协作形成一个请求管道。每个中间件都有机会对请求进行操作或短路，并且可以决定是否调用下一个中间件。中间件可以实现各种功能，例如静态文件服务，异常处理，身份认证，路由，MVC等。

在`ASP.NET Core`中，中间件通常以委托（Delegate）或类（Class）的形式编写，并在Startup类的Configure方法中注册到请求管道中

### ASP.NET Core 中间件的执行顺序是怎样的？

中间件的执行顺序是按照它们加入管道的顺序，从第一个中间件开始，依次调用它们的请求委托。

中间件顺序如下图，摘自微软官方文档：
![An image](./images/middleware-pipeline.svg)

### ASP.NET Core中的中间件和过滤器有什么区别？
中间件是一种装配到应用管道以处理请求和响应的软件，每个中间件可以选择是否将请求传递给下一个中间件，也可以在下一个中间件前后执行一些操作。

过滤器是一种应用于控制器或动作的特性，它可以在动作执行之前或之后执行一些操作，例如输出结果的格式化，数据验证，异常处理等。

 - 作用域不同：中间件作用于整个应用系统，关注于通用的功能，例如身份验证，日志记录等；过滤器作用于具体的控制器或动作，关注于业务相关的内容。
 - 使用方式不同，中间件需要在 `Startup` 类的 `Configure` 方法中使用 `Run`、`Use`、`Map` 等扩展方法来注册；过滤器需要在控制器或方法上使用**特性**来标注，或者在 `Startup`中全局注册。