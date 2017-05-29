package models;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Created by denis on 27.05.17.
 */
public class TNote {
    @JsonProperty("noteName")
    private String name;
    @JsonProperty("id")
    private int id;
    @JsonProperty("notebook")
    private int notebookId;
    @JsonProperty("noteText")
    private String text;

    public TNote() {

    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getNotebookId() {
        return notebookId;
    }

    public void setNotebookId(int notebookId) {
        this.notebookId = notebookId;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }
}
