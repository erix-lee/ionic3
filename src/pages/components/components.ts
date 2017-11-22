import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
	selector: 'page-components',
	templateUrl: 'components.html',
})
export class ComponentsPage {
	items: Array<{ title: string, page: any }>;
	rootPage: any;
	constructor(public navCtrl: NavController) {
		this.rootPage = 'ComponentsPage';
		this.initializeItems();
	}
	initializeItems() {
		this.items = [
			{
				title: 'action-sheets',
				page: 'ActionSheetsPage'
			},
			{
				title: 'alerts',
				page: 'AlertsPage'
			},
			{
				title: 'alerts-checkbox',
				page: 'AlertsCheckboxPage'
			},
			{
				title: 'alerts-confirm',
				page: 'AlertsConfirmPage'
			},
			{
				title: 'alerts-prompt',
				page: 'AlertsPromptPage'
			},
			{
				title: 'alerts-radio',
				page: 'AlertsRadioPage'
			},
			{
				title: 'badges',
				page: 'BadgesPage'
			},
			{
				title: 'buttons',
				page: 'ButtonsPage'
			},
			{
				title: 'buttons-block',
				page: 'ButtonsBlockPage'
			},
			{
				title: 'buttons-clear',
				page: 'ButtonsClearPage'
			},
			{
				title: 'buttons-components',
				page: 'ButtonsComponentsPage'
			},
			{
				title: 'buttons-full',
				page: 'ButtonsFullPage'
			},
			{
				title: 'buttons-icons',
				page: 'ButtonsIconsPage'
			},
			{
				title: 'buttons-outline',
				page: 'ButtonsOutlinePage'
			},
			{
				title: 'buttons-round',
				page: 'ButtonsRoundPage'
			},
			{
				title: 'buttons-sizes',
				page: 'ButtonsSizesPage'
			},
			{
				title: 'cards',
				page: 'CardsPage'
			},
			{
				title: 'cards-advanced-map',
				page: 'CardsAdvancedMapPage'
			},
			{
				title: 'cards-advanced-social',
				page: 'CardsAdvancedSocialPage'
			},
			{
				title: 'cards-advanced-weather',
				page: 'CardsAdvancedWeatherPage'
			},
			{
				title: 'cards-background',
				page: 'CardsBackgroundPage'
			},
			{
				title: 'cards-header',
				page: 'CardsHeaderPage'
			},
			{
				title: 'cards-image',
				page: 'CardsImagePage'
			},
			{
				title: 'cards-list',
				page: 'CardsListPage'
			},
			{
				title: 'checkboxes',
				page: 'CheckboxesPage'
			},
			{
				title: 'datetime',
				page: 'DatetimePage'
			},
			{
				title: 'fabs',
				page: 'FabsPage'
			},
			{
				title: 'gestures',
				page: 'GesturesPage'
			},
			{
				title: 'grid',
				page: 'GridPage'
			},
			{
				title: 'icons',
				page: 'IconsPage'
			},
			{
				title: 'inputs',
				page: 'InputsPage'
			},
			{
				title: 'inputs-fixed-inline',
				page: 'InputsFixedInlinePage'
			},
			{
				title: 'inputs-floating',
				page: 'InputsFloatingPage'
			},
			{
				title: 'inputs-inline',
				page: 'InputsInlinePage'
			},
			{
				title: 'inputs-inset',
				page: 'InputsInsetPage'
			},
			{
				title: 'inputs-placeholder',
				page: 'InputsPlaceholderPage'
			},
			{
				title: 'inputs-stacked',
				page: 'InputsStackedPage'
			},
			{
				title: 'lists',
				page: 'ListsPage'
			},
			{
				title: 'lists-avatar',
				page: 'ListsAvatarPage'
			},
			{
				title: 'lists-dividers',
				page: 'ListsDividersPage'
			},
			{
				title: 'lists-headers',
				page: 'ListsHeadersPage'
			},
			{
				title: 'lists-icon',
				page: 'ListsIconPage'
			},
			{
				title: 'lists-inset',
				page: 'ListsInsetPage'
			},
			{
				title: 'lists-multiline',
				page: 'ListsMultilinePage'
			},
			{
				title: 'lists-no-lines',
				page: 'ListsNoLinesPage'
			},
			{
				title: 'lists-sliding',
				page: 'ListsSlidingPage'
			},
			{
				title: 'lists-thumbnail',
				page: 'ListsThumbnailPage'
			},
			{
				title: 'loading',
				page: 'LoadingPage'
			},
			{
				title: 'menus',
				page: 'MenusPage'
			},
			{
				title: 'modals',
				page: 'ModalsPage'
			},
			{
				title: 'navigation',
				page: 'NavigationPage'
			},
			{
				title: 'popovers',
				page: 'PopoversPage'
			},
			{
				title: 'radios',
				page: 'RadiosPage'
			},
			{
				title: 'ranges',
				page: 'RangesPage'
			},
			{
				title: 'searchbars',
				page: 'SearchbarsPage'
			},
			{
				title: 'segments',
				page: 'SegmentsPage'
			},
			{
				title: 'selects',
				page: 'SelectsPage'
			},
			{
				title: 'slides',
				page: 'SlidesPage'
			},
			{
				title: 'tabs',
				page: 'TabsPage'
			},
			{
				title: 'tabs-badges',
				page: 'TabsBadgesPage'
			},
			{
				title: 'tabs-icon',
				page: 'TabsIconPage'
			},
			{
				title: 'tabs-icon-text',
				page: 'TabsIconTextPage'
			},
			{
				title: 'toast',
				page: 'ToastPage'
			},
			{
				title: 'toggles',
				page: 'TogglesPage'
			},
			{
				title: 'toolbar',
				page: 'ToolbarPage'
			},
			{
				title: 'toolbar-buttons',
				page: 'ToolbarButtonsPage'
			},
			{
				title: 'toolbar-colors',
				page: 'ToolbarColorsPage'
			},
			{
				title: 'toolbar-searchbar',
				page: 'ToolbarSearchbarPage'
			},
			{
				title: 'toolbar-segment',
				page: 'ToolbarSegmentPage'
			},

		];
	}

	itemTapped(event, item) {
		this.navCtrl.push(item.page);
	}
	getItems(ev) {

		this.initializeItems();
		// set val to the value of the ev target
		var val = ev.target.value;

		// if the value is an empty string don't filter the items
		if (val && val.trim() != '') {
			this.items = this.items.filter((item) => {
				return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
			})
		}
	}


	ionViewDidLoad() {
		console.log('ionViewDidLoad ComponentsPage');
	}

}
