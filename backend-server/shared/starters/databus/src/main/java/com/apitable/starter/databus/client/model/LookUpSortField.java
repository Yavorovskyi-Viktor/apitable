/*
 * databus-server
 * databus-server APIs
 *
 * The version of the OpenAPI document: 1.6.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.apitable.starter.databus.client.model;

import java.util.Objects;
import java.util.Arrays;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonTypeName;
import com.fasterxml.jackson.annotation.JsonValue;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.fasterxml.jackson.annotation.JsonTypeName;

/**
 * LookUpSortField
 */
@JsonPropertyOrder({
  LookUpSortField.JSON_PROPERTY_DESC,
  LookUpSortField.JSON_PROPERTY_FIELD_ID
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class LookUpSortField {
  public static final String JSON_PROPERTY_DESC = "desc";
  private Boolean desc;

  public static final String JSON_PROPERTY_FIELD_ID = "fieldId";
  private String fieldId;

  public LookUpSortField() {
  }

  public LookUpSortField desc(Boolean desc) {
    
    this.desc = desc;
    return this;
  }

   /**
   * Get desc
   * @return desc
  **/
  @javax.annotation.Nonnull
  @JsonProperty(JSON_PROPERTY_DESC)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public Boolean getDesc() {
    return desc;
  }


  @JsonProperty(JSON_PROPERTY_DESC)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setDesc(Boolean desc) {
    this.desc = desc;
  }


  public LookUpSortField fieldId(String fieldId) {
    
    this.fieldId = fieldId;
    return this;
  }

   /**
   * Get fieldId
   * @return fieldId
  **/
  @javax.annotation.Nonnull
  @JsonProperty(JSON_PROPERTY_FIELD_ID)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public String getFieldId() {
    return fieldId;
  }


  @JsonProperty(JSON_PROPERTY_FIELD_ID)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setFieldId(String fieldId) {
    this.fieldId = fieldId;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    LookUpSortField lookUpSortField = (LookUpSortField) o;
    return Objects.equals(this.desc, lookUpSortField.desc) &&
        Objects.equals(this.fieldId, lookUpSortField.fieldId);
  }

  @Override
  public int hashCode() {
    return Objects.hash(desc, fieldId);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class LookUpSortField {\n");
    sb.append("    desc: ").append(toIndentedString(desc)).append("\n");
    sb.append("    fieldId: ").append(toIndentedString(fieldId)).append("\n");
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

}

