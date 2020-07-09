export const dataAction = [{
	'name': 'Révision et vidange',
	'serviceWeight': '100',
	'weight': '63',
	'position': null,
	'children': [{
		'serviceId': '100501',
		'type': 'ONLINE',
		'name': 'Vidange',
		'serviceWeight': '505',
		'weight': '0',
		'position': null,
		'serviceAliases': ['vidange-auto'],
		'seoTagTitle': null,
		'seoTagDesc': null,
		'visible': true
	}, {
		'serviceId': '100301',
		'type': 'ONLINE',
		'name': 'Révision Intermédiaire (1 Filtre + Vidange + Contrôles)',
		'serviceWeight': '504',
		'weight': '1',
		'position': null,
		'serviceAliases': ['revision-intermediaire'],
		'seoTagTitle': null,
		'seoTagDesc': null,
		'visible': true
	}, {
		'serviceId': '1001',
		'type': 'ONLINE',
		'name': 'Révision Générale (3 Filtres \/ Bougies + Vidange + Contrôles)',
		'serviceWeight': '503',
		'weight': '2',
		'position': null,
		'serviceAliases': ['revision-vidange'],
		'seoTagTitle': null,
		'seoTagDesc': null,
		'visible': true
	}],
	'visible': true
}, {
	'name': 'Freinage',
	'serviceWeight': '96',
	'weight': '64',
	'position': null,
	'children': [{
		'serviceId': '110101',
		'type': 'ONLINE',
		'name': 'Freins - Plaquettes AV',
		'serviceWeight': '85',
		'weight': '0',
		'position': '70',
		'serviceAliases': ['plaquettes-avant'],
		'seoTagTitle': null,
		'seoTagDesc': null,
		'visible': true
	}, {
		'serviceId': '110102',
		'type': 'ONLINE',
		'name': 'Freins - Plaquettes AR',
		'serviceWeight': '84',
		'weight': '1',
		'position': null,
		'serviceAliases': ['plaquettes-arriere'],
		'seoTagTitle': null,
		'seoTagDesc': null,
		'visible': true
	}, {
		'serviceId': '110103',
		'type': 'ONLINE',
		'name': 'Freins - Plaquettes AV\/AR',
		'serviceWeight': '83',
		'weight': '2',
		'position': null,
		'serviceAliases': ['plaquettes-av-ar'],
		'seoTagTitle': null,
		'seoTagDesc': null,
		'visible': true
	}, {
		'serviceId': '110201',
		'type': 'ONLINE',
		'name': 'Freins - Disques et Plaquettes AV',
		'serviceWeight': '82',
		'weight': '3',
		'position': '60',
		'serviceAliases': ['disques-et-plaquettes-avant', 'freins'],
		'seoTagTitle': null,
		'seoTagDesc': null,
		'visible': true
	}, {
		'serviceId': '110202',
		'type': 'ONLINE',
		'name': 'Freins - Disques et Plaquettes AR',
		'serviceWeight': '81',
		'weight': '4',
		'position': null,
		'serviceAliases': ['disques-et-plaquettes-arriere'],
		'seoTagTitle': null,
		'seoTagDesc': null,
		'visible': true
	}, {
		'serviceId': '110203',
		'type': 'ONLINE',
		'name': 'Freins - Disques et Plaquettes AV\/AR',
		'serviceWeight': '80',
		'weight': '5',
		'position': null,
		'serviceAliases': ['disques-et-plaquettes-av-ar'],
		'seoTagTitle': null,
		'seoTagDesc': null,
		'visible': true
	}, {
		'serviceId': '340101',
		'type': 'ONLINE',
		'name': 'Liquide de Frein - Purge et Remplacement',
		'serviceWeight': null,
		'weight': '6',
		'position': '20',
		'serviceAliases': ['remplacement-et-purge-liquide-de-frein', 'remplacement-purge-liquide-frein'],
		'seoTagTitle': null,
		'seoTagDesc': null,
		'visible': true
	}, {
		'serviceId': '660101',
		'type': 'PRICELESS',
		'name': 'Remplacement mâchoire ou tambours arrière (non chiffrable)',
		'serviceWeight': null,
		'weight': '7',
		'position': null,
		'serviceAliases': [],
		'seoTagTitle': null,
		'seoTagDesc': null,
		'visible': true
	}],
	'visible': true
}, {
	'name': 'Pièces moteur', 'serviceWeight': '95', 'weight': '65', 'position': null, 'children': [
		{
			'serviceId': '250101',
			'type': 'ONLINE',
			'name': 'Courroie de distribution - Kit complet',
			'serviceWeight': '300',
			'weight': '0',
			'position': '50',
			'serviceAliases': ['courroie-kit-de-distribution', 'courroie-distribution', 'distributiekit'],
			'seoTagTitle': null,
			'seoTagDesc': null,
			'visible': true
		},
		{
			'serviceId': '370102',
			'type': 'ONLINE',
			'name': 'Injecteur - Remplacement de tous les injecteurs',
			'serviceWeight': null,
			'weight': '1',
			'position': null,
			'serviceAliases': [],
			'seoTagTitle': null,
			'seoTagDesc': null,
			'visible': true
		},
		{
			'serviceId': '350101',
			'type': 'ONLINE',
			'name': 'Liquide de Refroidissement - Purge et Remplacement',
			'serviceWeight': null,
			'weight': '2',
			'position': null,
			'serviceAliases': ['remplacement-et-purge-liquide-de-refroidissement', 'remplacement-purge-liquide-refroidissement'],
			'seoTagTitle': null,
			'seoTagDesc': null,
			'visible': true
		},
		{
			'serviceId': '650101',
			'type': 'PRICELESS',
			'name': 'Remplacement thermostat ou calorstat (non chiffrable)',
			'serviceWeight': null,
			'weight': '4',
			'position': null,
			'serviceAliases': [],
			'seoTagTitle': null,
			'seoTagDesc': null,
			'visible': true
		},
		{
			'serviceId': '420101',
			'type': 'ONLINE',
			'name': 'Courroie d\'accessoires',
			'serviceWeight': null,
			'weight': '5',
			'position': null,
			'serviceAliases': ['courroie-accessoires', 'changer-courroie-accessoire'],
			'seoTagTitle': null,
			'seoTagDesc': null,
			'visible': true
		},
		{
			'serviceId': '670101',
			'type': 'PRICELESS',
			'name': 'Ventilateur ou radiateur (non chiffrable)',
			'serviceWeight': null,
			'weight': '6',
			'position': null,
			'serviceAliases': [],
			'seoTagTitle': null,
			'seoTagDesc': null,
			'visible': true
		},
		{
			'serviceId': '370101',
			'type': 'ONLINE',
			'name': 'Injecteur - Remplacement d\'un injecteur',
			'serviceWeight': null,
			'weight': '7',
			'position': null,
			'serviceAliases': ['injecteurs'],
			'seoTagTitle': null,
			'seoTagDesc': null,
			'visible': true
		}
	], 'visible': true
}, {
	'name': 'Embrayage',
	'serviceWeight': '90',
	'weight': '66',
	'position': null,
	'children': [{
		'serviceId': '240101',
		'type': 'ONLINE',
		'name': 'Embrayage - Kit complet',
		'serviceWeight': '201',
		'weight': '0',
		'position': '40',
		'serviceAliases': ['kit-d-embrayage', 'embrayage'],
		'seoTagTitle': null,
		'seoTagDesc': null,
		'visible': true
	}, {
		'serviceId': '240201',
		'type': 'ONLINE',
		'name': 'Embrayage et volant moteur - Kit complet',
		'serviceWeight': '201',
		'weight': '1',
		'position': null,
		'serviceAliases': ['kit-d-embrayage-et-volant-moteur'],
		'seoTagTitle': null,
		'seoTagDesc': null,
		'visible': true
	}],
	'visible': true
}, {
	'name': 'Suspensions',
	'serviceWeight': '80',
	'weight': '67',
	'position': null,
	'children': [{
		'serviceId': '120101',
		'type': 'ONLINE',
		'name': 'Amortisseurs AV',
		'serviceWeight': null,
		'weight': '0',
		'position': null,
		'serviceAliases': ['amortisseurs-avant', 'amortisseurs'],
		'seoTagTitle': null,
		'seoTagDesc': null,
		'visible': true
	}, {
		'serviceId': '120102',
		'type': 'ONLINE',
		'name': 'Amortisseurs AR',
		'serviceWeight': null,
		'weight': '1',
		'position': null,
		'serviceAliases': ['amortisseurs-arriere'],
		'seoTagTitle': null,
		'seoTagDesc': null,
		'visible': true
	}, {
		'serviceId': '120103',
		'type': 'ONLINE',
		'name': 'Amortisseurs AV\/AR',
		'serviceWeight': null,
		'weight': '2',
		'position': null,
		'serviceAliases': ['amortisseurs-av-ar'],
		'seoTagTitle': null,
		'seoTagDesc': null,
		'visible': true
	}, {
		'serviceId': '530101',
		'type': 'PRICELESS',
		'name': 'Triangle de suspensions (non chiffrable)',
		'serviceWeight': null,
		'weight': '3',
		'position': null,
		'serviceAliases': [],
		'seoTagTitle': null,
		'seoTagDesc': null,
		'visible': true
	}],
	'visible': true
}, {
	'name': 'Géométrie',
	'serviceWeight': '75',
	'weight': '68',
	'position': null,
	'children': [{
		'serviceId': '160101',
		'type': 'ONLINE',
		'name': 'Géométrie - Parallélisme train AV',
		'serviceWeight': null,
		'weight': '0',
		'position': '30',
		'serviceAliases': ['2-roues-geometrie-train-av', 'parallelisme'],
		'seoTagTitle': null,
		'seoTagDesc': null,
		'visible': true
	}, {
		'serviceId': '160102',
		'type': 'ONLINE',
		'name': 'Géométrie - Parallélisme train AV\/AR',
		'serviceWeight': null,
		'weight': '1',
		'position': null,
		'serviceAliases': ['4-roues-geometrie-des-trains-av-ar'],
		'seoTagTitle': null,
		'seoTagDesc': null,
		'visible': true
	}],
	'visible': true
}, {
	'name': 'Démarrage et charge',
	'serviceWeight': '70',
	'weight': '69',
	'position': null,
	'children': [
		{
			'serviceId': '150101',
			'type': 'ONLINE',
			'name': 'Batterie',
			'serviceWeight': null,
			'weight': '0',
			'position': null,
			'serviceAliases': [],
			'seoTagTitle': null,
			'seoTagDesc': null,
			'visible': true
		},
		{
			'serviceId': '520102',
			'type': 'ONLINE',
			'name': 'Démarreur',
			'serviceWeight': null,
			'weight': '2',
			'position': null,
			'serviceAliases': ['demarreur-voiture', 'demarreur'],
			'seoTagTitle': null,
			'seoTagDesc': null,
			'visible': true
		},
		{
			'serviceId': '300101',
			'type': 'ONLINE',
			'name': 'Bougies d\'allumage',
			'serviceWeight': null,
			'weight': '3',
			'position': null,
			'serviceAliases': [],
			'seoTagTitle': null,
			'seoTagDesc': null,
			'visible': true
		},
		{
			'serviceId': '510103',
			'type': 'ONLINE',
			'name': 'Alternateur',
			'serviceWeight': null,
			'weight': '4',
			'position': null,
			'serviceAliases': ['alternateur'],
			'seoTagTitle': null,
			'seoTagDesc': null,
			'visible': true
		}
	],
	'visible': true
}, {
	'name': 'Echappement',
	'serviceWeight': '65',
	'weight': '70',
	'position': null,
	'children': [{
		'serviceId': '140201',
		'type': 'ONLINE',
		'name': 'Échappement - Silencieux arrière',
		'serviceWeight': null,
		'weight': '0',
		'position': null,
		'serviceAliases': ['silencieux-arriere', 'echappement'],
		'seoTagTitle': null,
		'seoTagDesc': null,
		'visible': true
	}, {
		'serviceId': '170101',
		'type': 'ONLINE',
		'name': 'Vanne EGR',
		'serviceWeight': null,
		'weight': '1',
		'position': null,
		'serviceAliases': ['vanne-egr', 'remplacement-vanne-egr'],
		'seoTagTitle': null,
		'seoTagDesc': null,
		'visible': true
	}, {
		'serviceId': '180101',
		'type': 'ONLINE',
		'name': 'Décalaminage',
		'serviceWeight': null,
		'weight': '2',
		'position': null,
		'serviceAliases': ['decalaminage', 'decalaminage-moteur'],
		'seoTagTitle': null,
		'seoTagDesc': null,
		'visible': true
	}],
	'visible': true
}, {
	'name': 'Climatisation',
	'serviceWeight': '60',
	'weight': '71',
	'position': null,
	'children': [{
		'serviceId': '130101',
		'type': 'ONLINE',
		'name': 'Recharge Climatisation',
		'serviceWeight': null,
		'weight': '0',
		'position': null,
		'serviceAliases': ['recharge-climatisation', 'climatisation'],
		'seoTagTitle': null,
		'seoTagDesc': null,
		'visible': true
	}, {
		'serviceId': '130201',
		'type': 'ONLINE',
		'name': 'Révision Climatisation',
		'serviceWeight': null,
		'weight': '1',
		'position': null,
		'serviceAliases': ['revision-climatisation'],
		'seoTagTitle': null,
		'seoTagDesc': null,
		'visible': true
	}, {
		'serviceId': '130301',
		'type': 'ONLINE',
		'name': 'Diagnostic Climatisation',
		'serviceWeight': null,
		'weight': '2',
		'position': null,
		'serviceAliases': ['diagnostic-climatisation'],
		'seoTagTitle': null,
		'seoTagDesc': null,
		'visible': true
	}, {
		'serviceId': '190101',
		'type': 'ONLINE',
		'name': 'Filtre d\'habitacle',
		'serviceWeight': null,
		'weight': '3',
		'position': null,
		'serviceAliases': ['filtre-habitacle'],
		'seoTagTitle': null,
		'seoTagDesc': null,
		'visible': true
	}, {
		'serviceId': '710101',
		'type': 'PRICELESS',
		'name': 'Traitement anti bactérien du circuit de climatisation (non chiffrable)',
		'serviceWeight': null,
		'weight': '4',
		'position': null,
		'serviceAliases': [],
		'seoTagTitle': null,
		'seoTagDesc': null,
		'visible': true
	}],
	'visible': true
}, {
	'name': 'Roues et direction',
	'serviceWeight': '55',
	'weight': '72',
	'position': null,
	'children': [
		{
			'serviceId': '580101',
			'type': 'PRICELESS',
			'name': 'Roulement (non chiffrable)',
			'serviceWeight': null,
			'weight': '2',
			'position': null,
			'serviceAliases': ['roulement-voiture'],
			'seoTagTitle': null,
			'seoTagDesc': null,
			'visible': true
		},
		{
			'serviceId': '540101',
			'type': 'PRICELESS',
			'name': 'Biellette (non chiffrable)',
			'serviceWeight': null,
			'weight': '3',
			'position': null,
			'serviceAliases': [],
			'seoTagTitle': null,
			'seoTagDesc': null,
			'visible': true
		},
		{
			'serviceId': '750101',
			'type': 'PRICELESS',
			'name': 'Rotule direction ou suspension (non chiffrable)',
			'serviceWeight': null,
			'weight': '4',
			'position': null,
			'serviceAliases': ['rotule-direction-ou-suspension'],
			'seoTagTitle': null,
			'seoTagDesc': null,
			'visible': true
		}
	],
	'visible': true
}, {
	'name': 'Transmission',
	'serviceWeight': null,
	'weight': '73',
	'position': null,
	'children': [{
		'serviceId': '390101',
		'type': 'ONLINE',
		'name': 'Cardan AV droit',
		'serviceWeight': '85',
		'weight': '0',
		'position': null,
		'serviceAliases': ['cardan-ou-soufflet-de-cardan', 'changer-soufflet-de-cardan-ou-cardan'],
		'seoTagTitle': null,
		'seoTagDesc': null,
		'visible': true
	}, {
		'serviceId': '390102',
		'type': 'ONLINE',
		'name': 'Cardan AV gauche',
		'serviceWeight': '85',
		'weight': '1',
		'position': null,
		'serviceAliases': [],
		'seoTagTitle': null,
		'seoTagDesc': null,
		'visible': true
	}, {
		'serviceId': '390103',
		'type': 'ONLINE',
		'name': 'Cardan AV droit et gauche',
		'serviceWeight': '85',
		'weight': '2',
		'position': null,
		'serviceAliases': ['cardan-avant-droit-gauche'],
		'seoTagTitle': null,
		'seoTagDesc': null,
		'visible': true
	}, {
		'serviceId': '390104',
		'type': 'ONLINE',
		'name': 'Cardan AR droit',
		'serviceWeight': '85',
		'weight': '3',
		'position': null,
		'serviceAliases': [],
		'seoTagTitle': null,
		'seoTagDesc': null,
		'visible': true
	}, {
		'serviceId': '390105',
		'type': 'ONLINE',
		'name': 'Cardan AR gauche',
		'serviceWeight': '85',
		'weight': '4',
		'position': null,
		'serviceAliases': [],
		'seoTagTitle': null,
		'seoTagDesc': null,
		'visible': true
	}, {
		'serviceId': '390106',
		'type': 'ONLINE',
		'name': 'Cardan AR droit et gauche',
		'serviceWeight': '85',
		'weight': '5',
		'position': null,
		'serviceAliases': ['cardan-arriere-droit-gauche'],
		'seoTagTitle': null,
		'seoTagDesc': null,
		'visible': true
	}],
	'visible': true
}, {
	'name': 'Éléments extérieurs', 'serviceWeight': '45', 'weight': '74', 'position': null, 'children': [
		{
			'serviceId': '310101',
			'type': 'ONLINE',
			'name': 'Carrosserie - Rénovation 1 élément',
			'serviceWeight': null,
			'weight': '0',
			'position': null,
			'serviceAliases': ['renovation-piece-carrosserie'],
			'seoTagTitle': null,
			'seoTagDesc': null,
			'visible': true
		},
		{
			'serviceId': '310102',
			'type': 'ONLINE',
			'name': 'Carrosserie - Rénovation 2 éléments',
			'serviceWeight': null,
			'weight': '1',
			'position': null,
			'serviceAliases': [],
			'seoTagTitle': null,
			'seoTagDesc': null,
			'visible': true
		},
		{
			'serviceId': '320102',
			'type': 'ONLINE',
			'name': 'Phares : Rénovation des optiques',
			'serviceWeight': null,
			'weight': '2',
			'position': null,
			'serviceAliases': ['renovation-phares'],
			'seoTagTitle': null,
			'seoTagDesc': null,
			'visible': true
		},
		{
			'serviceId': '600101',
			'type': 'PRICELESS',
			'name': 'Remplacement optique phare\/feu (non chiffrable)',
			'serviceWeight': null,
			'weight': '5',
			'position': null,
			'serviceAliases': [],
			'seoTagTitle': null,
			'seoTagDesc': null,
			'visible': true
		},
		{
			'serviceId': '610101',
			'type': 'PRICELESS',
			'name': 'Remplacement ampoule ou réglage phare (non chiffrable)',
			'serviceWeight': null,
			'weight': '6',
			'position': null,
			'serviceAliases': [],
			'seoTagTitle': null,
			'seoTagDesc': null,
			'visible': true
		}
	], 'visible': true
}, {
	'name': 'Contrôles et diagnostics',
	'serviceWeight': '40',
	'weight': '75',
	'position': null,
	'children': [{
		'serviceId': '290101',
		'type': 'ONLINE',
		'name': 'Diagnostic Sécurité',
		'serviceWeight': null,
		'weight': '0',
		'position': null,
		'serviceAliases': ['diagnostic-securite'],
		'seoTagTitle': null,
		'seoTagDesc': null,
		'visible': true
	}, {
		'serviceId': '280101',
		'type': 'ONLINE',
		'name': 'Diagnostic Électronique',
		'serviceWeight': null,
		'weight': '1',
		'position': null,
		'serviceAliases': ['diagnostic-electronique'],
		'seoTagTitle': null,
		'seoTagDesc': null,
		'visible': true
	}, {
		'serviceId': '700101',
		'type': 'PRICELESS',
		'name': 'Contrôle Circuit de charge (non chiffrable)',
		'serviceWeight': null,
		'weight': '2',
		'position': null,
		'serviceAliases': [],
		'seoTagTitle': null,
		'seoTagDesc': null,
		'visible': true
	}],
	'visible': true
}, {
	'name': 'Autres',
	'weight': 999999,
	'children': [{
		'serviceId': '500101',
		'type': 'OTHER',
		'name': 'Prendre rendez-vous',
		'serviceWeight': null,
		'weight': '76',
		'position': null,
		'serviceAliases': [],
		'seoTagTitle': null,
		'seoTagDesc': null,
		'visible': true
	}, {
		'serviceId': '270101',
		'type': 'OTHER',
		'name': 'Autres Prestations',
		'serviceWeight': null,
		'weight': '77',
		'position': null,
		'serviceAliases': [],
		'seoTagTitle': null,
		'seoTagDesc': null,
		'visible': true
	}],
	'visible': true
}]
