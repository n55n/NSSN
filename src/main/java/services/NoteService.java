package services;

import models.Attachment;
import models.Note;
import models.Notebook;
import models.TNote;
import util.DBHelper;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.*;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.Response;
import java.io.IOException;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.Collections;
import java.util.Set;

import static util.ServiceUtil.isAccessible;

/**
 * Created by denis on 16.02.17.
 */
@Path("/resources/note")
public class NoteService {
    private DBHelper<Note> dbHelper = new DBHelper<>(Note.class);
    private DBHelper<Notebook> notebookDBHelper = new DBHelper<>(Notebook.class);

    /*аналогично NotebookService*/
    @POST
    @Consumes("application/json")
    public Response createNote(TNote tNote) throws IOException {
        Note note = new Note();
        note.setNoteName(tNote.getName());
        note.setNoteText(tNote.getText());
        note.setCreated(Timestamp.valueOf(LocalDateTime.now()));
        note.setLastEdited(Timestamp.valueOf(LocalDateTime.now()));
        note.setNotebook(notebookDBHelper.read(tNote.getNotebookId()));
        dbHelper.write(note);
        return Response.status(Response.Status.CREATED).build();
    }

    @GET
    @Produces("application/json")
    @Path("{id}")
    public Note getNote(@Context HttpServletRequest request, @PathParam("id") int id) throws IOException {
        Note note = dbHelper.read(id);
        if (isAccessible(request, note.getNotebook().getUser().getId()))
            return note;
        else return new Note();
    }

    @PUT
    @Consumes("application/json")
    @Path("{id}")
    public void updateNote(@Context HttpServletRequest request, @PathParam("id") int id, TNote update) throws IOException {
        Note note = dbHelper.read(id);
        if (isAccessible(request, note.getNotebook().getUser().getId())) {
            note.setNoteName(update.getName());
            note.setLastEdited(new Timestamp(System.nanoTime()));
            note.setNoteText(update.getText());
            dbHelper.write(note);
        }
    }

    @DELETE
    @Produces("application/json")
    @Path("{id}")
    public void deleteNote(@Context HttpServletRequest request, @PathParam("id") int id) throws IOException {
        Note note = dbHelper.read(id);
        if (isAccessible(request, note.getNotebook().getUser().getId()))
            dbHelper.delete(id);
    }

    @GET
    @Produces("application/json")
    @Path("{id}/attachments")
    public Set<Attachment> getAttachments(@Context HttpServletRequest request, @PathParam("id") int id) throws IOException {
        Note note = dbHelper.read(id);
        if (isAccessible(request, note.getNotebook().getUser().getId()))
            return note.getSet();
        else return Collections.emptySet();
    }

}
