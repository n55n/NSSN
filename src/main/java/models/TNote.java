package models;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Created by denis on 27.05.17.
 */
public class TNote {
    private String name;
    private int id;
    private int notebookId;
    private String text;

    public TNote(String name, int id, int notebookId, String text) {
        this.name = name;
        this.id = id;
        this.notebookId = notebookId;
        this.text = text;
    }

    public String getName() {
        return name;
    }
    @JsonProperty("noteName")
    public void setName(String name) {
        this.name = name;
    }

    public int getId() {
        return id;
    }
    @JsonProperty("noteId")
    public void setId(int id) {
        this.id = id;
    }

    public int getNotebookId() {
        return notebookId;
    }
    @JsonProperty("notebook")
    public void setNotebookId(int notebookId) {
        this.notebookId = notebookId;
    }

    public String getText() {
        return text;
    }
    @JsonProperty("noteText")
    public void setText(String text) {
        this.text = text;
    }
}
