---
outline: deep
---

# ASP.NET Core 基础面试题（一）
## .NET Core 基础知识

### 什么是.NET Standard？
.NET Standard是一套在所有.NET实现中通用的API正式规范，它的目的是提高.NET生态系统中的一致性和代码共享。
.NET Standard有多个版本，每个版本都包含了更多的API。当一个库面向.NET Standard的某个版本时，它可以在任何实现了该版本或更高版本的.NET Standard的.NET实现上运行。

### 什么是.NET Core？
.NET Core是一个免费的、开源的、跨平台的应用程序开发框架，由微软开发，基于.NET Standard规范。.NET Core支持UWP和ASP.NET Core等应用类型，可以在Windows、Linux和macOS等操作系统上运行。

### Core CLR是什么？
Core CLR 是 .NET Core 的运行时环境，它负责管理内存分配、垃圾回收、异常处理、安全检查、程序集加载等功能。它和 .NET Framework 的 CLR 有以下区别：

### Core CLR 和 .NET Framework CLR有什么区别？
主要以下区别：
 - Core CLR 是开源的，而 .NET Framework 的 CLR 是闭源的
 - Core CLR 是跨平台的，可以运行在 Windows、Linux 和 MacOS 上，而 .NET Framework 的 CLR 只能运行在 Windows 上
 - Core CLR 是模块化的，可以按需引用不同的组件，而 .NET Framework 的 CLR 是集成的，包含了所有的功能
 - Core CLR 是轻量级的，占用更少的内存和磁盘空间，而 .NET Framework 的 CLR 是重量级的，占用更多的资源
 - Core CLR 支持更多的语言特性和编译技术，如本地编译和表达式树编译，而 .NET Framework 的 CLR 只支持 JIT 编译和 NGEN 编译

### Roslyn编译器是什么？

Roslyn 编译器是 .NET Compiler Platform 的一个组成部分，它是一个开源的编译器，支持
C# 和 VB.NET。

### Roslyn 编译器和 .NET Framework的编译器有什么区别？

主要以下区别：

 - Roslyn 编译器是基于 .NET Standard 的跨平台编译器，可以运行在 Windows、Linux 和 MacOS 上，而 .NET Framework 的编译器是只能运行在 Windows 上
 - Roslyn 编译器是基于 API 的可扩展编译器，可以提供对编译过程中产生的语法树、符号表等元数据的访问和修改能力，而 .NET Framework 的编译器是基于命令行或 IDE 的黑盒式编译器
 - Roslyn 编译器支持更多的语言特性和编码风格，如表达式树编译、异步流、模式匹配等，而 .NET Framework 的编译器只支持较旧版本的语言规范

### ASP.NET Core是如何进行垃圾回收的？
垃圾回收是一种自动化的内存管理机制，用于释放不再使用的托管对象占用的内存。在 ASP.NET Core 中，垃圾回收是由.NET Runtime 负责的，它使用了一种分代（Generational）和标记-清除（Mark-and-Sweep）的算法。

分代垃圾回收将托管对象分为三个代（Generation）：0代、1代和2代：

 - 0代包含了最近创建的对象
 - 1代包含了从0代经过一次垃圾回收后仍然存活的对象
 - 2代包含了从1代经过一次垃圾回收后仍然存活的对象

标记-清除垃圾回收分为两个阶段：标记阶段和清除阶段

 - 标记阶段会遍历所有可达的对象，并将它们标记为存活
 - 清除阶段会遍历所有未标记的对象，并将它们释放。

在ASP.NET Core中，垃圾回收会根据内存压力和CPU时间来触发，通常会按照从低代到高代的顺序进行。例如，当0代内存不足时，会触发0代垃圾回收；当1代内存不足时，会触发0代和1代垃圾回收；当2代内存不足时，会触发0代，1代和2代垃圾回收。

## ASP.NET Core 基础知识
### 什么是 ASP.NET Core？

ASP.NET Core是一个开源、跨平台、高性能的框架，用来构建现代的、互联网连接的和云端支持的应用程序，如Web应用、IoT应用、移动后端等。`ASP.NET Core`是基于`.NET Core`和`.NET Standard`的，它可以在Windows、Mac和Linux上运行，并且可以部署在IIS或自托管在您自己的进程中。

### ASP.NET Core有哪些特性？
ASP.NET Core有以下特性：
 - 跨平台：可在Linux，macOS和Windows上运行，并支持Docker容器化
 - 高性能：使用了新的web服务器Kestrel，提供了高吞吐量和低延迟的web服务
 - 模块化：根据需要添加或移除功能模块，如MVC，Identity，SignalR等
 - 可配置：可使用多种方式配置应用程序，如appsettings.json文件，环境变量，命令行参数等
 - 可扩展：可以使用第三方库或自定义代码扩展应用程序的功能，如日志记录，缓存，身份验证等
 - 依赖注入：内置依赖注入容器，可以注册和解析服务，并实现控制反转和松耦合
 - 中间件：使用中间件来处理HTTP请求和响应的流水线，可以自定义和组合中间件来实现不同的功能
 - MVC：支持MVC模式来开发web应用程序，使用模型（Model），视图（View）和控制器（Controller）来分离关注点
 - Razor Pages：ASP.NET Core支持Razor Pages模式来开发web应用程序，使用页面模型（PageModel）和视图（View）来简化开发流程
 - Blazor：ASP.NET Core支持Blazor模式来开发web应用程序，使用C#和Razor语法来编写交互式的客户端UI

### ASP.NET Core相比于传统的ASP.NET有什么优势？
ASP.NET Core相比于传统的ASP.NET有以下优势：
 - 支持多种部署方式，可将框架嵌入到应用中，也可安装在用户或机器级别
 - 支持跨平台，可运行在Windows、Linux和Mac上，也可以移植到其他操作系统上
 - 支持命令行工具，可在命令行下执行所有的产品场景
 - 兼容.NET Framework, Xamarin和Mono，是通过.net standard库实现的
 - 内置的依赖注入，可轻松地实现控制反转
 - 内置的日志框架，可方便地记录和跟踪应用的运行情况
 - 引入了一个新的、快速的、跨平台的Web服务器-`Kestrel`。所以，ASP.NET Core独立运行，而不需要方向代理。如IIS或Nginx
 - 支持中间件，可以自定义HTTP请求管道中的组件和逻辑
 - 支持多种开发模式。例如MVC, Razor Pages, Web API, Blazor等
 - 支持多种前端技术。例如Angular, React, Vue等
 - 支持多种后端技术。例如Entity Framework Core, Dapper, gRPC等
 - 支持多种身份认证和授权方式。例如Cookie, JWT, OAuth2, OpenID Connect等
 - 支持多种会话和缓存方式。例如内存缓存，分布式缓存，响应缓存等
 - 支持多种通信技术。例如SignalR, WebSockets, gRPC等

### 为什么使用 ASP.NET Core 进行Web应用程序开发？

使用ASP.NET Core进行Web应用程序开发的原因有：

 - ASP.NET Core是一个快速，灵活，可扩展的Web框架
 - ASP.NET Core可以运行在多种平台和环境上
 - ASP.NET Core可以利用最新的Web技术和标准
 - ASP.NET Core可以提供高性能和高可用性

### IIS是什么

IIS 是 Internet Information Services 的缩写，它是一种运行在 Windows 服务器上的 Web 服务器软件，可以托管和管理 Web 应用程序，如 ASP.NET、PHP、Node.js 等

### IIS的作用是什么

 - 提供 HTTP 服务，接收客户端的请求，并返回响应
 - 处理静态内容，如 HTML 文件、图片、样式表等
 - 处理动态内容，如 ASP.NET 页面、PHP 脚本等，并调用相应的处理程序或模块来执行代码并生成输出
 - 提供 FTP 服务，允许用户上传和下载文件
 - 提供 SMTP 服务，允许用户发送和接收电子邮件
 - 提供管理工具，如 IIS 管理器、命令行工具等，方便用户配置和监控 IIS 的性能和安全性

### 什么是Kestrel？它和IIS有什么区别？

Kestrel是一个跨平台的，轻量级的，高性能的web服务器，用于托管ASP.NET Core应用程序。它是基于libuv库实现的，支持HTTP/1.1，HTTP/2和HTTPS协议。它可以作为一个独立的web服务器运行，也可以与其他web服务器如IIS，Apache或Nginx配合运行。

IIS是一个Windows平台上的web服务器，用于托管ASP.NET或其他web应用程序。它提供了一些高级功能，如进程管理，负载均衡，健康检查，URL重写等。它可以作为一个反向代理服务器来转发请求给Kestrel。

Kestrel和IIS的主要区别是：

 - Kestrel可以在Linux，macOS和Windows上运行，而IIS只能在Windows上运行
 - Kestrel更快，更轻量级，更易于部署，而IIS更稳定，更安全，更易于管理
 - Kestrel可以直接处理客户端请求，也可以通过其他web服务器转发请求，而IIS只能通过其他web服务器转发请求给Kestrel

### Linux部署ASP.NET Core项目的步骤？
1. 在Linux服务器上安装.NET Core运行时
2. 在开发环境中，使用`dotnet publish`命令来发布ASP.NET Core项目，生成一个可以在服务器上运行的目录
3. 将ASP.NET Core项目复制到服务器上
4. 在服务器上配置一个反向代理服务器，将HTTP请求转发到Kestrel Web服务器

### MVC是什么？
MVC是一种开发模式，它将应用分为三个部分：模型（Model），视图（View）和控制器（Controller）：
 - 模型（Model）表示应用的数据和业务逻辑层。模型通常与数据库交互，并封装数据验证和操作规则。
 - 视图（View）表示应用的用户界面层。视图通常使用Razor语法编写，并显示模型数据和用户输入表单。
 - 控制器（Controller）表示应用的控制流层。控制器通常处理用户请求，并调用模型操作数据并返回视图响应。

MVC模式有利于实现关注点分离（Separation of Concerns），即每个部分只关注自己的职责，并通过接口进行交互。这样可以提高代码的可读性，可维护性和可测试性。

### ASP.NET Core 中同步和异步编程有什么区别？

**同步编程**：一个线程在执行一个任务时，必须**等待**任务完成才能继续执行其他任务。

**异步编程**：一个线程在执行一个任务时，可以**不等待**任务完成而继续执行其他任务，当任务完成时通过回调或其他方式通知线程。

同步编程会导致**线程阻塞**，浪费资源，降低性能和可伸缩性。

异步编程可以**避免线程阻塞**，提高资源利用率，提高性能和可伸缩性。

ASP.NET Core 中应能够同时处理多个请求。异步API可以让一小部分线程处理数千个并发请求，而不需要等待阻塞调用。相比之下，同步API会导致线程池耗尽和响应时间下降。


### 如何使用async/await关键字和Task类？
在 ASP.NET Core中，使用`async/await`关键字和Task类可以简化异步编程。

`async`关键字用于标记一个方法为异步方法，该方法可以包含`await`表达式；

`await`关键字用于等待一个返回`Task`或`Task<T>`的异步操作的完成，并获取其结果；

`Task`类用于表示一个异步操作，它可以包含状态，结果，异常等信息；

`Task<T>`类用于表示一个返回结果的异步操作，它继承自Task类

### ASP.NET Core 中元包是什么？

ASP.NET Core 中的元包是一个 NuGet 包约定，用于描述一组放在一起有意义的包。这些包是通过依赖项来被描述的。
其中，`Microsoft.AspNetCore.App` 元包是 ASP.NET Core 的共享框架，包含了由 Microsoft 开发和支持的程序集。

### ASP.NET Core 中元包的特点？

 - 一种 NuGet 包约定，用于描述一组放在一起有意义的包
 - 可以通过为这组包指定一个框架来建立一个框架
 - 可以提供用于保护应用的版本限制，防止其他包更改元包中包含的包版本
 - 可以定义了一组经过测试且运行良好的包（包括指定的各种版本）
 - 是通过依赖项来描述这组包的，而不是通过实际的文件或程序集

### gRPC是什么?

gRPC是一种高性能、开源和通用的RPC框架，由谷歌开发，基于HTTP/2协议和protobuf序列化协议。gRPC可以让你像调用本地函数一样调用远程服务，支持多种语言和平台，支持流式传输和双向流，具有高效、安全、简洁的特点。

### gRPC 四种模式是什么？

 - 一元 RPC（Unary RPC），客户端向服务端发送一个请求，服务端返回一个响应，这是最简单和常用的模式。
 - 服务端流 RPC（Server streaming RPC），客户端向服务端发送一个请求，服务端返回一个响应流，客户端可以读取多个响应消息，直到流结束。这种模式适用于服务端需要持续推送数据给客户端的场景。
 - 客户端流 RPC（Client streaming RPC），客户端向服务端发送一个请求流，服务端返回一个响应，服务端可以读取多个请求消息，直到流结束。这种模式适用于客户端需要批量发送数据给服务端的场景。
 - 双向流 RPC（Bidirectional streaming RPC），客户端和服务端都可以向对方发送请求和响应流，两边可以同时读写消息，直到流结束。这种模式适用于客户端和服务端需要实时交互数据的场景。

### 什么是最小API？

miniapi 是一种用于创建具有最小依赖项的 HTTP API 的方法，它不需要控制器、启动类或其他样板代码。miniapi 使用 WebApplication 类和 lambda 表达式来定义路由、请求和响应。miniapi 还支持 Swagger、依赖关系注入、配置、日志记录等 ASP.NET Core 的功能。miniapi 非常适合于需要在 ASP.NET Core 中仅包括最少文件、功能和依赖项的微服务和应用。

### ASP.NET Core 中会话是什么？ 

会话是一种在用户浏览Web应用时用来存储用户数据的方案。会话使用应用维护的存储来保存客户端所有请求的数据。会话数据由缓存提供支持，并被视为临时数据。会话状态通过向客户端提供包含会话ID的cookie来维护。

### ASP.NET Core 中缓存是什么？ 

缓存是一种在内存或其他存储介质中存储数据的方案，以提高应用程序的性能和响应速度。缓存可以减少对数据库或外部资源的访问次数，从而节省时间和资源。ASP.NET Core支持多种缓存类型，如内存中缓存、分布式缓存、响应缓存、输出缓存等。

### 跨域问题是什么？

跨域问题是指浏览器出于安全考虑，限制了不同源的文档或脚本之间的交互。也就是说，如果你的前端页面和后端接口不属于同一个域（域名或端口不同），那么你的页面就不能直接访问后端接口，否则会报错。

跨域问题的产生是由于浏览器的同源策略，这是一种重要的安全策略，它可以防止恶意文档或脚本攻击你的网站或应用。同源策略要求两个请求必须满足以下三个条件才能被认为是同源：
 - 协议相同，例如 http 或 https
 - 域名相同，例如 www.example.com 或 www2.example.com
 - 端口相同，例如 80 或 8080

如果有任何一个条件不满足，那么就是跨域请求，浏览器会拦截这样的请求，除非后端接口允许跨域访问。

### ASP.NET Core 中如何解决跨域问题？

 - 使用 CORS 中间件，可以在 Startup.cs 中配置 CORS 策略，并在 UseCors 方法中指定策略名称。
 - 使用 JSONP 技术，可以在前端使用特殊的 HTML 标签来请求跨域资源，如 `<img src="xxx">` 或 `<script src="xxx">`。
 - 使用 IActionFilter 特性，可以在控制器或方法上标记允许跨域的属性，并在 `HttpContext.Response.Headers` 中添加 `Access-Control-Allow-Origin` 头。
 - 使用后台模拟 HTTP 请求，可以在服务端请求不同源的 API 接口，并返回结果。

### ASP.NET Core中如何读取静态文件？

使用静态文件中间件。需要在 `Startup.Configure` 方法中调用 `app.UseStaticFiles()`

静态文件中间件可以提供 Web 根目录（默认为 wwwroot 文件夹）中的文件，也可以自定义目录。

### ASP.NET Core项目如何设置IP地址和端口号？

常用的方法有：
1. 配置`appsettings.json`
    ```json
    {
    "Logging": {
        "LogLevel": {
        "Default": "Information",
        "Microsoft": "Warning",
        "Microsoft.Hosting.Lifetime": "Information"
        }
    },
    "AllowedHosts": "*",
    "urls": "https://*:4401;http://*:4400"
    }
    ```
2. 配置`Program.cs`
    ```c#
    public static IWebHost BuildWebHost(string[] args) =>
        WebHost.CreateDefaultBuilder(args)
            .UseUrls("http://*:4401", "http://*:4400")
            .UseStartup<Startup>()
            .Build();
    ```
3. 配置`launchSettings.json`,须修改Properties文件夹下的`launchSettings.json`
    ```json
    {
    "iisSettings": {
        ...
    },
    "profiles": {
        "IIS Express": {
        ...
        "applicationUrl": "http://localhost:12345",
        ...
        },
        "MyApp": {
        ...
        "applicationUrl": "http://localhost:54321",
        ...
        }
    }
    }
    ```
## 基础概念

### RBAC是什么

RBAC是基于角色的访问控制（Role-Based Access Control）的缩写。

它是一种权限管理模型，通过将用户、角色和权限关联起来，实现对系统资源的有效控制。

RBAC模型有四种类型：RBAC0、RBAC1、RBAC2和RBAC3，分别增加了不同的功能和限制。

RBAC模型的优点是可以简化权限管理，提高安全性和遵从性，降低成本和风险。

RBAC模型的缺点是需要了解组织结构知识，需要深思熟虑的实施，缺乏灵活性，可能导致角色爆炸。

### 云原生的理解？

云原生是一种软件开发的方法，它利用了云计算环境的弹性和分布式特性，来构建、部署和管理现代应用程序。云原生应用程序通常由多个小的、相互依赖的服务组成，称为微服务。这些微服务可以独立运行和扩展，提供了高可用性和敏捷性。云原生应用程序还使用了现代的工具和技术，比如容器，服务网格，持续交付，DevOps等，来支持快速和频繁的变更和更新。

云原生有以下支柱才能称为云原生：
 - 云计算环境：云原生应用程序需要运行在云计算环境中，无论是公有云，私有云，还是混合云。云计算环境提供了弹性，可扩展，可靠，安全，按需付费等特性。
 - 现代设计：云原生应用程序需要采用现代的设计原则和模式，比如领域驱动设计，微服务架构，十二要素应用等。现代设计可以提高应用程序的可维护性，可测试性，可观察性，可演化性等。
 - 容器：云原生应用程序需要使用容器技术来打包和部署微服务。容器技术可以提高应用程序的可移植性，隔离性，资源利用率等。
 - 服务网格：云原生应用程序需要使用服务网格技术来管理和协调微服务之间的通信。服务网格技术可以提供负载均衡，服务发现，路由规则，故障注入，安全认证等功能。
 - 支持服务：云原生应用程序需要使用支持服务来实现一些通用的功能，比如数据库，缓存，消息队列，日志，监控等。支持服务可以是自建的或者是第三方提供的。
 - 自动化：云原生应用程序需要使用自动化技术来实现快速和频繁的变更和更新。自动化技术包括持续集成，持续交付，DevOps文化等。