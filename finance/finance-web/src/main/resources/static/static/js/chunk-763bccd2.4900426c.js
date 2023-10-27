(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-763bccd2"],{"00ba":function(t,e,n){},"38cf":function(t,e,n){var i=n("23e7"),a=n("1148");i({target:"String",proto:!0},{repeat:a})},7821:function(t,e,n){"use strict";n("00ba")},c7d5:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"app-container"},[n("div",{staticClass:"content-header"},[n("span",[t._v("\n      科目设置\n    ")]),t._v(" "),n("div",{staticClass:"buttons"},[t.$auth("finance.subject.save")?n("el-button",{attrs:{type:"primary"},on:{click:t.addSubject}},[t._v("新建科目")]):t._e(),t._v(" "),n("el-dropdown",{staticClass:"receive-drop",attrs:{trigger:"click"},on:{command:t.handleCommand}},[n("el-button",{staticClass:"dropdown-btn",attrs:{icon:"el-icon-more"}}),t._v(" "),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},t._l(t.moreBtn,(function(e,i){return n("el-dropdown-item",{key:i,attrs:{command:e.type}},[t._v(t._s(e.label))])})))],1)],1)]),t._v(" "),n("flexbox",{staticClass:"content-flex",attrs:{justify:"space-between"}},[t.multipleSelection.length>0&&t.batchBtn.length>0?[n("div",{staticClass:"selected—title"},[t._v("\n        已选中\n        "),n("span",{staticClass:"selected—count"},[t._v(t._s(t.multipleSelection.length))]),t._v(" 项\n      ")]),t._v(" "),n("flexbox",{staticClass:"selection-items-box"},t._l(t.batchBtn,(function(e,i){return n("el-button",{key:i,attrs:{icon:e.icon,size:"medium"},on:{click:function(n){t.handleCommand(e.type)}}},[t._v(t._s(e.label))])})))]:n("flexbox-item",t._l(t.subjectTypeOption,(function(e,i){return n("el-button",{key:i,attrs:{type:t.subjectType==e.value?"selected":""},on:{click:function(n){t.subjectType=e.value}}},[t._v("\n        "+t._s(e.name)+"\n      ")])})))],2),t._v(" "),n("div",{staticClass:"subject-table"},[n("el-table",{ref:"table",attrs:{id:"table",data:t.subjectData,height:t.tableHeight,"row-key":"subjectId",stripe:"","default-expand-all":"",border:""},on:{"selection-change":t.handleSelectionChange}},[n("el-table-column",{attrs:{type:"selection",width:"55"}}),t._v(" "),t._l(t.subjectList,(function(e,i){return n("el-table-column",{key:i,attrs:{prop:e.field,label:e.label,width:e.width,formatter:t.fieldFormatter,"show-overflow-tooltip":""}})})),t._v(" "),n("el-table-column",{attrs:{label:"状态",width:"100px"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"text"},on:{click:function(n){t.subjectStatus(e)}}},[t._v("\n            "+t._s(1==e.row.status?"已启用":"已禁用")+"\n          ")])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"操作",width:"160"},scopedSlots:t._u([{key:"default",fn:function(e){return n("flexbox",{},[t.$auth("finance.subject.update")?n("el-button",{attrs:{type:"primary-text"},on:{click:function(n){t.subjectEdit(e.row,n)}}},[t._v("编辑")]):t._e(),t._v(" "),t.$auth("finance.subject.save")?n("el-button",{attrs:{type:"primary-text"},on:{click:function(n){t.addSubjectChildren(e.row)}}},[t._v("新建下级")]):t._e(),t._v(" "),t.$auth("finance.subject.delete")?n("el-button",{attrs:{type:"primary-text"},on:{click:function(n){t.subjectDelete(e.row)}}},[t._v("删除")]):t._e()],1)}}])})],2)],1),t._v(" "),n("subject-update-dialog",{attrs:{visible:t.subjectDialogVisible,"node-data":t.selectedNode,"subject-type":t.subjectType,"subject-list":t.subjectData,"parent-node":t.parentNode,"help-obj":t.helpObj.setting},on:{"update:visible":function(e){t.subjectDialogVisible=e},confirm:t.getSubjectGroupList}})],1)},a=[],c=n("53ca"),s=(n("4de4"),n("d3b7"),n("d81d"),n("7db0"),n("b0c0"),n("224e")),o=n("8be7"),l=n("ed08"),u={name:"SubjectSet",components:{SubjectUpdateDialog:o["a"]},data:function(){return{loading:!1,tableHeight:document.documentElement.clientHeight-290,subjectType:1,action:{type:"add"},helpObj:{setting:{dataType:42,dataId:331}},parentNode:null,selectedNode:null,isAllSelect:!1,subjectObj:{name:"",subjectDep:[],settingList:""},subjectData:[],multipleSelection:[],allIds:[],subjectTypeOption:[{name:"资产",value:1},{name:"负债",value:2},{name:"权益",value:3},{name:"成本",value:4},{name:"损益",value:5}],subjectList:[{label:"编码",field:"number",width:"150px"},{label:"名称",field:"subjectName"},{label:"类别",field:"category",width:"100px"},{label:"余额方向",field:"balanceDirection",width:"80px"},{label:"辅助核算",field:"labelName"},{label:"数量",field:"isAmount",width:"80px"},{label:"是否现金项",field:"isCash",width:"100px"}],subjectDialogVisible:!1}},computed:{moreBtn:function(){var t=[{label:"导入",show:this.$auth("finance.subject.import"),type:"import"},{label:"导出",show:this.$auth("finance.subject.export"),type:"export"}];return t.filter((function(t){return t.show}))},batchBtn:function(){var t=[{label:"删除",show:this.$auth("finance.subject.delete")&&this.multipleSelection.length,type:"delete"},{label:"批量启用",show:this.$auth("finance.subject.update")&&this.multipleSelection.length,type:"batch-use"},{label:"批量禁用",show:this.$auth("finance.subject.update")&&this.multipleSelection.length,type:"batch-disabled"}];return t.filter((function(t){return t.show}))}},watch:{subjectType:function(){this.getSubjectGroupList()}},created:function(){var t=this;window.onresize=function(){t.tableHeight=document.documentElement.clientHeight-290},this.getSubjectGroupList()},methods:{getSubjectGroupList:function(){var t=this;this.loading=!0,Object(s["H"])({type:this.subjectType,isTree:1}).then((function(e){t.loading=!1,t.subjectData=e.data})).catch((function(){t.loading=!1}))},handleCommand:function(t){switch(t){case"import":return void this.importSubject();case"export":return void this.exportSubject();case"delete":return void this.batchDelete();case"batch-use":return void this.batchUpdateStatus(1);case"batch-disabled":return void this.batchUpdateStatus(2)}},importSubject:function(){this.$wkImport.import("fmSubject",{typeName:"科目",historyShow:!1,noImportProcess:!0,ownerSelectShow:!1,repeatHandleShow:!1,importRequest:s["G"],templateRequest:s["F"]})},batchDelete:function(){var t=this;if(this.multipleSelection.length){for(var e=function(){var e=t.multipleSelection[n];return e.isRelevance?(t.$message.error("[".concat(e.number,"]科目已被凭证使用，不能删'")),{v:void 0}):t.subjectData.find((function(t){return t.parentId===e.subjectId}))?(t.$message.error("[".concat(e.number,"]科目下有子级科目，不可删除，不能删'")),{v:void 0}):void 0},n=0;n<this.multipleSelection.length;n++){var i=e();if("object"===Object(c["a"])(i))return i.v}this.$confirm("确定删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.loading=!0;var e=t.multipleSelection.map((function(t){return t.subjectId}));Object(s["E"])({ids:e}).then((function(e){t.$message.success("操作成功"),t.getSubjectGroupList(),t.loading=!1})).catch((function(){t.loading=!1})).catch((function(){}))}))}else this.$message.error("请先选择要删除的科目")},exportSubject:function(){var t,e={type:this.subjectType,isTree:0,dataList:this.subjectData};null!==(t=this.multipleSelection)&&void 0!==t&&t.length&&(e.dataList=this.multipleSelection),Object(s["a"])(e).then((function(t){Object(l["b"])(t)}))},batchUpdateStatus:function(t){var e=this;if(this.multipleSelection.length){this.loading=!0;var n=this.multipleSelection.map((function(t){return t.subjectId}));Object(s["I"])({ids:n,status:t}).then((function(t){e.$message.success("操作成功"),e.getSubjectGroupList(),e.loading=!1})).catch((function(){e.loading=!1}))}else this.$message.error("请先勾选科目！")},handleSelectionChange:function(t){this.multipleSelection=t},fieldFormatter:function(t,e){if("category"==e.property){if(!t[e.property])return"";var n={1:[{name:"流动资产",value:1},{name:"非流动资产",value:2}],2:[{name:"流动负债",value:1},{name:"非流动负债",value:2}],3:[{name:"所有者权益",value:1}],4:[{name:"成本",value:1}],5:[{name:"营业收入",value:1},{name:"其他收益",value:2},{name:"期间费用",value:3},{name:"其他损失",value:4},{name:"营业成本及税金",value:5},{name:"以前年度损益调整",value:6},{name:"所得税",value:7}],6:[{name:"共同",value:1}]},i=n[t.type],a=i.find((function(n){return n.value==t[e.property]}));return a?a.name:""}if("balanceDirection"==e.property)return 1==t[e.property]?"借":"贷";if("isCash"==e.property)return 1==t[e.property]?"是":"";if("isAmount"==e.property)return 1==t[e.property]?t.amountUnit||"是":"";if("subjectName"==e.property){for(var c=t[e.property],s=1;s<t.grade;s++)c="　　"+c;return c}return t[e.property]},subjectEdit:function(t){1==t.grade?this.parentNode=null:this.parentNode=this.getParentNode(t,this.subjectData),this.selectedNode=t,this.subjectDialogVisible=!0},getParentNode:function(t,e){for(var n=null,i=0;i<e.length;i++){var a=e[i];if(a.subjectId==t.parentId?n=a:a.children&&a.children.length&&(n=this.getParentNode(t,a.children)),n)return n}},subjectDelete:function(t){var e=this;t.isRelevance?this.$message.error("该科目已被凭证使用，不能删除"):this.subjectData.find((function(e){return e.parentId==t.subjectId}))?this.$message.error("该科目下有子级科目，不可删除"):this.$confirm("确定删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(s["E"])({ids:[t.subjectId]}).then((function(t){e.getSubjectGroupList(),e.$message.success("删除成功")})).catch((function(){}))})).catch((function(){}))},subjectStatus:function(t){var e=this;this.$confirm("您确定要"+(2===t.row.status?"启用":"停用")+"该科目?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(s["I"])({ids:[t.row.subjectId],status:2===t.row.status?1:2}).then((function(t){e.getSubjectGroupList(),e.$message({type:"success",message:"操作成功"})})).catch((function(){}))})).catch((function(){}))},addSubject:function(){this.parentNode=null,this.selectedNode=null,this.subjectDialogVisible=!0},addSubjectChildren:function(t){this.selectedNode=null,this.parentNode=t,this.subjectDialogVisible=!0}}},r=u,d=(n("7821"),n("2877")),b=Object(d["a"])(r,i,a,!1,null,"5dd6d5ea",null);e["default"]=b.exports}}]);