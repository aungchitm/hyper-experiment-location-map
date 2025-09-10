var wms_layers = [];


        var lyr_GoogleSatelliteMap_0 = new ol.layer.Tile({
            'title': 'Google Satellite Map',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_KSM_GISKSM_Basin_1 = new ol.format.GeoJSON();
var features_KSM_GISKSM_Basin_1 = format_KSM_GISKSM_Basin_1.readFeatures(json_KSM_GISKSM_Basin_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KSM_GISKSM_Basin_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KSM_GISKSM_Basin_1.addFeatures(features_KSM_GISKSM_Basin_1);
var lyr_KSM_GISKSM_Basin_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KSM_GISKSM_Basin_1, 
                style: style_KSM_GISKSM_Basin_1,
                popuplayertitle: "KSM_GIS — KSM_Basin",
                interactive: true,
                title: '<img src="styles/legend/KSM_GISKSM_Basin_1.png" /> KSM_GIS — KSM_Basin'
            });
var format_KSM_GISReservoir_KSM_2 = new ol.format.GeoJSON();
var features_KSM_GISReservoir_KSM_2 = format_KSM_GISReservoir_KSM_2.readFeatures(json_KSM_GISReservoir_KSM_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KSM_GISReservoir_KSM_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KSM_GISReservoir_KSM_2.addFeatures(features_KSM_GISReservoir_KSM_2);
var lyr_KSM_GISReservoir_KSM_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KSM_GISReservoir_KSM_2, 
                style: style_KSM_GISReservoir_KSM_2,
                popuplayertitle: "KSM_GIS — Reservoir_KSM",
                interactive: true,
                title: '<img src="styles/legend/KSM_GISReservoir_KSM_2.png" /> KSM_GIS — Reservoir_KSM'
            });
var format_KSM_GISKSM_Main_river_3 = new ol.format.GeoJSON();
var features_KSM_GISKSM_Main_river_3 = format_KSM_GISKSM_Main_river_3.readFeatures(json_KSM_GISKSM_Main_river_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KSM_GISKSM_Main_river_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KSM_GISKSM_Main_river_3.addFeatures(features_KSM_GISKSM_Main_river_3);
var lyr_KSM_GISKSM_Main_river_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KSM_GISKSM_Main_river_3, 
                style: style_KSM_GISKSM_Main_river_3,
                popuplayertitle: "KSM_GIS — KSM_Main_river",
                interactive: true,
                title: '<img src="styles/legend/KSM_GISKSM_Main_river_3.png" /> KSM_GIS — KSM_Main_river'
            });
var format_KSM_GISKSM_River2_4 = new ol.format.GeoJSON();
var features_KSM_GISKSM_River2_4 = format_KSM_GISKSM_River2_4.readFeatures(json_KSM_GISKSM_River2_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KSM_GISKSM_River2_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KSM_GISKSM_River2_4.addFeatures(features_KSM_GISKSM_River2_4);
var lyr_KSM_GISKSM_River2_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KSM_GISKSM_River2_4, 
                style: style_KSM_GISKSM_River2_4,
                popuplayertitle: "KSM_GIS — KSM_River-2",
                interactive: true,
                title: '<img src="styles/legend/KSM_GISKSM_River2_4.png" /> KSM_GIS — KSM_River-2'
            });
var format_KSM_GISRIDKU_WaterLevel_5 = new ol.format.GeoJSON();
var features_KSM_GISRIDKU_WaterLevel_5 = format_KSM_GISRIDKU_WaterLevel_5.readFeatures(json_KSM_GISRIDKU_WaterLevel_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KSM_GISRIDKU_WaterLevel_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KSM_GISRIDKU_WaterLevel_5.addFeatures(features_KSM_GISRIDKU_WaterLevel_5);
var lyr_KSM_GISRIDKU_WaterLevel_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KSM_GISRIDKU_WaterLevel_5, 
                style: style_KSM_GISRIDKU_WaterLevel_5,
                popuplayertitle: "KSM_GIS — RID-KU_WaterLevel",
                interactive: true,
                title: '<img src="styles/legend/KSM_GISRIDKU_WaterLevel_5.png" /> KSM_GIS — RID-KU_WaterLevel'
            });
var format_KSM_GISWeir_KSM_6 = new ol.format.GeoJSON();
var features_KSM_GISWeir_KSM_6 = format_KSM_GISWeir_KSM_6.readFeatures(json_KSM_GISWeir_KSM_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KSM_GISWeir_KSM_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KSM_GISWeir_KSM_6.addFeatures(features_KSM_GISWeir_KSM_6);cluster_KSM_GISWeir_KSM_6 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_KSM_GISWeir_KSM_6
});
var lyr_KSM_GISWeir_KSM_6 = new ol.layer.Vector({
                declutter: false,
                source:cluster_KSM_GISWeir_KSM_6, 
                style: style_KSM_GISWeir_KSM_6,
                popuplayertitle: "KSM_GIS — Weir_KSM",
                interactive: true,
                title: '<img src="styles/legend/KSM_GISWeir_KSM_6.png" /> KSM_GIS — Weir_KSM'
            });
var format_TentativeExperimentlocation_7 = new ol.format.GeoJSON();
var features_TentativeExperimentlocation_7 = format_TentativeExperimentlocation_7.readFeatures(json_TentativeExperimentlocation_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TentativeExperimentlocation_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TentativeExperimentlocation_7.addFeatures(features_TentativeExperimentlocation_7);
var lyr_TentativeExperimentlocation_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TentativeExperimentlocation_7, 
                style: style_TentativeExperimentlocation_7,
                popuplayertitle: "Tentative Experiment location",
                interactive: true,
    title: 'Tentative Experiment location<br />\
    <img src="styles/legend/TentativeExperimentlocation_7_0.png" /> L1-Injection<br />\
    <img src="styles/legend/TentativeExperimentlocation_7_1.png" /> L1-Measure<br />\
    <img src="styles/legend/TentativeExperimentlocation_7_2.png" /> L2 DS-Injection<br />\
    <img src="styles/legend/TentativeExperimentlocation_7_3.png" /> L2 DS-Measure<br />\
    <img src="styles/legend/TentativeExperimentlocation_7_4.png" /> L2-Injection<br />\
    <img src="styles/legend/TentativeExperimentlocation_7_5.png" /> L2-Measure<br />\
    <img src="styles/legend/TentativeExperimentlocation_7_6.png" /> L3-Injection<br />\
    <img src="styles/legend/TentativeExperimentlocation_7_7.png" /> L3-Measure<br />\
    <img src="styles/legend/TentativeExperimentlocation_7_8.png" /> L4-Injection<br />\
    <img src="styles/legend/TentativeExperimentlocation_7_9.png" /> L4-Measure<br />\
    <img src="styles/legend/TentativeExperimentlocation_7_10.png" /> L5-Injection<br />\
    <img src="styles/legend/TentativeExperimentlocation_7_11.png" /> L5-Measure<br />\
    <img src="styles/legend/TentativeExperimentlocation_7_12.png" /> L6-Injection<br />\
    <img src="styles/legend/TentativeExperimentlocation_7_13.png" /> L6-Measure<br />\
    <img src="styles/legend/TentativeExperimentlocation_7_14.png" /> <br />'
        });

lyr_GoogleSatelliteMap_0.setVisible(true);lyr_KSM_GISKSM_Basin_1.setVisible(true);lyr_KSM_GISReservoir_KSM_2.setVisible(true);lyr_KSM_GISKSM_Main_river_3.setVisible(true);lyr_KSM_GISKSM_River2_4.setVisible(true);lyr_KSM_GISRIDKU_WaterLevel_5.setVisible(true);lyr_KSM_GISWeir_KSM_6.setVisible(true);lyr_TentativeExperimentlocation_7.setVisible(true);
var layersList = [lyr_GoogleSatelliteMap_0,lyr_KSM_GISKSM_Basin_1,lyr_KSM_GISReservoir_KSM_2,lyr_KSM_GISKSM_Main_river_3,lyr_KSM_GISKSM_River2_4,lyr_KSM_GISRIDKU_WaterLevel_5,lyr_KSM_GISWeir_KSM_6,lyr_TentativeExperimentlocation_7];
lyr_KSM_GISKSM_Basin_1.set('fieldAliases', {'fid': 'fid', 'SB_CODE': 'SB_CODE', 'SB_NAME_T': 'SB_NAME_T', 'MB_CODE': 'MB_CODE', 'MBASIN_T': 'MBASIN_T', 'MBASIN_E': 'MBASIN_E', 'AREA_SQKM': 'AREA_SQKM', 'DONE': 'DONE', 'Area_sqm': 'Area_sqm', 'Basin': 'Basin', });
lyr_KSM_GISReservoir_KSM_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'Area': 'Area', 'Capacity': 'Capacity', 'Name_EN': 'Name_EN', });
lyr_KSM_GISKSM_Main_river_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'FID_1': 'FID_1', 'F2': 'F2', 'Length': 'Length', 'name_T': 'name_T', });
lyr_KSM_GISKSM_River2_4.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'id': 'id', 'FID_1': 'FID_1', 'F2': 'F2', 'Length': 'Length', 'name_T': 'name_T', 'Name_E': 'Name_E', 'Shape_Leng': 'Shape_Leng', });
lyr_KSM_GISRIDKU_WaterLevel_5.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'No': 'No', 'Station_na': 'Station_na', 'Station_co': 'Station_co', 'Location': 'Location', 'ระด': 'ระด', 'Lat': 'Lat', 'Long': 'Long', 'System': 'System', });
lyr_KSM_GISWeir_KSM_6.set('fieldAliases', {'fid': 'fid', 'FID_โครงกา': 'FID_โครงกา', 'ลำดับที่': 'ลำดับที่', 'โครงการ': 'โครงการ', 'รหัสลุ่มน้': 'รหัสลุ่มน้', 'ตำบล': 'ตำบล', 'อำเภอ': 'อำเภอ', 'จังหวัด': 'จังหวัด', 'ละติจูด': 'ละติจูด', 'ลองติจูด': 'ลองติจูด', 'ลุ่มน้ำหลั': 'ลุ่มน้ำหลั', 'ลุ่มน้ำรอง': 'ลุ่มน้ำรอง', 'ลักษณะอาคา': 'ลักษณะอาคา', 'ลักษณะโครง': 'ลักษณะโครง', 'ปริมาณน้ำเ': 'ปริมาณน้ำเ', 'MODEL__Yes': 'MODEL__Yes', 'พื้นที่โคร': 'พื้นที่โคร', 'พื้นที่ชลป': 'พื้นที่ชลป', 'พื้นที่ช_1': 'พื้นที่ช_1', 'พื้นที่รับ': 'พื้นที่รับ', 'ปีที่เริ่ม': 'ปีที่เริ่ม', 'ปีที่สร้าง': 'ปีที่สร้าง', 'พระราชดำริ': 'พระราชดำริ', 'หมายเหตุ': 'หมายเหตุ', 'หน่วยงาน_ร': 'หน่วยงาน_ร', 'F24': 'F24', 'F25': 'F25', 'F26': 'F26', 'F27': 'F27', 'F28': 'F28', 'FID_SubBas': 'FID_SubBas', 'OBJECTID': 'OBJECTID', 'SB_CODE': 'SB_CODE', 'SB_NAME_T': 'SB_NAME_T', 'MB_CODE': 'MB_CODE', 'MBASIN_T': 'MBASIN_T', 'SB_SQKM': 'SB_SQKM', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'X': 'X', 'Y': 'Y', 'Name': 'Name', });
lyr_TentativeExperimentlocation_7.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_KSM_GISKSM_Basin_1.set('fieldImages', {'fid': '', 'SB_CODE': 'TextEdit', 'SB_NAME_T': 'TextEdit', 'MB_CODE': 'TextEdit', 'MBASIN_T': 'TextEdit', 'MBASIN_E': 'TextEdit', 'AREA_SQKM': 'TextEdit', 'DONE': 'TextEdit', 'Area_sqm': 'TextEdit', 'Basin': 'TextEdit', });
lyr_KSM_GISReservoir_KSM_2.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Name': 'TextEdit', 'Area': 'TextEdit', 'Capacity': 'TextEdit', 'Name_EN': 'TextEdit', });
lyr_KSM_GISKSM_Main_river_3.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'FID_1': 'TextEdit', 'F2': 'TextEdit', 'Length': 'TextEdit', 'name_T': 'TextEdit', });
lyr_KSM_GISKSM_River2_4.set('fieldImages', {'fid': '', 'OBJECTID': 'TextEdit', 'id': 'TextEdit', 'FID_1': 'TextEdit', 'F2': 'TextEdit', 'Length': 'TextEdit', 'name_T': 'TextEdit', 'Name_E': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_KSM_GISRIDKU_WaterLevel_5.set('fieldImages', {'fid': '', 'OBJECTID': 'TextEdit', 'No': 'TextEdit', 'Station_na': 'TextEdit', 'Station_co': 'TextEdit', 'Location': 'TextEdit', 'ระด': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'System': 'TextEdit', });
lyr_KSM_GISWeir_KSM_6.set('fieldImages', {'fid': 'TextEdit', 'FID_โครงกา': 'TextEdit', 'ลำดับที่': 'TextEdit', 'โครงการ': 'TextEdit', 'รหัสลุ่มน้': 'TextEdit', 'ตำบล': 'TextEdit', 'อำเภอ': 'TextEdit', 'จังหวัด': 'TextEdit', 'ละติจูด': 'TextEdit', 'ลองติจูด': 'TextEdit', 'ลุ่มน้ำหลั': 'TextEdit', 'ลุ่มน้ำรอง': 'TextEdit', 'ลักษณะอาคา': 'TextEdit', 'ลักษณะโครง': 'TextEdit', 'ปริมาณน้ำเ': 'TextEdit', 'MODEL__Yes': 'TextEdit', 'พื้นที่โคร': 'TextEdit', 'พื้นที่ชลป': 'TextEdit', 'พื้นที่ช_1': 'TextEdit', 'พื้นที่รับ': 'TextEdit', 'ปีที่เริ่ม': 'TextEdit', 'ปีที่สร้าง': 'TextEdit', 'พระราชดำริ': 'TextEdit', 'หมายเหตุ': 'TextEdit', 'หน่วยงาน_ร': 'TextEdit', 'F24': 'TextEdit', 'F25': 'TextEdit', 'F26': 'TextEdit', 'F27': 'TextEdit', 'F28': 'TextEdit', 'FID_SubBas': 'TextEdit', 'OBJECTID': 'TextEdit', 'SB_CODE': 'TextEdit', 'SB_NAME_T': 'TextEdit', 'MB_CODE': 'TextEdit', 'MBASIN_T': 'TextEdit', 'SB_SQKM': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Name': 'TextEdit', });
lyr_TentativeExperimentlocation_7.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_KSM_GISKSM_Basin_1.set('fieldLabels', {'fid': 'no label', 'SB_CODE': 'no label', 'SB_NAME_T': 'no label', 'MB_CODE': 'no label', 'MBASIN_T': 'no label', 'MBASIN_E': 'no label', 'AREA_SQKM': 'no label', 'DONE': 'no label', 'Area_sqm': 'no label', 'Basin': 'no label', });
lyr_KSM_GISReservoir_KSM_2.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'Area': 'no label', 'Capacity': 'no label', 'Name_EN': 'inline label - always visible', });
lyr_KSM_GISKSM_Main_river_3.set('fieldLabels', {'fid': 'header label - always visible', 'id': 'no label', 'FID_1': 'no label', 'F2': 'no label', 'Length': 'no label', 'name_T': 'no label', });
lyr_KSM_GISKSM_River2_4.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'id': 'no label', 'FID_1': 'no label', 'F2': 'no label', 'Length': 'no label', 'name_T': 'no label', 'Name_E': 'inline label - always visible', 'Shape_Leng': 'no label', });
lyr_KSM_GISRIDKU_WaterLevel_5.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'No': 'no label', 'Station_na': 'inline label - always visible', 'Station_co': 'no label', 'Location': 'no label', 'ระด': 'no label', 'Lat': 'no label', 'Long': 'no label', 'System': 'no label', });
lyr_KSM_GISWeir_KSM_6.set('fieldLabels', {'fid': 'inline label - always visible', 'FID_โครงกา': 'no label', 'ลำดับที่': 'no label', 'โครงการ': 'no label', 'รหัสลุ่มน้': 'no label', 'ตำบล': 'no label', 'อำเภอ': 'no label', 'จังหวัด': 'no label', 'ละติจูด': 'no label', 'ลองติจูด': 'no label', 'ลุ่มน้ำหลั': 'no label', 'ลุ่มน้ำรอง': 'no label', 'ลักษณะอาคา': 'no label', 'ลักษณะโครง': 'no label', 'ปริมาณน้ำเ': 'no label', 'MODEL__Yes': 'no label', 'พื้นที่โคร': 'no label', 'พื้นที่ชลป': 'no label', 'พื้นที่ช_1': 'no label', 'พื้นที่รับ': 'no label', 'ปีที่เริ่ม': 'no label', 'ปีที่สร้าง': 'no label', 'พระราชดำริ': 'no label', 'หมายเหตุ': 'no label', 'หน่วยงาน_ร': 'no label', 'F24': 'no label', 'F25': 'no label', 'F26': 'no label', 'F27': 'no label', 'F28': 'no label', 'FID_SubBas': 'no label', 'OBJECTID': 'no label', 'SB_CODE': 'no label', 'SB_NAME_T': 'no label', 'MB_CODE': 'no label', 'MBASIN_T': 'no label', 'SB_SQKM': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'X': 'no label', 'Y': 'no label', 'Name': 'inline label - always visible', });
lyr_TentativeExperimentlocation_7.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_TentativeExperimentlocation_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});