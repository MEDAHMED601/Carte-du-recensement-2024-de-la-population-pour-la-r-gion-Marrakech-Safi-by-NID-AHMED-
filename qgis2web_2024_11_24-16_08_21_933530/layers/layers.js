var wms_layers = [];


        var lyr_EsriShadedRelif_0 = new ol.layer.Tile({
            'title': 'Esri Shaded Relif',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_province_marrakech_safi_1 = new ol.format.GeoJSON();
var features_province_marrakech_safi_1 = format_province_marrakech_safi_1.readFeatures(json_province_marrakech_safi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_province_marrakech_safi_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_province_marrakech_safi_1.addFeatures(features_province_marrakech_safi_1);
var lyr_province_marrakech_safi_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_province_marrakech_safi_1, 
                style: style_province_marrakech_safi_1,
                popuplayertitle: "  province_marrakech_safi",
                interactive: true,
    title: '  province_marrakech_safi<br />\
    <img src="styles/legend/province_marrakech_safi_1_0.png" /> Youssoufiya:246098<br />\
    <img src="styles/legend/province_marrakech_safi_1_1.png" /> Rehamna:345772<br />\
    <img src="styles/legend/province_marrakech_safi_1_2.png" /> Chichaoua:378932<br />\
    <img src="styles/legend/province_marrakech_safi_1_3.png" /> Essaouira:425449<br />\
    <img src="styles/legend/province_marrakech_safi_1_4.png" /> El Kelaa des Srarhna:560075<br />\
    <img src="styles/legend/province_marrakech_safi_1_5.png" /> Al Haouz:642171<br />\
    <img src="styles/legend/province_marrakech_safi_1_6.png" /> Safi:719299<br />\
    <img src="styles/legend/province_marrakech_safi_1_7.png" /> Marrakech:1560704<br />'
        });
var format_Cheflieu_2 = new ol.format.GeoJSON();
var features_Cheflieu_2 = format_Cheflieu_2.readFeatures(json_Cheflieu_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cheflieu_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cheflieu_2.addFeatures(features_Cheflieu_2);
var lyr_Cheflieu_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cheflieu_2, 
                style: style_Cheflieu_2,
                popuplayertitle: " Chef lieu",
                interactive: true,
                title: ' Chef lieu'
            });
var format_limitemaroc_3 = new ol.format.GeoJSON();
var features_limitemaroc_3 = format_limitemaroc_3.readFeatures(json_limitemaroc_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_limitemaroc_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_limitemaroc_3.addFeatures(features_limitemaroc_3);
var lyr_limitemaroc_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_limitemaroc_3, 
                style: style_limitemaroc_3,
                popuplayertitle: "  limite maroc ",
                interactive: true,
                title: '<img src="styles/legend/limitemaroc_3.png" />   limite maroc '
            });

lyr_EsriShadedRelif_0.setVisible(true);lyr_province_marrakech_safi_1.setVisible(true);lyr_Cheflieu_2.setVisible(true);lyr_limitemaroc_3.setVisible(true);
var layersList = [lyr_EsriShadedRelif_0,lyr_province_marrakech_safi_1,lyr_Cheflieu_2,lyr_limitemaroc_3];
lyr_province_marrakech_safi_1.set('fieldAliases', {'fid': 'fid', 'Code_Provi': 'Code_Provi', 'Nom_Provin': 'Nom_Provin', 'Data_Devoir_Carte_Thematique — Data_provinces_Code_Provi': 'Data_Devoir_Carte_Thematique — Data_provinces_Code_Provi', 'Data_Devoir_Carte_Thematique — Data_provinces_Nom_Provin': 'Data_Devoir_Carte_Thematique — Data_provinces_Nom_Provin', 'Data_Devoir_Carte_Thematique — Data_provinces_Area': 'Data_Devoir_Carte_Thematique — Data_provinces_Area', 'Data_Devoir_Carte_Thematique — Data_provinces_Population_2024': 'Data_Devoir_Carte_Thematique — Data_provinces_Population_2024', 'Data_Devoir_Carte_Thematique — Data_provinces_Chef lieu': 'Data_Devoir_Carte_Thematique — Data_provinces_Chef lieu', 'Data_Devoir_Carte_Thematique — Data_provinces_lat': 'Data_Devoir_Carte_Thematique — Data_provinces_lat', 'Data_Devoir_Carte_Thematique — Data_provinces_long': 'Data_Devoir_Carte_Thematique — Data_provinces_long', });
lyr_Cheflieu_2.set('fieldAliases', {'fid': 'fid', 'Code_Provi': 'Code_Provi', 'Nom_Provin': 'Nom_Provin', 'Area': 'Area', 'Population_2024': 'Population_2024', 'Chef lieu': 'Chef lieu', 'lat': 'lat', 'long': 'long', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', });
lyr_limitemaroc_3.set('fieldAliases', {'fid': 'fid', });
lyr_province_marrakech_safi_1.set('fieldImages', {'fid': 'Hidden', 'Code_Provi': 'Hidden', 'Nom_Provin': 'TextEdit', 'Data_Devoir_Carte_Thematique — Data_provinces_Code_Provi': 'Hidden', 'Data_Devoir_Carte_Thematique — Data_provinces_Nom_Provin': 'Hidden', 'Data_Devoir_Carte_Thematique — Data_provinces_Area': 'TextEdit', 'Data_Devoir_Carte_Thematique — Data_provinces_Population_2024': 'Range', 'Data_Devoir_Carte_Thematique — Data_provinces_Chef lieu': 'TextEdit', 'Data_Devoir_Carte_Thematique — Data_provinces_lat': 'Hidden', 'Data_Devoir_Carte_Thematique — Data_provinces_long': 'Hidden', });
lyr_Cheflieu_2.set('fieldImages', {'fid': 'Hidden', 'Code_Provi': 'Hidden', 'Nom_Provin': 'TextEdit', 'Area': 'Hidden', 'Population_2024': 'Hidden', 'Chef lieu': 'TextEdit', 'lat': 'Hidden', 'long': 'Hidden', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', });
lyr_limitemaroc_3.set('fieldImages', {'fid': '', });
lyr_province_marrakech_safi_1.set('fieldLabels', {'Nom_Provin': 'inline label - always visible', 'Data_Devoir_Carte_Thematique — Data_provinces_Area': 'inline label - always visible', 'Data_Devoir_Carte_Thematique — Data_provinces_Population_2024': 'inline label - always visible', 'Data_Devoir_Carte_Thematique — Data_provinces_Chef lieu': 'inline label - always visible', });
lyr_Cheflieu_2.set('fieldLabels', {'Nom_Provin': 'header label - always visible', 'Chef lieu': 'header label - always visible', });
lyr_limitemaroc_3.set('fieldLabels', {'fid': 'no label', });
lyr_limitemaroc_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});