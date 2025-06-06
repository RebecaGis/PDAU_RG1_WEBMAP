ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:31984").setExtent([355073.079499, 7742323.297607, 374112.202562, 7756527.087829]);
var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatelliteHybrid_1 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_EsriImagery_2 = new ol.layer.Tile({
            'title': 'Esri Imagery',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_RegioAdministrativa5_3 = new ol.format.GeoJSON();
var features_RegioAdministrativa5_3 = format_RegioAdministrativa5_3.readFeatures(json_RegioAdministrativa5_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_RegioAdministrativa5_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RegioAdministrativa5_3.addFeatures(features_RegioAdministrativa5_3);
var lyr_RegioAdministrativa5_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RegioAdministrativa5_3, 
                style: style_RegioAdministrativa5_3,
                popuplayertitle: 'Região Administrativa 5',
                interactive: true,
                title: '<img src="styles/legend/RegioAdministrativa5_3.png" /> Região Administrativa 5'
            });
var format_RegioAdministrativa4_4 = new ol.format.GeoJSON();
var features_RegioAdministrativa4_4 = format_RegioAdministrativa4_4.readFeatures(json_RegioAdministrativa4_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_RegioAdministrativa4_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RegioAdministrativa4_4.addFeatures(features_RegioAdministrativa4_4);
var lyr_RegioAdministrativa4_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RegioAdministrativa4_4, 
                style: style_RegioAdministrativa4_4,
                popuplayertitle: 'Região Administrativa 4',
                interactive: true,
                title: '<img src="styles/legend/RegioAdministrativa4_4.png" /> Região Administrativa 4'
            });
var format_RegioAdministrativa3_5 = new ol.format.GeoJSON();
var features_RegioAdministrativa3_5 = format_RegioAdministrativa3_5.readFeatures(json_RegioAdministrativa3_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_RegioAdministrativa3_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RegioAdministrativa3_5.addFeatures(features_RegioAdministrativa3_5);
var lyr_RegioAdministrativa3_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RegioAdministrativa3_5, 
                style: style_RegioAdministrativa3_5,
                popuplayertitle: 'Região Administrativa 3',
                interactive: true,
                title: '<img src="styles/legend/RegioAdministrativa3_5.png" /> Região Administrativa 3'
            });
var format_RegioAdministrativa2_6 = new ol.format.GeoJSON();
var features_RegioAdministrativa2_6 = format_RegioAdministrativa2_6.readFeatures(json_RegioAdministrativa2_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_RegioAdministrativa2_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RegioAdministrativa2_6.addFeatures(features_RegioAdministrativa2_6);
var lyr_RegioAdministrativa2_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RegioAdministrativa2_6, 
                style: style_RegioAdministrativa2_6,
                popuplayertitle: 'Região Administrativa 2',
                interactive: true,
                title: '<img src="styles/legend/RegioAdministrativa2_6.png" /> Região Administrativa 2'
            });
var format_RegioAdministrativa1_7 = new ol.format.GeoJSON();
var features_RegioAdministrativa1_7 = format_RegioAdministrativa1_7.readFeatures(json_RegioAdministrativa1_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_RegioAdministrativa1_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RegioAdministrativa1_7.addFeatures(features_RegioAdministrativa1_7);
var lyr_RegioAdministrativa1_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RegioAdministrativa1_7, 
                style: style_RegioAdministrativa1_7,
                popuplayertitle: 'Região Administrativa 1',
                interactive: true,
                title: '<img src="styles/legend/RegioAdministrativa1_7.png" /> Região Administrativa 1'
            });
var format_Parcelasfornecidaspelaprefeitura_8 = new ol.format.GeoJSON();
var features_Parcelasfornecidaspelaprefeitura_8 = format_Parcelasfornecidaspelaprefeitura_8.readFeatures(json_Parcelasfornecidaspelaprefeitura_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_Parcelasfornecidaspelaprefeitura_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parcelasfornecidaspelaprefeitura_8.addFeatures(features_Parcelasfornecidaspelaprefeitura_8);
var lyr_Parcelasfornecidaspelaprefeitura_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parcelasfornecidaspelaprefeitura_8, 
                style: style_Parcelasfornecidaspelaprefeitura_8,
                popuplayertitle: 'Parcelas fornecidas pela prefeitura',
                interactive: true,
                title: '<img src="styles/legend/Parcelasfornecidaspelaprefeitura_8.png" /> Parcelas fornecidas pela prefeitura'
            });
var format_Bairros_IJSN_VILAVELHA_9 = new ol.format.GeoJSON();
var features_Bairros_IJSN_VILAVELHA_9 = format_Bairros_IJSN_VILAVELHA_9.readFeatures(json_Bairros_IJSN_VILAVELHA_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_Bairros_IJSN_VILAVELHA_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bairros_IJSN_VILAVELHA_9.addFeatures(features_Bairros_IJSN_VILAVELHA_9);
var lyr_Bairros_IJSN_VILAVELHA_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bairros_IJSN_VILAVELHA_9, 
                style: style_Bairros_IJSN_VILAVELHA_9,
                popuplayertitle: 'Bairros_IJSN_VILA-VELHA',
                interactive: true,
                title: '<img src="styles/legend/Bairros_IJSN_VILAVELHA_9.png" /> Bairros_IJSN_VILA-VELHA'
            });
var format_LimiteMunicipal_10 = new ol.format.GeoJSON();
var features_LimiteMunicipal_10 = format_LimiteMunicipal_10.readFeatures(json_LimiteMunicipal_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_LimiteMunicipal_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimiteMunicipal_10.addFeatures(features_LimiteMunicipal_10);
var lyr_LimiteMunicipal_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimiteMunicipal_10, 
                style: style_LimiteMunicipal_10,
                popuplayertitle: 'Limite Municipal',
                interactive: true,
                title: '<img src="styles/legend/LimiteMunicipal_10.png" /> Limite Municipal'
            });
var format_OcorrnciadeEspcies_11 = new ol.format.GeoJSON();
var features_OcorrnciadeEspcies_11 = format_OcorrnciadeEspcies_11.readFeatures(json_OcorrnciadeEspcies_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_OcorrnciadeEspcies_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OcorrnciadeEspcies_11.addFeatures(features_OcorrnciadeEspcies_11);
var lyr_OcorrnciadeEspcies_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OcorrnciadeEspcies_11, 
                style: style_OcorrnciadeEspcies_11,
                popuplayertitle: 'Ocorrência de Espécies',
                interactive: false,
                title: '<img src="styles/legend/OcorrnciadeEspcies_11.png" /> Ocorrência de Espécies'
            });
var format_PDAU_RG1_Individuos_Amostrados_12 = new ol.format.GeoJSON();
var features_PDAU_RG1_Individuos_Amostrados_12 = format_PDAU_RG1_Individuos_Amostrados_12.readFeatures(json_PDAU_RG1_Individuos_Amostrados_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_PDAU_RG1_Individuos_Amostrados_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PDAU_RG1_Individuos_Amostrados_12.addFeatures(features_PDAU_RG1_Individuos_Amostrados_12);
var lyr_PDAU_RG1_Individuos_Amostrados_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PDAU_RG1_Individuos_Amostrados_12, 
                style: style_PDAU_RG1_Individuos_Amostrados_12,
                popuplayertitle: 'PDAU_RG1_Individuos_Amostrados',
                interactive: true,
                title: '<img src="styles/legend/PDAU_RG1_Individuos_Amostrados_12.png" /> PDAU_RG1_Individuos_Amostrados'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_GoogleSatelliteHybrid_1.setVisible(false);lyr_EsriImagery_2.setVisible(false);lyr_RegioAdministrativa5_3.setVisible(false);lyr_RegioAdministrativa4_4.setVisible(false);lyr_RegioAdministrativa3_5.setVisible(false);lyr_RegioAdministrativa2_6.setVisible(false);lyr_RegioAdministrativa1_7.setVisible(false);lyr_Parcelasfornecidaspelaprefeitura_8.setVisible(false);lyr_Bairros_IJSN_VILAVELHA_9.setVisible(false);lyr_LimiteMunicipal_10.setVisible(true);lyr_OcorrnciadeEspcies_11.setVisible(true);lyr_PDAU_RG1_Individuos_Amostrados_12.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_GoogleSatelliteHybrid_1,lyr_EsriImagery_2,lyr_RegioAdministrativa5_3,lyr_RegioAdministrativa4_4,lyr_RegioAdministrativa3_5,lyr_RegioAdministrativa2_6,lyr_RegioAdministrativa1_7,lyr_Parcelasfornecidaspelaprefeitura_8,lyr_Bairros_IJSN_VILAVELHA_9,lyr_LimiteMunicipal_10,lyr_OcorrnciadeEspcies_11,lyr_PDAU_RG1_Individuos_Amostrados_12];
lyr_RegioAdministrativa5_3.set('fieldAliases', {'ID': 'ID', 'SubRegiao': 'SubRegiao', 'Area': 'Area', });
lyr_RegioAdministrativa4_4.set('fieldAliases', {'nome': 'nome', 'geocodigo': 'geocodigo', 'areaM2': 'areaM2', 'situacao': 'situacao', 'distrito': 'distrito', 'geocDistr': 'geocDistr', 'municipio': 'municipio', 'geocMun': 'geocMun', 'macroEstad': 'macroEstad', 'microEstad': 'microEstad', 'escala': 'escala', 'origem': 'origem', 'anoReferen': 'anoReferen', 'fonte': 'fonte', 'area ha': 'area ha', 'ID': 'ID', 'nota urb': 'nota urb', });
lyr_RegioAdministrativa3_5.set('fieldAliases', {'nome': 'nome', 'geocodigo': 'geocodigo', 'areaM2': 'areaM2', 'situacao': 'situacao', 'distrito': 'distrito', 'geocDistr': 'geocDistr', 'municipio': 'municipio', 'geocMun': 'geocMun', 'macroEstad': 'macroEstad', 'microEstad': 'microEstad', 'escala': 'escala', 'origem': 'origem', 'anoReferen': 'anoReferen', 'fonte': 'fonte', 'area ha': 'area ha', 'ID': 'ID', 'nota urb': 'nota urb', });
lyr_RegioAdministrativa2_6.set('fieldAliases', {'nome': 'nome', 'geocodigo': 'geocodigo', 'areaM2': 'areaM2', 'situacao': 'situacao', 'distrito': 'distrito', 'geocDistr': 'geocDistr', 'municipio': 'municipio', 'geocMun': 'geocMun', 'macroEstad': 'macroEstad', 'microEstad': 'microEstad', 'escala': 'escala', 'origem': 'origem', 'anoReferen': 'anoReferen', 'fonte': 'fonte', 'area ha': 'area ha', 'ID': 'ID', 'nota urb': 'nota urb', });
lyr_RegioAdministrativa1_7.set('fieldAliases', {'nome': 'nome', 'geocodigo': 'geocodigo', 'areaM2': 'areaM2', 'situacao': 'situacao', 'distrito': 'distrito', 'geocDistr': 'geocDistr', 'municipio': 'municipio', 'geocMun': 'geocMun', 'macroEstad': 'macroEstad', 'microEstad': 'microEstad', 'escala': 'escala', 'origem': 'origem', 'anoReferen': 'anoReferen', 'fonte': 'fonte', 'area ha': 'area ha', 'ID': 'ID', 'nota urb': 'nota urb', });
lyr_Parcelasfornecidaspelaprefeitura_8.set('fieldAliases', {'id': 'id', 'Codigo': 'Codigo', 'Regiao': 'Regiao', 'Subgrupo': 'Subgrupo', 'layer': 'layer', });
lyr_Bairros_IJSN_VILAVELHA_9.set('fieldAliases', {'nome': 'nome', 'geocodigo': 'geocodigo', 'areaM2': 'areaM2', 'situacao': 'situacao', 'distrito': 'distrito', 'geocDistr': 'geocDistr', 'municipio': 'municipio', 'geocMun': 'geocMun', 'macroEstad': 'macroEstad', 'microEstad': 'microEstad', 'escala': 'escala', 'origem': 'origem', 'anoReferen': 'anoReferen', 'fonte': 'fonte', 'area ha': 'area ha', 'ID': 'ID', 'nota urb': 'nota urb', });
lyr_LimiteMunicipal_10.set('fieldAliases', {'geocodigo': 'geocodigo', 'nome': 'nome', 'microEstad': 'microEstad', 'macroEstad': 'macroEstad', 'anoReferen': 'anoReferen', 'origem': 'origem', 'areaKm2': 'areaKm2', 'perimetroK': 'perimetroK', 'fonte': 'fonte', '�rea_m_2': '�rea_m_2', '�rea_ha': '�rea_ha', '_count': '_count', '_sum': '_sum', '_mean': '_mean', });
lyr_OcorrnciadeEspcies_11.set('fieldAliases', {'RG_adm': 'RG_adm', 'Parcela': 'Parcela', 'Indivíduo': 'Indivíduo', 'Endereço': 'Endereço', 'Endereço_': 'Endereço_', 'Espécie': 'Espécie', 'CAP': 'CAP', 'DAP': 'DAP', 'Altura_tot': 'Altura_tot', 'Copa___Ár': 'Copa___Ár', 'Hábito': 'Hábito', 'Nome_Popul': 'Nome_Popul', 'Dispersão': 'Dispersão', 'Origem': 'Origem', 'Status_CNC': 'Status_CNC', 'Status_MMA': 'Status_MMA', 'Árvore_mo': 'Árvore_mo', 'Probabilid': 'Probabilid', 'Probabil_1': 'Probabil_1', 'Consequên': 'Consequên', 'Grau_de_ri': 'Grau_de_ri', 'Remoção': 'Remoção', 'Folha_Rala': 'Folha_Rala', 'Galhos_via': 'Galhos_via', 'Erva_Pass': 'Erva_Pass', 'Tocos_poda': 'Tocos_poda', 'Constricto': 'Constricto', 'Galhos_Sec': 'Galhos_Sec', 'Galhos_Que': 'Galhos_Que', 'Galhos_Esg': 'Galhos_Esg', 'Galhos_Cod': 'Galhos_Cod', 'Bif_V': 'Bif_V', 'Arq_Anorm': 'Arq_Anorm', 'Poda_Uni': 'Poda_Uni', 'Conflito_R': 'Conflito_R', 'Destopo': 'Destopo', 'Fiss_Rach': 'Fiss_Rach', 'Bif_V_2': 'Bif_V_2', 'Fungos': 'Fungos', 'Inclinaç': 'Inclinaç', 'Can_Gal_Ca': 'Can_Gal_Ca', 'Brot_Epi': 'Brot_Epi', 'Cavidade': 'Cavidade', 'Orifício_': 'Orifício_', 'Casca_Inc': 'Casca_Inc', 'Troncos_Co': 'Troncos_Co', 'Pod_Alb': 'Pod_Alb', 'Rest_AP': 'Rest_AP', 'Brot_Epi_2': 'Brot_Epi_2', 'Ater_Colo': 'Ater_Colo', 'Plantio_T_': 'Plantio_T_', 'Corte_Raiz': 'Corte_Raiz', 'Marca_Roç': 'Marca_Roç', 'Raiz_Est': 'Raiz_Est', 'Ori_Inseto': 'Ori_Inseto', 'Fungos_2': 'Fungos_2', 'Cav_2': 'Cav_2', 'Pessoas': 'Pessoas', 'Veiculos': 'Veiculos', 'Via_Pub': 'Via_Pub', 'Rede': 'Rede', 'Bens_Pat': 'Bens_Pat', 'Via_Priv': 'Via_Priv', 'Acomp_Inc': 'Acomp_Inc', 'Poda_Form': 'Poda_Form', 'Poda_Limp': 'Poda_Limp', 'Poda_Red': 'Poda_Red', 'Poda_Elev': 'Poda_Elev', 'Cauteriza': 'Cauteriza', 'Desat_Colo': 'Desat_Colo', 'Aumento_AP': 'Aumento_AP', 'Adubacao': 'Adubacao', 'Melhoria_S': 'Melhoria_S', 'Controle_P': 'Controle_P', 'Estaiament': 'Estaiament', 'Escorament': 'Escorament', 'Ortese': 'Ortese', 'Cabeamento': 'Cabeamento', 'Tutorament': 'Tutorament', 'Ava_Nível': 'Ava_Nível', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_PDAU_RG1_Individuos_Amostrados_12.set('fieldAliases', {'CHAVE_ID': 'CHAVE_ID', 'Região_Ad': 'Região_Ad', 'Parcela': 'Parcela', 'Indivíduo': 'Indivíduo', 'Data': 'Data', 'Responsáv': 'Responsável', 'Endereço': 'Endereço', 'Endereço_': 'Endereço Google', 'Y__UTM_': 'Y__UTM_', 'X__UTM_': 'X__UTM_', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Tipo_de_Lo': 'Tipo de Logradouro', 'Largura_da': 'Largura_da', 'Largura__1': 'Largura__1', 'Espécie': 'Espécie', 'CAP_1': 'CAP_1', 'CAP_2': 'CAP_2', 'CAP_3': 'CAP_3', 'CAP_4': 'CAP_4', 'CAP_5': 'CAP_5', 'CAP_6': 'CAP_6', 'CAP_7': 'CAP_7', 'CAP_8': 'CAP_8', 'CAP_9': 'CAP_9', 'CAP_10': 'CAP_10', 'CAP_11': 'CAP_11', 'CAP_12': 'CAP_12', 'CAP_13': 'CAP_13', 'CAP_14': 'CAP_14', 'CAP_15': 'CAP_15', 'CAP_16': 'CAP_16', 'CAP_17': 'CAP_17', 'CAP_18': 'CAP_18', 'DAP_medio': 'DAP_medio', 'Altura_tot': 'Altura_tot', 'Copa___Ár': 'Copa___Ár', 'Hábito': 'Hábito', 'Nome_popul': 'Nome popular', 'Dispersão': 'Dispersão', 'Origem': 'Origem', 'Status_CNC': 'Status_CNC', 'Status_MMA': 'Status_MMA', 'Árvore_mo': 'Árvore morta', 'Folha_rala': 'Folha rala ou de cor anormal', 'Galhos_int': 'Galhos interferindo na via', 'Erva_de_pa': 'Erva de passarinho', 'Tocos_de_p': 'Tocos de poda', 'Constricto': 'Constrictora', 'Galhos_sec': 'Galhos secos', 'Galhos_que': 'Galhos quebrados', 'Galhos_esg': 'Galhos esguios', 'Galhos_cod': 'Galhos codominantes', 'Bifurcaç': 'Bifurcação em V', 'Arquitetur': 'Arquitetura anormal', 'Poda_unila': 'Poda unilateral', 'Conflito_R': 'Conflito com Rede Elétrica', 'Destopo': 'Destopo', 'Fissuras_o': 'Fissuras ou rachaduras', 'Bifurca_1': 'Bifurcação em V2', 'Fungos_dec': 'Fungos decompositores', 'Inclinaç': 'Inclinação', 'Cancro_gal': 'Cancro/galhas/caroços', 'Brotaçõe': 'Brotações epicómicas', 'Cavidade_d': 'Cavidade do tronco', 'Orifícios': 'Orifícios de insetos', 'Casca_incl': 'Casca inclusa', 'Troncos_co': 'Troncos codominantes', 'Podridão_': 'Podridão de Alburno', 'Restriçã': 'Restrição de Área Permeável', 'Brotaç_1': 'Brotações epicórmicas', 'Aterrament': 'Aterramento do colo', 'Plantio_em': 'Plantio em tubo/caixa', 'Corte_de_R': 'Corte de Raízes', 'Marca_de_r': 'Marca de roçadeira', 'Raiz_estra': 'Raiz estrangulante', 'Orifício_': 'Orifício de insetos', 'Fungos_d_1': 'Fungos decompositores alvo', 'Cavidade_1': 'Cavidade dos alvos', 'Pessoas': 'Pessoas', 'Veiculos': 'Veiculos', 'Via_públi': 'Via pública', 'Rede_elét': 'Rede elétrica', 'Béns_patr': 'Bens patrimoniais', 'Via_privad': 'Via privada', 'Probabilid': 'Probabilidade de falha', 'Probabil_1': 'Probabilidade de atingir o alvo', 'Consequên': 'Consequência de falha', 'Risco': 'Risco', 'Remoção': 'Remoção', 'Acompanham': 'Acompanhamento de inclinação', 'Poda_de_Fo': 'Poda de Formação', 'Poda_de_Li': 'Poda de Limpeza', 'Poda_de_Re': 'Poda de Redução', 'Poda_de_El': 'Poda de Elevação', 'Cauteriza': 'Cauterização', 'Desaterram': 'Desaterramento de Colo', 'Aumento_de': 'Aumento de Área Permeável', 'Adubação': 'Adubação', 'Melhorias_': 'Melhorias físicas do Solo', 'Controle_d': 'Controle de Pragas', 'Estaiament': 'Estaiamento', 'Escorament': 'Escoramento', 'Ortese': 'Ortese', 'Cabeamento': 'Cabeamento', 'Tutorament': 'Tutoramento', 'Avaliaçã': 'Avaliação de Nível 3', });
lyr_RegioAdministrativa5_3.set('fieldImages', {'ID': 'Range', 'SubRegiao': 'TextEdit', 'Area': 'TextEdit', });
lyr_RegioAdministrativa4_4.set('fieldImages', {'nome': 'TextEdit', 'geocodigo': 'TextEdit', 'areaM2': 'TextEdit', 'situacao': 'TextEdit', 'distrito': 'TextEdit', 'geocDistr': 'TextEdit', 'municipio': 'TextEdit', 'geocMun': 'TextEdit', 'macroEstad': 'TextEdit', 'microEstad': 'TextEdit', 'escala': 'TextEdit', 'origem': 'TextEdit', 'anoReferen': 'TextEdit', 'fonte': 'TextEdit', 'area ha': 'TextEdit', 'ID': 'Range', 'nota urb': 'TextEdit', });
lyr_RegioAdministrativa3_5.set('fieldImages', {'nome': 'TextEdit', 'geocodigo': 'TextEdit', 'areaM2': 'TextEdit', 'situacao': 'TextEdit', 'distrito': 'TextEdit', 'geocDistr': 'TextEdit', 'municipio': 'TextEdit', 'geocMun': 'TextEdit', 'macroEstad': 'TextEdit', 'microEstad': 'TextEdit', 'escala': 'TextEdit', 'origem': 'TextEdit', 'anoReferen': 'TextEdit', 'fonte': 'TextEdit', 'area ha': 'TextEdit', 'ID': 'Range', 'nota urb': 'TextEdit', });
lyr_RegioAdministrativa2_6.set('fieldImages', {'nome': 'TextEdit', 'geocodigo': 'TextEdit', 'areaM2': 'TextEdit', 'situacao': 'TextEdit', 'distrito': 'TextEdit', 'geocDistr': 'TextEdit', 'municipio': 'TextEdit', 'geocMun': 'TextEdit', 'macroEstad': 'TextEdit', 'microEstad': 'TextEdit', 'escala': 'TextEdit', 'origem': 'TextEdit', 'anoReferen': 'TextEdit', 'fonte': 'TextEdit', 'area ha': 'TextEdit', 'ID': 'Range', 'nota urb': 'TextEdit', });
lyr_RegioAdministrativa1_7.set('fieldImages', {'nome': 'TextEdit', 'geocodigo': 'TextEdit', 'areaM2': 'TextEdit', 'situacao': 'TextEdit', 'distrito': 'TextEdit', 'geocDistr': 'TextEdit', 'municipio': 'TextEdit', 'geocMun': 'TextEdit', 'macroEstad': 'TextEdit', 'microEstad': 'TextEdit', 'escala': 'TextEdit', 'origem': 'TextEdit', 'anoReferen': 'TextEdit', 'fonte': 'TextEdit', 'area ha': 'TextEdit', 'ID': 'Range', 'nota urb': 'TextEdit', });
lyr_Parcelasfornecidaspelaprefeitura_8.set('fieldImages', {'id': 'TextEdit', 'Codigo': 'TextEdit', 'Regiao': 'TextEdit', 'Subgrupo': 'TextEdit', 'layer': 'TextEdit', });
lyr_Bairros_IJSN_VILAVELHA_9.set('fieldImages', {'nome': 'TextEdit', 'geocodigo': 'TextEdit', 'areaM2': 'TextEdit', 'situacao': 'TextEdit', 'distrito': 'TextEdit', 'geocDistr': 'TextEdit', 'municipio': 'TextEdit', 'geocMun': 'TextEdit', 'macroEstad': 'TextEdit', 'microEstad': 'TextEdit', 'escala': 'TextEdit', 'origem': 'TextEdit', 'anoReferen': 'TextEdit', 'fonte': 'TextEdit', 'area ha': 'TextEdit', 'ID': 'Range', 'nota urb': 'TextEdit', });
lyr_LimiteMunicipal_10.set('fieldImages', {'geocodigo': 'TextEdit', 'nome': 'TextEdit', 'microEstad': 'TextEdit', 'macroEstad': 'TextEdit', 'anoReferen': 'TextEdit', 'origem': 'TextEdit', 'areaKm2': 'TextEdit', 'perimetroK': 'TextEdit', 'fonte': 'TextEdit', '�rea_m_2': 'TextEdit', '�rea_ha': 'TextEdit', '_count': 'TextEdit', '_sum': 'TextEdit', '_mean': 'TextEdit', });
lyr_OcorrnciadeEspcies_11.set('fieldImages', {'RG_adm': 'TextEdit', 'Parcela': 'TextEdit', 'Indivíduo': 'TextEdit', 'Endereço': 'TextEdit', 'Endereço_': 'TextEdit', 'Espécie': 'TextEdit', 'CAP': 'TextEdit', 'DAP': 'TextEdit', 'Altura_tot': 'TextEdit', 'Copa___Ár': 'TextEdit', 'Hábito': 'TextEdit', 'Nome_Popul': 'TextEdit', 'Dispersão': 'TextEdit', 'Origem': 'TextEdit', 'Status_CNC': 'TextEdit', 'Status_MMA': 'TextEdit', 'Árvore_mo': 'TextEdit', 'Probabilid': 'TextEdit', 'Probabil_1': 'TextEdit', 'Consequên': 'TextEdit', 'Grau_de_ri': 'TextEdit', 'Remoção': 'TextEdit', 'Folha_Rala': 'TextEdit', 'Galhos_via': 'TextEdit', 'Erva_Pass': 'TextEdit', 'Tocos_poda': 'TextEdit', 'Constricto': 'TextEdit', 'Galhos_Sec': 'TextEdit', 'Galhos_Que': 'TextEdit', 'Galhos_Esg': 'TextEdit', 'Galhos_Cod': 'TextEdit', 'Bif_V': 'TextEdit', 'Arq_Anorm': 'TextEdit', 'Poda_Uni': 'TextEdit', 'Conflito_R': 'TextEdit', 'Destopo': 'TextEdit', 'Fiss_Rach': 'TextEdit', 'Bif_V_2': 'TextEdit', 'Fungos': 'TextEdit', 'Inclinaç': 'TextEdit', 'Can_Gal_Ca': 'TextEdit', 'Brot_Epi': 'TextEdit', 'Cavidade': 'TextEdit', 'Orifício_': 'TextEdit', 'Casca_Inc': 'TextEdit', 'Troncos_Co': 'TextEdit', 'Pod_Alb': 'TextEdit', 'Rest_AP': 'TextEdit', 'Brot_Epi_2': 'TextEdit', 'Ater_Colo': 'TextEdit', 'Plantio_T_': 'TextEdit', 'Corte_Raiz': 'TextEdit', 'Marca_Roç': 'TextEdit', 'Raiz_Est': 'TextEdit', 'Ori_Inseto': 'TextEdit', 'Fungos_2': 'TextEdit', 'Cav_2': 'TextEdit', 'Pessoas': 'TextEdit', 'Veiculos': 'TextEdit', 'Via_Pub': 'TextEdit', 'Rede': 'TextEdit', 'Bens_Pat': 'TextEdit', 'Via_Priv': 'TextEdit', 'Acomp_Inc': 'TextEdit', 'Poda_Form': 'TextEdit', 'Poda_Limp': 'TextEdit', 'Poda_Red': 'TextEdit', 'Poda_Elev': 'TextEdit', 'Cauteriza': 'TextEdit', 'Desat_Colo': 'TextEdit', 'Aumento_AP': 'TextEdit', 'Adubacao': 'TextEdit', 'Melhoria_S': 'TextEdit', 'Controle_P': 'TextEdit', 'Estaiament': 'TextEdit', 'Escorament': 'TextEdit', 'Ortese': 'TextEdit', 'Cabeamento': 'TextEdit', 'Tutorament': 'TextEdit', 'Ava_Nível': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_PDAU_RG1_Individuos_Amostrados_12.set('fieldImages', {'CHAVE_ID': 'TextEdit', 'Região_Ad': 'Range', 'Parcela': 'Range', 'Indivíduo': 'Range', 'Data': 'DateTime', 'Responsáv': 'TextEdit', 'Endereço': 'TextEdit', 'Endereço_': 'TextEdit', 'Y__UTM_': 'Range', 'X__UTM_': 'Range', 'Latitude': 'Range', 'Longitude': 'Range', 'Tipo_de_Lo': 'TextEdit', 'Largura_da': 'Range', 'Largura__1': 'Range', 'Espécie': 'TextEdit', 'CAP_1': 'Range', 'CAP_2': 'Range', 'CAP_3': 'TextEdit', 'CAP_4': 'TextEdit', 'CAP_5': 'TextEdit', 'CAP_6': 'TextEdit', 'CAP_7': 'TextEdit', 'CAP_8': 'TextEdit', 'CAP_9': 'TextEdit', 'CAP_10': 'TextEdit', 'CAP_11': 'TextEdit', 'CAP_12': 'TextEdit', 'CAP_13': 'TextEdit', 'CAP_14': 'TextEdit', 'CAP_15': 'TextEdit', 'CAP_16': 'TextEdit', 'CAP_17': 'TextEdit', 'CAP_18': 'TextEdit', 'DAP_medio': 'Range', 'Altura_tot': 'Range', 'Copa___Ár': 'Range', 'Hábito': 'TextEdit', 'Nome_popul': 'TextEdit', 'Dispersão': 'TextEdit', 'Origem': 'TextEdit', 'Status_CNC': 'TextEdit', 'Status_MMA': 'TextEdit', 'Árvore_mo': 'TextEdit', 'Folha_rala': 'TextEdit', 'Galhos_int': 'TextEdit', 'Erva_de_pa': 'TextEdit', 'Tocos_de_p': 'TextEdit', 'Constricto': 'TextEdit', 'Galhos_sec': 'TextEdit', 'Galhos_que': 'TextEdit', 'Galhos_esg': 'TextEdit', 'Galhos_cod': 'TextEdit', 'Bifurcaç': 'TextEdit', 'Arquitetur': 'TextEdit', 'Poda_unila': 'TextEdit', 'Conflito_R': 'TextEdit', 'Destopo': 'TextEdit', 'Fissuras_o': 'TextEdit', 'Bifurca_1': 'TextEdit', 'Fungos_dec': 'TextEdit', 'Inclinaç': 'TextEdit', 'Cancro_gal': 'TextEdit', 'Brotaçõe': 'TextEdit', 'Cavidade_d': 'TextEdit', 'Orifícios': 'TextEdit', 'Casca_incl': 'TextEdit', 'Troncos_co': 'TextEdit', 'Podridão_': 'TextEdit', 'Restriçã': 'TextEdit', 'Brotaç_1': 'TextEdit', 'Aterrament': 'TextEdit', 'Plantio_em': 'TextEdit', 'Corte_de_R': 'TextEdit', 'Marca_de_r': 'TextEdit', 'Raiz_estra': 'TextEdit', 'Orifício_': 'TextEdit', 'Fungos_d_1': 'TextEdit', 'Cavidade_1': 'TextEdit', 'Pessoas': 'TextEdit', 'Veiculos': 'TextEdit', 'Via_públi': 'TextEdit', 'Rede_elét': 'TextEdit', 'Béns_patr': 'TextEdit', 'Via_privad': 'TextEdit', 'Probabilid': 'TextEdit', 'Probabil_1': 'TextEdit', 'Consequên': 'TextEdit', 'Risco': 'TextEdit', 'Remoção': 'TextEdit', 'Acompanham': 'TextEdit', 'Poda_de_Fo': 'TextEdit', 'Poda_de_Li': 'TextEdit', 'Poda_de_Re': 'TextEdit', 'Poda_de_El': 'TextEdit', 'Cauteriza': 'TextEdit', 'Desaterram': 'TextEdit', 'Aumento_de': 'TextEdit', 'Adubação': 'TextEdit', 'Melhorias_': 'TextEdit', 'Controle_d': 'TextEdit', 'Estaiament': 'TextEdit', 'Escorament': 'TextEdit', 'Ortese': 'TextEdit', 'Cabeamento': 'TextEdit', 'Tutorament': 'TextEdit', 'Avaliaçã': 'TextEdit', });
lyr_RegioAdministrativa5_3.set('fieldLabels', {'ID': 'no label', 'SubRegiao': 'no label', 'Area': 'no label', });
lyr_RegioAdministrativa4_4.set('fieldLabels', {'nome': 'no label', 'geocodigo': 'no label', 'areaM2': 'no label', 'situacao': 'no label', 'distrito': 'no label', 'geocDistr': 'no label', 'municipio': 'no label', 'geocMun': 'no label', 'macroEstad': 'no label', 'microEstad': 'no label', 'escala': 'no label', 'origem': 'no label', 'anoReferen': 'no label', 'fonte': 'no label', 'area ha': 'no label', 'ID': 'no label', 'nota urb': 'no label', });
lyr_RegioAdministrativa3_5.set('fieldLabels', {'nome': 'no label', 'geocodigo': 'no label', 'areaM2': 'no label', 'situacao': 'no label', 'distrito': 'no label', 'geocDistr': 'no label', 'municipio': 'no label', 'geocMun': 'no label', 'macroEstad': 'no label', 'microEstad': 'no label', 'escala': 'no label', 'origem': 'no label', 'anoReferen': 'no label', 'fonte': 'no label', 'area ha': 'no label', 'ID': 'no label', 'nota urb': 'no label', });
lyr_RegioAdministrativa2_6.set('fieldLabels', {'nome': 'no label', 'geocodigo': 'no label', 'areaM2': 'no label', 'situacao': 'no label', 'distrito': 'no label', 'geocDistr': 'no label', 'municipio': 'no label', 'geocMun': 'no label', 'macroEstad': 'no label', 'microEstad': 'no label', 'escala': 'no label', 'origem': 'no label', 'anoReferen': 'no label', 'fonte': 'no label', 'area ha': 'no label', 'ID': 'no label', 'nota urb': 'no label', });
lyr_RegioAdministrativa1_7.set('fieldLabels', {'nome': 'no label', 'geocodigo': 'no label', 'areaM2': 'no label', 'situacao': 'no label', 'distrito': 'no label', 'geocDistr': 'no label', 'municipio': 'no label', 'geocMun': 'no label', 'macroEstad': 'no label', 'microEstad': 'no label', 'escala': 'no label', 'origem': 'no label', 'anoReferen': 'no label', 'fonte': 'no label', 'area ha': 'no label', 'ID': 'no label', 'nota urb': 'no label', });
lyr_Parcelasfornecidaspelaprefeitura_8.set('fieldLabels', {'id': 'no label', 'Codigo': 'no label', 'Regiao': 'no label', 'Subgrupo': 'no label', 'layer': 'no label', });
lyr_Bairros_IJSN_VILAVELHA_9.set('fieldLabels', {'nome': 'no label', 'geocodigo': 'no label', 'areaM2': 'no label', 'situacao': 'no label', 'distrito': 'no label', 'geocDistr': 'no label', 'municipio': 'no label', 'geocMun': 'no label', 'macroEstad': 'no label', 'microEstad': 'no label', 'escala': 'no label', 'origem': 'no label', 'anoReferen': 'no label', 'fonte': 'no label', 'area ha': 'no label', 'ID': 'no label', 'nota urb': 'no label', });
lyr_LimiteMunicipal_10.set('fieldLabels', {'geocodigo': 'no label', 'nome': 'no label', 'microEstad': 'no label', 'macroEstad': 'no label', 'anoReferen': 'no label', 'origem': 'no label', 'areaKm2': 'no label', 'perimetroK': 'no label', 'fonte': 'no label', '�rea_m_2': 'no label', '�rea_ha': 'no label', '_count': 'no label', '_sum': 'no label', '_mean': 'no label', });
lyr_OcorrnciadeEspcies_11.set('fieldLabels', {'RG_adm': 'no label', 'Parcela': 'no label', 'Indivíduo': 'no label', 'Endereço': 'no label', 'Endereço_': 'no label', 'Espécie': 'inline label - visible with data', 'CAP': 'no label', 'DAP': 'no label', 'Altura_tot': 'no label', 'Copa___Ár': 'no label', 'Hábito': 'no label', 'Nome_Popul': 'no label', 'Dispersão': 'no label', 'Origem': 'no label', 'Status_CNC': 'no label', 'Status_MMA': 'no label', 'Árvore_mo': 'no label', 'Probabilid': 'no label', 'Probabil_1': 'no label', 'Consequên': 'no label', 'Grau_de_ri': 'no label', 'Remoção': 'no label', 'Folha_Rala': 'no label', 'Galhos_via': 'no label', 'Erva_Pass': 'no label', 'Tocos_poda': 'no label', 'Constricto': 'no label', 'Galhos_Sec': 'no label', 'Galhos_Que': 'no label', 'Galhos_Esg': 'no label', 'Galhos_Cod': 'no label', 'Bif_V': 'no label', 'Arq_Anorm': 'no label', 'Poda_Uni': 'no label', 'Conflito_R': 'no label', 'Destopo': 'no label', 'Fiss_Rach': 'no label', 'Bif_V_2': 'no label', 'Fungos': 'no label', 'Inclinaç': 'no label', 'Can_Gal_Ca': 'no label', 'Brot_Epi': 'no label', 'Cavidade': 'no label', 'Orifício_': 'no label', 'Casca_Inc': 'no label', 'Troncos_Co': 'no label', 'Pod_Alb': 'no label', 'Rest_AP': 'no label', 'Brot_Epi_2': 'no label', 'Ater_Colo': 'no label', 'Plantio_T_': 'no label', 'Corte_Raiz': 'no label', 'Marca_Roç': 'no label', 'Raiz_Est': 'no label', 'Ori_Inseto': 'no label', 'Fungos_2': 'no label', 'Cav_2': 'no label', 'Pessoas': 'no label', 'Veiculos': 'no label', 'Via_Pub': 'no label', 'Rede': 'no label', 'Bens_Pat': 'no label', 'Via_Priv': 'no label', 'Acomp_Inc': 'no label', 'Poda_Form': 'no label', 'Poda_Limp': 'no label', 'Poda_Red': 'no label', 'Poda_Elev': 'no label', 'Cauteriza': 'no label', 'Desat_Colo': 'no label', 'Aumento_AP': 'no label', 'Adubacao': 'no label', 'Melhoria_S': 'no label', 'Controle_P': 'no label', 'Estaiament': 'no label', 'Escorament': 'no label', 'Ortese': 'no label', 'Cabeamento': 'no label', 'Tutorament': 'no label', 'Ava_Nível': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_PDAU_RG1_Individuos_Amostrados_12.set('fieldLabels', {'CHAVE_ID': 'inline label - always visible', 'Região_Ad': 'inline label - always visible', 'Parcela': 'inline label - always visible', 'Indivíduo': 'inline label - always visible', 'Data': 'inline label - always visible', 'Responsáv': 'inline label - always visible', 'Endereço': 'inline label - always visible', 'Endereço_': 'inline label - always visible', 'Y__UTM_': 'inline label - always visible', 'X__UTM_': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'Tipo_de_Lo': 'inline label - always visible', 'Largura_da': 'inline label - always visible', 'Largura__1': 'inline label - always visible', 'Espécie': 'inline label - always visible', 'CAP_1': 'inline label - always visible', 'CAP_2': 'inline label - visible with data', 'CAP_3': 'inline label - visible with data', 'CAP_4': 'inline label - visible with data', 'CAP_5': 'inline label - visible with data', 'CAP_6': 'inline label - visible with data', 'CAP_7': 'inline label - visible with data', 'CAP_8': 'inline label - visible with data', 'CAP_9': 'inline label - visible with data', 'CAP_10': 'inline label - visible with data', 'CAP_11': 'inline label - visible with data', 'CAP_12': 'inline label - visible with data', 'CAP_13': 'inline label - visible with data', 'CAP_14': 'inline label - visible with data', 'CAP_15': 'inline label - visible with data', 'CAP_16': 'inline label - visible with data', 'CAP_17': 'inline label - visible with data', 'CAP_18': 'inline label - visible with data', 'DAP_medio': 'inline label - always visible', 'Altura_tot': 'inline label - always visible', 'Copa___Ár': 'inline label - always visible', 'Hábito': 'inline label - always visible', 'Nome_popul': 'inline label - always visible', 'Dispersão': 'inline label - always visible', 'Origem': 'inline label - always visible', 'Status_CNC': 'inline label - always visible', 'Status_MMA': 'inline label - always visible', 'Árvore_mo': 'inline label - always visible', 'Folha_rala': 'inline label - always visible', 'Galhos_int': 'inline label - always visible', 'Erva_de_pa': 'inline label - always visible', 'Tocos_de_p': 'inline label - always visible', 'Constricto': 'inline label - always visible', 'Galhos_sec': 'inline label - always visible', 'Galhos_que': 'inline label - always visible', 'Galhos_esg': 'inline label - always visible', 'Galhos_cod': 'inline label - always visible', 'Bifurcaç': 'inline label - always visible', 'Arquitetur': 'inline label - always visible', 'Poda_unila': 'inline label - always visible', 'Conflito_R': 'inline label - always visible', 'Destopo': 'inline label - always visible', 'Fissuras_o': 'inline label - always visible', 'Bifurca_1': 'inline label - always visible', 'Fungos_dec': 'inline label - always visible', 'Inclinaç': 'inline label - always visible', 'Cancro_gal': 'inline label - always visible', 'Brotaçõe': 'inline label - always visible', 'Cavidade_d': 'inline label - always visible', 'Orifícios': 'inline label - always visible', 'Casca_incl': 'inline label - always visible', 'Troncos_co': 'inline label - always visible', 'Podridão_': 'inline label - always visible', 'Restriçã': 'inline label - always visible', 'Brotaç_1': 'inline label - always visible', 'Aterrament': 'inline label - always visible', 'Plantio_em': 'inline label - always visible', 'Corte_de_R': 'inline label - always visible', 'Marca_de_r': 'inline label - always visible', 'Raiz_estra': 'inline label - always visible', 'Orifício_': 'inline label - always visible', 'Fungos_d_1': 'inline label - always visible', 'Cavidade_1': 'inline label - always visible', 'Pessoas': 'inline label - always visible', 'Veiculos': 'inline label - always visible', 'Via_públi': 'inline label - always visible', 'Rede_elét': 'inline label - always visible', 'Béns_patr': 'inline label - always visible', 'Via_privad': 'inline label - always visible', 'Probabilid': 'inline label - always visible', 'Probabil_1': 'inline label - always visible', 'Consequên': 'inline label - always visible', 'Risco': 'inline label - always visible', 'Remoção': 'inline label - always visible', 'Acompanham': 'inline label - always visible', 'Poda_de_Fo': 'inline label - always visible', 'Poda_de_Li': 'inline label - always visible', 'Poda_de_Re': 'inline label - always visible', 'Poda_de_El': 'inline label - always visible', 'Cauteriza': 'inline label - always visible', 'Desaterram': 'inline label - always visible', 'Aumento_de': 'inline label - always visible', 'Adubação': 'inline label - always visible', 'Melhorias_': 'inline label - always visible', 'Controle_d': 'inline label - always visible', 'Estaiament': 'inline label - always visible', 'Escorament': 'inline label - always visible', 'Ortese': 'inline label - always visible', 'Cabeamento': 'inline label - always visible', 'Tutorament': 'inline label - always visible', 'Avaliaçã': 'inline label - always visible', });
lyr_PDAU_RG1_Individuos_Amostrados_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});