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
import com.apitable.databusclient.model.DatasheetMetaSO;
import com.apitable.databusclient.model.RecordSO;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import java.io.IOException;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonArray;
import com.google.gson.JsonDeserializationContext;
import com.google.gson.JsonDeserializer;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParseException;
import com.google.gson.TypeAdapterFactory;
import com.google.gson.reflect.TypeToken;
import com.google.gson.TypeAdapter;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import java.io.IOException;

import java.lang.reflect.Type;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;

import com.apitable.databusclient.JSON;

/**
 * DatasheetSnapshotSO
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class DatasheetSnapshotSO {
  public static final String SERIALIZED_NAME_DATASHEET_ID = "datasheetId";
  @SerializedName(SERIALIZED_NAME_DATASHEET_ID)
  private String datasheetId;

  public static final String SERIALIZED_NAME_META = "meta";
  @SerializedName(SERIALIZED_NAME_META)
  private DatasheetMetaSO meta;

  public static final String SERIALIZED_NAME_RECORD_MAP = "recordMap";
  @SerializedName(SERIALIZED_NAME_RECORD_MAP)
  private Map<String, RecordSO> recordMap = new HashMap<>();

  public DatasheetSnapshotSO() {
  }

  public DatasheetSnapshotSO datasheetId(String datasheetId) {
    
    this.datasheetId = datasheetId;
    return this;
  }

   /**
   * Get datasheetId
   * @return datasheetId
  **/
  @javax.annotation.Nonnull
  public String getDatasheetId() {
    return datasheetId;
  }


  public void setDatasheetId(String datasheetId) {
    this.datasheetId = datasheetId;
  }


  public DatasheetSnapshotSO meta(DatasheetMetaSO meta) {
    
    this.meta = meta;
    return this;
  }

   /**
   * Get meta
   * @return meta
  **/
  @javax.annotation.Nonnull
  public DatasheetMetaSO getMeta() {
    return meta;
  }


  public void setMeta(DatasheetMetaSO meta) {
    this.meta = meta;
  }


  public DatasheetSnapshotSO recordMap(Map<String, RecordSO> recordMap) {
    
    this.recordMap = recordMap;
    return this;
  }

  public DatasheetSnapshotSO putRecordMapItem(String key, RecordSO recordMapItem) {
    if (this.recordMap == null) {
      this.recordMap = new HashMap<>();
    }
    this.recordMap.put(key, recordMapItem);
    return this;
  }

   /**
   * Get recordMap
   * @return recordMap
  **/
  @javax.annotation.Nonnull
  public Map<String, RecordSO> getRecordMap() {
    return recordMap;
  }


  public void setRecordMap(Map<String, RecordSO> recordMap) {
    this.recordMap = recordMap;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    DatasheetSnapshotSO datasheetSnapshotSO = (DatasheetSnapshotSO) o;
    return Objects.equals(this.datasheetId, datasheetSnapshotSO.datasheetId) &&
        Objects.equals(this.meta, datasheetSnapshotSO.meta) &&
        Objects.equals(this.recordMap, datasheetSnapshotSO.recordMap);
  }

  @Override
  public int hashCode() {
    return Objects.hash(datasheetId, meta, recordMap);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class DatasheetSnapshotSO {\n");
    sb.append("    datasheetId: ").append(toIndentedString(datasheetId)).append("\n");
    sb.append("    meta: ").append(toIndentedString(meta)).append("\n");
    sb.append("    recordMap: ").append(toIndentedString(recordMap)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }


  public static HashSet<String> openapiFields;
  public static HashSet<String> openapiRequiredFields;

  static {
    // a set of all properties/fields (JSON key names)
    openapiFields = new HashSet<String>();
    openapiFields.add("datasheetId");
    openapiFields.add("meta");
    openapiFields.add("recordMap");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
    openapiRequiredFields.add("datasheetId");
    openapiRequiredFields.add("meta");
    openapiRequiredFields.add("recordMap");
  }

 /**
  * Validates the JSON Element and throws an exception if issues found
  *
  * @param jsonElement JSON Element
  * @throws IOException if the JSON Element is invalid with respect to DatasheetSnapshotSO
  */
  public static void validateJsonElement(JsonElement jsonElement) throws IOException {
      if (jsonElement == null) {
        if (!DatasheetSnapshotSO.openapiRequiredFields.isEmpty()) { // has required fields but JSON element is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in DatasheetSnapshotSO is not found in the empty JSON string", DatasheetSnapshotSO.openapiRequiredFields.toString()));
        }
      }

      Set<Entry<String, JsonElement>> entries = jsonElement.getAsJsonObject().entrySet();
      // check to see if the JSON string contains additional fields
      for (Entry<String, JsonElement> entry : entries) {
        if (!DatasheetSnapshotSO.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `DatasheetSnapshotSO` properties. JSON: %s", entry.getKey(), jsonElement.toString()));
        }
      }

      // check to make sure all required properties/fields are present in the JSON string
      for (String requiredField : DatasheetSnapshotSO.openapiRequiredFields) {
        if (jsonElement.getAsJsonObject().get(requiredField) == null) {
          throw new IllegalArgumentException(String.format("The required field `%s` is not found in the JSON string: %s", requiredField, jsonElement.toString()));
        }
      }
        JsonObject jsonObj = jsonElement.getAsJsonObject();
      if (!jsonObj.get("datasheetId").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `datasheetId` to be a primitive type in the JSON string but got `%s`", jsonObj.get("datasheetId").toString()));
      }
      // validate the required field `meta`
      DatasheetMetaSO.validateJsonElement(jsonObj.get("meta"));
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!DatasheetSnapshotSO.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'DatasheetSnapshotSO' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<DatasheetSnapshotSO> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(DatasheetSnapshotSO.class));

       return (TypeAdapter<T>) new TypeAdapter<DatasheetSnapshotSO>() {
           @Override
           public void write(JsonWriter out, DatasheetSnapshotSO value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public DatasheetSnapshotSO read(JsonReader in) throws IOException {
             JsonElement jsonElement = elementAdapter.read(in);
             validateJsonElement(jsonElement);
             return thisAdapter.fromJsonTree(jsonElement);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of DatasheetSnapshotSO given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of DatasheetSnapshotSO
  * @throws IOException if the JSON string is invalid with respect to DatasheetSnapshotSO
  */
  public static DatasheetSnapshotSO fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, DatasheetSnapshotSO.class);
  }

 /**
  * Convert an instance of DatasheetSnapshotSO to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

