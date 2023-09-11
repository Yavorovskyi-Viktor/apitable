/*
 * databus-server
 * databus-server APIs
 *
 * The version of the OpenAPI document: 1.0.0
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
 * Gets or Sets SymbolAlign
 */
@JsonAdapter(SymbolAlign.Adapter.class)
public enum SymbolAlign {
  
  DEFAULT("Default"),
  
  LEFT("Left"),
  
  RIGHT("Right");

  private String value;

  SymbolAlign(String value) {
    this.value = value;
  }

  public String getValue() {
    return value;
  }

  @Override
  public String toString() {
    return String.valueOf(value);
  }

  public static SymbolAlign fromValue(String value) {
    for (SymbolAlign b : SymbolAlign.values()) {
      if (b.value.equals(value)) {
        return b;
      }
    }
    throw new IllegalArgumentException("Unexpected value '" + value + "'");
  }

  public static class Adapter extends TypeAdapter<SymbolAlign> {
    @Override
    public void write(final JsonWriter jsonWriter, final SymbolAlign enumeration) throws IOException {
      jsonWriter.value(enumeration.getValue());
    }

    @Override
    public SymbolAlign read(final JsonReader jsonReader) throws IOException {
      String value = jsonReader.nextString();
      return SymbolAlign.fromValue(value);
    }
  }
}

