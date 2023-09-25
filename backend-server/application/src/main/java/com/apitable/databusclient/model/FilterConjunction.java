/*
 * databus-server
 * databus-server APIs
 *
 * The version of the OpenAPI document: 1.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.apitable.databusclient.model;

import java.util.Objects;
import com.google.gson.annotations.SerializedName;

import java.io.IOException;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;

/**
 * Gets or Sets FilterConjunction
 */
@JsonAdapter(FilterConjunction.Adapter.class)
public enum FilterConjunction {
  
  AND("and"),
  
  OR("or");

  private String value;

  FilterConjunction(String value) {
    this.value = value;
  }

  public String getValue() {
    return value;
  }

  @Override
  public String toString() {
    return String.valueOf(value);
  }

  public static FilterConjunction fromValue(String value) {
    for (FilterConjunction b : FilterConjunction.values()) {
      if (b.value.equals(value)) {
        return b;
      }
    }
    throw new IllegalArgumentException("Unexpected value '" + value + "'");
  }

  public static class Adapter extends TypeAdapter<FilterConjunction> {
    @Override
    public void write(final JsonWriter jsonWriter, final FilterConjunction enumeration) throws IOException {
      jsonWriter.value(enumeration.getValue());
    }

    @Override
    public FilterConjunction read(final JsonReader jsonReader) throws IOException {
      String value = jsonReader.nextString();
      return FilterConjunction.fromValue(value);
    }
  }
}

