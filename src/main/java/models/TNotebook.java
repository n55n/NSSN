package models;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Created by denis on 27.05.17.
 */
public class TNotebook {
    private String name;
    private int id;

    public TNotebook(@JsonProperty("notebookId") int id, @JsonProperty("notebookName") String name) {
        this.name = name;
        this.id = id;
    }

    public TNotebook(@JsonProperty("notebookName") String name) {
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

}
