var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Paran_1 = new ol.format.GeoJSON();
var features_Paran_1 = format_Paran_1.readFeatures(json_Paran_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Paran_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Paran_1.addFeatures(features_Paran_1);
var lyr_Paran_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Paran_1, 
                style: style_Paran_1,
                interactive: true,
                title: '<img src="styles/legend/Paran_1.png" /> Paraná'
            });
var lyr_FluxodeVeculosdia_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Fluxo de Veículos/dia ",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/FluxodeVeculosdia_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6084436.569100, -3088262.242268, -5341809.197609, -2569495.483176]
                            })
                        });
var lyr_Sinistrostotaisacada100milhabitantesem2019_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "Sinistros totais a cada 100 mil habitantes em 2019",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Sinistrostotaisacada100milhabitantesem2019_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6084428.556737, -3087980.905016, -5342095.112122, -2569495.491998]
                            })
                        });
var lyr_Sinistrostotaisacada100milhabitantesem2020_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "Sinistros totais a cada 100 mil habitantes em 2020",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Sinistrostotaisacada100milhabitantesem2020_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6084428.556737, -3087980.905016, -5342095.112122, -2569495.491998]
                            })
                        });
var lyr_Sinistrostotaisacada100milhabitantesem2021_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "Sinistros totais a cada 100 mil habitantes em 2021",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Sinistrostotaisacada100milhabitantesem2021_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6084436.569100, -3088262.242268, -5341809.197609, -2569495.483176]
                            })
                        });
var lyr_SinistrosTotaisem2019_6 = new ol.layer.Image({
                            opacity: 1,
                            title: "Sinistros Totais em 2019",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/SinistrosTotaisem2019_6.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6084436.569100, -3088262.242268, -5341809.197609, -2569495.483176]
                            })
                        });
var lyr_SinistrosTotaisem2020_7 = new ol.layer.Image({
                            opacity: 1,
                            title: "Sinistros Totais em 2020",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/SinistrosTotaisem2020_7.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6084436.569100, -3088262.242268, -5341809.197609, -2569495.483176]
                            })
                        });
var lyr_Sinistrostotaisem2021_8 = new ol.layer.Image({
                            opacity: 1,
                            title: "Sinistros totais em 2021",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Sinistrostotaisem2021_8.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6084436.569100, -3088262.242268, -5341809.197609, -2569495.483176]
                            })
                        });
var lyr_Atropelamentosacada100milhabitantesem2019_9 = new ol.layer.Image({
                            opacity: 1,
                            title: "Atropelamentos a cada 100 mil habitantes em 2019",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Atropelamentosacada100milhabitantesem2019_9.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6084436.569100, -3088262.242268, -5341809.197609, -2569495.483176]
                            })
                        });
var lyr_Atropelamentosacada100milhabitantesem2020_10 = new ol.layer.Image({
                            opacity: 1,
                            title: "Atropelamentos a cada 100 mil habitantes em 2020",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Atropelamentosacada100milhabitantesem2020_10.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6084428.556737, -3087980.905016, -5342095.112122, -2569495.491998]
                            })
                        });
var lyr_Atropelamentosacada100milhabitantesem2021_11 = new ol.layer.Image({
                            opacity: 1,
                            title: "Atropelamentos a cada 100 mil habitantes em 2021",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Atropelamentosacada100milhabitantesem2021_11.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6084436.569100, -3088262.242268, -5341809.197609, -2569495.483176]
                            })
                        });
var lyr_Atropelamentosem2019_12 = new ol.layer.Image({
                            opacity: 1,
                            title: "Atropelamentos em 2019",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Atropelamentosem2019_12.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6084436.569100, -3088262.242268, -5341809.197609, -2569495.483176]
                            })
                        });
var lyr_Atropelamentosem2020_13 = new ol.layer.Image({
                            opacity: 1,
                            title: "Atropelamentos em 2020",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Atropelamentosem2020_13.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6084428.556737, -3087980.905016, -5342095.112122, -2569495.491998]
                            })
                        });
var lyr_Atropelamentosem2021_14 = new ol.layer.Image({
                            opacity: 1,
                            title: "Atropelamentos em 2021",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Atropelamentosem2021_14.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6084436.569100, -3088262.242268, -5341809.197609, -2569495.483176]
                            })
                        });
var format_Aglomeraesurbanas_15 = new ol.format.GeoJSON();
var features_Aglomeraesurbanas_15 = format_Aglomeraesurbanas_15.readFeatures(json_Aglomeraesurbanas_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Aglomeraesurbanas_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Aglomeraesurbanas_15.addFeatures(features_Aglomeraesurbanas_15);
var lyr_Aglomeraesurbanas_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Aglomeraesurbanas_15, 
                style: style_Aglomeraesurbanas_15,
                interactive: true,
                title: '<img src="styles/legend/Aglomeraesurbanas_15.png" /> Aglomerações urbanas'
            });
var format_Rodovias_16 = new ol.format.GeoJSON();
var features_Rodovias_16 = format_Rodovias_16.readFeatures(json_Rodovias_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rodovias_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rodovias_16.addFeatures(features_Rodovias_16);
var lyr_Rodovias_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rodovias_16, 
                style: style_Rodovias_16,
                interactive: true,
                title: '<img src="styles/legend/Rodovias_16.png" /> Rodovias'
            });
var format_PrincipaisCidades_17 = new ol.format.GeoJSON();
var features_PrincipaisCidades_17 = format_PrincipaisCidades_17.readFeatures(json_PrincipaisCidades_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PrincipaisCidades_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrincipaisCidades_17.addFeatures(features_PrincipaisCidades_17);
var lyr_PrincipaisCidades_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PrincipaisCidades_17, 
                style: style_PrincipaisCidades_17,
                interactive: true,
                title: '<img src="styles/legend/PrincipaisCidades_17.png" /> Principais Cidades'
            });

lyr_GoogleRoad_0.setVisible(true);lyr_Paran_1.setVisible(true);lyr_FluxodeVeculosdia_2.setVisible(true);lyr_Sinistrostotaisacada100milhabitantesem2019_3.setVisible(true);lyr_Sinistrostotaisacada100milhabitantesem2020_4.setVisible(true);lyr_Sinistrostotaisacada100milhabitantesem2021_5.setVisible(true);lyr_SinistrosTotaisem2019_6.setVisible(true);lyr_SinistrosTotaisem2020_7.setVisible(true);lyr_Sinistrostotaisem2021_8.setVisible(true);lyr_Atropelamentosacada100milhabitantesem2019_9.setVisible(true);lyr_Atropelamentosacada100milhabitantesem2020_10.setVisible(true);lyr_Atropelamentosacada100milhabitantesem2021_11.setVisible(true);lyr_Atropelamentosem2019_12.setVisible(true);lyr_Atropelamentosem2020_13.setVisible(true);lyr_Atropelamentosem2021_14.setVisible(true);lyr_Aglomeraesurbanas_15.setVisible(true);lyr_Rodovias_16.setVisible(true);lyr_PrincipaisCidades_17.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_Paran_1,lyr_FluxodeVeculosdia_2,lyr_Sinistrostotaisacada100milhabitantesem2019_3,lyr_Sinistrostotaisacada100milhabitantesem2020_4,lyr_Sinistrostotaisacada100milhabitantesem2021_5,lyr_SinistrosTotaisem2019_6,lyr_SinistrosTotaisem2020_7,lyr_Sinistrostotaisem2021_8,lyr_Atropelamentosacada100milhabitantesem2019_9,lyr_Atropelamentosacada100milhabitantesem2020_10,lyr_Atropelamentosacada100milhabitantesem2021_11,lyr_Atropelamentosem2019_12,lyr_Atropelamentosem2020_13,lyr_Atropelamentosem2021_14,lyr_Aglomeraesurbanas_15,lyr_Rodovias_16,lyr_PrincipaisCidades_17];
lyr_Paran_1.set('fieldAliases', {'id': 'id', });
lyr_Aglomeraesurbanas_15.set('fieldAliases', {'CD_SETOR': 'CD_SETOR', 'CD_SIT': 'CD_SIT', 'NM_SIT': 'NM_SIT', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'CD_DIST': 'CD_DIST', 'NM_DIST': 'NM_DIST', 'CD_SUBDIST': 'CD_SUBDIST', 'NM_SUBDIST': 'NM_SUBDIST', });
lyr_Rodovias_16.set('fieldAliases', {'id_snv': 'id_snv', 'Codigo_BR': 'Codigo_BR', 'Unidade_Fe': 'Unidade_Fe', 'Sigla_Tipo': 'Sigla_Tipo', 'Nome_Tipo_': 'Nome_Tipo_', 'Codigo_SNV': 'Codigo_SNV', 'Coincidenc': 'Coincidenc', 'Local_Inic': 'Local_Inic', 'Local_Fim': 'Local_Fim', 'Quilometra': 'Quilometra', 'Quilometr0': 'Quilometr0', 'Extensao': 'Extensao', 'Superficie': 'Superficie', 'Obra': 'Obra', 'Unidade_Lo': 'Unidade_Lo', 'Administra': 'Administra', 'Ato_Legal': 'Ato_Legal', 'Estadual_C': 'Estadual_C', 'Superfici0': 'Superfici0', 'Versao_SNV': 'Versao_SNV', 'dt_ini': 'dt_ini', 'dt_fim': 'dt_fim', });
lyr_PrincipaisCidades_17.set('fieldAliases', {'NOMELOCAL': 'NOMELOCAL', 'ELEVACAO': 'ELEVACAO', 'NOMEROD': 'NOMEROD', 'COORDX': 'COORDX', 'COORDY': 'COORDY', 'TIPO': 'TIPO', 'LAYER': 'LAYER', });
lyr_Paran_1.set('fieldImages', {'id': 'TextEdit', });
lyr_Aglomeraesurbanas_15.set('fieldImages', {'CD_SETOR': 'TextEdit', 'CD_SIT': 'TextEdit', 'NM_SIT': 'TextEdit', 'CD_UF': 'TextEdit', 'NM_UF': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'CD_DIST': 'TextEdit', 'NM_DIST': 'TextEdit', 'CD_SUBDIST': 'TextEdit', 'NM_SUBDIST': 'TextEdit', });
lyr_Rodovias_16.set('fieldImages', {'id_snv': 'Range', 'Codigo_BR': 'TextEdit', 'Unidade_Fe': 'TextEdit', 'Sigla_Tipo': 'TextEdit', 'Nome_Tipo_': 'TextEdit', 'Codigo_SNV': 'TextEdit', 'Coincidenc': 'TextEdit', 'Local_Inic': 'TextEdit', 'Local_Fim': 'TextEdit', 'Quilometra': 'TextEdit', 'Quilometr0': 'TextEdit', 'Extensao': 'TextEdit', 'Superficie': 'TextEdit', 'Obra': 'TextEdit', 'Unidade_Lo': 'TextEdit', 'Administra': 'TextEdit', 'Ato_Legal': 'TextEdit', 'Estadual_C': 'TextEdit', 'Superfici0': 'TextEdit', 'Versao_SNV': 'TextEdit', 'dt_ini': 'DateTime', 'dt_fim': 'DateTime', });
lyr_PrincipaisCidades_17.set('fieldImages', {'NOMELOCAL': 'TextEdit', 'ELEVACAO': 'TextEdit', 'NOMEROD': 'TextEdit', 'COORDX': 'TextEdit', 'COORDY': 'TextEdit', 'TIPO': 'TextEdit', 'LAYER': 'TextEdit', });
lyr_Paran_1.set('fieldLabels', {'id': 'no label', });
lyr_Aglomeraesurbanas_15.set('fieldLabels', {'CD_SETOR': 'no label', 'CD_SIT': 'no label', 'NM_SIT': 'no label', 'CD_UF': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'CD_MUN': 'no label', 'NM_MUN': 'no label', 'CD_DIST': 'no label', 'NM_DIST': 'no label', 'CD_SUBDIST': 'no label', 'NM_SUBDIST': 'no label', });
lyr_Rodovias_16.set('fieldLabels', {'id_snv': 'no label', 'Codigo_BR': 'no label', 'Unidade_Fe': 'no label', 'Sigla_Tipo': 'no label', 'Nome_Tipo_': 'no label', 'Codigo_SNV': 'no label', 'Coincidenc': 'no label', 'Local_Inic': 'no label', 'Local_Fim': 'no label', 'Quilometra': 'no label', 'Quilometr0': 'no label', 'Extensao': 'no label', 'Superficie': 'no label', 'Obra': 'no label', 'Unidade_Lo': 'no label', 'Administra': 'no label', 'Ato_Legal': 'no label', 'Estadual_C': 'no label', 'Superfici0': 'no label', 'Versao_SNV': 'no label', 'dt_ini': 'no label', 'dt_fim': 'no label', });
lyr_PrincipaisCidades_17.set('fieldLabels', {'NOMELOCAL': 'no label', 'ELEVACAO': 'no label', 'NOMEROD': 'no label', 'COORDX': 'no label', 'COORDY': 'no label', 'TIPO': 'no label', 'LAYER': 'no label', });
lyr_PrincipaisCidades_17.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});