package models;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Created by denis on 27.05.17.
 */
public class TNotebook {
    private String name;

    public TNotebook(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }
    @JsonProperty("notebookName")
    public void setName(String name) {
        this.name = name;
    }

}
