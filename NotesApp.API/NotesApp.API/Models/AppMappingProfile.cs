using AutoMapper;
using NotesApp.API.Models.DTO;

namespace NotesApp.API.Models
{
    public class AppMappingProfile : Profile
    {
        public AppMappingProfile()
        {
            CreateMap<AddNoteRequest, DomainModels.Note>().ForMember(x => x.Title, opt => opt.MapFrom(m => m.Title))
                .ForMember(x => x.Description, opt => opt.MapFrom(m => m.Description))
                .ForMember(x => x.ColorHex, opt => opt.MapFrom(m => m.ColorHex))
                .ForMember(x => x.Id, opt => opt.Ignore())
                .ForMember(x => x.DateCreated, opt => opt.Ignore());

            CreateMap<DomainModels.Note, DTO.Note>().ForMember(x => x.Title, opt => opt.MapFrom(m => m.Title))
                .ForMember(x => x.Description, opt => opt.MapFrom(m => m.Description))
                .ForMember(x => x.ColorHex, opt => opt.MapFrom(m => m.ColorHex))
                .ForMember(x => x.Id, opt => opt.MapFrom(m => m.Id))
                .ForMember(x => x.DateCreated, opt => opt.MapFrom(m => m.DateCreated));
        }
    }
}
