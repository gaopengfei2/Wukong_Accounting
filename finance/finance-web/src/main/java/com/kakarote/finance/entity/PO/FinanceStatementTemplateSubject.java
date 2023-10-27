package com.kakarote.finance.entity.PO;

import com.baomidou.mybatisplus.annotation.*;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.*;
import lombok.experimental.Accessors;

import java.io.Serializable;
import java.time.LocalDateTime;

/**
 * <p>
 * 结账模板关联科目表
 * </p>
 *
 * @author dsc
 * @since 2021-12-22
 */
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Accessors(chain = true)
@TableName("wk_finance_statement_template_subject")
@ApiModel(value = "FinanceStatementTemplateSubject对象", description = "结账模板关联科目表")
public class FinanceStatementTemplateSubject implements Serializable {

    private static final long serialVersionUID = 1L;

    @JsonSerialize(using = ToStringSerializer.class)
    @TableId(value = "template_subject_id", type = IdType.ASSIGN_ID)
    private Long templateSubjectId;

    @JsonSerialize(using = ToStringSerializer.class)
    private Long subjectId;

    @JsonSerialize(using = ToStringSerializer.class)
    private Long templateId;

    @ApiModelProperty("科目编号")
    private String number;

    @ApiModelProperty("借/贷 1.借 2.贷")
    private Integer isLend;

    @ApiModelProperty("金额比例 %(最大不超过100）")
    private Integer moneyRatio;

    private String digestContent;

    @JsonSerialize(using = ToStringSerializer.class)
    private Long accountId;

    @ApiModelProperty("创建人")
    @TableField(fill = FieldFill.INSERT)
    @JsonSerialize(using = ToStringSerializer.class)
    private Long createUserId;

    @ApiModelProperty("创建时间")
    @TableField(fill = FieldFill.INSERT)
    private LocalDateTime createTime;

    @ApiModelProperty("修改人")
    @TableField(fill = FieldFill.UPDATE)
    @JsonSerialize(using = ToStringSerializer.class)
    private Long updateUserId;

    @ApiModelProperty("修改时间")
    @TableField(fill = FieldFill.UPDATE)
    private LocalDateTime updateTime;


}
