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
 * Gets or Sets FOperator
 */
@JsonAdapter(FOperator.Adapter.class)
public enum FOperator {
  
  IS("is"),
  
  ISNOT("isNot"),
  
  CONTAINS("contains"),
  
  DOESNOTCONTAIN("doesNotContain"),
  
  ISEMPTY("isEmpty"),
  
  ISNOTEMPTY("isNotEmpty"),
  
  ISGREATER("isGreater"),
  
  ISGREATEREQUAL("isGreaterEqual"),
  
  ISLESS("isLess"),
  
  ISLESSEQUAL("isLessEqual"),
  
  ISREPEAT("isRepeat");

  private String value;

  FOperator(String value) {
    this.value = value;
  }

  public String getValue() {
    return value;
  }

  @Override
  public String toString() {
    return String.valueOf(value);
  }

  public static FOperator fromValue(String value) {
    for (FOperator b : FOperator.values()) {
      if (b.value.equals(value)) {
        return b;
      }
    }
    throw new IllegalArgumentException("Unexpected value '" + value + "'");
  }

  public static class Adapter extends TypeAdapter<FOperator> {
    @Override
    public void write(final JsonWriter jsonWriter, final FOperator enumeration) throws IOException {
      jsonWriter.value(enumeration.getValue());
    }

    @Override
    public FOperator read(final JsonReader jsonReader) throws IOException {
      String value = jsonReader.nextString();
      return FOperator.fromValue(value);
    }
  }
}

