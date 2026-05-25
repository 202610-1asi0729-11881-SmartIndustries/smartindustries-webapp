import {Component, inject} from '@angular/core';
import {MatButtonToggle, MatButtonToggleGroup} from '@angular/material/button-toggle';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-language-switcher',
  imports: [
    MatButtonToggleGroup,
    MatButtonToggle
  ],
  templateUrl: './language-switcher.html',
  styleUrl: './language-switcher.css',
})
export class LanguageSwitcher {
  protected currentLag: string = 'en';
  protected languages: string[] = ['en', 'es'];

  private translate: TranslateService;

  constructor() {
    this.translate = inject(TranslateService);
    this.currentLag = this.translate.getCurrentLang() || 'en';
  }

  useLanguage(language: string): void {
    this.translate.use(language);
    this.currentLag = language;
  }
}
