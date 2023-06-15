---
outline: deep
---
# ASP.NET Core 基础面试题（三）
## 常用类库

### ASP.NET Core中Startup类有什么作用？

`Startup`类是`ASP.NET Core`应用程序的入口点，它负责配置应用程序的服务和请求管道。`Startup`类必须包含两个方法：
 - ConfigureServices：向依赖注入容器注册服务
 - Configure：配置请求管道中使用的中间件

### Applicationbuilder的Use和Run方法有什么区别？

Use方法用于**配置多个中间件**，它包括一个用于调用序列中的下一个中间件的next参数。Use方法可以在请求和响应的过程中执行一些逻辑，然后调用`next()`方法继续执行后续的中间件。

Run方法用于配置最后一个中间件，它没有next参数。Run方法只能在响应的过程中执行一些逻辑，然后结束请求。Run方法之后**不能再添加其他的中间件**。

简单来说，Use方法可以链式调用多个中间件，而Run方法只能作为最后一个中间件。

### ASP.NET Core 中的配置是什么？

ASP.NET Core中配置用来管理应用程序的配置设置的系统。这个系统是轻量级和可扩展的，它提供了一种一致的方式来存储和检索所有ASP.NET Core应用程序的配置设置。

ASP.NET Core配置系统使用了基于**键/值**对的设置，它可以从多种配置源中获取，比如JSON, XML, INI等。

ASP.NET Core配置系统包含了一些类，比如`IConfiguration`, `IConfigurationBuilder`, `IConfigurationProvider`等。
 - IConfiguration接口提供了一个统一的视图来访问所有的配置源。
 - IConfigurationBuilder接口提供了一个构建器模式来创建IConfiguration实例。
 - IConfigurationProvider接口定义了从配置源中读取和加载配置数据的方法。

### ASP.NET Core 中的选项模式是什么？

ASP.NET Core 中的选项模式是一种使用类来提供强类型访问一组相关设置的模式。

当配置设置按照场景分离到不同的类中时，应用程序遵循了两个重要的软件工程原则：封装和关注点分离。

选项模式可以使用`IOptions<TOptions`>接口，其中`TOptions`是一个类的泛型类型参数。可以通过依赖注入来获取`IOptions<TOptions>`的实例。

### ASP.NET Core 中路由系统是什么？

ASP.NET Core 中路由是指将传入的HTTP请求映射到应用程序的可执行终结点的功能。终结点是应用程序的请求处理代码单元，可以是控制器、Razor页面、SignalR、gRPC服务或委托等。路由系统使用两个中间件来完成匹配和执行终结点：`UseRouting`和`UseEndpoints`。
传统路由是在启动时或在Program.cs中定义路由模板，用于匹配和生成URL。属性路由是在控制器或操作上使用特性来定义路由模板。

### ASP.NET Core 中终结点路由是什么？

终结点路由可以让应用定义和匹配一组可执行的请求处理代码单元，称为终结点。

优点：
 - 终结点可以包含任意的元数据，例如授权策略、HTTP 方法、路由约束等，这些元数据可以被路由感知的中间件来处理。
 - 终结点可以通过路由模板来选择，路由模板是一种描述 URL 匹配模式的字符串，可以包含参数、约束、转换器等。
 - 终结点可以通过 URL 生成器来创建映射到终结点的 URL，这样可以避免硬编码 URL。
 - 终结点可以通过 EndpointDataSource 来枚举和检索，这样可以方便地管理和分析应用的所有终结点。

核心组件：

 - UseRouting 中间件，它会根据应用中定义的终结点集合来选择最佳匹配，并将匹配结果存储在 HttpContext 中。
 - UseEndpoints 中间件，它会根据 HttpContext 中的匹配结果来执行对应的终结点委托。
 - MapXXX 方法，它们用于在应用中注册不同类型的终结点，例如 MapGet、MapControllers、MapRazorPages 等。

### ASP.NET Core 中路由约束是什么？

路由约束是一种用来限制或过滤路由参数的匹配方式的规则。常规语法为`{parameter：constraint}`。例如：可以用int约束来限制id参数只能是整数
```c#
[HttpGet("{id:int}")]
public IActionResult Get(int id){ ... }
```
下表列出了支持的路由约束：

|约束|描述|示例|
|-|-|-|
|alpha|(a-z、A-Z) 匹配大写或小写拉丁字母字符|`{x：alpha}`|
|bool|匹配布尔值。|`{x：bool}`|
|datetime|匹配 **DateTime** 值。|`{x：datetime}`|
|Decimal|匹配十进制值。|`{x：decimal}`|
|double|匹配 64 位浮点值。|`{x：double}`|
|FLOAT|匹配 32 位浮点值。|`{x：float}`|
|GUID|匹配 GUID 值。|`{x：guid}`|
|int|匹配 32 位整数值。|`{x：int}`|
|length|匹配具有指定长度或指定长度范围内的字符串。|`{x：length (6) }{x：length (1,20) }`|
|long|匹配 64 位整数值。|`{x：long}`|
|max|匹配具有最大值的整数。|`{x：max (10) }`|
|maxlength|匹配具有最大长度的字符串。|`{x：maxlength (10) }`|
|分钟|匹配具有最小值的整数。|`{x：min (10) }`|
|minlength|匹配长度最短的字符串。|`{x：minlength (10) }`|
|range|匹配值范围内的整数。|`{x：range (10，50) }`|
|regex|匹配正则表达式。|`{x：regex (^\d-\d{3}{3}-\d{4}$) }`|

### ASP.NET Core 中模型绑定和验证是什么？

 - 模型绑定是指将HTTP请求中的数据（如表单域、查询字符串、路由数据等）**自动转换**为控制器或Razor页面的**方法参数或属性**。
 - 模型验证是指检查模型绑定后的数据**是否符合业务规则**，如必填、长度限制、范围限制等。模型绑定和验证可以简化开发人员的工作，提高代码的可读性和可维护性，同时保证数据的完整性和安全性。

### ASP.NET Core 中 worker service是什么？

worker service 是 ASP.NET Core 3.0 新增的一种项目模板，它可以用来创建长时间运行的后台服务，并且能轻松地部署成 windows 服务或 linux 守护程序。

worker service 的主要特点是：
 - 跨平台，它使用了 `.NET Core` 的跨平台特性，在 Windows、Linux 或 macOS 上运行。
 - 简化服务的开发和管理，可以使用 ASP.NET Core 的依赖注入、配置、日志等基础设施。
 - 可以使用 `IHostedService` 接口或 `BackgroundService` 基类来定义后台任务，这些任务可以在应用启动时自动运行，并在应用停止时优雅地退出。
 - 它可以使用 `Microsoft.Extensions.Hosting.WindowsServices` 或 `Microsoft.Extensions.Hosting.Systemd` 包来将 `worker service` 转换为 Windows 服务或 Linux systemd 服务，方便部署和监控。

### ASP.NET Core 中什么是泛型主机构建器？ 

泛型主机构建器是一种用于创建和配置主机的对象，主机是封装应用资源和生命周期管理的对象。泛型主机构建器可以使用 `CreateDefaultBuilder` 和 `ConfigureWebHostDefaults` 方法来设置主机的默认选项，例如内容根目录、配置、日志记录、依赖关系注入、Web 服务器等。泛型主机构建器还可以使用 `ConfigureServices 方法来添加自定义的托管服务。

### ASP.NET Core 中logger是什么？

logger 是一个用于记录应用程序的日志信息的组件，它提供了一个通用的 ILogger 接口和多种内置或第三方的日志提供器，例如控制台、调试、事件日志等。logger 可以通过依赖关系注入 (DI) 的方式在任何类中使用，它支持不同的日志级别和类别，可以根据配置文件或代码来设置。logger 可以帮助开发者调试程序、监控性能、记录异常等。

### ASP.NET Core 中Health Checks是什么？

Health Checks 是一种用于报告应用程序基础结构组件的健康状态的中间件和库，它可以通过 HTTP 端点公开健康检查信息，供各种实时监控场景使用。`Health Checks` 可以检查应用程序是否能够处理请求（活跃度），以及应用程序的依赖项（如数据库和外部服务）是否可用和正常工作（整备度）。Health Checks 可以与容器协调器、负载均衡器、外部监控服务或健康检查发布者等搭配使用，以响应健康检查结果。Health Checks 可以通过实现 `IHealthCheck` 接口和调用 `AddHealthChecks` 方法来创建和注册，也可以通过配置文件或代码来设置不同的健康检查选项。

### ASP.NET Core 7 限流中间件是什么？

限流中间件的类是`Microsoft.AspNetCore.RateLimiting`。`Microsoft.AspNetCore.RateLimiting`支持四种限制算法：固定窗口、滑动窗口、令牌桶和并发。

## 鉴权&授权

### 鉴权和授权是什么意思？

 - 鉴权（Authentication）是指确定用户标识的过程，例如通过用户名和密码、令牌或其他凭据来验证用户的身份。
 - 授权（Authorization）是指判断用户可执行的操作的过程，例如通过角色、策略或其他规则来控制用户对资源的访问权限。

### 鉴权和授权的有哪些技术？

常用的就有两种：
 - Session-Cookie：这是一种基于会话状态的鉴权和授权方式，服务端在接受客户端首次访问时创建 Session，并返回一个唯一的 Session ID 给客户端，客户端将 Session ID 保存在 Cookie 中，并在后续请求中携带 Cookie，服务端根据 Session ID 验证客户端的身份和权限。这种方式的缺点是需要服务端保存 Session 状态，消耗资源，不利于扩展。
 - OIDC 结合 OAuth2.0：
   - OIDC 结合 OAuth2.0 的鉴权和授权方式是一种基于 OAuth2.0 的身份验证协议，它在 OAuth2.0 提供的授权的基础上添加了认证。
   - OIDC 使用 OAuth2.0 的授权服务器来为第三方用户提供身份认证，并将对于的身份认证信息传递给客户端，且可以适用于各种类型的客户端（比如服务端应用，移动APP，JS应用），且完全兼容OAuth2.0。
   - OIDC 在 OAuth2.0 的基础上增加了一个 ID Token，它是一个 JSON Web Token (JWT)，包含了用户的身份信息和其他 Claim。

### JWT是什么？

JWT（JSON Web Token）是一种认证协议，它可以用来生成和验证接入令牌（Access Token），令牌中包含了一些用户或应用的信息（称为声明）。它由三部分组成：头部（Header），负载（Payload）和签名（Signature）
 - 头部包含了Token的类型和加密算法
 - 负载包含了Token的有效信息，如过期时间，颁发者，角色等
 - 签名是由头部和负载经过加密算法和密钥生成的，用于验证Token的完整性和可信性。JWT可以作为一种无状态的身份验证机制，不需要在服务器端存储Session或Cookie，只需要在客户端保存Token，并在每次请求时携带Token即可

### OAuth2是什么？

OAuth2.0是一种授权框架，它定义了一套详细的授权机制，使得第三方应用可以获得用户或其他应用的资源的有限访问权限。OAuth2.0涉及到多种角色、客户端类型、授权方式和终端，适用于不同的场景和需求。

### OAuth2有哪几种授权方式？

OAuth2的有四种授权方式：
 - 授权码流程（Authorization Code Flow）
 - 隐式流程（Implicit Flow）
 - 密码流程（Password Flow）
 - 客户端凭证流程（Client Credentials Flow）

### ASP.NET Core中身份验证和授权是什么

ASP.NET Core 中的身份验证和授权是指两种安全机制，它们可以保护 Web 应用程序中的资源和操作不被未经授权的用户访问

身份验证是指确定用户身份的过程，即确定用户是谁。ASP.NET Core 提供了多种身份验证方案，如 Cookie、JWT、OAuth、OIDC 等，可以使用内置的或自定义的身份验证处理程序来实现用户的身份验证

授权是指授予用户权限的过程，即确定用户有哪些权限。ASP.NET Core 提供了多种授权策略，如基于角色、基于策略、基于资源等，可以使用 Authorize 特性或 Authorization 中间件来实现用户的授权检查









