# ASP.NET Core 3.1 新特性
 - **Razor 组件的分部类支持**：支持使用分部类来编写 Razor 组件的代码，而不是在单个文件中定义该组件的所有代码。
 - **组件标记帮助程序和将参数传递到顶级组件**：支持使用新的组件标记帮助程序从页面或视图呈现组件，支持在初始呈现期间将参数传递给顶级组件。
 - **HTTP.sys 中对共享队列的支持**：支持创建匿名请求队列或附加到现有 HTTP.sys 请求队列，可实现在侦听器进程重启期间保留现有的连接和排队的请求。
 - **SameSite cookie 的中断性变更**：反映了即将发生的浏览器更改，可能会影响身份验证场景。
 - **在 Blazor 应用中阻止事件的默认操作和停止事件传播**：支持使用指令属性来阻止事件的默认操作和停止事件传播。
 - **Blazor 应用开发过程中的错误详细信息**：当 Blazor 应用在开发过程中运行不正常时，提供详细的错误信息。