using AutoMapper;
using NotesApp.API.Models;

namespace NotesApp.API.Extetions
{
    public static class MapperConfig
    {
        public static void AddAutoMapper(this IServiceCollection services)
        {
            var mapperConfig = new MapperConfiguration(mc =>
            {
                mc.AddProfile(new AppMappingProfile());
            });
            IMapper mapper = mapperConfig.CreateMapper();
            services.AddSingleton(mapper);
        }
    }
}
