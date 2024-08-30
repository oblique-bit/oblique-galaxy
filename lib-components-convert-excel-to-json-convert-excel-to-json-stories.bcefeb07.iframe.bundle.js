"use strict";(self.webpackChunkoblique_galaxy=self.webpackChunkoblique_galaxy||[]).push([[253],{"./projects/oblique-galaxy/src/lib/components/convert-excel-to-json/convert-excel-to-json.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>convert_excel_to_json_stories});var fesm2022_select=__webpack_require__("./node_modules/@angular/material/fesm2022/select.mjs"),input=__webpack_require__("./node_modules/@angular/material/fesm2022/input.mjs"),fesm2022_button=__webpack_require__("./node_modules/@angular/material/fesm2022/button.mjs"),oblique=__webpack_require__("./node_modules/@oblique/oblique/fesm2022/oblique.mjs"),form_field=__webpack_require__("./node_modules/@angular/material/fesm2022/form-field.mjs"),fesm2022_forms=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs"),dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),fesm2022_core=__webpack_require__("./node_modules/@angular/material/fesm2022/core.mjs"),xlsx=__webpack_require__("./node_modules/xlsx/xlsx.mjs");let ConvertExcelToJsonService=class ConvertExcelToJsonService{processFile(file){const reader=new FileReader;reader.onload=event=>this.handleFileLoad(event),reader.readAsArrayBuffer(file)}handleFileLoad(event){const data=event.target?.result;if(data instanceof ArrayBuffer){const binaryString=new Uint8Array(data).reduce(((acc,byte)=>acc+String.fromCharCode(byte)),""),workbook=xlsx.LF(binaryString,{type:"binary"}),[sheetName]=workbook.SheetNames,worksheet=workbook.Sheets[sheetName],jsonData=xlsx.Wp.sheet_to_json(worksheet,{header:1});if(jsonData.length>0&&jsonData.every(Array.isArray)){const keys=this.extractKeys(jsonData);this.extractColumns(jsonData).forEach(((col,index)=>{const json=this.createJsonObject(keys,jsonData,index);this.saveJsonToFile(col,json)}))}}}extractKeys(jsonData){return jsonData.map((row=>Array.isArray(row)?row[0]:""))}extractColumns(jsonData){return Array.isArray(jsonData[0])?jsonData[0].slice(1):[]}createJsonObject(keys,jsonData,index){const json={};return keys.slice(1).forEach(((key,rowIndex)=>{const dataRow=jsonData[rowIndex+1];Array.isArray(dataRow)&&(json[key]=dataRow[index+1])})),json}saveJsonToFile(fileName,json){const jsonString=JSON.stringify(json,null,2),blob=new Blob([jsonString],{type:"application/json"}),url=URL.createObjectURL(blob),element=document.createElement("a");element.href=url,element.download=`${fileName}.json`,element.click(),URL.revokeObjectURL(url)}};ConvertExcelToJsonService=(0,tslib_es6.Cg)([(0,core.Injectable)({providedIn:"root"})],ConvertExcelToJsonService);let ConvertExcelToJsonComponent=class ConvertExcelToJsonComponent{constructor(convertExcelToJsonService){this.convertExcelToJsonService=convertExcelToJsonService,this.files=[]}onFileSelected(event){const{files}=event;if(files.length>0){const file=files[0];file instanceof File&&this.convertExcelToJsonService.processFile(file)}}static#_=this.ctorParameters=()=>[{type:ConvertExcelToJsonService}]};ConvertExcelToJsonComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"obg-convert-excel-to-json",standalone:!0,imports:[form_field.rl,form_field.nJ,fesm2022_select.VO,fesm2022_core.wT,fesm2022_forms.X1,input.fg,fesm2022_button.$z,oblique.tEF,oblique.CVI,oblique.TTh,oblique.EML],template:'<ob-file-upload [accept]="[\'.xlsx\']" (uploadEvent)="onFileSelected($event)" />\n'})],ConvertExcelToJsonComponent);var http=__webpack_require__("./node_modules/@angular/common/fesm2022/http.mjs"),ngx_translate_core=__webpack_require__("./node_modules/@ngx-translate/core/dist/fesm2022/ngx-translate-core.mjs");const convert_excel_to_json_stories={title:"Components/NgxTranslateTools/ConvertExcelToJson",component:ConvertExcelToJsonComponent,tags:["autodocs"],parameters:{docs:{description:{component:"\nThis component has been created by [@punix81](https://github.com/punix81).\n\nThis component is an Oblique service that retrieves a translation Excel file, splits it into one or more downloadable JSON files. For generating the JSON files, this service uses the xlsx library, ensuring precise and fast data conversion.\n"}}},decorators:[(0,dist.moduleMetadata)({imports:[fesm2022_forms.X1,form_field.RG,fesm2022_select.Ve,input.fS,fesm2022_button.Hl,oblique.tEF,oblique.CVI,oblique.TTh,oblique.EML,oblique.rXG.forRoot(),http.q1,ngx_translate_core.h.forRoot((0,oblique.HOG)())]})]},Default=(args=>({props:{...args}})).bind({});Default.args={files:[]};const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"(args: Partial<ConvertExcelToJsonService>) => ({\n  props: {\n    ...args\n  }\n})",...Default.parameters?.docs?.source}}}}}]);