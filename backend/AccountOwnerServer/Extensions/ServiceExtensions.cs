
namespace AccountOwnerServer.Extensions
{
    public static class ServiceExtensions
    {
        public static void ConfigureCors(this IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy",
                    builder => builder
                    .AllowAnyOrigin()  // WithOrigins("dominio")
                    .AllowAnyMethod()  //WithMethods("GET", "SET")
                    .AllowAnyHeader()  //WithHeaders("accept", "content-type")
                );
            });
        }

        public static void ConfigureIISIntegration(this IServiceCollection services)
        {
            services.Configure<IISOptions>(options => {
                
            });
        }
    }
}