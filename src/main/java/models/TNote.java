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

    public TNote(@JsonProperty("id") int id, @JsonProperty("noteName") String name,
                 @JsonProperty("notebook") int notebookId, @JsonProperty("noteText") String text) {
        this.name = name;
        this.notebookId = notebookId;
        this.text = text;
        this.id = id;
    }

    public TNote(@JsonProperty("noteName") String name,
                 @JsonProperty("notebook") int notebookId, @JsonProperty("noteText") String text) {
        this.name = name;
        this.notebookId = notebookId;
        this.text = text;
    }




    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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
