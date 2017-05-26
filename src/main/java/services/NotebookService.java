package services;

import models.Note;
import models.Notebook;
import util.DBHelper;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.ws.rs.*;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.Cookie;
import javax.ws.rs.core.Response;
import java.io.IOException;
import java.math.BigInteger;
import java.net.URI;
import java.util.Collections;
import java.util.Set;

import static util.ServiceUtil.*;

/**
 * Created by denis on 16.02.17.
 */
@Path("/resources/notebook")
public class NotebookService {

    private DBHelper<Notebook> dbHelper = new DBHelper<>(Notebook.class);

    /*
    * создание блокнота*/
    @POST
    @Consumes("application/json")
    public Response createNotebook(Notebook notebook) throws IOException {
        dbHelper.write(notebook);
        return Response.status(Response.Status.CREATED).build();
    }

    /*
    * получение по id
    * id берется из пути
    * например /rest/resources/notebook/3/
    * id = 3*/
    @GET
    @Produces("application/json")
    @Path("{id}")
    public Notebook getNotebook(@Context HttpServletRequest request, @PathParam("id") int id) throws IOException {
        Notebook notebook = dbHelper.read(id);
        if (isAccessible(request, notebook.getUser().getId()))
            return notebook;
        else return new Notebook();
    }

    /*обновление по id*/
    @PUT
    @Consumes("application/json")
    @Path("{id}")
    public void updateNotebook(@Context HttpServletRequest request, @PathParam("id") int id, Notebook update) throws IOException {
        Notebook notebook = dbHelper.read(id);
        if (isAccessible(request, notebook.getUser().getId())) {
            notebook.setNotebookName(update.getNotebookName());
            dbHelper.write(notebook);
        }
    }

    /*удаление по id*/
    @DELETE
    @Produces("application/json")
    @Path("{id}")
    public void deleteNotebook(@Context HttpServletRequest request, @PathParam("id") int id) throws IOException {
        Notebook notebook = dbHelper.read(id);
        if (isAccessible(request, notebook.getUser().getId()))
            dbHelper.delete(id);
    }

    /*получение записей из блокнота, который вызван по id*/
    @GET
    @Produces("application/json")
    @Path("{id}/notes")
    public Set<Note> getNotes(@Context HttpServletRequest request, @PathParam("id") int id) throws IOException {
        Notebook notebook = dbHelper.read(id);
        if (isAccessible(request, notebook.getUser().getId()))
            return notebook.getSet();
        return Collections.emptySet();
    }

}
