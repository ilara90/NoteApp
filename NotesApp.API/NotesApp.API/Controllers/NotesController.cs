using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NotesApp.API.Data;
using NotesApp.API.Models.DTO;

namespace NotesApp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NotesController : ControllerBase
    {
        private readonly NotesDbContext _notesDbContext;
        private IMapper _mapper;

        public NotesController(NotesDbContext notesDbContext, IMapper mapper)
        {
            _notesDbContext = notesDbContext;
            _mapper = mapper;
        }

        [HttpPost]
        public async Task<IActionResult> AddNote(AddNoteRequest addNoteRequest)
        {
            var note = _mapper.Map<Models.DomainModels.Note>(addNoteRequest);
            note.DateCreated = DateTime.Now;

            await _notesDbContext.Notes.AddAsync(note);
            await _notesDbContext.SaveChangesAsync();

            return Ok(note);
        }

        [HttpGet]
        public async Task<IActionResult> GetAllNotes()
        {
            var notes = await _notesDbContext.Notes.ToListAsync();

            var notesDTO = new List<Models.DTO.Note>();

            foreach (var note in notes)
            {
                notesDTO.Add(_mapper.Map<Models.DTO.Note>(note));
            }

            return Ok(notesDTO);
        }

        [HttpGet]
        [Route("{id:Guid}")]
        public async Task<IActionResult> GetNoteById([FromRoute] Guid id)
        {
            var note = await _notesDbContext.Notes.FirstOrDefaultAsync(x => x.Id == id);

            if (note != null)
            {
                var notesDTO = _mapper.Map<Models.DomainModels.Note>(note);

                return Ok(note);
            }

           return BadRequest();
        }

        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> UpdateNote([FromRoute] Guid id, AddNoteRequest updateNoteRequest)
        {
            var note = await _notesDbContext.Notes.FindAsync(id);

            if (note == null)
            {
                return BadRequest();
            }

            note.Title = updateNoteRequest.Title;
            note.Description = updateNoteRequest.Description;
            note.ColorHex = updateNoteRequest.ColorHex;

            await _notesDbContext.SaveChangesAsync();

            return Ok(note);
        }

        [HttpDelete]
        [Route("{id:Guid}")]
        public async Task<IActionResult> DeleteNote([FromRoute] Guid id)
        {
            var note = await _notesDbContext.Notes.FindAsync(id);

            if (note == null)
            {
                return BadRequest();
            }

            _notesDbContext.Notes.Remove(note);
            await _notesDbContext.SaveChangesAsync();

            return Ok();
        }
    }
}
