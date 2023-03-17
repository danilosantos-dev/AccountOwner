using Contracts;
using LoggerService;
using Entities;
using Repository;
using Microsoft.EntityFrameworkCore;

namespace AccountOwnerServer.Extensions;

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
        public static void ConfigureLoggerService(this IServiceCollection services)
        {
            services.AddSingleton<ILoggerManager , LoggerManager>();

        }

        public static void ConfigureMySqlContext(this IServiceCollection services, IConfiguration config)
        {
            var conn = config["mysqlconnection:connectionString"];
            var serverVersion = ServerVersion.AutoDetect(conn);
            services.AddDbContext<RepositoryContext>(
                o => o.UseMySql(conn, serverVersion)
            );
        }

        public static void ConfigureRepositoryWrapper(this IServiceCollection services)
        {
            services.AddScoped<IRepositoryWrapper, RepositoryWrapper>();
        }

    }
