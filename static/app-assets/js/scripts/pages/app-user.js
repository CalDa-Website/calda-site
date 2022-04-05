$(document).ready(function(){var isRtl;if($('html').attr('data-textdirection')=='rtl'){isRtl=true;}else{isRtl=false;}
var customBadgeHTML=function(params){var color="";if(params.value=="active"){color="success"
return "<div class='badge badge-pill badge-light-"+color+"' >"+params.value+"</div>"}else if(params.value=="blocked"){color="danger";return "<div class='badge badge-pill badge-light-"+color+"' >"+params.value+"</div>"}else if(params.value=="deactivated"){color="warning";return "<div class='badge badge-pill badge-light-"+color+"' >"+params.value+"</div>"}}
var customBulletHTML=function(params){var color="";if(params.value==true){color="success"
return "<div class='bullet bullet-sm bullet-"+color+"' >"+"</div>"}else if(params.value==false){color="secondary";return "<div class='bullet bullet-sm bullet-"+color+"' >"+"</div>"}}
var customIconsHTML=function(params){var usersIcons=document.createElement("span");var editIconHTML="<a href='app-user-edit.html'><i class= 'users-edit-icon feather icon-edit-1 mr-50'></i></a>"
var deleteIconHTML=document.createElement('i');var attr=document.createAttribute("class")
attr.value="users-delete-icon feather icon-trash-2"
deleteIconHTML.setAttributeNode(attr);deleteIconHTML.addEventListener("click",function(){deleteArr=[params.data];gridOptions.api.updateRowData({remove:deleteArr});});usersIcons.appendChild($.parseHTML(editIconHTML)[0]);usersIcons.appendChild(deleteIconHTML);return usersIcons}
var customAvatarHTML=function(params){return "<span class='avatar'><img src='"+params.data.avatar+"' height='32' width='32'></span>"+params.value}
var columnDefs=[{headerName:'ID',field:'id',width:125,filter:true,checkboxSelection:true,headerCheckboxSelectionFilteredOnly:true,headerCheckboxSelection:true,},{headerName:'Username',field:'username',filter:true,width:175,cellRenderer:customAvatarHTML,},{headerName:'Email',field:'email',filter:true,width:225,},{headerName:'Name',field:'name',filter:true,width:200,},{headerName:'Country',field:'country',filter:true,width:150,},{headerName:'Role',field:'role',filter:true,width:150,},{headerName:'Status',field:'status',filter:true,width:150,cellRenderer:customBadgeHTML,cellStyle:{"text-align":"center"}},{headerName:'Verified',field:'is_verified',filter:true,width:125,cellRenderer:customBulletHTML,cellStyle:{"text-align":"center"}},{headerName:'Department',field:'department',filter:true,width:150,},{headerName:'Actions',field:'transactions',width:150,cellRenderer:customIconsHTML,}];var gridOptions={defaultColDef:{sortable:true},enableRtl:isRtl,columnDefs:columnDefs,rowSelection:"multiple",floatingFilter:true,filter:true,pagination:true,paginationPageSize:20,pivotPanelShow:"always",colResizeDefault:"shift",animateRows:true,resizable:true};if(document.getElementById("myGrid")){var gridTable=document.getElementById("myGrid");agGrid.simpleHttpRequest({url:"../../../app-assets/data/users-list.json"}).then(function(data){gridOptions.api.setRowData(data);});function updateSearchQuery(val){gridOptions.api.setQuickFilter(val);}
$(".ag-grid-filter").on("keyup",function(){updateSearchQuery($(this).val());});function changePageSize(value){gridOptions.api.paginationSetPageSize(Number(value));}
$(".sort-dropdown .dropdown-item").on("click",function(){var $this=$(this);changePageSize($this.text());$(".filter-btn").text("1 - "+$this.text()+" of 50");});$(".ag-grid-export-btn").on("click",function(params){gridOptions.api.exportDataAsCsv();});var filterData=function agSetColumnFilter(column,val){var filter=gridOptions.api.getFilterInstance(column)
var modelObj=null
if(val!=="all"){modelObj={type:"equals",filter:val}}
filter.setModel(modelObj)
gridOptions.api.onFilterChanged()}
$("#users-list-role").on("change",function(){var usersListRole=$("#users-list-role").val();filterData("role",usersListRole)});$("#users-list-verified").on("change",function(){var usersListVerified=$("#users-list-verified").val();filterData("is_verified",usersListVerified)});$("#users-list-status").on("change",function(){var usersListStatus=$("#users-list-status").val();filterData("status",usersListStatus)});$("#users-list-department").on("change",function(){var usersListDepartment=$("#users-list-department").val();filterData("department",usersListDepartment)});$(".users-data-filter").click(function(){$('#users-list-role').prop('selectedIndex',0);$('#users-list-role').change();$('#users-list-status').prop('selectedIndex',0);$('#users-list-status').change();$('#users-list-verified').prop('selectedIndex',0);$('#users-list-verified').change();$('#users-list-department').prop('selectedIndex',0);$('#users-list-department').change();});new agGrid.Grid(gridTable,gridOptions);}
if($("#users-language-select2").length>0){$("#users-language-select2").select2({dropdownAutoWidth:true,width:'100%'});}
if($("#users-music-select2").length>0){$("#users-music-select2").select2({dropdownAutoWidth:true,width:'100%'});}
if($("#users-movies-select2").length>0){$("#users-movies-select2").select2({dropdownAutoWidth:true,width:'100%'});}
if($(".birthdate-picker").length>0){$('.birthdate-picker').pickadate({format:'mmmm, d, yyyy'});}
if($(".users-edit").length>0){$("input,select,textarea").not("[type=submit]").jqBootstrapValidation();}});