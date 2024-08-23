import {Component} from '@angular/core';
import {ObButtonModule} from '@oblique/oblique';
import {MatLabel, MatOption, MatSelect} from '@angular/material/select';
import {MatButton, MatButtonModule, MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {MatInput} from '@angular/material/input';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {ConvertJsonToExcelService} from './convert-json-to-excel.service';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
	selector: 'obg-convert-json-to-excel',
	standalone: true,
	imports: [
		MatButton,
		ObButtonModule,
		MatIcon,
		MatIconButton,
		MatFormFieldModule,
		MatButtonModule,
		MatSelect,
		MatOption,
		MatLabel,
		MatInput,
		ReactiveFormsModule
	],
	templateUrl: './convert-json-to-excel.component.html',
	styleUrl: './convert-json-to-excel.component.scss'
})
export class ConvertJsonToExcelComponent {
	isLoading = false;
	languages = [
		{lang: 'Afrikaans', code: 'af'},
		{lang: 'Albanian', code: 'sq'},
		{lang: 'Amharic', code: 'am'},
		{lang: 'Arabic', code: 'ar'},
		{lang: 'Armenian', code: 'hy'},
		{lang: 'Azerbaijani', code: 'az'},
		{lang: 'Basque', code: 'eu'},
		{lang: 'Belarusian', code: 'be'},
		{lang: 'Bengali', code: 'bn'},
		{lang: 'Bosnian', code: 'bs'},
		{lang: 'Bulgarian', code: 'bg'},
		{lang: 'Catalan', code: 'ca'},
		{lang: 'Cebuano', code: 'ceb'},
		{lang: 'Chinese (Simplified)', code: 'zh-CN'},
		{lang: 'Chinese (Traditional)', code: 'zh-TW'},
		{lang: 'Corsican', code: 'co'},
		{lang: 'Croatian', code: 'hr'},
		{lang: 'Czech', code: 'cs'},
		{lang: 'Danish', code: 'da'},
		{lang: 'Dutch', code: 'nl'},
		{lang: 'English', code: 'en'},
		{lang: 'Esperanto', code: 'eo'},
		{lang: 'Estonian', code: 'et'},
		{lang: 'Finnish', code: 'fi'},
		{lang: 'French', code: 'fr'},
		{lang: 'Frisian', code: 'fy'},
		{lang: 'Galician', code: 'gl'},
		{lang: 'Georgian', code: 'ka'},
		{lang: 'German', code: 'de'},
		{lang: 'Greek', code: 'el'},
		{lang: 'Gujarati', code: 'gu'},
		{lang: 'Haitian Creole', code: 'ht'},
		{lang: 'Hausa', code: 'ha'},
		{lang: 'Hawaiian', code: 'haw'},
		{lang: 'Hebrew', code: 'he'},
		{lang: 'Hindi', code: 'hi'},
		{lang: 'Hmong', code: 'hmn'},
		{lang: 'Hungarian', code: 'hu'},
		{lang: 'Icelandic', code: 'is'},
		{lang: 'Igbo', code: 'ig'},
		{lang: 'Indonesian', code: 'id'},
		{lang: 'Irish', code: 'ga'},
		{lang: 'Italian', code: 'it'},
		{lang: 'Japanese', code: 'ja'},
		{lang: 'Javanese', code: 'jv'},
		{lang: 'Kannada', code: 'kn'},
		{lang: 'Kazakh', code: 'kk'},
		{lang: 'Khmer', code: 'km'},
		{lang: 'Kinyarwanda', code: 'rw'},
		{lang: 'Korean', code: 'ko'},
		{lang: 'Kurdish', code: 'ku'},
		{lang: 'Kyrgyz', code: 'ky'},
		{lang: 'Lao', code: 'lo'},
		{lang: 'Latin', code: 'la'},
		{lang: 'Latvian', code: 'lv'},
		{lang: 'Lithuanian', code: 'lt'},
		{lang: 'Luxembourgish', code: 'lb'},
		{lang: 'Macedonian', code: 'mk'},
		{lang: 'Malagasy', code: 'mg'},
		{lang: 'Malay', code: 'ms'},
		{lang: 'Malayalam', code: 'ml'},
		{lang: 'Maltese', code: 'mt'},
		{lang: 'Maori', code: 'mi'},
		{lang: 'Marathi', code: 'mr'},
		{lang: 'Mongolian', code: 'mn'},
		{lang: 'Myanmar (Burmese)', code: 'my'},
		{lang: 'Nepali', code: 'ne'},
		{lang: 'Norwegian', code: 'no'},
		{lang: 'Nyanja (Chichewa)', code: 'ny'},
		{lang: 'Odia (Oriya)', code: 'or'},
		{lang: 'Pashto', code: 'ps'},
		{lang: 'Persian', code: 'fa'},
		{lang: 'Polish', code: 'pl'},
		{lang: 'Portuguese', code: 'pt'},
		{lang: 'Punjabi', code: 'pa'},
		{lang: 'Romanian', code: 'ro'},
		{lang: 'Russian', code: 'ru'},
		{lang: 'Samoan', code: 'sm'},
		{lang: 'Scots Gaelic', code: 'gd'},
		{lang: 'Serbian', code: 'sr'},
		{lang: 'Sesotho', code: 'st'},
		{lang: 'Shona', code: 'sn'},
		{lang: 'Sindhi', code: 'sd'},
		{lang: 'Sinhala (Sinhalese)', code: 'si'},
		{lang: 'Slovak', code: 'sk'},
		{lang: 'Slovenian', code: 'sl'},
		{lang: 'Somali', code: 'so'},
		{lang: 'Spanish', code: 'es'},
		{lang: 'Sundanese', code: 'su'},
		{lang: 'Swahili', code: 'sw'},
		{lang: 'Swedish', code: 'sv'},
		{lang: 'Tagalog (Filipino)', code: 'tl'},
		{lang: 'Tajik', code: 'tg'},
		{lang: 'Tamil', code: 'ta'},
		{lang: 'Tatar', code: 'tt'},
		{lang: 'Telugu', code: 'te'},
		{lang: 'Thai', code: 'th'},
		{lang: 'Turkish', code: 'tr'},
		{lang: 'Turkmen', code: 'tk'},
		{lang: 'Ukrainian', code: 'uk'},
		{lang: 'Urdu', code: 'ur'},
		{lang: 'Uyghur', code: 'ug'},
		{lang: 'Uzbek', code: 'uz'},
		{lang: 'Vietnamese', code: 'vi'},
		{lang: 'Welsh', code: 'cy'},
		{lang: 'Xhosa', code: 'xh'},
		{lang: 'Yiddish', code: 'yi'},
		{lang: 'Yoruba', code: 'yo'},
		{lang: 'Zulu', code: 'zu'}
	];
	selectedLanguages = new FormControl(['en', 'de', 'fr', 'it']);

	jsonsPath = new FormControl('assets/i18n/');

	constructor(private readonly jsonToExcel: ConvertJsonToExcelService) {}

	public onClickExportAsExcelFIle(): void {
		this.jsonToExcel.convertJsonToExcel('test', this.selectedLanguages.value ?? [], this.jsonsPath.value ?? '');
	}
}
