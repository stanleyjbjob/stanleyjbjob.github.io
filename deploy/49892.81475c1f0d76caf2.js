"use strict";(self.webpackChunkJbNotifier=self.webpackChunkJbNotifier||[]).push([[49892],{49892:(ct,u,s)=>{s.r(u),s.d(u,{CreateNotificationInfoModule:()=>lt});var I=s(96814),b=s(31610),m=s(88762),l=s(23758);const N=[],S=[{dataField:"notificationProviderIds",path:"/api/app/instant-notifications/notification-provider-lookup"},{dataField:"receiverIds",path:"/api/app/instant-notifications/receiver-lookup"},{dataField:"topicIds",path:"/api/app/instant-notifications/topic-lookup"},{dataField:"receiverGroupIds",path:"/api/app/notification-infos/receiver-group-treeview"},{dataField:"notificationCategoryId",path:"/api/app/instant-notifications/notification-category-lookup"},{dataField:"textContentNotificationTemplateId",path:"/api/app/instant-notifications/notification-template-lookup"}],F=[{dataField:"notificationProviderIds",path:"/api/app/reserved-notifications/notification-provider-lookup"},{dataField:"receiverIds",path:"/api/app/reserved-notifications/receiver-lookup"},{dataField:"topicIds",path:"/api/app/reserved-notifications/topic-lookup"},{dataField:"receiverGroupIds",path:"/api/app/notification-infos/receiver-group-treeview"},{dataField:"notificationCategoryId",path:"/api/app/reserved-notifications/notification-category-lookup"},{dataField:"textContentNotificationTemplateId",path:"/api/app/reserved-notifications/notification-template-lookup"}],y=[{dataField:"notificationProviderIds",path:"/api/app/recurring-notifications/notification-provider-lookup"},{dataField:"receiverIds",path:"/api/app/recurring-notifications/receiver-lookup"},{dataField:"topicIds",path:"/api/app/recurring-notifications/topic-lookup"},{dataField:"receiverGroupIds",path:"/api/app/notification-infos/receiver-group-treeview"},{dataField:"notificationCategoryId",path:"/api/app/recurring-notifications/notification-category-lookup"},{dataField:"textContentNotificationTemplateId",path:"/api/app/recurring-notifications/notification-template-lookup"}],G=[{dataField:"notificationProviderIds",path:"/api/app/instant-notifications/notification-provider-lookup"},{dataField:"receiverIds",path:"/api/app/instant-notifications/receiver-lookup"},{dataField:"topicIds",path:"/api/app/instant-notifications/topic-lookup"},{dataField:"receiverGroupIds",path:"/api/app/notification-infos/receiver-group-treeview"},{dataField:"notificationCategoryId",path:"/api/app/instant-notifications/notification-category-lookup"},{dataField:"textContentNotificationTemplateId",path:"/api/app/instant-notifications/notification-template-lookup"}];var c=s(85054),d=s(35130);const P={colCount:1,items:[{itemType:"group",name:"BasicGroup",cssClass:"BasicGroup",caption:"\u57fa\u672c",items:[{dataField:"notificationProviderIds",template:"notificationProviderIds",label:{visible:!1,text:"\u901a\u77e5\u63d0\u4f9b\u8005 id (\u53ef\u8907\u9078)"},validationRules:[c.L]},{dataField:"isSendToAllReceivers",template:"isSendToAllReceivers",cssClass:"isSendToAllReceivers",label:{text:"\u63a5\u6536\u8005"}},{itemType:"group",name:"ReceiversGroup",cssClass:"ReceiversGroup",colCount:3,items:[{dataField:"receiverIds",template:"receiverIds",label:{visible:!1,text:"\u63a5\u6536\u8005 (\u53ef\u8907\u9078)"}},{dataField:"receiverGroupIds",template:"receiverGroupIds",label:{visible:!1,text:"\u63a5\u6536\u7fa4\u7d44 (\u53ef\u8907\u9078)"}},{dataField:"topicIds",template:"topicIds",label:{visible:!1,text:"\u4e3b\u984c (\u53ef\u8907\u9078)"}}]}]},{itemType:"group",name:"SettingGroup",cssClass:"SettingGroup",caption:"\u8a2d\u5b9a",items:[{dataField:"isIndependentNotificationSettingUsing",template:"isIndependentNotificationSettingUsing",cssClass:"isIndependentNotificationSettingUsing",label:{text:"\u901a\u77e5\u8a2d\u5b9a"}},{dataField:"notificationSettings",template:"notificationSettings",cssClass:"notificationSettings",label:{visible:!1}}]},{itemType:"group",name:"NotificationContentGroup",cssClass:"NotificationContentGroup",caption:"\u901a\u77e5\u5167\u5bb9",colCount:2,items:[{dataField:"isUsingTemplate",template:"isUsingTemplate",cssClass:"isUsingTemplate",label:{visible:!1}},{itemType:"empty"},{dataField:"notificationCategoryId",editorType:"dxSelectBox",label:{text:"\u901a\u77e5\u5206\u985e id"},editorOptions:{placeholder:"\u8acb\u9078\u64c7..."}},{itemType:"empty"},{dataField:"title",editorType:"dxTextBox",label:{text:"\u6a19\u984c"}},{dataField:"subtitle",editorType:"dxTextBox",label:{text:"\u5b50\u6a19\u984c"}},{itemType:"group",name:"CustomContentGroup",cssClass:"CustomContentGroup",colSpan:2,colCount:8,items:[{dataField:"textContent",editorType:"dxTextArea",editorOptions:{height:"240px"},label:{text:"\u6587\u5b57\u5167\u5bb9"},colSpan:3},{dataField:"htmlContent",editorType:"dxHtmlEditor",editorOptions:{...d.W,height:"240px"},label:{text:"HTML \u5167\u5bb9"},colSpan:5}]},{itemType:"group",name:"NotificationTemplateGroup",cssClass:"NotificationTemplateGroup NotificationTemplateGroup--inactive",colSpan:2,colCount:2,items:[{dataField:"textContentNotificationTemplateId",cssClass:"textContentNotificationTemplateId",editorType:"dxSelectBox",label:{text:"\u901a\u77e5\u6a21\u677f"},editorOptions:{placeholder:"\u8acb\u9078\u64c7..."}},{itemType:"empty"},{dataField:"textContentNotificationTemplateArgs",template:"textContentNotificationTemplateArgs",label:{visible:!1},colSpan:2}]},{itemType:"group",name:"EndpointGroup",cssClass:"EndpointGroup",colSpan:2,colCount:3,items:[{dataField:"notificationDataFetchEndpoint",editorType:"dxTextBox",label:{text:"\u53d6\u5f97\u901a\u77e5\u8cc7\u6599 Endpoint"}},{dataField:"hookEndpoint",editorType:"dxTextBox",label:{text:"Hook"}},{dataField:"isFetchNotificationDataByEachReceiver",editorType:"dxCheckBox",cssClass:"basic-form-checkbox",label:{text:"\u662f\u5426\u4f9d\u5404\u901a\u77e5\u63a5\u6536\u8005\u53d6\u5f97\u8cc7\u6599"}}]}]}],formData:{notificationProviderIds:[],isSendToAllReceivers:!0,isIndependentNotificationSettingUsing:!1,isUsingTemplate:!1,isFetchNotificationDataByEachReceiver:!1,receiverIds:[],receiverGroupIds:[],topicIds:[],notificationSettings:[],notificationCategoryId:"",title:"",subTitle:"",textContent:"",htmlContent:"",textContentNotificationTemplateId:"",textContentNotificationTemplateArgs:"",htmlContentNotificationTemplateId:"",htmlContentNotificationTemplateArgs:"",notificationDataFetchEndpoint:"",hookEndpoint:""},elementAttr:{class:"custom-form create-form"}},D={colCount:1,items:[{itemType:"group",name:"BasicGroup",cssClass:"BasicGroup",caption:"\u57fa\u672c",items:[{dataField:"notificationProviderIds",template:"notificationProviderIds",label:{visible:!1,text:"\u901a\u77e5\u63d0\u4f9b\u8005 id (\u53ef\u8907\u9078)"},validationRules:[c.L]},{dataField:"isSendToAllReceivers",template:"isSendToAllReceivers",cssClass:"isSendToAllReceivers",label:{text:"\u63a5\u6536\u8005"}},{itemType:"group",name:"ReceiversGroup",cssClass:"ReceiversGroup",colCount:3,items:[{dataField:"receiverIds",template:"receiverIds",label:{visible:!1,text:"\u63a5\u6536\u8005 (\u53ef\u8907\u9078)"}},{dataField:"receiverGroupIds",template:"receiverGroupIds",label:{visible:!1,text:"\u63a5\u6536\u7fa4\u7d44 (\u53ef\u8907\u9078)"}},{dataField:"topicIds",template:"topicIds",label:{visible:!1,text:"\u4e3b\u984c (\u53ef\u8907\u9078)"}}]}]},{itemType:"group",name:"SettingGroup",cssClass:"SettingGroup",caption:"\u8a2d\u5b9a",items:[{dataField:"isIndependentNotificationSettingUsing",template:"isIndependentNotificationSettingUsing",cssClass:"isIndependentNotificationSettingUsing",label:{text:"\u901a\u77e5\u8a2d\u5b9a"}},{dataField:"notificationSettings",template:"notificationSettings",cssClass:"notificationSettings",label:{visible:!1}}]},{itemType:"group",name:"SchedulePlanGroup",cssClass:"SchedulePlanGroup",caption:"\u9810\u7d04\u6642\u9593\u8a08\u5283",items:[{dataField:"notificationSchedulePlans",template:"reserveNotificationSchedulePlans",cssClass:"notificationSchedulePlans",label:{visible:!1}}]},{itemType:"group",name:"NotificationContentGroup",cssClass:"NotificationContentGroup",caption:"\u901a\u77e5\u5167\u5bb9",colCount:2,items:[{dataField:"isUsingTemplate",template:"isUsingTemplate",cssClass:"isUsingTemplate",label:{visible:!1}},{itemType:"empty"},{dataField:"notificationCategoryId",editorType:"dxSelectBox",label:{text:"\u901a\u77e5\u5206\u985e id"},editorOptions:{placeholder:"\u8acb\u9078\u64c7..."}},{itemType:"empty"},{dataField:"title",editorType:"dxTextBox",label:{text:"\u6a19\u984c"}},{dataField:"subtitle",editorType:"dxTextBox",label:{text:"\u5b50\u6a19\u984c"}},{itemType:"group",name:"CustomContentGroup",cssClass:"CustomContentGroup",colSpan:2,colCount:8,items:[{dataField:"textContent",editorType:"dxTextArea",editorOptions:{height:"240px"},label:{text:"\u6587\u5b57\u5167\u5bb9"},colSpan:3},{dataField:"htmlContent",editorType:"dxHtmlEditor",editorOptions:{...d.W,height:"240px"},label:{text:"HTML \u5167\u5bb9"},colSpan:5}]},{itemType:"group",name:"NotificationTemplateGroup",cssClass:"NotificationTemplateGroup NotificationTemplateGroup--inactive",colSpan:2,colCount:2,items:[{dataField:"textContentNotificationTemplateId",cssClass:"textContentNotificationTemplateId",editorType:"dxSelectBox",label:{text:"\u901a\u77e5\u6a21\u677f"},editorOptions:{placeholder:"\u8acb\u9078\u64c7..."}},{itemType:"empty"},{dataField:"textContentNotificationTemplateArgs",template:"textContentNotificationTemplateArgs",label:{visible:!1},colSpan:2}]},{itemType:"group",name:"EndpointGroup",cssClass:"EndpointGroup",colSpan:2,colCount:3,items:[{dataField:"notificationDataFetchEndpoint",editorType:"dxTextBox",label:{text:"\u53d6\u5f97\u901a\u77e5\u8cc7\u6599 Endpoint"}},{dataField:"hookEndpoint",editorType:"dxTextBox",label:{text:"Hook"}},{dataField:"isFetchNotificationDataByEachReceiver",editorType:"dxCheckBox",cssClass:"basic-form-checkbox",label:{text:"\u662f\u5426\u4f9d\u5404\u901a\u77e5\u63a5\u6536\u8005\u53d6\u5f97\u8cc7\u6599"}}]}]}],formData:{notificationProviderIds:[],isSendToAllReceivers:!0,isIndependentNotificationSettingUsing:!1,isUsingTemplate:!1,isFetchNotificationDataByEachReceiver:!1,receiverIds:[],receiverGroupIds:[],topicIds:[],notificationSettings:[],notificationCategoryId:"",title:"",subTitle:"",textContent:"",htmlContent:"",textContentNotificationTemplateId:"",textContentNotificationTemplateArgs:"",htmlContentNotificationTemplateId:"",htmlContentNotificationTemplateArgs:"",notificationDataFetchEndpoint:"",hookEndpoint:"",notificationSchedulePlans:[]},elementAttr:{class:"custom-form create-form"}},A={colCount:1,items:[{itemType:"group",name:"BasicGroup",cssClass:"BasicGroup",caption:"\u57fa\u672c",items:[{dataField:"notificationProviderIds",template:"notificationProviderIds",label:{visible:!1,text:"\u901a\u77e5\u63d0\u4f9b\u8005 id (\u53ef\u8907\u9078)"},validationRules:[c.L]},{dataField:"isSendToAllReceivers",template:"isSendToAllReceivers",cssClass:"isSendToAllReceivers",label:{text:"\u63a5\u6536\u8005"}},{itemType:"group",name:"ReceiversGroup",cssClass:"ReceiversGroup",colCount:3,items:[{dataField:"receiverIds",template:"receiverIds",label:{visible:!1,text:"\u63a5\u6536\u8005 (\u53ef\u8907\u9078)"}},{dataField:"receiverGroupIds",template:"receiverGroupIds",label:{visible:!1,text:"\u63a5\u6536\u7fa4\u7d44 (\u53ef\u8907\u9078)"}},{dataField:"topicIds",template:"topicIds",label:{visible:!1,text:"\u4e3b\u984c (\u53ef\u8907\u9078)"}}]}]},{itemType:"group",name:"SettingGroup",cssClass:"SettingGroup",caption:"\u8a2d\u5b9a",items:[{dataField:"isIndependentNotificationSettingUsing",template:"isIndependentNotificationSettingUsing",cssClass:"isIndependentNotificationSettingUsing",label:{text:"\u901a\u77e5\u8a2d\u5b9a"}},{dataField:"notificationSettings",template:"notificationSettings",cssClass:"notificationSettings",label:{visible:!1}}]},{itemType:"group",name:"SchedulePlanGroup",cssClass:"SchedulePlanGroup",caption:"\u91cd\u8907\u6642\u9593\u8a08\u5283",items:[{dataField:"notificationSchedulePlans",template:"recurringNotificationSchedulePlans",cssClass:"notificationSchedulePlans",label:{visible:!1}}]},{itemType:"group",name:"NotificationContentGroup",cssClass:"NotificationContentGroup",caption:"\u901a\u77e5\u5167\u5bb9",colCount:2,items:[{dataField:"isUsingTemplate",template:"isUsingTemplate",cssClass:"isUsingTemplate",label:{visible:!1}},{itemType:"empty"},{dataField:"notificationCategoryId",editorType:"dxSelectBox",label:{text:"\u901a\u77e5\u5206\u985e id"},editorOptions:{placeholder:"\u8acb\u9078\u64c7..."}},{itemType:"empty"},{dataField:"title",editorType:"dxTextBox",label:{text:"\u6a19\u984c"}},{dataField:"subtitle",editorType:"dxTextBox",label:{text:"\u5b50\u6a19\u984c"}},{itemType:"group",name:"CustomContentGroup",cssClass:"CustomContentGroup",colSpan:2,colCount:8,items:[{dataField:"textContent",editorType:"dxTextArea",editorOptions:{height:"240px"},label:{text:"\u6587\u5b57\u5167\u5bb9"},colSpan:3},{dataField:"htmlContent",editorType:"dxHtmlEditor",editorOptions:{...d.W,height:"240px"},label:{text:"HTML \u5167\u5bb9"},colSpan:5}]},{itemType:"group",name:"NotificationTemplateGroup",cssClass:"NotificationTemplateGroup NotificationTemplateGroup--inactive",colSpan:2,colCount:2,items:[{dataField:"textContentNotificationTemplateId",cssClass:"textContentNotificationTemplateId",editorType:"dxSelectBox",label:{text:"\u901a\u77e5\u6a21\u677f"},editorOptions:{placeholder:"\u8acb\u9078\u64c7..."}},{itemType:"empty"},{dataField:"textContentNotificationTemplateArgs",template:"textContentNotificationTemplateArgs",label:{visible:!1},colSpan:2}]},{itemType:"group",name:"EndpointGroup",cssClass:"EndpointGroup",colSpan:2,colCount:3,items:[{dataField:"notificationDataFetchEndpoint",editorType:"dxTextBox",label:{text:"\u53d6\u5f97\u901a\u77e5\u8cc7\u6599 Endpoint"}},{dataField:"hookEndpoint",editorType:"dxTextBox",label:{text:"Hook"}},{dataField:"isFetchNotificationDataByEachReceiver",editorType:"dxCheckBox",cssClass:"basic-form-checkbox",label:{text:"\u662f\u5426\u4f9d\u5404\u901a\u77e5\u63a5\u6536\u8005\u53d6\u5f97\u8cc7\u6599"}}]}]}],formData:{notificationProviderIds:[],isSendToAllReceivers:!0,isIndependentNotificationSettingUsing:!1,isUsingTemplate:!1,isFetchNotificationDataByEachReceiver:!1,receiverIds:[],receiverGroupIds:[],topicIds:[],notificationSettings:[],notificationCategoryId:"",title:"",subTitle:"",textContent:"",htmlContent:"",textContentNotificationTemplateId:"",textContentNotificationTemplateArgs:"",htmlContentNotificationTemplateId:"",htmlContentNotificationTemplateArgs:"",notificationDataFetchEndpoint:"",hookEndpoint:"",notificationSchedulePlans:[]},elementAttr:{class:"custom-form create-form"}},R={colCount:1,items:[{itemType:"group",name:"CronExpressionGroup",cssClass:"CronExpressionGroup",caption:"",colCount:2,items:[{dataField:"expectedPushCount",editorType:"dxNumberBox",cssClass:"expectedPushCount",label:{text:"\u9810\u8a08\u63a8\u9001\u6b21\u6578"}},{dataField:"expectedEndTime",editorType:"dxDateBox",cssClass:"expectedEndTime",label:{text:"\u9810\u8a08\u7d50\u675f\u6642\u9593"},editorOptions:{type:"datetime",onOpened:o=>{o.component._popup.option("position",{at:"left"})}}}]},{itemType:"group",name:"BasicGroup",cssClass:"BasicGroup",caption:"\u57fa\u672c",items:[{dataField:"notificationProviderIds",template:"notificationProviderIds",label:{visible:!1,text:"\u901a\u77e5\u63d0\u4f9b\u8005 id (\u53ef\u8907\u9078)"},validationRules:[c.L]},{dataField:"isSendToAllReceivers",template:"isSendToAllReceivers",cssClass:"isSendToAllReceivers",label:{text:"\u63a5\u6536\u8005"}},{itemType:"group",name:"ReceiversGroup",cssClass:"ReceiversGroup",colCount:3,items:[{dataField:"receiverIds",template:"receiverIds",label:{visible:!1,text:"\u63a5\u6536\u8005 (\u53ef\u8907\u9078)"}},{dataField:"receiverGroupIds",template:"receiverGroupIds",label:{visible:!1,text:"\u63a5\u6536\u7fa4\u7d44 (\u53ef\u8907\u9078)"}},{dataField:"topicIds",template:"topicIds",label:{visible:!1,text:"\u4e3b\u984c (\u53ef\u8907\u9078)"}}]}]},{itemType:"group",name:"SettingGroup",cssClass:"SettingGroup",caption:"\u8a2d\u5b9a",items:[{dataField:"isIndependentNotificationSettingUsing",template:"isIndependentNotificationSettingUsing",cssClass:"isIndependentNotificationSettingUsing",label:{text:"\u901a\u77e5\u8a2d\u5b9a"}},{dataField:"notificationSettings",template:"notificationSettings",cssClass:"notificationSettings",label:{visible:!1}}]},{itemType:"group",name:"NotificationContentGroup",cssClass:"NotificationContentGroup",caption:"\u901a\u77e5\u5167\u5bb9",colCount:2,items:[{dataField:"isUsingTemplate",template:"isUsingTemplate",cssClass:"isUsingTemplate",label:{visible:!1}},{itemType:"empty"},{dataField:"notificationCategoryId",editorType:"dxSelectBox",label:{text:"\u901a\u77e5\u5206\u985e id"},editorOptions:{placeholder:"\u8acb\u9078\u64c7..."}},{itemType:"empty"},{dataField:"title",editorType:"dxTextBox",label:{text:"\u6a19\u984c"}},{dataField:"subtitle",editorType:"dxTextBox",label:{text:"\u5b50\u6a19\u984c"}},{itemType:"group",name:"CustomContentGroup",cssClass:"CustomContentGroup",colSpan:2,colCount:8,items:[{dataField:"textContent",editorType:"dxTextArea",editorOptions:{height:"240px"},label:{text:"\u6587\u5b57\u5167\u5bb9"},colSpan:3},{dataField:"htmlContent",editorType:"dxHtmlEditor",editorOptions:{...d.W,height:"240px"},label:{text:"HTML \u5167\u5bb9"},colSpan:5}]},{itemType:"group",name:"NotificationTemplateGroup",cssClass:"NotificationTemplateGroup NotificationTemplateGroup--inactive",colSpan:2,colCount:2,items:[{dataField:"textContentNotificationTemplateId",cssClass:"textContentNotificationTemplateId",editorType:"dxSelectBox",label:{text:"\u901a\u77e5\u6a21\u677f"},editorOptions:{placeholder:"\u8acb\u9078\u64c7..."}},{itemType:"empty"},{dataField:"textContentNotificationTemplateArgs",template:"textContentNotificationTemplateArgs",label:{visible:!1},colSpan:2}]},{itemType:"group",name:"EndpointGroup",cssClass:"EndpointGroup",colSpan:2,colCount:3,items:[{dataField:"notificationDataFetchEndpoint",editorType:"dxTextBox",label:{text:"\u53d6\u5f97\u901a\u77e5\u8cc7\u6599 Endpoint"}},{dataField:"hookEndpoint",editorType:"dxTextBox",label:{text:"Hook"}},{dataField:"isFetchNotificationDataByEachReceiver",editorType:"dxCheckBox",cssClass:"basic-form-checkbox",label:{text:"\u662f\u5426\u4f9d\u5404\u901a\u77e5\u63a5\u6536\u8005\u53d6\u5f97\u8cc7\u6599"}}]}]}],formData:{notificationProviderIds:[],isSendToAllReceivers:!0,isIndependentNotificationSettingUsing:!1,isUsingTemplate:!1,isFetchNotificationDataByEachReceiver:!1,receiverIds:[],receiverGroupIds:[],topicIds:[],notificationSettings:[],notificationCategoryId:"",title:"",subTitle:"",textContent:"",htmlContent:"",textContentNotificationTemplateId:"",textContentNotificationTemplateArgs:"",htmlContentNotificationTemplateId:"",htmlContentNotificationTemplateArgs:"",notificationDataFetchEndpoint:"",hookEndpoint:"",expectedPushCount:null,expectedEndTime:null,cronExpression:""},elementAttr:{class:"custom-form create-form"}};var E=s(48684),p=s(6990),t=s(19212),U=s(53009),B=s(71036),M=s(27310),O=s(16358),k=s(20843),J=s(609),x=s(44932),C=s(68833),g=s(10932),T=s(90962),v=s(68545),_=s(14963),h=s(41661);const L=["form"];function Z(o,r){if(1&o){const i=t.EpF();t.TgZ(0,"app-notification-tag-box",12),t.NdJ("valueChange",function(a){t.CHM(i);const n=t.oxw();return t.KtG(n.formProperties.formData.notificationProviderIds=a)}),t.qZA()}if(2&o){const i=r.$implicit,e=t.oxw();t.Q6J("dataSource",i.editorOptions.dataSource)("label",e.formProperties.items[0+(e.isUsingCronExpressions&&1)].items[0].label.text)("isRequired",e.formProperties.items[0+(e.isUsingCronExpressions&&1)].items[0].validationRules&&"required"===(null==e.formProperties.items[0+(e.isUsingCronExpressions&&1)].items[0].validationRules[0]?null:e.formProperties.items[0+(e.isUsingCronExpressions&&1)].items[0].validationRules[0].type))("value",e.formProperties.formData.notificationProviderIds)}}const Q=()=>({name:"\u6240\u6709\u4eba",value:!0}),H=()=>({name:"\u6307\u5b9a\u63a5\u6536\u8005",value:!1}),f=(o,r)=>[o,r];function w(o,r){if(1&o){const i=t.EpF();t.TgZ(0,"app-notification-radio-button",13),t.NdJ("valueChange",function(a){t.CHM(i);const n=t.oxw();return t.KtG(n.formProperties.formData.isSendToAllReceivers=a)})("valueChange",function(a){t.CHM(i);const n=t.oxw();return t.KtG(n.toggleNotificationRadioButton(a,"isSendToAllReceivers"))}),t.qZA()}if(2&o){const i=t.oxw();t.Q6J("dataSource",t.WLB(4,f,t.DdM(2,Q),t.DdM(3,H)))("value",i.formProperties.formData.isSendToAllReceivers)}}function K(o,r){if(1&o){const i=t.EpF();t.TgZ(0,"app-notification-tag-box",14),t.NdJ("valueChange",function(a){t.CHM(i);const n=t.oxw();return t.KtG(n.formProperties.formData.receiverIds=a)}),t.qZA()}if(2&o){const i=r.$implicit,e=t.oxw();t.Q6J("dataSource",i.editorOptions.dataSource)("label",e.formProperties.items[0+(e.isUsingCronExpressions&&1)].items[2].items[0].label.text)("isRequired",e.formProperties.items[0+(e.isUsingCronExpressions&&1)].items[2].items[0].validationRules&&"required"===(null==e.formProperties.items[0+(e.isUsingCronExpressions&&1)].items[2].items[0].validationRules[0]?null:e.formProperties.items[0+(e.isUsingCronExpressions&&1)].items[2].items[0].validationRules[0].type))("value",e.formProperties.formData.receiverIds)("hidden",e.formProperties.formData.isSendToAllReceivers)}}function $(o,r){if(1&o){const i=t.EpF();t.TgZ(0,"app-notification-tree-view",14),t.NdJ("valueChange",function(a){t.CHM(i);const n=t.oxw();return t.KtG(n.formProperties.formData.receiverGroupIds=a)}),t.qZA()}if(2&o){const i=r.$implicit,e=t.oxw();t.Q6J("dataSource",i.editorOptions.dataSource)("label",e.formProperties.items[0+(e.isUsingCronExpressions&&1)].items[2].items[1].label.text)("isRequired",e.formProperties.items[0+(e.isUsingCronExpressions&&1)].items[2].items[1].validationRules&&"required"===e.formProperties.items[0+(e.isUsingCronExpressions&&1)].items[2].items[1].validationRules[0].type)("value",e.formProperties.formData.receiverGroupIds)("hidden",e.formProperties.formData.isSendToAllReceivers)}}function q(o,r){if(1&o){const i=t.EpF();t.TgZ(0,"app-notification-tag-box",14),t.NdJ("valueChange",function(a){t.CHM(i);const n=t.oxw();return t.KtG(n.formProperties.formData.topicIds=a)}),t.qZA()}if(2&o){const i=r.$implicit,e=t.oxw();t.Q6J("dataSource",i.editorOptions.dataSource)("label",e.formProperties.items[0+(e.isUsingCronExpressions&&1)].items[2].items[2].label.text)("isRequired",e.formProperties.items[0+(e.isUsingCronExpressions&&1)].items[2].items[2].validationRules&&"required"===e.formProperties.items[0+(e.isUsingCronExpressions&&1)].items[2].items[2].validationRules[0].type)("value",e.formProperties.formData.topicIds)("hidden",e.formProperties.formData.isSendToAllReceivers)}}const W=()=>({name:"\u5957\u7528\u5171\u7528\u8a2d\u5b9a",value:!1}),j=()=>({name:"\u53e6\u884c\u8a2d\u5b9a",value:!0});function Y(o,r){if(1&o){const i=t.EpF();t.TgZ(0,"app-notification-radio-button",13),t.NdJ("valueChange",function(a){t.CHM(i);const n=t.oxw();return t.KtG(n.formProperties.formData.isIndependentNotificationSettingUsing=a)}),t.qZA()}if(2&o){const i=t.oxw();t.Q6J("dataSource",t.WLB(4,f,t.DdM(2,W),t.DdM(3,j)))("value",i.formProperties.formData.isIndependentNotificationSettingUsing)}}function z(o,r){if(1&o){const i=t.EpF();t.TgZ(0,"app-notification-setting-items",15),t.NdJ("valueChange",function(a){t.CHM(i);const n=t.oxw();return t.KtG(n.formProperties.formData.notificationSettings=a)}),t.qZA()}if(2&o){const i=t.oxw();t.Q6J("isIndependentNotificationSettingUsing",i.formProperties.formData.isIndependentNotificationSettingUsing)("value",i.formProperties.formData.notificationSettings)}}const X=()=>({name:"\u81ea\u8a02",value:!1}),V=()=>({name:"\u6a21\u677f",value:!0});function tt(o,r){if(1&o){const i=t.EpF();t.TgZ(0,"app-notification-radio-button",13),t.NdJ("valueChange",function(a){t.CHM(i);const n=t.oxw();return t.KtG(n.formProperties.formData.isUsingTemplate=a)})("valueChange",function(a){t.CHM(i);const n=t.oxw();return t.KtG(n.toggleNotificationRadioButton(a,"isUsingTemplate"))}),t.qZA()}if(2&o){const i=t.oxw();t.Q6J("dataSource",t.WLB(4,f,t.DdM(2,X),t.DdM(3,V)))("value",i.formProperties.formData.isUsingTemplate)}}function et(o,r){if(1&o){const i=t.EpF();t.TgZ(0,"app-notification-template-args",16),t.NdJ("valueChange",function(a){t.CHM(i);const n=t.oxw();return t.KtG(n.formProperties.formData.textContentNotificationTemplateArgs=a)}),t.qZA()}if(2&o){const i=t.oxw();t.Q6J("notificationTemplateId",i.formProperties.formData.textContentNotificationTemplateId)("value",i.formProperties.formData.textContentNotificationTemplateArgs)}}function it(o,r){if(1&o){const i=t.EpF();t.TgZ(0,"app-recurring-notification-schedule-plan",17),t.NdJ("valueChange",function(a){t.CHM(i);const n=t.oxw();return t.KtG(n.formProperties.formData.notificationSchedulePlans=a)}),t.qZA()}if(2&o){const i=t.oxw();t.Q6J("value",i.formProperties.formData.notificationSchedulePlans)}}function ot(o,r){if(1&o){const i=t.EpF();t.TgZ(0,"app-reserve-notification-schedule-plan",17),t.NdJ("valueChange",function(a){t.CHM(i);const n=t.oxw();return t.KtG(n.formProperties.formData.notificationSchedulePlans=a)}),t.qZA()}if(2&o){const i=t.oxw();t.Q6J("value",i.formProperties.formData.notificationSchedulePlans)}}const at=()=>({class:"custom-button custom-button--blue"}),nt=()=>({class:"custom-button"}),st=[{path:"",component:(()=>{class o{constructor(i,e,a,n){this.route=i,this.router=e,this.configStateService=a,this.appRestService=n,this.dataFieldTranslationKeysMapping=N,this.createPageTitle="\u65b0\u589e",this.receiverIdsTemp=[],this.receiverGroupIdsTemp=[],this.topicIdsTemp=[],this.textContentNotificationTemplateIdTemp="",this.textContentNotificationTemplateArgsTemp="",this.textContentTemp="",this.htmlContentTemp="",this.parentURL="./",this.isUsingCronExpressions=!1}ngOnInit(){this.SpecifiedTenantId=this.configStateService.getOne("currentTenant").id,this.getParentRouteURL(this.route)}ngAfterViewInit(){if(this.parentURL.includes("cron-expressions")){const i=this.parentURL.split("/")[2];this.form.instance.updateData("cronExpression",i),this.appRestService.request({method:"GET",url:`/api/app/jbnotifier-admin/cron-expressions/description/${i}`}).subscribe(e=>{this.form.instance.option("items[0].caption",`${e.description} | ${i}`)})}}getParentRouteURL(i){if(!i.parent)return;const e=i.parent;this.getParentRouteURL(e);const a=e.snapshot.url.map(n=>n.path).join("/");switch(this.parentURL=this.parentURL+("create-notification-info"!==a&&a?a+"/":""),a){case"instant-notification-infos":this.formProperties=(0,p.cloneDeep)(P),this.dataFieldLookupSourceMapping=(0,p.cloneDeep)(S),this.createPageTitle="\u65b0\u589e\u5373\u6642\u901a\u77e5",this.postURL="/api/app/instant-notifications";break;case"reserve-notification-infos":this.formProperties=(0,p.cloneDeep)(D),this.dataFieldLookupSourceMapping=(0,p.cloneDeep)(F),this.createPageTitle="\u65b0\u589e\u9810\u7d04\u901a\u77e5",this.postURL="/api/app/reserved-notifications";break;case"recurring-notification-infos":this.formProperties=(0,p.cloneDeep)(A),this.dataFieldLookupSourceMapping=(0,p.cloneDeep)(y),this.createPageTitle="\u65b0\u589e\u91cd\u8907\u901a\u77e5",this.postURL="/api/app/recurring-notifications";break;case"cron-expressions":this.formProperties=(0,p.cloneDeep)(R),this.dataFieldLookupSourceMapping=(0,p.cloneDeep)(G),this.createPageTitle="\u65b0\u589e\u901a\u77e5",this.postURL="/api/app/jbnotifier-admin/cron-expressions/notifications",this.isUsingCronExpressions=!0}}toggleNotificationRadioButton(i,e){const a=this.form.instance.option("formData");switch(e){case"isSendToAllReceivers":i?(this.receiverIdsTemp=a.receiverIds,this.receiverGroupIdsTemp=a.receiverGroupIds,this.topicIdsTemp=a.topicIds,this.form.instance.updateData("receiverIds",[]),this.form.instance.updateData("receiverGroupIds",[]),this.form.instance.updateData("topicIds",[])):(this.form.instance.updateData("receiverIds",this.receiverIdsTemp),this.form.instance.updateData("receiverGroupIds",this.receiverGroupIdsTemp),this.form.instance.updateData("topicIds",this.topicIdsTemp));break;case"isUsingTemplate":this.form.instance.itemOption("NotificationContentGroup.NotificationTemplateGroup","cssClass",i?"NotificationTemplateGroup":"NotificationTemplateGroup NotificationTemplateGroup--inactive"),this.form.instance.itemOption("NotificationContentGroup.CustomContentGroup","cssClass",i?"CustomContentGroup CustomContentGroup--inactive":"CustomContentGroup"),i?(this.textContentTemp=a.textContent,this.htmlContentTemp=a.htmlContent,this.form.instance.updateData("textContent",""),this.form.instance.updateData("htmlContent",""),this.form.instance.updateData("textContentNotificationTemplateId",this.textContentNotificationTemplateIdTemp),this.form.instance.updateData("textContentNotificationTemplateArgs",this.textContentNotificationTemplateArgsTemp)):(this.textContentNotificationTemplateIdTemp=a.textContentNotificationTemplateId,this.textContentNotificationTemplateArgsTemp=a.textContentNotificationTemplateArgs,this.form.instance.updateData("textContentNotificationTemplateId",""),this.form.instance.updateData("textContentNotificationTemplateArgs",""),this.form.instance.updateData("textContent",this.textContentTemp),this.form.instance.updateData("htmlContent",this.htmlContentTemp))}}handleSubmit(){this.formProperties.formData.textContentNotificationTemplateId&&(this.formProperties.formData.htmlContentNotificationTemplateId=this.formProperties.formData.textContentNotificationTemplateId,this.formProperties.formData.htmlContentNotificationTemplateArgs=this.formProperties.formData.textContentNotificationTemplateArgs),this.appRestService.request({method:"POST",url:this.postURL,body:this.form.instance.option("formData"),params:{SpecifiedTenantId:this.SpecifiedTenantId}},{apiName:E.O}).subscribe(()=>{this.router.navigate([this.parentURL])})}handleCancel(){this.router.navigate([this.parentURL])}static#t=this.\u0275fac=function(e){return new(e||o)(t.Y36(l.gz),t.Y36(l.F0),t.Y36(m.XJE),t.Y36(U.$))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-create-notification-info"]],viewQuery:function(e,a){if(1&e&&t.Gf(L,5),2&e){let n;t.iGM(n=t.CRH())&&(a.form=n.first)}},decls:18,vars:19,consts:[[1,"create-page-title"],["appFormFeature","",3,"formProperties","dataFieldLookUpSourceMapping","dataFieldTranslationKeysMapping"],["form",""],[3,"dataSource","label","isRequired","value","valueChange",4,"dxTemplate","dxTemplateOf"],[3,"dataSource","value","valueChange",4,"dxTemplate","dxTemplateOf"],[3,"dataSource","label","isRequired","value","hidden","valueChange",4,"dxTemplate","dxTemplateOf"],[3,"isIndependentNotificationSettingUsing","value","valueChange",4,"dxTemplate","dxTemplateOf"],[3,"notificationTemplateId","value","valueChange",4,"dxTemplate","dxTemplateOf"],[3,"value","valueChange",4,"dxTemplate","dxTemplateOf"],[1,"form-buttons"],["appCustomButton","","text","\u5132\u5b58",3,"elementAttr","onClick"],["appCustomButton","","text","\u53d6\u6d88",3,"elementAttr","onClick"],[3,"dataSource","label","isRequired","value","valueChange"],[3,"dataSource","value","valueChange"],[3,"dataSource","label","isRequired","value","hidden","valueChange"],[3,"isIndependentNotificationSettingUsing","value","valueChange"],[3,"notificationTemplateId","value","valueChange"],[3,"value","valueChange"]],template:function(e,a){1&e&&(t.TgZ(0,"h2",0),t._uU(1),t.qZA(),t.TgZ(2,"dx-form",1,2),t.YNc(4,Z,1,4,"app-notification-tag-box",3)(5,w,1,7,"app-notification-radio-button",4)(6,K,1,5,"app-notification-tag-box",5)(7,$,1,5,"app-notification-tree-view",5)(8,q,1,5,"app-notification-tag-box",5)(9,Y,1,7,"app-notification-radio-button",4)(10,z,1,2,"app-notification-setting-items",6)(11,tt,1,7,"app-notification-radio-button",4)(12,et,1,2,"app-notification-template-args",7)(13,it,1,1,"app-recurring-notification-schedule-plan",8)(14,ot,1,1,"app-reserve-notification-schedule-plan",8),t.qZA(),t.TgZ(15,"div",9)(16,"dx-button",10),t.NdJ("onClick",function(){return a.handleSubmit()}),t.qZA(),t.TgZ(17,"dx-button",11),t.NdJ("onClick",function(){return a.handleCancel()}),t.qZA()()),2&e&&(t.xp6(),t.Oqu(a.createPageTitle),t.xp6(),t.Q6J("formProperties",a.formProperties)("dataFieldLookUpSourceMapping",a.dataFieldLookupSourceMapping)("dataFieldTranslationKeysMapping",a.dataFieldTranslationKeysMapping),t.xp6(2),t.Q6J("dxTemplateOf","notificationProviderIds"),t.xp6(),t.Q6J("dxTemplateOf","isSendToAllReceivers"),t.xp6(),t.Q6J("dxTemplateOf","receiverIds"),t.xp6(),t.Q6J("dxTemplateOf","receiverGroupIds"),t.xp6(),t.Q6J("dxTemplateOf","topicIds"),t.xp6(),t.Q6J("dxTemplateOf","isIndependentNotificationSettingUsing"),t.xp6(),t.Q6J("dxTemplateOf","notificationSettings"),t.xp6(),t.Q6J("dxTemplateOf","isUsingTemplate"),t.xp6(),t.Q6J("dxTemplateOf","textContentNotificationTemplateArgs"),t.xp6(),t.Q6J("dxTemplateOf","recurringNotificationSchedulePlans"),t.xp6(),t.Q6J("dxTemplateOf","reserveNotificationSchedulePlans"),t.xp6(2),t.Q6J("elementAttr",t.DdM(17,at)),t.xp6(),t.Q6J("elementAttr",t.DdM(18,nt)))},dependencies:[B._,M.A,O.K,k.p6,J.Y,x.h,C.d,g.m,T.b,v.E,_.t,h.v],styles:[".create-page-title[_ngcontent-%COMP%]{font-size:28px;font-weight:600;line-height:28px;color:var(--blue-1);letter-spacing:var(--letter-1);padding:16px 0 32px;margin-bottom:0}.form-buttons[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:24px;padding-bottom:24px}"]})}return o})(),canActivate:[m.a1M,m.nG9]}];let rt=(()=>{class o{static#t=this.\u0275fac=function(e){return new(e||o)};static#e=this.\u0275mod=t.oAB({type:o});static#i=this.\u0275inj=t.cJS({imports:[l.Bz.forChild(st),l.Bz]})}return o})();var pt=s(5533);let lt=(()=>{class o{static#t=this.\u0275fac=function(e){return new(e||o)};static#e=this.\u0275mod=t.oAB({type:o});static#i=this.\u0275inj=t.cJS({imports:[I.ez,rt,b.m,pt.P,x.h,C.d,g.m,T.b,v.E,_.t,h.v]})}return o})()}}]);