import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular';

@Component({
	selector: 'page-native',
	templateUrl: 'native.html',
})
export class NativePage {
	items: Array<{ title: string, page: any,platform:string }>;
	//items: Array<any>;
	rootPage: any;
	android:"android,ios";
	itemslength:number;
	constructor(public navCtrl: NavController,public platform:Platform) {

		this.rootPage = 'NativePage';
		this.initializeItems();
		
	}
	initializeItems() {
		this.items = [
			{
				title: 'Three Dee Touch',
				page: 'ThreeDeeTouchPage',
				platform: 'ios'
			},
			{
				title: 'Action Sheet',
				page: 'ActionSheetPage',
				platform: 'android,ios'

			},
			{
				title: 'AdMob Free',
				page: 'AdmobFreePage',
				platform: 'android'
			},
			{
				title: 'AdMob Pro Paid',
				page: 'AdmobProPaidPage',
				platform: 'android,ios'
			},
			{
				title: 'Alipay',
				page: 'AlipayPage',
				platform: 'android,ios'
			},
			{
				title: 'Android Fingerprint Auth',
				page: 'AndroidFingerprintAuthPage',
				platform: 'android'
			},
			{
				title: 'Android Full Screen',
				page: 'AndroidFullScreenPage',
				platform: 'android'
			},
			{
				title: 'Android Permissions',
				page: 'AndroidPermissionsPage',
				platform: 'android'
			},
			{
				title: 'App Availability',
				page: 'AppAvailabilityPage',
				platform: 'android,ios'
			},
			{
				title: 'App Minimize',
				page: 'AppMinimizePage',
				platform: 'android,ios'
			},
			{
				title: 'App Preferences',
				page: 'AppPreferencesPage',
				platform: 'android,ios'
			},
			{
				title: 'App Rate',
				page: 'AppRatePage',
				platform: 'android,ios'
			},
			{
				title: 'App Update',
				page: 'AppUpdatePage',
				platform: 'android,ios'
			},
			{
				title: 'App Version',
				page: 'AppVersionPage',
				platform: 'android,ios'
			},
			{
				title: 'Appodeal',
				page: 'AppodealPage',
				platform: 'android,ios'
			},
			{
				title: 'Autostart',
				page: 'AutostartPage',
				platform: 'android,ios'
			},
			{
				title: 'Background Fetch',
				page: 'BackgroundFetchPage',
				platform: 'ios'
			},
			{
				title: 'Background Geolocation',
				page: 'BackgroundGeolocationPage',
				platform: 'android,ios'
			},
			{
				title: 'Background Mode',
				page: 'BackgroundModePage',
				platform: 'android,ios'
			},
			{
				title: 'Badge',
				page: 'BadgePage',
				platform: 'android,ios'
			},
			{
				title: 'Barcode Scanner',
				page: 'BarcodeScannerPage',
				platform: 'android,ios'
			},
			{
				title: 'Base64 To Gallery',
				page: 'Base64ToGalleryPage',
				platform: 'android,ios'
			},
			{
				title: 'Battery Status',
				page: 'BatteryStatusPage',
				platform: 'android,ios'
			},
			{
				title: 'BLE',
				page: 'BlePage',
				platform: 'android,ios'
			},
			{
				title: 'Bluetooth Serial',
				page: 'BluetoothSerialPage',
				platform: 'android,ios'
			},
			{
				title: 'Brightness',
				page: 'BrightnessPage',
				platform: 'android,ios'
			},
			{
				title: 'Broadcaster',
				page: 'BroadcasterPage',
				platform: 'android,ios'
			},
			{
				title: 'Browser Tab',
				page: 'BrowserTabPage',
				platform: 'android,ios'
			},
			{
				title: 'Calendar',
				page: 'CalendarPage',
				platform: 'android,ios'
			},
			{
				title: 'Call Number',
				page: 'CallNumberPage',
				platform: 'android,ios'
			},
			{
				title: 'Camera',
				page: 'CameraPage',
				platform: 'android,ios'
			},
			{
				title: 'Card IO',
				page: 'CardIoPage',
				platform: 'android,ios'
			},
			{
				title: 'Clipboard',
				page: 'ClipboardPage',
				platform: 'android,ios'
			},
			{
				title: 'Code Push',
				page: 'CodePushPage',
				platform: 'android,ios'
			},
			{
				title: 'Contacts',
				page: 'ContactsPage',
				platform: 'android,ios'
			},
			{
				title: 'Couchbase Lite',
				page: 'CouchbaseLitePage',
				platform: 'android,ios'
			},
			{
				title: 'Crop',
				page: 'CropPage',
				platform: 'android,ios'
			},
			{
				title: 'Date Picker',
				page: 'DatePickerPage',
				platform: 'android,ios'
			},
			{
				title: 'DB Meter',
				page: 'DbMeterPage',
				platform: 'android,ios'
			},
			{
				title: 'Deeplinks',
				page: 'DeeplinksPage',
				platform: 'android,ios'
			},
			{
				title: 'Device',
				page: 'DevicePage',
				platform: 'android,ios'
			},
			{
				title: 'Device Accounts',
				page: 'DeviceAccountsPage',
				platform: 'android,ios'
			},
			{
				title: 'Device Feedback',
				page: 'DeviceFeedbackPage',
				platform: 'android,ios'
			},
			{
				title: 'Device Motion',
				page: 'DeviceMotionPage',
				platform: 'android,ios'
			},
			{
				title: 'Device Orientation',
				page: 'DeviceOrientationPage',
				platform: 'android,ios'
			},
			{
				title: 'Diagnostic',
				page: 'DiagnosticPage',
				platform: 'android,ios'
			},
			{
				title: 'Dialogs',
				page: 'DialogsPage',
				platform: 'android,ios'
			},
			{
				title: 'Document Viewer',
				page: 'DocumentViewerPage',
				platform: 'android,ios'
			},
			{
				title: 'Email Composer',
				page: 'EmailComposerPage',
				platform: 'android,ios'
			},
			{
				title: 'Estimote Beacons',
				page: 'EstimoteBeaconsPage',
				platform: 'android,ios'
			},
			{
				title: 'Extended Device Information',
				page: 'ExtendedDeviceInformationPage',
				platform: 'android,ios'
			},
			{
				title: 'Facebook',
				page: 'FacebookPage',
				platform: 'android,ios'
			},
			{
				title: 'FCM',
				page: 'FcmPage',
				platform: 'android,ios'
			},
			{
				title: 'File',
				page: 'FilePage',
				platform: 'android,ios'
			},
			{
				title: 'File Chooser',
				page: 'FileChooserPage',
				platform: 'android,ios'
			},
			{
				title: 'File Encryption',
				page: 'FileEncryptionPage',
				platform: 'android,ios'
			},
			{
				title: 'File Opener',
				page: 'FileOpenerPage',
				platform: 'android,ios'
			},
			{
				title: 'File Path',
				page: 'FilePathPage',
				platform: 'android,ios'
			},
			{
				title: 'File Transfer',
				page: 'FileTransferPage',
				platform: 'android,ios'
			},
			{
				title: 'Fingerprint AIO',
				page: 'FingerprintAioPage',
				platform: 'android,ios'
			},
			{
				title: 'Flashlight',
				page: 'FlashlightPage',
				platform: 'android,ios'
			},
			{
				title: 'Flurry Analytics',
				page: 'FlurryAnalyticsPage',
				platform: 'android,ios'
			},
			{
				title: 'FTP',
				page: 'FtpPage',
				platform: 'android,ios'
			},
			{
				title: 'Geofence',
				page: 'GeofencePage',
				platform: 'android,ios'
			},
			{
				title: 'Geolocation',
				page: 'GeolocationPage',
				platform: 'android,ios'
			},
			{
				title: 'Globalization',
				page: 'GlobalizationPage',
				platform: 'android,ios'
			},
			{
				title: 'Google Analytics',
				page: 'GoogleAnalyticsPage',
				platform: 'android,ios'
			},
			{
				title: 'Google Maps',
				page: 'GoogleMapsPage',
				platform: 'android,ios'
			},
			{
				title: 'Google Plus',
				page: 'GooglePlusPage',
				platform: 'android,ios'
			},
			{
				title: 'Gyroscope',
				page: 'GyroscopePage',
				platform: 'android,ios'
			},
			{
				title: 'Header Color',
				page: 'HeaderColorPage',
				platform: 'android,ios'
			},
			{
				title: 'Health',
				page: 'HealthPage',
				platform: 'android,ios'
			},
			{
				title: 'Health Kit',
				page: 'HealthKitPage',
				platform: 'android,ios'
			},
			{
				title: 'HTTP',
				page: 'HttpPage',
				platform: 'android,ios'
			},
			{
				title: 'Httpd',
				page: 'HttpdPage',
				platform: 'android,ios'
			},
			{
				title: 'IBeacon',
				page: 'IbeaconPage',
				platform: 'android,ios'
			},
			{
				title: 'Image Picker',
				page: 'ImagePickerPage',
				platform: 'android,ios'
			},
			{
				title: 'Image Resizer',
				page: 'ImageResizerPage',
				platform: 'android,ios'
			},
			{
				title: 'In App Browser',
				page: 'InAppBrowserPage',
				platform: 'android,ios'
			},
			{
				title: 'In App Purchase',
				page: 'InAppPurchasePage',
				platform: 'android,ios'
			},
			{
				title: 'In App Purchase 2',
				page: 'InAppPurchase2Page',
				platform: 'android,ios'
			},
			{
				title: 'Index App Content',
				page: 'IndexAppContentPage',
				platform: 'android,ios'
			},
			{
				title: 'Insomnia',
				page: 'InsomniaPage',
				platform: 'android,ios'
			},
			{
				title: 'Instagram',
				page: 'InstagramPage',
				platform: 'android,ios'
			},
			{
				title: 'Intel Security',
				page: 'IntelSecurityPage',
				platform: 'android,ios'
			},
			{
				title: 'Intercom',
				page: 'IntercomPage',
				platform: 'android,ios'
			},
			{
				title: 'Is Debug',
				page: 'IsDebugPage',
				platform: 'android,ios'
			},
			{
				title: 'Jins Meme',
				page: 'JinsMemePage',
				platform: 'android,ios'
			},
			{
				title: 'Keyboard',
				page: 'KeyboardPage',
				platform: 'android,ios'
			},
			{
				title: 'Keychain',
				page: 'KeychainPage',
				platform: 'android,ios'
			},
			{
				title: 'Keychain Touch Id',
				page: 'KeychainTouchIdPage',
				platform: 'android,ios'
			},
			{
				title: 'Launch Navigator',
				page: 'LaunchNavigatorPage',
				platform: 'android,ios'
			},
			{
				title: 'Launch Review',
				page: 'LaunchReviewPage',
				platform: 'android,ios'
			},
			{
				title: 'LinkedIn',
				page: 'LinkedinPage',
				platform: 'android,ios'
			},
			{
				title: 'Local Notifications',
				page: 'LocalNotificationsPage',
				platform: 'android,ios'
			},
			{
				title: 'Location Accuracy',
				page: 'LocationAccuracyPage',
				platform: 'android,ios'
			},
			{
				title: 'Market',
				page: 'MarketPage',
				platform: 'android,ios'
			},
			{
				title: 'Media',
				page: 'MediaPage',
				platform: 'android,ios'
			},
			{
				title: 'Media Capture',
				page: 'MediaCapturePage',
				platform: 'android,ios'
			},
			{
				title: 'Mixpanel',
				page: 'MixpanelPage',
				platform: 'android,ios'
			},
			{
				title: 'Mobile Accessibility',
				page: 'MobileAccessibilityPage',
				platform: 'android,ios'
			},
			{
				title: 'MS ADAL',
				page: 'MsAdalPage',
				platform: 'android,ios'
			},
			{
				title: 'Music Controls',
				page: 'MusicControlsPage',
				platform: 'android,ios'
			},
			{
				title: 'Native Audio',
				page: 'NativeAudioPage',
				platform: 'android,ios'
			},
			{
				title: 'Native Geocoder',
				page: 'NativeGeocoderPage',
				platform: 'android,ios'
			},
			{
				title: 'Native Keyboard Paid',
				page: 'NativeKeyboardPaidPage',
				platform: 'android,ios'
			},
			{
				title: 'Native Page Transitions',
				page: 'NativePageTransitionsPage',
				platform: 'android,ios'
			},
			{
				title: 'Native Storage',
				page: 'NativeStoragePage',
				platform: 'android,ios'
			},
			{
				title: 'Network',
				page: 'NetworkPage',
				platform: 'android,ios'
			},
			{
				title: 'NFC',
				page: 'NfcPage',
				platform: 'android,ios'
			},
			{
				title: 'OneSignal',
				page: 'OnesignalPage',
				platform: 'android,ios'
			},
			{
				title: 'Open Native Settings',
				page: 'OpenNativeSettingsPage',
				platform: 'android,ios'
			},
			{
				title: 'PayPal',
				page: 'PaypalPage',
				platform: 'android,ios'
			},
			{
				title: 'Pedometer',
				page: 'PedometerPage',
				platform: 'android,ios'
			},
			{
				title: 'Phonegap Local Notification',
				page: 'PhonegapLocalNotificationPage',
				platform: 'android,ios'
			},
			{
				title: 'Photo Library',
				page: 'PhotoLibraryPage',
				platform: 'android,ios'
			},
			{
				title: 'Photo Viewer',
				page: 'PhotoViewerPage',
				platform: 'android,ios'
			},
			{
				title: 'Pin Check',
				page: 'PinCheckPage',
				platform: 'android,ios'
			},
			{
				title: 'Pin Dialog',
				page: 'PinDialogPage',
				platform: 'android,ios'
			},
			{
				title: 'Power Management',
				page: 'PowerManagementPage',
				platform: 'android,ios'
			},
			{
				title: 'Printer',
				page: 'PrinterPage',
				platform: 'android,ios'
			},
			{
				title: 'Pro',
				page: 'ProPage',
				platform: 'android,ios'
			},
			{
				title: 'Push',
				page: 'PushPage',
				platform: 'android,ios'
			},
			{
				title: 'QQSDK',
				page: 'QqsdkPage',
				platform: 'android,ios'
			},
			{
				title: 'QR Scanner',
				page: 'QrScannerPage',
				platform: 'android,ios'
			},
			{
				title: 'Safari View Controller',
				page: 'SafariViewControllerPage',
				platform: 'android,ios'
			},
			{
				title: 'Screen Orientation',
				page: 'ScreenOrientationPage',
				platform: 'android,ios'
			},
			{
				title: 'Screenshot',
				page: 'ScreenshotPage',
				platform: 'android,ios'
			},
			{
				title: 'Secure Storage',
				page: 'SecureStoragePage',
				platform: 'android,ios'
			},
			{
				title: 'Serial',
				page: 'SerialPage',
				platform: 'android,ios'
			},
			{
				title: 'Shake',
				page: 'ShakePage',
				platform: 'android,ios'
			},
			{
				title: 'Sim',
				page: 'SimPage',
				platform: 'android,ios'
			},
			{
				title: 'SMS',
				page: 'SmsPage',
				platform: 'android,ios'
			},
			{
				title: 'Social Sharing',
				page: 'SocialSharingPage',
				platform: 'android,ios'
			},
			{
				title: 'Speech Recognition',
				page: 'SpeechRecognitionPage',
				platform: 'android,ios'
			},
			{
				title: 'Spinner Dialog',
				page: 'SpinnerDialogPage',
				platform: 'android,ios'
			},
			{
				title: 'Splash Screen',
				page: 'SplashScreenPage',
				platform: 'android,ios'
			},
			{
				title: 'SQLite',
				page: 'SqlitePage',
				platform: 'android,ios'
			},
			{
				title: 'SQLite Porter',
				page: 'SqlitePorterPage',
				platform: 'android,ios'
			},
			{
				title: 'Status Bar',
				page: 'StatusBarPage',
				platform: 'android,ios'
			},
			{
				title: 'Stepcounter',
				page: 'StepcounterPage',
				platform: 'android,ios'
			},
			{
				title: 'Streaming Media',
				page: 'StreamingMediaPage',
				platform: 'android'
			},
			{
				title: 'Stripe',
				page: 'StripePage',
				platform: 'android,ios'
			},
			{
				title: 'Taptic Engine',
				page: 'TapticEnginePage',
				platform: 'ios'
			},
			{
				title: 'Text To Speech',
				page: 'TextToSpeechPage',
				platform: 'android,ios'
			},
			{
				title: 'Themeable Browser',
				page: 'ThemeableBrowserPage',
				platform: 'android,ios'
			},
			{
				title: 'Toast',
				page: 'ToastPage',
				platform: 'android,ios'
			},
			{
				title: 'Touch ID',
				page: 'TouchIdPage',
				platform: 'ios'
			},
			{
				title: 'Twitter Connect',
				page: 'TwitterConnectPage',
				platform: 'android,ios'
			},
			{
				title: 'Uid',
				page: 'UidPage',
				platform: 'android'
			},
			{
				title: 'Unique Device ID',
				page: 'UniqueDeviceIdPage',
				platform: 'android,ios'
			},
			{
				title: 'User Agent',
				page: 'UserAgentPage',
				platform: 'android,ios'
			},
			{
				title: 'Vibration',
				page: 'VibrationPage',
				platform: 'android,ios'
			},
			{
				title: 'Video Editor',
				page: 'VideoEditorPage',
				platform: 'android,ios'
			},
			{
				title: 'Video Player',
				page: 'VideoPlayerPage',
				platform: 'android'
			},
			{
				title: 'Youtube Video Player',
				page: 'YoutubeVideoPlayerPage',
				platform: 'android,ios'
			},
			{
				title: 'ZBar',
				page: 'ZbarPage',
				platform: 'android,ios'
			},
			{
				title: 'Zeroconf',
				page: 'ZeroconfPage',
				platform: 'android,ios'
			},
			{
				title: 'Zip',
				page: 'ZipPage',
				platform: 'android,ios'
			},


		];
		this.itemslength=this.items.length;
		this.items = this.items.filter((item) => {
			let support=false;
			item.platform.split(",").forEach(o=>{
				
				support=support||this.platform.is(o);

			})
			
			return support;
		})
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
	itemTapped(event, item) {
		this.navCtrl.push(item.page);
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad NativePage');
	}

}
