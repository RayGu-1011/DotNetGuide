# ASP.NET Core 7.0 新特性
 - ASP.NET Core 中的速率限制中间件，可以配置和附加到终结点的速率限制策略1。
 - 身份验证使用单个方案作为 DefaultScheme，如果只注册了一个身份验证方案，就不需要指定默认方案1。
 - MVC 和 Razor 页面支持可为空的模型，可以使用 C# 9 的可为空引用类型来改善 null 状态检查的体验1。
 - 在 API 控制器中使用 DI 进行参数绑定，可以省略 [FromServices] 属性来自动绑定服务类型的参数1。
 - 验证错误中的 JSON 属性名，可以使用 SystemTextJsonValidationMetadataProvider 或 NewtonsoftJsonValidationMetadataProvider 来生成与 JSON 序列化设置一致的属性名1。
