import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css'],
})
export class WrapperComponent {
  #content: TemplateRef<unknown>;

  get content() {
    return this.#content;
  }

  @Input() set content(content: TemplateRef<unknown>) {
    this.#content = content;
    console.log(content);
  }
}
